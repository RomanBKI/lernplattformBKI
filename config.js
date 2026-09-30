/*
 * Konfiguration der Lernplattform
 * --------------------------------
 * Solange SUPABASE_URL leer ist, läuft die App im DEMO-MODUS:
 * alle Daten werden nur im Browser dieses Geräts gespeichert.
 *
 * Nach der Einrichtung von Supabase (siehe ANLEITUNG.md, Schritt 3)
 * hier die beiden Werte aus Supabase -> Project Settings -> API eintragen.
 * Der "anon public" Key darf öffentlich sein – die Daten sind über
 * die Datenbank-Regeln (Row Level Security) geschützt.
 */
window.APP_CONFIG = {
  SUPABASE_URL: "https://pngdgmewusdxcubpqsae.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_RdFpYNhy7kdVvHSFMrCwiQ_gRWebSTM",

  // Name der App (erscheint oben und auf dem Home-Bildschirm)
  APP_NAME: "BKI Lernplattform",
  FIRMA: "Baumann Koelliker AG",

  // Interne Login-Domain: Lernende melden sich nur mit Benutzernamen an.
  // Technisch wird daraus "benutzername@bki-lernen.local" – es werden keine E-Mails verschickt.
  LOGIN_DOMAIN: "bki-lernen.local",

  // Ab welchem Ergebnis gilt eine Aufgabe als gelöst (0.8 = 80 %)
  GELOEST_AB: 0.8
};
