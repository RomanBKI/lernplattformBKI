/* Serie 1 – Aufgaben 1. Lehrjahr (Entwurf) – erstellt aus Fachkunde Elektrotechnik, Basiswissen für Elektroberufe, NIN 2025, Suva */
AUFGABEN.push(
  /* ---------- a1.4 / a4.x Sicherheit ---------- */
  {
    id: "s1-lj1-notruf-01", typ: "auswahl", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a1.4",
    titel: "Notruf Sanität",
    frage: "Auf der Baustelle ist ein Kollege schwer verletzt. Welche Nummer wählst du in der Schweiz für die Sanität?",
    optionen: ["144", "117", "118", "1414"],
    richtig: [0],
    erklaerung: "144 = Sanität/Ambulanz, 117 = Polizei, 118 = Feuerwehr, 1414 = Rega. Die europäische Notrufnummer 112 funktioniert ebenfalls.",
    quelle: "Fachkunde Elektrotechnik, Kap. 1.5 Erste Hilfe", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-stromunfall-01", typ: "reihenfolge", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a1.4",
    titel: "Vorgehen bei einem Stromunfall",
    frage: "Eine Person hängt an einer 230-V-Leitung fest. Bringe die Schritte in die richtige Reihenfolge.",
    schritte: [
      "Auf Selbstschutz achten – die Person nicht direkt berühren",
      "Stromkreis unterbrechen (ausschalten, Stecker ziehen, Sicherung raus)",
      "Notruf 144 alarmieren (lassen)",
      "Lebenswichtige Funktionen prüfen und Erste Hilfe leisten (ABCD)",
      "Die Person auch bei gutem Befinden ärztlich kontrollieren lassen"
    ],
    erklaerung: "Zuerst dich selbst schützen und den Strom unterbrechen – sonst wirst du selbst zum Opfer. Nach jedem Stromunfall muss ein Arzt kontrollieren (Herzrhythmusstörungen können verzögert auftreten).",
    quelle: "Fachkunde Elektrotechnik, Kap. 1.5; Suva", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-sicherheitszeichen-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a1.4",
    titel: "Sicherheitszeichen erkennen",
    frage: "Ordne jedem Zeichen im Bild seine Bedeutung zu.",
    bild: "sicherheitszeichen",
    paare: [
      { links: "Zeichen 1 (roter Kreis mit Balken)", rechts: "Verbot" },
      { links: "Zeichen 2 (blauer Kreis)", rechts: "Gebot (z. B. Schutzbrille tragen)" },
      { links: "Zeichen 3 (gelbes Dreieck)", rechts: "Warnung vor einer Gefahr" },
      { links: "Zeichen 4 (grünes Rechteck)", rechts: "Rettung / Erste Hilfe" },
      { links: "Zeichen 5 (rotes Quadrat)", rechts: "Brandschutz (z. B. Feuerlöscher)" }
    ],
    erklaerung: "Form und Farbe verraten die Art des Zeichens: rund-rot = Verbot, rund-blau = Gebot, dreieckig-gelb = Warnung, eckig-grün = Rettung, eckig-rot = Brandschutz.",
    quelle: "Fachkunde Elektrotechnik, Kap. 1.4 Sicherheitszeichen", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-regeln-5plus5-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a1.5",
    titel: "5 + 5 lebenswichtige Regeln",
    frage: "Die Suva unterscheidet Regeln für Vorgesetzte/Auftraggeber und die 5 Sicherheitsregeln für Ausführende. Ordne zu.",
    paare: [
      { links: "Für klare Aufträge sorgen", rechts: "Regel für Vorgesetzte / Auftraggeber" },
      { links: "Geeignetes Personal einsetzen", rechts: "Regel für Vorgesetzte / Auftraggeber" },
      { links: "Spannungsfreiheit prüfen", rechts: "Sicherheitsregel beim Arbeiten" },
      { links: "Erden und kurzschliessen", rechts: "Sicherheitsregel beim Arbeiten" }
    ],
    erklaerung: "5 + 5: Die fünf Regeln für Vorgesetzte (klare Aufträge, geeignetes Personal, sichere Arbeitsmittel, Schutzausrüstung, nur geprüfte Anlagen in Betrieb nehmen) und die fünf Sicherheitsregeln (trennen, sichern, Spannungsfreiheit prüfen, erden und kurzschliessen, benachbarte Teile abdecken).",
    quelle: "Suva «5 + 5 lebenswichtige Regeln»; Profi-Spick Steckdosen prüfen", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-gefahrstoffe-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a4.1",
    titel: "Kennzeichnung von Gefahrstoffen",
    frage: "Was steht wo auf der Etikette eines gefährlichen Stoffes?",
    paare: [
      { links: "H-Sätze", rechts: "Gefahrenhinweise (welche Gefahr droht)" },
      { links: "P-Sätze", rechts: "Sicherheitshinweise (wie schütze ich mich)" },
      { links: "Signalwort", rechts: "«Achtung» oder «Gefahr»" },
      { links: "Gefahrenpiktogramm", rechts: "Rote Raute mit schwarzem Symbol" }
    ],
    erklaerung: "H = Hazard (Gefahr), P = Precaution (Vorsorge). Das Signalwort «Gefahr» steht für die schwerere Gefahrenkategorie.",
    quelle: "Fachkunde Elektrotechnik, Kap. 1.3 Gefahrstoffe", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-koerperstrom-01", typ: "rechnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a4.2",
    titel: "Strom durch den Körper",
    frage: "Eine Person berührt einen Aussenleiter (230 V gegen Erde). Der Widerstand ihres Körpers beträgt ca. 1000 Ω. Wie gross ist der Strom durch den Körper in mA?",
    loesung: 230, einheit: "mA", toleranz: 0.01,
    erklaerung: "I = U / R = 230 V / 1000 Ω = 0,23 A = 230 mA. Bereits ab ca. 50 mA droht Herzkammerflimmern – das ist lebensgefährlich!",
    quelle: "Fachkunde Elektrotechnik, Kap. 11.1", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-stromwirkung-01", typ: "auswahl", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a4.2",
    titel: "Gefährliche Körperströme",
    frage: "Ab welcher Stromstärke (Wechselstrom 50 Hz, längere Einwirkung) besteht Lebensgefahr durch Herzkammerflimmern?",
    optionen: ["ab ca. 0,5 mA", "ab ca. 10 mA", "ab ca. 50 mA", "erst ab ca. 5 A"],
    richtig: [2], nicht_mischen: true,
    erklaerung: "Ca. 0,5 mA: spürbar. Ca. 10 mA: Loslassgrenze (Muskelverkrampfung). Ab ca. 50 mA: Herzkammerflimmern möglich – Lebensgefahr.",
    quelle: "Fachkunde Elektrotechnik, Kap. 11.1.1", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-messkategorie-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a4.2",
    titel: "Messkategorien (CAT)",
    frage: "Welche Messkategorie braucht dein Messgerät mindestens an den Orten im Bild?",
    bild: "messkategorien",
    paare: [
      { links: "Ort 1: Hausanschluss / Zähler", rechts: "CAT IV" },
      { links: "Ort 2: Verteilung", rechts: "CAT III" },
      { links: "Ort 3: Steckdose", rechts: "CAT II" }
    ],
    ablenker: ["CAT I"],
    erklaerung: "Je näher an der Einspeisung, desto höher die möglichen Überspannungen – und desto höher muss die Kategorie sein. CAT I gilt nur für Elektronik und Kleinspannung.",
    quelle: "Profi-Spick Steckdosen prüfen; Basiswissen für Elektroberufe, Messkategorien", demo_status: "entwurf"
  },

  /* ---------- a2.1 Grundlagen ---------- */
  {
    id: "s1-lj1-vorsaetze-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Einheitenvorsätze",
    frage: "Welcher Faktor gehört zu welchem Vorsatz?",
    paare: [
      { links: "k (Kilo)", rechts: "10³ = 1000" },
      { links: "M (Mega)", rechts: "10⁶ = 1 000 000" },
      { links: "m (Milli)", rechts: "10⁻³ = 0,001" },
      { links: "µ (Mikro)", rechts: "10⁻⁶ = 0,000 001" },
      { links: "G (Giga)", rechts: "10⁹" }
    ],
    erklaerung: "Achtung Gross-/Kleinschreibung: M = Mega (Million), m = Milli (Tausendstel).",
    quelle: "Fachkunde Elektrotechnik, Kap. 2.1", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-umrechnen-01", typ: "luecke", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Einheiten umrechnen",
    frage: "Rechne um und trage nur die Zahl ein.",
    text: "0,25 A = {{250}} mA\n4,7 kΩ = {{4700}} Ω\n1500 W = {{1,5|1.5}} kW\n30 mA = {{0,03|0.03}} A",
    erklaerung: "Von der grösseren zur kleineren Einheit mal 1000, umgekehrt durch 1000.",
    demo_status: "entwurf"
  },
  {
    id: "s1-lj1-ladung-01", typ: "rechnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Elektrische Ladung",
    frage: "Ein Akku liefert während 30 s einen Strom von 2 A. Welche Ladung fliesst? (Einheit As = C)",
    loesung: 60, einheit: "As", toleranz: 0.01,
    erklaerung: "Q = I · t = 2 A · 30 s = 60 As = 60 C",
    quelle: "Fachkunde Elektrotechnik, Kap. 2.3", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-leiter-01", typ: "auswahl", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a3.1",
    titel: "Leiter und Isolatoren",
    frage: "Welche Stoffe leiten den elektrischen Strom gut?",
    optionen: ["Kupfer", "Aluminium", "Graphit (Kohle)", "PVC", "Porzellan", "Glas"],
    richtig: [0, 1, 2],
    erklaerung: "Metalle und Graphit haben viele freie Elektronen und leiten. PVC, Porzellan und Glas sind Isolierstoffe.",
    quelle: "Fachkunde Elektrotechnik, Kap. 2.2", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-leitfaehigkeit-01", typ: "auswahl", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a3.1",
    titel: "Bester Leiter",
    frage: "Welches Metall hat die beste elektrische Leitfähigkeit?",
    optionen: ["Silber", "Kupfer", "Gold", "Aluminium"],
    richtig: [0],
    erklaerung: "Reihenfolge: Silber > Kupfer > Gold > Aluminium. Silber ist zu teuer – deshalb verwendet man meist Kupfer.",
    demo_status: "entwurf"
  },
  {
    id: "s1-lj1-messgeraete-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Messgeräte richtig anschliessen",
    frage: "Im Bild sind zwei Messgeräte eingezeichnet. Welches ist welches?",
    bild: "messgeraete",
    paare: [
      { links: "Messgerät 1 (in der Leitung)", rechts: "Strommesser (Ampèremeter)" },
      { links: "Messgerät 2 (neben der Lampe)", rechts: "Spannungsmesser (Voltmeter)" }
    ],
    ablenker: ["Widerstandsmesser (Ohmmeter)"],
    erklaerung: "Strom misst man IN REIHE (der Strom muss durch das Messgerät fliessen). Spannung misst man PARALLEL zum Verbraucher.",
    quelle: "Fachkunde Elektrotechnik, Kap. 2.4.4 / 2.5.2", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-leiterwiderstand-01", typ: "luecke", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Wovon hängt der Leiterwiderstand ab?",
    frage: "Setze «grösser» oder «kleiner» ein.",
    text: "Je länger die Leitung, desto {{grösser|groesser}} ist ihr Widerstand.\nJe grösser der Querschnitt, desto {{kleiner}} ist ihr Widerstand.\nBei Kupfer wird der Widerstand mit steigender Temperatur {{grösser|groesser}}.",
    erklaerung: "R = ρ · l / A. Metalle sind Kaltleiter: warm leiten sie schlechter.",
    quelle: "Fachkunde Elektrotechnik, Kap. 2.8/2.9", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-reihe-01", typ: "rechnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Reihenschaltung",
    frage: "Berechne den Gesamtwiderstand der Schaltung.",
    bild: "reihenschaltung",
    loesung: 470, einheit: "Ω", toleranz: 0.005,
    erklaerung: "In Reihe addieren sich die Widerstände: R = R1 + R2 + R3 = 100 Ω + 220 Ω + 150 Ω = 470 Ω",
    quelle: "Fachkunde Elektrotechnik, Kap. 3.1", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-parallel-01", typ: "rechnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Parallelschaltung",
    frage: "Berechne den Gesamtwiderstand zwischen A und B.",
    bild: "parallelschaltung",
    loesung: 20, einheit: "Ω", toleranz: 0.005,
    erklaerung: "R = (R1 · R2) / (R1 + R2) = (60 · 30) / (60 + 30) = 1800 / 90 = 20 Ω. Der Gesamtwiderstand ist immer kleiner als der kleinste Einzelwiderstand.",
    quelle: "Fachkunde Elektrotechnik, Kap. 3.2", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-schaltungsgesetze-01", typ: "wahrfalsch", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Reihen- und Parallelschaltung",
    frage: "Richtig oder falsch?",
    aussagen: [
      { text: "In der Reihenschaltung fliesst durch alle Widerstände derselbe Strom.", wahr: true },
      { text: "In der Parallelschaltung liegt an allen Widerständen dieselbe Spannung.", wahr: true },
      { text: "In der Reihenschaltung ist der Gesamtwiderstand kleiner als der kleinste Einzelwiderstand.", wahr: false },
      { text: "Steckdosen in einer Wohnung sind parallel geschaltet.", wahr: true }
    ],
    erklaerung: "Reihe: gleicher Strom, Spannungen addieren sich. Parallel: gleiche Spannung, Ströme addieren sich – der Gesamtwiderstand wird kleiner.",
    quelle: "Fachkunde Elektrotechnik, Kap. 3.1/3.2", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-spannungsteiler-01", typ: "rechnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Spannungsteiler",
    frage: "Wie gross ist die Spannung U2 an R2?",
    bild: "spannungsteiler",
    loesung: 16, einheit: "V", toleranz: 0.01,
    erklaerung: "I = 24 V / (1 kΩ + 2 kΩ) = 8 mA → U2 = 8 mA · 2 kΩ = 16 V. Kurz: U2 = U · R2 / (R1 + R2).",
    quelle: "Fachkunde Elektrotechnik, Kap. 3.4", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-leistung-u2r-01", typ: "rechnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Leistung aus Spannung und Widerstand",
    frage: "Ein Heizwiderstand von 52,9 Ω liegt an 230 V. Welche Leistung nimmt er auf?",
    loesung: 1000, einheit: "W", toleranz: 0.01,
    erklaerung: "P = U² / R = (230 V)² / 52,9 Ω = 52 900 / 52,9 = 1000 W",
    quelle: "Fachkunde Elektrotechnik, Kap. 2.12", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-energiekosten-01", typ: "rechnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Energiekosten",
    frage: "Ein Heizlüfter mit 2 kW läuft 3 Stunden. 1 kWh kostet 0,30 CHF. Was kostet der Betrieb?",
    loesung: 1.8, einheit: "CHF", toleranz: 0.01,
    erklaerung: "W = P · t = 2 kW · 3 h = 6 kWh → Kosten = 6 kWh · 0,30 CHF/kWh = 1,80 CHF",
    quelle: "Fachkunde Elektrotechnik, Kap. 2.11", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-wirkungsgrad-01", typ: "rechnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Wirkungsgrad",
    frage: "Ein Motor nimmt 2 kW elektrische Leistung auf und gibt 1,7 kW mechanische Leistung ab. Wie gross ist sein Wirkungsgrad in %?",
    loesung: 85, einheit: "%", toleranz: 0.01,
    erklaerung: "η = P_ab / P_zu = 1,7 kW / 2 kW = 0,85 = 85 %. Die restlichen 0,3 kW werden zu Wärme (Verluste).",
    quelle: "Fachkunde Elektrotechnik, Kap. 2.13", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-elektrowaerme-01", typ: "rechnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Wasser erwärmen",
    frage: "Wie viel Wärmeenergie braucht es, um 1,5 Liter Wasser von 15 °C auf 95 °C zu erwärmen?\nc (Wasser) = 4,19 kJ/(kg·K), 1 Liter ≈ 1 kg",
    loesung: 502.8, einheit: "kJ", toleranz: 0.01,
    erklaerung: "Q = m · c · Δϑ = 1,5 kg · 4,19 kJ/(kg·K) · 80 K = 502,8 kJ (≈ 0,14 kWh)",
    quelle: "Fachkunde Elektrotechnik, Kap. 2.14 Elektrowärme", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-schaltzeichen-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Schaltzeichen",
    frage: "Wie heissen die Schaltzeichen im Bild?",
    bild: "schaltzeichen",
    paare: [
      { links: "Zeichen 1", rechts: "Leuchte / Lampe" },
      { links: "Zeichen 2", rechts: "Widerstand" },
      { links: "Zeichen 3", rechts: "Sicherung" },
      { links: "Zeichen 4", rechts: "Kondensator" },
      { links: "Zeichen 5", rechts: "Motor" },
      { links: "Zeichen 6", rechts: "Erde" }
    ],
    erklaerung: "Diese Schaltzeichen nach SN EN 60617 brauchst du in jedem Schema.",
    quelle: "Fachkunde Elektrotechnik, Kap. 2.2 Schaltzeichen", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-wechselschaltung-01", typ: "auswahl", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Welche Schaltung ist das?",
    frage: "Die Lampe E1 soll von zwei Stellen aus ein- und ausgeschaltet werden. Wie heisst die dargestellte Schaltung?",
    bild: "wechselschaltung",
    optionen: ["Wechselschaltung (Korrespondenzschaltung)", "Serienschaltung", "Kreuzschaltung", "Stromstossschaltung"],
    richtig: [0],
    erklaerung: "Zwei Wechselschalter (Umschalter) sind über zwei Verbindungsleiter verbunden. Für drei und mehr Schaltstellen kommt pro zusätzliche Stelle ein Kreuzschalter dazu – oder man nimmt Taster und einen Stromstossschalter.",
    quelle: "Fachkunde Elektrotechnik, Kap. 6.2.1 Lampenschaltungen", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-schaltstellen-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "c", lz: "c1.1",
    titel: "Die passende Schaltung wählen",
    frage: "Welche Schaltung passt zu welcher Aufgabe?",
    paare: [
      { links: "Eine Lampe von einer Stelle schalten", rechts: "Ausschaltung" },
      { links: "Zwei Lampengruppen einzeln von einer Stelle schalten", rechts: "Serienschaltung" },
      { links: "Eine Lampe von zwei Stellen schalten", rechts: "Wechselschaltung" },
      { links: "Eine Lampe von drei Stellen schalten (ohne Taster)", rechts: "Kreuzschaltung" }
    ],
    erklaerung: "Kreuzschaltung = 2 Wechselschalter + 1 Kreuzschalter je zusätzliche Schaltstelle.",
    quelle: "Fachkunde Elektrotechnik, Kap. 6.2.1", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-pir-01", typ: "auswahl", lehrjahr: 1, berufe: ["EI", "ME"], fach: "c", lz: "c1.1",
    titel: "Bewegungsmelder",
    frage: "Worauf reagiert ein PIR-Bewegungsmelder?",
    optionen: ["Auf die Veränderung von Wärmestrahlung (Infrarot) im Erfassungsbereich", "Auf Geräusche", "Auf Veränderungen des Magnetfelds", "Auf die Helligkeit allein"],
    richtig: [0],
    erklaerung: "PIR = Passiv-Infrarot. Der Melder sendet selbst nichts aus, er erkennt Bewegungen von warmen Körpern. Zusätzlich misst er meist die Helligkeit.",
    quelle: "Fachkunde Elektrotechnik, Kap. 6.2.4; Basiswissen, PIR-Melder", demo_status: "entwurf"
  },

  /* ---------- b / c: Leitungen, Schutz, Räume ---------- */
  {
    id: "s1-lj1-schutzklassen-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "b", lz: "b1.1",
    titel: "Schutzklassen",
    frage: "Welches Symbol gehört zu welcher Schutzklasse?",
    bild: "schutzklassen",
    paare: [
      { links: "Symbol 1", rechts: "Schutzklasse I – Gerät mit Schutzleiteranschluss" },
      { links: "Symbol 2", rechts: "Schutzklasse II – doppelte bzw. verstärkte Isolierung" },
      { links: "Symbol 3", rechts: "Schutzklasse III – Betrieb mit Kleinspannung (SELV/PELV)" }
    ],
    erklaerung: "SK I: Schutz über PE. SK II: kein PE nötig, Schutz durch Isolation. SK III: ungefährliche Kleinspannung (max. 50 V AC / 120 V DC).",
    quelle: "Basiswissen für Elektroberufe, Schutzklassen; Geräteprüfung", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-selv-01", typ: "luecke", lehrjahr: 1, berufe: ["EI", "ME"], fach: "b", lz: "b1.1",
    titel: "Kleinspannung",
    frage: "Ergänze die Grenzwerte der Kleinspannung (nur Zahl).",
    text: "Kleinspannung (SELV/PELV) darf höchstens {{50}} V Wechselspannung bzw. {{120}} V Gleichspannung betragen.",
    erklaerung: "Kleinspannung gilt unter normalen Bedingungen als ungefährlich. In besonderen Bereichen (z. B. nass) gelten tiefere Werte.",
    quelle: "Fachkunde Elektrotechnik, Kap. 11.9; NIN 2025, 4.1.4", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-ipcode-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "b", lz: "b1.3",
    titel: "Schutzart IP 44",
    frage: "Was bedeuten die beiden Ziffern von IP 44?",
    bild: "ipcode",
    paare: [
      { links: "1. Ziffer (4)", rechts: "Schutz gegen Fremdkörper > 1 mm" },
      { links: "2. Ziffer (4)", rechts: "Schutz gegen Spritzwasser aus allen Richtungen" }
    ],
    ablenker: ["Staubdicht", "Schutz gegen Strahlwasser"],
    erklaerung: "Erste Ziffer = Berührungs- und Fremdkörperschutz (0–6), zweite Ziffer = Wasserschutz (0–8). IPX4 ist z. B. in den Bereichen 1 und 2 im Bad gefordert.",
    quelle: "Profi-Spick Steckdosen prüfen (IP-Schutzarten); NIN 2025, 7.01", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-badzonen-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "b", lz: "b1.3",
    titel: "Bereiche im Badezimmer",
    frage: "Ordne die Beschreibung dem richtigen Bereich zu (Bild).",
    bild: "badzonen",
    paare: [
      { links: "Bereich 0", rechts: "Das Innere der Bade- oder Duschwanne" },
      { links: "Bereich 1", rechts: "Über der Wanne bis 2,25 m Höhe" },
      { links: "Bereich 2", rechts: "0,6 m breiter Streifen neben Bereich 1" }
    ],
    erklaerung: "Die NIN 2025 spricht von «Bereichen» (7.01). Bei Duschen ohne Wanne gibt es keinen Bereich 0; der Bereich 1 reicht dann 1,2 m vom festen Wasserauslass.",
    quelle: "NIN 2025, 7.01.3", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-baustelle-01", typ: "wahrfalsch", lehrjahr: 1, berufe: ["EI", "ME"], fach: "b", lz: "b1.3",
    titel: "Baustellen-Installationen",
    frage: "Richtig oder falsch?",
    aussagen: [
      { text: "Auch provisorische Installationen auf der Baustelle müssen vor dem Einschalten geprüft werden (Erstprüfung).", wahr: true },
      { text: "Ein «fliegendes» Kabel zur Abzweigdose ist auf der Baustelle unproblematisch, solange es nur kurz ist.", wahr: false },
      { text: "Steckdosen auf Baustellen werden mit einem RCD ≤ 30 mA geschützt.", wahr: true },
      { text: "Kurz einschalten und schauen, was passiert, ersetzt die Erstprüfung.", wahr: false }
    ],
    erklaerung: "Für Provisorien gelten dieselben Sicherheitsanforderungen wie für definitive Installationen (NIV Art. 24). Unfälle passieren oft an Drähten ohne Basisschutz.",
    quelle: "Erstprüfung von provisorischen Installationen (2025); NIN 2025, 7.04", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-leitungsbezeichnung-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "b", lz: "b7.2",
    titel: "Leitungsbezeichnung H07V-K",
    frage: "Was bedeuten die Teile der Bezeichnung H07V-K?",
    paare: [
      { links: "H", rechts: "Harmonisierte Norm" },
      { links: "07", rechts: "Nennspannung 450/750 V" },
      { links: "V", rechts: "Isolierung aus PVC" },
      { links: "K", rechts: "Feindrähtiger Leiter (flexibel)" }
    ],
    ablenker: ["Eindrähtiger Leiter"],
    erklaerung: "Weitere Leiterformen: U = eindrähtig (rund), R = mehrdrähtig (rund), K = feindrähtig für feste Verlegung, F = feindrähtig für flexible Leitungen.",
    quelle: "Fachkunde Elektrotechnik, Kap. 10.2.1", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-diazed-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "c", lz: "c1.1",
    titel: "Kennmelder von Schmelzsicherungen",
    frage: "Welcher Nennstrom gehört zu welcher Kennmelderfarbe (Bild)?",
    bild: "diazed",
    paare: [
      { links: "1 – grün", rechts: "6 A" },
      { links: "2 – rot", rechts: "10 A" },
      { links: "3 – grau", rechts: "16 A" },
      { links: "4 – blau", rechts: "20 A" },
      { links: "5 – gelb", rechts: "25 A" }
    ],
    erklaerung: "Weitere Farben: 2 A rosa, 4 A braun, 35 A schwarz, 50 A weiss, 63 A kupfer.",
    quelle: "Profi-Spick Steckdosen prüfen (Kennmelderfarben)", demo_status: "entwurf"
  },

  /* ---------- c2.2 Energieeffizienz / b4.4 Entsorgung / c5.1 ---------- */
  {
    id: "s1-lj1-standby-01", typ: "rechnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "c", lz: "c2.2",
    titel: "Stand-by kostet",
    frage: "Ein Gerät braucht im Stand-by 5 W, und zwar das ganze Jahr (365 Tage, 24 h). Wie viele kWh verbraucht es pro Jahr?",
    loesung: 43.8, einheit: "kWh", toleranz: 0.01,
    erklaerung: "W = 5 W · 24 h · 365 = 43 800 Wh = 43,8 kWh. Bei 0,30 CHF/kWh sind das über 13 CHF – für nichts!",
    quelle: "Fachkunde Elektrotechnik, Kap. 16.4.2 Stand-by-Betrieb", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-lichtgroessen-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "c", lz: "c2.2",
    titel: "Lichttechnische Grössen",
    frage: "Ordne jeder Grösse ihre Einheit zu.",
    paare: [
      { links: "Lichtstrom", rechts: "Lumen (lm)" },
      { links: "Beleuchtungsstärke", rechts: "Lux (lx)" },
      { links: "Lichtausbeute (Effizienz)", rechts: "Lumen pro Watt (lm/W)" },
      { links: "Farbtemperatur", rechts: "Kelvin (K)" }
    ],
    erklaerung: "Eine LED-Lampe erreicht über 100 lm/W, eine alte Glühlampe nur rund 12 lm/W. Warmweiss ≈ 2700–3000 K.",
    quelle: "Fachkunde Elektrotechnik, Kap. 12.1; Basiswissen, Beleuchtungstechnik", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-entsorgung-01", typ: "auswahl", lehrjahr: 1, berufe: ["EI", "ME"], fach: "b", lz: "b4.4",
    titel: "Leuchtstofflampen entsorgen",
    frage: "Warum dürfen Leuchtstofflampen und Energiesparlampen nicht in den Kehricht?",
    optionen: ["Sie enthalten Quecksilber", "Sie enthalten Blei im Glas", "Sie könnten explodieren", "Das Glas ist nicht rezyklierbar"],
    richtig: [0],
    erklaerung: "Quecksilber ist giftig. Leuchtmittel werden an Verkaufsstellen oder Sammelstellen zurückgegeben (vorgezogene Recyclinggebühr).",
    quelle: "Fachkunde Elektrotechnik, Kap. 16.3.3", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-projekt-01", typ: "reihenfolge", lehrjahr: 1, berufe: ["EI", "ME"], fach: "c", lz: "c5.1",
    titel: "Projektablauf",
    frage: "Bringe die Phasen eines Installationsprojekts in die richtige Reihenfolge.",
    schritte: ["Auftrag klären und Ziele festlegen", "Planen (Termine, Material, Personal)", "Ausführen und überwachen", "Prüfen, übergeben und abschliessen"],
    erklaerung: "Zum Abschluss gehört bei der Elektroinstallation immer die Schlusskontrolle mit Sicherheitsnachweis und die Übergabe an den Kunden.",
    quelle: "Fachkunde Elektrotechnik, Kap. 17.3 Projektmanagement", demo_status: "entwurf"
  },

  /* ---------- d: Energie / Kommunikation ---------- */
  {
    id: "s1-lj1-kraftwerke-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI"], fach: "d", lz: "d2.2",
    titel: "Kraftwerke und Energiequellen",
    frage: "Welche Primärenergie nutzt welches Kraftwerk?",
    paare: [
      { links: "Laufwasserkraftwerk", rechts: "Strömung eines Flusses" },
      { links: "Speicherkraftwerk", rechts: "Lageenergie von gestautem Wasser" },
      { links: "Kernkraftwerk", rechts: "Kernspaltung" },
      { links: "Photovoltaikanlage", rechts: "Sonnenstrahlung" },
      { links: "Windkraftanlage", rechts: "Bewegungsenergie der Luft" }
    ],
    erklaerung: "In der Schweiz stammt der grösste Teil des Stroms aus Wasserkraft.",
    quelle: "Fachkunde Elektrotechnik, Kap. 10.1.1; Basiswissen, Kraftwerke", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-pv-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI"], fach: "d", lz: "d2.2",
    titel: "Aufbau einer PV-Anlage",
    frage: "Ordne die Blöcke im Bild zu.",
    bild: "pvanlage",
    paare: [
      { links: "Block 1", rechts: "Solarmodule (erzeugen Gleichstrom)" },
      { links: "Block 2", rechts: "Wechselrichter (DC → AC)" },
      { links: "Block 3", rechts: "Verteilung mit Schutzorganen" },
      { links: "Block 4", rechts: "Zähler / Netzanschluss" }
    ],
    erklaerung: "Solarzellen liefern Gleichspannung. Der Wechselrichter macht daraus netzkonforme Wechselspannung 230/400 V.",
    quelle: "Basiswissen für Elektroberufe, Kap. 35 PV-Anlagen", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-pvertrag-01", typ: "rechnen", lehrjahr: 1, berufe: ["EI"], fach: "d", lz: "d2.2",
    titel: "Jahresertrag einer PV-Anlage",
    frage: "Eine PV-Anlage hat 12 kWp. Am Standort rechnet man mit 1000 kWh pro kWp und Jahr. Wie viel Energie erzeugt sie pro Jahr?",
    loesung: 12000, einheit: "kWh", toleranz: 0.01,
    erklaerung: "12 kWp · 1000 kWh/kWp = 12 000 kWh pro Jahr. Das reicht für mehrere Einfamilienhäuser.",
    demo_status: "entwurf"
  },
  {
    id: "s1-lj1-akku-01", typ: "rechnen", lehrjahr: 1, berufe: ["EI"], fach: "d", lz: "d2.3",
    titel: "Akku-Kapazität",
    frage: "Ein Akku hat eine Kapazität von 60 Ah. Wie lange kann er einen Strom von 3 A liefern (theoretisch)?",
    loesung: 20, einheit: "h", toleranz: 0.01,
    erklaerung: "t = Q / I = 60 Ah / 3 A = 20 h",
    quelle: "Fachkunde Elektrotechnik, Kap. 3.5.3 Akkumulatoren", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-primsek-01", typ: "wahrfalsch", lehrjahr: 1, berufe: ["EI"], fach: "d", lz: "d2.3",
    titel: "Batterie oder Akku?",
    frage: "Richtig oder falsch?",
    aussagen: [
      { text: "Ein Primärelement (Batterie) kann nicht wieder aufgeladen werden.", wahr: true },
      { text: "Ein Sekundärelement (Akku) speichert elektrische Energie chemisch und kann wieder aufgeladen werden.", wahr: true },
      { text: "Lithium-Ionen-Akkus dürfen beschädigt weiterverwendet werden, solange sie noch Spannung liefern.", wahr: false }
    ],
    erklaerung: "Beschädigte Li-Ionen-Akkus können in Brand geraten und müssen sofort sicher entsorgt werden.",
    quelle: "Fachkunde Elektrotechnik, Kap. 3.5; Basiswissen, Akkumulatoren", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-topologien-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI"], fach: "d", lz: "d4.1",
    titel: "Netzwerktopologien",
    frage: "Ordne jeder Topologie ihre Beschreibung zu.",
    paare: [
      { links: "Stern", rechts: "Alle Geräte hängen an einem zentralen Switch" },
      { links: "Bus", rechts: "Alle Geräte hängen an einer gemeinsamen Leitung" },
      { links: "Ring", rechts: "Jedes Gerät ist mit zwei Nachbarn verbunden, die Daten laufen im Kreis" },
      { links: "Baum", rechts: "Mehrere Sterne sind hierarchisch verbunden" }
    ],
    erklaerung: "In Gebäuden ist heute die (erweiterte) Sterntopologie Standard: jede Dose hat eine eigene Leitung zum Verteiler.",
    quelle: "Fachkunde Elektrotechnik, Kap. 14.7.2", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-netzwerk-01", typ: "wahrfalsch", lehrjahr: 1, berufe: ["EI"], fach: "d", lz: "d4.2",
    titel: "Datenleitungen",
    frage: "Richtig oder falsch?",
    aussagen: [
      { text: "Bei Twisted-Pair-Kabeln sind die Adern paarweise verdrillt, um Störungen zu vermindern.", wahr: true },
      { text: "Eine Ethernet-Verbindung über Kupferkabel darf höchstens 100 m lang sein.", wahr: true },
      { text: "Die MAC-Adresse wird vom Router jedes Mal neu vergeben.", wahr: false },
      { text: "Glasfasern sind unempfindlich gegen elektromagnetische Störungen.", wahr: true }
    ],
    erklaerung: "Die MAC-Adresse ist fest im Gerät gespeichert. Die IP-Adresse wird meist per DHCP vom Router vergeben.",
    quelle: "Fachkunde Elektrotechnik, Kap. 10.2.4 / 14.7", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-pegel-01", typ: "auswahl", lehrjahr: 1, berufe: ["EI"], fach: "d", lz: "d4.2",
    titel: "Pegel in dB",
    frage: "Ein Verstärker hebt den Leistungspegel um 3 dB an. Was bedeutet das ungefähr?",
    optionen: ["Die Leistung verdoppelt sich", "Die Leistung verdreifacht sich", "Die Leistung verzehnfacht sich", "Die Leistung halbiert sich"],
    richtig: [0], nicht_mischen: true,
    erklaerung: "+3 dB ≈ doppelte Leistung, +10 dB = zehnfache Leistung, −3 dB ≈ halbe Leistung.",
    quelle: "Fachkunde Elektrotechnik, Kap. 12.3.3", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-blitzschutz-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "b", lz: "b2.1",
    titel: "Teile einer Blitzschutzanlage",
    frage: "Benenne die nummerierten Teile im Bild.",
    bild: "blitzschutz",
    paare: [
      { links: "Teil 1 (Dachfirst)", rechts: "Fangeinrichtung" },
      { links: "Teil 2 (Fassade)", rechts: "Ableitung" },
      { links: "Teil 3 (im Boden)", rechts: "Erdungsanlage (z. B. Ring- oder Fundamenterder)" },
      { links: "Teil 4 (im Gebäude)", rechts: "Schutz-Potenzialausgleichsschiene" }
    ],
    erklaerung: "Der äussere Blitzschutz fängt den Blitz ein und leitet ihn in die Erde. Der Potenzialausgleich verhindert gefährliche Spannungsunterschiede im Gebäude.",
    quelle: "Fachkunde Elektrotechnik, Kap. 12.7; Basiswissen, Kap. 8 Blitzschutz", demo_status: "entwurf"
  },
  {
    id: "s1-lj1-schema-beschreiben-01", typ: "freitext", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
    titel: "Wechselschaltung erklären",
    frage: "Erkläre in 2–3 Sätzen, wie die abgebildete Schaltung funktioniert.",
    bild: "wechselschaltung",
    stichworte: [["wechselschalter", "umschalter", "korrespondenzschalter"], ["zwei stellen", "2 stellen", "zwei orten", "beiden stellen"], ["verbindungsleiter", "korrespondenzleiter", "zwei leiter", "zwei drähte"], ["lampe", "leuchte", "e1"]],
    mindestens: 3,
    musterloesung: "Mit zwei Wechselschaltern S1 und S2 kann die Lampe E1 von zwei Stellen aus geschaltet werden. Die Schalter sind über zwei Verbindungs-(Korrespondenz-)leiter verbunden. Jede Betätigung eines Schalters wechselt den Zustand der Lampe.",
    erklaerung: "Die Lampe leuchtet, wenn beide Schalter auf denselben Verbindungsleiter geschaltet sind.",
    quelle: "Fachkunde Elektrotechnik, Kap. 6.2.1", demo_status: "entwurf"
  }
);
