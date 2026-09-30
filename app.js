/* App-Steuerung: Anmeldung, Navigation, gemeinsame Daten */
(function () {
  const { esc, $, toast } = U;
  const CFG = window.APP_CONFIG || {};
  const LP = window.LEHRPLAN;

  const App = window.App = {
    user: null, fortschritt: {}, status: {}, einst: { fruehere_lehrjahre: true },
    aufgaben: (window.AUFGABEN || []).slice()
  };

  /* ---------- Daten-Helfer ---------- */
  App.fach = (id) => LP.faecher.find((f) => f.id === id);
  App.thema = (lzId) => { for (const f of LP.faecher) { const t = f.themen.find((x) => x.id === lzId); if (t) return { fach: f, thema: t }; } return null; };
  App.aufgabe = (id) => App.aufgaben.find((a) => a.id === id);
  App.statusVon = (id) => (App.status[id] && App.status[id].status) || "entwurf";
  App.berufName = (k) => (LP.berufe[k] ? LP.berufe[k].name : "–");
  App.geloest = (id, f) => ((f || App.fortschritt)[id] || {}).bestes >= (CFG.GELOEST_AB || 0.8);

  // Welche Aufgaben darf eine Person sehen?
  App.sichtbarFuer = (a, u, mitEntwuerfen = false) => {
    if (!mitEntwuerfen && App.statusVon(a.id) !== "freigegeben") return false;
    if (!u || !u.beruf) return true;
    if (a.berufe && !a.berufe.includes(u.beruf)) return false;
    const letztes = LP.berufe[u.beruf] ? LP.berufe[u.beruf].lehrjahre : 4;
    if (a.fach === "qv") return u.lehrjahr >= letztes;
    const lj = Math.min(a.lehrjahr, letztes);
    return App.einst.fruehere_lehrjahre ? lj <= u.lehrjahr : lj === u.lehrjahr;
  };
  App.meineAufgaben = () => App.aufgaben.filter((a) => App.sichtbarFuer(a, App.user));

  /* ---------- Oberfläche ---------- */
  App.rahmen = (inhalt, opt = {}) => {
    const u = App.user;
    $("#app").innerHTML = `
      ${Store.demo ? `<div class="demo-banner">Demo-Modus – Daten werden nur auf diesem Gerät gespeichert</div>` : ""}
      <header class="topbar">
        ${opt.zurueck ? `<button class="back" data-back aria-label="Zurück">‹</button>` : ""}
        <div class="brand"><div class="logo">${U.logo}</div><span>${esc(opt.titel || CFG.APP_NAME)}</span></div>
        ${u ? `<button data-menu aria-label="Menü">${esc(u.vorname || u.benutzername)} ▾</button>` : ""}
      </header>
      <main class="wrap">${inhalt}</main>`;
    const back = $("[data-back]");
    if (back) back.onclick = () => (typeof opt.zurueck === "string" ? (location.hash = opt.zurueck) : history.back());
    const menu = $("[data-menu]");
    if (menu) menu.onclick = zeigeMenu;
    window.scrollTo(0, 0);
    return $("main");
  };

  function zeigeMenu() {
    const u = App.user;
    U.modal(`
      <h2>${esc((u.vorname || "") + " " + (u.nachname || ""))}</h2>
      <p class="muted small">${u.rolle === "admin" ? "Administrator" : esc(App.berufName(u.beruf)) + " · " + u.lehrjahr + ". Lehrjahr"}<br>Benutzername: ${esc(u.benutzername || "")}</p>
      <div class="stack">
        ${u.rolle === "admin" ? `<button class="btn ghost block" data-go="#/">Admin-Übersicht</button><button class="btn ghost block" data-go="#/vorschau">Lernansicht (Vorschau)</button>` : `<button class="btn ghost block" data-go="#/">Startseite</button>`}
        <button class="btn ghost block" data-pw>Passwort ändern</button>
        ${Store.demo ? `<button class="btn ghost block" data-reset>Demo zurücksetzen</button>` : ""}
        <button class="btn bad block" data-logout>Abmelden</button>
      </div>`, (m, close) => {
      U.$$("[data-go]", m).forEach((b) => (b.onclick = () => { close(); location.hash = b.dataset.go; }));
      m.querySelector("[data-logout]").onclick = async () => { close(); await Store.logout(); App.user = null; location.hash = "#/"; start(); };
      m.querySelector("[data-pw]").onclick = () => { close(); passwortDialog(); };
      const r = m.querySelector("[data-reset]"); if (r) r.onclick = () => Store.demoZuruecksetzen();
    });
  }

  function passwortDialog() {
    U.modal(`
      <h2>Passwort ändern</h2>
      <div class="err"></div>
      <label class="field"><span>Neues Passwort</span><input type="password" name="p1" autocomplete="new-password"></label>
      <label class="field"><span>Wiederholen</span><input type="password" name="p2" autocomplete="new-password"></label>
      <div class="btn-row" style="justify-content:flex-end"><button class="btn ghost" data-close>Abbrechen</button><button class="btn" data-ok>Speichern</button></div>`,
    (m, close) => {
      m.querySelector("[data-ok]").onclick = async () => {
        const p1 = m.querySelector("[name=p1]").value, p2 = m.querySelector("[name=p2]").value;
        const err = (t) => (m.querySelector(".err").innerHTML = `<div class="error">${esc(t)}</div>`);
        if (p1.length < 8) return err("Mindestens 8 Zeichen.");
        if (p1 !== p2) return err("Die Passwörter stimmen nicht überein.");
        try { await Store.passwortAendern(p1); close(); toast("Passwort geändert."); } catch (e) { err(e.message); }
      };
    });
  }

  /* ---------- Login ---------- */
  function loginSeite(fehler) {
    $("#app").innerHTML = `
      <div class="login"><form class="card" autocomplete="on">
        <div class="logo">${U.logo.replace('width="18" height="18"', 'width="30" height="30"')}</div>
        <h1>${esc(CFG.APP_NAME)}</h1>
        <p class="muted">${esc(CFG.FIRMA || "")} · Lernen für Berufsfachschule, üK und QV</p>
        ${fehler ? `<div class="error">${esc(fehler)}</div>` : ""}
        <label class="field"><span>Benutzername</span><input type="text" name="u" autocomplete="username" autocapitalize="off" autocorrect="off" spellcheck="false" required></label>
        <label class="field"><span>Passwort</span><input type="password" name="p" autocomplete="current-password" required></label>
        <button class="btn block" type="submit">Anmelden</button>
        <p class="small muted" style="margin-top:14px">Passwort vergessen? Melde dich bei deinem Berufsbildner – er setzt dir ein neues.</p>
        ${Store.demo ? `<div class="hint-admin" style="margin-top:8px"><strong>Demo-Zugänge:</strong><br>Admin: <code>admin</code> / <code>admin</code><br>Lernende: <code>lea.meier</code> (1. LJ), <code>noah.keller</code> (3. LJ) / <code>lernen</code></div>` : ""}
      </form></div>`;
    const f = $("form");
    f.onsubmit = async (e) => {
      e.preventDefault();
      const btn = f.querySelector("button"); btn.disabled = true; btn.textContent = "Anmelden …";
      try {
        App.user = await Store.login(f.u.value, f.p.value);
        await ladeDaten(); route();
      } catch (err) { loginSeite(err.message); }
    };
  }

  async function ladeDaten() {
    const [status, einst, fort] = await Promise.all([Store.aufgabenStatus(), Store.einstellungen(), Store.meinFortschritt()]);
    App.status = status || {}; App.einst = Object.assign({ fruehere_lehrjahre: true }, einst || {}); App.fortschritt = fort || {};
  }
  App.ladeDaten = ladeDaten;

  /* ---------- Navigation ---------- */
  function pflichtPasswort(fehler) {
    $("#app").innerHTML = `
      <div class="login"><form class="card">
        <div class="logo">${U.logo.replace('width="18" height="18"', 'width="30" height="30"')}</div>
        <h1>Eigenes Passwort wählen</h1>
        <p class="muted">Hallo ${esc(App.user.vorname || "")}! Bitte ersetze das Startpasswort durch ein eigenes, das nur du kennst.</p>
        ${fehler ? `<div class="error">${esc(fehler)}</div>` : ""}
        <label class="field"><span>Neues Passwort (mind. 8 Zeichen)</span><input type="password" name="p1" autocomplete="new-password" required></label>
        <label class="field"><span>Wiederholen</span><input type="password" name="p2" autocomplete="new-password" required></label>
        <button class="btn block" type="submit">Speichern und weiter</button>
      </form></div>`;
    const f = $("form");
    f.onsubmit = async (e) => {
      e.preventDefault();
      const p1 = f.p1.value, p2 = f.p2.value;
      if (p1.length < 8) return pflichtPasswort("Das Passwort muss mindestens 8 Zeichen lang sein.");
      if (p1 !== p2) return pflichtPasswort("Die Passwörter stimmen nicht überein.");
      try { await Store.passwortAendern(p1); App.user.muss_pw_aendern = false; toast("Passwort gespeichert."); route(); }
      catch (err) { pflichtPasswort(err.message); }
    };
  }

  function route() {
    if (!App.user) return loginSeite();
    if (App.user.muss_pw_aendern) return pflichtPasswort();
    const h = (location.hash || "#/").slice(1);
    const teile = h.split("/").filter(Boolean).map(decodeURIComponent);
    const admin = App.user.rolle === "admin";
    try {
      if (teile[0] === "fach") return Lernen.fach(teile[1]);
      if (teile[0] === "lernen") return Lernen.sitzung(teile.slice(1).join("/"));
      if (admin && teile[0] === "vorschau") return Lernen.vorschau(teile[1], teile[2]);
      if (admin && teile[0] === "test") return Lernen.sitzung(teile.slice(1).join("/"), { test: true });
      if (admin && teile[0] === "admin") return Admin.route(teile.slice(1));
      if (admin) return Admin.route([]);
      return Lernen.start();
    } catch (e) {
      console.error(e);
      App.rahmen(`<div class="error">Fehler: ${esc(e.message)}</div>`);
    }
  }
  App.route = route;
  window.addEventListener("hashchange", route);

  async function start() {
    try { App.user = await Store.init(); } catch (e) { App.user = null; }
    if (App.user) { try { await ladeDaten(); } catch (e) { toast(e.message); } }
    route();
  }

  // Offline-Fähigkeit / Installierbarkeit
  if ("serviceWorker" in navigator && location.protocol === "https:" && !window.__BUNDLE__) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  start();
})();
