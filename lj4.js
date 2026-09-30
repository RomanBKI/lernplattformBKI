/* Aufgaben 4. Lehrjahr und üK */
AUFGABEN.push(
  {
    id: "lj4-schutzorgane-01", typ: "zuordnen", lehrjahr: 4, berufe: ["EI"], fach: "c", lz: "c3.1",
    titel: "Schutzorgane unterscheiden",
    frage: "Ordne jedem Schutzorgan seine Hauptaufgabe zu.",
    paare: [
      { links: "Fehlerstromschutzschalter (RCD)", rechts: "Schutz bei Fehlerströmen (Personen- und Brandschutz)" },
      { links: "Leitungsschutzschalter (LS)", rechts: "Schutz der Leitung bei Überlast und Kurzschluss" },
      { links: "Überspannungsableiter (SPD)", rechts: "Schutz vor transienten Überspannungen" },
      { links: "Motorschutzschalter", rechts: "Überlastschutz eines Motors" },
      { links: "Brandschutzschalter (AFDD)", rechts: "Erkennt gefährliche Störlichtbögen" }
    ],
    erklaerung: "Jedes Schutzorgan hat eine eigene Aufgabe – oft werden mehrere kombiniert (z. B. FI/LS-Kombination)."
  },
  {
    id: "lj4-kurzschlussstrom-01", typ: "rechnen", lehrjahr: 4, berufe: ["EI"], fach: "f", lz: "f2.3",
    titel: "Messresultat interpretieren",
    frage: "Bei der Erstprüfung misst du an einer Steckdose (U0 = 230 V) eine Schleifenimpedanz von Zs = 1,2 Ω. Der Stromkreis ist mit LS B13 geschützt.\nBerechne den Kurzschlussstrom Ik.",
    loesung: 191.7, einheit: "A", toleranz: 0.01,
    erklaerung: "Ik = U0 / Zs = 230 V / 1,2 Ω ≈ 192 A.\nFür die unverzögerte Auslösung braucht ein B13 höchstens 5 × 13 A = 65 A. 192 A > 65 A → Die Abschaltbedingung ist erfüllt (vereinfachte Betrachtung, ohne Korrekturfaktoren)."
  },
  {
    id: "lj4-praesenzmelder-01", typ: "freitext", lehrjahr: 4, berufe: ["EI"], fach: "d", lz: "d1.2",
    titel: "Raumautomation: Präsenzmelder",
    frage: "Beschreibe, wie ein Präsenzmelder in einem Büro hilft, Energie zu sparen.",
    stichworte: [["präsenz", "anwesenheit", "bewegung", "personen"], ["licht", "beleuchtung", "leuchte"], ["helligkeit", "tageslicht", "lux", "hell"], ["ausschalten", "abschalten", "schaltet aus", "aus schalten"], ["nachlaufzeit", "verzögerung", "nach einer zeit", "nach einiger zeit"]],
    mindestens: 4,
    musterloesung: "Der Präsenzmelder erkennt, ob Personen im Raum sind. Er misst zusätzlich die Helligkeit (Tageslicht) und schaltet die Beleuchtung nur ein, wenn es zu dunkel ist. Verlassen alle den Raum, schaltet er das Licht nach einer einstellbaren Nachlaufzeit aus.",
    erklaerung: "Präsenzmelder kombinieren Anwesenheitserkennung und Helligkeitsmessung – so brennt das Licht nur, wenn es wirklich gebraucht wird."
  },
  {
    id: "lj4-sicherheitsanlagen-01", typ: "auswahl", lehrjahr: 4, berufe: ["EI"], fach: "d", lz: "d3.1",
    titel: "Sicherheitsrelevante Systeme",
    frage: "Welche Anlage gehört zu den sicherheitstechnischen Anlagen?",
    optionen: ["Brandmeldeanlage", "Storensteuerung", "Heizungsregelung", "Multimedia-Verteiler"],
    richtig: [0],
    erklaerung: "Zu den sicherheitstechnischen Anlagen zählen u. a. Brandmelde-, Einbruchmelde- und Sicherheitsbeleuchtungsanlagen."
  },

  /* ---- üK 4 (Lehrjahr bitte prüfen) ---- */
  {
    id: "uek4-motor-drehrichtung-01", typ: "auswahl", lehrjahr: 3, berufe: ["EI"], fach: "uek4", lz: "uek4-motor",
    titel: "Drehrichtung eines Drehstrommotors",
    frage: "Wie änderst du die Drehrichtung eines Drehstrom-Asynchronmotors?",
    optionen: ["Zwei Aussenleiter vertauschen", "Neutralleiter und Schutzleiter vertauschen", "Alle drei Aussenleiter vertauschen (zyklisch)", "Die Spannung erhöhen"],
    richtig: [0],
    erklaerung: "Durch Vertauschen von zwei Aussenleitern ändert sich die Drehfeldrichtung. Ein zyklisches Vertauschen aller drei ändert die Drehrichtung nicht.",
    demo_status: "entwurf"
  },
  {
    id: "uek4-emob-stecker-01", typ: "auswahl", lehrjahr: 3, berufe: ["EI"], fach: "uek4", lz: "uek4-emob",
    titel: "Elektromobilität: Ladestecker",
    frage: "Welcher Steckertyp ist in Europa der Standard für das Laden von Elektroautos mit Wechselstrom (AC)?",
    optionen: ["Typ 2", "Typ 1", "CHAdeMO", "CEE 16 A rot"],
    richtig: [0],
    erklaerung: "Typ 2 ist in Europa der Standard für AC-Ladestationen. Für DC-Schnellladen wird CCS (Combo 2) verwendet.",
    demo_status: "entwurf"
  }
);
