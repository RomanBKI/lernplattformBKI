/* Hilfsfunktionen */
(function () {
  const U = {};

  U.esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  U.$ = (sel, root) => (root || document).querySelector(sel);
  U.$$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  U.shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  U.pct = (x) => Math.round((x || 0) * 100);

  U.datum = (iso, mitZeit = true) => {
    if (!iso) return "–";
    const d = new Date(iso);
    if (isNaN(d)) return "–";
    const opt = { day: "2-digit", month: "2-digit", year: "numeric" };
    if (mitZeit) Object.assign(opt, { hour: "2-digit", minute: "2-digit" });
    return d.toLocaleString("de-CH", opt);
  };

  U.relativ = (iso) => {
    if (!iso) return "noch nie";
    const diff = (Date.now() - new Date(iso).getTime()) / 1000;
    if (diff < 60) return "gerade eben";
    if (diff < 3600) return `vor ${Math.floor(diff / 60)} Min.`;
    if (diff < 86400) return `vor ${Math.floor(diff / 3600)} Std.`;
    const t = Math.floor(diff / 86400);
    if (t === 1) return "gestern";
    if (t < 30) return `vor ${t} Tagen`;
    return U.datum(iso, false);
  };

  // Normalisierung für Texteingaben (Gross-/Kleinschreibung, Leerzeichen, Umlaute tolerant)
  U.norm = (s) => String(s || "").toLowerCase().trim()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[‐-–—]/g, "-").replace(/\s+/g, " ").replace(/[.,;:!?]+$/g, "");

  // Zahl aus Eingabe (akzeptiert Komma, Apostroph als Tausendertrenner)
  U.zahl = (s) => {
    const t = String(s || "").replace(/['’\s]/g, "").replace(",", ".");
    if (t === "" || !/^[-+]?\d*\.?\d+(e[-+]?\d+)?$/i.test(t)) return NaN;
    return parseFloat(t);
  };

  // Browser-Speicher mit Fallback (z. B. privater Modus)
  const mem = {};
  U.speicher = {
    get(k, def) {
      try { const v = localStorage.getItem(k); return v == null ? def : JSON.parse(v); }
      catch (e) { return k in mem ? mem[k] : def; }
    },
    set(k, v) {
      try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { mem[k] = v; }
    },
    del(k) { try { localStorage.removeItem(k); } catch (e) { delete mem[k]; } }
  };

  let toastTimer;
  U.toast = (msg) => {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  };

  // Modal: gibt Element zurück; close() schliesst
  U.modal = (html, onMount) => {
    const root = document.getElementById("modal-root");
    const bg = document.createElement("div");
    bg.className = "modal-bg";
    bg.innerHTML = `<div class="modal" role="dialog" aria-modal="true">${html}</div>`;
    const close = () => bg.remove();
    bg.addEventListener("click", (e) => { if (e.target === bg) close(); });
    root.appendChild(bg);
    const m = bg.querySelector(".modal");
    U.$$("[data-close]", m).forEach((b) => b.addEventListener("click", close));
    if (onMount) onMount(m, close);
    const first = m.querySelector("input, select, textarea");
    if (first) setTimeout(() => first.focus(), 50);
    return { el: m, close };
  };

  U.bestaetigen = (titel, text, okText = "OK", gefahr = false) => new Promise((resolve) => {
    U.modal(`
      <h2>${U.esc(titel)}</h2>
      <p>${U.esc(text)}</p>
      <div class="btn-row" style="justify-content:flex-end">
        <button class="btn ghost" data-close>Abbrechen</button>
        <button class="btn ${gefahr ? "bad" : ""}" data-ok>${U.esc(okText)}</button>
      </div>`, (m, close) => {
      m.querySelector("[data-ok]").onclick = () => { close(); resolve(true); };
      U.$$("[data-close]", m).forEach((b) => b.addEventListener("click", () => resolve(false)));
    });
  });

  // Einfaches Passwort-Vorschlag (gut lesbar, ohne verwechselbare Zeichen)
  // Zufälliges Startpasswort, z. B. "Kxmp-Rtva-47" (kryptografisch zufällig, ohne verwechselbare Zeichen)
  U.passwortVorschlag = () => {
    const L = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
    const r = new Uint32Array(10);
    (window.crypto || window.msCrypto).getRandomValues(r);
    const t = (i) => L[r[i] % L.length];
    return t(0).toUpperCase() + t(1) + t(2) + t(3) + "-" + t(4).toUpperCase() + t(5) + t(6) + t(7) + "-" + String(10 + (r[8] % 90));
  };

  U.logo = `<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" fill="#12294a"/></svg>`;

  window.U = U;
})();
