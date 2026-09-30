/* Administrationsbereich */
(function () {
  const { esc, pct, $, $$, toast } = U;
  const LP = window.LEHRPLAN;
  const CFG = window.APP_CONFIG || {};
  let tab = "lernende";
  const filter = U.speicher.get("bki-admin-filter", { status: "", lj: "", fach: "", q: "" });

  const balken = (x) => `<div class="bar"><i style="width:${pct(x)}%"></i></div>`;
  const statusBadge = (s) => `<span class="badge ${s === "freigegeben" ? "ok" : s === "getestet" ? "info" : "warn"}">${Lernen.statusText(s)}</span>`;

  function route(teile) {
    if (teile[0] === "lernende" && teile[1]) return detail(teile[1]);
    if (teile[0]) tab = teile[0];
    uebersicht();
  }

  function tabs() {
    const t = [["lernende", "Lernende"], ["aufgaben", "Aufgaben"], ["lehrplan", "Lehrplan"], ["einstellungen", "Optionen"]];
    return `<nav class="tabs">${t.map(([k, n]) => `<button data-tab="${k}" class="${tab === k ? "on" : ""}">${n}</button>`).join("")}</nav>`;
  }

  async function uebersicht() {
    const main = App.rahmen(`${tabs()}<div id="tab"><div class="empty">Lädt …</div></div>`, { titel: "Administration" });
    $$("[data-tab]", main).forEach((b) => (b.onclick = () => { location.hash = "#/admin/" + b.dataset.tab; }));
    const box = $("#tab", main);
    try {
      if (tab === "lernende") await lernende(box);
      else if (tab === "aufgaben") aufgaben(box);
      else if (tab === "lehrplan") lehrplan(box);
      else einstellungen(box);
    } catch (e) { box.innerHTML = `<div class="error">${esc(e.message)}</div>`; }
  }

  /* ------------------------- Lernende ------------------------- */
  function kennzahlen(u, fort) {
    const liste = App.aufgaben.filter((a) => App.sichtbarFuer(a, u));
    const f = fort[u.id] || {};
    const g = liste.filter((a) => App.geloest(a.id, f)).length;
    const bearbeitet = Object.keys(f).length;
    return { total: liste.length, geloest: g, anteil: liste.length ? g / liste.length : 0, bearbeitet, liste, f };
  }

  async function lernende(box) {
    const [users, fort] = await Promise.all([Store.benutzerListe(), Store.alleFortschritte()]);
    const lern = users.filter((u) => u.rolle !== "admin").sort((a, b) => (a.lehrjahr - b.lehrjahr) || String(a.nachname).localeCompare(b.nachname));
    const aktiv = lern.filter((u) => u.aktiv);
    box.innerHTML = `
      <div class="grid" style="margin-bottom:14px">
        <div class="card" style="margin:0"><div class="muted small">Aktive Lernende</div><div class="big-num">${aktiv.length}</div></div>
        <div class="card" style="margin:0"><div class="muted small">Heute / diese Woche aktiv</div><div class="big-num">${aktiv.filter((u) => u.zuletzt_aktiv && Date.now() - new Date(u.zuletzt_aktiv) < 86400000).length} / ${aktiv.filter((u) => u.zuletzt_aktiv && Date.now() - new Date(u.zuletzt_aktiv) < 7 * 86400000).length}</div></div>
      </div>
      <div class="btn-row" style="margin-bottom:14px">
        <button class="btn" data-neu>+ Lernende:n erfassen</button>
        <button class="btn ghost" data-lj>Lehrjahr-Wechsel</button>
        ${window.__BUNDLE__ ? "" : `<button class="btn ghost" data-csv>Export (CSV)</button>`}
      </div>
      <div class="card" style="padding:8px 8px">
        ${lern.length ? `<div class="table-wrap"><table class="tbl"><thead><tr><th>Name</th><th>Beruf / LJ</th><th>Fortschritt</th><th class="hide-sm">Letzte Anmeldung</th><th class="hide-sm">Status</th></tr></thead><tbody>
          ${lern.map((u) => {
            const k = kennzahlen(u, fort);
            return `<tr class="click" data-id="${esc(u.id)}">
              <td><strong>${esc(u.vorname)} ${esc(u.nachname)}</strong><div class="small muted">${esc(u.benutzername)}</div><div class="small muted show-sm">Anmeldung: ${esc(U.relativ(u.letzte_anmeldung))}${u.aktiv ? "" : " · deaktiviert"}</div></td>
              <td class="nowrap">${esc(u.beruf || "–")} · ${u.lehrjahr || "–"}. LJ</td>
              <td>${balken(k.anteil)}<div class="small muted">${pct(k.anteil)}% · ${k.geloest}/${k.total}</div></td>
              <td class="hide-sm small">${esc(U.relativ(u.letzte_anmeldung))}</td>
              <td class="hide-sm">${u.aktiv ? `<span class="badge ok">aktiv</span>` : `<span class="badge">deaktiviert</span>`}</td></tr>`;
          }).join("")}</tbody></table></div>` : `<div class="empty">Noch keine Lernenden erfasst.</div>`}
      </div>`;
    $$("tr[data-id]", box).forEach((tr) => (tr.onclick = () => (location.hash = "#/admin/lernende/" + tr.dataset.id)));
    $("[data-neu]", box).onclick = () => formular(null);
    $("[data-lj]", box).onclick = () => lehrjahrWechsel(lern);
    const csvBtn = $("[data-csv]", box); if (csvBtn) csvBtn.onclick = () => csvExport(lern, fort);
  }

  function formular(u) {
    const neu = !u;
    u = u || { vorname: "", nachname: "", beruf: "EI", lehrjahr: 1 };
    const pw = U.passwortVorschlag();
    U.modal(`
      <h2>${neu ? "Lernende:n erfassen" : "Angaben bearbeiten"}</h2>
      <div class="err"></div>
      <div class="form-2">
        <label class="field"><span>Vorname</span><input type="text" name="vorname" value="${esc(u.vorname)}"></label>
        <label class="field"><span>Nachname</span><input type="text" name="nachname" value="${esc(u.nachname)}"></label>
        <label class="field"><span>Beruf</span><select name="beruf">${Object.entries(LP.berufe).map(([k, b]) => `<option value="${k}" ${u.beruf === k ? "selected" : ""}>${esc(b.name)}</option>`).join("")}</select></label>
        <label class="field"><span>Lehrjahr</span><select name="lehrjahr">${[1, 2, 3, 4].map((j) => `<option value="${j}" ${Number(u.lehrjahr) === j ? "selected" : ""}>${j}. Lehrjahr</option>`).join("")}</select></label>
      </div>
      ${neu ? `
        <label class="field"><span>Benutzername</span><input type="text" name="benutzername" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="vorname.nachname"></label>
        <label class="field"><span>Startpasswort</span><input type="text" name="passwort" value="${esc(pw)}"></label>
        <p class="small muted">Notiere Benutzername und Passwort und gib sie der lernenden Person. Das Passwort kann sie später selbst ändern.</p>` :
        `<label class="field"><span>Status</span><select name="aktiv"><option value="1" ${u.aktiv ? "selected" : ""}>aktiv</option><option value="0" ${!u.aktiv ? "selected" : ""}>deaktiviert (kein Login möglich)</option></select></label>`}
      <div class="btn-row" style="justify-content:flex-end"><button class="btn ghost" data-close>Abbrechen</button><button class="btn" data-ok>${neu ? "Erfassen" : "Speichern"}</button></div>`,
    (m, close) => {
      const v = (n) => { const e = m.querySelector(`[name=${n}]`); return e ? e.value.trim() : ""; };
      const err = (t) => (m.querySelector(".err").innerHTML = `<div class="error">${esc(t)}</div>`);
      const bn = m.querySelector("[name=benutzername]");
      if (bn) {
        const auto = () => { if (!bn.dataset.touched) bn.value = U.norm(`${v("vorname")}.${v("nachname")}`).replace(/[^a-z0-9.\-]/g, ""); };
        m.querySelector("[name=vorname]").addEventListener("input", auto);
        m.querySelector("[name=nachname]").addEventListener("input", auto);
        bn.addEventListener("input", () => (bn.dataset.touched = "1"));
      }
      m.querySelector("[data-ok]").onclick = async () => {
        if (!v("vorname") || !v("nachname")) return err("Bitte Vor- und Nachname angeben.");
        const beruf = v("beruf"), lj = Number(v("lehrjahr"));
        if (lj > LP.berufe[beruf].lehrjahre) return err(`${LP.berufe[beruf].name} hat nur ${LP.berufe[beruf].lehrjahre} Lehrjahre.`);
        try {
          if (neu) {
            if (!/^[a-z0-9.\-]{3,}$/.test(v("benutzername"))) return err("Benutzername: mind. 3 Zeichen, nur Kleinbuchstaben, Zahlen, Punkt, Bindestrich.");
            if (v("passwort").length < 6) return err("Passwort: mindestens 6 Zeichen.");
            await Store.benutzerErstellen({ vorname: v("vorname"), nachname: v("nachname"), beruf, lehrjahr: lj, benutzername: v("benutzername"), passwort: v("passwort") });
            close(); zugangsdaten(v("vorname"), v("benutzername"), v("passwort"));
          } else {
            await Store.benutzerAendern(u.id, { vorname: v("vorname"), nachname: v("nachname"), beruf, lehrjahr: lj, aktiv: v("aktiv") === "1" });
            close(); toast("Gespeichert.");
          }
          App.route();
        } catch (e) { err(e.message); }
      };
    });
  }

  function zugangsdaten(name, benutzer, pw) {
    const link = location.href.split("#")[0];
    const text = `Hallo ${name}\n\nDein Zugang zur ${CFG.APP_NAME}:\n${link}\nBenutzername: ${benutzer}\nPasswort: ${pw}\n\nTipp: In Safari auf «Teilen» → «Zum Home-Bildschirm» tippen, dann hast du die App auf dem Handy.`;
    U.modal(`<h2>Zugangsdaten</h2>
      <p class="muted small">Diese Angaben kannst du kopieren und per WhatsApp/E-Mail weitergeben. Das Passwort wird nicht mehr angezeigt.</p>
      <textarea readonly style="min-height:190px">${esc(text)}</textarea>
      <div class="btn-row" style="justify-content:flex-end;margin-top:10px"><button class="btn ghost" data-copy>Kopieren</button><button class="btn" data-close>Fertig</button></div>`,
    (m) => {
      m.querySelector("[data-copy]").onclick = async () => {
        try { await navigator.clipboard.writeText(text); toast("Kopiert."); } catch (e) { m.querySelector("textarea").select(); toast("Text markiert – jetzt kopieren."); }
      };
    });
  }

  async function lehrjahrWechsel(lern) {
    const kandidaten = lern.filter((u) => u.aktiv && u.lehrjahr < LP.berufe[u.beruf].lehrjahre);
    const fertig = lern.filter((u) => u.aktiv && u.lehrjahr >= LP.berufe[u.beruf].lehrjahre);
    const ok = await U.bestaetigen("Lehrjahr-Wechsel",
      `${kandidaten.length} Lernende werden ins nächste Lehrjahr gesetzt. ${fertig.length} Lernende im letzten Lehrjahr bleiben unverändert (bei Lehrabschluss bitte deaktivieren).`, "Jetzt wechseln");
    if (!ok) return;
    try {
      for (const u of kandidaten) await Store.benutzerAendern(u.id, { lehrjahr: u.lehrjahr + 1 });
      toast("Lehrjahre aktualisiert."); App.route();
    } catch (e) { toast(e.message); }
  }

  function csvExport(lern, fort) {
    const zeilen = [["Vorname", "Nachname", "Benutzername", "Beruf", "Lehrjahr", "Aufgaben sichtbar", "gelöst", "Fortschritt %", "Letzte Anmeldung", "Zuletzt aktiv", "Status"]];
    lern.forEach((u) => {
      const k = kennzahlen(u, fort);
      zeilen.push([u.vorname, u.nachname, u.benutzername, u.beruf, u.lehrjahr, k.total, k.geloest, pct(k.anteil), U.datum(u.letzte_anmeldung), U.datum(u.zuletzt_aktiv), u.aktiv ? "aktiv" : "deaktiviert"]);
    });
    const csv = "﻿" + zeilen.map((z) => z.map((x) => `"${String(x == null ? "" : x).replace(/"/g, '""')}"`).join(";")).join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    a.download = `lernende-fortschritt-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a); a.click(); a.remove();
  }

  async function detail(id) {
    const main = App.rahmen(`<div class="empty">Lädt …</div>`, { titel: "Lernende:r", zurueck: "#/admin/lernende" });
    const [users, fort] = await Promise.all([Store.benutzerListe(), Store.alleFortschritte()]);
    const u = users.find((x) => x.id === id);
    if (!u) { main.innerHTML = `<div class="error">Nicht gefunden.</div>`; return; }
    const k = kennzahlen(u, fort);
    const faecher = LP.faecher.map((f) => {
      const l = k.liste.filter((a) => a.fach === f.id);
      const g = l.filter((a) => App.geloest(a.id, k.f)).length;
      return { f, total: l.length, g };
    }).filter((x) => x.total);
    const zuletzt = Object.entries(k.f).sort((a, b) => String(b[1].zuletzt).localeCompare(String(a[1].zuletzt))).slice(0, 12);

    main.innerHTML = `
      <div class="card">
        <div class="row between wrap-row"><div><h2 style="margin:0">${esc(u.vorname)} ${esc(u.nachname)}</h2>
          <div class="muted small">${esc(App.berufName(u.beruf))} · ${u.lehrjahr}. Lehrjahr</div></div>
          ${u.aktiv ? `<span class="badge ok">aktiv</span>` : `<span class="badge">deaktiviert</span>`}</div>
        <dl class="kv" style="margin:14px 0">
          <dt>Benutzername</dt><dd>${esc(u.benutzername)}</dd>
          <dt>Letzte Anmeldung</dt><dd>${esc(U.datum(u.letzte_anmeldung))}</dd>
          <dt>Zuletzt aktiv</dt><dd>${esc(U.datum(u.zuletzt_aktiv))}</dd>
          <dt>Fortschritt</dt><dd>${k.geloest} von ${k.total} gelöst (${pct(k.anteil)}%)</dd>
        </dl>
        <div class="btn-row">
          <button class="btn sm" data-edit>Bearbeiten</button>
          <button class="btn sm ghost" data-pw>Passwort neu setzen</button>
          <button class="btn sm ghost" data-reset>Fortschritt zurücksetzen</button>
          <button class="btn sm bad" data-del>Löschen</button>
        </div>
      </div>
      <div class="section-title">Fortschritt pro Fach</div>
      <div class="card">${faecher.length ? faecher.map(({ f, total, g }) => `
        <div style="margin-bottom:12px"><div class="row between small"><span><strong>${esc(f.kuerzel)}</strong> ${esc(f.titel)}</span><span>${g}/${total}</span></div>${balken(total ? g / total : 0)}</div>`).join("")
        : `<div class="empty">Keine freigegebenen Aufgaben für dieses Lehrjahr.</div>`}</div>
      <div class="section-title">Zuletzt bearbeitet</div>
      <div class="card">${zuletzt.length ? `<ul class="list">${zuletzt.map(([aid, r]) => {
        const a = App.aufgabe(aid);
        return `<li class="row between"><span><span class="small">${esc(a ? a.titel || a.frage.slice(0, 50) : aid)}</span><br><span class="small muted">${esc(U.datum(r.zuletzt))} · ${r.versuche} Versuch(e)</span></span>
          <span class="badge ${r.letztes >= 1 ? "ok" : r.letztes > 0 ? "warn" : "bad"}">${pct(r.letztes)}%</span></li>`;
      }).join("")}</ul>` : `<div class="empty">Noch nichts bearbeitet.</div>`}</div>`;

    $("[data-edit]", main).onclick = () => formular(u);
    $("[data-pw]", main).onclick = () => passwortSetzen(u);
    $("[data-reset]", main).onclick = async () => {
      if (await U.bestaetigen("Fortschritt zurücksetzen?", `Alle Ergebnisse von ${u.vorname} werden gelöscht.`, "Zurücksetzen", true)) {
        try { await Store.fortschrittZuruecksetzen(u.id); toast("Zurückgesetzt."); App.route(); } catch (e) { toast(e.message); }
      }
    };
    $("[data-del]", main).onclick = async () => {
      if (await U.bestaetigen("Lernende:n löschen?", `${u.vorname} ${u.nachname} und alle Ergebnisse werden endgültig gelöscht. Tipp: Deaktivieren ist oft besser.`, "Endgültig löschen", true)) {
        try { await Store.benutzerLoeschen(u.id); toast("Gelöscht."); location.hash = "#/admin/lernende"; } catch (e) { toast(e.message); }
      }
    };
  }

  function passwortSetzen(u) {
    const pw = U.passwortVorschlag();
    U.modal(`<h2>Neues Passwort für ${esc(u.vorname)}</h2>
      <div class="err"></div>
      <label class="field"><span>Neues Passwort</span><input type="text" name="pw" value="${esc(pw)}"></label>
      <div class="btn-row" style="justify-content:flex-end"><button class="btn ghost" data-close>Abbrechen</button><button class="btn" data-ok>Setzen</button></div>`,
    (m, close) => {
      m.querySelector("[data-ok]").onclick = async () => {
        const p = m.querySelector("[name=pw]").value.trim();
        if (p.length < 6) return (m.querySelector(".err").innerHTML = `<div class="error">Mindestens 6 Zeichen.</div>`);
        try { await Store.passwortSetzen(u.id, p); close(); zugangsdaten(u.vorname, u.benutzername, p); }
        catch (e) { m.querySelector(".err").innerHTML = `<div class="error">${esc(e.message)}</div>`; }
      };
    });
  }

  /* ------------------------- Aufgaben ------------------------- */
  function aufgaben(box) {
    const alle = App.aufgaben;
    const zaehl = (s) => alle.filter((a) => App.statusVon(a.id) === s).length;
    const passt = (a) => (!filter.status || App.statusVon(a.id) === filter.status) &&
      (!filter.lj || String(a.fach === "qv" ? "qv" : a.lehrjahr) === filter.lj) &&
      (!filter.fach || a.fach === filter.fach) &&
      (!filter.q || U.norm([a.titel, a.frage, a.lz, a.id].join(" ")).includes(U.norm(filter.q)));
    const liste = alle.filter(passt).sort((a, b) => (a.lehrjahr - b.lehrjahr) || a.fach.localeCompare(b.fach) || a.lz.localeCompare(b.lz, "de", { numeric: true }));
    const entwuerfe = alle.filter((a) => App.statusVon(a.id) !== "freigegeben");

    box.innerHTML = `
      <div class="grid" style="margin-bottom:14px;grid-template-columns:repeat(3,1fr)">
        <div class="card" style="margin:0;padding:12px"><div class="muted small">Entwurf</div><div class="big-num" style="font-size:1.5rem">${zaehl("entwurf")}</div></div>
        <div class="card" style="margin:0;padding:12px"><div class="muted small">Getestet</div><div class="big-num" style="font-size:1.5rem">${zaehl("getestet")}</div></div>
        <div class="card" style="margin:0;padding:12px"><div class="muted small">Freigegeben</div><div class="big-num" style="font-size:1.5rem">${zaehl("freigegeben")}</div></div>
      </div>
      <div class="card">
        <p class="small muted" style="margin-top:0">Neue Aufgaben sind zuerst <strong>Entwurf</strong> und für Lernende unsichtbar. Teste sie mit «Testen» und schalte sie danach frei.</p>
        <div class="form-2">
          <label class="field"><span>Status</span><select data-f="status"><option value="">alle</option><option value="entwurf">Entwurf</option><option value="getestet">Getestet</option><option value="freigegeben">Freigegeben</option></select></label>
          <label class="field"><span>Lehrjahr</span><select data-f="lj"><option value="">alle</option>${[1, 2, 3, 4].map((j) => `<option value="${j}">${j}. Lehrjahr</option>`).join("")}<option value="qv">QV</option></select></label>
          <label class="field"><span>Fach</span><select data-f="fach"><option value="">alle</option>${LP.faecher.map((f) => `<option value="${f.id}">${esc(f.kuerzel)} – ${esc(f.titel)}</option>`).join("")}</select></label>
          <label class="field"><span>Suche</span><input type="text" data-f="q" placeholder="Titel, LZ, ID …"></label>
        </div>
        <div class="btn-row">
          ${entwuerfe.length ? `<a class="btn sm accent" href="#/test/ids/${entwuerfe.map((a) => a.id).join(",")}">Alle nicht freigegebenen testen (${entwuerfe.length})</a>` : ""}
          ${liste.length ? `<a class="btn sm ghost" href="#/test/ids/${liste.map((a) => a.id).join(",")}">Gefilterte testen (${liste.length})</a>` : ""}
          ${liste.some((a) => App.statusVon(a.id) === "getestet") ? `<button class="btn sm ok" data-alle-frei>Alle getesteten freischalten</button>` : ""}
        </div>
      </div>
      <div class="card" style="padding:4px 12px">
        ${liste.length ? `<ul class="list">${liste.map((a) => {
          const st = App.statusVon(a.id), f = App.fach(a.fach);
          return `<li>
            <div class="row between" style="align-items:flex-start;gap:8px">
              <div style="min-width:0"><strong>${esc(a.titel || a.frage.slice(0, 60))}</strong>
                <div class="small muted">${esc(Aufgaben.TYPEN[a.typ] || a.typ)} · ${esc(f ? f.kuerzel : a.fach)} · ${/^(uek|qv)/.test(a.lz) ? esc(App.thema(a.lz) ? App.thema(a.lz).thema.titel : a.lz) : "LZ " + esc(a.lz)} · ${a.fach === "qv" ? "QV" : a.lehrjahr + ". LJ"} · ${esc((a.berufe || []).join("/"))}</div></div>
              ${statusBadge(st)}
            </div>
            <div class="btn-row" style="margin-top:8px">
              <a class="btn sm ghost" href="#/test/ids/${esc(a.id)}">Testen</a>
              ${st !== "freigegeben" ? `<button class="btn sm ok" data-set="${esc(a.id)}" data-st="freigegeben">Freischalten</button>` : `<button class="btn sm ghost" data-set="${esc(a.id)}" data-st="entwurf">Zurückziehen</button>`}
            </div></li>`;
        }).join("")}</ul>` : `<div class="empty">Keine Aufgaben für diesen Filter.</div>`}
      </div>`;

    $$("[data-f]", box).forEach((el) => {
      el.value = filter[el.dataset.f] || "";
      el.addEventListener(el.tagName === "INPUT" ? "change" : "change", () => { filter[el.dataset.f] = el.value; U.speicher.set("bki-admin-filter", filter); aufgaben(box); });
    });
    $$("[data-set]", box).forEach((b) => (b.onclick = async () => {
      if (b.dataset.st === "freigegeben" && App.statusVon(b.dataset.set) === "entwurf") {
        if (!(await U.bestaetigen("Ungetestet freischalten?", "Diese Aufgabe wurde noch nicht als getestet markiert. Trotzdem für alle Lernenden freischalten?", "Freischalten"))) return;
      }
      await setze(b.dataset.set, b.dataset.st); aufgaben(box);
    }));
    const af = $("[data-alle-frei]", box);
    if (af) af.onclick = async () => {
      const ids = liste.filter((a) => App.statusVon(a.id) === "getestet").map((a) => a.id);
      if (!(await U.bestaetigen("Freischalten", `${ids.length} getestete Aufgaben für die Lernenden freischalten?`, "Freischalten"))) return;
      for (const id of ids) await setze(id, "freigegeben");
      aufgaben(box);
    };
  }

  async function setze(id, st) {
    try { await Store.setzeAufgabenStatus(id, st); App.status[id] = { status: st, geaendert_am: new Date().toISOString() }; toast(`Status: ${Lernen.statusText(st)}`); }
    catch (e) { toast(e.message); }
  }

  /* ------------------------- Lehrplan-Abdeckung ------------------------- */
  function lehrplan(box) {
    box.innerHTML = `<div class="card"><p class="small muted" style="margin:0">Übersicht aller Leistungsziele mit Lektionen pro Lehrjahr (Quelle: ${esc(LP.quelle)}) und Anzahl vorhandener Aufgaben. So siehst du, wo noch Inhalte fehlen.</p></div>` +
      LP.faecher.map((f) => `
        <div class="card"><div class="row" style="margin-bottom:8px"><div class="fach-kuerzel ${f.bereich === "uek" ? "uek" : f.bereich === "qv" ? "qv" : ""}">${esc(f.kuerzel)}</div><h3 style="margin:0">${esc(f.titel)}</h3></div>
        <div class="table-wrap"><table class="tbl"><thead><tr><th>LZ</th><th>Leistungsziel</th>${f.bereich === "bfs" ? "<th>Lekt. LJ 1–4</th>" : ""}<th>Aufgaben</th></tr></thead><tbody>
        ${f.themen.map((t) => {
          const auf = App.aufgaben.filter((a) => a.lz === t.id);
          const frei = auf.filter((a) => App.statusVon(a.id) === "freigegeben").length;
          return `<tr><td class="nowrap small">${esc(/^(uek|qv)/.test(t.id) ? "" : t.id)}</td><td class="small">${esc(t.titel)}</td>
            ${f.bereich === "bfs" ? `<td class="nowrap small">${(t.lektionen || []).map((x) => (x == null ? "–" : x)).join(" · ")}</td>` : ""}
            <td>${auf.length ? `<span class="badge ${frei ? "ok" : "warn"}">${frei}/${auf.length}</span>` : `<span class="badge">0</span>`}</td></tr>`;
        }).join("")}
        </tbody></table></div></div>`).join("");
  }

  /* ------------------------- Einstellungen ------------------------- */
  function einstellungen(box) {
    box.innerHTML = `
      <div class="card">
        <h3>Sichtbarkeit</h3>
        <label class="row" style="gap:10px;cursor:pointer"><input type="checkbox" data-fl ${App.einst.fruehere_lehrjahre ? "checked" : ""} style="width:22px;height:22px">
          <span>Lernende sehen auch Aufgaben <strong>früherer</strong> Lehrjahre (zum Repetieren).<br><span class="small muted">Aufgaben höherer Lehrjahre sind nie sichtbar. QV-Aufgaben erscheinen nur im letzten Lehrjahr.</span></span></label>
      </div>
      <div class="card">
        <h3>System</h3>
        <dl class="kv">
          <dt>Modus</dt><dd>${Store.demo ? "Demo (Daten nur auf diesem Gerät)" : "Supabase (Online-Datenbank)"}</dd>
          <dt>Aufgaben total</dt><dd>${App.aufgaben.length}</dd>
          <dt>Lehrplan</dt><dd class="small">${esc(LP.quelle)}</dd>
        </dl>
      </div>`;
    $("[data-fl]", box).onchange = async (e) => {
      try { await Store.setzeEinstellung("fruehere_lehrjahre", e.target.checked); App.einst.fruehere_lehrjahre = e.target.checked; toast("Gespeichert."); }
      catch (err) { toast(err.message); }
    };
  }

  window.Admin = { route };
})();
