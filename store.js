/*
 * Datenzugriff – zwei Varianten mit identischer Schnittstelle:
 *  - SupabaseStore: echte Datenbank mit Logins (Produktivbetrieb)
 *  - DemoStore:     alles im Browser gespeichert (zum Ausprobieren)
 */
(function () {
  const CFG = window.APP_CONFIG || {};
  const S = U.speicher;

  function emailAus(benutzername) {
    const b = String(benutzername || "").trim().toLowerCase();
    return b.includes("@") ? b : `${b}@${CFG.LOGIN_DOMAIN}`;
  }

  /* ------------------------------------------------------------------ */
  /* DEMO                                                               */
  /* ------------------------------------------------------------------ */
  function DemoStore() {
    const K = "bki-demo-v1";
    const jetzt = () => new Date().toISOString();
    const vorTagen = (t) => new Date(Date.now() - t * 86400000).toISOString();

    function seed() {
      const users = [
        { id: "u-admin", benutzername: "admin", passwort: "admin", rolle: "admin", vorname: "Roman", nachname: "Lieberherr", beruf: null, lehrjahr: null, aktiv: true, letzte_anmeldung: null, zuletzt_aktiv: null },
        { id: "u-1", benutzername: "lea.meier", passwort: "lernen", rolle: "lernende", vorname: "Lea", nachname: "Meier", beruf: "EI", lehrjahr: 1, aktiv: true, letzte_anmeldung: vorTagen(1), zuletzt_aktiv: vorTagen(1) },
        { id: "u-2", benutzername: "noah.keller", passwort: "lernen", rolle: "lernende", vorname: "Noah", nachname: "Keller", beruf: "EI", lehrjahr: 3, aktiv: true, letzte_anmeldung: vorTagen(4), zuletzt_aktiv: vorTagen(4) },
        { id: "u-3", benutzername: "luca.brunner", passwort: "lernen", rolle: "lernende", vorname: "Luca", nachname: "Brunner", beruf: "ME", lehrjahr: 2, aktiv: true, letzte_anmeldung: null, zuletzt_aktiv: null }
      ];
      // Freigabestatus: in der Demo sind die meisten Beispielaufgaben freigegeben,
      // einige bewusst noch "Entwurf", damit der Ablauf sichtbar ist.
      const status = {};
      (window.AUFGABEN || []).forEach((a) => { status[a.id] = { status: a.demo_status || "freigegeben", geaendert_am: vorTagen(7) }; });
      const fortschritt = {
        "u-1": {},
        "u-2": {}
      };
      const lj1 = (window.AUFGABEN || []).filter((a) => a.lehrjahr === 1).slice(0, 4);
      lj1.forEach((a, i) => { fortschritt["u-1"][a.id] = { versuche: 1 + (i % 2), bestes: i === 3 ? 0.5 : 1, letztes: i === 3 ? 0.5 : 1, zuletzt: vorTagen(1) }; });
      (window.AUFGABEN || []).filter((a) => a.lehrjahr <= 2).slice(0, 7).forEach((a) => {
        fortschritt["u-2"][a.id] = { versuche: 1, bestes: 1, letztes: 1, zuletzt: vorTagen(4) };
      });
      return { users, status, fortschritt, einstellungen: { fruehere_lehrjahre: true }, session: null };
    }

    let db = S.get(K, null) || seed();
    const save = () => S.set(K, db);
    save();
    const clone = (o) => JSON.parse(JSON.stringify(o));
    const pub = (u) => { const c = clone(u); delete c.passwort; return c; };
    const me = () => db.users.find((u) => u.id === db.session);
    const needAdmin = () => { const m = me(); if (!m || m.rolle !== "admin") throw new Error("Keine Berechtigung."); };

    return {
      demo: true,
      async init() { const m = me(); return m && m.aktiv ? pub(m) : null; },
      async login(benutzername, passwort) {
        const b = String(benutzername || "").trim().toLowerCase();
        const u = db.users.find((x) => x.benutzername === b);
        if (!u || u.passwort !== passwort) throw new Error("Benutzername oder Passwort ist falsch.");
        if (!u.aktiv) throw new Error("Dein Zugang ist deaktiviert. Melde dich bei deinem Berufsbildner.");
        u.letzte_anmeldung = jetzt(); u.zuletzt_aktiv = jetzt(); db.session = u.id; save();
        return pub(u);
      },
      async logout() { db.session = null; save(); },
      async passwortAendern(neu) {
        const m = me(); if (!m) throw new Error("Nicht angemeldet.");
        m.passwort = neu; m.muss_pw_aendern = false; save();
      },
      async meinFortschritt() { return clone(db.fortschritt[db.session] || {}); },
      async ergebnisSpeichern(aufgabeId, ergebnis) {
        const f = (db.fortschritt[db.session] = db.fortschritt[db.session] || {});
        const alt = f[aufgabeId] || { versuche: 0, bestes: 0 };
        f[aufgabeId] = { versuche: alt.versuche + 1, bestes: Math.max(alt.bestes || 0, ergebnis), letztes: ergebnis, zuletzt: jetzt() };
        const m = me(); if (m) m.zuletzt_aktiv = jetzt();
        save();
      },
      async aufgabenStatus() { return clone(db.status); },
      async einstellungen() { return clone(db.einstellungen); },

      // --- Admin ---
      async setzeAufgabenStatus(id, status) { needAdmin(); db.status[id] = { status, geaendert_am: jetzt() }; save(); },
      async setzeEinstellung(k, v) { needAdmin(); db.einstellungen[k] = v; save(); },
      async benutzerListe() { needAdmin(); return db.users.map(pub); },
      async alleFortschritte() { needAdmin(); return clone(db.fortschritt); },
      async benutzerErstellen(d) {
        needAdmin();
        const b = String(d.benutzername).trim().toLowerCase();
        if (db.users.some((u) => u.benutzername === b)) throw new Error("Dieser Benutzername ist schon vergeben.");
        const u = { id: "u-" + Math.random().toString(36).slice(2, 9), benutzername: b, passwort: d.passwort, rolle: d.rolle || "lernende",
          vorname: d.vorname, nachname: d.nachname, beruf: d.beruf, lehrjahr: Number(d.lehrjahr), aktiv: true, letzte_anmeldung: null, zuletzt_aktiv: null, muss_pw_aendern: true };
        db.users.push(u); save(); return pub(u);
      },
      async benutzerAendern(id, felder) {
        needAdmin();
        const u = db.users.find((x) => x.id === id); if (!u) throw new Error("Nicht gefunden.");
        ["vorname", "nachname", "beruf", "lehrjahr", "aktiv"].forEach((k) => { if (k in felder) u[k] = felder[k]; });
        save();
      },
      async passwortSetzen(id, pw) { needAdmin(); const u = db.users.find((x) => x.id === id); u.passwort = pw; u.muss_pw_aendern = true; save(); },
      async benutzerLoeschen(id) {
        needAdmin(); db.users = db.users.filter((u) => u.id !== id); delete db.fortschritt[id]; save();
      },
      async fortschrittZuruecksetzen(id) { needAdmin(); db.fortschritt[id] = {}; save(); },
      demoZuruecksetzen() { S.del(K); location.reload(); }
    };
  }

  /* ------------------------------------------------------------------ */
  /* SUPABASE                                                           */
  /* ------------------------------------------------------------------ */
  function SupabaseStore() {
    const sb = window.supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, storageKey: "bki-lernen-auth" }
    });
    let profil = null;
    const ok = ({ data, error }) => { if (error) throw new Error(uebersetze(error.message)); return data; };

    function uebersetze(msg) {
      if (/Invalid login credentials/i.test(msg)) return "Benutzername oder Passwort ist falsch.";
      if (/Password should be at least/i.test(msg)) return "Das Passwort muss mindestens 6 Zeichen lang sein.";
      if (/duplicate key|already/i.test(msg)) return "Dieser Benutzername ist schon vergeben.";
      if (/Failed to fetch|NetworkError/i.test(msg)) return "Keine Internetverbindung.";
      return msg;
    }

    async function ladeProfil() {
      const { data: { user } } = await sb.auth.getUser();
      if (!user) return null;
      const p = ok(await sb.from("profiles").select("*").eq("id", user.id).maybeSingle());
      if (!p) { await sb.auth.signOut(); throw new Error("Für diesen Zugang ist kein Profil erfasst."); }
      if (!p.aktiv) { await sb.auth.signOut(); throw new Error("Dein Zugang ist deaktiviert. Melde dich bei deinem Berufsbildner."); }
      profil = p;
      sb.rpc("aktivitaet_melden").then(() => {}, () => {});
      return p;
    }

    const mapF = (rows) => {
      const f = {};
      (rows || []).forEach((r) => { f[r.aufgabe_id] = { versuche: r.versuche, bestes: Number(r.bestes), letztes: Number(r.letztes), zuletzt: r.zuletzt }; });
      return f;
    };

    return {
      demo: false,
      async init() {
        const { data } = await sb.auth.getSession();
        if (!data.session) return null;
        try { return await ladeProfil(); } catch (e) { return null; }
      },
      async login(benutzername, passwort) {
        ok(await sb.auth.signInWithPassword({ email: emailAus(benutzername), password: passwort }));
        return ladeProfil();
      },
      async logout() { await sb.auth.signOut(); profil = null; },
      async passwortAendern(neu) {
        ok(await sb.auth.updateUser({ password: neu }));
        ok(await sb.rpc("passwort_geaendert"));
        if (profil) profil.muss_pw_aendern = false;
      },
      async meinFortschritt() {
        return mapF(ok(await sb.from("fortschritt").select("*").eq("user_id", profil.id)));
      },
      async ergebnisSpeichern(aufgabeId, ergebnis) {
        ok(await sb.rpc("fortschritt_speichern", { p_aufgabe_id: aufgabeId, p_ergebnis: ergebnis }));
      },
      async aufgabenStatus() {
        const rows = ok(await sb.from("aufgaben_status").select("*"));
        const m = {}; rows.forEach((r) => { m[r.aufgabe_id] = { status: r.status, geaendert_am: r.geaendert_am }; });
        return m;
      },
      async einstellungen() {
        const rows = ok(await sb.from("einstellungen").select("*"));
        const e = { fruehere_lehrjahre: true }; rows.forEach((r) => { e[r.schluessel] = r.wert; });
        return e;
      },
      // --- Admin ---
      async setzeAufgabenStatus(id, status) {
        ok(await sb.from("aufgaben_status").upsert({ aufgabe_id: id, status, geaendert_am: new Date().toISOString() }));
      },
      async setzeEinstellung(k, v) { ok(await sb.from("einstellungen").upsert({ schluessel: k, wert: v })); },
      async benutzerListe() { return ok(await sb.rpc("admin_benutzer_liste")); },
      async alleFortschritte() {
        const rows = ok(await sb.from("fortschritt").select("*"));
        const m = {};
        rows.forEach((r) => { (m[r.user_id] = m[r.user_id] || {})[r.aufgabe_id] = { versuche: r.versuche, bestes: Number(r.bestes), letztes: Number(r.letztes), zuletzt: r.zuletzt }; });
        return m;
      },
      async benutzerErstellen(d) {
        return ok(await sb.rpc("admin_benutzer_erstellen", {
          p_benutzername: String(d.benutzername).trim().toLowerCase(), p_email: emailAus(d.benutzername), p_passwort: d.passwort,
          p_vorname: d.vorname, p_nachname: d.nachname, p_beruf: d.beruf, p_lehrjahr: Number(d.lehrjahr), p_rolle: d.rolle || "lernende"
        }));
      },
      async benutzerAendern(id, felder) {
        const erlaubt = {}; ["vorname", "nachname", "beruf", "lehrjahr", "aktiv"].forEach((k) => { if (k in felder) erlaubt[k] = felder[k]; });
        ok(await sb.from("profiles").update(erlaubt).eq("id", id));
      },
      async passwortSetzen(id, pw) { ok(await sb.rpc("admin_passwort_setzen", { p_user_id: id, p_passwort: pw })); },
      async benutzerLoeschen(id) { ok(await sb.rpc("admin_benutzer_loeschen", { p_user_id: id })); },
      async fortschrittZuruecksetzen(id) { ok(await sb.from("fortschritt").delete().eq("user_id", id)); }
    };
  }

  window.Store = (CFG.SUPABASE_URL && window.supabase) ? SupabaseStore() : DemoStore();
})();
