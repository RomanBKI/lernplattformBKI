/* Aufgaben 3. Lehrjahr */
AUFGABEN.push(
  {
    id: "lj3-rcd-fehler-01", typ: "auswahl", lehrjahr: 3, berufe: ["EI"], fach: "e", lz: "e1.2",
    titel: "Fehlersuche: RCD löst aus",
    frage: "Beim Einschalten einer Waschmaschine löst der Fehlerstromschutzschalter (RCD) aus. Welche Ursachen sind möglich?",
    optionen: [
      "Isolationsfehler im Gerät (Fehlerstrom gegen PE)",
      "Verbindung zwischen N und PE nach dem RCD",
      "Überlastung der Leitung durch zu viele Geräte",
      "Zu lange Zuleitung"
    ],
    richtig: [0, 1],
    erklaerung: "Der RCD vergleicht Hin- und Rückstrom. Fliesst Strom über PE ab (Isolationsfehler) oder über eine N-PE-Verbindung hinter dem RCD, entsteht eine Differenz → Auslösung. Überlast betrifft den Leitungsschutzschalter."
  },
  {
    id: "lj3-erstpruefung-reihenfolge-01", typ: "reihenfolge", lehrjahr: 3, berufe: ["EI"], fach: "f", lz: "f2.2",
    titel: "Ablauf der Erstprüfung",
    frage: "Bringe die Prüfschritte der Erstprüfung in eine sinnvolle Reihenfolge.",
    schritte: [
      "Besichtigen (Sichtprüfung)",
      "Durchgängigkeit Schutzleiter und Potentialausgleich messen",
      "Isolationswiderstand messen",
      "Schleifenimpedanz / Kurzschlussstrom messen",
      "Fehlerstromschutzschalter (RCD) prüfen",
      "Funktionsprüfung und Drehfeld"
    ],
    erklaerung: "Zuerst Messungen im spannungslosen Zustand (Schutzleiter, Isolation), dann mit Spannung (Schleifenimpedanz, RCD), zum Schluss die Funktion."
  },
  {
    id: "lj3-isolation-01", typ: "auswahl", lehrjahr: 3, berufe: ["EI"], fach: "f", lz: "f2.2",
    titel: "Isolationswiderstand",
    frage: "Welcher Isolationswiderstand muss in einem Stromkreis 230/400 V (Messspannung 500 V DC) mindestens erreicht werden?",
    optionen: ["≥ 1 MΩ", "≥ 0,5 MΩ", "≥ 1 kΩ", "≥ 100 MΩ"],
    richtig: [0], nicht_mischen: true,
    erklaerung: "Für Stromkreise bis 500 V gilt bei 500 V DC Messspannung ein Mindestwert von 1 MΩ (NIN, Erstprüfung)."
  },
  {
    id: "lj3-anschluesse-01", typ: "wahrfalsch", lehrjahr: 3, berufe: ["EI"], fach: "c", lz: "c2.4",
    titel: "Kontrolle der Anschlüsse",
    frage: "Richtig oder falsch?",
    aussagen: [
      { text: "Schraubklemmen werden mit dem Drehmoment nach Herstellerangabe angezogen.", wahr: true },
      { text: "Ein nicht angeschlossener Schutzleiter fällt bei der Funktionsprüfung einer Leuchte sofort auf.", wahr: false },
      { text: "Mehrere Leiter in einer Klemme sind nur erlaubt, wenn die Klemme dafür vorgesehen ist.", wahr: true }
    ],
    erklaerung: "Die Leuchte funktioniert auch ohne PE – ein fehlender Schutzleiter wird nur durch Messen (Durchgängigkeit) erkannt!"
  }
);
