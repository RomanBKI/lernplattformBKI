# BKI Lernplattform – Anleitung

Lernplattform für Lernende **Elektroinstallateur/in EFZ** und **Montage-Elektriker/in EFZ**.
Die Lernenden öffnen sie auf dem Handy in Safari, ohne App Store und ohne Claude- oder GitHub-Konto.

---

## So hängt alles zusammen

| Teil | Wofür | Kosten |
|---|---|---|
| **GitHub Pages** | Speichert die Webseite (Programm und Aufgaben) und stellt sie online | gratis |
| **Supabase** | Logins, Fortschritt, letzte Anmeldung, Freigabe-Status der Aufgaben | gratis (Free Plan) |
| **Claude** | Neue Aufgaben erstellen und die App anpassen, lädt Änderungen direkt auf GitHub hoch | – |

```
Du (Admin)  ──►  Claude erstellt Aufgaben  ──►  GitHub (Entwurf)
     │                                              │
     └── Admin-Bereich: Testen → Freischalten ──►  Lernende sehen die Aufgabe
```

---

## Schritt 1 – Demo ausprobieren (sofort, ohne Einrichtung)

Öffne `index.html` im Browser oder die Demo, die ich dir auf claude.ai veröffentlicht habe.

- Admin: `admin` / `admin`
- Lernende: `lea.meier` (1. Lehrjahr), `noah.keller` (3. Lehrjahr), Passwort `lernen`

Im Demo-Modus wird alles nur auf diesem Gerät gespeichert.

---

## Schritt 2 – Webseite auf GitHub Pages stellen (ca. 10 Min.)

1. Auf **github.com** ein Gratis-Konto erstellen. Der Benutzername erscheint in der Adresse, z. B. `bki-lernen`.
2. Oben rechts auf **＋ → New repository** klicken.
   - Name: `lernplattform`
   - **Public** auswählen (GitHub Pages ist im Gratis-Plan nur für öffentliche Projekte verfügbar, siehe Hinweis unten)
   - **Create repository** klicken
3. Im neuen Repository auf **«uploading an existing file»** klicken. Den **Inhalt** des ZIP-Ordners hineinziehen (die Ordner `css`, `js`, `data`, `icons`, `supabase` und alle Dateien). Dann **Commit changes** klicken.
4. **Settings → Pages** öffnen: Unter «Source» **Deploy from a branch** wählen, Branch **main**, Ordner **/ (root)**, dann **Save**.
5. Nach 1–2 Minuten ist die App online unter
   `https://BENUTZERNAME.github.io/lernplattform/`

> **Hinweis «Public»:** Öffentlich sichtbar sind nur der Programmcode und die Aufgaben mit ihren Lösungen. **Passwörter, Namen und Fortschritt der Lernenden liegen nie auf GitHub**, sondern geschützt in Supabase. Passwörter speichert Supabase nur verschlüsselt (bcrypt-Hash); auch du als Admin siehst sie nicht, du kannst sie nur neu setzen. Wer sich auskennt, könnte die *Lösungen der Aufgaben* im Quellcode nachschauen. Für eine Lernplattform ist das unproblematisch, für bewertete Prüfungen wäre es das nicht.

---

## Schritt 3 – Logins einrichten mit Supabase (ca. 15 Min.)

1. Auf **supabase.com** ein Gratis-Konto erstellen. Du kannst dich direkt mit deinem GitHub-Konto anmelden.
2. **New project** anlegen:
   - Name: `bki-lernplattform`
   - Datenbank-Passwort: gut aufbewahren
   - **Region: Europa** wählen (Zürich, falls angeboten, sonst Frankfurt)
3. Links **SQL Editor → New query** öffnen. Den ganzen Inhalt der Datei `supabase/setup.sql` hineinkopieren und **Run** klicken. Das Ergebnis sollte «Success» sein.
4. **Öffentliche Registrierung ausschalten:** Unter **Authentication → Sign In / Providers** (bzw. Settings) die Option **«Allow new users to sign up»** ausschalten. Neue Konten erstellst nur du im Admin-Bereich.
5. **Dich selbst als Admin anlegen:**
   - **Authentication → Users → Add user → Create new user**
   - Deine E-Mail und ein Passwort eingeben, **Auto Confirm User** anhaken
   - Zurück in den **SQL Editor**, neue Abfrage, das Folgende einfügen (mit deiner E-Mail) und **Run** klicken:
     ```sql
     insert into public.profiles (id, benutzername, vorname, nachname, rolle)
     select id, lower(email), 'Roman', 'Lieberherr', 'admin' from auth.users where email = 'DEINE-EMAIL@beispiel.ch'
     on conflict (id) do update set rolle = 'admin', aktiv = true;
     ```
6. **Verbindung eintragen:** Unter **Project Settings → API** (bzw. «Data API» / «API Keys») die **Project URL** und den **anon public key** kopieren. In der Datei `config.js` eintragen:
   ```js
   SUPABASE_URL: "https://xxxx.supabase.co",
   SUPABASE_ANON_KEY: "eyJhbGciOi…",
   ```
   Auf GitHub geht das so: Datei `config.js` öffnen, auf den Stift ✏️ klicken, ändern, **Commit changes**. Oder du gibst mir die zwei Werte, dann trage ich sie ein.
   Den anon-Key darf man veröffentlichen. Die Daten sind über die Datenbank-Regeln geschützt. Den **service_role**-Key aber **nie** weitergeben oder eintragen!

7. **Mindestlänge für Passwörter:** Unter **Authentication → Sign In / Providers → Email** (bzw. «Password settings») die minimale Passwortlänge auf **8** stellen.

Danach meldest du dich in der App mit **deiner E-Mail** und deinem Passwort an und landest im Admin-Bereich.
Wähle für deinen Admin-Zugang ein **langes, einzigartiges Passwort** – er ist der wichtigste Schlüssel der Plattform.

---

## Schritt 4 – Lernende erfassen und aufs iPhone bringen

1. Im Admin-Bereich **＋ Lernende:n erfassen** tippen: Vorname, Nachname, Beruf und Lehrjahr eingeben. Benutzername und Startpasswort werden vorgeschlagen.
2. Die angezeigten **Zugangsdaten kopieren** und der lernenden Person schicken, z. B. per WhatsApp.
3. Die Person öffnet den Link in **Safari**, tippt auf **Teilen** (Quadrat mit Pfeil) und dann auf **«Zum Home-Bildschirm»**. Jetzt hat sie ein App-Symbol auf dem Handy.

> Tipp: Teste zuerst mit einem eigenen Test-Konto (z. B. `test.lernender`), ob die Anmeldung auf dem iPhone klappt.

**Erstes Login:** Beim ersten Anmelden muss jede lernende Person das Startpasswort durch ein eigenes ersetzen (mind. 8 Zeichen).
**Passwort vergessen?** Admin → Lernende:n antippen → **Passwort neu setzen**. Beim nächsten Login muss wieder ein eigenes Passwort gewählt werden.
**Lehrabschluss / Austritt:** Bearbeiten → Status **deaktiviert**. Das Login ist dann gesperrt, der Fortschritt bleibt erhalten.
**Neues Lehrjahr (August):** Admin → **Lehrjahr-Wechsel**. Alle aktiven Lernenden rücken ein Lehrjahr auf.

---

## Schritt 5 – Claude Zugriff geben, damit ich Änderungen direkt hochladen kann

1. GitHub → Profilbild → **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**
2. Name: `Claude Lernplattform`. Ablauf: z. B. 1 Jahr.
3. **Repository access: Only select repositories →** `lernplattform`
4. **Permissions → Repository permissions → Contents: Read and write**
5. **Generate token** klicken und den Schlüssel (beginnt mit `github_pat_…`) in den Chat mit mir kopieren.

Der Schlüssel gilt **nur für dieses eine Projekt**. Du kannst ihn jederzeit auf GitHub löschen.

---

## Im Alltag: Neue Aufgaben erstellen, testen, freischalten

1. **Du:** Schreib mir, was du brauchst, z. B. «10 Aufgaben zu Überstromschutz für das 2. Lehrjahr», und lade das passende Kapitel aus dem Fachbuch hoch.
2. **Ich:** Ich erstelle die Aufgaben passend zum Leistungsziel und lade sie als **Entwurf** hoch. Die Lernenden sehen sie noch nicht.
3. **Du:** Admin → **Aufgaben** → Filter «Entwurf» → **Testen**. Löse jede Aufgabe selbst und prüfe Frage, Antwort und Erklärung.
   - Stimmt alles: **✓ Als getestet markieren** oder direkt **Freischalten**
   - Ist etwas falsch: Schreib mir, was nicht stimmt. Ich korrigiere es.
4. Freigeschaltete Aufgaben sehen alle Lernenden des passenden Berufs und Lehrjahrs sofort.

**Wer sieht was?**
- Lernende sehen nur Aufgaben ihres **eigenen und früherer Lehrjahre**, nie die von höheren. Unter «Optionen» kannst du einstellen, dass sie nur das eigene Lehrjahr sehen.
- **QV-Aufgaben** erscheinen nur im letzten Lehrjahr: im 4. Lehrjahr bei EI, im 3. Lehrjahr bei ME.
- Mit **Lernansicht (Vorschau)** im Menü siehst du die App genau so wie ein bestimmtes Lehrjahr.

**Aufgabentypen:** Auswahl (eine oder mehrere Antworten), Richtig/Falsch, Zuordnen (auch mit Bild), Reihenfolge, Lückentext, Berechnen (mit Toleranz und Einheit), Beschreiben (Bild oder Situation in eigenen Worten, geprüft über Fachbegriffe, mit Musterlösung).

---

## Grosse PDFs (Fachbücher über 30 MB)

- **Nach Kapiteln aufteilen** (am besten, weil ich für eine Aufgabenserie meist nur ein Kapitel brauche):
  - **Mac:** PDF in **Vorschau** öffnen → Seitenleiste → Seiten markieren → auf den Schreibtisch ziehen. So entsteht ein neues PDF.
  - **Windows:** **Microsoft Edge** oder **Adobe Reader** → Drucken → Seitenbereich → Drucker «Microsoft Print to PDF»
  - **Adobe Acrobat:** «Seiten verwalten» → «Teilen»
- **Verkleinern:** Mit «PDF komprimieren» (Acrobat, oder auf dem Mac in Vorschau: Exportieren → Quartz-Filter «Reduce File Size»). Achtung: Bilder und Schemas werden dabei unschärfer.
- Bitte keine Fachbücher auf fremde Online-Konverter hochladen, wegen Urheberrecht und Datenschutz.

**Urheberrecht:** Ich formuliere die Aufgaben selbst anhand der Fachbücher und übernehme keine ganzen Texte oder Abbildungen 1:1. Abbildungen zeichne ich neu, falls nötig.

---

## Gut zu wissen

- **Supabase-Gratisprojekte** werden nach längerer Inaktivität (soweit ich weiss etwa 1 Woche ohne Zugriff) pausiert. Das kann zum Beispiel in den Sommerferien passieren. Dann auf supabase.com einloggen und das Projekt mit **Restore** wieder starten. Die Daten bleiben erhalten.
- **Export:** Admin → Lernende → **Export (CSV)** erstellt eine Excel-taugliche Liste mit dem Fortschritt aller Lernenden.
- **Datenschutz:** In Supabase gespeichert werden nur Vorname, Nachname, Benutzername, Beruf, Lehrjahr, Lernfortschritt und Anmeldezeiten. Es braucht keine E-Mail-Adressen der Lernenden. Informiere die Lernenden, welche Daten gespeichert werden und dass du ihren Fortschritt siehst.
- **Montage-Elektriker/in:** Für den Lehrplan fehlen mir noch die Unterlagen (Lehrplan Berufsfachschule ME). Grundlagenaufgaben sind schon für beide Berufe markiert.

---

## Aufbau der Dateien

```
index.html              Startseite der App
config.js               Einstellungen (Supabase-Verbindung, Name)
css/app.css             Aussehen
js/                     Programm (Login, Lernbereich, Admin, Aufgabentypen)
data/lehrplan.js        Lehrplan EI (EIT.swiss, BiVo 2026): Bereiche a–f, 59 Leistungsziele, üK 4, QV
data/aufgaben/*.js      Aufgaben pro Lehrjahr und QV
supabase/setup.sql      Datenbank einrichten
manifest.webmanifest, sw.js, icons/   App-Symbol und Offline-Funktion
```

---

## Lernkarten

Neben den Aufgaben gibt es **Lernkarten**: Vorderseite lesen, **umdrehen**, dann selbst einschätzen mit «Nicht gewusst», «Teilweise» oder «Gewusst». Nicht gewusste Karten kommen beim nächsten Mal zuerst. Lernende finden sie auf der Startseite (🃏 Lernkarten) und auf jeder Fachseite.

## Dateien im GitHub-Projekt (flach, ohne Unterordner)

Alle Dateien liegen direkt im Hauptordner. Neue Aufgaben-Serien kommen als eigene Dateien dazu (z. B. `s1-lj1.js`, `s1-karten.js`) und werden in `index.html` eingetragen. Zeichnungen für Aufgaben liegen in `bilder.js`.
