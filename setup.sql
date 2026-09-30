-- =====================================================================
--  BKI Lernplattform – Datenbank einrichten (Supabase)
--  Anleitung: Supabase -> SQL Editor -> "New query" -> alles einfügen -> "Run"
--  Das Skript kann gefahrlos mehrmals ausgeführt werden.
-- =====================================================================

create extension if not exists pgcrypto with schema extensions;

-- ---------------------------------------------------------------------
-- Tabellen
-- ---------------------------------------------------------------------
create table if not exists public.profiles (
  id             uuid primary key references auth.users(id) on delete cascade,
  benutzername   text unique not null,
  vorname        text not null default '',
  nachname       text not null default '',
  rolle          text not null default 'lernende' check (rolle in ('admin', 'lernende')),
  beruf          text check (beruf in ('EI', 'ME')),
  lehrjahr       int  check (lehrjahr between 1 and 4),
  aktiv          boolean not null default true,
  zuletzt_aktiv  timestamptz,
  erstellt_am    timestamptz not null default now()
);

create table if not exists public.fortschritt (
  user_id     uuid not null references public.profiles(id) on delete cascade,
  aufgabe_id  text not null,
  versuche    int not null default 0,
  bestes      numeric(4,3) not null default 0,
  letztes     numeric(4,3) not null default 0,
  zuletzt     timestamptz not null default now(),
  primary key (user_id, aufgabe_id)
);

create table if not exists public.aufgaben_status (
  aufgabe_id    text primary key,
  status        text not null default 'entwurf' check (status in ('entwurf', 'getestet', 'freigegeben')),
  geaendert_am  timestamptz not null default now()
);

create table if not exists public.einstellungen (
  schluessel  text primary key,
  wert        jsonb
);
insert into public.einstellungen (schluessel, wert) values ('fruehere_lehrjahre', 'true')
  on conflict (schluessel) do nothing;

-- Nach dem ersten Login bzw. nach einem Passwort-Reset muss das Passwort geändert werden
alter table public.profiles add column if not exists muss_pw_aendern boolean not null default false;

-- ---------------------------------------------------------------------
-- Hilfsfunktion: Ist die angemeldete Person Admin?
-- ---------------------------------------------------------------------
create or replace function public.ist_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and rolle = 'admin' and aktiv);
$$;

-- ---------------------------------------------------------------------
-- Zugriffsregeln (Row Level Security)
-- ---------------------------------------------------------------------
alter table public.profiles        enable row level security;
alter table public.fortschritt     enable row level security;
alter table public.aufgaben_status enable row level security;
alter table public.einstellungen   enable row level security;

drop policy if exists "profil lesen"   on public.profiles;
drop policy if exists "profil admin"   on public.profiles;
create policy "profil lesen" on public.profiles for select to authenticated using (id = auth.uid() or public.ist_admin());
create policy "profil admin" on public.profiles for all    to authenticated using (public.ist_admin()) with check (public.ist_admin());

drop policy if exists "fortschritt lesen"  on public.fortschritt;
drop policy if exists "fortschritt admin"  on public.fortschritt;
create policy "fortschritt lesen" on public.fortschritt for select to authenticated using (user_id = auth.uid() or public.ist_admin());
create policy "fortschritt admin" on public.fortschritt for delete to authenticated using (public.ist_admin());
-- Schreiben für Lernende nur über die Funktion fortschritt_speichern()

drop policy if exists "status lesen" on public.aufgaben_status;
drop policy if exists "status admin" on public.aufgaben_status;
create policy "status lesen" on public.aufgaben_status for select to authenticated using (true);
create policy "status admin" on public.aufgaben_status for all    to authenticated using (public.ist_admin()) with check (public.ist_admin());

drop policy if exists "einst lesen" on public.einstellungen;
drop policy if exists "einst admin" on public.einstellungen;
create policy "einst lesen" on public.einstellungen for select to authenticated using (true);
create policy "einst admin" on public.einstellungen for all    to authenticated using (public.ist_admin()) with check (public.ist_admin());

-- ---------------------------------------------------------------------
-- Funktionen für Lernende
-- ---------------------------------------------------------------------
create or replace function public.fortschritt_speichern(p_aufgabe_id text, p_ergebnis numeric)
returns void language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'Nicht angemeldet.'; end if;
  if p_ergebnis < 0 or p_ergebnis > 1 then raise exception 'Ungültiges Ergebnis.'; end if;
  insert into public.fortschritt as f (user_id, aufgabe_id, versuche, bestes, letztes, zuletzt)
    values (auth.uid(), p_aufgabe_id, 1, p_ergebnis, p_ergebnis, now())
  on conflict (user_id, aufgabe_id) do update
    set versuche = f.versuche + 1,
        bestes   = greatest(f.bestes, excluded.bestes),
        letztes  = excluded.letztes,
        zuletzt  = now();
  update public.profiles set zuletzt_aktiv = now() where id = auth.uid();
end $$;

create or replace function public.passwort_geaendert()
returns void language sql security definer set search_path = public as $$
  update public.profiles set muss_pw_aendern = false where id = auth.uid();
$$;

create or replace function public.aktivitaet_melden()
returns void language sql security definer set search_path = public as $$
  update public.profiles set zuletzt_aktiv = now() where id = auth.uid();
$$;

-- ---------------------------------------------------------------------
-- Admin-Funktionen
-- ---------------------------------------------------------------------

-- Liste aller Personen inkl. letzter Anmeldung
create or replace function public.admin_benutzer_liste()
returns table (id uuid, benutzername text, vorname text, nachname text, rolle text, beruf text, lehrjahr int,
               aktiv boolean, zuletzt_aktiv timestamptz, letzte_anmeldung timestamptz, erstellt_am timestamptz)
language plpgsql stable security definer set search_path = public, auth as $$
begin
  if not public.ist_admin() then raise exception 'Keine Berechtigung.'; end if;
  return query
    select p.id, p.benutzername, p.vorname, p.nachname, p.rolle, p.beruf, p.lehrjahr, p.aktiv,
           p.zuletzt_aktiv, u.last_sign_in_at, p.erstellt_am
    from public.profiles p join auth.users u on u.id = p.id
    order by p.lehrjahr nulls first, p.nachname;
end $$;

-- Neue Person erfassen (Login wird direkt angelegt, keine E-Mail nötig)
create or replace function public.admin_benutzer_erstellen(
  p_benutzername text, p_email text, p_passwort text, p_vorname text, p_nachname text,
  p_beruf text, p_lehrjahr int, p_rolle text default 'lernende')
returns uuid language plpgsql security definer set search_path = public, auth, extensions as $$
declare
  v_id uuid := gen_random_uuid();
  v_email text := lower(trim(p_email));
begin
  if not public.ist_admin() then raise exception 'Keine Berechtigung.'; end if;
  if length(coalesce(p_passwort, '')) < 6 then raise exception 'Das Passwort muss mindestens 6 Zeichen lang sein.'; end if;
  if exists (select 1 from public.profiles where benutzername = lower(trim(p_benutzername)))
     or exists (select 1 from auth.users where email = v_email) then
    raise exception 'Dieser Benutzername ist schon vergeben.';
  end if;

  insert into auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
                          raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
                          confirmation_token, recovery_token, email_change_token_new, email_change)
  values ('00000000-0000-0000-0000-000000000000', v_id, 'authenticated', 'authenticated', v_email,
          extensions.crypt(p_passwort, extensions.gen_salt('bf')), now(),
          '{"provider":"email","providers":["email"]}'::jsonb, '{}'::jsonb, now(), now(), '', '', '', '');

  insert into auth.identities (id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
  values (gen_random_uuid(), v_id, v_id::text,
          jsonb_build_object('sub', v_id::text, 'email', v_email, 'email_verified', true),
          'email', now(), now(), now());

  insert into public.profiles (id, benutzername, vorname, nachname, rolle, beruf, lehrjahr, muss_pw_aendern)
  values (v_id, lower(trim(p_benutzername)), trim(p_vorname), trim(p_nachname), p_rolle, p_beruf, p_lehrjahr, true);

  return v_id;
end $$;

-- Passwort einer Person neu setzen
create or replace function public.admin_passwort_setzen(p_user_id uuid, p_passwort text)
returns void language plpgsql security definer set search_path = public, auth, extensions as $$
begin
  if not public.ist_admin() then raise exception 'Keine Berechtigung.'; end if;
  if length(coalesce(p_passwort, '')) < 6 then raise exception 'Das Passwort muss mindestens 6 Zeichen lang sein.'; end if;
  update auth.users
     set encrypted_password = extensions.crypt(p_passwort, extensions.gen_salt('bf')), updated_at = now()
   where id = p_user_id;
  update public.profiles set muss_pw_aendern = true where id = p_user_id;
end $$;

-- Person endgültig löschen (inkl. Fortschritt)
create or replace function public.admin_benutzer_loeschen(p_user_id uuid)
returns void language plpgsql security definer set search_path = public, auth as $$
begin
  if not public.ist_admin() then raise exception 'Keine Berechtigung.'; end if;
  if p_user_id = auth.uid() then raise exception 'Du kannst dich nicht selbst löschen.'; end if;
  delete from auth.users where id = p_user_id;
end $$;

-- Aufrufrechte: nur angemeldete Personen
revoke all on function public.fortschritt_speichern(text, numeric)   from public, anon;
revoke all on function public.aktivitaet_melden()                      from public, anon;
revoke all on function public.passwort_geaendert()                     from public, anon;
revoke all on function public.admin_benutzer_liste()                   from public, anon;
revoke all on function public.admin_benutzer_erstellen(text, text, text, text, text, text, int, text) from public, anon;
revoke all on function public.admin_passwort_setzen(uuid, text)        from public, anon;
revoke all on function public.admin_benutzer_loeschen(uuid)            from public, anon;
grant execute on function public.fortschritt_speichern(text, numeric)  to authenticated;
grant execute on function public.aktivitaet_melden()                     to authenticated;
grant execute on function public.passwort_geaendert()                    to authenticated;
grant execute on function public.admin_benutzer_liste()                  to authenticated;
grant execute on function public.admin_benutzer_erstellen(text, text, text, text, text, text, int, text) to authenticated;
grant execute on function public.admin_passwort_setzen(uuid, text)       to authenticated;
grant execute on function public.admin_benutzer_loeschen(uuid)           to authenticated;

-- ---------------------------------------------------------------------
-- Erster Admin (DICH) festlegen – nur einmal nötig.
-- 1) Supabase -> Authentication -> Users -> "Add user" -> "Create new user"
--    E-Mail + Passwort eingeben, "Auto Confirm User" anhaken.
-- 2) Unten deine E-Mail-Adresse eintragen, nur diesen Block markieren und "Run".
-- ---------------------------------------------------------------------
-- insert into public.profiles (id, benutzername, vorname, nachname, rolle)
-- select id, lower(email), 'Roman', 'Lieberherr', 'admin' from auth.users where email = 'DEINE-EMAIL@beispiel.ch'
-- on conflict (id) do update set rolle = 'admin', aktiv = true;
