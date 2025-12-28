// Image naming convention: /cards/01.jpg ... /cards/54.jpg
// If you prefer png, change .jpg to .png here.
const cards = Array.from({ length: 54 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `cards/${n}.jpg`;
});

const stackEl = document.getElementById("stack");

function renderStack() {
  stackEl.innerHTML = "";

  const remaining = cards.length - used.size;

  // show up to 5 layers for performance/clarity
  const layers = Math.min(remaining, 5);

  for (let i = layers; i > 0; i--) {
    const div = document.createElement("div");
    div.className = "stack-card";
    stackEl.appendChild(div);
  }
}


let used = new Set();
let current = null;

let timerId = null;
let isRunning = false;

const cardImg = document.getElementById("cardImg");
const placeholder = document.getElementById("placeholder");

const countText = document.getElementById("countText");
const statusText = document.getElementById("statusText");

const startPauseBtn = document.getElementById("startPauseBtn");
const drawBtn = document.getElementById("drawBtn");
const resetBtn = document.getElementById("resetBtn");

const intervalRange = document.getElementById("intervalRange");
const intervalLabel = document.getElementById("intervalLabel");

function updateUI() {
  countText.textContent = `${used.size} / ${cards.length} drawn`;
  statusText.textContent = isRunning ? "Running" : "Paused";

  if (current) {
    placeholder.style.display = "none";
    cardImg.style.display = "block";
    cardImg.src = current;
  } else {
    placeholder.style.display = "block";
    cardImg.style.display = "none";
    cardImg.removeAttribute("src");
  }

  startPauseBtn.textContent = isRunning ? "Pause" : "Start";
}

function remainingCards() {
  return cards.filter(c => !used.has(c));
}

function drawNext() {
  const remaining = remainingCards();
  if (remaining.length === 0) {
    stopTimer();
    alert("All cards have been drawn!");
    return;
  }
  const next = remaining[Math.floor(Math.random() * remaining.length)];
  used.add(next);
  current = next;

speak(nameForCardPath(next));

  updateUI();
}

function startTimer() {
  stopTimer();
  isRunning = true;

  const seconds = parseFloat(intervalRange.value);
  timerId = setInterval(drawNext, seconds * 1000);

  updateUI();
}

function stopTimer() {
  if (timerId) clearInterval(timerId);
  timerId = null;
  isRunning = false;
  updateUI();
}

function resetGame() {
  stopTimer();
  used = new Set();
  current = null;
  updateUI();
}

const speechOnEl = document.getElementById("speechOn");
const speechLangEl = document.getElementById("speechLang");

// Map each image to a spoken name.
// This assumes your filenames are cards/01.jpg ... cards/54.jpg
const cardNames = [
  "El Gallo", "El Diablo", "La Dama", "El Catrín", "El Paraguas", "La Sirena",
  "La Escalera", "La Botella", "El Barril", "El Árbol", "El Melón", "El Valiente",
  "El Gorrito", "La Muerte", "La Pera", "La Bandera", "El Bandolón", "El Violoncello",
  "La Garza", "El Pájaro", "La Mano", "La Bota", "La Luna", "El Cotorro",
  "El Borracho", "El Negrito", "El Corazón", "La Sandía", "El Tambor", "El Camarón",
  "Las Jaras", "El Músico", "La Araña", "El Soldado", "La Estrella", "El Cazo",
  "El Mundo", "El Apache", "El Nopal", "El Alacrán", "La Rosa", "La Calavera",
  "La Campana", "El Cantarito", "El Venado", "El Sol", "La Corona", "La Chalupa",
  "El Pino", "El Pescado", "La Palma", "La Maceta", "El Arpa", "La Rana"
];

function nameForCardPath(path) {
  // Extract 01..54 from cards/XX.jpg
  const m = path.match(/\/(\d{2})\./);
  if (!m) return "Carta";
  const idx = parseInt(m[1], 10) - 1;
  return cardNames[idx] || `Carta ${idx + 1}`;
}

function speak(text) {
  if (!speechOnEl?.checked) return;
  if (!("speechSynthesis" in window)) return;

  // Stop any current speech so rapid draws don't overlap
  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = speechLangEl?.value || "es-MX";
  utter.rate = 0.95; // slightly slower / clearer
  utter.pitch = 1.0;

  window.speechSynthesis.speak(utter);
}

// iPhone Safari sometimes needs a "warm-up" after a user gesture
function warmUpSpeech() {
  if (!("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(" ");
  u.volume = 0; // silent
  window.speechSynthesis.speak(u);
  window.speechSynthesis.cancel();
}

document.addEventListener("click", warmUpSpeech, { once: true });

startPauseBtn.addEventListener("click",  () => {
  if (isRunning) stopTimer();
  else startTimer();


});

drawBtn.addEventListener("click", drawNext);
resetBtn.addEventListener("click", resetGame);

intervalRange.addEventListener("input", () => {
  intervalLabel.textContent = parseFloat(intervalRange.value).toFixed(1);
});

intervalRange.addEventListener("change", () => {
  // If running, restart with new interval
  if (isRunning) startTimer();
});

intervalLabel.textContent = parseFloat(intervalRange.value).toFixed(1);
updateUI();
