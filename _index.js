/*
 * AUFGABEN-SAMMLUNG
 * =================
 * Jede Datei (lj1.js, lj2.js, …) fügt ihre Aufgaben mit AUFGABEN.push(...) hinzu.
 *
 * Pflichtfelder jeder Aufgabe:
 *   id         eindeutig, z. B. "lj1-ohm-01"  (NIE ändern, sonst geht der Fortschritt verloren)
 *   typ        auswahl | wahrfalsch | zuordnen | reihenfolge | luecke | rechnen | freitext
 *   lehrjahr   1–4 (für QV-Aufgaben das letzte Lehrjahr)
 *   berufe     ["EI"], ["ME"] oder ["EI","ME"]
 *   fach       a–f, "uek4", "qv"  (siehe data/lehrplan.js)
 *   lz         Leistungsziel, z. B. "a2.1" (bzw. Modul-ID bei üK/QV)
 *   titel, frage, erklaerung
 *
 * Neue Aufgaben sind automatisch "Entwurf" und erst nach Freigabe im Admin-Bereich sichtbar.
 * (demo_status gilt nur für den Demo-Modus.)
 */
window.AUFGABEN = [];
