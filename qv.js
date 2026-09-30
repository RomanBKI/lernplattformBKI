/* QV-Vorbereitung (sichtbar nur im letzten Lehrjahr) */
AUFGABEN.push(
  {
    id: "qv-drehstromleistung-01", typ: "rechnen", lehrjahr: 4, berufe: ["EI", "ME"], fach: "qv", lz: "qv-rechnen",
    titel: "Drehstromleistung",
    frage: "Ein Drehstromverbraucher an 400 V nimmt 16 A auf, cos φ = 0,85. Berechne die Wirkleistung in kW.",
    loesung: 9.42, einheit: "kW", toleranz: 0.01,
    erklaerung: "P = √3 · U · I · cos φ = 1,732 · 400 V · 16 A · 0,85 ≈ 9422 W ≈ 9,42 kW"
  },
  {
    id: "qv-sicherheit-01", typ: "wahrfalsch", lehrjahr: 4, berufe: ["EI", "ME"], fach: "qv", lz: "qv-sicherheit",
    titel: "Sicherheit und Vorschriften",
    frage: "Richtig oder falsch?",
    aussagen: [
      { text: "Nach Abschluss der Installation wird ein Sicherheitsnachweis (SiNa) erstellt.", wahr: true },
      { text: "Steckdosen bis 32 A müssen grundsätzlich mit einem RCD ≤ 30 mA geschützt werden.", wahr: true },
      { text: "Lernende dürfen unter Spannung arbeiten, wenn sie eine PSA tragen.", wahr: false }
    ],
    erklaerung: "Der SiNa bestätigt die Sicherheit der Anlage. Arbeiten unter Spannung sind nur mit besonderer Ausbildung und Freigabe erlaubt – nicht für Lernende."
  },
  {
    id: "qv-schemaarten-01", typ: "zuordnen", lehrjahr: 4, berufe: ["EI", "ME"], fach: "qv", lz: "qv-bk",
    titel: "Schema- und Planarten",
    frage: "Ordne jeder Plan-/Schemaart ihren Zweck zu.",
    paare: [
      { links: "Installationsplan", rechts: "Zeigt die Lage der Apparate und Leitungen im Grundriss" },
      { links: "Stromlaufschema", rechts: "Zeigt die Funktion mit allen Leitern und Kontakten" },
      { links: "Prinzipschema", rechts: "Vereinfachte Übersicht über das Zusammenwirken" },
      { links: "Übersichtsschema (einpolig)", rechts: "Einpolige Darstellung einer Verteilung" }
    ],
    erklaerung: "Der Installationsplan zeigt das «Wo», das Stromlaufschema das «Wie genau», das Prinzipschema das «Wie grob»."
  }
);
