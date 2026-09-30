/* Serie 1 – Aufgaben 3./4. Lehrjahr und QV (Entwurf) – Schwerpunkt Erstprüfung, Messen nach NIN 2025, Geräteprüfung */
AUFGABEN.push(
  {
    id: "s1-lj3-erstpruefung-ablauf-01", typ: "reihenfolge", lehrjahr: 3, berufe: ["EI", "ME"], fach: "f", lz: "f2.2",
    titel: "Erproben und Messen – die Reihenfolge",
    frage: "Bringe die Messungen der Erstprüfung in die Reihenfolge nach NIN (nach der Sichtprüfung).",
    schritte: ["Niederohmmessung (Schutzleiter)", "Isolationsmessung", "Polarität prüfen", "Schleifenimpedanz / Kurzschlussstrom", "RCD-Prüfung", "Drehrichtung", "Funktionsprüfungen (Erproben)"],
    erklaerung: "Die ersten beiden Messungen erfolgen spannungsfrei. Erst ab der Polaritätsprüfung wird Spannung benötigt. Am Schluss kann noch der Spannungsfall beurteilt werden.",
    quelle: "Erstprüfung von provisorischen Installationen (2025); NIN 2025, Kap. 6", demo_status: "entwurf"
  },
  {
    id: "s1-lj3-sichtpruefung-01", typ: "auswahl", lehrjahr: 3, berufe: ["EI", "ME"], fach: "f", lz: "f2.2",
    titel: "Wie wichtig ist die Sichtprüfung?",
    frage: "Etwa welcher Anteil der Installationsfehler lässt sich bereits mit einer gründlichen Sichtprüfung finden?",
    optionen: ["ca. 10 %", "ca. 30 %", "ca. 70 %", "100 %"],
    richtig: [2], nicht_mischen: true,
    erklaerung: "Gegen 70 % – besonders Fehler, die man mit Messen nicht findet, z. B. fehlender Basisschutz oder fehlende Brandabschottung. Die Sichtprüfung nutzt alle Sinne und erfolgt spannungsfrei.",
    quelle: "Erstprüfung von provisorischen Installationen (2025), Abschnitt Sichtprüfung", demo_status: "entwurf"
  },
  {
    id: "s1-lj3-niederohm-01", typ: "luecke", lehrjahr: 3, berufe: ["EI", "ME"], fach: "f", lz: "f2.2",
    titel: "Niederohmmessung",
    frage: "Ergänze die Anforderungen an die Niederohmmessung (nur Zahl).",
    text: "Die Messspannung liegt zwischen 4 und {{24}} V AC oder DC.\nDer Messstrom beträgt mindestens {{200}} mA.\nRichtwert Schutzleiter: kleiner als {{1}} Ω.",
    erklaerung: "Die NIN legt keinen festen Mindestwert fest, in der Praxis liegt der Schutzleiter unter 1 Ω, der Schutz-Potenzialausgleichsleiter unter 0,1 Ω.",
    quelle: "Profi-Spick Steckdosen prüfen; Erstprüfung (2025)", demo_status: "entwurf"
  },
  {
    id: "s1-lj3-isolation-01", typ: "zuordnen", lehrjahr: 3, berufe: ["EI", "ME"], fach: "f", lz: "f2.2",
    titel: "Isolationsmessung: Prüfspannung und Grenzwert",
    frage: "Ordne jedem Stromkreis die richtige Prüfspannung und den Mindestwert zu.",
    paare: [
      { links: "SELV / PELV", rechts: "250 V DC → mind. 0,5 MΩ" },
      { links: "Stromkreise 50 bis 500 V (z. B. 230/400 V)", rechts: "500 V DC → mind. 1 MΩ" },
      { links: "Stromkreise über 500 V", rechts: "1000 V DC → mind. 1 MΩ" }
    ],
    erklaerung: "Bei empfindlichen Anlagen darf man zuerst mit 250 V messen, die Messung mit 500 V ist aber zwingend (bei Stromkreisen 230/400 V).",
    quelle: "Profi-Spick Steckdosen prüfen; NIN 2025, 6.4", demo_status: "entwurf"
  },
  {
    id: "s1-lj3-isolation-ablauf-01", typ: "reihenfolge", lehrjahr: 3, berufe: ["EI", "ME"], fach: "f", lz: "f2.2",
    titel: "Ablauf der Isolationsmessung",
    frage: "Bringe die Schritte der Isolationsmessung in einer Verteilung in die richtige Reihenfolge.",
    bild: "isolationsmessung",
    schritte: [
      "Anlage spannungsfrei schalten und Spannungsfreiheit prüfen",
      "Neutralleitertrenner öffnen (erst wenn die Aussenleiter getrennt sind)",
      "Messgerät kontrollieren (Spitzen zusammen, «Test» → 0 MΩ)",
      "Zwischen N und PE messen",
      "Zwischen L1, L2, L3 und PE messen",
      "Neutralleitertrenner schliessen und kontrollieren, dann einschalten"
    ],
    erklaerung: "Vorher den Kunden informieren (Unterbruch!), empfindliche Geräte abhängen, Lift blockieren, Alarmanlagen melden. Hinter Schützen messen nicht vergessen!",
    quelle: "Profi-Spick Steckdosen prüfen (Isolationswiderstandsmessung)", demo_status: "entwurf"
  },
  {
    id: "s1-lj3-rcd-pruefung-01", typ: "wahrfalsch", lehrjahr: 3, berufe: ["EI", "ME"], fach: "f", lz: "f2.2",
    titel: "RCD prüfen",
    frage: "Richtig oder falsch?",
    aussagen: [
      { text: "Bei der RCD-Prüfung muss die Abschaltzeit messtechnisch nachgewiesen werden.", wahr: true },
      { text: "Ein RCD 30 mA muss beim Bemessungsfehlerstrom (1 × IΔn) innert 0,3 s auslösen.", wahr: true },
      { text: "Das Drücken der Prüftaste ersetzt die Messung bei der Erstprüfung.", wahr: false },
      { text: "Mit 5 × IΔn (150 mA) muss ein RCD 30 mA innert 0,04 s auslösen.", wahr: true }
    ],
    erklaerung: "Die Prüftaste testet nur die Mechanik. Bei der Erstprüfung wird mit dem Messgerät ein Fehlerstrom erzeugt und die Auslösezeit gemessen.",
    quelle: "Erstprüfung (2025), RCD-Prüfung; Profi-Spick Steckdosen prüfen", demo_status: "entwurf"
  },
  {
    id: "s1-lj3-abschaltzeit-01", typ: "zuordnen", lehrjahr: 3, berufe: ["EI", "ME"], fach: "f", lz: "f2.2",
    titel: "Maximale Abschaltzeiten (TN-System, 230/400 V)",
    frage: "Welche maximale Abschaltzeit gilt?",
    paare: [
      { links: "Endstromkreis bis 32 A", rechts: "0,4 s" },
      { links: "Endstromkreis mit Steckdosen bis 63 A", rechts: "0,4 s" },
      { links: "Endstromkreis über 32 A ohne Steckdosen", rechts: "5 s" },
      { links: "Verteilstromkreis", rechts: "5 s" }
    ],
    erklaerung: "Kürzere Abschaltzeiten gelten dort, wo Personen Geräte in der Hand halten können.",
    quelle: "Profi-Spick Steckdosen prüfen; Erstprüfung (2025), Bild 5", demo_status: "entwurf"
  },
  {
    id: "s1-lj3-schleife-01", typ: "freitext", lehrjahr: 3, berufe: ["EI", "ME"], fach: "f", lz: "f2.2",
    titel: "Was misst die Schleifenimpedanz?",
    frage: "Beschreibe mithilfe des Bildes, was bei der Messung der Schleifenimpedanz (Ik L-PE) geprüft wird.",
    bild: "schleife",
    stichworte: [["abschalt", "auslös", "abschaltzeit", "abschaltbedingung"], ["schutzleiter", "pe"], ["kurzschlussstrom", "ik", "fehlerstrom"], ["ende der leitung", "am ende", "letzte steckdose", "entferntesten"]],
    mindestens: 3,
    musterloesung: "Gemessen wird der Widerstand der ganzen Fehlerschleife (Trafo – Aussenleiter – Fehlerstelle – Schutzleiter – zurück). Daraus berechnet das Gerät den Kurzschlussstrom Ik. Am Ende der Leitung wird so kontrolliert, ob das Schutzorgan im Fehlerfall rechtzeitig abschaltet. Da ein grosser Prüfstrom fliesst, wird zugleich der Schutzleiter geprüft.",
    erklaerung: "Achtung: Mit vorgeschaltetem RCD ist die Ik-Messung L-PE bei vielen Geräten nicht möglich.",
    quelle: "Profi-Spick Steckdosen prüfen (Kurzschlussstrommessung)", demo_status: "entwurf"
  },
  {
    id: "s1-lj4-ik-korrektur-01", typ: "rechnen", lehrjahr: 4, berufe: ["EI"], fach: "f", lz: "f2.3",
    titel: "Messwert mit Korrekturfaktor",
    frage: "Du misst an einer Steckdose Ik L-PE = 285 A. Welcher Wert gilt nach dem Korrekturfaktor 0,66 für den Nachweis der Abschaltzeit?",
    loesung: 188.1, einheit: "A", toleranz: 0.01,
    erklaerung: "285 A · 0,66 ≈ 188 A. Bei einem LS C13 braucht es für 0,4 s: 10 · 13 A = 130 A. 188 A > 130 A → Die Abschaltzeit wird eingehalten.",
    quelle: "Profi-Spick Steckdosen prüfen (Abschaltzeit kontrollieren)", demo_status: "entwurf"
  },
  {
    id: "s1-lj4-ik-zukurz-01", typ: "auswahl", lehrjahr: 4, berufe: ["EI"], fach: "f", lz: "f2.3",
    titel: "Ik zu klein – was tun?",
    frage: "Der Kurzschlussstrom an der letzten Steckdose ist zu klein, die Abschaltzeit wird nicht eingehalten. Welche Massnahmen sind sinnvoll? (Kontaktstellen sind bereits geprüft.)",
    optionen: [
      "RCD 30 mA vorschalten",
      "LS mit kleinerem Nennstrom einsetzen (z. B. 10 A statt 13 A)",
      "Charakteristik von C auf B wechseln",
      "LS mit grösserem Nennstrom einsetzen",
      "Messwert ohne Korrekturfaktor eintragen"
    ],
    richtig: [0, 1, 2],
    erklaerung: "Weitere Möglichkeiten: grösserer Querschnitt oder zusätzlicher Schutz-Potenzialausgleich. Zuerst aber immer alle Klemmen kontrollieren – Ik L-N sollte etwa gleich gross sein wie Ik L-PE.",
    quelle: "Profi-Spick Steckdosen prüfen (Ik zu klein)", demo_status: "entwurf"
  },
  {
    id: "s1-lj4-ls-ausloesestrom-01", typ: "zuordnen", lehrjahr: 4, berufe: ["EI"], fach: "f", lz: "f2.3",
    titel: "Minimaler Kurzschlussstrom für 0,4 s",
    frage: "Welchen Kurzschlussstrom braucht es mindestens, damit der LS innerhalb von 0,4 s auslöst (Faustformel)?",
    paare: [
      { links: "LS B16", rechts: "80 A (5 × In)" },
      { links: "LS C16", rechts: "160 A (10 × In)" },
      { links: "LS D16", rechts: "320 A (20 × In)" }
    ],
    erklaerung: "Faustformeln 0,4 s: B = 5 × In, C = 10 × In, D = 20 × In.",
    quelle: "Profi-Spick Steckdosen prüfen (Auslöseströme)", demo_status: "entwurf"
  },
  {
    id: "s1-lj3-pruefarten-01", typ: "zuordnen", lehrjahr: 3, berufe: ["EI", "ME"], fach: "f", lz: "f2.2",
    titel: "Wer prüft was?",
    frage: "Ordne jeder Prüfung die zuständige Person zu.",
    paare: [
      { links: "Baubegleitende Erstprüfung", rechts: "Elektroinstallateur/in EFZ (bzw. ausgebildete/r Montage-Elektriker/in)" },
      { links: "Betriebsinterne Schlusskontrolle", rechts: "Fachkundige oder kontrollberechtigte Person" },
      { links: "Abnahmekontrolle / periodische Kontrolle", rechts: "Unabhängiges Kontrollorgan / akkreditierte Inspektionsstelle" }
    ],
    erklaerung: "Lernende dürfen bei der Erstprüfung unter Aufsicht mithelfen, wenn sie instruiert sind. Das Ergebnis der Schlusskontrolle ist der Sicherheitsnachweis (SiNa).",
    quelle: "Erstprüfung von provisorischen Installationen (2025), Tabelle 1; NIV Art. 24", demo_status: "entwurf"
  },
  {
    id: "s1-lj3-niv-01", typ: "auswahl", lehrjahr: 3, berufe: ["EI", "ME"], fach: "f", lz: "f2.2",
    titel: "NIV Art. 24",
    frage: "Was verlangt Art. 24 der Niederspannungs-Installationsverordnung (NIV) vor der Inbetriebnahme einer Installation (oder von Teilen davon)?",
    optionen: ["Eine baubegleitende Erstprüfung, die protokolliert wird", "Nur eine mündliche Freigabe durch den Bauleiter", "Eine Kontrolle durch die Suva", "Nichts, wenn die Installation provisorisch ist"],
    richtig: [0],
    erklaerung: "Die Erstprüfung ist immer Pflicht – auch bei Provisorien – und muss protokolliert werden (Mess- und Prüfprotokoll).",
    quelle: "Erstprüfung von provisorischen Installationen (2025); NIV SR 734.27", demo_status: "entwurf"
  },
  {
    id: "s1-lj3-psa-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a4.4",
    titel: "Schutzkleidung nach Kurzschlussstrom",
    frage: "Welche Schutzausrüstung ist bei Arbeiten in der Nähe von unter Spannung stehenden Teilen nötig (ESTI-Weisung 407)?",
    paare: [
      { links: "Ik bis 1 kA", rechts: "keine Vorgaben (Empfehlung: 100 % Baumwolle)" },
      { links: "Ik über 1 kA bis 7 kA", rechts: "Schutzkleidung Klasse 1, Helm mit Visier, Hitzeschutzhandschuhe" },
      { links: "Ik über 7 kA bis 15 kA", rechts: "2 × Klasse 1 oder 1 × Klasse 2, Helm mit Visier, Handschuhe" }
    ],
    erklaerung: "Über 20 kA (bzw. Vorsicherung über 315 A) muss freigeschaltet werden oder es braucht Massnahmen nach einer Risikoanalyse.",
    quelle: "Profi-Spick Steckdosen prüfen (Schutzkleidungsstufen)", demo_status: "entwurf"
  },
  {
    id: "s1-lj3-spa-01", typ: "auswahl", lehrjahr: 1, berufe: ["EI", "ME"], fach: "b", lz: "b2.1",
    titel: "Was gehört in den Schutz-Potenzialausgleich?",
    frage: "Welche Teile werden in den Schutz-Potenzialausgleich einbezogen?",
    optionen: ["Metallene Wasser- und Gasleitungen, die ins Gebäude führen", "Lüftungskanäle und Liftschienen", "Treppengeländer ohne Verbindung nach aussen", "Metallene Regale im Keller"],
    richtig: [0, 1],
    erklaerung: "Grundsatz: Einbezogen werden fremde leitfähige Teile, die ein Potenzial von aussen ins Gebäude bringen können. Treppengeländer oder Regale sind in der Regel keine solchen Teile.",
    quelle: "Profi-Spick Steckdosen prüfen (Schutzpotenzialausgleich)", demo_status: "entwurf"
  },
  {
    id: "s1-lj4-geraetepruefung-01", typ: "reihenfolge", lehrjahr: 4, berufe: ["EI"], fach: "e", lz: "e2.5",
    titel: "Ablauf der Geräteprüfung",
    frage: "In welcher Reihenfolge prüfst du eine reparierte Bohrmaschine (Schutzklasse I)?",
    schritte: ["Sichtprüfung (Gehäuse, Kabel, Stecker, Zugentlastung)", "Schutzleiterwiderstand messen", "Isolationswiderstand messen", "Schutzleiterstrom / Ersatzableitstrom messen", "Funktionsprüfung", "Dokumentieren"],
    erklaerung: "Erst wenn die Schutzmassnahme nachgewiesen ist, wird das Gerät unter Spannung gesetzt (Funktionsprüfung).",
    quelle: "Geräteprüfung (electrosuisse Info 3024 / DIN VDE 0701-0702)", demo_status: "entwurf"
  },
  {
    id: "s1-lj4-geraetepruefung-02", typ: "zuordnen", lehrjahr: 4, berufe: ["EI"], fach: "e", lz: "e2.5",
    titel: "Grenzwerte der Geräteprüfung",
    frage: "Welcher Grenzwert gilt?",
    paare: [
      { links: "Schutzleiterwiderstand (Anschlussleitung bis 5 m)", rechts: "≤ 0,3 Ω" },
      { links: "Isolationswiderstand Schutzklasse I", rechts: "≥ 1 MΩ" },
      { links: "Isolationswiderstand Schutzklasse II", rechts: "≥ 2 MΩ" },
      { links: "Schutzleiterstrom (allgemein)", rechts: "≤ 3,5 mA" }
    ],
    erklaerung: "Pro weitere 7,5 m Leitung kommen 0,1 Ω dazu (max. 1 Ω). Geräte mit Heizelementen: Isolationswiderstand ≥ 0,3 MΩ.",
    quelle: "Geräteprüfung (electrosuisse Info 3024 / DIN VDE 0701-0702)", demo_status: "entwurf"
  },
  {
    id: "s1-lj4-geraetepruefung-03", typ: "rechnen", lehrjahr: 4, berufe: ["EI"], fach: "e", lz: "e2.5",
    titel: "Grenzwert Schutzleiter bei langer Leitung",
    frage: "Ein Gerät hat eine 12,5 m lange Anschlussleitung (bis 16 A). Welchen Schutzleiterwiderstand darf man höchstens messen?",
    loesung: 0.4, einheit: "Ω", toleranz: 0.001,
    erklaerung: "0,3 Ω bis 5 m + 0,1 Ω für die nächsten 7,5 m = 0,4 Ω (bis 12,5 m).",
    quelle: "Geräteprüfung (electrosuisse Info 3024)", demo_status: "entwurf"
  },
  {
    id: "s1-lj3-drehfeld-01", typ: "auswahl", lehrjahr: 3, berufe: ["EI", "ME"], fach: "f", lz: "f2.2",
    titel: "Linksdrehfeld an der Steckdose",
    frage: "An einer CEE-Steckdose 400 V misst du ein Linksdrehfeld. Was machst du?",
    optionen: ["Zwei Aussenleiter vertauschen", "N und PE vertauschen", "Alle drei Aussenleiter zyklisch vertauschen", "Nichts, das Drehfeld spielt keine Rolle"],
    richtig: [0],
    erklaerung: "Steckdosen müssen ein Rechtsdrehfeld haben. Sonst laufen Motoren in die falsche Richtung – das kann Personen gefährden.",
    quelle: "Profi-Spick Steckdosen prüfen (Drehfeld messen)", demo_status: "entwurf"
  },
  {
    id: "s1-lj3-rcd-pflicht-01", typ: "wahrfalsch", lehrjahr: 3, berufe: ["EI", "ME"], fach: "c", lz: "c2.4",
    titel: "Wo braucht es einen RCD 30 mA?",
    frage: "Richtig oder falsch (Neuinstallation)?",
    aussagen: [
      { text: "Jede Steckdose bis 32 A muss mit einem RCD IΔn ≤ 30 mA geschützt sein (Ausnahme: nicht freizügig verwendbare Steckdosen).", wahr: true },
      { text: "Im Bade- oder Duschzimmer ist die ganze Installation mit einem RCD 30 mA zu schützen.", wahr: true },
      { text: "In der Landwirtschaft ist für die ganze Installation ein RCD 300 mA gefordert.", wahr: true },
      { text: "Ein RCD ersetzt den Leitungsschutzschalter.", wahr: false }
    ],
    erklaerung: "Der RCD schützt Personen bei Fehlerströmen, nicht aber die Leitung vor Überlast und Kurzschluss. Dafür braucht es weiterhin den LS (oder einen FI/LS).",
    quelle: "Profi-Spick Steckdosen prüfen (RCD/FI-Messung); NIN 2025", demo_status: "entwurf"
  },

  /* ---------- QV ---------- */
  {
    id: "s1-qv-rechtspyramide-01", typ: "reihenfolge", lehrjahr: 4, berufe: ["EI", "ME"], fach: "qv", lz: "qv-sicherheit",
    titel: "Rechtspyramide der Schweiz",
    frage: "Ordne von oben (höchste Stufe) nach unten.",
    schritte: ["Bundesverfassung", "Elektrizitätsgesetz (EleG)", "Verordnungen (z. B. NIV, StV, NEV)", "Normen (z. B. NIN)"],
    erklaerung: "Gesetze stehen über Verordnungen, Verordnungen über Normen. Die NIV verweist auf die NIN – deshalb ist die NIN verbindlich.",
    quelle: "Basiswissen für Elektroberufe, Kap. 3.1 Rechtspyramide", demo_status: "entwurf"
  },
  {
    id: "s1-qv-abkuerzungen-01", typ: "zuordnen", lehrjahr: 4, berufe: ["EI", "ME"], fach: "qv", lz: "qv-sicherheit",
    titel: "Abkürzungen aus dem Vorschriftenwesen",
    frage: "Wofür stehen die Abkürzungen?",
    paare: [
      { links: "NIV", rechts: "Niederspannungs-Installationsverordnung" },
      { links: "NIN", rechts: "Niederspannungs-Installationsnorm" },
      { links: "StV", rechts: "Starkstromverordnung" },
      { links: "NEV", rechts: "Niederspannungs-Erzeugnisverordnung" },
      { links: "SiNa", rechts: "Sicherheitsnachweis" }
    ],
    erklaerung: "Die NIV regelt z. B., wer installieren und kontrollieren darf, die NIN wie installiert wird.",
    quelle: "Basiswissen für Elektroberufe, Kap. 3", demo_status: "entwurf"
  },
  {
    id: "s1-qv-npk-01", typ: "wahrfalsch", lehrjahr: 4, berufe: ["EI", "ME"], fach: "qv", lz: "qv-bk",
    titel: "Ausmass nach NPK",
    frage: "Richtig oder falsch?",
    aussagen: [
      { text: "Eine NPK-Leistungsposition enthält alles für eine komplette, betriebsfertige Installation (Material, Zeit, Kleinmaterial).", wahr: true },
      { text: "In Leistungspositionen von Apparaten sind jeweils zwei Anschlüsse enthalten.", wahr: true },
      { text: "Bei UP-Rohrinstallationen sind Abzweigdosen und Lampendübel immer schon enthalten.", wahr: false },
      { text: "Bei Installationsteilpositionen (IT) müssen Rohr- und Drahtlängen nicht mehr genau ausgemessen werden.", wahr: true }
    ],
    erklaerung: "Abzweigdosen und Lampendübel werden bei UP-Rohrinstallationen separat ausgemessen. IT-Positionen basieren auf Durchschnittsmengen.",
    quelle: "Profi-Spick Ausmass nach NPK", demo_status: "entwurf"
  }
);
