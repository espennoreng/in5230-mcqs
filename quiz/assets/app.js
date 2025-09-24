// IN5320 MCQ Quiz App
// Loads MCQs from markdown files in ../mcqs, parses them, and presents an interactive quiz.

const TOPICS = [
  { id: 'getting-started', label: 'Getting Started', path: '../mcqs/getting-started.md' },
  { id: 'html-css', label: 'HTML & CSS', path: '../mcqs/html-css.md' },
  { id: 'javascript-part-1', label: 'JavaScript Part 1', path: '../mcqs/javascript-part-1.md' },
  { id: 'javascript-part-2', label: 'JavaScript Part 2', path: '../mcqs/javascript-part-2.md' },
  { id: 'javascript-part-3', label: 'JavaScript Part 3', path: '../mcqs/javascript-part-3.md' },
  { id: 'react', label: 'React', path: '../mcqs/react.md' },
  { id: 'dhis2', label: 'DHIS2', path: '../mcqs/dhis2.md' },
];

const state = {
  loadedByTopic: new Map(), // topicId -> { questions: Question[] }
  pool: [], // Question[] selected for this run
  index: 0,
  score: 0,
  settings: {
    shuffleQuestions: true,
    shuffleChoices: true,
    count: 10,
    selectedTopics: new Set(TOPICS.map(t => t.id)),
  },
  history: [], // { q, selectedIndex, correctIndex, correct }
};

/** @typedef {{text: string, isCorrect: boolean, originalLetter: string}} Choice */
/** @typedef {{stem: string, choices: Choice[], explanation: string, topicId: string}} Question */

const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

function renderTopics() {
  const container = $('#topics');
  container.innerHTML = '';
  for (const topic of TOPICS) {
    const id = `topic-${topic.id}`;
    const wrapper = document.createElement('label');
    wrapper.className = 'topic';

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.id = id;
    cb.checked = state.settings.selectedTopics.has(topic.id);
    cb.addEventListener('change', () => {
      if (cb.checked) state.settings.selectedTopics.add(topic.id);
      else state.settings.selectedTopics.delete(topic.id);
      updateStartEnabled();
    });

    const span = document.createElement('span');
    span.textContent = topic.label;

    const small = document.createElement('small');
    small.id = `${id}-count`;
    small.textContent = '—';

    wrapper.append(cb, span, small);
    container.appendChild(wrapper);
  }
}

function updateStartEnabled() {
  const startBtn = $('#startBtn');
  const loadBtn = $('#loadBtn');
  const selected = TOPICS.filter(t => state.settings.selectedTopics.has(t.id));
  const loaded = selected.every(t => state.loadedByTopic.has(t.id));
  startBtn.disabled = !loaded || (selected.reduce((acc, t) => acc + (state.loadedByTopic.get(t.id)?.questions.length || 0), 0) === 0);
  loadBtn.disabled = selected.length === 0;
}

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return await res.text();
}

function parseMCQMarkdown(md, topicId) {
  const lines = md.split(/\r?\n/);
  /** @type {Question[]} */
  const questions = [];
  let current = null; // { stem, choices, explanation, answerLetter }
  let inExplanation = false;

  function commit() {
    if (!current) return;
    // Ensure we have at least one correct choice
    if (current.choices && current.choices.some(c => c.isCorrect)) {
      questions.push({
        stem: current.stem.trim(),
        choices: current.choices,
        explanation: (current.explanation || '').trim(),
        topicId,
      });
    }
    current = null;
    inExplanation = false;
  }

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();
    if (!line) { inExplanation = false; continue; }

    const qMatch = line.match(/^(\d+)\)\s*(.+)$/);
    if (qMatch) {
      commit();
      current = { stem: qMatch[2], choices: [], explanation: '', answerLetter: null };
      continue;
    }

    if (!current) continue; // ignore headers

    const cMatch = line.match(/^([A-D])\.\s*(.+)$/);
    if (cMatch) {
      const [, letter, text] = cMatch;
      current.choices.push({ text, isCorrect: false, originalLetter: letter });
      inExplanation = false;
      continue;
    }

    const aMatch = line.match(/^Answer:\s*([A-Da-d])/);
    if (aMatch) {
      const letter = aMatch[1].toUpperCase();
      // Mark the matching choice as correct
      const ch = current.choices.find(c => c.originalLetter === letter);
      if (ch) ch.isCorrect = true;
      inExplanation = false;
      continue;
    }

    const eMatch = line.match(/^Explanation:\s*(.*)$/);
    if (eMatch) {
      current.explanation = eMatch[1] ?? '';
      inExplanation = true;
      continue;
    }

    if (inExplanation) {
      current.explanation += (current.explanation ? ' ' : '') + line;
      continue;
    }

    // If not explanation/choice/answer and we are within a question, append to stem (multi-line stem support)
    current.stem += ' ' + line;
  }
  commit();
  return questions;
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderQuestion() {
  const q = state.pool[state.index];
  $('#progressText').textContent = `Question ${state.index + 1} / ${state.pool.length}`;
  $('#scoreText').textContent = `Score: ${state.score}`;

  const stemEl = $('#questionStem');
  stemEl.textContent = q.stem; // textContent avoids HTML injection and shows <tags> literally

  const choicesEl = $('#choices');
  choicesEl.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  q.choices.forEach((choice, idx) => {
    const li = document.createElement('li');
    li.className = 'choice';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.value = String(idx);
    input.id = `choice-${idx}`;

    const letter = document.createElement('div');
    letter.className = 'letter';
    letter.textContent = letters[idx] || '?';

    const label = document.createElement('label');
    label.setAttribute('for', input.id);
    label.textContent = choice.text; // ensure raw text, not HTML

    li.append(input, letter, label);
    choicesEl.appendChild(li);
  });

  $('#explanation').classList.add('hidden');
  $('#explanation').textContent = '';

  $('#submitBtn').disabled = false;
  $('#nextBtn').disabled = true;
}

function gradeCurrent() {
  const q = state.pool[state.index];
  const selected = $$('#choices input[type="radio"]').find(i => i.checked);
  const listItems = $$('#choices .choice');
  let selectedIndex = -1;
  if (selected) selectedIndex = Number(selected.value);

  let correctIndex = q.choices.findIndex(c => c.isCorrect);
  const correct = selectedIndex === correctIndex;

  listItems.forEach((li, idx) => {
    li.classList.remove('correct', 'incorrect');
    if (idx === correctIndex) li.classList.add('correct');
    if (selectedIndex === idx && !correct) li.classList.add('incorrect');
    li.querySelector('input').disabled = true;
  });

  if (correct) state.score += 1;
  const exp = $('#explanation');
  exp.textContent = q.explanation || (correct ? 'Correct.' : '');
  exp.classList.toggle('hidden', !exp.textContent);

  $('#submitBtn').disabled = true;
  $('#nextBtn').disabled = false;

  state.history.push({ q, selectedIndex, correctIndex, correct });
}

function revealAnswer() {
  const q = state.pool[state.index];
  const listItems = $$('#choices .choice');
  const correctIndex = q.choices.findIndex(c => c.isCorrect);
  listItems.forEach((li, idx) => {
    li.classList.toggle('correct', idx === correctIndex);
  });
  const exp = $('#explanation');
  exp.textContent = q.explanation || '';
  exp.classList.toggle('hidden', !exp.textContent);
}

function toResults() {
  $('#quiz').classList.add('hidden');
  $('#results').classList.remove('hidden');
  const total = state.pool.length;
  const pct = total ? Math.round((state.score / total) * 100) : 0;
  $('#resultsSummary').textContent = `You scored ${state.score} / ${total} (${pct}%).`;

  const list = $('#reviewList');
  list.innerHTML = '';
  state.history.forEach((h, i) => {
    const li = document.createElement('li');
    li.className = 'review-item';
    const qn = document.createElement('div');
    qn.textContent = `Q${i + 1} (${h.q.topicId})`;
    const stem = document.createElement('div');
    stem.className = 'stem';
    stem.textContent = h.q.stem;
    const ul = document.createElement('ul');
    h.q.choices.forEach((c, idx) => {
      const cLi = document.createElement('li');
      const mark = idx === h.correctIndex ? '✅' : (idx === h.selectedIndex ? '❌' : '•');
      cLi.textContent = `${mark} ${c.text}`;
      ul.appendChild(cLi);
    });
    const exp = document.createElement('div');
    exp.textContent = h.q.explanation || '';
    li.append(qn, stem, ul, exp);
    list.appendChild(li);
  });
}

function startQuiz() {
  $('#setup').classList.add('hidden');
  $('#results').classList.add('hidden');
  $('#quiz').classList.remove('hidden');

  state.index = 0;
  state.score = 0;
  state.history = [];
  renderQuestion();
}

function buildPool() {
  const selected = TOPICS.filter(t => state.settings.selectedTopics.has(t.id));
  let pool = [];
  for (const t of selected) {
    const data = state.loadedByTopic.get(t.id);
    if (data?.questions?.length) pool = pool.concat(data.questions.map(q => ({ ...q })));
  }
  if (state.settings.shuffleQuestions) shuffleInPlace(pool);
  // Shuffle choices per question if requested
  if (state.settings.shuffleChoices) {
    pool.forEach(q => shuffleInPlace(q.choices));
  }
  const count = clamp(state.settings.count, 1, pool.length);
  state.pool = pool.slice(0, count);
}

async function loadSelectedTopics() {
  const status = $('#loadStatus');
  const selected = TOPICS.filter(t => state.settings.selectedTopics.has(t.id));
  if (selected.length === 0) {
    status.textContent = 'Select at least one topic.';
    return;
  }
  status.textContent = 'Loading…';

  let total = 0;
  for (const topic of selected) {
    try {
      const text = await fetchText(topic.path);
      const questions = parseMCQMarkdown(text, topic.id);
      state.loadedByTopic.set(topic.id, { questions });
      total += questions.length;
      const countEl = document.getElementById(`topic-${topic.id}-count`);
      if (countEl) countEl.textContent = `${questions.length} Qs`;
    } catch (e) {
      console.error(e);
      state.loadedByTopic.set(topic.id, { questions: [] });
      const countEl = document.getElementById(`topic-${topic.id}-count`);
      if (countEl) countEl.textContent = `error`;
    }
  }
  status.textContent = `Loaded ${total} questions from ${selected.length} topic(s).`;

  // Adjust max allowable question count based on loaded total
  const qCount = $('#questionCount');
  qCount.max = String(Math.max(1, total));
  qCount.value = String(Math.min(Number(qCount.value) || 10, total));

  updateStartEnabled();
}

function hookUI() {
  renderTopics();
  updateStartEnabled();

  $('#questionCount').addEventListener('input', (e) => {
    const val = Number(e.target.value) || 1;
    state.settings.count = Math.max(1, val);
  });
  $('#shuffleQuestions').addEventListener('change', (e) => {
    state.settings.shuffleQuestions = e.target.checked;
  });
  $('#shuffleChoices').addEventListener('change', (e) => {
    state.settings.shuffleChoices = e.target.checked;
  });
  $('#loadBtn').addEventListener('click', () => loadSelectedTopics());
  $('#startBtn').addEventListener('click', () => { buildPool(); startQuiz(); });
  $('#submitBtn').addEventListener('click', gradeCurrent);
  $('#revealBtn').addEventListener('click', revealAnswer);
  $('#nextBtn').addEventListener('click', () => {
    if (state.index + 1 >= state.pool.length) {
      toResults();
    } else {
      state.index += 1;
      renderQuestion();
    }
  });
  $('#retryBtn').addEventListener('click', () => {
    buildPool();
    startQuiz();
  });
  $('#restartBtn').addEventListener('click', () => {
    $('#results').classList.add('hidden');
    $('#quiz').classList.add('hidden');
    $('#setup').classList.remove('hidden');
  });
}

// Initialize
hookUI();
