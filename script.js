const TOTAL = 54;




let speechPrimed = false;

// Prevent crash if referenced elsewhere
function flushPendingSpeak(){ /* no-op */ }

const LOTERIA_NAMES = ['El Gallo', 'El Diablo', 'La Dama', 'El Catrín', 'El Paraguas', 'La Sirena', 'La Escalera', 'La Botella', 'El Barril', 'El Árbol', 'El Melón', 'El Valiente', 'El Gorrito', 'La Muerte', 'La Pera', 'La Bandera', 'El Bandolón', 'El Violoncello', 'La Garza', 'El Pájaro', 'La Mano', 'La Bota', 'La Luna', 'El Cotorro', 'El Borracho', 'El Negrito', 'El Corazón', 'La Sandía', 'El Tambor', 'El Camarón', 'Las Jaras', 'El Músico', 'La Araña', 'El Soldado', 'La Estrella', 'El Cazo', 'El Mundo', 'El Apache', 'El Nopal', 'El Alacrán', 'La Rosa', 'La Calavera', 'La Campana', 'El Cantarito', 'El Venado', 'El Sol', 'La Corona', 'La Chalupa', 'El Pino', 'El Pescado', 'La Palma', 'La Maceta', 'El Arpa', 'La Rana'];

const LOTERIA_DICHOS = {
  "El Gallo": [
    "¡El Gallo! El que canta al amanecer."
  ],
  "El Diablo": [
    "¡El Diablo! No lo mires mucho, se te pega."
  ],
  "La Dama": [
    "¡La Dama! Con paso fino y mirada seria."
  ],
  "El Catrín": [
    "¡El Catrín! Bien vestido, mejor presumido."
  ],
  "El Paraguas": [
    "¡El Paraguas! Que no te agarre el agua."
  ],
  "La Sirena": [
    "¡La Sirena! Canta bonito, pero cuidado."
  ],
  "La Escalera": [
    "¡La Escalera! Súbele sin miedo."
  ],
  "La Botella": [
    "¡La Botella! No la sueltes, compadre."
  ],
  "El Barril": [
    "¡El Barril! Donde se guarda lo bueno."
  ],
  "El Árbol": [
    "¡El Árbol! El que da sombra y consejo."
  ],
  "El Melón": [
    "¡El Melón! Dulce por dentro, firme por fuera."
  ],
  "El Valiente": [
    "¡El Valiente! El que no se raja."
  ],
  "El Gorrito": [
    "¡El Gorrito! Pa’ que no te dé el sereno."
  ],
  "La Muerte": [
    "¡La Muerte! Nadie se escapa, pero hoy jugamos."
  ],
  "La Pera": [
    "¡La Pera! La que espera… desespera."
  ],
  "La Bandera": [
    "¡La Bandera! Se levanta con orgullo."
  ],
  "El Bandolón": [
    "¡El Bandolón! Que suene la cuerda."
  ],
  "El Violoncello": [
    "¡El Violoncello! Grave, bonito y elegante."
  ],
  "La Garza": [
    "¡La Garza! Blanca y parada, como de foto."
  ],
  "El Pájaro": [
    "¡El Pájaro! Vuela alto y no voltea."
  ],
  "La Mano": [
    "¡La Mano! La que da y la que pide."
  ],
  "La Bota": [
    "¡La Bota! La que pisa fuerte."
  ],
  "La Luna": [
    "¡La Luna! La que alumbra sin cobrar."
  ],
  "El Cotorro": [
    "¡El Cotorro! Habla mucho y nunca se cansa."
  ],
  "El Borracho": [
    "¡El Borracho! Ya se tambalea, pero llega."
  ],
  "El Negrito": [
    "¡El Negrito! Con ritmo y sabrosura."
  ],
  "El Corazón": [
    "¡El Corazón! El que late cuando quieres."
  ],
  "La Sandía": [
    "¡La Sandía! Roja por dentro, fiesta por fuera."
  ],
  "El Tambor": [
    "¡El Tambor! Que retumbe la suerte."
  ],
  "El Camarón": [
    "¡El Camarón! El que se duerme… se lo llevan."
  ],
  "Las Jaras": [
    "¡Las Jaras! Flechas al aire, suerte en el naipe."
  ],
  "El Músico": [
    "¡El Músico! Que no pare la canción."
  ],
  "La Araña": [
    "¡La Araña! Teje y teje, sin prisa."
  ],
  "El Soldado": [
    "¡El Soldado! Firme y derecho."
  ],
  "La Estrella": [
    "¡La Estrella! Brilla aunque sea poquito."
  ],
  "El Cazo": [
    "¡El Cazo! Pa’ servir lo calientito."
  ],
  "El Mundo": [
    "¡El Mundo! Grande, pero aquí cabe."
  ],
  "El Apache": [
    "¡El Apache! Mirada fuerte, paso seguro."
  ],
  "El Nopal": [
    "¡El Nopal! Pica, pero cura."
  ],
  "El Alacrán": [
    "¡El Alacrán! No lo piques, te pica."
  ],
  "La Rosa": [
    "¡La Rosa! Bonita, pero con espinas."
  ],
  "La Calavera": [
    "¡La Calavera! Sonríe aunque no tenga labios."
  ],
  "La Campana": [
    "¡La Campana! Suena y se escucha hasta lejos."
  ],
  "El Cantarito": [
    "¡El Cantarito! Pa’ el agua fresca."
  ],
  "El Venado": [
    "¡El Venado! Brinca ligero."
  ],
  "El Sol": [
    "¡El Sol! El que calienta la suerte."
  ],
  "La Corona": [
    "¡La Corona! Pa’ quien mande hoy."
  ],
  "La Chalupa": [
    "¡La Chalupa! Reza y rema."
  ],
  "El Pino": [
    "¡El Pino! Verde todo el año."
  ],
  "El Pescado": [
    "¡El Pescado! Del agua directo al juego."
  ],
  "La Palma": [
    "¡La Palma! La que aplaude la suerte."
  ],
  "La Maceta": [
    "¡La Maceta! Donde crece lo bonito."
  ],
  "El Arpa": [
    "¡El Arpa! Suena fino, suena claro."
  ],
  "La Rana": [
    "¡La Rana! Brinca y cae en buena suerte."
  ]
};

const stackEl = document.getElementById("stack");
const statusEl = document.getElementById("status");
const btnStart = document.getElementById("btnStart");
const btnReset = document.getElementById("btnReset");
const intervalInput = document.getElementById("intervalInput");
const intervalValue = document.getElementById("intervalValue");
const volumeInput = document.getElementById("volumeInput");
const volumeValue = document.getElementById("volumeValue");
const btnMute = document.getElementById("btnMute");
const speechToggle = document.getElementById("speechToggle");
const voiceSelect = document.getElementById("voiceSelect");
const speechRate = document.getElementById("speechRate");
const speechRateValue = document.getElementById("speechRateValue");
const btnVoiceMale = document.getElementById("btnVoiceMale");
const btnVoiceFemale = document.getElementById("btnVoiceFemale");
const btnTestVoice = document.getElementById("btnTestVoice");
const speechDelay = document.getElementById("speechDelay");
const speechDelayValue = document.getElementById("speechDelayValue");
const drawSound = document.getElementById("drawSound");
const btnSettings = document.getElementById("btnSettings");
const settingsModal = document.getElementById("settingsModal");
const btnCloseSettings = document.getElementById("btnCloseSettings");
const btnCloseSettingsTop = document.getElementById("btnCloseSettingsTop");
const settingsContent = document.querySelector("#settingsModal .modal-content");

// Uses images named cards/01.jpg ... cards/54.jpg
const isMobile = Math.min(window.innerWidth, window.innerHeight) <= 520;
const cardsFolder = isMobile ? "cards_m" : "cards";

const cardImages = Array.from({ length: TOTAL }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return `${cardsFolder}/${num}.jpg`;
});

let revealed = new Set();
let busy = false;
let revealCounter = 0; // counts revealed cards for stacking order
let autoTimer = null;
let autoRunning = false;
let intervalMs = 5000; // default 5 seconds
let isMuted = false;
let speechEnabled = true;
let selectedVoiceURI = "";
let speechRateVal = 1.0;
let speechDelayMs = 350;
let pendingSpeechTimer = null;

function randInt(n){ return Math.floor(Math.random() * n); }
function wait(ms){ return new Promise(res => setTimeout(res, ms)); }


function updateVolume(){
  if(!drawSound || !volumeInput) return;
  const v = Math.min(100, Math.max(0, Number(volumeInput.value)));
  drawSound.volume = v / 100;
  if(volumeValue) volumeValue.textContent = v + "%";
}

function getSpanishVoices(){
  const voices = (window.speechSynthesis && window.speechSynthesis.getVoices) ? window.speechSynthesis.getVoices() : [];
  return voices.filter(v => (v.lang || "").toLowerCase().startsWith("es"));
}


function primeSpeech(){
  if(speechPrimed) return;
  try{
    if(!window.speechSynthesis) return;
    // iOS Safari often needs a first user gesture to "unlock" speech.
    const u = new SpeechSynthesisUtterance(" ");
    u.lang = "es-US";
    u.volume = 0; // silent prime
    window.speechSynthesis.speak(u);
    window.speechSynthesis.cancel();
    speechPrimed = true;
  }catch(e){}
}


function preferEsUSVoice(voices){
  try{
    if(!voices || !voices.length) return null;

    // Prefer es-US voices first
    const esUS = voices.filter(v => v.lang === "es-US");
    if(esUS.length){
      // If user has a selected voice already, keep it
      if(selectedVoiceURI && esUS.some(v => v.voiceURI === selectedVoiceURI)){
        return esUS.find(v => v.voiceURI === selectedVoiceURI);
      }
      // If female preferred, try female-ish names within es-US
      const femaleHints = ["female","mujer","fem","femen","maria","carmen","sofia","laura","paulina","monica","lucia"];
      const fem = esUS.find(v => femaleHints.some(h => (v.name||"").toLowerCase().includes(h)));
      return fem || esUS[0];
    }

    // No es-US voice available: fall back to existing selection or first Spanish voice
    if(selectedVoiceURI){
      const sel = voices.find(v => v.voiceURI === selectedVoiceURI);
      if(sel) return sel;
    }
    return voices[0];
  }catch(e){
    return voices && voices.length ? voices[0] : null;
  }
}

function populateVoiceSelect(){
  if(!voiceSelect) return;
  const voices = getSpanishVoices();
  voiceSelect.innerHTML = "";
  voices.forEach(v => {
    const opt = document.createElement("option");
    opt.value = v.voiceURI;
    opt.textContent = `${v.name} (${v.lang})`;
    voiceSelect.appendChild(opt);
  });

  // Restore previously selected voice if possible
  if(selectedVoiceURI){
    const found = Array.from(voiceSelect.options).find(o => o.value === selectedVoiceURI);
    if(found) voiceSelect.value = selectedVoiceURI;
  } else if(voiceSelect.options.length){
    selectedVoiceURI = voiceSelect.value;
    // Default to female voice
    const vFem = pickVoiceByGender("female");
    if(vFem){
      selectedVoiceURI = vFem.voiceURI;
      voiceSelect.value = vFem.voiceURI;
    }
  }
}

function pickVoiceByGender(gender){
  const voices = getSpanishVoices();
  if(!voices.length) return null;

  const g = (gender || "").toLowerCase();
  const maleHints = ["male","hombre","masc","mascul","juan","jorge","carlos","diego"];
  const femaleHints = ["female","mujer","fem","femen","maria","carmen","sofia","laura"];

  const hints = g === "female" ? femaleHints : maleHints;

  // 1) try name-based heuristic
  let v = voices.find(x => hints.some(h => (x.name || "").toLowerCase().includes(h)));
  // 2) fallback to different voice than current
  if(!v && selectedVoiceURI){
    v = voices.find(x => x.voiceURI !== selectedVoiceURI) || voices[0];
  }
  // 3) fallback to first
  return v || voices[0];
}

function updateSpeechDelay(){
  if(!speechDelay) return;
  const raw = Number(speechDelay.value);
  const ms = Number.isFinite(raw) ? Math.min(1500, Math.max(0, raw)) : 350;
  speechDelayMs = ms;
  if(speechDelayValue) speechDelayValue.textContent = ms + "ms";
}

function updateSpeechRate(){
  if(!speechRate) return;
  const raw = Number(speechRate.value);
  const val = Number.isFinite(raw) ? Math.min(1.3, Math.max(0.7, raw)) : 1.0;
  speechRateVal = val;
  if(speechRateValue) speechRateValue.textContent = val.toFixed(2) + "x";
}

function buildCallText(name){
  // 25% chance to use a dicho; otherwise speak the plain name.
  const useDicho = Math.random() < 0.25;
  if(!useDicho) return name;

  const opts = (typeof LOTERIA_DICHOS !== "undefined" && LOTERIA_DICHOS[name]) ? LOTERIA_DICHOS[name] : null;
  if(!opts || !opts.length) return `¡${name}! A ver si te sale la buena.`;
  return opts[Math.floor(Math.random() * opts.length)];
}

function speakCard(name){
  if(!speechEnabled || !speechToggle || !speechToggle.checked) return;
  if(!window.speechSynthesis || !window.SpeechSynthesisUtterance) return;

  try{
    // stop any ongoing speech so it doesn't queue up
    window.speechSynthesis.cancel();
    if(pendingSpeechTimer){
      clearTimeout(pendingSpeechTimer);
      pendingSpeechTimer = null;
    }

    pendingSpeechTimer = setTimeout(() => {
      const u = new SpeechSynthesisUtterance(buildCallText(name));
    u.lang = "es-US";
    u.rate = speechRateVal;

    const voices = getSpanishVoices();
    const v = voices.find(x => x.voiceURI === selectedVoiceURI) || voices[0];
    if(v) u.voice = v;

      window.speechSynthesis.speak(u);
      pendingSpeechTimer = null;
    }, speechDelayMs);
  }catch(e){}
}

function playDrawSound(){
  if(!drawSound || isMuted) return;
  try{
    drawSound.currentTime = 0;
    const p = drawSound.play();
    // ignore autoplay blocking errors (sound will work after a user gesture)
    if(p && typeof p.catch === "function") p.catch(() => {});
  }catch(e){}
}

function getIntervalMs(){
  const raw = intervalInput ? Number(intervalInput.value) : 5;
  const sec = Number.isFinite(raw) ? Math.min(10, Math.max(1, raw)) : 5;
  if(intervalInput) intervalInput.value = String(sec);
  if(intervalValue) intervalValue.textContent = sec + "s";
  return sec * 1000;
}

function stopAuto(){
  if(autoTimer){
    clearInterval(autoTimer);
    autoTimer = null;
  }
  autoRunning = false;
  if(btnStart) btnStart.textContent = "Comenzar";
}

function startAuto(){
  if(autoRunning) return;
  autoRunning = true;
  if(btnStart) btnStart.textContent = "Detener";
  intervalMs = getIntervalMs();
  // reveal one immediately, then every interval
  revealOneRandom();
  autoTimer = setInterval(() => {
    if(revealed.size >= TOTAL){
      stopAuto();
      return;
    }
    // don't queue if an animation is mid-flight
    if(!busy) revealOneRandom();
  }, intervalMs);
}

function updateStatus(){
  statusEl.textContent = `${revealed.size} / ${TOTAL} reveladas`;
  const done = revealed.size >= TOTAL;
  if(btnStart) btnStart.disabled = done || busy;  btnReset.disabled = busy;
  if(done) stopAuto();
}

function createCards(){
  stackEl.innerHTML = "";
  revealed = new Set();
  busy = false;
  revealCounter = 0;
  stopAuto();

  for(let i=0;i<TOTAL;i++){
    const card = document.createElement("div");
    card.className = "card face-down";
    card.dataset.index = String(i);

    // slight natural jitter
    const jitterX = (Math.random() - 0.5) * 1.2;
    const jitterY = (Math.random() - 0.5) * 1.2;

    const gap = parseFloat(getComputedStyle(document.documentElement)
      .getPropertyValue("--stack-gap"));
    const z = -i * gap;

    card.style.transform = `translate3d(${jitterX}px, ${jitterY}px, ${z}px)`;

    const inner = document.createElement("div");
    inner.className = "inner";

    const back = document.createElement("div");
    back.className = "face back";

    const front = document.createElement("div");
    front.className = "face front";
    // background image for this card
    front.dataset.src = cardImages[i]; // lazy-load on reveal

    inner.appendChild(back);
    inner.appendChild(front);
    card.appendChild(inner);
    stackEl.appendChild(card);
  }

  updateStatus();
}

function pickRandomUnrevealed(){
  const remaining = [];
  for(let i=0;i<TOTAL;i++){
    if(!revealed.has(i)) remaining.push(i);
  }
  if(remaining.length === 0) return null;
  const i = remaining[randInt(remaining.length)];
  preloadImage(cardImages[i]);
  return i;
}

function getCard(i){
  return stackEl.querySelector(`.card[data-index="${i}"]`);
}


function ensureCardImageLoaded(cardEl){
  try{
    const front = cardEl ? cardEl.querySelector(".face.front") : null;
    if(!front) return;
    if(front.style.backgroundImage && front.style.backgroundImage !== "none") return;
    const src = front.dataset && front.dataset.src ? front.dataset.src : null;
    if(src) front.style.backgroundImage = `url(${src})`;
  }catch(e){}
}


function preloadImage(src){
  try{
    if(!src) return;
    const img = new Image();
    img.decoding = "async";
    img.loading = "eager";
    img.src = src;
  }catch(e){}
}


async function revealCard(i){
  if(busy) return;
  busy = true;
  updateStatus();

  const card = getCard(i);
  if(!card){
    busy = false;
    updateStatus();
    return;
  }

  revealed.add(i);
  ensureCardImageLoaded(card);
  playDrawSound();
  speakCard(LOTERIA_NAMES[i] || `Carta ${i + 1}`);
  card.style.zIndex = "9999";

  card.classList.add("is-active");

  const lift = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--lift"));
  const fanX = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--fan-x"));

  // Pop it out toward the "discard pile"
  card.style.transform = `translate3d(${fanX}px, ${-lift}px, ${80}px) rotateZ(6deg)`;

  await wait(120);
  card.classList.add("revealed");
  await wait(900);

  // Settle to the side, stacking slightly — FORCE it to stay on top
  const revealedOrder = revealCounter++;
  const settleX = fanX + (revealedOrder * 2.2);
  const settleY = -lift + (revealedOrder * 1.4);

  // Make later cards closer to camera so they are always on top
  const settleZ = 200 + (revealedOrder * 2);

  // Also force paint order
  card.style.zIndex = String(1000 + revealedOrder);

  card.style.transform =
    `translate3d(${settleX}px, ${settleY}px, ${settleZ}px) rotateZ(10deg)`;

  card.classList.remove("is-active");

  busy = false;
  updateStatus();
}

async function revealOneRandom(){
  const i = pickRandomUnrevealed();
  if(i === null) return;
  await revealCard(i);
}

async function revealAll(){
  if(busy) return;
  while(revealed.size < TOTAL){
    // eslint-disable-next-line no-await-in-loop
    await revealOneRandom();
    // eslint-disable-next-line no-await-in-loop
    await wait(80);
  }
}

function reset(){
  if(busy) return;
  createCards();


// ---------------- Hide voice speed & delay sliders (UI only) ----------------
(function hideVoiceSpeedDelay(){
  try{
    const ids = ["speechRate", "speechDelay"];
    ids.forEach(id => {
      const el = document.getElementById(id);
      const label = el ? el.closest("label") : null;
      if(label) label.style.display = "none";
    });
  }catch(e){}
})();



// ---------------- Hide language/voice select (UI only) ----------------
(function hideVoiceSelect(){
  try{
    const sel = document.getElementById("voiceSelect");
    const label = sel ? sel.closest("label") : null;
    if(label) label.style.display = "none";
  }catch(e){}
})();



// ---------------- Hide voice speed/delay sliders (UI only) ----------------
(function hideVoiceSliders(){
  try{
    const rateEl = document.getElementById("speechRate");
    const delayEl = document.getElementById("speechDelay");
    const rateLabel = rateEl ? rateEl.closest("label") : null;
    const delayLabel = delayEl ? delayEl.closest("label") : null;
    if(rateLabel) rateLabel.style.display = "none";
    if(delayLabel) delayLabel.style.display = "none";
  }catch(e){}
})();

}

function onStackTap(e){
  // Ignore right-click / secondary buttons
  if(e && typeof e.button === "number" && e.button !== 0) return;
  // Don't do anything if we're done
  if(revealed.size >= TOTAL) return;
  // If an animation is running, ignore (prevents queueing)
  if(busy) return;

  // Optional: keep autoplay running; tapping just draws an extra card
  revealOneRandom();
}

btnStart.addEventListener("click", () => {
  primeSpeech();
  try{ window.speechSynthesis.getVoices(); }catch(e){}
  if(autoRunning) stopAuto();
  else startAuto();
});
btnReset.addEventListener("click", reset);

// Tap/click the stack to draw a card
stackEl.addEventListener("pointerdown", onStackTap);

if(volumeInput){
  volumeInput.addEventListener("input", updateVolume);
}

// Change interval (seconds). If autoplay is running, restart with new interval.
if(intervalInput){
  intervalInput.addEventListener("input", () => {
    intervalMs = getIntervalMs();
    if(autoRunning){
      stopAuto();
      startAuto();
    }
  });
}

createCards();





// ---------------- Settings modal controls ----------------
function openSettings(){
  if(settingsModal) settingsModal.classList.add("show");
  document.body.classList.add("modal-open");
}
function closeSettings(){
  if(settingsModal) settingsModal.classList.remove("show");
  document.body.classList.remove("modal-open");
}

if(btnSettings){
  btnSettings.addEventListener("click", openSettings);
}

if(btnCloseSettingsTop){
  btnCloseSettingsTop.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeSettings();
  });
}

if(btnCloseSettings){
  // pointerdown works better on mobile/touch
  btnCloseSettings.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeSettings();
  });
}

if(settingsContent){
  // prevent clicks inside panel from ever reaching the overlay
  settingsContent.addEventListener("pointerdown", (e) => e.stopPropagation());
}

if(settingsModal){
  // Click outside panel to close
  settingsModal.addEventListener("pointerdown", (e) => {
    if(e.target === settingsModal) closeSettings();
  });
}

// ESC to close
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeSettings();
  if((e.key === "c" || e.key === "C") && settingsModal && settingsModal.classList.contains("show")) closeSettings();
});


if(btnMute){
  btnMute.addEventListener("click", () => {
    isMuted = !isMuted;
    btnMute.textContent = isMuted ? "🔇 Silenciado" : "🔊 Sonido";
  });
}

// Init voice list (some browsers load voices async)
if(window.speechSynthesis){
  populateVoiceSelect();
  if (typeof flushPendingSpeak === 'function') flushPendingSpeak();
window.speechSynthesis.addEventListener("voiceschanged", populateVoiceSelect);
}

if(speechToggle){
  speechToggle.addEventListener("change", () => {
  if(speechToggle.checked) primeSpeech();
    speechEnabled = !!speechToggle.checked;
  });
}
if(voiceSelect){
  voiceSelect.addEventListener("change", () => {
    selectedVoiceURI = voiceSelect.value;
  });
}
if(speechRate){
  speechRate.addEventListener("input", updateSpeechRate);
}
if(btnVoiceMale){
  btnVoiceMale.addEventListener("click", () => {
    const v = pickVoiceByGender("male");
    if(v && voiceSelect){
      selectedVoiceURI = v.voiceURI;
      voiceSelect.value = v.voiceURI;
    }
  });
}
if(btnVoiceFemale){
  btnVoiceFemale.addEventListener("click", () => {
    const v = pickVoiceByGender("female");
    if(v && voiceSelect){
      selectedVoiceURI = v.voiceURI;
      voiceSelect.value = v.voiceURI;
    }
  });
}
if(btnTestVoice){
  btnTestVoice.addEventListener("click", () => {
    updateSpeechRate();
    speakCard("El Gallo");
  });
}

if(speechDelay){
  speechDelay.addEventListener("input", updateSpeechDelay);
}
