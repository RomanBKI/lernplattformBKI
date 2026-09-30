/* Serie 1 – Aufgaben 2. Lehrjahr (Entwurf) */
AUFGABEN.push(
  {
    id: "s1-lj2-ls-ausloeser-01", typ: "zuordnen", lehrjahr: 2, berufe: ["EI", "ME"], fach: "c", lz: "c3.2",
    titel: "Auslöser im Leitungsschutzschalter",
    frage: "Ordne die Bereiche der Auslösekennlinie (Bild) den Auslösern zu.",
    bild: "lskennlinie",
    paare: [
      { links: "Bereich 1 (gekrümmt, langsam)", rechts: "Thermischer Auslöser (Bimetall) – Überlast" },
      { links: "Bereich 2 (senkrecht, sofort)", rechts: "Elektromagnetischer Auslöser – Kurzschluss" }
    ],
    ablenker: ["Fehlerstromauslöser"],
    erklaerung: "Der Bimetall-Auslöser reagiert verzögert auf Überlast, der Magnetauslöser löst bei hohen Strömen unverzögert aus: B bei 3–5 × In, C bei 5–10 × In.",
    quelle: "Fachkunde Elektrotechnik, Kap. 10.4.1–10.4.3; Basiswissen, Kap. 14", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-ls-beschriftung-01", typ: "zuordnen", lehrjahr: 2, berufe: ["EI", "ME"], fach: "c", lz: "c3.4",
    titel: "Beschriftung eines LS: C13 / 6000",
    frage: "Auf einem Leitungsschutzschalter steht «C13» und «6000». Was bedeutet das?",
    paare: [
      { links: "C", rechts: "Auslösecharakteristik (magnetisch 5–10 × In)" },
      { links: "13", rechts: "Bemessungsstrom In = 13 A" },
      { links: "6000", rechts: "Schaltvermögen 6000 A (6 kA)" }
    ],
    erklaerung: "Das Schaltvermögen muss grösser sein als der maximal mögliche Kurzschlussstrom am Einbauort.",
    quelle: "Basiswissen für Elektroberufe, Kap. 14.3 Beschriftung eines LS", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-selektivitaet-01", typ: "auswahl", lehrjahr: 2, berufe: ["EI"], fach: "b", lz: "b1.1",
    titel: "Selektivität",
    frage: "Was bedeutet «Selektivität» bei Schutzorganen?",
    optionen: [
      "Bei einem Fehler schaltet nur das Schutzorgan ab, das dem Fehler am nächsten liegt",
      "Alle Schutzorgane schalten gleichzeitig ab",
      "Das Schutzorgan kann zwischen L und N unterscheiden",
      "Die Sicherung wählt ihren Nennstrom selbst"
    ],
    richtig: [0],
    erklaerung: "So bleibt der Rest der Anlage in Betrieb. Beispiel: Der LS im Stromkreis löst aus, die Hauptsicherung im Hausanschluss bleibt drin.",
    quelle: "Fachkunde Elektrotechnik, Kap. 10.4.4; Basiswissen, Kap. 14", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-spannungsfall-01", typ: "rechnen", lehrjahr: 2, berufe: ["EI"], fach: "a", lz: "a2.5",
    titel: "Spannungsfall berechnen",
    frage: "Ein Stromkreis 230 V ist 25 m lang (einfache Länge), Querschnitt 2,5 mm² Cu, Laststrom 16 A, cos φ = 1.\nκ (Cu) = 56 m/(Ω·mm²). Wie gross ist der Spannungsfall in Volt?",
    loesung: 5.71, einheit: "V", toleranz: 0.01,
    hinweis: "ΔU = 2 · l · I · cos φ / (κ · A)",
    erklaerung: "ΔU = 2 · 25 m · 16 A / (56 · 2,5 mm²) = 800 / 140 ≈ 5,71 V ≈ 2,5 % von 230 V. Laut NIN 5.2.5 soll der Spannungsfall in der ganzen Installation 4 % nicht überschreiten.",
    quelle: "Fachkunde Elektrotechnik, Kap. 10.5.1; Erstprüfung (2025), Abschnitt Spannungsfall", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-effektivwert-01", typ: "rechnen", lehrjahr: 2, berufe: ["EI"], fach: "a", lz: "a2.4",
    titel: "Scheitelwert der Netzspannung",
    frage: "Die Netzspannung beträgt 230 V (Effektivwert). Wie gross ist der Scheitelwert û?",
    loesung: 325.3, einheit: "V", toleranz: 0.01,
    erklaerung: "û = U · √2 = 230 V · 1,414 ≈ 325 V. Isolationen müssen also mehr als 230 V aushalten!",
    quelle: "Fachkunde Elektrotechnik, Kap. 7.2.4", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-periode-01", typ: "rechnen", lehrjahr: 2, berufe: ["EI"], fach: "a", lz: "a2.4",
    titel: "Periodendauer",
    frage: "Wie lange dauert eine Periode der Netzspannung mit 50 Hz? (Angabe in ms)",
    loesung: 20, einheit: "ms", toleranz: 0.01,
    erklaerung: "T = 1 / f = 1 / 50 Hz = 0,02 s = 20 ms",
    quelle: "Fachkunde Elektrotechnik, Kap. 7.1", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-drehstrom-01", typ: "luecke", lehrjahr: 2, berufe: ["EI"], fach: "d", lz: "d2.1",
    titel: "Spannungen im Drehstromnetz",
    frage: "Ergänze die Werte im Niederspannungsnetz der Schweiz (nur Zahl).",
    text: "Zwischen zwei Aussenleitern misst man {{400}} V.\nZwischen einem Aussenleiter und N misst man {{230}} V.\nDer Verkettungsfaktor beträgt √3 ≈ {{1,73|1.73|1,732|1.732}}.",
    erklaerung: "U_Aussenleiter = √3 · U_Strang = 1,73 · 230 V ≈ 400 V",
    quelle: "Fachkunde Elektrotechnik, Kap. 7.8.2 Verkettung", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-netzsysteme-01", typ: "zuordnen", lehrjahr: 2, berufe: ["EI"], fach: "d", lz: "d2.1",
    titel: "Netzsysteme erkennen",
    frage: "Welches Netzsystem ist im Bild dargestellt?",
    bild: "netzsysteme",
    paare: [
      { links: "System A", rechts: "TN-S (N und PE überall getrennt)" },
      { links: "System B", rechts: "TN-C (PEN-Leiter gemeinsam)" },
      { links: "System C", rechts: "TN-C-S (zuerst PEN, dann aufgeteilt)" }
    ],
    ablenker: ["TT-System"],
    erklaerung: "In Gebäuden wird der PEN meist im Hausanschluss oder in der Hauptverteilung in N und PE aufgeteilt. Nach der Auftrennung dürfen N und PE nie wieder verbunden werden!",
    quelle: "Fachkunde Elektrotechnik, Kap. 11.4; Basiswissen, Kap. 1.2 Netzformen", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-kontakte-01", typ: "zuordnen", lehrjahr: 2, berufe: ["EI", "ME"], fach: "c", lz: "c3.3",
    titel: "Schliesser und Öffner",
    frage: "Wie heissen die beiden Kontakte im Bild (Ruhestellung)?",
    bild: "kontakte",
    paare: [
      { links: "Kontakt 1", rechts: "Schliesser (im Ruhezustand offen)" },
      { links: "Kontakt 2", rechts: "Öffner (im Ruhezustand geschlossen)" }
    ],
    ablenker: ["Wechsler"],
    erklaerung: "Schliesser schliessen bei Betätigung, Öffner öffnen bei Betätigung. Beim Schütz: Hauptkontakte sind Schliesser, Hilfskontakte gibt es als Schliesser und Öffner.",
    quelle: "Basiswissen für Elektroberufe, Kap. 20 Steuerungen", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-sterndreieck-01", typ: "zuordnen", lehrjahr: 2, berufe: ["EI"], fach: "c", lz: "c4.1",
    titel: "Stern und Dreieck",
    frage: "Wie heissen die beiden Schaltungen im Bild?",
    bild: "sterndreieck",
    paare: [
      { links: "Schaltung A", rechts: "Sternschaltung (Y)" },
      { links: "Schaltung B", rechts: "Dreieckschaltung (Δ)" }
    ],
    erklaerung: "Stern: Jede Wicklung liegt an 230 V. Dreieck: Jede Wicklung liegt an 400 V.",
    quelle: "Fachkunde Elektrotechnik, Kap. 7.8; Basiswissen, Kap. 20.24", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-sterndreieck-02", typ: "auswahl", lehrjahr: 2, berufe: ["EI"], fach: "c", lz: "c4.1",
    titel: "Wozu Stern-Dreieck-Anlauf?",
    frage: "Warum werden grössere Drehstrommotoren oft im Stern angelassen und danach auf Dreieck umgeschaltet?",
    optionen: [
      "Um den hohen Anlaufstrom zu reduzieren (auf etwa ein Drittel)",
      "Um die Drehrichtung zu ändern",
      "Damit der Motor schneller dreht",
      "Um den Schutzleiter zu entlasten"
    ],
    richtig: [0],
    erklaerung: "Im Stern liegt an jeder Wicklung nur 230 V statt 400 V – Anlaufstrom und Anlaufmoment sinken auf ca. 1/3.",
    quelle: "Basiswissen für Elektroberufe, Kap. 20.24", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-sps-01", typ: "reihenfolge", lehrjahr: 2, berufe: ["EI"], fach: "c", lz: "c4.1",
    titel: "Zyklus einer SPS",
    frage: "In welcher Reihenfolge arbeitet eine SPS einen Zyklus ab?",
    schritte: ["Zustände der Eingänge einlesen (Prozessabbild)", "Programm Schritt für Schritt abarbeiten", "Ergebnisse an die Ausgänge schreiben", "Zyklus von vorne beginnen"],
    erklaerung: "Dieser Zyklus wiederholt sich laufend, typischerweise in wenigen Millisekunden.",
    quelle: "Fachkunde Elektrotechnik, Kap. 15.3.3 Arbeitsweise einer SPS", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-logik-01", typ: "wahrfalsch", lehrjahr: 2, berufe: ["EI"], fach: "c", lz: "c4.1",
    titel: "Logische Verknüpfungen",
    frage: "Richtig oder falsch?",
    aussagen: [
      { text: "UND: Der Ausgang ist nur 1, wenn alle Eingänge 1 sind.", wahr: true },
      { text: "ODER: Der Ausgang ist nur 1, wenn genau ein Eingang 1 ist.", wahr: false },
      { text: "NICHT: Der Ausgang ist immer das Gegenteil des Eingangs.", wahr: true },
      { text: "Zwei Schliesser in Reihe ergeben eine UND-Verknüpfung.", wahr: true }
    ],
    erklaerung: "ODER ist 1, wenn mindestens ein Eingang 1 ist. «Genau einer» wäre die Exklusiv-ODER-Verknüpfung (XOR). Schliesser parallel = ODER.",
    quelle: "Fachkunde Elektrotechnik, Kap. 9.8", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-trafo-01", typ: "rechnen", lehrjahr: 2, berufe: ["EI"], fach: "d", lz: "d2.4",
    titel: "Transformator",
    frage: "Wie gross ist die Sekundärspannung U2 des Transformators im Bild?",
    bild: "trafo",
    loesung: 12, einheit: "V", toleranz: 0.01,
    erklaerung: "U1 / U2 = N1 / N2 → U2 = U1 · N2 / N1 = 230 V · 60 / 1150 = 12 V",
    quelle: "Basiswissen für Elektroberufe, Kap. 29.3 Idealer Transformator", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-kondensator-01", typ: "rechnen", lehrjahr: 2, berufe: ["EI"], fach: "a", lz: "a2.4",
    titel: "Kondensatoren parallel",
    frage: "Zwei Kondensatoren mit 10 µF und 22 µF werden parallel geschaltet. Wie gross ist die Gesamtkapazität?",
    loesung: 32, einheit: "µF", toleranz: 0.01,
    erklaerung: "Parallel addieren sich die Kapazitäten: C = C1 + C2 = 32 µF (umgekehrt wie bei Widerständen!).",
    quelle: "Fachkunde Elektrotechnik, Kap. 4.4.1", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-knx-01", typ: "zuordnen", lehrjahr: 2, berufe: ["EI"], fach: "d", lz: "d1.1",
    titel: "Sensoren und Aktoren",
    frage: "Ist das Gerät in einer KNX-Anlage ein Sensor oder ein Aktor?",
    paare: [
      { links: "Tastsensor", rechts: "Sensor" },
      { links: "Präsenzmelder", rechts: "Sensor" },
      { links: "Schaltaktor", rechts: "Aktor" },
      { links: "Jalousieaktor", rechts: "Aktor" }
    ],
    erklaerung: "Sensoren erfassen und senden Befehle auf den Bus, Aktoren empfangen sie und schalten Lasten.",
    quelle: "Fachkunde Elektrotechnik, Kap. 12.5 Gebäudeautomation", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-knx-02", typ: "auswahl", lehrjahr: 2, berufe: ["EI"], fach: "d", lz: "d1.1",
    titel: "KNX-Busspannung",
    frage: "Mit welcher Spannung arbeitet die KNX-Busleitung (TP)?",
    optionen: ["ca. 30 V DC (Kleinspannung)", "230 V AC", "12 V AC", "400 V AC"],
    richtig: [0],
    erklaerung: "Die Busleitung führt Kleinspannung (SELV, ca. 30 V DC). Sie darf nicht mit der 230-V-Installation verwechselt werden.",
    quelle: "Fachkunde Elektrotechnik, Kap. 12.5", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-melder-01", typ: "auswahl", lehrjahr: 2, berufe: ["EI"], fach: "d", lz: "d3.2",
    titel: "Brandmelder in der Küche",
    frage: "Welcher Brandmelder eignet sich für eine Küche am besten?",
    optionen: ["Wärmemelder", "Optischer Rauchmelder", "Bewegungsmelder", "Glasbruchmelder"],
    richtig: [0],
    erklaerung: "Ein Rauchmelder würde beim Kochen (Dampf, Rauch) laufend Fehlalarme auslösen. Der Wärmemelder reagiert auf Temperatur.",
    quelle: "Fachkunde Elektrotechnik, Kap. 12.6 Gefahrenmeldeanlagen", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-rcd-prinzip-01", typ: "zuordnen", lehrjahr: 2, berufe: ["EI", "ME"], fach: "c", lz: "c3.2",
    titel: "Aufbau eines RCD",
    frage: "Benenne die Teile des Fehlerstromschutzschalters im Bild.",
    bild: "rcd",
    paare: [
      { links: "Teil 1", rechts: "Summenstromwandler (Ringkern)" },
      { links: "Teil 2", rechts: "Sekundärwicklung" },
      { links: "Teil 3", rechts: "Auslöser, der die Kontakte öffnet" }
    ],
    erklaerung: "Im Normalfall heben sich die Magnetfelder von Hin- und Rückstrom auf. Fliesst ein Teil des Stroms über PE ab (Fehlerstrom), entsteht eine Differenz → in der Sekundärwicklung wird eine Spannung induziert → der RCD löst aus.",
    quelle: "Basiswissen für Elektroberufe, Kap. 18 / 2.36 Funktionsprinzip RCD", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-rcd-typen-01", typ: "zuordnen", lehrjahr: 2, berufe: ["EI"], fach: "c", lz: "c3.2",
    titel: "RCD-Typen",
    frage: "Welcher RCD-Typ erfasst welche Fehlerströme?",
    paare: [
      { links: "Typ AC", rechts: "nur sinusförmige Wechselfehlerströme" },
      { links: "Typ A", rechts: "Wechsel- und pulsierende Gleichfehlerströme" },
      { links: "Typ B", rechts: "zusätzlich glatte Gleichfehlerströme (allstromsensitiv)" }
    ],
    erklaerung: "Typ B braucht es z. B. bei Ladestationen für Elektroautos oder Frequenzumrichtern (sofern der Hersteller nichts anderes vorsieht). Achtung: RCD Typ B vor einer Isolationsmessung nach Herstellerangaben behandeln.",
    quelle: "Basiswissen für Elektroberufe, Kap. 18.3; Profi-Spick Steckdosen prüfen", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-beleuchtung-01", typ: "auswahl", lehrjahr: 2, berufe: ["EI"], fach: "c", lz: "c1.1",
    titel: "Beleuchtungsstärke im Büro",
    frage: "Welche Beleuchtungsstärke wird für Büroarbeitsplätze (Schreiben, Lesen, Bildschirm) empfohlen?",
    optionen: ["500 lx", "100 lx", "50 lx", "2000 lx"],
    richtig: [0],
    erklaerung: "Richtwert nach SN EN 12464-1 für Büroarbeitsplätze: 500 lx. Verkehrswege begnügen sich mit ca. 100 lx.",
    quelle: "Fachkunde Elektrotechnik, Kap. 12.1.3", demo_status: "entwurf"
  },
  {
    id: "s1-lj2-motorschutz-01", typ: "freitext", lehrjahr: 2, berufe: ["EI"], fach: "c", lz: "c3.6",
    titel: "Motorschutzschalter",
    frage: "Wovor schützt ein Motorschutzschalter den Motor, und wie stellst du ihn ein?",
    stichworte: [["überlast", "zu grosser strom", "ueberstrom", "überstrom"], ["kurzschluss"], ["nennstrom", "typenschild", "leistungsschild", "motorstrom"], ["einstellen", "einstellung", "einstellbar", "stellt man"]],
    mindestens: 3,
    musterloesung: "Der Motorschutzschalter schützt den Motor vor Überlast (thermischer Auslöser) und vor Kurzschluss (magnetischer Auslöser). Der thermische Auslöser wird auf den Nennstrom des Motors eingestellt, der auf dem Leistungsschild steht.",
    erklaerung: "Falsch eingestellt (zu hoch) kann der Motor überhitzen, ohne dass abgeschaltet wird.",
    quelle: "Basiswissen für Elektroberufe, Kap. 16 Motorschutz", demo_status: "entwurf"
  }
);
