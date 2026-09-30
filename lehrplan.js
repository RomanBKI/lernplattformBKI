/* Lehrplan-Struktur – automatisch aus den EIT.swiss-Unterlagen erzeugt. */
window.LEHRPLAN = {
 "quelle": "EIT.swiss – Lehrplan Berufsfachschule, Ausbildungsprogramm üK-4, zur Verordnung des SBFI vom 1. Januar 2026 (Elektroinstallateur/in EFZ)",
 "berufe": {
  "EI": {
   "name": "Elektroinstallateur/in EFZ",
   "lehrjahre": 4
  },
  "ME": {
   "name": "Montage-Elektriker/in EFZ",
   "lehrjahre": 3
  }
 },
 "bereiche": [
  {
   "id": "bfs",
   "name": "Berufsfachschule",
   "beschreibung": "Handlungskompetenzbereiche a–f nach Bildungsverordnung 2026"
  },
  {
   "id": "uek",
   "name": "Überbetriebliche Kurse (üK)",
   "beschreibung": "Vorbereitung und Repetition der üK-Module"
  },
  {
   "id": "qv",
   "name": "QV-Vorbereitung",
   "beschreibung": "Training für die Abschlussprüfung"
  }
 ],
 "faecher": [
  {
   "id": "a",
   "bereich": "bfs",
   "kuerzel": "A",
   "titel": "Organisieren der Installationsarbeiten",
   "berufe": [
    "EI"
   ],
   "themen": [
    {
     "id": "a1.1",
     "kompetenz": "a1 Ausführungsunterlagen prüfen und den Elektroinstallationseinsatz vorbereiten",
     "titel": "Sie interpretieren verschiedene Ausführungsunterlagen.",
     "taxonomie": "K4",
     "lehrjahre": [
      2,
      3,
      4
     ],
     "lektionen": [
      0,
      20,
      20,
      10
     ],
     "inhalte": {
      "2": "Sie erstellen Installationspläne, Stromlaufschemas und Kabelzugspläne. Einfamilienhaus, Wohnungen, kleine Werkstätten.",
      "3": "Sie ergänzen vorhandene Installationspläne, Stromlaufschemas und Kabelzugspläne. Pumpensteuerungen, Motorensteuerungen, Lüftungen, Klimaanlagen, Heizungssteuerungen und Speicherprogrammierbare Steuerungen (Klein-SPS) sowie Photovoltaik Anlagen im Einfamilienhaus Segment.",
      "4": "Sie analysieren Installationspläne, Stromlaufschemas und Kabelzugspläne von Praxisprojekten. Pumpensteuerungen, Motorensteuerungen, Lüftungen, Klimaanlagen, Heizungssteuerungen und Speicherprogrammierbare Steuerungen (Klein-SPS) sowie Photovoltaik Anlagen im Einfamilienhaus Segment."
     }
    },
    {
     "id": "a1.4",
     "kompetenz": "a1 Ausführungsunterlagen prüfen und den Elektroinstallationseinsatz vorbereiten",
     "titel": "Sie erläutern die Gefahren und Risiken zur Arbeitssicherheit und zum Gesundheitsschutz.",
     "taxonomie": "K2",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      5,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie begründen sichere Arbeitsplätze, Erste Hilfe - ABCD, 5+5 Sicherheitsregeln, Persönliche Schutzausrüstung. Sie verdeutlichen sicherheitsbewusstes Handeln im Berufsalltag, Gefahren erkennen, Unfälle vermeiden. Sie erklären die Branchenlösungen (BATISEC). SUVA-Dokumentationen: Arbeitsvorbereitung (AVOR) Checkliste - Persönliche Schutzausrüstungen (PSA) Elektrizität auf Baustellen – Checkliste für mehr Sicherheit Sichere Lehrzeit Notfallplanung für ortsfeste Arbeitsplätze Wissen Ihre Mitarbeitenden, was bei einem Notfall zu tun ist? Checkliste Elektrohandwerkzeuge – Intakte Maschinen, sicher Arbeiten"
     }
    },
    {
     "id": "a1.5",
     "kompetenz": "a1 Ausführungsunterlagen prüfen und den Elektroinstallationseinsatz vorbereiten",
     "titel": "Sie erläutern die rechtlichen Grundlagen zur Arbeitssicherheit.",
     "taxonomie": "K2",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      5,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie beschreiben die rechtlichen Grundlagen zur Arbeitssicherheit: In der Starkstromverordnung:\n- Unfallverhütung\n- Massnahmen bei Unfällen und Schadenfällen durch Elektrizität Sie beschreiben die rechtlichen Grundlagen zur Arbeitssicherheit in der Niederspannungsinstallationsverordnung:\n- Grundlegende Anforderungen an die Sicherheit\n- Arbeitssicherheit"
     }
    },
    {
     "id": "a2.1",
     "kompetenz": "a2 Technische Dokumentationen für Elektroanlagen erstellen",
     "titel": "Sie beschreiben die technischen Grundlagen für Dokumentationen.",
     "taxonomie": "K2",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      30,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie begründen die Grundlagen des elektrischen Stromkreises, Spannung, Strom, Leistung, Widerstand, Arbeit. Sie messen einfache elektrische Grössen, Spannung, Strom, Leistung, Widerstand, Arbeit. Sie stellen die Grundlagen der Schemakunde dar. Schema 0, 1, 2, 3, 6, Installationsplan, Apparateplan, Stromlaufschema, Wirkschaltschema und Prinzipschema."
     }
    },
    {
     "id": "a2.2",
     "kompetenz": "a2 Technische Dokumentationen für Elektroanlagen erstellen",
     "titel": "Sie beschreiben die wichtigsten Anforderungen aus den Regeln der Technik.",
     "taxonomie": "K2",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      10,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie begründen die Grundlagen der Niederspannungsinstallationsnorm NIN in Bezug auf Basis-, Fehler-, Zusatzschutz."
     }
    },
    {
     "id": "a2.3",
     "kompetenz": "a2 Technische Dokumentationen für Elektroanlagen erstellen",
     "titel": "Sie erstellen Zeichnungen und Detailpläne.",
     "taxonomie": "K3",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      20,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie erstellen technische Zeichnungen für einfache Werkstücke, Abdeckungen, Befestigungsträger. Sie realisieren elektrische Detailpläne für Bad und Küche. Sie erstellen Impulskontaksteuerungen und Dauerkontaktsteuerungen. Sie erstellen Kabelzugspläne gemäss Praxisauftrag."
     }
    },
    {
     "id": "a2.4",
     "kompetenz": "a2 Technische Dokumentationen für Elektroanlagen erstellen",
     "titel": "Sie berechnen Leitungen und Schutzsysteme.",
     "taxonomie": "K3",
     "lehrjahre": [
      1,
      2
     ],
     "lektionen": [
      30,
      15,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie wenden die Grundlagen der Mathematik an, Koordinatensysteme, Massvorsätze, Zehnerpotenzen, Elektrotechnik Formeln umwandeln, Taschenrechner bedienen. Sie berechnen mit den elektrotechnischen Grundlagen, Ohmsches Gesetz, Stromdichte, Leistung, Serie- und Parallelschaltung, Gemischte Schaltung, Kirchhoffsche Gesetze, Leiterwiderstand, Spannungsfall, Spannungsquellen, Energie, Kosten, Wirkungsgrad.",
      "2": "Sie verwenden die Grundlagen für die Überstrom-Schutzeinrichtungen, Leitungsschutzschalter, Normalleistungssicherung, Niederspannungshochleistungssicherung, Fehlerstromschutzschalter und Brandschutzeinrichtungen (AFDD). Sie entwickeln den Aufbau, die Funktionsweise und die Eigenschaften von Überstrom-Schutzeinrichtungen Leitungsschutzschalter, Normalleistungssicherung, Niederspannungshochleistungssicherung, Fehlerstromschutzschalter."
     }
    },
    {
     "id": "a2.5",
     "kompetenz": "a2 Technische Dokumentationen für Elektroanlagen erstellen",
     "titel": "Sie dimensionieren Leitungen und Schutzsysteme.",
     "taxonomie": "K3",
     "lehrjahre": [
      2,
      3
     ],
     "lektionen": [
      0,
      5,
      10,
      0
     ],
     "inhalte": {
      "2": "Sie wählen die Anwendungsbereiche von Überstrom-Schutzeinrichtungen Leitungsschutzschalter, Normalleistungssicherung, Niederspannungshochleistungssicherung, Fehlerstromschutzschalter aus. Sie erklären den Überstromschutz von Fehlerstromschutzschalter (RCD) und die Dimensionierung von Fehlerstromschutzschalter (RCD). Sie illustrieren die besonderen Eigenschaften wie Selektivität und Kurzzeitverzögerung.",
      "3": "Sie dimensionieren die Leitungen gemäss Niederspannungsinstallationsnorm NIN. Sie erklären und wenden die 7 Schritte der Leitungsdimensionierung nach den kombinierten Umrechnungsfaktoren (KGH-Tabelle) an."
     }
    },
    {
     "id": "a2.7",
     "kompetenz": "a2 Technische Dokumentationen für Elektroanlagen erstellen",
     "titel": "Sie erarbeiten Detailunterlagen.",
     "taxonomie": "K3",
     "lehrjahre": [
      1,
      2
     ],
     "lektionen": [
      5,
      10,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie zeichnen Prinzipschemen von Wohnungen, Einfamilienhäusern, kleinen Werkstätten und Büros.",
      "2": "Sie ergänzen Prinzipschemen von Wohnungen, Einfamilienhäusern, kleinen Werkstätten und Büros. Sie transferieren die komplette Dimensionierung aller Leiter wie Schutzpotentialausgleichsleiter, Erdungsleiter, Fundamenterder in ein Prinzipschema."
     }
    },
    {
     "id": "a3.1",
     "kompetenz": "a3 Material und Werkzeug gemäss Elektroinstallationsauftrag bestellen und bereitstellen",
     "titel": "Sie interpretieren Eigenschaften von Werkstoffen.",
     "taxonomie": "K2",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      5,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie beschreiben verschiedene Eigenschaften. Mechanische, thermische, elektrische, chemische und Anwendungen von Kupfer, Aluminium, Eisen, Kunststoff (PVC) und Gummi."
     }
    },
    {
     "id": "a4.1",
     "kompetenz": "a4 Arbeitsplatz für die Elektroinstallationsarbeiten einrichten und sichern",
     "titel": "Sie beschreiben die wichtigsten gefährlichen Stoffe und ihre Auswirkungen auf die Gesundheit.",
     "taxonomie": "K2",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      5,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie interpretieren folgende Gefahrensymbole, Vorsicht gefährlich, hochentzündlich, brandfördernd, explosiv, Gas unter Druck, gewässergefährdend, ätzend, gesundheitsschädigend, hochgiftig. Sie erklären eine geeignete Schutzmassnahme zur Unfallvermeidung. Sie beschreiben den Umgang mit Asbest gemäss SUVA-Richtlinien."
     }
    },
    {
     "id": "a4.2",
     "kompetenz": "a4 Arbeitsplatz für die Elektroinstallationsarbeiten einrichten und sichern",
     "titel": "Sie beschreiben den sicheren Umgang mit Elektrizität.",
     "taxonomie": "K2",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      5,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie erklären den Geltungsbereich der Niederspannungsinstallationsnorm NIN bezüglich Ströme, Spannungen, Frequenzbereich. Sie verdeutlichen die Einflussfaktoren für den sicheren Umgang mit Elektrizität, Spannung, Strom, Zeit gemäss Niederspannungsinstallationsnorm NIN."
     }
    },
    {
     "id": "a4.3",
     "kompetenz": "a4 Arbeitsplatz für die Elektroinstallationsarbeiten einrichten und sichern",
     "titel": "Sie beschreiben die Inhalte Bauarbeitenverordnung (BauAV) der SUVA.",
     "taxonomie": "K2",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      5,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie beschreiben die nötigen Massnahmen zum Schutz von Sicherheit und Gesundheit der Arbeitnehmenden auf Baustellen anhand der Bauarbeitenverordnung (BauAV). Sie verdeutlichen die Bauarbeitenverordnung anhand von Praxisbeispielen."
     }
    },
    {
     "id": "a4.4",
     "kompetenz": "a4 Arbeitsplatz für die Elektroinstallationsarbeiten einrichten und sichern",
     "titel": "Sie beschreiben in welchen Situationen und Tätigkeiten eine entsprechende persönliche Schutz-ausrüstung (PSA) getragen wird.",
     "taxonomie": "K3",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      5,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie setzen die Notwendigkeit der verschiedenen Schutzstufen, Zwiebelschalenmodell gemäss Niederspannungsinstallationsnorm NIN um. Sie wählen, bei welchen Kurzschlussstromstärken welche Schutzstufe der persönlichen Schutzausrüstung (PSA) angewendet werden muss."
     }
    }
   ]
  },
  {
   "id": "b",
   "bereich": "bfs",
   "kuerzel": "B",
   "titel": "Einbauen von Elektroinstallationen im Rohbau",
   "berufe": [
    "EI"
   ],
   "themen": [
    {
     "id": "b1.1",
     "kompetenz": "b1 Bauprovisorien für Elektroanlagen erstellen, anschliessen und in Betrieb nehmen",
     "titel": "Sie wenden Kabeldimensionierungen, Leistungsbedarf, Selektivität, Steckvorrichtungen und Schutzsysteme an.",
     "taxonomie": "K3",
     "lehrjahre": [
      1,
      2
     ],
     "lektionen": [
      10,
      10,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie setzen die Bestimmungen der Schutzmassnahmen der Niederspannungsinstallationsnorm NIN um. Schutz gegen thermische Einflüsse, Nullungsarten, Überstromschutz, Schutz gegen Überspannung, Schutz gegen Unterspannung, äussere Einflüsse.",
      "2": "Sie setzen die Bestimmungen der Schutzmassnahmen der Niederspannungsinstallationsnorm NIN um. Trennen und Schalten, Steckvorrichtungen. Sie berechnen Leitungsquerschnitte gemäss Niederspannungsinstallationsnorm NIN. Überstrom- und Kurzschlussschutz, Selektivität etc."
     }
    },
    {
     "id": "b1.3",
     "kompetenz": "b1 Bauprovisorien für Elektroanlagen erstellen, anschliessen und in Betrieb nehmen",
     "titel": "Sie erklären die erhöhten Anforderungen an die Installation bezüglich der Regeln der Technik.",
     "taxonomie": "K2",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      5,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie erklären die Zusammenhänge zwischen Gesetz, Verordnungen, Institutionen, Normen und ergänzenden Weisungen der Netzbetreiber. Sie interpretieren verschiedene Verordnungen. Niederspannungsinstallationsverordnung (NIV), Niederspannungserzeugnisverordnung (NEV), Starkstromverordnung (StV) in Zusammenhang mit der Berufsausübung."
     }
    },
    {
     "id": "b2.1",
     "kompetenz": "b2 Erdungs-, Blitzschutz- und Potentialausgleichssysteme erstellen und dokumentieren",
     "titel": "Sie setzen die anerkannten Regeln der Technik für Erdungs-, Blitzschutz-und Potentialausgleich-systeme um.",
     "taxonomie": "K3",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      10,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie interpretieren die Bestimmungen der allgemeinen Merkmale gemäss Niederspannungsinstallationsnorm NIN. Sie wählen das Installationsmaterial entsprechend den äusseren Einflüssen, chemisch, mechanisch, thermisch, elektrisch aus. Sie dimensionieren Erder, Erdungsleitung, Blitzschutzsysteme, Schutzpotentialausgleichsleiter, Fundamenterder."
     }
    },
    {
     "id": "b3.2",
     "kompetenz": "b3 Positionen der elektrischen Komponenten einmessen und anzeichnen",
     "titel": "Sie beschreiben technische Hilfsmittel für das Einmessen und Anzeichnen.",
     "taxonomie": "K2",
     "lehrjahre": [
      1,
      4
     ],
     "lektionen": [
      5,
      0,
      0,
      5
     ],
     "inhalte": {
      "1": "Sie beschreiben die Grundlagen für das Einmessen und Anzeichnen. Koordinatensystem im Installationsplan, Massstäbe umrechnen.",
      "4": "Sie beschreiben die Möglichkeiten von digitalen Hilfsmitteln z.B. Augment Reality, R-Technik, Building Information Modelling, Künstliche Intelligenz."
     }
    },
    {
     "id": "b4.1",
     "kompetenz": "b4 Decke und Wände dübeln und verrohren",
     "titel": "Sie beschreiben Einlegematerialien und deren Verwendungszweck.",
     "taxonomie": "K2",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      5,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie begründen den Einsatz der richtigen Rohrarten und Einlegematerialien. Lampendübel, Einlasskasten, Schalungsschoner, Übergangsdübel, Dosen, Rohrstützen, etc. gemäss Niederspannungsinstallationsnorm NIN."
     }
    },
    {
     "id": "b4.4",
     "kompetenz": "b4 Decke und Wände dübeln und verrohren",
     "titel": "Sie erklären den Ablauf bei der Trennung und Entsorgung von Abfällen und Gefahrenstoffen.",
     "taxonomie": "K2",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      5,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie formulieren die verschiedenen umweltfreundlichen Entsorgungsregeln und geben korrekte Beispiele an, Kreislaufwirtschaft, Vorgezogene Recycling Gebühr VrG. Sie beschreiben den nachhaltigen Recycling-Prozess für die berufsbezogenen Materialien. Altkupfer, Elektroschrott, Metalle, Kunststoffe. Sie erläutern die Vorgehensweise für die Entsorgung von Asbest."
     }
    },
    {
     "id": "b5.1",
     "kompetenz": "b5 Unterputzinstallationen einbauen",
     "titel": "Sie beschreiben den Einfluss von Wärmebrücken, Schallübertragung und den Brandschutz in Bezug auf die Installation.",
     "taxonomie": "K2",
     "lehrjahre": [
      1,
      4
     ],
     "lektionen": [
      5,
      0,
      0,
      5
     ],
     "inhalte": {
      "1": "Sie erklären Massnahmen zur Verhinderung der Schallübertragung bei elektrischen Installationen auf.",
      "4": "Sie erklären Brandschutzmassnahmen bezüglich Zündquelle, Brandverhalten und Brennbarkeitsgrade. Sie interpretieren Funktionserhalt und Wahl der Leitungen gemäss Niederspannungsinstallationsnorm NIN."
     }
    },
    {
     "id": "b6.2",
     "kompetenz": "b6 Kabeltragsysteme montieren",
     "titel": "Sie setzen die physikalischen Eigenschaften von Kabeltragsystemen um.",
     "taxonomie": "K3",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      10,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie wenden die physikalischen Grundlagen an. Materialeigenschaften, Gewichtskraft, graphische Kräfteaddition, Vektoren, Drehmoment, etc."
     }
    },
    {
     "id": "b7.2",
     "kompetenz": "b7 Kabel und Drähte einziehen",
     "titel": "Sie beschreiben die Einsatzgebiete, Anwendungen und Eigenschaften von Kabel und Drähten in Bezug auf die verschiedenen Umgebungseinflüsse (z.B. thermisch-mechanisch-chemisch-elek-trisch).",
     "taxonomie": "K3",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      5,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie verwenden die korrekten Drähte und Kabel für das richtige Einsatzgebiet. Sie gebrauchen die korrekten Kurzbezeichnungen der Kabel und Drähte gemäss Niederspannungsinstallationsnorm NIN."
     }
    }
   ]
  },
  {
   "id": "c",
   "bereich": "bfs",
   "kuerzel": "C",
   "titel": "Installieren von Elektroanlagen",
   "berufe": [
    "EI"
   ],
   "themen": [
    {
     "id": "c1.1",
     "kompetenz": "c1 Elektrische Endverbraucher, Apparate und Leitungen montieren",
     "titel": "Sie beschreiben verschiedene Apparate, Verbraucher und Leitungen.",
     "taxonomie": "K2",
     "lehrjahre": [
      1,
      2
     ],
     "lektionen": [
      5,
      15,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie begründen anhand des Leitungswiderstandes den Spannungsfall und die Erwärmung der Leitungen im Betrieb gemäss Niederspannungsinstallationsnorm NIN.",
      "2": "Sie erklären die Grundlagen für Dioden, Gleichrichter, Einweg- und Zweiweggleichrichter. Sie erklären folgende elektrische Apparate: elektrische Heizgeräte, Kochfelder Strahlung und Induktion, Regler, Wassererwärmer, Thermostaten, Kälte- und Wärmegeräte, Wärmepumpe-Modell, Gleich- und Wechselrichter-Modelle, Leuchtmittel (LED)."
     }
    },
    {
     "id": "c1.2",
     "kompetenz": "c1 Elektrische Endverbraucher, Apparate und Leitungen montieren",
     "titel": "Sie beschreiben für die Montage der Verbraucher und Apparate die geeigneten Montage materialien (z.B. Brandschutz / korrosive Räume).",
     "taxonomie": "K2",
     "lehrjahre": [
      2
     ],
     "lektionen": [
      0,
      5,
      0,
      0
     ],
     "inhalte": {
      "2": "Sie legen fallbezogen die verschiedenen Montagematerialien und Verbraucher entsprechend äusseren Einflüssen nach Niederspannungsinstallationsnorm NIN und Herstellerangaben fest. Sie legen fallbezogen die verschiedenen Montagematerialien und Verbraucher entsprechend dem Brandschutzverhalten nach Niederspannungsinstallationsnorm NIN und Herstellerangaben fest."
     }
    },
    {
     "id": "c1.4",
     "kompetenz": "c1 Elektrische Endverbraucher, Apparate und Leitungen montieren",
     "titel": "Sie legen verschiedene Beschriftungskonzepte für Apparate, Verbraucher und Leitungen fest.",
     "taxonomie": "K3",
     "lehrjahre": [
      1,
      2
     ],
     "lektionen": [
      5,
      5,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie benutzen die richtige Kennzeichnung von Apparaten, Verbrauchern und Leitungen in Wirkstromschemas, Stromlaufschemas und Installationsplänen.",
      "2": "Sie setzen das vorgegebene Beschriftungskonzept an Praxisbeispielen um."
     }
    },
    {
     "id": "c2.1",
     "kompetenz": "c2 Elektrische Endverbraucher, Apparate und Leitungen anschliessen",
     "titel": "Sie analysieren verschiedene Herstellerdokumentationen und Kenndaten von Verbrauchern, Apparaten und elektrischen Komponenten.",
     "taxonomie": "K4",
     "lehrjahre": [
      1,
      2
     ],
     "lektionen": [
      5,
      35,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie entnehmen aus Praxisbeispielen gemäss Herstellerangaben, wie die Verbraucher und Apparate Licht, Sonnerie, Kraft angeschlossen werden.",
      "2": "Sie analysieren die Grundlagen der Wechselstromtechnik. Frequenz, Scheitel- und Effektivwert, Periodendauer, Kreisfrequenz, Übersetzungsverhältnisse von Einphasen-Transformatoren. Sie berechnen anhand der Trigonometrie und des Satzes des Pythagoras: Schein-, Wirk- und Blindleistung, Schein-, Wirk- und Blindwiderstand, Leistungsfaktor, Widerstand und Induktivität in Serie, Widerstand und Kapazität in Serie. Sie interpretieren Kompensationsanlagen. Sie entnehmen von einem Beschrieb oder Typenschild die notwendigen Herstellerangaben."
     }
    },
    {
     "id": "c2.2",
     "kompetenz": "c2 Elektrische Endverbraucher, Apparate und Leitungen anschliessen",
     "titel": "Sie beschreiben Betriebsmittel und Komponenten in Bezug auf Energieeffizienz.",
     "taxonomie": "K2",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      5,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie interpretieren die Energielabel und die Energieklassen. Sie interpretieren den Coefficient of Performance (COP) Wert einer Wärmepumpe. Sie begründen, weshalb eine bessere Energieklasse langfristig kostengünstiger ist."
     }
    },
    {
     "id": "c2.3",
     "kompetenz": "c2 Elektrische Endverbraucher, Apparate und Leitungen anschliessen",
     "titel": "Sie beschreiben die geltenden Normen zu fachgerechten Anschlüssen von elektrischen Verbrauchern.",
     "taxonomie": "K2",
     "lehrjahre": [
      1,
      2
     ],
     "lektionen": [
      5,
      5,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie erklären gemäss NIN anhand von Praxisbeispielen die korrekten Anschlüsse von elektrischen Betriebsmitteln: Klemmen, Schalter, Steckdosen, Leuchtmittel, Motoren, etc.",
      "2": "Sie erklären gemäss den Werkvorschriften anhand von Praxisbeispielen die korrekten Anschlüsse von elektrischen Betriebsmitteln. Erzeuger und sperrbare Verbraucher."
     }
    },
    {
     "id": "c2.4",
     "kompetenz": "c2 Elektrische Endverbraucher, Apparate und Leitungen anschliessen",
     "titel": "Sie erklären die Kontrolle der Anschlüsse gemäss den anerkannten Regeln.",
     "taxonomie": "K2",
     "lehrjahre": [
      3
     ],
     "lektionen": [
      0,
      0,
      5,
      0
     ],
     "inhalte": {
      "3": "Sie beschreiben die Sichtprüfung gemäss Niederspannungsinstallationsnorm NIN. Sie erklären den Inhalt und die Bedeutung der Niederspannungsinstallationsverordnung NIV und begründen deren Verwendung."
     }
    },
    {
     "id": "c3.1",
     "kompetenz": "c3 Elektroverteilung herstellen und anschliessen",
     "titel": "Sie unterscheiden Schutzorgane nach ihren Anwendungen.",
     "taxonomie": "K4",
     "lehrjahre": [
      4
     ],
     "lektionen": [
      0,
      0,
      0,
      10
     ],
     "inhalte": {
      "4": "Sie ordnen folgende Komponenten anwendungsbezogen im Prinzipschema zu: Schmelzsicherungen, Niederspannungnormalleistungssicherung (NLS), Niederspannungshochleistungssicherung (NHS), Leitungsschutzschalter (LS), Motorschutzschalter (MSS), Motorschutzrelais (MSR), Brandschutzschalter (AFDD), Fehlerstromschutzschalter (RCD / FI-LS / RCBO), Überspannungsschutz (SPD)."
     }
    },
    {
     "id": "c3.2",
     "kompetenz": "c3 Elektroverteilung herstellen und anschliessen",
     "titel": "Sie wählen Schutzorgane nach deren Funktionsweise aus.",
     "taxonomie": "K3",
     "lehrjahre": [
      2
     ],
     "lektionen": [
      0,
      10,
      0,
      0
     ],
     "inhalte": {
      "2": "Sie wählen das geeignete Schutzorgan anhand folgender Merkmale: Auslösecharakteristik, magnetische und thermische Auslösung, Strombegrenzungsklasse, Nennschaltvermögen, Nennströme usw."
     }
    },
    {
     "id": "c3.3",
     "kompetenz": "c3 Elektroverteilung herstellen und anschliessen",
     "titel": "Sie beschreiben die Schalt-und Steuerapparate",
     "taxonomie": "K2",
     "lehrjahre": [
      2
     ],
     "lektionen": [
      0,
      10,
      0,
      0
     ],
     "inhalte": {
      "2": "Sie interpretieren Schaltapparate. Hauptschalter, Wartungsschalter, Not-Aus, Schalter für betriebsmässiges Schalten, Steckverbindungen usw. Sie interpretieren Steuerapparate, Relais, Schütz, potentialfreie Kontakte von Rundsteuerempfänger (RSE), Wärmepumpe und Wechselrichter. Sie erläutern die Anwendung und die Funktionsweise der Schalt- und Steuerapparate."
     }
    },
    {
     "id": "c3.4",
     "kompetenz": "c3 Elektroverteilung herstellen und anschliessen",
     "titel": "Sie dimensionieren die Schutzorgane unter Anwendung ihrer Kenngrössen.",
     "taxonomie": "K3",
     "lehrjahre": [
      2
     ],
     "lektionen": [
      0,
      10,
      0,
      0
     ],
     "inhalte": {
      "2": "Sie wählen das geeignete Schutzorgan gemäss Niederspannungsinstallationsnorm NIN aufgrund des Überlastschutzes und Kurzschlussschutzes aus. Sie überprüfen die Schutzorgane in Bezug auf Selektivität, Backup-Schutz, Gleichzeitigkeitsfaktor, Bemessungsströme und Typen von Fehlerstromschutzschaltern (RCD)."
     }
    },
    {
     "id": "c3.6",
     "kompetenz": "c3 Elektroverteilung herstellen und anschliessen",
     "titel": "Sie wählen die richtigen Betriebsmittel auftragsbezogen für die Schaltgerätekombination aus",
     "taxonomie": "K3",
     "lehrjahre": [
      2
     ],
     "lektionen": [
      0,
      10,
      0,
      0
     ],
     "inhalte": {
      "2": "Sie bestimmen aus einem Prinzipschema eines Einfamilienhauses, einer Wohnung oder einer kleinen Werkstatt die einzubauenden Komponenten für die Schaltgerätekombination. Sie bestücken die Schaltgerätekombination mit den geeigneten Komponenten gemäss Niederspannungsinstallationsnorm NIN und Werkvorschriften (WV-CH). Sie erstellen eine entsprechende Stückliste dazu."
     }
    },
    {
     "id": "c3.7",
     "kompetenz": "c3 Elektroverteilung herstellen und anschliessen",
     "titel": "Sie beschreiben die technische Dokumentation.",
     "taxonomie": "K2",
     "lehrjahre": [
      2
     ],
     "lektionen": [
      0,
      5,
      0,
      0
     ],
     "inhalte": {
      "2": "Sie interpretieren an einem Praxisbeispiel die technische Dokumentation. Typenschild, Bauanforderung, Bauartennachweis, Stücknachweis, Konformitätserklärungen, Schemas und Legenden."
     }
    },
    {
     "id": "c4.1",
     "kompetenz": "c4 Elektrische Anlagen und Steuerungssysteme installieren",
     "titel": "Sie beschreiben verschiedene Steuerungssysteme.",
     "taxonomie": "K2",
     "lehrjahre": [
      2
     ],
     "lektionen": [
      0,
      10,
      0,
      0
     ],
     "inhalte": {
      "2": "Sie erklären den Unterschied zwischen Steuern und Regeln. Sie erläutern die Aufgaben von Sensoren und Aktoren. Sie benennen Beispiele von Sensoren und Aktoren die zur Anwendung kommen. Sie erklären den Einsatz von speicherprogrammierbaren Steuerungen (Klein-SPS). Sie beschreiben die Funktion von logischen Grundverknüpfungen wie AND, OR, NAND, NOR und NOT."
     }
    },
    {
     "id": "c4.2",
     "kompetenz": "c4 Elektrische Anlagen und Steuerungssysteme installieren",
     "titel": "Sie zeichnen einfache Steuerungssysteme.",
     "taxonomie": "K3",
     "lehrjahre": [
      2,
      4
     ],
     "lektionen": [
      0,
      20,
      0,
      10
     ],
     "inhalte": {
      "2": "Sie entwickeln Stromlaufschemas für Torsteuerungen, Pumpensteuerungen, Kransteuerungen und Motorensteuerungen mit Anlaufverfahren. Direkt, Softstarter, Frequenzumformer. Sie interpretieren Stromlaufschemas für Heizung-Lüftung-Klima-Steuerungen und Wärmepumpensteuerungen. Sie erstellen einen Kabelzugsplan für Heizung-Lüftung-Klima-Steuerungen und Wärmepumpensteuerungen. Sie erstellen Wahrheitstabellen, Blockschaltbilder und Stromlaufschemas von logischen Grundverknüpfungen wie AND, OR, NAND, NOR und NOT.",
      "4": "Sie binden in einem bestehenden Stromlaufschema die notwendigen Komponenten für ein Lastmanagement ein. Ladestationen für Elektromobilität. Sie wählen in einem Praxisbeispiel geeignete Geräte für die Visualisierung und die Energieoptimierung aus."
     }
    },
    {
     "id": "c5.1",
     "kompetenz": "c5 Zusatzaufträge und Änderungen entgegennehmen und dokumentieren",
     "titel": "Sie beschreiben einen Projektablauf.",
     "taxonomie": "K2",
     "lehrjahre": [
      1,
      3
     ],
     "lektionen": [
      5,
      0,
      5,
      0
     ],
     "inhalte": {
      "1": "Sie erarbeiten für eine Lichtinstallation einen einfachen Projektablauf anhand der folgenden Grundlagen: Termine, Zuständigkeiten, Material-Stücklisten.",
      "3": "Sie begründen den notwendigen Projektablauf anhand eines vorgegebenen, geänderten Praxisprojektes wie: Torsteuerungen, Pumpensteuerungen, Kransteuerungen, Motorensteuerungen mit Anlaufverfahren. Direkt-, Softstarter, Frequenzumformer, Heizung-Lüftung-Klima-Steuerungen und Wärmepumpensteuerungen. Sie erklären die angepassten Dokumentationen."
     }
    }
   ]
  },
  {
   "id": "d",
   "bereich": "bfs",
   "kuerzel": "D",
   "titel": "Installieren von Gebäudetechnik",
   "berufe": [
    "EI"
   ],
   "themen": [
    {
     "id": "d1.1",
     "kompetenz": "d1 Gebäudeautomationskomponenten und Raumautomationssysteme installieren",
     "titel": "Sie beschreiben die verschiedenen Komponenten und Systeme.",
     "taxonomie": "K2",
     "lehrjahre": [
      2,
      3
     ],
     "lektionen": [
      0,
      20,
      10,
      0
     ],
     "inhalte": {
      "2": "Sie stellen Arten und Prinzipien von Bussystemen dar, welche für Elemente der Gebäudeautomation, Raumautomation Energiemanagementsysteme verwendet werden. Sie bezeichnen Komponenten wie Sensoren, Aktoren oder Systeme z.B. für Heiz- und Kühlungssysteme, Smart-Home-Systeme für die Steuerung von Beleuchtung, Audio-Videoanlagen, Heizung, Klimaanlage, Sicherheits- und Überwachungssysteme. Sie erklären deren Funktionen und stellen Schemas von BUS-Systemen dar.",
      "3": "Sie interpretieren verschiedene BUS-Systeme wie z.B. Wiser, Legrand My Home, ABB Free@home, Aladin, DALI, Shelly, Loxone und KNX."
     }
    },
    {
     "id": "d1.2",
     "kompetenz": "d1 Gebäudeautomationskomponenten und Raumautomationssysteme installieren",
     "titel": "Sie realisieren Prinzipschemata zu Raumautomationssystemen.",
     "taxonomie": "K3",
     "lehrjahre": [
      4
     ],
     "lektionen": [
      0,
      0,
      0,
      20
     ],
     "inhalte": {
      "4": "Sie entwickeln aus einem vorgegebenen Praxisbeispiel ein Prinzipschema mit Verknüpfung diverser Gewerke. Heiz- und Kühlungssysteme, Smart-Home-Systeme für die Steuerung von Beleuchtung, Heizung, Sicherheits- und Überwachungssysteme."
     }
    },
    {
     "id": "d1.4",
     "kompetenz": "d1 Gebäudeautomationskomponenten und Raumautomationssysteme installieren",
     "titel": "Sie beschreiben die Potenziale und Möglichkeiten der Gebäudeautomation zur Reduktion des Energieverbrauchs.",
     "taxonomie": "K2",
     "lehrjahre": [
      2
     ],
     "lektionen": [
      0,
      10,
      0,
      0
     ],
     "inhalte": {
      "2": "Sie erklären die funktionalen Aspekte gemäss Energieeffizienz NIN entsprechend dem Regelkreis der System-, Betriebs-Optimierung und Bewertung."
     }
    },
    {
     "id": "d2.1",
     "kompetenz": "d2 Elektrische Energiesysteme installieren",
     "titel": "Sie begründen den Einsatz von verschiedenen Energieverteilsystemen in Bezug auf Effizienz, Elektromagnetischer Verträglichkeit (EMV) usw.",
     "taxonomie": "K2",
     "lehrjahre": [
      2
     ],
     "lektionen": [
      0,
      30,
      0,
      0
     ],
     "inhalte": {
      "2": "Sie beschreiben die Grundlagen für elektrische und magnetische Felder Ursache, Feldlinien, Wirkungen, Abschirmung. Sie erklären die Grundlagen der elektromagnetischen Verträglichkeit (EMV) gemäss Niederspannungsinstallationsnorm NIN. Sie erklären die geeigneten Massnahmen zur EMV-Reduktion Abschirmungen, Abstände, Verlegearten, Materialeigenschaften, Erdungskonzept. Sie erklären die gundlegenden Vor- und Nachteile von Energieübertragung bei Wechselstrom (AC) und Gleichstrom (DC) in Bezug auf die Energieeffizienz."
     }
    },
    {
     "id": "d2.2",
     "kompetenz": "d2 Elektrische Energiesysteme installieren",
     "titel": "Sie wählen verschiedene Energieerzeugungsanlagen und deren Vor-und Nachteile aus.",
     "taxonomie": "K3",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      20,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie beschreiben das schweizerische Übertragungsnetz anhand der sieben Netzebenen. Sie erörtern elektrische Verbraucher anhand der Energieformen. Elektrische, mechanische, thermische. Sie setzen die Schaltungsarten von Photovoltaik Modulen um. Sie verdeutlichen die Vor- und Nachteile von folgenden Energieerzeugungsanlagen: Photovoltaik Anlagen."
     }
    },
    {
     "id": "d2.3",
     "kompetenz": "d2 Elektrische Energiesysteme installieren",
     "titel": "Sie wählen verschiedene Energiespeichersysteme und deren Vor-und Nachteile aus.",
     "taxonomie": "K3",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      20,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie wenden die Schaltungsarten von Akkumulatoren an. Sie zeigen die Vor- und Nachteile von folgenden Energiespeichersystemen auf: Netzersatzanlagen, Akkumulatoren, thermische Speicher."
     }
    },
    {
     "id": "d2.4",
     "kompetenz": "d2 Elektrische Energiesysteme installieren",
     "titel": "Sie beschreiben die Steuerungs-Überwachungs-und Schutzkomponenten für Energiesysteme.",
     "taxonomie": "K2",
     "lehrjahre": [
      2
     ],
     "lektionen": [
      0,
      5,
      0,
      0
     ],
     "inhalte": {
      "2": "Sie erklären die Grundlagen von kombinierten Erzeugungs- und Verbrauchsanlagen (Prosumer-Gebäude) gemäss Niederspannungsinstallationsnorm NIN und beschreiben dazu Mess-, Steuerund Schutzgeräte, beispielsweise Energiezähler, Energieüberwachungssystem, Gateways und Energieserver, Verbrauchsmessungen, Isolationswächter, Stromwandler und Universalmessgeräte."
     }
    },
    {
     "id": "d2.5",
     "kompetenz": "d2 Elektrische Energiesysteme installieren",
     "titel": "Sie begründen die Anwendung Steuerungs-Überwachungs-und Schutzkomponenten für Energiesysteme.",
     "taxonomie": "K2",
     "lehrjahre": [
      2
     ],
     "lektionen": [
      0,
      15,
      0,
      0
     ],
     "inhalte": {
      "2": "Sie erklären aus einem vorgegebenen Praxisbeispiel anhand eines Prinzipschemas ein Energiemanagementsystem mit den Komponenten Wärmepumpe, Photovoltaik, Wassererwärmer, Energiespeicher, Akku, Elektromobilität, Beleuchtung, Beschattung, Energiemonitoring, Smart Metering und Smart Grids."
     }
    },
    {
     "id": "d2.6",
     "kompetenz": "d2 Elektrische Energiesysteme installieren",
     "titel": "Sie beschreiben Überspannungsschutzsysteme und deren Einsatz.",
     "taxonomie": "K2",
     "lehrjahre": [
      2
     ],
     "lektionen": [
      0,
      10,
      0,
      0
     ],
     "inhalte": {
      "2": "Sie erklären anhand eines Praxisbeispiels Schutzsysteme gegen Überspannungen (z.B. Überspannungsableiter, Blitzableiter, Potentialausgleich, Fundamenterder) und begründen, wie der Überspannungsschutz für besondere Räume und Bereiche nach Niederspannungsinstallationsnorm NIN eingesetzt wird."
     }
    },
    {
     "id": "d3.1",
     "kompetenz": "d3 Elektroinstallationen für Gebäudetechnik und sicherheitstechnische Anlagen erstellen",
     "titel": "Sie unterscheiden verschiedene Gebäudetechniksysteme und sicherheitsrelevante Systeme.",
     "taxonomie": "K4",
     "lehrjahre": [
      4
     ],
     "lektionen": [
      0,
      0,
      0,
      20
     ],
     "inhalte": {
      "4": "Sie untersuchen anhand eines Praxisbeispiels anlagespezifische Dokumentationen bezüglich Komponenten der Gebäudetechnik, Sensoren und Aktoren und sicherheitsrelevante Systeme auf Mängel, Alarmanlagen, Brandschutzsysteme, Einfamilienhaus mit Wärmepumpe, Notbeleuchtung. Sie bestimmen mögliche Lösungsansätze für Alarmanlagen, Brandschutzsysteme, Einfamilienhäuser mit Wärmepumpen und Notbeleuchtung."
     }
    },
    {
     "id": "d3.2",
     "kompetenz": "d3 Elektroinstallationen für Gebäudetechnik und sicherheitstechnische Anlagen erstellen",
     "titel": "Sie zeichnen verschiedene sicherheitsrelevante Systeme der Gebäudetechnik.",
     "taxonomie": "K3",
     "lehrjahre": [
      2,
      3
     ],
     "lektionen": [
      0,
      30,
      30,
      0
     ],
     "inhalte": {
      "2": "Sie erklären anhand eines Praxisbeispiels anlagenspezifisch sicherheitsrelevante Systeme der Gebäudetechnik für Heizungs- Lüftungs- Klima/Kälte- Sanitär- und Elektroanlagen (HLKSE), beispielsweise Strömungswächter, Endschalter, Ventile, Klappen, gegenseitige Verriegelung, Schwimmer, Lichtschranke, Temperaturfühler, Druck- und Gasfühler.",
      "3": "Sie erstellen anhand eines Praxisbeispiels anlagenspezifisch ein Stromlauf-oder Prinzipschema für sicherheitsrelevante Betriebsmittel der Gebäudetechnik für Heizungs-, Lüftungs-, Klima/Kälte-, Sanitär- und Elektroanlagen (HLKSE), beispielsweise Strömungswächter, Endschalter, Ventile, Klappen, gegenseitige Verriegelung, Schwimmer, Lichtschranke, Temperaturfühler, Druck- und Gasfühler."
     }
    },
    {
     "id": "d4.1",
     "kompetenz": "d4 Kommunikationssysteme installieren",
     "titel": "Sie beschreiben die verschiedenen Systeme der Kommunikationstechnik.",
     "taxonomie": "K2",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      40,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie beschreiben Kommunikationssysteme wie beispielsweise, Router, Accesspoints, TV Boxen, Festnetz- oder Funktelefone, Netzwerkzubehör wie Powerline Adapter, Ethernetswitches, Mobile Hotspots etc. Für diese Kommunikationssysteme sowie für Komponenten der Gebäudeautomation, Energiemanagementsysteme, Multimediaanwendungen oder die Gebäudetechniksysteme beschreiben sie die dafür notwendige Datenverkabelung wie beispielsweise Ethernet, Lichtwellenleiter (FTTH, FTTB), Funk. Sie stellen die Struktur für Datennetzwerke dar. Lichtwellenleiter, Kupfer, Funk. Sie erklären die passiven Komponenten dazu. Leiter, Steckdosen, Steckverbindungen und Verteiler."
     }
    },
    {
     "id": "d4.2",
     "kompetenz": "d4 Kommunikationssysteme installieren",
     "titel": "Sie erklären die verschiedenen Parameter und Funktionen von Kommunikationssystemen.",
     "taxonomie": "K2",
     "lehrjahre": [
      1
     ],
     "lektionen": [
      20,
      0,
      0,
      0
     ],
     "inhalte": {
      "1": "Sie interpretieren Schemas von BUS-Systemen von Sonnerieanlagen mit Video- und Zutrittskontrollsystemen. Sie beschreiben Messungen der universellen Gebäudeverkabelung. Permanent-Link, Channel-Link. Sie interpretieren Messprotokolle der universellen Gebäudeverkabelung."
     }
    }
   ]
  },
  {
   "id": "e",
   "bereich": "bfs",
   "kuerzel": "E",
   "titel": "Erbringen von Dienstleistungen",
   "berufe": [
    "EI"
   ],
   "themen": [
    {
     "id": "e1.2",
     "kompetenz": "e1 Fehler und Störungen bei Elektroinstallationen suchen und beheben",
     "titel": "Sie analysieren Störungen und Fehler von Elektroinstallationen.",
     "taxonomie": "K4",
     "lehrjahre": [
      3
     ],
     "lektionen": [
      null,
      null,
      70,
      0
     ],
     "inhalte": {
      "3": "Sie analysieren die Grundlagen der Drehstromtechnik: Phasenverschiebungen der Aussenleiter, Stern-Schaltung, Dreieck-Schaltung. Sie berechnen grafisch den Neutralleiterstrom für ohmsche Verbraucher. Sie entnehmen bei elektrischen Maschinen, Drehstrom-KSA, entsprechend den Herstellerangaben die Anschlussart. Sie bestimmen den Einsatz und die Vorgehensweise des Messvorgangs Spannungs-, Strom-, Widerstands- und Leistungsmessung, Energiezähler, Luxmeter, Messgerät für Messungen nach Niederspannungsinstallationsverordnung. Sie vergleichen die Messwerte mit den zu erwartenden Sollwerten. Sie leiten geeignete Massnahmen ein und beheben die Störung. Sie testen die Funktion gemäss Niederspannungsinstallationsnorm NIN."
     }
    },
    {
     "id": "e1.6",
     "kompetenz": "e1 Fehler und Störungen bei Elektroinstallationen suchen und beheben",
     "titel": "Sie beschreiben die verschiedenen Ansprechpartner bei der Trennung und Entsorgung von Abfällen.",
     "taxonomie": "K2",
     "lehrjahre": [
      3
     ],
     "lektionen": [
      null,
      null,
      5,
      0
     ],
     "inhalte": {
      "3": "Sie interpretieren folgende Gefahrensymbole, Vorsicht gefährlich, hochentzündlich, brandfördernd, explosiv, Gas unter Druck, gewässergefährdend, ätzend, gesundheitsschädigend, hochgiftig. Sie erklären eine geeignete Schutzmassnahme zur Unfallvermeidung. Sie beschreiben den Umgang mit Asbest gemäss SUVA-Richtlinien. Sie beschreiben den Richtigen Umgang mit radioaktiven Komponenten von Brandmeldeanlagen."
     }
    },
    {
     "id": "e1.7",
     "kompetenz": "e1 Fehler und Störungen bei Elektroinstallationen suchen und beheben",
     "titel": "Sie erklären den organisatorischen Ablauf bei der Trennung und Entsorgung von Abfällen gemäss Abfallverordnung.",
     "taxonomie": "K2",
     "lehrjahre": [
      3
     ],
     "lektionen": [
      null,
      null,
      5,
      0
     ],
     "inhalte": {
      "3": "Sie erklären die regionalen Weisungen und Vorschriften der Abfallverordnung in Bezug auf die Trennung und Entsorgung von Abfällen. Sie beschreiben den allgemeinen Recycling-Prozess. LED, Photovoltaik-Module, Batterien, Akkumulatoren, Elektroschrott."
     }
    },
    {
     "id": "e2.5",
     "kompetenz": "e2 Elektrische Anlagen warten",
     "titel": "Sie führen die Geräteprüfung durch.",
     "taxonomie": "K3",
     "lehrjahre": [
      4
     ],
     "lektionen": [
      null,
      null,
      0,
      30
     ],
     "inhalte": {
      "4": "Sie wenden die Wiederholungsprüfung und die Prüfung nach Instandsetzung elektrischer Geräte an. Sichtprüfung, Messen des Schutzleiterwiderstandes, Messung des Isolationswiderstands, Messung des Schutzleiterstroms, Messung des Berührungsstroms, Nachweis der Angaben zu den Schutzmaßnahmen Sicherheitskleinspannung (SELV) und Schutzkleinspannung (PELV), Nachweis der Polarität der Verdrahtung des Netzanschlusssteckers, Funktionsprüfung, Dokumentation."
     }
    }
   ]
  },
  {
   "id": "f",
   "bereich": "bfs",
   "kuerzel": "F",
   "titel": "Abschliessen der Elektroinstallation",
   "berufe": [
    "EI"
   ],
   "themen": [
    {
     "id": "f2.2",
     "kompetenz": "f2 Baubegleitende Erstprüfung von Elektroinstallationen durchführen und diese",
     "titel": "Sie setzen die anerkannten Regeln der Technik in Bezug auf die baubegleitende Erstprüfung um.",
     "taxonomie": "K3",
     "lehrjahre": [
      3
     ],
     "lektionen": [
      null,
      null,
      40,
      0
     ],
     "inhalte": {
      "3": "Sie wenden die baubegleitende Erstprüfung gemäss Niederspannungsinstallationsnorm NIN an. Sichtprüfung, Messen und Erproben, Inbetriebnahme. Sie dokumentieren den Ablauf anhand eines Praxisbeispiels einer baubegleitenden Erstprüfung gemäß Niederspannungsinstallationsnorm NIN. Sichtprüfung, Messen und Erproben, Inbetriebnahme."
     }
    },
    {
     "id": "f2.3",
     "kompetenz": "f2 Baubegleitende Erstprüfung von Elektroinstallationen durchführen und diese",
     "titel": "Sie interpretieren die Messresultate der baubegleitenden Erstprüfung",
     "taxonomie": "K4",
     "lehrjahre": [
      4
     ],
     "lektionen": [
      null,
      null,
      0,
      50
     ],
     "inhalte": {
      "4": "Sie führen gemäss Niederspannungsinstallationsnorm NIN die baubegleitende Erstprüfung und Inbetriebnahme von Elektroinstallationen selbstständig mit geeigneten Messwerkzeugen durch. Sie stellen die Messresultate den Normwerten der Niederspannungsinstallationsnorm NIN gegenüber. Sie dokumentieren die Messresultate mittels genormter Messprotokolle. Sie leiten geeignete Massnahmen bei ungenügenden Messresultaten ein Geeignetes Schutzorgan, Querschnitte, Fehlerstromschutzschalter usw."
     }
    },
    {
     "id": "f3.2",
     "kompetenz": "f3 Elektroinstallationen den Ausführungsunterlagen gegenüberstellen und die technische",
     "titel": "Sie verändern aufgrund eines Beschriebs die bestehenden Dokumente.",
     "taxonomie": "K3",
     "lehrjahre": [
      4
     ],
     "lektionen": [
      null,
      null,
      0,
      40
     ],
     "inhalte": {
      "4": "Sie erstellen Revisionsunterlagen. Installationsplan, Stromlaufschema, Legenden von Schaltgerätekombinationen. Sie fertigen Revisionsunterlagen für verschiedene Objekte an. Wohnung, Einfamilienhaus, kleine Werkstatt, Büro."
     }
    }
   ]
  },
  {
   "id": "uek4",
   "bereich": "uek",
   "kuerzel": "üK 4",
   "titel": "üK 4 – Überbetrieblicher Kurs",
   "berufe": [
    "EI"
   ],
   "themen": [
    {
     "id": "uek4-einf",
     "kompetenz": "Modul",
     "titel": "Einführung, Eintrittstest, Allgemeines und Rückbau",
     "taxonomie": "",
     "lehrjahre": [],
     "lektionen": null,
     "inhalte": {
      "_": "Dauer: 1.25 Tage · Leistungsziele: a2.2, a2.4, f1.2"
     }
    },
    {
     "id": "uek4-ersch",
     "kompetenz": "Modul",
     "titel": "Erschliessung (Kabeltragsysteme)",
     "taxonomie": "",
     "lehrjahre": [],
     "lektionen": null,
     "inhalte": {
      "_": "Dauer: 0.25 Tage · Leistungsziele: b6.4"
     }
    },
    {
     "id": "uek4-emob",
     "kompetenz": "Modul",
     "titel": "Elektromobilität",
     "taxonomie": "",
     "lehrjahre": [],
     "lektionen": null,
     "inhalte": {
      "_": "Dauer: 1.25 Tage · Leistungsziele: c2.1, c3.6"
     }
    },
    {
     "id": "uek4-ausm",
     "kompetenz": "Modul",
     "titel": "Ausmass",
     "taxonomie": "",
     "lehrjahre": [],
     "lektionen": null,
     "inhalte": {
      "_": "Dauer: 0.25 Tage · Leistungsziele: f1.4, f3.2"
     }
    },
    {
     "id": "uek4-motor",
     "kompetenz": "Modul",
     "titel": "Motorensteuerung",
     "taxonomie": "",
     "lehrjahre": [],
     "lektionen": null,
     "inhalte": {
      "_": "Dauer: 2.75 Tage · Leistungsziele: b7.4, c2.3"
     }
    },
    {
     "id": "uek4-ga",
     "kompetenz": "Modul",
     "titel": "Gebäudeautomation (z.B. Loxone, KNX, Shelly)",
     "taxonomie": "",
     "lehrjahre": [],
     "lektionen": null,
     "inhalte": {
      "_": "Dauer: 2.25 Tage · Leistungsziele: d1.3, d4.3"
     }
    },
    {
     "id": "uek4-mess",
     "kompetenz": "Modul",
     "titel": "Messtechnik Vertiefung",
     "taxonomie": "",
     "lehrjahre": [],
     "lektionen": null,
     "inhalte": {
      "_": "Dauer: 1 Tage · Leistungsziele: e1.3, e2.5, e3.1, e3.6"
     }
    },
    {
     "id": "uek4-hlk",
     "kompetenz": "Modul",
     "titel": "Wärme-, Lüftungs- und Kältetechnik",
     "taxonomie": "",
     "lehrjahre": [],
     "lektionen": null,
     "inhalte": {
      "_": "Dauer: 0.75 Tage · Leistungsziele: d3.4, f4.2"
     }
    },
    {
     "id": "uek4-ee",
     "kompetenz": "Modul",
     "titel": "Erneuerbare Energie",
     "taxonomie": "",
     "lehrjahre": [],
     "lektionen": null,
     "inhalte": {
      "_": "Dauer: 1.25 Tage · Leistungsziele: b2.2, d1.4, d2.2, d2.6"
     }
    },
    {
     "id": "uek4-komm",
     "kompetenz": "Modul",
     "titel": "Kommunikationstechnik",
     "taxonomie": "",
     "lehrjahre": [],
     "lektionen": null,
     "inhalte": {
      "_": "Dauer: 1 Tage · Leistungsziele: d4.3, d1.3"
     }
    }
   ]
  },
  {
   "id": "qv",
   "bereich": "qv",
   "kuerzel": "QV",
   "titel": "QV-Vorbereitung (Abschlussprüfung)",
   "berufe": [
    "EI",
    "ME"
   ],
   "themen": [
    {
     "id": "qv-bk",
     "kompetenz": "Prüfungstraining",
     "titel": "Berufskenntnisse – gemischte Prüfungsfragen",
     "taxonomie": "",
     "lehrjahre": [],
     "lektionen": null,
     "inhalte": {}
    },
    {
     "id": "qv-rechnen",
     "kompetenz": "Prüfungstraining",
     "titel": "Berechnungen (Leistung, Leitungen, Schutz)",
     "taxonomie": "",
     "lehrjahre": [],
     "lektionen": null,
     "inhalte": {}
    },
    {
     "id": "qv-sicherheit",
     "kompetenz": "Prüfungstraining",
     "titel": "Sicherheit, NIN und Erstprüfung",
     "taxonomie": "",
     "lehrjahre": [],
     "lektionen": null,
     "inhalte": {}
    }
   ]
  }
 ]
};
