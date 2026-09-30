/* Lernbereich für Lernende */
(function () {
  const { esc, pct, $, $$, toast } = U;
  const LP = window.LEHRPLAN;
  const CFG = window.APP_CONFIG || {};

  // Für Admin-Vorschau: simuliertes Profil
  let vorschauProfil = null;
  const ansicht = () => vorschauProfil || App.user;
  const istAdmin = () => App.user && App.user.rolle === "admin";
  const sichtbar = () => App.aufgaben.filter((a) => App.sichtbarFuer(a, ansicht()));

  function fortschrittVon(liste) {
    const g = liste.filter((a) => App.geloest(a.id)).length;
    return { geloest: g, total: liste.length, anteil: liste.length ? g / liste.length : 0 };
  }
  const balken = (x) => `<div class="bar"><i style="width:${pct(x)}%"></i></div>`;

  function kuerzelHtml(f) {
    return `<div class="fach-kuerzel ${f.bereich === "uek" ? "uek" : f.bereich === "qv" ? "qv" : ""}">${esc(f.kuerzel)}</div>`;
  }

  /* ---------- Startseite ---------- */
  function start() {
    const u = ansicht();
    const alle = sichtbar();
    const fp = fortschrittVon(alle);
    const offen = alle.filter((a) => !App.geloest(a.id));
    const fehler = alle.filter((a) => App.fortschritt[a.id] && App.fortschritt[a.id].letztes < 1);

    let html = `
      ${vorschauProfil ? `<div class="hint-admin">Vorschau: So sieht ${esc(App.berufName(u.beruf))}, ${u.lehrjahr}. Lehrjahr die Plattform (nur freigegebene Aufgaben). <a href="#/">Zurück zur Admin-Übersicht</a></div>` : ""}
      <section class="card hero">
        <div class="muted small">${esc(App.berufName(u.beruf))} · ${u.lehrjahr}. Lehrjahr</div>
        <h1 style="margin:4px 0 12px">Hallo ${esc(u.vorname || "")}</h1>
        <div class="row between" style="margin-bottom:8px"><span>Dein Fortschritt</span><span class="big-num">${pct(fp.anteil)}%</span></div>
        ${balken(fp.anteil)}
        <div class="muted small" style="margin-top:6px">${fp.geloest} von ${fp.total} Aufgaben gelöst</div>
      </section>
      <div class="btn-row" style="margin-bottom:6px">
        <a class="btn accent" style="flex:1" href="#/lernen/weiter" ${offen.length ? "" : "aria-disabled=true"}>▶ Weiterlernen${offen.length ? ` (${Math.min(10, offen.length)})` : ""}</a>
        ${fehler.length ? `<a class="btn ghost" style="flex:1" href="#/lernen/fehler">↻ Fehler wiederholen (${fehler.length})</a>` : ""}
        ${alle.some((a) => a.typ === "karte") ? `<a class="btn ghost" style="flex:1" href="#/lernen/karten">🃏 Lernkarten (${alle.filter((a) => a.typ === "karte").length})</a>` : ""}
      </div>`;

    if (!alle.length) {
      html += `<div class="card empty">Für dich sind noch keine Aufgaben freigeschaltet.<br>Schau bald wieder vorbei!</div>`;
    }
    LP.bereiche.forEach((b) => {
      const faecher = LP.faecher.filter((f) => f.bereich === b.id)
        .map((f) => ({ f, liste: alle.filter((a) => a.fach === f.id) }))
        .filter((x) => x.liste.length);
      if (!faecher.length) return;
      html += `<div class="section-title">${esc(b.name)}</div><div class="grid">` + faecher.map(({ f, liste }) => {
        const p = fortschrittVon(liste);
        return `<a class="card tap" href="#/fach/${esc(f.id)}" style="text-decoration:none;color:inherit;margin:0">
          <div class="row" style="align-items:flex-start">${kuerzelHtml(f)}
            <div style="flex:1;min-width:0"><strong>${esc(f.titel)}</strong>
              <div class="small muted" style="margin:2px 0 8px">${p.geloest}/${p.total} gelöst</div>${balken(p.anteil)}</div></div></a>`;
      }).join("") + `</div>`;
    });
    App.rahmen(html, vorschauProfil ? { titel: "Vorschau Lernansicht", zurueck: "#/" } : {});
  }

  /* ---------- Fachseite ---------- */
  function fach(id) {
    const f = App.fach(id);
    if (!f) return App.rahmen(`<div class="error">Fach nicht gefunden.</div>`, { zurueck: "#/" });
    const u = ansicht();
    const liste = sichtbar().filter((a) => a.fach === id);
    const p = fortschrittVon(liste);
    const themen = f.themen.map((t) => ({ t, auf: liste.filter((a) => a.lz === t.id) })).filter((x) => x.auf.length);
    const lj = String(u && u.lehrjahr);

    let html = `
      <div class="card">
        <div class="row">${kuerzelHtml(f)}<div style="flex:1"><h2 style="margin:0">${esc(f.titel)}</h2>
          <div class="small muted">${p.geloest} von ${p.total} Aufgaben gelöst</div></div></div>
        <div style="margin:12px 0">${balken(p.anteil)}</div>
        <div class="btn-row">
          ${liste.some((a) => a.typ !== "karte") ? `<a class="btn" style="flex:1" href="#/lernen/fach/${esc(f.id)}">▶ Aufgaben üben</a>` : ""}
          ${liste.some((a) => a.typ === "karte") ? `<a class="btn ghost" style="flex:1" href="#/lernen/karten/${esc(f.id)}">🃏 Lernkarten</a>` : ""}
        </div>
      </div>
      <div class="section-title">Themen</div>`;
    if (!themen.length) html += `<div class="card empty">Hier gibt es für dich noch keine Aufgaben.</div>`;
    html += themen.map(({ t, auf }) => {
      const tp = fortschrittVon(auf);
      const inhalt = t.inhalte[lj] || t.inhalte["_"] || "";
      return `<div class="card">
        <div class="row between" style="align-items:flex-start">
          <div style="flex:1;min-width:0"><div class="small muted">${esc(t.id.startsWith("uek") || t.id.startsWith("qv") ? t.kompetenz : "LZ " + t.id)}${t.taxonomie ? " · " + esc(t.taxonomie) : ""}</div>
          <strong>${esc(t.titel)}</strong></div>
          <span class="badge ${tp.anteil >= 1 ? "ok" : ""}">${tp.geloest}/${tp.total}</span>
        </div>
        ${inhalt ? `<details class="lz" style="margin-top:8px"><summary class="small">Das lernst du hier</summary><p class="small muted" style="margin-top:6px">${esc(inhalt)}</p></details>` : ""}
        <div style="margin:10px 0">${balken(tp.anteil)}</div>
        <a class="btn ghost sm" href="#/lernen/lz/${esc(t.id)}">Üben</a>
      </div>`;
    }).join("");
    App.rahmen(html, { titel: f.kuerzel + " – " + (f.bereich === "bfs" ? "Berufsfachschule" : f.bereich === "uek" ? "üK" : "QV"), zurueck: vorschauProfil ? "#/vorschau" : "#/" });
  }

  /* ---------- Lern-/Testsitzung ---------- */
  function sitzung(scope, opt = {}) {
    const test = !!opt.test;
    const [art, wert] = [scope.split("/")[0], scope.split("/").slice(1).join("/")];
    let liste, titel, zurueck = "#/";
    const basis = test ? App.aufgaben : sichtbar();
    if (art === "lz") { liste = basis.filter((a) => a.lz === wert); const t = App.thema(wert); titel = t ? (/^(uek|qv)/.test(wert) ? t.thema.titel : `${t.fach.kuerzel} · LZ ${wert}`) : wert; zurueck = t ? `#/fach/${t.fach.id}` : "#/"; }
    else if (art === "fach") { liste = basis.filter((a) => a.fach === wert && a.typ !== "karte"); const f = App.fach(wert); titel = f ? f.titel : wert; zurueck = `#/fach/${wert}`; }
    else if (art === "fehler") { liste = basis.filter((a) => App.fortschritt[a.id] && App.fortschritt[a.id].letztes < 1); titel = "Fehler wiederholen"; }
    else if (art === "karten") {
      liste = basis.filter((a) => a.typ === "karte" && (!wert || a.fach === wert));
      // Nicht gewusste zuerst, dann neue, dann gewusste
      const rang = (a) => { const f = App.fortschritt[a.id]; return !f ? 1 : f.letztes < 1 ? 0 : 2; };
      liste = U.shuffle(liste).sort((x, y) => rang(x) - rang(y)).slice(0, 20);
      titel = "Lernkarten"; if (wert) zurueck = `#/fach/${wert}`;
    }
    else if (art === "ids") { liste = wert.split(",").map(App.aufgabe).filter(Boolean); titel = "Aufgaben testen"; zurueck = "#/admin/aufgaben"; }
    else { liste = U.shuffle(basis.filter((a) => !App.geloest(a.id))).slice(0, 10); titel = "Weiterlernen"; }
    if (test) zurueck = "#/admin/aufgaben";

    // ungelöste zuerst
    if (!test && art !== "weiter" && art !== "karten") liste = liste.filter((a) => !App.geloest(a.id)).concat(liste.filter((a) => App.geloest(a.id)));

    if (!liste.length) {
      return App.rahmen(`<div class="card empty">Keine Aufgaben vorhanden. 🎉<br><br><a class="btn" href="${zurueck}">Zurück</a></div>`, { titel, zurueck });
    }

    let i = 0; const resultate = [];
    const main = App.rahmen(`<div id="sitzung"></div>`, { titel: test ? "Testmodus" : titel, zurueck });
    const box = $("#sitzung", main);

    function zeige() {
      const a = liste[i];
      const f = App.fach(a.fach), t = App.thema(a.lz);
      const st = App.statusVon(a.id);
      box.innerHTML = `
        ${test ? `<div class="hint-admin">Testmodus – Ergebnisse werden nicht gespeichert. Status: <strong>${statusText(st)}</strong></div>` : ""}
        <div class="row between small muted" style="margin-bottom:8px"><span>Aufgabe ${i + 1} von ${liste.length}</span><span>${pct(i / liste.length)}%</span></div>
        <div class="bar" style="margin-bottom:14px"><i style="width:${pct(i / liste.length)}%"></i></div>
        <div class="card">
          <div class="task-head">
            <span class="badge info">${esc(Aufgaben.TYPEN[a.typ] || a.typ)}</span>
            <span class="badge">${esc(f ? f.kuerzel : a.fach)}${t && !/^(uek|qv)/.test(a.lz) ? " · LZ " + esc(a.lz) : ""}</span>
            <span class="badge">${a.fach === "qv" ? "QV" : a.lehrjahr + ". LJ"}</span>
            ${App.geloest(a.id) && !test ? `<span class="badge ok">bereits gelöst</span>` : ""}
          </div>
          ${a.titel ? `<h3>${esc(a.titel)}</h3>` : ""}
          <div id="aufgabe"></div>
        </div>
        <div class="sticky-actions"><div class="btn-row">
          <button class="btn block" id="pruefen">Antwort prüfen</button>
        </div></div>`;
      const nachErgebnis = (r) => {
        resultate.push({ a, ergebnis: r.ergebnis });
        if (!test && !istAdmin()) {
          const alt = App.fortschritt[a.id] || { versuche: 0, bestes: 0 };
          App.fortschritt[a.id] = { versuche: alt.versuche + 1, bestes: Math.max(alt.bestes || 0, r.ergebnis), letztes: r.ergebnis, zuletzt: new Date().toISOString() };
          Store.ergebnisSpeichern(a.id, r.ergebnis).catch((e) => toast("Speichern fehlgeschlagen: " + e.message));
        }
        const actions = $(".sticky-actions .btn-row", box);
        actions.innerHTML = (test ? testKnoepfe(a) : "") +
          `<button class="btn block accent" id="weiter">${i + 1 < liste.length ? "Weiter ›" : "Abschliessen"}</button>`;
        if (test) bindeTestKnoepfe(actions, a);
        $("#weiter", box).onclick = () => { i++; i < liste.length ? zeige() : ende(); };
        $("#weiter", box).scrollIntoView({ behavior: "smooth", block: "nearest" });
      };
      const ctrl = Aufgaben.render($("#aufgabe", box), a, { onErgebnis: nachErgebnis });
      if (ctrl.selbst) $(".sticky-actions .btn-row", box).innerHTML = "";
      $("#pruefen", box) && ($("#pruefen", box).onclick = () => {
        const r = ctrl.pruefen();
        if (r.unvollstaendig) return toast(r.meldung);
        nachErgebnis(r);
      });
    }

    function ende() {
      const schnitt = resultate.reduce((s, r) => s + r.ergebnis, 0) / resultate.length;
      const richtig = resultate.filter((r) => r.ergebnis >= 1).length;
      box.innerHTML = `
        <div class="card" style="text-align:center">
          <div style="font-size:3rem">${schnitt >= 0.8 ? "🏆" : schnitt >= 0.5 ? "💪" : "📚"}</div>
          <h2>${schnitt >= 0.8 ? "Super gemacht!" : schnitt >= 0.5 ? "Gut – weiter so!" : "Dranbleiben!"}</h2>
          <p class="big-num">${pct(schnitt)}%</p>
          <p class="muted">${richtig} von ${resultate.length} Aufgaben ganz richtig</p>
        </div>
        <ul class="list card">${resultate.map((r) => `<li class="row between"><span>${esc(r.a.titel || r.a.frage.slice(0, 60))}</span><span class="badge ${r.ergebnis >= 1 ? "ok" : r.ergebnis > 0 ? "warn" : "bad"}">${pct(r.ergebnis)}%</span></li>`).join("")}</ul>
        <div class="btn-row"><a class="btn block" href="${zurueck}">Fertig</a></div>`;
    }
    zeige();
  }

  /* ---------- Test-Knöpfe (Admin) ---------- */
  const statusText = (s) => ({ entwurf: "Entwurf", getestet: "Getestet", freigegeben: "Freigegeben" }[s] || s);
  function testKnoepfe(a) {
    const st = App.statusVon(a.id);
    return `
      ${st === "entwurf" ? `<button class="btn ghost" data-st="getestet" style="flex:1">✓ Als getestet markieren</button>` : ""}
      ${st !== "freigegeben" ? `<button class="btn ok" data-st="freigegeben" style="flex:1">Freischalten</button>` : `<button class="btn ghost" data-st="entwurf" style="flex:1">Freigabe zurückziehen</button>`}`;
  }
  function bindeTestKnoepfe(root, a) {
    $$("[data-st]", root).forEach((b) => (b.onclick = async () => {
      try {
        await Store.setzeAufgabenStatus(a.id, b.dataset.st);
        App.status[a.id] = { status: b.dataset.st, geaendert_am: new Date().toISOString() };
        toast(`Status: ${statusText(b.dataset.st)}`);
        b.remove();
        const hint = document.querySelector(".hint-admin strong"); if (hint) hint.textContent = statusText(b.dataset.st);
      } catch (e) { toast(e.message); }
    }));
  }

  /* ---------- Vorschau (Admin) ---------- */
  function vorschau(beruf, lj) {
    if (!beruf) {
      const opts = Object.entries(LP.berufe).map(([k, b]) =>
        Array.from({ length: b.lehrjahre }, (_, i) => `<a class="btn ghost" href="#/vorschau/${k}/${i + 1}">${esc(b.name.split(" ")[0])} · ${i + 1}. LJ</a>`).join("")).join("");
      vorschauProfil = null;
      return App.rahmen(`<div class="card"><h2>Lernansicht als …</h2><p class="muted small">Zeigt genau das, was Lernende dieses Berufs und Lehrjahrs sehen (nur freigegebene Aufgaben).</p><div class="btn-row">${opts}</div></div>`, { titel: "Vorschau", zurueck: "#/" });
    }
    vorschauProfil = { vorname: "Vorschau", beruf, lehrjahr: Number(lj), rolle: "lernende" };
    start();
  }
  window.addEventListener("hashchange", () => {
    const h = location.hash;
    if (!/^#\/(vorschau|fach|lernen)/.test(h)) vorschauProfil = null;
  });

  window.Lernen = { start, fach, sitzung, vorschau, statusText };
})();
