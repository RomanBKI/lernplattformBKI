/*
 * Aufgabentypen
 * -------------
 * Jede Aufgabe wird mit Aufgaben.render(container, aufgabe) angezeigt.
 * Rückgabe: { pruefen() } -> { unvollstaendig, meldung } oder { ergebnis (0..1) }
 *
 * Unterstützte Typen:
 *   auswahl        Multiple Choice (eine oder mehrere richtige Antworten)
 *   wahrfalsch     Mehrere Aussagen: richtig oder falsch?
 *   zuordnen       Begriffe einander zuordnen (z. B. Symbol -> Bedeutung, Bild-Nummer -> Bauteil)
 *   reihenfolge    Schritte in die richtige Reihenfolge bringen
 *   luecke         Lückentext; Lücken im Text als {{Antwort|Alternative}}
 *   rechnen        Rechenaufgabe mit Zahl, Einheit und Toleranz
 *   freitext       Bild/Situation beschreiben; automatische Prüfung über Stichworte + Musterlösung
 */
(function () {
  const { esc, shuffle, norm, zahl, $$ } = U;
  const TYPEN = {
    auswahl: "Auswahl", wahrfalsch: "Richtig / Falsch", zuordnen: "Zuordnen", reihenfolge: "Reihenfolge",
    luecke: "Lückentext", rechnen: "Berechnen", freitext: "Beschreiben"
  };

  function bildHtml(a) {
    if (!a.bild) return "";
    if (a.bild.svg) return `<div class="task-img">${a.bild.svg}</div>`;
    if (a.bild.src) return `<div class="task-img"><img src="${esc(a.bild.src)}" alt="${esc(a.bild.alt || "")}"></div>`;
    return "";
  }

  function render(el, a) {
    el.innerHTML = `
      <div class="task-q">${esc(a.frage)}</div>
      ${bildHtml(a)}
      <div class="task-body"></div>
      <div class="task-feedback"></div>`;
    const body = el.querySelector(".task-body");
    const fn = R[a.typ];
    if (!fn) { body.innerHTML = `<div class="error">Unbekannter Aufgabentyp: ${esc(a.typ)}</div>`; return { pruefen: () => ({ ergebnis: 0 }) }; }
    const ctrl = fn(body, a);
    return {
      pruefen() {
        const r = ctrl.pruefen();
        if (r.unvollstaendig) return r;
        zeigeFeedback(el.querySelector(".task-feedback"), a, r);
        return r;
      }
    };
  }

  function zeigeFeedback(box, a, r) {
    const p = Math.round(r.ergebnis * 100);
    const cls = r.ergebnis >= 1 ? "ok" : r.ergebnis > 0 ? "part" : "bad";
    const titel = r.ergebnis >= 1 ? "✓ Richtig!" : r.ergebnis > 0 ? `Teilweise richtig (${p} %)` : "✗ Leider falsch";
    box.innerHTML = `<div class="feedback ${cls}">
      <strong>${titel}</strong>
      ${r.zusatz ? `<div class="small" style="margin-bottom:6px">${r.zusatz}</div>` : ""}
      ${a.erklaerung ? `<div class="expl">${esc(a.erklaerung)}</div>` : ""}
    </div>`;
  }

  const R = {};

  /* Multiple Choice */
  R.auswahl = (body, a) => {
    const multi = a.richtig.length > 1;
    const reihen = a.nicht_mischen ? a.optionen.map((_, i) => i) : shuffle(a.optionen.map((_, i) => i));
    const sel = new Set();
    body.innerHTML = (multi ? `<p class="small muted">Mehrere Antworten sind richtig.</p>` : "") +
      reihen.map((i) => `<button type="button" class="opt ${multi ? "multi" : ""}" data-i="${i}"><span class="mark"></span><span>${esc(a.optionen[i])}</span></button>`).join("");
    $$(".opt", body).forEach((b) => b.addEventListener("click", () => {
      const i = Number(b.dataset.i);
      if (multi) { sel.has(i) ? sel.delete(i) : sel.add(i); }
      else { sel.clear(); sel.add(i); }
      $$(".opt", body).forEach((o) => { const on = sel.has(Number(o.dataset.i)); o.classList.toggle("sel", on); o.querySelector(".mark").textContent = on ? "✓" : ""; });
    }));
    return {
      pruefen() {
        if (!sel.size) return { unvollstaendig: true, meldung: "Bitte wähle eine Antwort." };
        const richtig = new Set(a.richtig);
        let treffer = 0, falsch = 0;
        sel.forEach((i) => (richtig.has(i) ? treffer++ : falsch++));
        $$(".opt", body).forEach((o) => {
          const i = Number(o.dataset.i); o.disabled = true;
          if (richtig.has(i)) o.classList.add("right"); else if (sel.has(i)) o.classList.add("wrong");
          o.classList.remove("sel");
        });
        const ergebnis = multi ? Math.max(0, (treffer - falsch) / richtig.size) : (treffer === 1 && falsch === 0 ? 1 : 0);
        return { ergebnis };
      }
    };
  };

  /* Richtig / Falsch */
  R.wahrfalsch = (body, a) => {
    const antw = {};
    body.innerHTML = a.aussagen.map((s, i) => `
      <div class="tf" data-i="${i}"><div class="txt">${esc(s.text)}</div>
        <div class="seg"><button type="button" data-v="1">Richtig</button><button type="button" data-v="0">Falsch</button></div></div>`).join("");
    $$(".tf", body).forEach((row) => $$("button", row).forEach((b) => b.addEventListener("click", () => {
      antw[row.dataset.i] = b.dataset.v === "1";
      $$("button", row).forEach((x) => x.classList.toggle("sel", x === b));
    })));
    return {
      pruefen() {
        if (Object.keys(antw).length < a.aussagen.length) return { unvollstaendig: true, meldung: "Bitte beurteile alle Aussagen." };
        let r = 0;
        $$(".tf", body).forEach((row) => {
          const i = row.dataset.i, soll = a.aussagen[i].wahr;
          if (antw[i] === soll) r++;
          $$("button", row).forEach((b) => {
            b.disabled = true; b.classList.remove("sel");
            const v = b.dataset.v === "1";
            if (v === soll) b.classList.add("right"); else if (v === antw[i]) b.classList.add("wrong");
          });
        });
        return { ergebnis: r / a.aussagen.length };
      }
    };
  };

  /* Zuordnen */
  R.zuordnen = (body, a) => {
    const rechts = shuffle(a.paare.map((p) => p.rechts).concat(a.ablenker || []));
    body.innerHTML = a.paare.map((p, i) => `
      <div class="pair" data-i="${i}"><div><strong>${esc(p.links)}</strong></div>
        <select aria-label="${esc(p.links)}"><option value="">– wählen –</option>${rechts.map((r) => `<option>${esc(r)}</option>`).join("")}</select>
      </div>`).join("");
    return {
      pruefen() {
        const sels = $$(".pair select", body);
        if (sels.some((s) => !s.value)) return { unvollstaendig: true, meldung: "Bitte ordne alle Begriffe zu." };
        let r = 0;
        sels.forEach((s, i) => {
          const ok = s.value === a.paare[i].rechts; if (ok) r++;
          s.classList.add(ok ? "right" : "wrong"); s.disabled = true;
          if (!ok) s.closest(".pair").insertAdjacentHTML("beforeend", `<div class="sol">Richtig: ${esc(a.paare[i].rechts)}</div>`);
        });
        return { ergebnis: r / a.paare.length };
      }
    };
  };

  /* Reihenfolge */
  R.reihenfolge = (body, a) => {
    let ord = a.schritte.map((_, i) => i);
    for (let k = 0; k < 10 && ord.every((v, i) => v === i); k++) ord = shuffle(ord);
    let fertig = false;
    const draw = () => {
      body.innerHTML = `<p class="small muted">Mit ▲ / ▼ verschieben.</p>` + ord.map((idx, pos) => `
        <div class="order-item" data-pos="${pos}"><span class="n">${pos + 1}.</span><span class="t">${esc(a.schritte[idx])}</span>
          ${fertig ? "" : `<button type="button" data-d="-1" aria-label="nach oben" ${pos === 0 ? "disabled" : ""}>▲</button><button type="button" data-d="1" aria-label="nach unten" ${pos === ord.length - 1 ? "disabled" : ""}>▼</button>`}
        </div>`).join("");
      $$(".order-item button", body).forEach((b) => b.addEventListener("click", () => {
        const pos = Number(b.closest(".order-item").dataset.pos), d = Number(b.dataset.d);
        [ord[pos], ord[pos + d]] = [ord[pos + d], ord[pos]]; draw();
      }));
    };
    draw();
    return {
      pruefen() {
        fertig = true; draw();
        let r = 0;
        $$(".order-item", body).forEach((it, pos) => { const ok = ord[pos] === pos; if (ok) r++; it.classList.add(ok ? "right" : "wrong"); });
        const alle = r === ord.length;
        return { ergebnis: alle ? 1 : r / ord.length, zusatz: alle ? "" : "Richtige Reihenfolge: " + a.schritte.map((s, i) => `${i + 1}. ${esc(s)}`).join(" · ") };
      }
    };
  };

  /* Lückentext: {{Antwort|Alternative}} */
  R.luecke = (body, a) => {
    const luecken = [];
    const html = esc(a.text).replace(/\{\{(.+?)\}\}/g, (_, g) => {
      luecken.push(g.split("|").map((x) => x.trim()));
      const w = Math.max(5, Math.min(14, g.split("|")[0].length + 2));
      return `<input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:${w}em" data-i="${luecken.length - 1}" aria-label="Lücke ${luecken.length}">`;
    });
    body.innerHTML = `<div class="gap-text">${html.replace(/\n/g, "<br>")}</div>`;
    const passt = (eingabe, loesungen) => loesungen.some((l) => {
      const zl = zahl(l), ze = zahl(eingabe);
      if (!isNaN(zl) && !isNaN(ze)) return Math.abs(zl - ze) <= Math.abs(zl) * 1e-6;
      return norm(l) === norm(eingabe);
    });
    return {
      pruefen() {
        const inp = $$("input", body);
        if (inp.some((i) => !i.value.trim())) return { unvollstaendig: true, meldung: "Bitte fülle alle Lücken aus." };
        let r = 0; const fehler = [];
        inp.forEach((i) => {
          const l = luecken[i.dataset.i]; const ok = passt(i.value, l);
          if (ok) r++; else fehler.push(`Lücke ${Number(i.dataset.i) + 1}: ${esc(l[0])}`);
          i.classList.add(ok ? "right" : "wrong"); i.disabled = true;
        });
        return { ergebnis: r / inp.length, zusatz: fehler.length ? "Lösung – " + fehler.join(" · ") : "" };
      }
    };
  };

  /* Berechnen */
  R.rechnen = (body, a) => {
    body.innerHTML = `
      <div class="calc"><input type="text" inputmode="decimal" autocomplete="off" placeholder="Resultat" aria-label="Resultat">
      <span class="unit">${esc(a.einheit || "")}</span></div>
      ${a.hinweis ? `<p class="small muted" style="margin-top:8px">${esc(a.hinweis)}</p>` : ""}`;
    const inp = body.querySelector("input");
    return {
      pruefen() {
        const w = zahl(inp.value);
        if (isNaN(w)) return { unvollstaendig: true, meldung: "Bitte gib eine Zahl ein (z. B. 12.5)." };
        const tol = a.toleranz == null ? 0.01 : a.toleranz;
        const ok = Math.abs(w - a.loesung) <= Math.abs(a.loesung) * tol + 1e-9;
        inp.disabled = true; inp.style.borderColor = ok ? "var(--ok)" : "var(--bad)";
        return { ergebnis: ok ? 1 : 0, zusatz: ok ? "" : `Richtig wäre: <strong>${String(a.loesung).replace(".", ".")} ${esc(a.einheit || "")}</strong>` };
      }
    };
  };

  /* Beschreiben (Freitext mit Stichworten) */
  R.freitext = (body, a) => {
    body.innerHTML = `<textarea placeholder="Deine Beschreibung …" aria-label="Deine Antwort"></textarea>
      <p class="small muted" style="margin-top:6px">Beschreibe in eigenen Worten. Geprüft wird, ob die wichtigsten Fachbegriffe vorkommen.</p>`;
    const ta = body.querySelector("textarea");
    return {
      pruefen() {
        const t = norm(ta.value);
        if (t.length < 5) return { unvollstaendig: true, meldung: "Bitte schreibe eine Antwort." };
        const gefunden = [], fehlt = [];
        a.stichworte.forEach((gruppe) => {
          (gruppe.some((w) => t.includes(norm(w))) ? gefunden : fehlt).push(gruppe[0]);
        });
        const min = a.mindestens || a.stichworte.length;
        const ergebnis = Math.min(1, gefunden.length / min);
        ta.disabled = true;
        const zusatz = (gefunden.length ? `Erkannt: ${gefunden.map(esc).join(", ")}. ` : "") +
          (fehlt.length && ergebnis < 1 ? `Es fehlt z. B.: ${fehlt.map(esc).join(", ")}. ` : "") +
          (a.musterloesung ? `<br><strong>Musterlösung:</strong> ${esc(a.musterloesung)}` : "");
        return { ergebnis, zusatz };
      }
    };
  };

  window.Aufgaben = { render, TYPEN };
})();
