/* Aufgaben 2. Lehrjahr */
AUFGABEN.push(
  {
    id: "lj2-leitungswiderstand-01", typ: "rechnen", lehrjahr: 2, berufe: ["EI"], fach: "a", lz: "a2.4",
    titel: "Leitungswiderstand",
    frage: "Eine Kupferleitung 1,5 mm² ist 20 m lang (einfache Länge). Berechne den Widerstand von Hin- und Rückleiter zusammen.\nρ (Kupfer) = 0,0175 Ω·mm²/m",
    loesung: 0.467, einheit: "Ω", toleranz: 0.02,
    hinweis: "Tipp: Hin- und Rückleiter → doppelte Länge.",
    erklaerung: "R = ρ · l / A = 0,0175 Ω·mm²/m · 40 m / 1,5 mm² ≈ 0,467 Ω"
  },
  {
    id: "lj2-ls-charakteristik-01", typ: "auswahl", lehrjahr: 2, berufe: ["EI"], fach: "c", lz: "c3.2",
    titel: "Auslösecharakteristik B",
    frage: "In welchem Bereich löst ein Leitungsschutzschalter mit Charakteristik B magnetisch (unverzögert) aus?",
    optionen: ["3 bis 5 × In", "5 bis 10 × In", "10 bis 20 × In", "1,13 bis 1,45 × In"],
    richtig: [0], nicht_mischen: true,
    erklaerung: "B: 3–5 × In, C: 5–10 × In, D: 10–20 × In. Der Bereich 1,13–1,45 × In betrifft die thermische Auslösung (Überlast)."
  },
  {
    id: "lj2-strom-heizung-01", typ: "rechnen", lehrjahr: 2, berufe: ["EI"], fach: "c", lz: "c3.4",
    titel: "Strom eines Heizgeräts",
    frage: "Ein Heizgerät hat eine Leistung von 2300 W bei 230 V. Welchen Strom nimmt es auf?",
    loesung: 10, einheit: "A", toleranz: 0.01,
    erklaerung: "I = P / U = 2300 W / 230 V = 10 A"
  },
  {
    id: "lj2-ueberspannung-01", typ: "luecke", lehrjahr: 2, berufe: ["EI"], fach: "d", lz: "d2.6",
    titel: "Überspannungsschutz",
    frage: "Ergänze die Typen der Überspannungsableiter (nur die Zahl).",
    text: "Überspannungsableiter vom Typ {{1|T1}} sind Blitzstromableiter. Typ {{2|T2}} wird in der Verteilung eingesetzt und Typ {{3|T3}} dient als Feinschutz direkt vor dem Endgerät.",
    erklaerung: "Typ 1: Blitzstromableiter (bei äusserem Blitzschutz / Freileitungseinspeisung) · Typ 2: Überspannungsschutz in der Verteilung · Typ 3: Geräteschutz nahe am Verbraucher."
  },
  {
    id: "lj2-steuerapparate-01", typ: "zuordnen", lehrjahr: 2, berufe: ["EI"], fach: "c", lz: "c4.1",
    titel: "Schalt- und Steuerapparate",
    frage: "Ordne jedem Apparat seine Funktion zu.",
    paare: [
      { links: "Schütz", rechts: "Elektromagnetisch betätigter Schalter für grosse Leistungen" },
      { links: "Stromstossschalter", rechts: "Wechselt bei jedem Tastendruck den Schaltzustand" },
      { links: "Treppenlichtzeitschalter", rechts: "Schaltet das Licht nach einer eingestellten Zeit aus" },
      { links: "Dämmerungsschalter", rechts: "Schaltet abhängig von der Umgebungshelligkeit" }
    ],
    erklaerung: "Stromstossschalter und Treppenlichtzeitschalter werden über Taster angesteuert. Das Schütz schaltet grosse Lasten über einen kleinen Steuerstrom."
  },
  {
    id: "lj2-knx-01", typ: "auswahl", lehrjahr: 2, berufe: ["EI"], fach: "d", lz: "d1.1",
    titel: "Gebäudeautomation",
    frage: "Was ist KNX?",
    optionen: [
      "Ein offener, herstellerunabhängiger Standard für die Gebäudeautomation mit Busleitung",
      "Ein Leitungstyp für Starkstrom-Hausinstallationen",
      "Eine Schutzart für Feuchträume",
      "Ein Messgerät für die Erstprüfung"
    ],
    richtig: [0],
    erklaerung: "KNX ist ein weltweiter Standard: Sensoren (z. B. Taster) und Aktoren (z. B. Schaltaktor) kommunizieren über eine Busleitung. Geräte verschiedener Hersteller sind kombinierbar.",
    demo_status: "getestet"
  }
);
