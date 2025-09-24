IN5320 Exam Prep - Comprehensive MCQs

This workspace contains comprehensive multiple-choice questions (MCQs) derived from the DHIS2 App Course and related topics:
- Getting started (web/dev fundamentals)
- Essential front-end development (HTML & CSS)
- JavaScript (language core, control flow, async, fetch, DOM)
- React (JSX, elements, virtual DOM, components/props, state, hooks)
- DHIS2 (platform, CLI, App Runtime, UI library, data fetching/presentation/mutation, app lifecycle)

Source basis: dhis2-app-course.ifi.uio.no and linked course pages fetched during this session.

Files:
- mcqs/all-mcqs.md — All sections in one document
- mcqs/getting-started.md — 20 questions
- mcqs/html-css.md — 40 questions (HTML 20, CSS 20)
- mcqs/javascript-part-1.md — 30 questions (variables, functions, types)
- mcqs/javascript-part-2.md — 30 questions (arrays/objects, control flow)
- mcqs/javascript-part-3.md — 30 questions (async, fetch, DOM)
- mcqs/react.md — 40 questions (JSX, elements, VDOM, components/props, state, hooks)
- mcqs/dhis2.md — 40 questions (platform, runtime hooks, UI, data ops, app dev)

Answer key: Each question includes the correct answer and a brief explanation.

Tip: Use your editor’s outline and search to navigate by section.
# in5230-mcqs

## How to run the interactive quiz

You can practice these MCQs in a browser using the quiz app included in this workspace.

Option A: Open directly (some browsers block local fetch of files)
- Open `quiz/index.html` in your browser. If questions don't load due to local file restrictions, use Option B.

Option B: Serve locally
- Use any static file server from the `exam-prep` folder to allow the app to fetch the markdown files.

Examples:
- Python 3: `python3 -m http.server 8000`
- Node (if installed): `npx http-server -p 8000`

Then open: `http://localhost:8000/quiz/`

In the quiz app:
- Select topics, set the number of questions, and click “Load questions”.
- Click “Start quiz” to begin. You can shuffle questions and choices.
- Submit each answer to see feedback and explanations. Review results at the end.
