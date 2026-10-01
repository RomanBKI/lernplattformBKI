/* Serie 2 – NIN 2025 (SN 411000:2025): Aufgaben und Lernkarten (Entwurf) */
(function () {
  const B = ["EI", "ME"], E = ["EI"];
  const Q = (t) => "NIN 2025 (SN 411000:2025), " + t;
  const K = (id, lj, berufe, fach, lz, frage, antwort, extra = {}) =>
    Object.assign({ id: "s2-k-" + id, typ: "karte", lehrjahr: lj, berufe, fach, lz, titel: "", frage, antwort, demo_status: "entwurf" }, extra);
  const A = (o) => Object.assign({ demo_status: "entwurf" }, o);

  AUFGABEN.push(
    /* ---------------- 1. Lehrjahr ---------------- */
    A({
      id: "s2-nin-was-01", typ: "zuordnen", lehrjahr: 1, berufe: B, fach: "a", lz: "a2.2",
      titel: "NIN, NIV, SiNa – was ist was?",
      frage: "Ordne die Begriffe richtig zu.",
      paare: [
        { links: "NIN (SN 411000)", rechts: "Norm: WIE installiert und geprüft wird (Regeln der Technik)" },
        { links: "NIV", rechts: "Verordnung: WER installieren und kontrollieren darf" },
        { links: "SiNa", rechts: "Dokument, das die Sicherheit der Installation bestätigt" }
      ],
      erklaerung: "Die NIV (Verordnung des Bundes) verweist auf die NIN. Darum ist die NIN für alle Niederspannungsinstallationen verbindlich.",
      quelle: "Basiswissen für Elektroberufe, Kap. 3; " + Q("Teil 1")
    }),
    A({
      id: "s2-nin-schutzebenen-01", typ: "zuordnen", lehrjahr: 1, berufe: B, fach: "b", lz: "b1.1",
      titel: "Basisschutz, Fehlerschutz, Zusatzschutz",
      frage: "Ordne jede Schutzebene ihrem Inhalt zu.",
      paare: [
        { links: "Basisschutz", rechts: "Schutz gegen direktes Berühren (z. B. Isolation, Abdeckungen)" },
        { links: "Fehlerschutz", rechts: "Schutz bei indirektem Berühren (z. B. automatische Abschaltung)" },
        { links: "Zusätzlicher Schutz", rechts: "RCD ≤ 30 mA oder zusätzlicher Schutz-Potenzialausgleich" }
      ],
      erklaerung: "Normalfall: Der Basisschutz verhindert das Berühren aktiver Teile. Versagt er, greift der Fehlerschutz. Der zusätzliche Schutz hilft, wenn beides versagt oder bei Unachtsamkeit.",
      quelle: Q("4.1")
    }),
    A({
      id: "s2-nin-schutzmassnahmen-01", typ: "auswahl", lehrjahr: 1, berufe: B, fach: "b", lz: "b1.1",
      titel: "Schutzmassnahmen gegen elektrischen Schlag",
      frage: "Welche der folgenden sind Schutzmassnahmen nach NIN Kapitel 4.1?",
      optionen: ["Automatische Abschaltung der Stromversorgung", "Doppelte oder verstärkte Isolierung", "Schutztrennung", "Schutz durch Kleinspannung SELV oder PELV", "Beschriftung der Verteilung", "Leitungsschutzschalter mit Charakteristik B"],
      richtig: [0, 1, 2, 3],
      erklaerung: "Die automatische Abschaltung ist die häufigste Schutzmassnahme. Ein LS ist ein Gerät dafür, aber keine eigene Schutzmassnahme.",
      quelle: Q("4.1.1 – 4.1.4")
    }),
    A({
      id: "s2-nin-begriffe-01", typ: "zuordnen", lehrjahr: 1, berufe: B, fach: "b", lz: "b1.1",
      titel: "Begriffe aus der NIN",
      frage: "Was bedeuten die Begriffe?",
      paare: [
        { links: "Aktives Teil", rechts: "Leiter, der im Betrieb unter Spannung steht (auch N)" },
        { links: "Körper", rechts: "Berührbares leitfähiges Teil eines Betriebsmittels, das im Fehlerfall Spannung annehmen kann" },
        { links: "Fremdes leitfähiges Teil", rechts: "Leitfähiges Teil, das nicht zur Installation gehört, aber ein Potenzial einführen kann (z. B. Wasserleitung)" },
        { links: "Endstromkreis", rechts: "Stromkreis, der direkt Verbrauchsmittel oder Steckdosen speist" }
      ],
      erklaerung: "Der PEN-Leiter gilt nicht als aktives Teil, obwohl er Strom führt.",
      quelle: Q("Teil 2 Begriffe")
    }),
    A({
      id: "s2-nin-freizuegig-01", typ: "wahrfalsch", lehrjahr: 1, berufe: B, fach: "b", lz: "b1.1",
      titel: "Freizügig verwendbare Steckdosen",
      frage: "Steckdosen bis 32 A zur freizügigen Verwendung brauchen einen RCD ≤ 30 mA. Richtig oder falsch?",
      aussagen: [
        { text: "In Wohnungen gelten grundsätzlich alle Steckdosen als freizügig verwendbar.", wahr: true },
        { text: "Die Steckdose hinter dem eingebauten Kühlschrank gilt als nicht freizügig verwendbar.", wahr: true },
        { text: "Eine Warnaufschrift ist die beste Massnahme, um eine Steckdose der freizügigen Verwendung zu entziehen.", wahr: false },
        { text: "Eine abschliessbare Steckdose kann von der freizügigen Verwendung ausgenommen werden.", wahr: true }
      ],
      erklaerung: "Technische Massnahmen (abschliessbar, Steckerbild, Abdeckung mit Werkzeug) haben Vorrang. Eine Warnaufschrift kann sogar zum Gebrauch einladen und ist nur die letzte Möglichkeit.",
      quelle: Q("4.1.1.3.3 Zusätzlicher Schutz")
    }),
    A({
      id: "s2-nin-bad-steckdose-01", typ: "auswahl", lehrjahr: 1, berufe: B, fach: "b", lz: "b1.3",
      titel: "Wo darf die Steckdose hin?",
      frage: "Welche der eingezeichneten Steckdosen-Positionen ist im Badezimmer zulässig?",
      bild: "badsteckdose",
      optionen: ["Nur C", "B und C", "A, B und C", "Nur A"],
      richtig: [0], nicht_mischen: true,
      erklaerung: "Steckdosen dürfen weder im Bereich 1 noch im Bereich 2 angebracht werden. Ausserhalb von Bereich 2 sind sie erlaubt, wenn sie vom Dusch-/Badeplatz aus nicht bedient werden können (Fadenmass 0,6 m). Und: Die ganze Bad-Installation braucht einen RCD 30 mA.",
      quelle: Q("7.01")
    }),
    A({
      id: "s2-nin-bad-01", typ: "wahrfalsch", lehrjahr: 1, berufe: B, fach: "b", lz: "b1.3",
      titel: "Räume mit Badewanne oder Dusche",
      frage: "Richtig oder falsch?",
      aussagen: [
        { text: "Bei Duschen ohne Wanne gibt es keinen Bereich 0.", wahr: true },
        { text: "Bei einer Dusche ohne Wanne reicht der Bereich 1 bis 1,2 m vom fest angebrachten Wasserauslass.", wahr: true },
        { text: "Ein flexibler Brauseschlauch gilt als fest angebrachter Wasserauslass.", wahr: false },
        { text: "Betriebsmittel in den Bereichen 1 und 2 müssen mindestens IPX4 haben.", wahr: true }
      ],
      erklaerung: "Massgebend ist der fest angebrachte Wasserauslass (Anschlusspunkt der festen Wasserinstallation), nicht der Schlauch.",
      quelle: Q("7.01.3 / 7.01.5")
    }),
    A({
      id: "s2-nin-schwimmbad-01", typ: "luecke", lehrjahr: 1, berufe: B, fach: "b", lz: "b1.3",
      titel: "Schwimmbecken",
      frage: "Ergänze (nur Zahl).",
      text: "Fest errichtete Reinigungsgeräte in den Bereichen 0 und 1 eines Schwimmbeckens müssen mit SELV höchstens AC {{12}} V oder DC {{30}} V versorgt werden.\nDie Stromquelle muss ausserhalb der Bereiche 0, 1 und {{2}} stehen.",
      erklaerung: "Im und am Wasser ist der Körperwiderstand sehr klein – darum gelten viel tiefere Spannungen als die üblichen 50 V AC.",
      quelle: Q("7.02.5.5")
    }),
    A({
      id: "s2-nin-landwirtschaft-01", typ: "luecke", lehrjahr: 1, berufe: B, fach: "b", lz: "b1.3",
      titel: "Landwirtschaft",
      frage: "Ergänze (nur Zahl).",
      text: "In landwirtschaftlichen Betriebsstätten müssen für den Brandschutz RCDs mit IΔn ≤ {{300}} mA eingesetzt werden.\nWärmelampen müssen mindestens {{0,5|0.5}} m Abstand zu Nutztieren und brennbarem Material haben.",
      erklaerung: "Heu, Stroh und Staub brennen leicht. Darum ist der Brandschutz in Ställen besonders wichtig.",
      quelle: Q("7.05.4.2.2")
    }),
    A({
      id: "s2-nin-feuer-01", typ: "wahrfalsch", lehrjahr: 1, berufe: B, fach: "b", lz: "b1.1",
      titel: "Feuergefährdete Betriebsstätten",
      frage: "Richtig oder falsch?",
      aussagen: [
        { text: "Endstromkreise in feuergefährdeten Betriebsstätten (TN/TT) werden mit RCDs ≤ 300 mA geschützt.", wahr: true },
        { text: "Bei Deckenheizungen mit Flächenheizelementen braucht es einen RCD ≤ 30 mA.", wahr: true },
        { text: "Wo sich viel brennbarer Staub ablagert, braucht es mindestens staubgeschützte Betriebsmittel (IP5X).", wahr: true },
        { text: "Der Überstromschutz muss innerhalb der feuergefährdeten Räume angeordnet werden.", wahr: false }
      ],
      erklaerung: "Stromkreise, die solche Räume versorgen oder durchqueren, werden ausserhalb – am Speisepunkt – gegen Überlast und Kurzschluss geschützt.",
      quelle: Q("4.2.2.3")
    }),
    A({
      id: "s2-nin-baustelle-01", typ: "zuordnen", lehrjahr: 1, berufe: B, fach: "b", lz: "b1.3",
      titel: "RCD auf der Baustelle",
      frage: "Welcher Fehlerstromschutz ist für Steckdosen auf Baustellen typisch?",
      paare: [
        { links: "Steckdosen bis 32 A", rechts: "RCD ≤ 30 mA (zusätzlicher Schutz)" },
        { links: "Steckdosen über 32 A", rechts: "RCD, typischerweise 100 mA oder 300 mA" }
      ],
      erklaerung: "Auch über 32 A ist auf Baustellen ein RCD vorgeschrieben. Und: Vor dem Einschalten eines Provisoriums braucht es die Erstprüfung.",
      quelle: Q("7.04.4.1.1.3")
    }),
    A({
      id: "s2-nin-spa-01", typ: "luecke", lehrjahr: 1, berufe: B, fach: "b", lz: "b2.1",
      titel: "Schutz-Potenzialausgleichsleiter",
      frage: "Ergänze den Mindestquerschnitt des Schutz-Potenzialausgleichsleiters zur Haupterdungsschiene (nur Zahl).",
      text: "Mindestens {{6}} mm² Kupfer.\nIst eine Blitzschutzanlage vorhanden: mindestens {{10}} mm² Kupfer.",
      erklaerung: "Für Aluminium gelten mindestens 16 mm², für Stahl 50 mm².",
      quelle: Q("5.4.4.1")
    }),
    A({
      id: "s2-nin-pen-farbe-01", typ: "auswahl", lehrjahr: 1, berufe: B, fach: "c", lz: "c2.3",
      titel: "Kennzeichnung des PEN-Leiters",
      frage: "Wie wird ein PEN-Leiter gekennzeichnet?",
      optionen: [
        "Grün-gelb mit blauen Markierungen an den Enden (oder blau mit grün-gelben Markierungen)",
        "Nur blau ohne Markierung",
        "Braun mit grüner Markierung",
        "Schwarz mit blauer Markierung"
      ],
      richtig: [0],
      erklaerung: "Der PEN-Leiter hat Schutzleiter- und Neutralleiterfunktion. Darum trägt er beide Kennzeichnungen. Er darf nie geschaltet oder unterbrochen werden.",
      quelle: Q("Kennzeichnung der Leiter")
    }),

    /* ---------------- 2. Lehrjahr ---------------- */
    A({
      id: "s2-nin-netzbuchstaben-01", typ: "zuordnen", lehrjahr: 2, berufe: E, fach: "d", lz: "d2.1",
      titel: "Was bedeuten die Buchstaben in TN-C-S?",
      frage: "Ordne die Buchstaben ihrer Bedeutung zu.",
      bild: "netzsysteme",
      paare: [
        { links: "T (1. Buchstabe)", rechts: "Sternpunkt der Stromquelle direkt geerdet (Terra)" },
        { links: "N (2. Buchstabe)", rechts: "Körper über den Schutzleiter mit dem geerdeten Sternpunkt verbunden" },
        { links: "C", rechts: "Neutralleiter und Schutzleiter kombiniert (PEN)" },
        { links: "S", rechts: "Neutralleiter und Schutzleiter separat" }
      ],
      ablenker: ["Sternpunkt isoliert"],
      erklaerung: "Beim TT-System sind die Körper über einen eigenen Erder geerdet, beim IT-System ist der Sternpunkt isoliert (I).",
      quelle: Q("Netzsysteme")
    }),
    A({
      id: "s2-nin-pen-01", typ: "wahrfalsch", lehrjahr: 2, berufe: E, fach: "d", lz: "d2.1",
      titel: "Regeln zum PEN-Leiter",
      frage: "Richtig oder falsch?",
      aussagen: [
        { text: "Ein PEN-Leiter darf nicht geschaltet oder getrennt werden.", wahr: true },
        { text: "Nach der Aufteilung des PEN in N und PE dürfen N und PE wieder verbunden werden.", wahr: false },
        { text: "Ein PEN-Leiter in fester Installation muss mindestens 10 mm² Cu haben.", wahr: true }
      ],
      erklaerung: "Wird der PEN unterbrochen, können alle Körper dahinter Spannung führen – lebensgefährlich!",
      quelle: Q("5.4.3"), demo_status: "entwurf"
    }),
    A({
      id: "s2-nin-pe-querschnitt-01", typ: "zuordnen", lehrjahr: 2, berufe: E, fach: "a", lz: "a2.5",
      titel: "Querschnitt des Schutzleiters",
      frage: "Wie gross muss der Schutzleiter mindestens sein (gleiches Material wie der Aussenleiter)?",
      paare: [
        { links: "Aussenleiter 2,5 mm²", rechts: "2,5 mm²" },
        { links: "Aussenleiter 25 mm²", rechts: "16 mm²" },
        { links: "Aussenleiter 70 mm²", rechts: "35 mm²" }
      ],
      erklaerung: "Regel: bis 16 mm² → PE = Aussenleiter; 25–35 mm² → 16 mm²; über 35 mm² → halber Aussenleiterquerschnitt.",
      quelle: Q("5.4.3 Tabelle 1")
    }),
    A({
      id: "s2-nin-n-querschnitt-01", typ: "wahrfalsch", lehrjahr: 2, berufe: E, fach: "a", lz: "a2.5",
      titel: "Querschnitt des Neutralleiters",
      frage: "Richtig oder falsch?",
      aussagen: [
        { text: "In einphasigen Stromkreisen (L + N) muss der Neutralleiter immer gleich gross sein wie der Aussenleiter.", wahr: true },
        { text: "Bei starken Oberschwingungen (z. B. viele IT-Geräte) kann ein grösserer N-Querschnitt nötig sein.", wahr: true },
        { text: "Der Neutralleiter darf in Steckdosenstromkreisen 1,5 mm² haben, wenn der Aussenleiter 2,5 mm² hat.", wahr: false }
      ],
      erklaerung: "Im einphasigen Stromkreis fliesst durch N derselbe Strom wie durch L. Die 3. Oberschwingungen addieren sich im N eines Drehstromnetzes.",
      quelle: Q("5.2.4")
    }),
    A({
      id: "s2-nin-spd-01", typ: "luecke", lehrjahr: 2, berufe: E, fach: "d", lz: "d2.6",
      titel: "Anschlussleitungen von Überspannungsableitern",
      frage: "Mindestquerschnitt der Erdverbindung beim Speisepunkt (nur Zahl, Kupfer):",
      text: "SPD Typ 2: mindestens {{6}} mm²\nSPD Typ 1: mindestens {{16}} mm²",
      erklaerung: "Die Leitungen sollen zudem möglichst kurz sein – lange Anschlussleitungen verschlechtern den Schutzpegel.",
      quelle: Q("5.3.4.4.10")
    }),
    A({
      id: "s2-nin-spannungsfall-01", typ: "rechnen", lehrjahr: 2, berufe: E, fach: "a", lz: "a2.5",
      titel: "Wie viel Spannungsfall ist erlaubt?",
      frage: "Wie viele Volt Spannungsfall entsprechen dem NIN-Richtwert von 4 % bei 230 V?",
      loesung: 9.2, einheit: "V", toleranz: 0.01,
      erklaerung: "230 V · 0,04 = 9,2 V. Dieser Wert gilt für die gesamte Installation vom Anschlusspunkt bis zum Verbraucher.",
      quelle: Q("5.2.5")
    }),
    A({
      id: "s2-nin-afdd-01", typ: "auswahl", lehrjahr: 2, berufe: E, fach: "c", lz: "c3.2",
      titel: "Wo ist ein Brandschutzschalter (AFDD) sinnvoll?",
      frage: "In welchen Räumen empfiehlt die NIN den Einsatz von Fehlerlichtbogen-Schutzeinrichtungen (AFDD)?",
      optionen: ["Räume mit Schlafplätzen", "Gebäude aus brennbaren Bauteilen (z. B. Holzbau)", "Räume mit wertvollem Inhalt (Archiv, Museum)", "Feuergefährdete Betriebsstätten", "Nur im Freien"],
      richtig: [0, 1, 2, 3],
      erklaerung: "AFDD erkennen gefährliche Lichtbögen, z. B. an lockeren Klemmen oder gebrochenen Leitern. Sie werden am Anfang des Stromkreises eingebaut.",
      quelle: Q("4.2.1 Abs. 7")
    }),

    /* ---------------- 3. / 4. Lehrjahr ---------------- */
    A({
      id: "s2-nin-abschaltzeit-tntt-01", typ: "zuordnen", lehrjahr: 3, berufe: B, fach: "f", lz: "f2.2",
      titel: "Abschaltzeiten TN und TT",
      frage: "Maximale Abschaltzeit für Endstromkreise 230 V AC (bis 32 A bzw. mit Steckdosen bis 63 A)?",
      paare: [
        { links: "TN-System", rechts: "0,4 s" },
        { links: "TT-System", rechts: "0,2 s" }
      ],
      ablenker: ["5 s", "0,04 s"],
      erklaerung: "Im TT-System fliesst der Fehlerstrom über das Erdreich zurück – er ist kleiner, darum braucht es dort meist einen RCD.",
      quelle: Q("4.1.1 Tabelle 1")
    }),
    A({
      id: "s2-nin-kurzschluss-01", typ: "rechnen", lehrjahr: 3, berufe: E, fach: "a", lz: "a2.5",
      titel: "Zulässige Kurzschlussdauer",
      frage: "Eine PVC-Kupferleitung 1,5 mm² wird von einem Kurzschlussstrom von 200 A durchflossen. Wie lange darf der Kurzschluss höchstens dauern?\nt = (k · S / I)², k = 115",
      loesung: 0.744, einheit: "s", toleranz: 0.02,
      erklaerung: "t = (115 · 1,5 / 200)² = 0,8625² ≈ 0,74 s. Die Sicherung muss schneller abschalten, sonst wird die Isolation zu heiss. (Bei LS ist die I²t-Kennlinie massgebend.)",
      quelle: "Profi-Spick Steckdosen prüfen (Kurzschlussschutz); " + Q("4.3 Schutz bei Überstrom")
    }),
    A({
      id: "s2-nin-polaritaet-01", typ: "auswahl", lehrjahr: 3, berufe: B, fach: "f", lz: "f2.2",
      titel: "Polarität prüfen",
      frage: "Was wird bei der Prüfung der Polarität kontrolliert?",
      optionen: [
        "Schalter und Schutzeinrichtungen liegen im Aussenleiter, der Aussenkontakt von Lampenfassungen ist mit N verbunden",
        "Das Drehfeld ist rechtsdrehend",
        "Der Isolationswiderstand ist grösser als 1 MΩ",
        "Der RCD löst innert 0,3 s aus"
      ],
      richtig: [0],
      erklaerung: "Liegt der Schalter im N statt im Aussenleiter, steht die Lampe auch ausgeschaltet unter Spannung – gefährlich beim Lampenwechsel!",
      quelle: "Erstprüfung von provisorischen Installationen (2025), Abschnitt Polarität; " + Q("Kap. 6")
    }),
    A({
      id: "s2-nin-isolation-wann-01", typ: "wahrfalsch", lehrjahr: 3, berufe: B, fach: "f", lz: "f2.2",
      titel: "Wann ist eine Isolationsmessung nötig?",
      frage: "Richtig oder falsch?",
      aussagen: [
        { text: "Bei Neu- und Umbauten ist vor der Inbetriebnahme eine Isolationsmessung nötig.", wahr: true },
        { text: "Die Isolationsmessung wird unter Spannung durchgeführt.", wahr: false },
        { text: "Bei Anlagen mit vielen empfindlichen Geräten darf zuerst mit 250 V gemessen werden, die Messung mit 500 V ist aber trotzdem nötig.", wahr: true },
        { text: "Hinter Schützen muss nicht gemessen werden.", wahr: false }
      ],
      erklaerung: "Die Isolationsmessung erfolgt spannungsfrei. Hinter offenen Schützen liegt ein eigener Leitungsteil – der muss separat gemessen werden.",
      quelle: "Profi-Spick Steckdosen prüfen; Erstprüfung (2025)"
    }),
    A({
      id: "s2-nin-erproben-01", typ: "auswahl", lehrjahr: 3, berufe: B, fach: "f", lz: "f2.2",
      titel: "Was wird «erprobt»?",
      frage: "Welche Einrichtungen werden bei der Funktionsprüfung (Erproben) kontrolliert?",
      optionen: ["RCD durch Drücken der Prüftaste", "Not-Aus-Schalter und Verriegelungen", "Notbeleuchtung und Sicherheitsleuchten", "Melde- und Signaleinrichtungen", "Farbe der Abdeckungen"],
      richtig: [0, 1, 2, 3],
      erklaerung: "Erproben weist nach, dass Schutz- und Sicherheitseinrichtungen richtig eingestellt sind und funktionieren.",
      quelle: "Erstprüfung von provisorischen Installationen (2025), Abschnitt Funktionsprüfungen"
    }),
    A({
      id: "s2-nin-feuer-rcd-01", typ: "freitext", lehrjahr: 4, berufe: E, fach: "c", lz: "c3.1",
      titel: "Warum 300 mA für den Brandschutz?",
      frage: "Erkläre, warum in feuergefährdeten Räumen oder in der Landwirtschaft ein RCD mit 300 mA verlangt wird und wofür dagegen ein RCD mit 30 mA dient.",
      stichworte: [["brand", "feuer", "entzünd"], ["isolationsfehler", "fehlerstrom", "kriechstrom", "erdschluss"], ["personenschutz", "personen", "menschen", "elektrischer schlag", "stromschlag"], ["300"], ["30"]],
      mindestens: 4,
      musterloesung: "Schon kleine Fehlerströme von einigen hundert mA können an einer Fehlerstelle so viel Wärme erzeugen, dass Heu, Staub oder Holz zu brennen beginnen. Ein RCD 300 mA schaltet solche Isolationsfehler früh ab und dient dem Brandschutz. Ein RCD 30 mA dient dagegen dem Personenschutz (zusätzlicher Schutz gegen elektrischen Schlag).",
      erklaerung: "Für den Personenschutz wäre 300 mA zu hoch – darum gilt für Steckdosen bis 32 A immer 30 mA.",
      quelle: Q("4.2.2.3; 7.05.4.2.2")
    }),
    A({
      id: "s2-nin-emob-01", typ: "auswahl", lehrjahr: 3, berufe: E, fach: "uek4", lz: "uek4-emob",
      titel: "Fehlerstromschutz bei Ladestationen",
      frage: "Eine Ladestation mit Typ-2-Steckdose hat keinen eingebauten Gleichfehlerstromschutz. Welche Lösungen sind pro Ladepunkt zulässig?",
      optionen: [
        "RCD Typ B, 30 mA",
        "RCD Typ A (oder F), 30 mA, zusammen mit einer Fehlergleichstrom-Überwachung (RDC-DD)",
        "RCD Typ AC, 30 mA, allein",
        "Ein gemeinsamer RCD für alle Ladepunkte genügt"
      ],
      richtig: [0, 1],
      erklaerung: "Jeder Ladepunkt braucht einen eigenen RCD ≤ 30 mA, mindestens Typ A. Weil das Auto Gleichfehlerströme erzeugen kann, braucht es zusätzlich Schutz gegen DC-Fehlerströme.",
      quelle: Q("7.22.5.3.1.3")
    }),

    /* ---------------- Lernkarten ---------------- */
    K("schutzebenen", 1, B, "b", "b1.1", "Welche drei Schutzebenen gegen elektrischen Schlag kennt die NIN?", "Basisschutz: gegen direktes Berühren (Isolation, Abdeckung)\nFehlerschutz: bei indirektem Berühren (z. B. automatische Abschaltung)\nZusätzlicher Schutz: RCD ≤ 30 mA, zusätzlicher Potenzialausgleich", { quelle: Q("4.1") }),
    K("schutzmassnahmen", 1, B, "b", "b1.1", "Welche Schutzmassnahmen gegen elektrischen Schlag gibt es nach NIN?", "• Automatische Abschaltung der Stromversorgung\n• Doppelte oder verstärkte Isolierung\n• Schutztrennung\n• Kleinspannung SELV / PELV", { quelle: Q("4.1") }),
    K("freizuegig", 1, B, "b", "b1.1", "Was ist eine «freizügig verwendbare» Steckdose – und was braucht sie?", "Eine frei zugängliche Steckdose, an die man beliebige Geräte anschliessen kann. In Wohnungen sind das grundsätzlich alle.\nBis 32 A braucht sie einen RCD ≤ 30 mA.", { quelle: Q("4.1.1.3.3") }),
    K("bad-steckdose", 1, B, "b", "b1.3", "Wo dürfen im Badezimmer Steckdosen montiert werden?", "Nicht im Bereich 0, 1 und 2.\nAusserhalb von Bereich 2 ja – wenn sie vom Dusch-/Badeplatz aus nicht erreichbar sind (Fadenmass 0,6 m).\nDie ganze Bad-Installation: RCD 30 mA.", { bild: "badsteckdose", quelle: Q("7.01") + "; Profi-Spick Steckdosen prüfen" }),
    K("schwimmbad", 1, B, "b", "b1.3", "Welche Spannung ist für Geräte im Bereich 0 und 1 eines Schwimmbeckens erlaubt?", "SELV höchstens 12 V AC bzw. 30 V DC.\nDie Stromquelle (Trafo) steht ausserhalb der Bereiche 0, 1 und 2.", { quelle: Q("7.02") }),
    K("landwirtschaft", 1, B, "b", "b1.3", "Was gilt in der Landwirtschaft für den Brandschutz?", "RCD ≤ 300 mA für den Brandschutz.\nWärmelampen mindestens 0,5 m von Tieren und brennbarem Material.", { quelle: Q("7.05") }),
    K("feuer", 1, B, "b", "b1.1", "Welcher RCD gilt in feuergefährdeten Betriebsstätten?", "RCD ≤ 300 mA (System TN/TT).\nBei Deckenheizungen mit Flächenheizelementen: RCD ≤ 30 mA.\nÜberstromschutz ausserhalb des Raums am Speisepunkt.", { quelle: Q("4.2.2.3") }),
    K("baustelle", 1, B, "b", "b1.3", "Welche RCD braucht es für Steckdosen auf der Baustelle?", "Bis 32 A: RCD ≤ 30 mA\nÜber 32 A: RCD (typisch 100 mA oder 300 mA)\nVor dem Einschalten: Erstprüfung – auch beim Provisorium!", { quelle: Q("7.04") }),
    K("spa-querschnitt", 1, B, "b", "b2.1", "Wie gross muss der Schutz-Potenzialausgleichsleiter zur Haupterdungsschiene mindestens sein?", "6 mm² Cu (16 mm² Al, 50 mm² Fe)\nMit Blitzschutzanlage: 10 mm² Cu", { quelle: Q("5.4.4.1") }),
    K("pen", 2, E, "d", "d2.1", "Was gilt für den PEN-Leiter?", "• Mindestens 10 mm² Cu (fest verlegt)\n• Nie schalten, nie trennen\n• Kennzeichnung grün-gelb mit blauen Enden (oder umgekehrt)\n• Nach der Aufteilung in N und PE nie wieder verbinden", { bild: "netzsysteme", quelle: Q("5.4.3") }),
    K("netzbuchstaben", 2, E, "d", "d2.1", "Was bedeuten T, N, I, C und S bei den Netzsystemen?", "1. Buchstabe (Quelle): T = Sternpunkt geerdet, I = isoliert\n2. Buchstabe (Körper): N = über PE mit Sternpunkt verbunden, T = eigener Erder\nC = N und PE kombiniert (PEN), S = separat", { quelle: Q("Netzsysteme") }),
    K("pe-querschnitt", 2, E, "a", "a2.5", "Wie bestimmt man den Mindestquerschnitt des Schutzleiters?", "Aussenleiter ≤ 16 mm² → PE gleich gross\n25 – 35 mm² → PE 16 mm²\n> 35 mm² → PE halb so gross", { quelle: Q("5.4.3 Tabelle 1") }),
    K("spannungsfall", 2, E, "a", "a2.5", "Wie gross darf der Spannungsfall in der Installation höchstens sein?", "Richtwert 4 % (bei 230 V ≈ 9,2 V) vom Anschlusspunkt bis zum Verbraucher.", { quelle: Q("5.2.5") }),
    K("afdd", 2, E, "c", "c3.2", "Was ist ein AFDD, und wo ist er sinnvoll?", "Fehlerlichtbogen-Schutzeinrichtung (Brandschutzschalter). Erkennt gefährliche Lichtbögen (lockere Klemmen, gebrochene Leiter).\nSinnvoll z. B. in Schlafräumen, Holzbauten, Archiven/Museen, feuergefährdeten Räumen.", { quelle: Q("4.2.1") }),
    K("spd-anschluss", 2, E, "d", "d2.6", "Wie gross müssen die Erd-Anschlussleitungen von Überspannungsableitern beim Speisepunkt sein?", "Typ 2: mind. 6 mm² Cu\nTyp 1: mind. 16 mm² Cu\nUnd möglichst kurz!", { quelle: Q("5.3.4.4.10") }),
    K("abschaltzeiten-tntt", 3, B, "f", "f2.2", "Maximale Abschaltzeit für Endstromkreise 230 V im TN- und im TT-System?", "TN: 0,4 s\nTT: 0,2 s\n(Endstromkreise bis 32 A bzw. mit Steckdosen bis 63 A)", { quelle: Q("4.1.1 Tabelle 1") }),
    K("emob", 3, E, "uek4", "uek4-emob", "Welchen Fehlerstromschutz braucht jeder Ladepunkt für Elektroautos?", "Eigener RCD ≤ 30 mA, mindestens Typ A\n+ Schutz gegen Gleichfehlerströme: RCD Typ B oder RCD Typ A/F mit RDC-DD (falls nicht in der Ladestation eingebaut).", { quelle: Q("7.22") })
  );
})();
