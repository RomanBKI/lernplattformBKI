/* Aufgaben 1. Lehrjahr */
(function () {
  const SCHEMA_OFFEN = `<svg viewBox="0 0 320 200" width="320" role="img" aria-label="Stromkreis mit Spannungsquelle, offenem Schalter und Lampe" font-family="Arial, sans-serif" font-size="12">
    <g fill="none" stroke="#16202e" stroke-width="2.5" stroke-linecap="round">
      <path d="M40 92 V40 H130"/><path d="M190 40 H280 V84"/><path d="M280 116 V160 H40 V108"/>
      <line x1="25" y1="92" x2="55" y2="92"/><line x1="33" y1="108" x2="47" y2="108" stroke-width="5"/>
      <line x1="130" y1="40" x2="184" y2="16"/>
      <circle cx="280" cy="100" r="16"/><line x1="268.7" y1="88.7" x2="291.3" y2="111.3"/><line x1="291.3" y1="88.7" x2="268.7" y2="111.3"/>
    </g>
    <circle cx="130" cy="40" r="3.5" fill="#16202e"/><circle cx="190" cy="40" r="3.5" fill="#16202e"/>
    <g fill="#5d6b7e"><text x="62" y="96">+</text><text x="62" y="114">–</text><text x="140" y="62">S1</text><text x="248" y="104">E1</text><text x="8" y="140">G1</text></g>
  </svg>`;

  const KABEL = `<svg viewBox="0 0 320 150" width="320" role="img" aria-label="Kabelende mit fünf farbigen Adern" font-family="Arial, sans-serif" font-size="13">
    <rect x="10" y="45" width="90" height="60" rx="12" fill="#9aa3ad"/>
    <g stroke-width="9" stroke-linecap="round" fill="none">
      <path d="M100 55 C140 55 160 20 290 20" stroke="#7a4a1e"/>
      <path d="M100 65 C150 65 170 50 290 50" stroke="#222"/>
      <path d="M100 75 C150 75 180 80 290 80" stroke="#8c8c8c"/>
      <path d="M100 85 C150 85 170 110 290 110" stroke="#2f6fd6"/>
      <path d="M100 95 C140 95 160 140 290 140" stroke="#3aa04a"/>
      <path d="M100 95 C140 95 160 140 290 140" stroke="#f2d20f" stroke-dasharray="9 9"/>
    </g>
    <g fill="#16202e"><text x="298" y="24">1</text><text x="298" y="54">2</text><text x="298" y="84">3</text><text x="298" y="114">4</text><text x="298" y="144">5</text></g>
  </svg>`;

  AUFGABEN.push(
    {
      id: "lj1-ohm-01", typ: "rechnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
      titel: "Ohmsches Gesetz",
      frage: "An einem Widerstand von 46 Ω liegt eine Spannung von 230 V. Wie gross ist der Strom?",
      loesung: 5, einheit: "A", toleranz: 0.01,
      erklaerung: "I = U / R = 230 V / 46 Ω = 5 A"
    },
    {
      id: "lj1-leistung-01", typ: "rechnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
      titel: "Elektrische Leistung",
      frage: "Ein Wasserkocher nimmt an 230 V einen Strom von 8 A auf. Welche Leistung hat er?",
      loesung: 1840, einheit: "W", toleranz: 0.01,
      erklaerung: "P = U · I = 230 V · 8 A = 1840 W (= 1,84 kW)"
    },
    {
      id: "lj1-einheiten-01", typ: "luecke", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
      titel: "Einheiten der Elektrotechnik",
      frage: "Ergänze die Einheiten (ausgeschrieben oder als Zeichen).",
      text: "Die Spannung wird in {{Volt|V}} gemessen, der Strom in {{Ampere|A}}, der Widerstand in {{Ohm|Ω}} und die Leistung in {{Watt|W}}.",
      erklaerung: "Spannung U → Volt (V) · Strom I → Ampere (A) · Widerstand R → Ohm (Ω) · Leistung P → Watt (W)"
    },
    {
      id: "lj1-formelzeichen-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
      titel: "Formelzeichen",
      frage: "Ordne jedem Formelzeichen die richtige Grösse zu.",
      paare: [
        { links: "U", rechts: "Spannung" },
        { links: "I", rechts: "Stromstärke" },
        { links: "R", rechts: "Widerstand" },
        { links: "P", rechts: "Leistung" },
        { links: "W", rechts: "Arbeit (Energie)" }
      ],
      ablenker: ["Frequenz"],
      erklaerung: "U = Spannung, I = Stromstärke, R = Widerstand, P = Leistung, W = elektrische Arbeit. Die Frequenz hat das Formelzeichen f."
    },
    {
      id: "lj1-schema-01", typ: "freitext", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a2.1",
      titel: "Stromkreis beschreiben",
      frage: "Beschreibe den dargestellten Stromkreis: Welche Bauteile siehst du und leuchtet die Lampe? Begründe.",
      bild: { svg: SCHEMA_OFFEN },
      stichworte: [["lampe", "leuchte", "e1"], ["schalter", "s1"], ["spannungsquelle", "batterie", "quelle", "g1", "akku"], ["offen", "unterbrochen", "nicht geschlossen", "geöffnet"], ["leuchtet nicht", "brennt nicht", "kein strom", "fliesst nicht", "ist dunkel"]],
      mindestens: 4,
      musterloesung: "Der Stromkreis besteht aus einer Spannungsquelle (G1), einem Schalter (S1) und einer Lampe (E1). Der Schalter ist offen, der Stromkreis ist unterbrochen – es fliesst kein Strom, die Lampe leuchtet nicht.",
      erklaerung: "Strom fliesst nur in einem geschlossenen Stromkreis."
    },
    {
      id: "lj1-sicherheitsregeln-01", typ: "reihenfolge", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a1.4",
      titel: "Die 5 Sicherheitsregeln",
      frage: "Bringe die 5 Sicherheitsregeln vor dem Arbeiten an elektrischen Anlagen in die richtige Reihenfolge.",
      schritte: [
        "Freischalten und allseitig trennen",
        "Gegen Wiedereinschalten sichern",
        "Auf Spannungslosigkeit prüfen",
        "Erden und kurzschliessen",
        "Gegen benachbarte, unter Spannung stehende Teile schützen"
      ],
      erklaerung: "Merke: Erst freischalten und sichern, dann prüfen – erst wenn sicher keine Spannung anliegt, wird geerdet und kurzgeschlossen. Zum Schluss benachbarte aktive Teile abdecken."
    },
    {
      id: "lj1-erstehilfe-01", typ: "auswahl", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a1.4",
      titel: "Erste Hilfe – ABCD",
      frage: "Beim Erste-Hilfe-Schema ABCD: Wofür steht das «D»?",
      optionen: ["Defibrillation", "Decke holen", "Druckverband anlegen", "Diagnose stellen"],
      richtig: [0],
      erklaerung: "A = Atemwege freimachen, B = Beatmung, C = Circulation (Herzdruckmassage), D = Defibrillation mit dem AED."
    },
    {
      id: "lj1-leiterfarben-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "c", lz: "c2.3",
      titel: "Leiterfarben",
      frage: "Welche Aderfarbe gehört zu welchem Leiter? (Das Bild zeigt ein 5-adriges Kabel.)",
      bild: { svg: KABEL },
      paare: [
        { links: "Schutzleiter PE", rechts: "grün-gelb (5)" },
        { links: "Neutralleiter N", rechts: "blau (4)" },
        { links: "Polleiter L1", rechts: "braun (1)" },
        { links: "Polleiter L2", rechts: "schwarz (2)" },
        { links: "Polleiter L3", rechts: "grau (3)" }
      ],
      erklaerung: "PE = grün-gelb (nur für den Schutzleiter!), N = blau, L1 = braun, L2 = schwarz, L3 = grau."
    },
    {
      id: "lj1-sicherheit-01", typ: "wahrfalsch", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a4.2",
      titel: "Sicherer Umgang mit Elektrizität",
      frage: "Richtig oder falsch?",
      aussagen: [
        { text: "Ein Fehlerstromschutzschalter (RCD) mit 30 mA dient dem Personenschutz.", wahr: true },
        { text: "Ein Leitungsschutzschalter schützt in erster Linie Personen vor einem elektrischen Schlag.", wahr: false },
        { text: "Vor und nach dem Prüfen auf Spannungslosigkeit wird der Spannungsprüfer auf Funktion kontrolliert.", wahr: true },
        { text: "Bei Nässe auf der Baustelle gelten die gleichen Bedingungen wie im Trockenen.", wahr: false }
      ],
      erklaerung: "Der Leitungsschutzschalter schützt die Leitung vor Überlast und Kurzschluss. Für den Personenschutz sorgt der RCD. Nässe erhöht die Gefahr deutlich."
    },
    {
      id: "lj1-kommunikation-01", typ: "auswahl", lehrjahr: 1, berufe: ["EI"], fach: "d", lz: "d4.1",
      titel: "Übertragungsmedien",
      frage: "Welches Übertragungsmedium überträgt Daten mit Licht?",
      optionen: ["Koaxialkabel", "Twisted-Pair-Kabel (U/UTP)", "Lichtwellenleiter (Glasfaser)", "Flachbandkabel"],
      richtig: [2],
      erklaerung: "Lichtwellenleiter (LWL) übertragen Signale mit Licht – unempfindlich gegen elektromagnetische Störungen und für grosse Distanzen geeignet."
    },
    {
      id: "lj1-energie-01", typ: "auswahl", lehrjahr: 1, berufe: ["EI"], fach: "d", lz: "d2.2",
      titel: "Erneuerbare Energieerzeugung",
      frage: "Welche Anlagen erzeugen elektrische Energie aus erneuerbaren Quellen?",
      optionen: ["Photovoltaikanlage", "Kleinwasserkraftwerk", "Windkraftanlage", "Dieselgenerator", "Batteriespeicher"],
      richtig: [0, 1, 2],
      erklaerung: "PV, Wasser- und Windkraft nutzen erneuerbare Quellen. Ein Dieselgenerator nutzt fossilen Brennstoff. Ein Batteriespeicher erzeugt keine Energie – er speichert sie nur."
    },
    {
      id: "lj1-speicher-01", typ: "wahrfalsch", lehrjahr: 1, berufe: ["EI"], fach: "d", lz: "d2.3",
      titel: "Energiespeicher",
      frage: "Richtig oder falsch?",
      aussagen: [
        { text: "Ein Batteriespeicher kann tagsüber erzeugten PV-Strom für den Abend speichern.", wahr: true },
        { text: "Ein Elektro-Wassererwärmer (Boiler) kann PV-Überschuss als Wärme speichern.", wahr: true },
        { text: "Ein Energiespeicher erzeugt selbst elektrische Energie.", wahr: false }
      ],
      erklaerung: "Speicher verschieben Energie zeitlich – elektrisch (Batterie) oder thermisch (Boiler, Wärmepumpe mit Speicher). Sie erzeugen keine Energie."
    },
    {
      id: "lj1-werkstoffe-01", typ: "zuordnen", lehrjahr: 1, berufe: ["EI", "ME"], fach: "a", lz: "a3.1",
      titel: "Werkstoffe",
      frage: "Ordne jedem Werkstoff seine typische Verwendung in der Elektroinstallation zu.",
      paare: [
        { links: "Kupfer", rechts: "Leitermaterial mit sehr guter Leitfähigkeit" },
        { links: "PVC", rechts: "Isolierstoff für Aderisolation und Rohre" },
        { links: "Stahl", rechts: "Mechanischer Schutz (z. B. Stahlpanzerrohr)" },
        { links: "Aluminium", rechts: "Leichtes Leitermaterial für grosse Querschnitte" }
      ],
      erklaerung: "Kupfer leitet sehr gut, Aluminium ist leichter und günstiger (grössere Querschnitte nötig). PVC isoliert, Stahl schützt mechanisch."
    }
  );
})();
