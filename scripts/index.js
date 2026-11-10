// Jede Szene enthält die kurze Erzählung und die Dinge, die man untersuchen kann.
const scenes = [
  {
    id: "bath",
    place: "Bath",
    title: "Die Straße",
    chapter: "Ankunft",
    art: "street",
    alt: "Eine dunkle Straße in Bath mit einer beleuchteten Pension.",
    intro: "Billy Weaver kommt nach Bath. Noch am selben Abend sucht er nach einer Unterkunft.",
    summary: "Billy reist nach Bath und sucht am Abend nach einem Zimmer für die Nacht.",
    hotspots: [
      { id: "schild", label: "Das Schild", x: 55, y: 47, title: "Ein Zimmer frei", text: "Ein schlichtes Schild weist auf ein Bed & Breakfast hin. Billy braucht ein Zimmer und tritt näher.", note: "Billy entdeckt das Schild der Pension." },
      { id: "fenster", label: "Das Fenster", x: 36, y: 53, title: "Ein Blick hinein", text: "Im Fenster sieht Billy einen warmen, stillen Salon. Die Pension wirkt einladender als die Hotels, an denen er vorbeigekommen ist.", note: "Der Salon wirkt warm und einladend." },
      { id: "tuer", label: "Die Haustür", x: 71, y: 63, title: "Ein Schritt hinein", text: "Billy entscheidet sich für die Pension und klingelt.", note: "Billy klingelt an der Tür." }
    ]
  },
  {
    id: "parlor",
    place: "Die Pension",
    title: "Der Salon",
    chapter: "Ein seltsamer Empfang",
    art: "parlor",
    alt: "Der Salon mit einem Kamin, einem ausgestopften Vogel und einem kleinen Hund.",
    intro: "Billy wird freundlich begrüßt und in den Salon geführt.",
    summary: "Dort heißt ihn seine Gastgeberin willkommen. Zwei ungewöhnlich lebensechte Tiere fallen Billy ebenfalls auf.",
    hotspots: [
      { id: "vogel", label: "Der Vogel", x: 13, y: 41, title: "Still wie ein Bild", text: "Ein ausgestopfter Vogel sitzt regungslos im Käfig. Sein Gefieder sieht aus, als könnte er jeden Augenblick auffliegen.", note: "Im Salon steht ein ausgestopfter Vogel." },
      { id: "hund", label: "Der Hund", x: 37, y: 81, title: "Ein kleines Haustier", text: "Der ausgestopfte Dackel liegt neben dem Kamin. Sie zählt ihn zu ihren kleinen Haustieren.", note: "Auch der Dackel ist ausgestopft." },
      { id: "wirtin", label: "Die Wirtin", x: 49, y: 61, title: "Eine freundliche Gastgeberin", text: "Ruhig und zuvorkommend spricht sie mit Billy. So wirken selbst die stillen Tiere im Zimmer beinahe selbstverständlich.", note: "Billy wird freundlich aufgenommen." }
    ]
  },
  {
    id: "guestbook",
    place: "Der Salon",
    title: "Das Gästebuch",
    chapter: "Zwei Namen",
    art: "book",
    alt: "Ein aufgeschlagenes Gästebuch auf einem Tisch.",
    intro: "Beim Eintragen sieht Billy, dass vor ihm nur wenige Gäste in dem Buch stehen.",
    summary: "Im Gästebuch entdeckt Billy Christopher Mulholland und Gregory Temple. Beide waren vor Jahren zu Gast.",
    hotspots: [
      { id: "gaestebuch", label: "Das Gästebuch", x: 50, y: 61, title: "Wenig Einträge", text: "Zwischen den Seiten liegen nur wenige Einträge. Die beiden Namen aus der Vergangenheit stechen sofort heraus.", note: "Im Gästebuch stehen nur wenige Namen." },
      { id: "namen", label: "Die Namen", x: 59, y: 70, title: "Christopher und Gregory", text: "Christopher Mulholland und Gregory Temple hatten beide in der Pension gewohnt. Über sie spricht die Gastgeberin, als seien sie noch in der Nähe.", note: "Christopher Mulholland und Gregory Temple waren frühere Gäste." },
      { id: "teetisch", label: "Der Teetisch", x: 23, y: 51, title: "Die Einladung zum Tee", text: "Die Gastgeberin bittet Billy, Platz zu nehmen. Sein Tee steht bereits bereit.", note: "Billy wird zum Tee eingeladen." }
    ]
  },
  {
    id: "tea",
    place: "Der Salon",
    title: "Die letzte Antwort",
    chapter: "Der Übergang",
    art: "tea",
    alt: "Ein Teetisch neben dem Sofa im stillen Salon.",
    intro: "Billy sitzt mit der Wirtin im Salon. Sie sagt, die beiden früheren Gäste seien noch da. Dann fragt Billy, ob es in den letzten Jahren weitere Gäste gab.",
    summary: "Nachdem Billy die ausgestopften Tiere und die früheren Gäste erkannt hat, antwortet sie: »Nein, mein Lieber. Nur Sie.« Das ist Dahls letzter Satz.",
    hotspots: [
      { id: "tasse", label: "Die Tasse", x: 49, y: 55, title: "Der Tee", text: "Billy trinkt den Tee. Er schmeckt leicht nach Bittermandeln. Dabei erwähnt sie, dass Mr. Mulholland früher ebenfalls sehr viel Tee getrunken habe.", note: "Billys Tee schmeckt leicht nach Bittermandeln." },
      { id: "sofa", label: "Billys Blick", x: 48, y: 47, title: "Die früheren Gäste", text: "Billy erfährt, dass Mr. Mulholland und Mr. Temple nie fortgegangen sind. Laut ihr seien sie noch im Haus, beide zusammen im vierten Stock. Billy blickt starr in die Ecke des Zimmers.", note: "Die früheren Gäste sind laut der Wirtin noch im Haus." },
      { id: "frage", label: "Die letzte Antwort", x: 79, y: 38, title: "Nur Sie", text: "Billy fragt, ob es außer den beiden früheren Gästen in den letzten zwei oder drei Jahren noch jemanden gegeben habe. Sie lächelt: »Nein, mein Lieber. Nur Sie.« Damit endet Dahls Geschichte. Dann gluckst Billy plötzlich leise und trocken. Die Porzellantasse gleitet aus seinen starren Fingern und schlägt auf meinem Teppich auf. Sein Körper sinkt im Sofa zusammen. Als ich meine Hand an seinen Hals lege, fühle ich keinen Puls mehr. Er ist tot.", note: "Dahls letzte Antwort geht ohne Zwischenszene in den ersten Satz der Fortsetzung über." }
    ]
  },
  {
    id: "mistake",
    place: "Die Küche",
    title: "Der Irrtum",
    chapter: "Der Irrtum",
    art: "kitchen",
    alt: "Eine dunkle Küche mit einer Medizinflasche neben einer Teetasse.",
    intro: "Ich sacke zusammen und weine. Dann kommt mir ein schrecklicher Gedanke. Hellwach eile ich in die Küche, um meine Brille zu holen.",
    summary: "Erst jetzt begreift sie, dass Billy tot ist. Beim Zubereiten des Tees hatte sie ihr gefährliches Medikament verwechselt.",
    hotspots: [
      { id: "brille", label: "Die Brille", x: 21, y: 64, title: "Ohne Brille", text: "Meine Brille liegt auf dem Küchentisch. Ich setze sie auf und schaue erschrocken zur Arbeitsfläche. Im Dunkeln hatte ich ohne Brille Tee mit meinem Medikament verwechselt.", note: "Meine Brille lag auf dem Küchentisch; ohne sie verwechselte ich Tee und Medikament." },
      { id: "medizin", label: "Das Medikament", x: 65, y: 56, title: "Ein gefährlicher Irrtum", text: "Das Medikament hatte ich am Tag zuvor aus der Apotheke geholt. Die nette Frau hinter dem Tresen hatte mich gewarnt, dass es bei falscher Einnahme sehr tödlich sei. Ich hatte meinen eigenen Tee mit dem Medikament verwechselt.", note: "Die Apothekerin hatte vor den tödlichen Folgen einer falschen Einnahme gewarnt." },
      { id: "fenster-kueche", label: "Die Hintertür", x: 21, y: 34, title: "Arthur kommt herein", text: "Ich winkte vom Küchenfenster aus hektisch nach draußen. Nach ein paar Minuten kam mein Nachbar Mr. Henderson durch die Hintertür. Als er Billy auf dem Sofa sah, fragte er: »Was hast du getan?« Ich rief aufgelöst: »Es war ein Unfall, Arthur! Ich hatte meine Brille nicht auf und den Tee mit meinem Medikament verwechselt!« Auch Arthur war kreidebleich. Er sagte sofort, dass wir auf keinen Fall die Polizei rufen dürften.", note: "Arthur kam durch die Hintertür. Er und ich beschlossen, nicht die Polizei zu rufen." }
    ]
  },
  {
    id: "cellar",
    place: "Im Haus",
    title: "Die Vergangenheit",
    chapter: "Die alten Gäste",
    art: "cellar",
    alt: "Eine steile Kellertreppe führt hinunter in einen dunklen Raum.",
    intro: "Arthur und ich durften die Polizei nicht rufen. Wenn in meinem Haus erneut eine Leiche gefunden würde, könnten die früheren Fälle wieder aufgerollt werden.",
    summary: "John und Arthur ermordeten wegen hoher Wettschulden zwei Gäste im Schlaf und stahlen ihre Wertsachen. John wurde als Täter verdächtigt und sitzt im Gefängnis; Arthur entkam knapp. Gemeinsam verstecken Arthur und die Wirtin Billy im Keller.",
    hotspots: [
      { id: "erinnerung", label: "Die Vergangenheit", x: 18, y: 39, title: "John und Arthur", text: "Arthur und mein Ehemann John hatten vor Jahren Christopher Mulholland und Gregory Temple gezielt umgebracht. Beim Pferderennen hatten sie riesige Wettschulden angehäuft und waren bedroht worden. Sie erstickten die beiden Gäste im Schlaf mit Kissen, stahlen ihre Uhren und Wertgegenstände und bezahlten damit ihre Schulden. Als die Polizei ihnen auf die Schliche kam, reichten die Beweise nur, um John als Täter zu verdächtigen. Er sitzt seitdem im Gefängnis; Arthur entkam damals nur knapp. Wenn nun wieder eine Leiche in meinem Haus gefunden würde, könnten die früheren Fälle auffliegen.", note: "John und Arthur ermordeten Christopher Mulholland und Gregory Temple wegen ihrer Wettschulden. John sitzt im Gefängnis; Arthur entkam knapp." },
      { id: "treppe", label: "Die Kellertreppe", x: 67, y: 55, title: "Billy verschwindet", text: "»Wir müssen ihn hier wegschaffen. Legen wir ihn erst einmal in den Keller, bis wir eine Lösung finden!«, sagte Arthur. Zusammen packten wir Billys Leiche und trugen sie über die knarrenden Stufen hinunter.", note: "Arthur und ich versteckten Billys Leiche im Keller." },
      { id: "uhr", label: "Drei Tage später", x: 91, y: 14, title: "Es klopft an der Haustür", text: "Drei Tage später kam Arthur zurück, um alles vorzubereiten und die Leiche loszuwerden. Plötzlich klopfte es heftig an der Haustür.", note: "Drei Tage später kehrte Arthur zurück. Dann klopfte es an der Haustür." }
    ]
  },
  {
    id: "arrival",
    place: "Die Haustür",
    title: "Besuch aus der Vergangenheit",
    chapter: "Die Suche nach Billy",
    art: "door",
    alt: "Billys Vater und zwei uniformierte Beamte stehen vor der Haustür.",
    intro: "Als ich die Tür öffnete, stand ein Mann vor mir, der Mr. Weaver ähnlich sah. Neben ihm warteten zwei Männer in Uniform. Sie suchten Billy; ein Nachbar hatte gesehen, wie er meine Pension betrat.",
    summary: "Billys Vater kommt mit zwei uniformierten Beamten. Während sie die Wirtin befragen, wird Arthur aus dem Keller geholt; ein Beamter trägt Billys Leiche herauf.",
    hotspots: [
      { id: "inspektor", label: "Der Inspektor", x: 73, y: 37, title: "Die Suche", text: "»Guten Tag, Madam. Wir suchen meinen Sohn, Billy Weaver. Seine Spur führt uns hierher nach Bath. Ein Nachbar sagte, er habe Billy bei Ihnen eintreten sehen. Darf ich Sie bitten, dass ich und meine zwei Beamten Ihnen ein paar Fragen stellen?«", note: "Billys Vater suchte mit zwei Beamten nach seinem Sohn." },
      { id: "arthur", label: "Arthur im Keller", x: 51, y: 58, title: "Entdeckt", text: "Bevor ich etwas sagen konnte, drängten sich die Beamten an mir vorbei in den Flur. Ein Beamter rief aus dem Keller. Arthur, der sich dort versteckt hatte, wurde nach oben gezerrt. Hinter ihm trug ein weiterer Beamter Billys leblosen Körper herauf.", note: "Arthur wurde aus dem Keller geholt; ein Beamter brachte Billys Leiche herauf." },
      { id: "festnahme", label: "Die Anschuldigung", x: 79, y: 56, title: "Wegen Mordes", text: "Nach ein paar Sekunden vielsagender Stille schrie der Inspektor mit Tränen in den Augen: »Sie sind beide festgenommen wegen Mordes!«", note: "Der Inspektor nahm Arthur und mich wegen Mordes fest." }
    ]
  },
  {
    id: "shot",
    place: "Vor der Pension",
    title: "Der letzte Knall",
    chapter: "Der Schluss",
    art: "ending",
    alt: "Eine Menge sammelt sich vor der Pension; der Inspektor hebt seine Dienstwaffe.",
    intro: "Sie führten uns hinaus. Ein Polizeiwagen und Schaulustige warteten dort. Als Arthur seine Frau erblickte, verlor er die Fassung.",
    summary: "Arthur wird erschossen. Der Inspektor richtet seine Waffe auf die Wirtin und schießt. Der Schuss trifft sie; sie stirbt.",
    hotspots: [
      { id: "arthur-flucht", label: "Arthurs Flucht", x: 48, y: 80, title: "Ein Fluchtversuch", text: "Als Arthur seine Frau erblickte, riss er sich los und wollte fliehen. Was genau geschah, erkannte ich nicht; alles spielte sich zu schnell ab. Plötzlich fiel ein Schuss. Ich sah, wie Arthur getroffen zusammenbrach und leblos auf dem Kopfsteinpflaster liegen blieb.", note: "Arthur flieht, wird getroffen und bleibt leblos auf dem Pflaster liegen." },
      { id: "inspektor-waffe", label: "Der Inspektor", x: 74, y: 42, title: "Der letzte Augenblick", text: "Ich drehte den Kopf und sah in die tränenverquollenen Augen des Inspektors. In ihnen erkannte ich nur noch puren Wahnsinn. Er hielt seine Dienstwaffe in der Hand, hob den Arm und zielte direkt auf meinen Kopf. Dann fiel der Schuss. Er traf mich, und ich starb.", note: "Der Inspektor schießt. Die Kugel trifft sie tödlich." }
    ]
  }
];

const storageKey = "die-wirtin-spielstand";
const knownSceneIds = new Set(scenes.map((scene) => scene.id));
const knownClueKeys = new Set(scenes.flatMap((scene) =>
  scene.hotspots.map((clue) => `${scene.id}:${clue.id}`)
));
const canvas = document.querySelector("#scene-art");
const context = canvas.getContext("2d");
const sceneFrame = document.querySelector("#scene-frame");
const hotspotsElement = document.querySelector("#hotspots");
const sceneTitle = document.querySelector("#scene-title");
const locationLabel = document.querySelector("#location-label");
const sceneCount = document.querySelector("#scene-count");
const sceneHint = document.querySelector("#scene-hint");
const sceneInfoTitle = document.querySelector("#scene-info-title");
const sceneInfoText = document.querySelector("#scene-info-text");
const sceneKicker = document.querySelector("#scene-kicker");
const storyCopy = document.querySelector("#story-copy");
const clueList = document.querySelector("#clue-list");
const progressBar = document.querySelector("#story-progress");
const progressHint = document.querySelector("#progress-hint");
const nextButton = document.querySelector("#next-button");
const backButton = document.querySelector("#back-button");
const journalButton = document.querySelector("#journal-button");
const journalPanel = document.querySelector("#journal-panel");
const journalContent = document.querySelector("#journal-content");
const noteCount = document.querySelector("#note-count");
const mapButton = document.querySelector("#map-button");
const mapPanel = document.querySelector("#map-panel");
const mapRoute = document.querySelector("#map-route");

let currentScene = 0;
let selectedTab = "clues";
let foundClues = new Set();
let visitedScenes = new Set();
let completedScenes = new Set();

// Für die ersten beiden Szenen liegen eigene Bilddateien im images-Ordner.
const sceneImages = {
  street: loadSceneImage("images/strasseSceneBild.jpeg", "street"),
  parlor: loadSceneImage("images/salonSceneBild.jpeg", "parlor")
};

function loadSceneImage(source, kind) {
  const image = new Image();
  image.addEventListener("load", () => {
    if (scenes[currentScene].art === kind) drawScene(kind);
  });
  image.src = source;
  return image;
}

// Ein gespeicherter Spielstand lässt sich auch löschen, wenn noch nichts gespeichert wurde.
function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved) return;

    const savedScene = Number(saved.currentScene);
    currentScene = Number.isInteger(savedScene)
      ? Math.max(0, Math.min(savedScene, scenes.length - 1))
      : 0;
    foundClues = new Set((Array.isArray(saved.foundClues) ? saved.foundClues : [])
      .filter((key) => knownClueKeys.has(key)));
    visitedScenes = new Set((Array.isArray(saved.visitedScenes) ? saved.visitedScenes : [])
      .filter((id) => knownSceneIds.has(id)));
    completedScenes = new Set((Array.isArray(saved.completedScenes) ? saved.completedScenes : [])
      .filter((id) => knownSceneIds.has(id)));
  } catch {
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // Das Spiel bleibt auch ohne Browser-Speicher spielbar.
    }
  }
}

function saveProgress() {
  const saved = {
    currentScene,
    foundClues: [...foundClues],
    visitedScenes: [...visitedScenes],
    completedScenes: [...completedScenes]
  };

  try {
    localStorage.setItem(storageKey, JSON.stringify(saved));
  } catch {
    // Das Spiel bleibt spielbar, falls der Browser das Speichern verhindert.
  }
}

function clueKey(scene, clue) {
  return `${scene.id}:${clue.id}`;
}

function renderScene() {
  const scene = scenes[currentScene];
  visitedScenes.add(scene.id);
  saveProgress();

  sceneTitle.textContent = scene.title;
  locationLabel.textContent = scene.place;
  sceneKicker.textContent = scene.chapter;
  sceneHint.textContent = "Klicke auf den markierten Punkt. Danach erscheint der nächste Hinweis.";
  sceneInfoTitle.textContent = "Zur Szene";
  sceneInfoText.textContent = scene.intro;
  canvas.setAttribute("aria-label", scene.alt);
  sceneCount.textContent = `${currentScene + 1} von ${scenes.length}`;
  progressBar.value = completedScenes.size;
  storyCopy.innerHTML = `<p>${scene.intro}</p>`;
  drawScene(scene.art);
  renderHotspots(scene);
  renderClueList(scene);
  renderSceneDots();
  renderMap();
  renderJournal();
  updateNavigation(scene);
}

function renderHotspots(scene) {
  hotspotsElement.replaceChildren();

  const nextClue = scene.hotspots.find((clue) => !foundClues.has(clueKey(scene, clue)));
  if (!nextClue) {
    sceneHint.textContent = "Alle Hinweise dieser Szene sind gefunden.";
    return;
  }

  sceneHint.textContent = "Klicke auf den markierten Punkt, um die Geschichte fortzusetzen.";
  const button = document.createElement("button");
  button.className = "hotspot";
  button.type = "button";
  button.style.left = `${nextClue.x}%`;
  button.style.top = `${nextClue.y}%`;
  button.setAttribute("aria-label", `${nextClue.label} untersuchen`);
  button.setAttribute("aria-pressed", "false");
  button.innerHTML = '<span class="hotspot-marker" aria-hidden="true"></span>'
    + `<span class="hotspot-label">${nextClue.label}</span>`;
  button.addEventListener("click", () => inspectClue(scene, nextClue));
  hotspotsElement.append(button);
}

function inspectClue(scene, clue) {
  foundClues.add(clueKey(scene, clue));
  saveProgress();

  sceneInfoTitle.textContent = clue.title;
  sceneInfoText.textContent = clue.text;
  renderHotspots(scene);
  renderClueList(scene);
  renderJournal();
  updateNavigation(scene);
}

function renderClueList(scene) {
  const foundHere = scene.hotspots.filter((clue) => foundClues.has(clueKey(scene, clue)));
  clueList.replaceChildren();

  if (foundHere.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-note";
    empty.textContent = "Noch nichts entdeckt.";
    clueList.append(empty);
    return;
  }

  foundHere.forEach((clue) => {
    const item = document.createElement("li");
    item.textContent = clue.note;
    clueList.append(item);
  });
}

function updateNavigation(scene) {
  const finished = scene.hotspots.every((clue) => foundClues.has(clueKey(scene, clue)));
  if (finished && !completedScenes.has(scene.id)) {
    completedScenes.add(scene.id);
    saveProgress();
    renderJournal();
  }
  progressBar.value = completedScenes.size;
  nextButton.disabled = !finished || currentScene === scenes.length - 1;
  backButton.disabled = currentScene === 0;

  if (currentScene === scenes.length - 1 && finished) {
    progressHint.textContent = "Du hast den Schluss erreicht.";
    nextButton.textContent = "Am Ende";
  } else if (finished) {
    progressHint.textContent = "Alle Hinweise gefunden. Du kannst weitergehen.";
    nextButton.textContent = "Weiter";
  } else {
    const missing = scene.hotspots.filter((clue) => !foundClues.has(clueKey(scene, clue))).length;
    progressHint.textContent = `Noch ${missing} ${missing === 1 ? "Hinweis" : "Hinweise"} in dieser Szene.`;
    nextButton.textContent = "Weiter";
  }
}

function renderSceneDots() {
  const dots = document.querySelector("#scene-dots");
  dots.replaceChildren();

  scenes.forEach((scene, index) => {
    const dot = document.createElement("span");
    dot.className = "scene-dot";
    if (index === currentScene) dot.classList.add("is-current");
    else if (visitedScenes.has(scene.id)) dot.classList.add("is-complete");
    dot.setAttribute("aria-hidden", "true");
    dots.append(dot);
  });
}

function renderMap() {
  mapRoute.replaceChildren();
  scenes.forEach((scene, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    const isVisited = visitedScenes.has(scene.id);
    button.type = "button";
    button.className = "map-stop";
    button.disabled = !isVisited;
    button.setAttribute("aria-current", index === currentScene ? "step" : "false");
    button.innerHTML = `<span class="map-stop-number">${isVisited ? String(index + 1).padStart(2, "0") : "—"}</span>`
      + `<span class="map-stop-copy"><strong>${isVisited ? scene.title : "Noch nicht entdeckt"}</strong>`
      + `<span>${isVisited ? scene.place : ""}</span></span>`
      + `<span class="map-stop-state">${index === currentScene ? "Hier" : isVisited ? "Ansehen" : "Verschlossen"}</span>`;
    button.addEventListener("click", () => {
      currentScene = index;
      setMapOpen(false);
      renderScene();
      sceneTitle.focus({ preventScroll: true });
    });
    item.append(button);
    mapRoute.append(item);
  });
}

function setMapOpen(open) {
  mapPanel.hidden = !open;
  mapButton.setAttribute("aria-expanded", String(open));
  if (open) {
    journalPanel.hidden = true;
    journalButton.setAttribute("aria-expanded", "false");
    mapPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    mapPanel.querySelector(".map-stop:not(:disabled)")?.focus({ preventScroll: true });
  } else {
    mapButton.focus();
  }
}

function toggleMap() {
  setMapOpen(mapPanel.hidden);
}

function openJournal() {
  const opening = journalPanel.hidden;
  journalPanel.hidden = !opening;
  journalButton.setAttribute("aria-expanded", String(opening));

  if (opening) {
    mapPanel.hidden = true;
    mapButton.setAttribute("aria-expanded", "false");
    journalPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    journalContent.focus({ preventScroll: true });
  } else {
    journalButton.focus();
  }
}

function renderJournal() {
  const count = foundClues.size;
  noteCount.textContent = count;

  if (selectedTab === "clues") {
    const entries = [];
    scenes.forEach((scene) => {
      scene.hotspots.forEach((clue) => {
        if (foundClues.has(clueKey(scene, clue))) {
          entries.push({ heading: scene.title, text: clue.note });
        }
      });
    });

    journalContent.innerHTML = entries.length
      ? entries.map((entry) => `<article class="journal-entry"><h3>${entry.heading}</h3><p>${entry.text}</p></article>`).join("")
      : '<p class="journal-empty">Noch keine Spuren. Untersuche einen Gegenstand in der Szene.</p>';
    return;
  }

  const chapters = scenes.filter((scene) => completedScenes.has(scene.id));
  journalContent.innerHTML = chapters.length
    ? chapters.map((scene) => `<article class="journal-entry"><h3>${scene.title}</h3><p>${scene.summary}</p></article>`).join("")
    : '<p class="journal-empty">Die Geschichte beginnt, sobald du das Spiel startest.</p>';
}

function changeTab(tab) {
  selectedTab = tab;
  document.querySelectorAll(".journal-tab").forEach((button) => {
    const active = button.dataset.tab === tab;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderJournal();
}

function nextScene() {
  if (currentScene < scenes.length - 1) {
    const isStoryHandoff = currentScene === 3;
    currentScene += 1;
    renderScene();
    sceneTitle.focus({ preventScroll: true });

    if (isStoryHandoff) {
      sceneFrame.classList.remove("is-story-turning");
      void sceneFrame.offsetWidth;
      sceneFrame.classList.add("is-story-turning");
    }
  }
}

function previousScene() {
  if (currentScene > 0) {
    currentScene -= 1;
    renderScene();
    sceneTitle.focus({ preventScroll: true });
  }
}

function restartGame() {
  if (foundClues.size > 0 && !window.confirm("Den bisherigen Fortschritt wirklich löschen und von vorn beginnen?")) {
    return;
  }

  currentScene = 0;
  foundClues = new Set();
  visitedScenes = new Set();
  completedScenes = new Set();
  selectedTab = "clues";
  journalPanel.hidden = true;
  journalButton.setAttribute("aria-expanded", "false");
  mapPanel.hidden = true;
  mapButton.setAttribute("aria-expanded", "false");
  try {
    localStorage.removeItem(storageKey);
  } catch {
    // Ein Neustart funktioniert auch ohne Browser-Speicher.
  }
  renderScene();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Die ersten beiden Szenen nutzen Bilddateien; die übrigen Hintergründe bleiben Canvas-Zeichnungen.
function drawScene(kind) {
  const width = 1200;
  const height = 675;
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = width * scale;
  canvas.height = height * scale;
  context.setTransform(scale, 0, 0, scale, 0, 0);
  context.clearRect(0, 0, width, height);

  const sceneImage = sceneImages[kind];
  if (sceneImage?.complete && sceneImage.naturalWidth > 0) {
    context.drawImage(sceneImage, 0, 0, width, height);
    return;
  }

  const painters = {
    street: drawStreet,
    parlor: drawParlor,
    book: drawGuestbook,
    tea: drawTeaRoom,
    kitchen: drawKitchen,
    cellar: drawCellar,
    door: drawDoorstep,
    ending: drawEnding
  };

  (painters[kind] || drawStreet)(context);
  drawPaperSpecks(context, width, height, kind.length * 119);
  drawFrame(context, width, height);
}

function rectangle(ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function ellipse(ctx, x, y, radiusX, radiusY, color) {
  ctx.beginPath();
  ctx.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function line(ctx, x1, y1, x2, y2, color, thickness = 5) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = thickness;
  ctx.lineCap = "round";
  ctx.stroke();
}

function drawFrame(ctx, width, height) {
  ctx.strokeStyle = "rgba(240, 224, 189, 0.65)";
  ctx.lineWidth = 3;
  ctx.strokeRect(17, 17, width - 34, height - 34);
  ctx.strokeStyle = "rgba(30, 23, 17, 0.65)";
  ctx.lineWidth = 1;
  ctx.strokeRect(27, 27, width - 54, height - 54);
}

function drawPaperSpecks(ctx, width, height, seed) {
  let value = seed;
  for (let index = 0; index < 180; index += 1) {
    value = (value * 16807) % 2147483647;
    const x = (value / 2147483647) * width;
    value = (value * 16807) % 2147483647;
    const y = (value / 2147483647) * height;
    ctx.fillStyle = index % 3 === 0 ? "rgba(238, 219, 174, .10)" : "rgba(14, 20, 17, .10)";
    ctx.fillRect(x, y, 2, 2);
  }
}

function drawStreet(ctx) {
  rectangle(ctx, 0, 0, 1200, 675, "#243532");
  rectangle(ctx, 0, 0, 1200, 360, "#293b3a");
  ellipse(ctx, 972, 116, 54, 54, "#e1c889");
  for (let index = 0; index < 8; index += 1) {
    ellipse(ctx, 115 + index * 135, 92 + (index % 3) * 19, 2, 2, "#ead9ae");
  }
  rectangle(ctx, 104, 206, 1002, 338, "#7a6952");
  ctx.beginPath();
  ctx.moveTo(70, 220); ctx.lineTo(248, 121); ctx.lineTo(1120, 121); ctx.lineTo(1120, 220); ctx.closePath();
  ctx.fillStyle = "#3b4943"; ctx.fill();
  rectangle(ctx, 140, 260, 198, 178, "#d2b78a");
  rectangle(ctx, 366, 260, 198, 178, "#d2b78a");
  rectangle(ctx, 164, 282, 151, 124, "#d6c994");
  rectangle(ctx, 391, 282, 147, 124, "#d6c994");
  line(ctx, 239, 282, 239, 406, "#685c45", 8);
  line(ctx, 465, 282, 465, 406, "#685c45", 8);
  rectangle(ctx, 702, 210, 254, 334, "#584b3b");
  rectangle(ctx, 723, 235, 211, 100, "#d9c68e");
  rectangle(ctx, 748, 254, 161, 57, "#4b4638");
  ctx.fillStyle = "#e2c578";
  ctx.font = "600 28px Georgia";
  ctx.textAlign = "center";
  ctx.fillText("BED & BREAKFAST", 828, 291);
  rectangle(ctx, 758, 352, 146, 192, "#302f29");
  rectangle(ctx, 0, 544, 1200, 131, "#272d2b");
  line(ctx, 0, 585, 1200, 618, "#68604e", 4);
  line(ctx, 0, 640, 1200, 655, "#46473f", 3);
}

function drawParlorBase(ctx) {
  rectangle(ctx, 0, 0, 1200, 675, "#344742");
  rectangle(ctx, 0, 0, 1200, 455, "#47584d");
  rectangle(ctx, 0, 455, 1200, 220, "#604b38");
  for (let index = 0; index < 9; index += 1) {
    line(ctx, 0, 478 + index * 23, 1200, 492 + index * 22, "rgba(34, 29, 24, .34)", 3);
  }
  rectangle(ctx, 103, 83, 259, 271, "#282d2a");
  rectangle(ctx, 119, 99, 227, 238, "#203333");
  line(ctx, 231, 100, 231, 338, "#766a50", 8);
  line(ctx, 120, 221, 345, 221, "#766a50", 8);
  rectangle(ctx, 790, 267, 258, 240, "#62503c");
  rectangle(ctx, 814, 288, 212, 186, "#252623");
  rectangle(ctx, 855, 363, 132, 111, "#cf9a52");
  ellipse(ctx, 921, 394, 49, 39, "#dfa756");
  rectangle(ctx, 194, 425, 649, 113, "#674c3b");
  ellipse(ctx, 518, 422, 323, 61, "#785844");
  rectangle(ctx, 246, 391, 535, 79, "#806148");
  rectangle(ctx, 280, 452, 47, 109, "#493b30");
  rectangle(ctx, 702, 452, 47, 109, "#493b30");
  ellipse(ctx, 565, 572, 342, 61, "#8c5940");
  ellipse(ctx, 565, 572, 300, 43, "#b07c53");
}

function drawBird(ctx, x, y) {
  line(ctx, x - 27, y + 36, x + 31, y + 36, "#bd9c63", 5);
  ellipse(ctx, x, y, 28, 36, "#877447");
  ellipse(ctx, x + 18, y - 25, 18, 17, "#b09a5d");
  ctx.beginPath(); ctx.moveTo(x + 31, y - 28); ctx.lineTo(x + 48, y - 22); ctx.lineTo(x + 30, y - 17); ctx.closePath();
  ctx.fillStyle = "#b2603a"; ctx.fill();
  ellipse(ctx, x + 22, y - 29, 3, 3, "#181d1a");
  line(ctx, x - 8, y + 30, x - 13, y + 40, "#d0a25d", 3);
  line(ctx, x + 8, y + 30, x + 13, y + 40, "#d0a25d", 3);
}

function drawDog(ctx, x, y) {
  ellipse(ctx, x, y, 76, 30, "#72563f");
  ellipse(ctx, x - 69, y - 7, 37, 27, "#846344");
  ellipse(ctx, x - 85, y - 23, 14, 22, "#483e32");
  ellipse(ctx, x - 78, y - 14, 4, 4, "#171a17");
  ellipse(ctx, x + 43, y + 18, 18, 24, "#72563f");
  line(ctx, x - 30, y + 17, x - 34, y + 45, "#443a2f", 8);
  line(ctx, x + 4, y + 15, x + 4, y + 45, "#443a2f", 8);
  line(ctx, x + 62, y - 4, x + 77, y - 22, "#72563f", 7);
}

function drawParlor(ctx) {
  drawParlorBase(ctx);
  rectangle(ctx, 82, 174, 2, 2, "#d1bd8d");
  rectangle(ctx, 135, 124, 192, 2, "#95835e");
  drawBird(ctx, 247, 180);
  drawDog(ctx, 918, 540);
  rectangle(ctx, 856, 563, 129, 16, "#483d31");
  ellipse(ctx, 583, 344, 50, 57, "#d1b48a");
  rectangle(ctx, 529, 398, 108, 95, "#394a42");
  ellipse(ctx, 577, 310, 53, 61, "#b99468");
  line(ctx, 577, 337, 559, 342, "#493b2e", 3);
  line(ctx, 580, 351, 600, 349, "#493b2e", 3);
  rectangle(ctx, 963, 177, 76, 86, "#ab8a59");
  rectangle(ctx, 975, 189, 52, 62, "#37453e");
  ellipse(ctx, 1001, 213, 16, 21, "#ad8e59");
  drawPerson(ctx, 642, 363, "#827353", "#40382c");
}

function drawGuestbook(ctx) {
  drawParlorBase(ctx);
  rectangle(ctx, 182, 472, 835, 104, "#4a3d30");
  rectangle(ctx, 218, 562, 45, 82, "#352e27");
  rectangle(ctx, 938, 562, 45, 82, "#352e27");
  ctx.save();
  ctx.translate(600, 411);
  ctx.rotate(-0.035);
  ctx.fillStyle = "#d9c7a4";
  ctx.fillRect(-264, -157, 528, 302);
  ctx.fillStyle = "#c5ac7e";
  ctx.fillRect(-6, -157, 12, 302);
  line(ctx, -224, -92, -52, -92, "#756348", 3);
  line(ctx, -224, -45, -67, -45, "#756348", 3);
  line(ctx, -224, 3, -87, 3, "#756348", 3);
  line(ctx, 50, -92, 219, -92, "#756348", 3);
  line(ctx, 50, -45, 207, -45, "#756348", 3);
  line(ctx, 50, 3, 189, 3, "#756348", 3);
  ctx.fillStyle = "#443d32";
  ctx.font = "italic 23px Georgia";
  ctx.fillText("C. Mulholland", -211, 63);
  ctx.fillText("G. Temple", 54, 63);
  ctx.restore();
  ellipse(ctx, 276, 340, 38, 12, "#b89860");
  rectangle(ctx, 238, 332, 76, 9, "#8c7048");
}

function drawTeaRoom(ctx) {
  drawParlorBase(ctx);
  drawBird(ctx, 239, 180);
  drawDog(ctx, 917, 539);
  rectangle(ctx, 437, 429, 335, 47, "#504236");
  rectangle(ctx, 455, 475, 26, 92, "#40372f");
  rectangle(ctx, 727, 475, 26, 92, "#40372f");
  ellipse(ctx, 593, 427, 159, 29, "#9c7b54");
  ellipse(ctx, 591, 405, 44, 22, "#e1d3b6");
  rectangle(ctx, 550, 374, 81, 31, "#f0e6d2");
  ellipse(ctx, 590, 374, 40, 12, "#eee5d0");
  ellipse(ctx, 591, 374, 23, 7, "#6c4a35");
  ctx.beginPath(); ctx.arc(636, 388, 17, -1.5, 1.5); ctx.strokeStyle = "#e4d7c0"; ctx.lineWidth = 9; ctx.stroke();
  line(ctx, 485, 355, 399, 319, "#bb9a72", 24);
  ellipse(ctx, 391, 315, 17, 17, "#d0ad7d");
  drawPerson(ctx, 938, 363, "#827353", "#40382c");
}

function drawKitchen(ctx) {
  rectangle(ctx, 0, 0, 1200, 675, "#2e3a35");
  rectangle(ctx, 0, 0, 1200, 454, "#4e594d");
  rectangle(ctx, 0, 454, 1200, 221, "#493d32");
  rectangle(ctx, 95, 89, 318, 262, "#25322e");
  rectangle(ctx, 112, 106, 284, 226, "#728072");
  line(ctx, 255, 106, 255, 332, "#3f4a42", 8);
  rectangle(ctx, 485, 180, 580, 280, "#64533d");
  rectangle(ctx, 502, 201, 546, 223, "#29332f");
  line(ctx, 682, 203, 682, 424, "#857450", 7);
  line(ctx, 877, 203, 877, 424, "#857450", 7);
  rectangle(ctx, 83, 442, 1030, 39, "#ba9a68");
  rectangle(ctx, 117, 480, 967, 126, "#43392f");
  rectangle(ctx, 112, 408, 350, 18, "#8c7048");
  rectangle(ctx, 126, 426, 17, 83, "#574735");
  rectangle(ctx, 431, 426, 17, 83, "#574735");
  rectangle(ctx, 741, 328, 88, 111, "#997a4e");
  rectangle(ctx, 755, 346, 60, 75, "#d8c9a2");
  rectangle(ctx, 875, 384, 77, 54, "#d7c9a4");
  ellipse(ctx, 914, 384, 39, 12, "#eee0c5");
  ctx.beginPath();
  ctx.ellipse(225, 398, 17, 12, 0, 0, Math.PI * 2);
  ctx.ellipse(265, 398, 17, 12, 0, 0, Math.PI * 2);
  ctx.strokeStyle = "#e4d6bb";
  ctx.lineWidth = 4;
  ctx.stroke();
  line(ctx, 242, 397, 248, 397, "#e4d6bb", 4);
  line(ctx, 207, 395, 194, 391, "#e4d6bb", 3);
  line(ctx, 281, 395, 294, 391, "#e4d6bb", 3);
  rectangle(ctx, 0, 607, 1200, 68, "#302c27");
}

function drawCellar(ctx) {
  rectangle(ctx, 0, 0, 1200, 675, "#24312e");
  rectangle(ctx, 0, 0, 1200, 675, "#41453d");
  for (let row = 0; row < 6; row += 1) {
    const offset = row % 2 === 0 ? 0 : 75;
    for (let col = -1; col < 9; col += 1) {
      ctx.strokeStyle = "rgba(198, 179, 139, .24)";
      ctx.lineWidth = 4;
      ctx.strokeRect(col * 150 + offset, row * 112, 150, 112);
    }
  }
  rectangle(ctx, 759, 55, 317, 483, "#2b302b");
  for (let step = 0; step < 7; step += 1) {
    ctx.beginPath();
    ctx.moveTo(713 - step * 35, 134 + step * 57);
    ctx.lineTo(1090, 134 + step * 57);
    ctx.lineTo(1090, 164 + step * 57);
    ctx.lineTo(713 - step * 35, 164 + step * 57);
    ctx.closePath();
    ctx.fillStyle = step % 2 === 0 ? "#76634b" : "#5e513f";
    ctx.fill();
  }
  ellipse(ctx, 450, 555, 231, 46, "#282b27");
  ctx.beginPath();
  ctx.moveTo(274, 527); ctx.quadraticCurveTo(426, 471, 615, 530); ctx.lineTo(650, 572); ctx.lineTo(258, 572); ctx.closePath();
  ctx.fillStyle = "#c8baa0"; ctx.fill();
  ellipse(ctx, 443, 516, 62, 28, "#d7cbb4");
  line(ctx, 318, 541, 584, 541, "#867c68", 3);
  line(ctx, 105, 355, 343, 337, "rgba(204, 190, 157, .22)", 2);
  line(ctx, 865, 570, 1090, 556, "rgba(204, 190, 157, .18)", 2);
}

function drawDoorstep(ctx) {
  rectangle(ctx, 0, 0, 1200, 675, "#34423b");
  rectangle(ctx, 0, 0, 1200, 675, "#596454");
  rectangle(ctx, 0, 484, 1200, 191, "#4a4336");
  rectangle(ctx, 0, 90, 1200, 394, "#796a52");
  rectangle(ctx, 378, 73, 438, 501, "#483f32");
  rectangle(ctx, 405, 104, 383, 470, "#2e3731");
  rectangle(ctx, 457, 171, 278, 183, "#bba577");
  rectangle(ctx, 476, 191, 239, 144, "#29332e");
  ellipse(ctx, 702, 389, 13, 13, "#d0ae69");
  drawPerson(ctx, 205, 352, "#c1b08c", "#544f42");
  drawPerson(ctx, 604, 398, "#5b4a38", "#2d2c26");
  ctx.beginPath();
  ctx.moveTo(620, 329); ctx.quadraticCurveTo(681, 309, 734, 341);
  ctx.lineTo(773, 373); ctx.quadraticCurveTo(735, 407, 659, 386);
  ctx.lineTo(618, 361); ctx.closePath();
  ctx.fillStyle = "#c6baa1"; ctx.fill();
  line(ctx, 651, 351, 728, 364, "#8a7e69", 3);
  drawPerson(ctx, 880, 354, "#38443e", "#23302c");
  drawPerson(ctx, 1010, 354, "#3b4740", "#252f2b");
  line(ctx, 0, 601, 1200, 599, "#887b61", 3);
}

function drawPerson(ctx, x, y, coat, shadow) {
  ellipse(ctx, x, y - 113, 34, 40, "#c2a17a");
  ctx.beginPath();
  ctx.moveTo(x - 52, y - 71); ctx.lineTo(x + 52, y - 71); ctx.lineTo(x + 68, y + 93); ctx.lineTo(x - 69, y + 93); ctx.closePath();
  ctx.fillStyle = coat; ctx.fill();
  line(ctx, x - 34, y + 79, x - 39, y + 135, shadow, 16);
  line(ctx, x + 35, y + 79, x + 39, y + 135, shadow, 16);
  line(ctx, x - 48, y - 47, x - 89, y + 19, coat, 17);
  line(ctx, x + 48, y - 47, x + 84, y + 12, coat, 17);
}

function drawEnding(ctx) {
  rectangle(ctx, 0, 0, 1200, 675, "#293937");
  rectangle(ctx, 0, 0, 1200, 370, "#3d4a43");
  rectangle(ctx, 0, 370, 1200, 305, "#554636");
  rectangle(ctx, 108, 173, 370, 296, "#65523d");
  rectangle(ctx, 143, 211, 298, 258, "#28312c");
  rectangle(ctx, 183, 245, 218, 87, "#b49b6d");
  rectangle(ctx, 199, 261, 185, 55, "#30372f");
  rectangle(ctx, 73, 467, 306, 96, "#45534c");
  rectangle(ctx, 112, 431, 211, 58, "#45534c");
  rectangle(ctx, 135, 439, 73, 39, "#859083");
  rectangle(ctx, 219, 439, 80, 39, "#859083");
  ellipse(ctx, 133, 562, 30, 30, "#252a27");
  ellipse(ctx, 319, 562, 30, 30, "#252a27");
  for (let index = 0; index < 9; index += 1) {
    const x = 76 + index * 129;
    ellipse(ctx, x, 412 + (index % 2) * 12, 31, 33, "#312e28");
    line(ctx, x, 441, x, 538, "#38332b", 33);
  }
  drawPerson(ctx, 460, 375, "#8a7662", "#352f29");
  drawPerson(ctx, 742, 375, "#293630", "#222a27");
  ellipse(ctx, 578, 560, 130, 26, "#292b27");
  line(ctx, 747, 346, 828, 308, "#252b27", 11);
  line(ctx, 818, 308, 900, 281, "#ccb990", 4);
  ellipse(ctx, 923, 274, 12, 12, "#d7c18c");
}

document.querySelector("#next-button").addEventListener("click", nextScene);
document.querySelector("#back-button").addEventListener("click", previousScene);
document.querySelector("#journal-button").addEventListener("click", openJournal);
document.querySelector("#close-journal").addEventListener("click", openJournal);
mapButton.addEventListener("click", toggleMap);
document.querySelector("#close-map").addEventListener("click", () => setMapOpen(false));
document.querySelector("#restart-button").addEventListener("click", restartGame);
sceneFrame.addEventListener("animationend", () => {
  sceneFrame.classList.remove("is-story-turning");
});
document.querySelectorAll(".journal-tab").forEach((button) => {
  button.addEventListener("click", () => changeTab(button.dataset.tab));
});
window.addEventListener("resize", () => drawScene(scenes[currentScene].art));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !journalPanel.hidden) openJournal();
  else if (event.key === "Escape" && !mapPanel.hidden) setMapOpen(false);
});

loadProgress();
renderScene();
