/* Serie 1 – Lernkarten (Entwurf). Typ "karte": frage = Vorderseite, antwort = Rückseite */
(function () {
  const K = (id, lj, berufe, fach, lz, frage, antwort, extra = {}) =>
    Object.assign({ id: "s1-k-" + id, typ: "karte", lehrjahr: lj, berufe, fach, lz, titel: "", frage, antwort, demo_status: "entwurf" }, extra);
  const B = ["EI", "ME"], E = ["EI"];

  AUFGABEN.push(
    /* 1. Lehrjahr */
    K("ohm", 1, B, "a", "a2.1", "Wie lautet das Ohmsche Gesetz?", "U = R · I\n(Spannung = Widerstand × Strom)\nUmgestellt: I = U / R und R = U / I", { quelle: "Fachkunde Elektrotechnik, Kap. 2.7" }),
    K("leistung", 1, B, "a", "a2.1", "Mit welchen drei Formeln kann man die elektrische Leistung P berechnen?", "P = U · I\nP = I² · R\nP = U² / R"),
    K("arbeit", 1, B, "a", "a2.1", "Wie berechnet man die elektrische Arbeit, und in welcher Einheit rechnet das Elektrizitätswerk ab?", "W = P · t\nAbgerechnet wird in Kilowattstunden (kWh).\n1 kWh = 1000 W während 1 Stunde"),
    K("stromrichtung", 1, B, "a", "a2.1", "Wie ist die technische Stromrichtung festgelegt?", "Vom Pluspol (+) über den Verbraucher zum Minuspol (−).\nDie Elektronen fliessen in Wirklichkeit umgekehrt (von − nach +)."),
    K("leiterwiderstand", 1, B, "a", "a2.1", "Wie berechnet man den Widerstand einer Leitung?", "R = ρ · l / A\nρ = spezifischer Widerstand (Cu: 0,0175 Ω·mm²/m)\nl = Länge (bei Hin- und Rückleiter doppelt!)\nA = Querschnitt"),
    K("spannung-strom-messen", 1, B, "a", "a2.1", "Wie wird ein Voltmeter und wie ein Ampèremeter angeschlossen?", "Voltmeter: PARALLEL zum Verbraucher\nAmpèremeter: IN REIHE (der Strom fliesst durch das Messgerät)", { bild: "messgeraete" }),
    K("reihe", 1, B, "a", "a2.1", "Reihenschaltung: Was gilt für Strom, Spannung und Widerstand?", "Strom: überall gleich\nSpannungen: addieren sich (U = U1 + U2 + …)\nWiderstände: addieren sich (R = R1 + R2 + …)", { bild: "reihenschaltung" }),
    K("parallel", 1, B, "a", "a2.1", "Parallelschaltung: Was gilt für Spannung, Strom und Widerstand?", "Spannung: an allen gleich\nStröme: addieren sich (I = I1 + I2 + …)\nGesamtwiderstand: kleiner als der kleinste Einzelwiderstand\nFür zwei Widerstände: R = R1·R2 / (R1+R2)", { bild: "parallelschaltung" }),
    K("5-sicherheitsregeln", 1, B, "a", "a1.4", "Nenne die 5 Sicherheitsregeln in der richtigen Reihenfolge.", "1. Freischalten (allseitig trennen)\n2. Gegen Wiedereinschalten sichern\n3. Spannungsfreiheit prüfen\n4. Erden und kurzschliessen\n5. Benachbarte, unter Spannung stehende Teile abdecken", { quelle: "Suva «5 + 5 lebenswichtige Regeln»" }),
    K("5-regeln-vorgesetzte", 1, B, "a", "a1.4", "Welches sind die 5 lebenswichtigen Regeln für Vorgesetzte bzw. Auftraggeber (Suva)?", "1. Für klare Aufträge sorgen\n2. Geeignetes Personal einsetzen\n3. Sichere Arbeitsmittel verwenden\n4. Schutzausrüstung tragen\n5. Nur geprüfte Anlagen in Betrieb nehmen", { quelle: "Suva; Profi-Spick Steckdosen prüfen" }),
    K("notrufnummern", 1, B, "a", "a1.4", "Welche Notrufnummern gelten in der Schweiz?", "144 Sanität\n117 Polizei\n118 Feuerwehr\n1414 Rega\n145 Tox Info\n112 Europäischer Notruf"),
    K("abcd", 1, B, "a", "a1.4", "Wofür stehen A, B, C und D bei der Ersten Hilfe?", "A – Atemwege freimachen\nB – Beatmung / Atmung prüfen\nC – Circulation: Herzdruckmassage\nD – Defibrillation (AED)"),
    K("koerperstrom", 1, B, "a", "a4.2", "Welche Wirkungen hat Strom (50 Hz) auf den Menschen – grobe Richtwerte?", "ca. 0,5 mA: spürbar\nca. 10 mA: Loslassgrenze (Verkrampfung)\nab ca. 50 mA: Herzkammerflimmern möglich – Lebensgefahr\nZusätzlich: Verbrennungen und Zersetzung von Körperflüssigkeit"),
    K("kleinspannung", 1, B, "b", "b1.1", "Bis zu welcher Spannung spricht man von Kleinspannung (SELV/PELV)?", "bis 50 V Wechselspannung\nbis 120 V Gleichspannung"),
    K("schutzklassen", 1, B, "b", "b1.1", "Welche drei Schutzklassen gibt es bei Geräten?", "SK I: mit Schutzleiteranschluss\nSK II: doppelte/verstärkte Isolierung, kein PE\nSK III: Betrieb mit Kleinspannung", { bild: "schutzklassen" }),
    K("leiterfarben", 1, B, "c", "c2.3", "Welche Farben haben die Leiter L1, L2, L3, N und PE?", "L1 braun · L2 schwarz · L3 grau\nN blau\nPE grün-gelb (nur für den Schutzleiter!)"),
    K("ipcode", 1, B, "b", "b1.3", "Was bedeuten die beiden Ziffern im IP-Code?", "1. Ziffer: Schutz gegen Berührung und Fremdkörper (0–6)\n2. Ziffer: Schutz gegen Wasser (0–8)\nBeispiel IP 44: Fremdkörper > 1 mm, Spritzwasser", { bild: "ipcode" }),
    K("bad-ipx", 1, B, "b", "b1.3", "Welche Schutzart brauchen Betriebsmittel in den Bereichen 1 und 2 im Bad?", "Mindestens IPX4.\nWo mit Strahlwasser gereinigt wird (z. B. öffentliche Bäder): IPX5.", { bild: "badzonen", quelle: "NIN 2025, 7.01" }),
    K("vorsaetze", 1, B, "a", "a2.1", "Wofür stehen die Vorsätze k, M, m und µ?", "k = Kilo = 1000\nM = Mega = 1 000 000\nm = Milli = 0,001\nµ = Mikro = 0,000 001"),
    K("schaltungen", 1, B, "c", "c1.1", "Welche Schaltung braucht es, um eine Lampe von 1, 2 oder 3 Stellen zu schalten?", "1 Stelle: Ausschaltung\n2 Stellen: Wechselschaltung (2 Wechselschalter)\n3 Stellen: Kreuzschaltung (2 Wechsel- + 1 Kreuzschalter)\nViele Stellen: Taster + Stromstossschalter", { bild_antwort: "wechselschaltung" }),
    K("messkategorien", 1, B, "a", "a4.2", "Was bedeuten die Messkategorien CAT II, III und IV?", "CAT II: Steckdosen, Geräte\nCAT III: Verteilungen, fest installierte Anlagen\nCAT IV: Hausanschluss, Zähler, Freileitungen\nJe näher an der Einspeisung, desto höher die Kategorie!", { bild: "messkategorien" }),
    K("diazed-farben", 1, B, "c", "c1.1", "Welche Kennmelderfarben haben Diazed-Sicherungen 6 A, 10 A, 16 A, 20 A und 25 A?", "6 A grün\n10 A rot\n16 A grau\n20 A blau\n25 A gelb", { bild: "diazed" }),
    K("blitzschutz", 1, B, "b", "b2.1", "Aus welchen drei Teilen besteht der äussere Blitzschutz?", "1. Fangeinrichtung (Dach)\n2. Ableitungen (Fassade)\n3. Erdungsanlage (z. B. Fundamenterder)", { bild: "blitzschutz" }),
    K("spa", 1, B, "b", "b2.1", "Wozu dient der Schutz-Potenzialausgleich?", "Er verbindet Schutzleiter und fremde leitfähige Teile (z. B. Wasser-, Gasleitungen) mit der Haupterdungsschiene. So entstehen im Gebäude keine gefährlichen Spannungsunterschiede."),
    K("pv", 1, E, "d", "d2.2", "Welche Spannung liefern Solarmodule, und wozu braucht es den Wechselrichter?", "Solarmodule liefern Gleichspannung (DC).\nDer Wechselrichter wandelt sie in netzkonforme Wechselspannung (AC) 230/400 V um.", { bild: "pvanlage" }),
    K("lichtgroessen", 1, B, "c", "c2.2", "Was geben Lumen, Lux und lm/W an?", "Lumen (lm): Lichtstrom – wie viel Licht eine Lampe abgibt\nLux (lx): Beleuchtungsstärke – wie viel Licht auf einer Fläche ankommt\nlm/W: Lichtausbeute – wie effizient eine Lampe ist"),
    K("mac-ip", 1, E, "d", "d4.2", "Was ist der Unterschied zwischen MAC-Adresse und IP-Adresse?", "MAC-Adresse: fest im Netzwerkgerät gespeichert (Hardware-Adresse)\nIP-Adresse: logische Adresse im Netzwerk, wird meist vom Router per DHCP vergeben"),

    /* 2. Lehrjahr */
    K("ls-charakteristik", 2, B, "c", "c3.2", "Bei welchem Vielfachen von In lösen LS B, C und D magnetisch aus?", "B: 3 – 5 × In\nC: 5 – 10 × In\nD: 10 – 20 × In", { bild: "lskennlinie" }),
    K("ls-ausloeser", 2, B, "c", "c3.2", "Welche zwei Auslöser hat ein Leitungsschutzschalter und wofür?", "Thermischer Auslöser (Bimetall): Überlast, verzögert\nElektromagnetischer Auslöser: Kurzschluss, unverzögert"),
    K("rcd-prinzip", 2, B, "c", "c3.2", "Wie funktioniert ein Fehlerstromschutzschalter (RCD)?", "Der Summenstromwandler vergleicht den hin- und zurückfliessenden Strom. Fliesst Strom über PE oder eine Person ab, entsteht eine Differenz – der RCD schaltet ab.", { bild: "rcd" }),
    K("tn-systeme", 2, E, "d", "d2.1", "Was unterscheidet TN-S, TN-C und TN-C-S?", "TN-S: N und PE getrennt\nTN-C: gemeinsamer PEN-Leiter\nTN-C-S: zuerst PEN, danach in N und PE aufgeteilt – danach nie wieder verbinden!", { bild: "netzsysteme" }),
    K("drehstrom", 2, E, "d", "d2.1", "Welche Spannungen hat das Schweizer Niederspannungsnetz?", "Aussenleiter–Aussenleiter: 400 V\nAussenleiter–N: 230 V\n400 V = √3 · 230 V\nFrequenz: 50 Hz"),
    K("stern-dreieck", 2, E, "c", "c4.1", "Wozu dient der Stern-Dreieck-Anlauf?", "Er reduziert den hohen Anlaufstrom (und das Anlaufmoment) von Drehstrommotoren auf ca. 1/3. Nach dem Hochlauf wird auf Dreieck umgeschaltet.", { bild: "sterndreieck" }),
    K("schliesser-oeffner", 2, B, "c", "c3.3", "Was ist ein Schliesser, was ist ein Öffner?", "Schliesser: in Ruhe offen, schliesst bei Betätigung\nÖffner: in Ruhe geschlossen, öffnet bei Betätigung", { bild: "kontakte" }),
    K("spannungsfall", 2, E, "a", "a2.5", "Wie gross darf der Spannungsfall in einer Installation höchstens sein, und wie berechnet man ihn (Wechselstrom)?", "Richtwert NIN 5.2.5: max. 4 % in der ganzen Installation.\nΔU = 2 · l · I · cos φ / (κ · A)\nκ (Cu) = 56 m/(Ω·mm²)"),
    K("selektivitaet", 2, E, "b", "b1.1", "Was bedeutet Selektivität?", "Bei einem Fehler schaltet nur das Schutzorgan direkt vor der Fehlerstelle ab. Der Rest der Anlage bleibt in Betrieb."),
    K("sensor-aktor", 2, E, "d", "d1.1", "Was ist in der Gebäudeautomation ein Sensor und was ein Aktor?", "Sensor: erfasst und sendet (z. B. Taster, Präsenzmelder, Wetterstation)\nAktor: empfängt und schaltet (z. B. Schaltaktor, Dimmaktor, Jalousieaktor)"),
    K("trafo", 2, E, "d", "d2.4", "Welche Gleichung gilt für die Spannungen beim idealen Transformator?", "U1 / U2 = N1 / N2\nDie Spannungen verhalten sich wie die Windungszahlen.", { bild: "trafo" }),

    /* 3./4. Lehrjahr */
    K("erstpruefung", 3, B, "f", "f2.2", "Aus welchen drei Teilen besteht die Erstprüfung?", "1. Sichtprüfung (spannungsfrei, alle Sinne)\n2. Erproben und Messen\n3. Dokumentieren (Mess- und Prüfprotokoll)", { quelle: "Erstprüfung von provisorischen Installationen (2025)" }),
    K("messreihenfolge", 3, B, "f", "f2.2", "Nenne die Messungen der Erstprüfung in der richtigen Reihenfolge.", "a) Niederohm (Schutzleiter)\nb) Isolation\nc) Polarität\nd) Schleifenimpedanz\ne) RCD\nf) Drehrichtung\ng) Funktionsprüfung\nh) Spannungsfall"),
    K("niederohm", 3, B, "f", "f2.2", "Welche Anforderungen gelten für die Niederohmmessung?", "Messspannung 4–24 V AC oder DC\nMessstrom mind. 200 mA\nRichtwerte: Schutzleiter < 1 Ω, Schutz-Potenzialausgleich < 0,1 Ω"),
    K("isolation", 3, B, "f", "f2.2", "Prüfspannung und Mindestwert der Isolationsmessung für Stromkreise 230/400 V?", "Prüfspannung 500 V DC\nMindestwert 1 MΩ\n(SELV/PELV: 250 V → 0,5 MΩ)", { bild: "isolationsmessung" }),
    K("rcd-zeiten", 3, B, "f", "f2.2", "Welche Auslösezeiten muss ein RCD 30 mA einhalten?", "Bei 1 × IΔn (30 mA): ≤ 0,3 s\nBei 5 × IΔn (150 mA): ≤ 0,04 s\nSelektiver RCD bei 5 × IΔn: ≤ 0,15 s"),
    K("abschaltzeiten", 3, B, "f", "f2.2", "Welche Abschaltzeiten gelten im TN-System 230/400 V?", "Endstromkreise ≤ 32 A: 0,4 s\nEndstromkreise mit Steckdosen ≤ 63 A: 0,4 s\nEndstromkreise > 32 A (ohne Steckdosen) und Verteilstromkreise: 5 s"),
    K("ik-faustformel", 4, E, "f", "f2.3", "Faustformeln: Welcher Kurzschlussstrom ist für 0,4 s bei LS B, C und D nötig – und welcher Korrekturfaktor gilt für den Messwert?", "B: 5 × In · C: 10 × In · D: 20 × In\nDen gemessenen Ik mit 0,66 multiplizieren und dann vergleichen.", { bild: "schleife" }),
    K("geraetepruefung", 4, E, "e", "e2.5", "Welche Prüfschritte umfasst die Geräteprüfung?", "1. Sichtprüfung\n2. Schutzleiterwiderstand (bei SK I)\n3. Isolationswiderstand\n4. Schutzleiter- bzw. Berührungsstrom\n5. Funktionsprüfung\n6. Dokumentation"),
    K("geraete-grenzwerte", 4, E, "e", "e2.5", "Grenzwerte der Geräteprüfung: RPE, RISO (SK I / SK II) und Schutzleiterstrom?", "RPE ≤ 0,3 Ω (bis 5 m, +0,1 Ω je 7,5 m, max. 1 Ω)\nRISO SK I ≥ 1 MΩ (mit Heizung ≥ 0,3 MΩ)\nRISO SK II ≥ 2 MΩ\nSchutzleiterstrom ≤ 3,5 mA"),
    K("psa-klassen", 1, B, "a", "a4.4", "Welche Schutzkleidung braucht es bei einem Kurzschlussstrom von 1–7 kA (ESTI-Weisung 407)?", "Schutzkleidung Klasse 1, Schutzhelm mit Visier und Hitzeschutzhandschuhe.\nBis 1 kA: keine Vorgaben (Empfehlung 100 % Baumwolle)."),
    K("rechtspyramide", 4, B, "qv", "qv-sicherheit", "Wie ist die Rechtspyramide in der Elektrobranche aufgebaut?", "Bundesverfassung\n→ Gesetze (z. B. EleG)\n→ Verordnungen (NIV, StV, NEV …)\n→ Normen (z. B. NIN)"),
    K("npk", 4, B, "qv", "qv-bk", "Was ist in einer NPK-Leistungsposition enthalten?", "Material inkl. Kleinmaterial, Installationszeit, zwei Anschlüsse pro Apparat (mit einfacher Beschriftung), Erstprüfung und Schlusskontrolle, Instruktion und Übergabe.", { quelle: "Profi-Spick Ausmass nach NPK" })
  );
})();
