const STORAGE_KEY = "esa1-progress-v1";

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { quizScores: {}, flashKnown: {} };
  } catch {
    return { quizScores: {}, flashKnown: {} };
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

let progress = loadProgress();
let activeUnitId = null;
let activeTab = "grammar";

// Flashcard session state
let flashIndex = 0;
let flashOrder = [];
let flashFlipped = false;

// Quiz session state
let quizIndex = 0;
let quizOrder = [];
let quizSelected = null;
let quizCorrectCount = 0;
let quizFinished = false;

const sidebarEl = document.getElementById("sidebar-nav");
const overallBarEl = document.getElementById("overall-bar-fill");
const overallLabelEl = document.getElementById("overall-label");
const mainEl = document.getElementById("main-content");

function getUnit(id) {
  return UNITS.find((u) => u.id === id);
}

function unitScorePercent(unitId) {
  const s = progress.quizScores[unitId];
  if (!s) return null;
  return Math.round((s.correct / s.total) * 100);
}

function renderSidebar() {
  sidebarEl.innerHTML = "";
  UNITS.forEach((unit) => {
    const li = document.createElement("li");
    li.className = unit.id === activeUnitId ? "active" : "";
    const pct = unitScorePercent(unit.id);
    li.innerHTML = `
      <div class="unit-title">${unit.title}</div>
      <div class="unit-score">${pct !== null ? "Quiz best: " + pct + "%" : "Not started"}</div>
    `;
    li.addEventListener("click", () => selectUnit(unit.id));
    sidebarEl.appendChild(li);
  });

  const completedUnits = UNITS.filter((u) => unitScorePercent(u.id) !== null).length;
  const overallPct = Math.round((completedUnits / UNITS.length) * 100);
  overallBarEl.style.width = overallPct + "%";
  overallLabelEl.textContent = `${completedUnits} / ${UNITS.length} units quizzed (${overallPct}%)`;
}

function selectUnit(unitId, tab = "grammar") {
  activeUnitId = unitId;
  activeTab = tab;
  resetFlashState();
  resetQuizState();
  renderSidebar();
  renderMain();
}

function resetFlashState() {
  const unit = getUnit(activeUnitId);
  flashOrder = unit ? unit.vocab.map((_, i) => i) : [];
  flashIndex = 0;
  flashFlipped = false;
}

function resetQuizState() {
  const unit = getUnit(activeUnitId);
  quizOrder = unit ? unit.quiz.map((_, i) => i) : [];
  quizIndex = 0;
  quizSelected = null;
  quizCorrectCount = 0;
  quizFinished = false;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderMain() {
  if (!activeUnitId) {
    mainEl.innerHTML = `
      <div class="welcome">
        <h2>¡Bienvenido! Welcome to your A1 Spanish course</h2>
        <p>Pick a unit on the left to start with grammar notes, flashcards, and a quiz.</p>
      </div>
    `;
    return;
  }

  const unit = getUnit(activeUnitId);
  mainEl.innerHTML = `
    <div class="unit-header">
      <h2>${unit.title}</h2>
      <p class="subtitle">${unit.subtitle}</p>
    </div>
    <div class="tabs">
      <button class="tab-btn ${activeTab === "grammar" ? "active" : ""}" data-tab="grammar">Grammar</button>
      <button class="tab-btn ${activeTab === "flashcards" ? "active" : ""}" data-tab="flashcards">Flashcards</button>
      <button class="tab-btn ${activeTab === "quiz" ? "active" : ""}" data-tab="quiz">Quiz</button>
    </div>
    <div id="tab-content"></div>
  `;

  mainEl.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTab = btn.dataset.tab;
      if (activeTab === "flashcards") resetFlashState();
      if (activeTab === "quiz") resetQuizState();
      renderMain();
    });
  });

  const contentEl = document.getElementById("tab-content");
  if (activeTab === "grammar") renderGrammar(unit, contentEl);
  else if (activeTab === "flashcards") renderFlashcards(unit, contentEl);
  else renderQuiz(unit, contentEl);
}

function renderGrammar(unit, el) {
  const notesHtml = unit.grammar
    .map((g) => `<div class="card"><h3>${g.title}</h3><p>${g.body}</p></div>`)
    .join("");

  const vocabRows = unit.vocab
    .map(([es, en]) => `<tr><td>${es}</td><td>${en}</td></tr>`)
    .join("");

  el.innerHTML = `
    ${notesHtml}
    <div class="card">
      <h3>Vocabulary</h3>
      <table class="vocab-table">${vocabRows}</table>
    </div>
  `;
}

function renderFlashcards(unit, el) {
  const word = unit.vocab[flashOrder[flashIndex]];
  el.innerHTML = `
    <div class="flash-wrap">
      <div class="flashcard ${flashFlipped ? "flipped" : ""}" id="flashcard">
        <div class="flashcard-inner">
          <div class="flashcard-face flashcard-front">${word[0]}</div>
          <div class="flashcard-face flashcard-back">${word[1]}</div>
        </div>
      </div>
      <div class="flash-counter">${flashIndex + 1} / ${flashOrder.length}</div>
      <div class="flash-controls">
        <button class="btn secondary" id="flash-prev">Prev</button>
        <button class="btn secondary" id="flash-flip">Flip</button>
        <button class="btn secondary" id="flash-shuffle">Shuffle</button>
        <button class="btn" id="flash-next">Next</button>
      </div>
    </div>
  `;

  document.getElementById("flashcard").addEventListener("click", () => {
    flashFlipped = !flashFlipped;
    renderFlashcards(unit, el);
  });
  document.getElementById("flash-flip").addEventListener("click", (e) => {
    e.stopPropagation();
    flashFlipped = !flashFlipped;
    renderFlashcards(unit, el);
  });
  document.getElementById("flash-next").addEventListener("click", (e) => {
    e.stopPropagation();
    flashIndex = (flashIndex + 1) % flashOrder.length;
    flashFlipped = false;
    renderFlashcards(unit, el);
  });
  document.getElementById("flash-prev").addEventListener("click", (e) => {
    e.stopPropagation();
    flashIndex = (flashIndex - 1 + flashOrder.length) % flashOrder.length;
    flashFlipped = false;
    renderFlashcards(unit, el);
  });
  document.getElementById("flash-shuffle").addEventListener("click", (e) => {
    e.stopPropagation();
    flashOrder = shuffle(flashOrder);
    flashIndex = 0;
    flashFlipped = false;
    renderFlashcards(unit, el);
  });
}

function renderQuiz(unit, el) {
  if (quizFinished) {
    const pct = Math.round((quizCorrectCount / unit.quiz.length) * 100);
    el.innerHTML = `
      <div class="card quiz-result">
        <div class="score">${pct}%</div>
        <p>${quizCorrectCount} of ${unit.quiz.length} correct</p>
        <button class="btn" id="quiz-retry">Retry Quiz</button>
      </div>
    `;
    document.getElementById("quiz-retry").addEventListener("click", () => {
      resetQuizState();
      renderMain();
    });
    return;
  }

  const qIdx = quizOrder[quizIndex];
  const question = unit.quiz[qIdx];

  el.innerHTML = `
    <div class="quiz-progress">Question ${quizIndex + 1} of ${unit.quiz.length}</div>
    <div class="card">
      <div class="quiz-question">${question.q}</div>
      <div class="quiz-options" id="quiz-options"></div>
      <div id="quiz-feedback"></div>
      <button class="btn" id="quiz-next" style="display:none;">
        ${quizIndex + 1 === unit.quiz.length ? "See results" : "Next question"}
      </button>
    </div>
  `;

  const optionsEl = document.getElementById("quiz-options");
  question.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = opt;
    btn.addEventListener("click", () => selectAnswer(unit, question, i));
    optionsEl.appendChild(btn);
  });

  if (quizSelected !== null) {
    showAnswerState(question);
  }
}

function selectAnswer(unit, question, choiceIdx) {
  if (quizSelected !== null) return;
  quizSelected = choiceIdx;
  if (choiceIdx === question.answer) quizCorrectCount++;
  showAnswerState(question);
}

function showAnswerState(question) {
  const optionsEl = document.getElementById("quiz-options");
  const buttons = optionsEl.querySelectorAll(".quiz-option");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === question.answer) btn.classList.add("correct");
    else if (i === quizSelected) btn.classList.add("incorrect");
  });

  document.getElementById("quiz-feedback").innerHTML = `
    <div class="quiz-explain">${question.explain}</div>
  `;
  const nextBtn = document.getElementById("quiz-next");
  nextBtn.style.display = "inline-block";
  nextBtn.addEventListener("click", () => {
    if (quizIndex + 1 === quizOrder.length) {
      finishQuiz();
    } else {
      quizIndex++;
      quizSelected = null;
      renderMain();
    }
  });
}

function finishQuiz() {
  quizFinished = true;
  const unit = getUnit(activeUnitId);
  const prevBest = progress.quizScores[activeUnitId];
  if (!prevBest || quizCorrectCount / unit.quiz.length > prevBest.correct / prevBest.total) {
    progress.quizScores[activeUnitId] = { correct: quizCorrectCount, total: unit.quiz.length };
    saveProgress(progress);
  }
  renderSidebar();
  renderMain();
}

renderSidebar();
renderMain();
