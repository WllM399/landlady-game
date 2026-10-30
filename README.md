# Die Wirtin – Erzählspiel

## Starten

Öffne `index.html` per Doppelklick in einem aktuellen Browser. Es ist keine Installation nötig. Playfair Display und DM Sans werden über Google Fonts geladen; ohne Internet nutzt der Browser die Schriftalternativen.

## Spielen

Suche in jeder Szene nach den fein umrandeten Stellen. Beim Darüberfahren werden sie deutlicher. Wenn alle Hinweise untersucht sind, wird **Weiter** aktiv. Die **Ortskarte** führt zu bereits besuchten Szenen zurück. Das **Notizbuch** sammelt gefundene Spuren und fasst erreichte Abschnitte zusammen. Der Browser merkt sich den Spielstand lokal; **Von vorn** setzt ihn zurück.

## Dateien

- `index.html` enthält die sichtbare Spieloberfläche.
- `styles/index.css` enthält Layout, Farben und responsive Darstellung.
- `scripts/index.js` enthält die Szenen, Erzähltexte, Klick-Hinweise, Ortskarte, Speicherlogik und die vorläufigen Canvas-Zeichnungen.
- `DREHBUCH.md` beschreibt den Spielablauf Szene für Szene.

## Code lesen

In `scripts/index.js` steht am Anfang das Array `scenes`. Jede Szene hat einen Titel, einen kurzen Erzähltext und eine Liste `hotspots`. Ein Hotspot ist ein anklickbarer Hinweis. Die Zeichenfunktionen weiter unten malen die Räume und Orte; ihre Namen beginnen mit `draw`.
