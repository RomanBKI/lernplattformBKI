/*
 * Eigene Zeichnungen für Aufgaben und Lernkarten (SVG).
 * Verwendung in einer Aufgabe:  bild: "badzonen"
 */
(function () {
  const F = 'font-family="Arial, Helvetica, sans-serif"';
  const S = 'stroke="#16202e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"';
  const T = (x, y, t, o = "") => `<text x="${x}" y="${y}" fill="#16202e" ${o}>${t}</text>`;
  const svg = (w, h, inner, label) => `<svg viewBox="0 0 ${w} ${h}" width="${w}" role="img" aria-label="${label}" ${F} font-size="13">${inner}</svg>`;
  const nr = (x, y, n) => `<circle cx="${x}" cy="${y}" r="11" fill="#12294a"/><text x="${x}" y="${y + 4.5}" fill="#fff" font-size="13" font-weight="700" text-anchor="middle">${n}</text>`;
  const pfeil = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#5d6b7e" stroke-width="1.2"/>`
    + `<path d="M${x1} ${y1} l4 -3 v6z M${x2} ${y2} l-4 -3 v6z" fill="#5d6b7e"/>`;
  const vpfeil = (x, y1, y2) => `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="#5d6b7e" stroke-width="1.2"/>`
    + `<path d="M${x} ${y1} l-3 5 h6z M${x} ${y2} l-3 -5 h6z" fill="#5d6b7e"/>`;
  const lampe = (x, y, r = 14) => `<circle cx="${x}" cy="${y}" r="${r}" ${S}/><path d="M${x - r * .7} ${y - r * .7} L${x + r * .7} ${y + r * .7} M${x + r * .7} ${y - r * .7} L${x - r * .7} ${y + r * .7}" ${S}/>`;
  const widerstand = (x, y, w = 44, h = 16) => `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" fill="#fff" stroke="#16202e" stroke-width="2"/>`;
  const punkt = (x, y) => `<circle cx="${x}" cy="${y}" r="3.5" fill="#16202e"/>`;

  const B = {};

  /* Badezimmer: Bereiche 0, 1, 2 (Seitenansicht) */
  B.badzonen = svg(420, 250, `
    <rect x="40" y="40" width="130" height="170" fill="#dbe9fb"/>
    <rect x="170" y="40" width="90" height="170" fill="#e7f5ea"/>
    <rect x="40" y="160" width="130" height="50" fill="#9cc3f0"/>
    <path d="M40 30 V210 H400" ${S}/>
    <path d="M40 160 H170 V210" stroke="#16202e" stroke-width="3" fill="none"/>
    <line x1="40" y1="40" x2="260" y2="40" stroke="#5d6b7e" stroke-dasharray="5 4"/>
    <line x1="170" y1="40" x2="170" y2="160" stroke="#5d6b7e" stroke-dasharray="5 4"/>
    <line x1="260" y1="40" x2="260" y2="210" stroke="#5d6b7e" stroke-dasharray="5 4"/>
    <path d="M70 40 v-6 h26 v6" ${S}/><line x1="83" y1="34" x2="83" y2="28" ${S}/>
    ${T(80, 190, "Bereich 0", 'font-weight="700" text-anchor="middle" font-size="12"')}
    ${T(105, 105, "Bereich 1", 'font-weight="700" text-anchor="middle"')}
    ${T(215, 125, "Bereich 2", 'font-weight="700" text-anchor="middle"')}
    ${T(135, 190, "Wanne", 'text-anchor="middle" font-size="11" fill="#5d6b7e"')}
    ${vpfeil(300, 40, 210)}${T(308, 130, "2,25 m")}
    ${pfeil(170, 226, 260, 226)}${T(196, 244, "0,6 m")}
    ${T(265, 205, "Fussboden", 'font-size="11" fill="#5d6b7e"')}`,
    "Badezimmer mit Badewanne in der Seitenansicht: Bereich 0 in der Wanne, Bereich 1 darüber bis 2,25 m, Bereich 2 anschliessend 0,6 m breit");

  /* Netzsysteme TN-S / TN-C / TN-C-S (untereinander, gut lesbar auf dem Handy) */
  const netz = (oy, titel, art) => {
    let g = `<g transform="translate(0,${oy})">`;
    g += T(14, 70, titel, 'font-weight="800" font-size="20"');
    g += `<circle cx="58" cy="60" r="18" ${S}/><circle cx="76" cy="60" r="18" ${S}/>`;
    g += `<path d="M76 78 V86 H96" ${S}/><path d="M76 86 V104 M64 104 h24 M68 110 h16 M73 116 h6" ${S}/>`;
    g += art === "S" ? `<path d="M96 76 V94" ${S}/>${punkt(96, 76)}${punkt(96, 94)}` : `<path d="M96 76 V86" ${S}/>${punkt(96, 76)}`;
    const ys = [22, 40, 58, 76, 94];
    const lab = art === "C" ? ["L1", "L2", "L3", "PEN"] : ["L1", "L2", "L3", "N", "PE"];
    lab.forEach((l, i) => {
      if (art === "CS" && (l === "N" || l === "PE")) return;
      const col = (l === "PE" || l === "PEN") ? "#2e8b3d" : l === "N" ? "#2f6fd6" : "#16202e";
      const y = l === "PEN" ? 76 : ys[i];
      g += `<line x1="96" y1="${y}" x2="330" y2="${y}" stroke="${col}" stroke-width="2.5"/>${T(338, y + 5, l, 'font-size="14"')}`;
    });
    if (art === "CS") {
      g += `<line x1="96" y1="76" x2="210" y2="76" stroke="#2e8b3d" stroke-width="3"/>${T(120, 70, "PEN", 'font-size="13"')}`;
      g += `<path d="M210 76 H330" stroke="#2f6fd6" stroke-width="2.5" fill="none"/><path d="M210 76 V94 H330" stroke="#2e8b3d" stroke-width="2.5" fill="none"/>${punkt(210, 76)}`;
      g += T(338, 81, "N", 'font-size="14"') + T(338, 99, "PE", 'font-size="14"');
    }
    return g + `</g>`;
  };
  B.netzsysteme = svg(380, 390, netz(0, "A", "S") + netz(130, "B", "C") + netz(260, "C", "CS"),
    "Drei Netzsysteme untereinander: A mit getrenntem N und PE, B mit gemeinsamem PEN-Leiter, C zuerst PEN und danach aufgeteilt in N und PE");

  /* Schutzklassen-Symbole */
  B.schutzklassen = svg(420, 130, `
    <g transform="translate(70,55)"><circle r="30" ${S}/><path d="M0 -18 V4 M-14 4 h28 M-9 11 h18 M-4 18 h8" ${S}/></g>
    <g transform="translate(210,55)"><rect x="-30" y="-30" width="60" height="60" ${S}/><rect x="-16" y="-16" width="32" height="32" ${S}/></g>
    <g transform="translate(350,55)"><path d="M0 -32 L32 0 L0 32 L-32 0Z" ${S}/>${T(0, 6, "III", 'font-weight="700" font-size="16" text-anchor="middle"')}</g>
    ${nr(70, 110, 1)}${nr(210, 110, 2)}${nr(350, 110, 3)}`,
    "Drei Symbole: 1 Schutzleiter-Anschlusszeichen, 2 Quadrat im Quadrat, 3 Raute mit römisch drei");

  /* Sicherheitszeichen (Form und Farbe) */
  B.sicherheitszeichen = svg(520, 130, `
    <g transform="translate(55,52)"><circle r="32" fill="#fff" stroke="#c62828" stroke-width="7"/><line x1="-22" y1="-22" x2="22" y2="22" stroke="#c62828" stroke-width="7"/></g>
    <g transform="translate(155,52)"><circle r="34" fill="#1e5bb8"/><path d="M-10 -14 h20 v28 h-20z" fill="#fff"/></g>
    <g transform="translate(255,52)"><path d="M0 -34 L38 30 H-38Z" fill="#f2c200" stroke="#16202e" stroke-width="3"/><path d="M-2 -12 L-8 8 H2 L-4 22 L10 0 H0 L6 -12Z" fill="#16202e"/></g>
    <g transform="translate(360,52)"><rect x="-38" y="-28" width="76" height="56" rx="4" fill="#1e8a4c"/><path d="M-6 -18 h12 v12 h12 v12 h-12 v12 h-12 v-12 h-12 v-12 h12z" fill="#fff"/></g>
    <g transform="translate(465,52)"><rect x="-32" y="-32" width="64" height="64" rx="4" fill="#c62828"/><path d="M-10 18 V-6 C-10 -16 10 -16 10 -6 V18Z" fill="#fff"/></g>
    ${nr(55, 112, 1)}${nr(155, 112, 2)}${nr(255, 112, 3)}${nr(360, 112, 4)}${nr(465, 112, 5)}`,
    "Fünf Sicherheitszeichen: 1 roter Kreis mit Balken, 2 blauer Kreis, 3 gelbes Dreieck, 4 grünes Rechteck mit Kreuz, 5 rotes Quadrat mit Feuerlöscher");

  /* Wechselschaltung (Stromlaufschema) */
  const wechsler = (x, y, nach) => `${punkt(x, y)}<line x1="${x}" y1="${y}" x2="${x + 36}" y2="${y + (nach === "oben" ? -16 : 16)}" ${S}/>${punkt(x + 40, y - 20)}${punkt(x + 40, y + 20)}`;
  B.wechselschaltung = svg(460, 220, `
    <line x1="20" y1="40" x2="440" y2="40" ${S}/>${T(24, 32, "L")}
    <line x1="20" y1="190" x2="440" y2="190" stroke="#2f6fd6" stroke-width="2"/>${T(24, 208, "N")}
    <path d="M70 40 V110" ${S}/>${punkt(70, 40)}
    ${wechsler(70, 110, "oben")}
    <path d="M110 90 H250 M110 130 H250" ${S}/>
    <g transform="translate(290,110) scale(-1,1)">${wechsler(0, 0, "unten")}</g>
    <path d="M290 110 H360 V125" ${S}/>${lampe(360, 145)}<path d="M360 159 V190" ${S}/>${punkt(360, 190)}
    ${T(70, 160, "S1", 'text-anchor="middle"')}${T(290, 160, "S2", 'text-anchor="middle"')}${T(385, 150, "E1")}
    ${T(180, 84, "Korrespondenzleiter", 'text-anchor="middle" font-size="11" fill="#5d6b7e"')}`,
    "Stromlaufschema mit zwei Umschaltern S1 und S2, zwei Verbindungsleitern dazwischen und einer Lampe E1");

  /* Messgeräte im Stromkreis */
  B.messgeraete = svg(420, 200, `
    <path d="M60 60 V40 H150 M210 40 H330 V80 M330 120 V160 H60 V100" ${S}/>
    <line x1="45" y1="60" x2="75" y2="60" ${S}/><line x1="52" y1="100" x2="68" y2="100" stroke="#16202e" stroke-width="5"/>
    <circle cx="180" cy="40" r="22" fill="#fff" stroke="#16202e" stroke-width="2"/>${T(180, 46, "?", 'font-weight="700" font-size="18" text-anchor="middle"')}
    ${lampe(330, 100, 18)}
    <path d="M330 72 H390 V85 M330 128 H390 V115" ${S}/>
    <circle cx="390" cy="100" r="17" fill="#fff" stroke="#16202e" stroke-width="2"/>${T(390, 106, "?", 'font-weight="700" font-size="18" text-anchor="middle"')}
    ${nr(180, 82, 1)}${nr(390, 140, 2)}
    ${T(20, 84, "U")}`,
    "Stromkreis mit Batterie und Lampe. Messgerät 1 liegt in Reihe in der Leitung, Messgerät 2 parallel zur Lampe");

  /* Reihenschaltung */
  B.reihenschaltung = svg(440, 150, `
    <path d="M30 40 H80 M124 40 H180 M224 40 H280 M324 40 H410 V110 H30 V40" ${S}/>
    ${widerstand(102, 40)}${widerstand(202, 40)}${widerstand(302, 40)}
    ${T(102, 26, "R1 = 100 Ω", 'text-anchor="middle" font-size="12"')}${T(202, 26, "R2 = 220 Ω", 'text-anchor="middle" font-size="12"')}${T(302, 26, "R3 = 150 Ω", 'text-anchor="middle" font-size="12"')}
    <circle cx="220" cy="110" r="4" fill="#16202e"/>${T(220, 135, "Gesamtwiderstand R = ?", 'text-anchor="middle" font-weight="700"')}`,
    "Drei Widerstände in Reihe: 100 Ohm, 220 Ohm und 150 Ohm");

  /* Parallelschaltung */
  B.parallelschaltung = svg(360, 190, `
    <path d="M40 40 H300 M40 150 H300 M120 40 V73 M120 117 V150 M240 40 V73 M240 117 V150" ${S}/>
    <rect x="112" y="73" width="16" height="44" fill="#fff" stroke="#16202e" stroke-width="2"/>
    <rect x="232" y="73" width="16" height="44" fill="#fff" stroke="#16202e" stroke-width="2"/>
    ${punkt(120, 40)}${punkt(120, 150)}${punkt(240, 40)}${punkt(240, 150)}
    ${T(136, 100, "R1 = 60 Ω", 'font-size="12"')}${T(256, 100, "R2 = 30 Ω", 'font-size="12"')}
    ${T(40, 32, "A")}${T(40, 172, "B")}`,
    "Zwei Widerstände parallel zwischen den Punkten A und B: 60 Ohm und 30 Ohm");

  /* Spannungsteiler */
  B.spannungsteiler = svg(320, 230, `
    <path d="M60 30 H160 V50 M160 100 V120 M160 170 V200 H60" ${S}/>
    <rect x="152" y="50" width="16" height="50" fill="#fff" stroke="#16202e" stroke-width="2"/>
    <rect x="152" y="120" width="16" height="50" fill="#fff" stroke="#16202e" stroke-width="2"/>
    ${T(178, 80, "R1 = 1 kΩ")}${T(178, 150, "R2 = 2 kΩ")}
    ${vpfeil(40, 30, 200)}${T(12, 120, "24 V")}
    ${vpfeil(250, 120, 170)}${T(262, 150, "U2 = ?", 'font-weight="700"')}
    ${punkt(60, 30)}${punkt(60, 200)}`,
    "Spannungsteiler: 24 Volt an zwei Widerständen in Reihe, R1 1 Kiloohm oben, R2 2 Kiloohm unten, gesucht die Spannung an R2");

  /* Isolationsmessung in der Verteilung */
  B.isolationsmessung = svg(460, 230, `
    <rect x="20" y="20" width="250" height="190" rx="8" fill="#f3f5f8" stroke="#5d6b7e"/>
    ${T(30, 40, "Verteilung (spannungsfrei!)", 'font-size="11" fill="#5d6b7e"')}
    <line x1="50" y1="70" x2="240" y2="70" stroke="#16202e" stroke-width="4"/>${T(245, 74, "L")}
    <line x1="50" y1="120" x2="120" y2="120" stroke="#2f6fd6" stroke-width="4"/><line x1="150" y1="120" x2="240" y2="120" stroke="#2f6fd6" stroke-width="4"/>
    <line x1="120" y1="120" x2="146" y2="104" stroke="#2f6fd6" stroke-width="3"/>${T(100, 145, "N-Trenner offen", 'font-size="11" fill="#2f6fd6"')}
    ${T(245, 124, "N")}
    <line x1="50" y1="180" x2="240" y2="180" stroke="#2e8b3d" stroke-width="4"/>${T(245, 184, "PE")}
    <rect x="330" y="80" width="110" height="80" rx="10" fill="#fff" stroke="#16202e" stroke-width="2"/>
    ${T(385, 112, "MΩ", 'font-weight="700" font-size="18" text-anchor="middle"')}${T(385, 134, "500 V DC", 'text-anchor="middle" font-size="12"')}
    <path d="M200 70 C260 70 290 95 330 100" stroke="#c62828" stroke-width="2" fill="none"/>${punkt(200, 70)}
    <path d="M200 180 C270 180 290 150 330 140" stroke="#16202e" stroke-width="2" fill="none" stroke-dasharray="6 3"/>${punkt(200, 180)}`,
    "Isolationsmessung: Messgerät in Megaohm mit 500 Volt DC zwischen Aussenleiter L und Schutzleiter PE, Neutralleitertrenner geöffnet");

  /* RCD Prinzip */
  B.rcd = svg(420, 230, `
    <line x1="40" y1="60" x2="380" y2="60" ${S}/>${T(20, 64, "L")}
    <line x1="40" y1="110" x2="380" y2="110" stroke="#2f6fd6" stroke-width="2"/>${T(20, 114, "N")}
    <ellipse cx="170" cy="85" rx="26" ry="52" fill="none" stroke="#8c6d1f" stroke-width="8"/>
    <path d="M196 150 h30 v40 h60" ${S}/><path d="M144 150 h-20 v60 h162 v-20" ${S}/>
    <rect x="286" y="170" width="36" height="24" fill="#fff" stroke="#16202e" stroke-width="2"/>${T(304, 187, "A", 'text-anchor="middle" font-weight="700"')}
    <path d="M304 170 V120" stroke="#5d6b7e" stroke-dasharray="4 3"/>
    <path d="M290 60 l14 -14 M290 110 l14 -14" ${S}/>${punkt(290, 60)}${punkt(290, 110)}
    ${nr(170, 25, 1)}${nr(250, 200, 2)}${nr(340, 182, 3)}
    ${T(360, 40, "zum Verbraucher", 'font-size="11" fill="#5d6b7e" text-anchor="end"')}`,
    "Prinzip Fehlerstromschutzschalter: 1 Summenstromwandler um L und N, 2 Sekundärwicklung, 3 Auslöser, der die Kontakte öffnet");

  /* Messkategorien im Gebäude */
  B.messkategorien = svg(460, 220, `
    <path d="M60 90 L230 20 L400 90 V200 H60Z" fill="#f3f5f8" stroke="#16202e" stroke-width="2"/>
    <line x1="10" y1="170" x2="60" y2="170" stroke="#16202e" stroke-width="4"/>
    <rect x="70" y="140" width="50" height="50" fill="#fff" stroke="#16202e" stroke-width="2"/>${T(95, 170, "kWh", 'text-anchor="middle" font-size="11"')}
    <rect x="190" y="110" width="60" height="80" fill="#fff" stroke="#16202e" stroke-width="2"/>${T(220, 150, "UV", 'text-anchor="middle" font-weight="700"')}
    <path d="M120 165 H190 M250 150 H330" ${S}/>
    <rect x="330" y="135" width="36" height="36" rx="6" fill="#fff" stroke="#16202e" stroke-width="2"/><circle cx="342" cy="153" r="3" fill="#16202e"/><circle cx="354" cy="153" r="3" fill="#16202e"/>
    ${nr(40, 145, 1)}${nr(220, 92, 2)}${nr(348, 115, 3)}
    ${T(12, 212, "Hausanschluss / Zähler", 'font-size="11" fill="#5d6b7e"')}${T(190, 208, "Verteilung", 'font-size="11" fill="#5d6b7e"')}${T(318, 190, "Steckdose", 'font-size="11" fill="#5d6b7e"')}`,
    "Gebäude mit drei Messorten: 1 Hausanschluss und Zähler, 2 Unterverteilung, 3 Steckdose");

  /* Fehlerschleife (Schleifenimpedanz) */
  B.schleife = svg(460, 220, `
    <circle cx="50" cy="90" r="22" ${S}/>${T(50, 95, "Trafo", 'text-anchor="middle" font-size="10"')}
    <path d="M72 70 H360 V100" stroke="#c62828" stroke-width="2.5" fill="none"/>
    <rect x="130" y="60" width="40" height="20" fill="#fff" stroke="#16202e" stroke-width="2"/>${T(150, 54, "LS", 'text-anchor="middle" font-size="11"')}
    <rect x="330" y="100" width="70" height="60" rx="6" fill="#fff" stroke="#16202e" stroke-width="2"/>${T(365, 128, "Gerät", 'text-anchor="middle" font-size="12"')}
    <path d="M360 100 l12 18" stroke="#c62828" stroke-width="2.5"/>${T(378, 150, "Körperschluss", 'text-anchor="middle" font-size="10" fill="#c62828"')}
    <path d="M365 160 V180 H50 V112" stroke="#2e8b3d" stroke-width="2.5" fill="none"/>
    ${T(210, 62, "L (Aussenleiter)", 'font-size="11" text-anchor="middle"')}${T(210, 196, "PE (Schutzleiter)", 'font-size="11" text-anchor="middle"')}
    <path d="M250 70 l-8 -5 v10z" fill="#c62828"/><path d="M200 180 l8 -5 v10z" fill="#2e8b3d"/>`,
    "Fehlerschleife: Strom fliesst vom Trafo über Leitungsschutzschalter und Aussenleiter zum Körperschluss im Gerät und über den Schutzleiter zurück zum Trafo");

  /* IP-Code */
  B.ipcode = svg(420, 160, `
    <text x="210" y="80" text-anchor="middle" font-size="54" font-weight="800" fill="#12294a">IP 4 4</text>
    <path d="M226 90 V120 H120" ${S}/><path d="M290 90 V140 H330" ${S}/>
    ${T(20, 124, "1. Ziffer: ?", 'font-weight="700"')}${T(338, 144, "2. Ziffer: ?", 'font-weight="700"')}`,
    "Schutzart IP 44 mit Beschriftung der ersten und zweiten Ziffer");

  /* Blitzschutz Gebäude */
  B.blitzschutz = svg(440, 240, `
    <path d="M80 110 L220 40 L360 110 V200 H80Z" fill="#f3f5f8" stroke="#16202e" stroke-width="2"/>
    <line x1="10" y1="200" x2="430" y2="200" stroke="#8a6d3b" stroke-width="2"/>
    <path d="M100 100 L220 40 L340 100" stroke="#c62828" stroke-width="3" fill="none"/>
    <path d="M340 100 V210" stroke="#c62828" stroke-width="3"/>
    <path d="M70 215 H370" stroke="#c62828" stroke-width="3" stroke-dasharray="10 5"/>
    <rect x="150" y="170" width="60" height="14" fill="#fff" stroke="#16202e" stroke-width="2"/>
    <path d="M180 184 V215" ${S}/>
    ${nr(220, 22, 1)}${nr(385, 150, 2)}${nr(400, 222, 3)}${nr(125, 160, 4)}`,
    "Gebäude mit Blitzschutz: 1 Leitung auf dem Dachfirst, 2 Leitung an der Fassade nach unten, 3 Leitung im Boden rund ums Haus, 4 Schiene im Gebäude");

  /* Diazed-Kennmelder */
  const dz = (x, farbe, n) => `<circle cx="${x}" cy="55" r="26" fill="#d9d9d9" stroke="#16202e" stroke-width="2"/><circle cx="${x}" cy="55" r="11" fill="${farbe}" stroke="#16202e" stroke-width="1.5"/>${nr(x, 105, n)}`;
  B.diazed = svg(420, 125, dz(50, "#2e9e44", 1) + dz(130, "#d32f2f", 2) + dz(210, "#9e9e9e", 3) + dz(290, "#1e5bb8", 4) + dz(370, "#f2d20f", 5),
    "Fünf Schmelzsicherungen von vorne mit farbigem Kennmelder: 1 grün, 2 rot, 3 grau, 4 blau, 5 gelb");

  /* Stern und Dreieck */
  B.sterndreieck = svg(440, 190, `
    <g transform="translate(110,95)">
      <path d="M0 0 V-55 M0 0 L48 28 M0 0 L-48 28" ${S}/>
      <rect x="-7" y="-50" width="14" height="30" fill="#fff" stroke="#16202e" stroke-width="2"/>
      <g transform="rotate(120)"><rect x="-7" y="-50" width="14" height="30" fill="#fff" stroke="#16202e" stroke-width="2"/></g>
      <g transform="rotate(240)"><rect x="-7" y="-50" width="14" height="30" fill="#fff" stroke="#16202e" stroke-width="2"/></g>
      ${punkt(0, 0)}${T(0, 80, "A", 'font-weight="700" font-size="16" text-anchor="middle"')}
    </g>
    <g transform="translate(320,100)">
      <path d="M0 -60 L52 30 L-52 30Z" ${S}/>
      <g transform="translate(26,-15) rotate(60)"><rect x="-7" y="-15" width="14" height="30" fill="#fff" stroke="#16202e" stroke-width="2"/></g>
      <g transform="translate(-26,-15) rotate(-60)"><rect x="-7" y="-15" width="14" height="30" fill="#fff" stroke="#16202e" stroke-width="2"/></g>
      <g transform="translate(0,30) rotate(90)"><rect x="-7" y="-15" width="14" height="30" fill="#fff" stroke="#16202e" stroke-width="2"/></g>
      ${punkt(0, -60)}${punkt(52, 30)}${punkt(-52, 30)}${T(0, 75, "B", 'font-weight="700" font-size="16" text-anchor="middle"')}
    </g>`,
    "Zwei Schaltungen von drei Wicklungen: A mit gemeinsamem Mittelpunkt, B als geschlossenes Dreieck");

  /* PV-Anlage */
  const block = (x, y, w, t, n) => `<rect x="${x}" y="${y}" width="${w}" height="46" rx="8" fill="#fff" stroke="#16202e" stroke-width="2"/>${T(x + w / 2, y + 28, t, 'text-anchor="middle" font-size="12"')}${nr(x + w / 2, y - 14, n)}`;
  B.pvanlage = svg(520, 150, `
    <g transform="translate(20,48)"><path d="M0 40 L20 0 H90 L70 40Z" fill="#1e3f6e" stroke="#16202e" stroke-width="2"/><path d="M23 0 L3 40 M46 0 L26 40 M68 0 L48 40 M10 20 H80" stroke="#8fb3e6"/></g>${nr(65, 30, 1)}
    ${block(140, 55, 100, "?", 2)}${block(280, 55, 90, "?", 3)}${block(410, 55, 90, "?", 4)}
    <path d="M110 78 H140 M240 78 H280 M370 78 H410" ${S}/>
    ${T(125, 120, "DC", 'text-anchor="middle" font-size="11" fill="#5d6b7e"')}${T(260, 120, "AC", 'text-anchor="middle" font-size="11" fill="#5d6b7e"')}`,
    "Photovoltaikanlage als Blockschema: 1 Solarmodule, danach Block 2, Block 3 und Block 4, zwischen 1 und 2 Gleichstrom, danach Wechselstrom");

  /* Schaltzeichen */
  const zelle = (x, inner, n) => `<g transform="translate(${x},50)">${inner}</g>${nr(x, 110, n)}`;
  B.schaltzeichen = svg(540, 128, [
    zelle(45, `<path d="M-35 0 H-14 M14 0 H35" ${S}/>${lampe(0, 0, 14)}`, 1),
    zelle(135, `<path d="M-35 0 H-20 M20 0 H35" ${S}/>${widerstand(0, 0, 40, 16)}`, 2),
    zelle(225, `<path d="M-35 0 H35" ${S}/><rect x="-20" y="-8" width="40" height="16" fill="none" stroke="#16202e" stroke-width="2"/>`, 3),
    zelle(315, `<path d="M-35 0 H-5 M5 0 H35 M-5 -16 V16 M5 -16 V16" ${S}/>`, 4),
    zelle(405, `<circle r="20" ${S}/>${T(0, 6, "M", 'font-weight="700" font-size="17" text-anchor="middle"')}`, 5),
    zelle(495, `<path d="M0 -26 V0 M-18 0 H18 M-11 8 H11 M-4 16 H4" ${S}/>`, 6)
  ].join(""), "Sechs Schaltzeichen: 1 Kreis mit Kreuz, 2 Rechteck, 3 Rechteck mit durchgehender Linie, 4 zwei parallele Striche, 5 Kreis mit M, 6 Erdungszeichen");

  /* Kontakte: Schliesser / Öffner */
  B.kontakte = svg(360, 150, `
    <g transform="translate(90,20)"><path d="M0 0 V35 M0 90 V110" ${S}/>${punkt(0, 90)}<path d="M0 90 L-22 42" ${S}/><path d="M-6 35 H6" ${S}/></g>
    <g transform="translate(260,20)"><path d="M0 0 V35 M0 90 V110" ${S}/>${punkt(0, 90)}<path d="M0 90 L18 36" ${S}/><path d="M0 35 H22" ${S}/></g>
    ${nr(40, 75, 1)}${nr(310, 75, 2)}`,
    "Zwei Kontakt-Schaltzeichen in Ruhestellung: 1 offener Kontakt, 2 geschlossener Kontakt");

  /* Transformator */
  B.trafo = svg(360, 160, `
    <circle cx="150" cy="80" r="40" ${S}/><circle cx="205" cy="80" r="40" ${S}/>
    <path d="M40 60 H110 M40 100 H110 M245 60 H320 M245 100 H320" ${S}/>
    ${T(20, 85, "U1 = 230 V", 'font-size="12"')}${T(150, 140, "N1 = 1150", 'text-anchor="middle" font-size="12"')}
    ${T(205, 140, "N2 = 60", 'text-anchor="middle" font-size="12"')}${T(300, 85, "U2 = ?", 'font-weight="700" font-size="12"')}`,
    "Transformator mit Primärspannung 230 Volt, 1150 Windungen primär und 60 Windungen sekundär");

  /* LS-Auslösekennlinie (vereinfacht) */
  B.lskennlinie = svg(440, 260, `
    <path d="M60 20 V220 H420" ${S}/>
    ${T(10, 30, "t", 'font-weight="700"')}${T(405, 245, "I / In", 'font-weight="700"')}
    <path d="M78 30 C90 120 110 150 140 158" stroke="#16202e" stroke-width="2.5" fill="none"/>
    <rect x="160" y="150" width="60" height="70" fill="#1e5bb8" opacity=".25"/><rect x="220" y="150" width="90" height="70" fill="#c62828" opacity=".2"/>
    <path d="M140 158 H160 V220 M140 158 H220 V220" stroke="#16202e" stroke-width="1.5" fill="none"/>
    ${T(190, 142, "B", 'font-weight="700" text-anchor="middle" fill="#1e5bb8"')}${T(265, 142, "C", 'font-weight="700" text-anchor="middle" fill="#c62828"')}
    ${[["1", 70], ["3", 160], ["5", 220], ["10", 310]].map(([t, x]) => `<line x1="${x}" y1="220" x2="${x}" y2="226" ${S}/>${T(x, 240, t, 'text-anchor="middle" font-size="12"')}`).join("")}
    ${nr(100, 90, 1)}${nr(250, 190, 2)}`,
    "Vereinfachte Auslösekennlinie eines Leitungsschutzschalters: 1 gekrümmter Bereich bei kleinen Überströmen, 2 senkrechter Bereich bei hohen Strömen, B zwischen 3 und 5 mal In, C zwischen 5 und 10 mal In");

  window.BILD = B;
})();
