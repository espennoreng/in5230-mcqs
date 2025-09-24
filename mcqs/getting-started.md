Getting started — MCQs (20)

1) Which statement best describes the difference between client and server in web apps?
   A. Both run in the browser and share memory
   B. The client runs in users' browsers; the server runs on remote machines handling requests and data
   C. The server renders CSS; the client renders JavaScript only
   D. The client stores databases; the server displays UI
   Answer: B
   Explanation: Client = browser-side UI; server = remote process responding to HTTP, persisting data.

2) Which stack is sufficient to build a static site with interactivity and styling?
   A. HTML only
   B. HTML + CSS + JavaScript
   C. CSS + SQL
   D. JavaScript + SQL
   Answer: B
   Explanation: HTML for structure, CSS for style, JS for behavior.

3) What is the primary purpose of HTML in the web platform?
   A. State management
   B. Styling documents
   C. Marking up content structure and semantics
   D. Rendering on the server
   Answer: C
   Explanation: HTML provides semantic structure that user agents and assistive tech understand.

4) What does CSS primarily control?
   A. Document structure
   B. Rendering and presentation (layout, colors, typography)
   C. Database connectivity
   D. Routing
   Answer: B
   Explanation: CSS handles presentation separate from structure/logic.

5) Why prefer external .js files over inline <script> for larger apps?
   A. Inline scripts are faster
   B. External files reduce duplication, improve caching, and maintainability
   C. Browsers cannot run inline scripts
   D. External scripts disable the console
   Answer: B
   Explanation: Cached external files avoid resending code and keep HTML lean.

6) Which is true about JavaScript in browsers?
   A. It is optional and unsupported by modern browsers
   B. It’s the only widely supported language executed by browsers
   C. Browsers execute Java bytecode directly
   D. It must be compiled to WASM first
   Answer: B
   Explanation: JS is the de facto scripting language across major browsers.

7) Opening DevTools console allows you to:
   A. Edit server-side database schemas
   B. View and log runtime errors and debug prints
   C. Disable CSS parsing
   D. Compile TypeScript automatically
   Answer: B
   Explanation: Console shows errors, logs from console.log/error, etc.

8) Which is NOT a best practice when naming identifiers in JS?
   A. Use lowerCamelCase for variables
   B. Start identifiers with a number if it’s short
   C. Avoid reserved keywords like const
   D. Use descriptive names
   Answer: B
   Explanation: Identifiers cannot start with digits.

9) What does “scope” manage in JavaScript?
   A. CSS specificity
   B. Availability and lifetime of bindings (variables/constants)
   C. Database transactions
   D. HTTP headers
   Answer: B
   Explanation: Blocks/functions/modules create scopes controlling visibility.

10) Which block-scoped declarations are recommended for modern JS?
    A. var only
    B. const and let
    C. goto and var
    D. typedef and const
    Answer: B
    Explanation: Use const by default; let when reassignment needed; avoid var.

11) Which statement about “static vs interactive sites” is accurate?
    A. Static sites cannot load CSS
    B. Interactive sites use JS to update UI without full page reloads
    C. Interactive sites require server-side rendering only
    D. Static sites must be single-page apps
    Answer: B
    Explanation: JS enables partial updates, event-driven interactivity.

12) Where is it most appropriate to include a script tag for best perceived performance in classic pages (without module/defer)?
    A. At top of <head> blocking render
    B. At end of <body>
    C. In CSS files
    D. Inline inside <title>
    Answer: B
    Explanation: Placing scripts late reduces render-blocking (unless using defer/module).

13) What keyboard shortcut often opens DevTools?
    A. F12 (or Cmd+Option+I on macOS)
    B. F1
    C. Shift+Tab
    D. Ctrl+C
    Answer: A
    Explanation: F12 commonly opens DevTools; macOS variations exist.

14) Which console method is best to signal an error in logs?
    A. console.info
    B. console.error
    C. console.warn
    D. console.dir
    Answer: B
    Explanation: console.error denotes error conditions.

15) What is the main advantage of semantic HTML (e.g., <nav>, <main>, <article>)?
    A. Smaller bundle size than div
    B. Better accessibility and machine understanding
    C. Enables server-side cookies
    D. Increases CSS performance automatically
    Answer: B
    Explanation: Semantics aid screen readers, SEO, and structure.

16) Which pairing matches responsibility correctly?
    A. Server: rendering CSS animations; Client: DB writes
    B. Client: UI rendering/event handling; Server: data storage/business logic
    C. Client: OS-level drivers; Server: browser rendering
    D. Server: keyboard events; Client: backups
    Answer: B
    Explanation: Client handles UI; server handles APIs/state.

17) What’s a drawback of embedding all JS inline in HTML on every page?
    A. Browsers won’t execute it
    B. Larger HTML payloads and no effective caching of shared code
    C. CSS stops working
    D. Breaks HTTP/2 multiplexing
    Answer: B
    Explanation: Inline duplicates code per page; external files are cached.

18) Which statement about the browser event loop is true at a high level?
    A. JS runs on multiple threads by default
    B. Asynchronous callbacks are queued and executed after current call stack clears
    C. Promises run before synchronous code
    D. setTimeout always fires exactly at the delay boundary
    Answer: B
    Explanation: Event loop dispatches queued tasks/microtasks after stack clears.

19) Which tool is NOT typically part of a basic front-end dev environment?
    A. Code editor
    B. Browser with DevTools
    C. Node.js and npm
    D. Relational database server on client
    Answer: D
    Explanation: Local DB isn’t required for front-end dev; APIs provide data.

20) What does “caching” of external JS files by the browser achieve?
    A. Prevents code execution on later visits
    B. Avoids refetching unchanged files, improving load performance
    C. Disables minification
    D. Forces hard reloads
    Answer: B
    Explanation: Cached resources reduce network usage and speed up navigation.
