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

// Curated topic sources from the DHIS2 App Course
const TOPIC_SOURCES = {
  'getting-started': [
    { label: 'Server vs Client', url: 'https://dhis2-app-course.ifi.uio.no/learn/getting-started/course-introduction/server-vs-client/' },
    { label: 'Front-end vs Back-end', url: 'https://dhis2-app-course.ifi.uio.no/learn/getting-started/course-introduction/front-vs-back-end/' },
    { label: 'Dev Environment Intro', url: 'https://dhis2-app-course.ifi.uio.no/learn/getting-started/development-setup/introduction/' },
  ],
  'html-css': [
    // Course section index returns 404 for many; use MDN canonical references
    { label: 'MDN Learn HTML', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML' },
    { label: 'MDN Learn CSS', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS' },
    { label: 'MDN Flexbox', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex' },
    { label: 'MDN Grid', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid' },
  ],
  'javascript-part-1': [
    { label: 'JS Introduction (Variables)', url: 'https://dhis2-app-course.ifi.uio.no/learn/javascript/variables/' },
    { label: 'JS Functions', url: 'https://dhis2-app-course.ifi.uio.no/learn/javascript/functions/' },
  ],
  'javascript-part-2': [
    { label: 'JS Data Types', url: 'https://dhis2-app-course.ifi.uio.no/learn/javascript/data-types/' },
    { label: 'Control flow', url: 'https://dhis2-app-course.ifi.uio.no/learn/javascript/control-flow/conditionals/' },
  ],
  'javascript-part-3': [
    { label: 'Asynchronous JS', url: 'https://dhis2-app-course.ifi.uio.no/learn/javascript/async/introduction/' },
    { label: 'Fetching external data', url: 'https://dhis2-app-course.ifi.uio.no/learn/javascript/fetch/introduction/' },
    { label: 'Manipulating documents (DOM)', url: 'https://dhis2-app-course.ifi.uio.no/learn/javascript/manipulating-documents/introduction/' },
  ],
  'react': [
    // Course React root is currently 403; link to official React docs
    { label: 'React Learn', url: 'https://react.dev/learn' },
    { label: 'JSX: Describing the UI', url: 'https://react.dev/learn/describing-the-ui' },
    { label: 'State: A Component\'s Memory', url: 'https://react.dev/learn/state-a-components-memory' },
    { label: 'Hooks API Reference', url: 'https://react.dev/reference/react' },
  ],
  'dhis2': [
    { label: 'Introduction to DHIS2', url: 'https://dhis2-app-course.ifi.uio.no/learn/dhis2/introduction/' },
    { label: 'Getting started with DHIS2 development', url: 'https://dhis2-app-course.ifi.uio.no/learn/dhis2/getting-started/' },
    { label: 'App development guides', url: 'https://dhis2-app-course.ifi.uio.no/learn/dhis2/app-development-guides/' },
    { label: 'App dev: Fetching data', url: 'https://dhis2-app-course.ifi.uio.no/learn/dhis2/app-development-guides/fetching-data/' },
    { label: 'App dev: Using the dataStore', url: 'https://dhis2-app-course.ifi.uio.no/learn/dhis2/app-development-guides/datastore/' },
  ],
};

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

/** @typedef {{text: string, isCorrect: boolean, originalLetter: string, why?: string}} Choice */
/** @typedef {{stem: string, choices: Choice[], explanation: string, topicId: string, sources?: {label: string, url: string}[]}} Question */

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

function updateEstimate() {
  // Estimate 45 seconds per question as a default pace
  const perQSec = 45;
  const nInput = document.getElementById('questionCount');
  if (!nInput) return;
  const n = clamp(Number(nInput.value) || 1, 1, 10000);
  const totalSec = n * perQSec;
  const mm = Math.floor(totalSec / 60);
  const ss = totalSec % 60;
  const text = `~${mm}m ${ss}s`;
  const el = document.getElementById('estimatedTime');
  if (el) el.textContent = text;
}

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
  let current = null; // { stem, choices, explanation, answerLetter, sources }
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
        sources: current.sources && current.sources.length ? current.sources : undefined,
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
      current = { stem: qMatch[2], choices: [], explanation: '', answerLetter: null, sources: [] };
      continue;
    }

    if (!current) continue; // ignore headers

    const cMatch = line.match(/^([A-D])\.\s*(.+)$/);
    if (cMatch) {
      const [, letter, text] = cMatch;
      current.choices.push({ text, isCorrect: false, originalLetter: letter, why: undefined });
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

    const whyMatch = line.match(/^Why\s+([A-Da-d])\s*:\s*(.*)$/);
    if (whyMatch) {
      const letter = whyMatch[1].toUpperCase();
      const reason = whyMatch[2] || '';
      const ch = current.choices.find(c => c.originalLetter === letter);
      if (ch) ch.why = (ch.why ? ch.why + ' ' : '') + reason;
      inExplanation = false;
      continue;
    }

    const sMatch = line.match(/^Sources?:\s*(.*)$/i);
    if (sMatch) {
      const rest = sMatch[1] || '';
      const parts = rest.split(/[;,]\s*|\s+/).filter(Boolean);
      for (const p of parts) {
        // basic URL detection
        if (/^https?:\/\//i.test(p)) {
          current.sources.push({ label: p, url: p });
        }
      }
      inExplanation = false;
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

  // Render sources for this question (per-topic curated links)
  const sources = (q.sources && q.sources.length ? q.sources : TOPIC_SOURCES[q.topicId] || []);
  const sourcesBlock = $('#sources');
  const sourcesList = $('#sourcesList');
  sourcesList.innerHTML = '';
  if (sources.length) {
    sources.forEach(s => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = s.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = s.label;
      li.appendChild(a);
      sourcesList.appendChild(li);
    });
    sourcesBlock.classList.remove('hidden');
  } else {
    sourcesBlock.classList.add('hidden');
  }

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
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const correctLetter = letters[correctIndex] || '';
  const yourLetter = selectedIndex >= 0 ? (letters[selectedIndex] || '') : '';
  const parts = [];
  const correctChoice = q.choices[correctIndex];
  parts.push(`Correct answer: ${correctLetter} — ${correctChoice?.text ?? ''}`.trim());
  if (yourLetter && yourLetter !== correctLetter) parts.push(`Your answer: ${yourLetter}.`);
  // Add reason for correct and, if selected wrong, the reason for that one
  if (correctChoice?.why) parts.push(`Why ${correctLetter} is correct: ${correctChoice.why}`);
  if (!correct && selectedIndex >= 0) {
    const chosen = q.choices[selectedIndex];
    if (chosen?.why) {
      parts.push(`Why ${yourLetter} is not correct: ${chosen.why}`);
    } else if (chosen) {
      parts.push(`Selected: ${yourLetter} — ${chosen.text}`);
    }
  }
  if (q.explanation) parts.push(`Explanation: ${q.explanation}`);
  const msg = parts.join('\n');
  exp.textContent = msg;
  exp.classList.toggle('hidden', !msg);

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
  updateEstimate();

  updateStartEnabled();
}

function hookUI() {
  renderTopics();
  updateStartEnabled();

  $('#questionCount').addEventListener('input', (e) => {
    const val = Number(e.target.value) || 1;
    state.settings.count = Math.max(1, val);
    updateEstimate();
  });
  updateEstimate();
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
