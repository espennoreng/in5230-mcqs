Getting started — MCQs (30)

Sources: https://dhis2-app-course.ifi.uio.no/learn/getting-started/course-introduction/ https://dhis2-app-course.ifi.uio.no/lea20) What does "caching" of external JS files by the browser achieve?
    A. Prevents code execution on later visits
    B. Avoids refetching unchanged files, improving load performance
    C. Disables minification
    D. Forces hard reloads
    Answer: B
    Explanation: Cached resources reduce network usage and speed up navigation.

21) What is the primary purpose of a dedicated code editor in web development?
    A. To execute JavaScript code without a browser
    B. To provide syntax highlighting, code completion, and development tools
    C. To replace the need for version control systems
    D. To compile HTML to machine code
    Answer: B
    Explanation: Code editors offer highlighting, completion, extensions, and version control integration to improve productivity.
    Why A: While some editors can run code, this is not their primary purpose
    Why C: Editors complement but don't replace version control
    Why D: HTML is interpreted, not compiled to machine code

22) What is Git primarily used for in web development?
    A. Running JavaScript code
    B. Tracking code changes over time and enabling team collaboration
    C. Styling web pages
    D. Compiling TypeScript
    Answer: B
    Explanation: Git is a distributed version control system that tracks modifications and enables branching and merging for collaboration.
    Why A: Git doesn't execute code
    Why C: CSS handles styling, not Git
    Why D: TypeScript compilation is handled by tsc

23) What is NodeJS?
    A. A web browser
    B. A JavaScript interpreter/runtime environment for executing JS outside browsers
    C. A CSS framework
    D. A database management system
    Answer: B
    Explanation: NodeJS reads JavaScript files and converts them to machine code that computers can run, enabling server-side JavaScript.
    Why A: NodeJS is not a browser, though both can execute JS
    Why C: NodeJS is a runtime, not a styling framework
    Why D: NodeJS can connect to databases but isn't a database itself

24) What does npm stand for and what is its primary purpose?
    A. Node Package Manager - manages JavaScript dependencies
    B. New Programming Method - a coding paradigm
    C. Network Protocol Manager - handles HTTP requests
    D. Node Performance Monitor - tracks application speed
    Answer: A
    Explanation: npm is the default package manager for NodeJS, used to install, update, and manage project dependencies.
    Why B: npm is a tool, not a programming method
    Why C: npm manages packages, not network protocols
    Why D: While performance can be monitored, npm's primary role is dependency management

25) Which feature is NOT typically provided by modern code editors?
    A. Syntax highlighting for various programming languages
    B. Version control integration (e.g., Git)
    C. Automatic server infrastructure provisioning
    D. Code completion and IntelliSense
    Answer: C
    Explanation: While editors integrate with development tools, automatic infrastructure provisioning is typically handled by separate DevOps tools.
    Why A: Syntax highlighting is a core editor feature
    Why B: Git integration is standard in modern editors
    Why D: Code completion helps developers write code faster

26) What is Yarn in the context of JavaScript development?
    A. A CSS grid system
    B. An alternative package manager to npm
    C. A JavaScript testing framework
    D. A type of database
    Answer: B
    Explanation: Yarn is a package manager similar to npm, offering dependency management with some performance and feature differences.
    Why A: Yarn manages packages, not CSS layouts
    Why C: Testing frameworks like Jest are separate tools
    Why D: Yarn doesn't store application data

27) Why is version control important in software development?
    A. It makes code run faster
    B. It tracks changes, enables rollback, and facilitates team collaboration
    C. It automatically fixes bugs
    D. It eliminates the need for testing
    Answer: B
    Explanation: Version control systems like Git maintain history, allow reverting changes, and enable multiple developers to work on different features simultaneously through branching.
    Why A: Version control doesn't affect runtime performance
    Why C: Developers must manually fix bugs; version control only tracks changes
    Why D: Testing remains essential regardless of version control

28) What is the purpose of the Git branching system?
    A. To delete old code permanently
    B. To allow developers to work on separate tasks and merge changes later
    C. To compress files
    D. To deploy applications automatically
    Answer: B
    Explanation: Branching lets developers create isolated workspaces for features or fixes, which can later be merged into the main branch.
    Why A: Git preserves history; branches don't delete code
    Why C: Branching is about code organization, not compression
    Why D: Deployment is typically handled by CI/CD tools

29) Which statement about code editor extensibility is correct?
    A. Extensions cannot modify editor behavior
    B. Extensions can add new features like language support, debugging tools, and integrations
    C. Only one extension can be installed at a time
    D. Extensions only change the editor's color theme
    Answer: B
    Explanation: Modern editors support extensions that enhance functionality, from syntax support to linting, debugging, and API integrations.
    Why A: Extensions specifically modify and extend editor capabilities
    Why C: Multiple extensions can work together
    Why D: Extensions provide far more than just themes

30) Why is NodeJS required for modern JavaScript application development?
    A. To run JavaScript applications in the browser
    B. To execute build tools, development servers, and manage dependencies locally
    C. To replace HTML and CSS
    D. To compile JavaScript to assembly language
    Answer: B
    Explanation: NodeJS enables development tooling like bundlers (Webpack, Vite), transpilers (Babel), and package managers (npm/Yarn) to run locally.
    Why A: Browsers execute JS in the browser; NodeJS runs JS locally
    Why C: NodeJS complements HTML/CSS, doesn't replace them
    Why D: NodeJS interprets/compiles to machine code, not assembly
ng-started/development-setup/

1) Which statement best describes the difference between client and server in web apps?
    A. Both run in the browser and share memory
    B. The client runs in users' browsers; the server runs on remote machines handling requests and data
    C. The server renders CSS; the client renders JavaScript only
    D. The client stores databases; the server displays UI
    Answer: B
    Explanation: The client (browser) handles UI, events and rendering; the server processes requests, stores data, and exposes APIs. Communication typically occurs over HTTP/HTTPS.

2) Which stack is sufficient to build a static site with interactivity and styling?
    A. HTML only
    B. HTML + CSS + JavaScript
    C. CSS + SQL
    D. JavaScript + SQL
    Answer: B
    Explanation: A static site needs HTML (structure), CSS (presentation), and JavaScript (client-side interactivity). No server-side code is required for most static sites.

3) What is the primary purpose of HTML in the web platform?
    A. State management
    B. Styling documents
    C. Marking up content structure and semantics
    D. Rendering on the server
    Answer: C
    Explanation: HTML defines the document structure and semantics (headings, paragraphs, lists, forms), which is essential for accessibility, search engines, and consistent rendering across browsers.

4) What does CSS primarily control?
    A. Document structure
    B. Rendering and presentation (layout, colors, typography)
    C. Database connectivity
    D. Routing
    Answer: B
    Explanation: CSS defines how content looks — layout, colors, fonts, spacing — separate from HTML semantics and JavaScript behavior. Separation of concerns improves maintainability.

5) Why prefer external .js files over inline <script> for larger apps?
    A. Inline scripts are faster
    B. External files reduce duplication, improve caching, and maintainability
    C. Browsers cannot run inline scripts
    D. External scripts disable the console
    Answer: B
    Explanation: External scripts enable caching across pages, easier debugging, and cleaner HTML. Use `defer` or `module` to avoid render-blocking.

6) Which is true about JavaScript in browsers?
    A. It is optional and unsupported by modern browsers
    B. Its the only widely supported language executed by browsers
    C. Browsers execute Java bytecode directly
    D. It must be compiled to WASM first
    Answer: B
    Explanation: JavaScript is the standard language for client-side scripting in browsers. WebAssembly is an additional option but not a replacement for most web development tasks.

7) Opening DevTools console allows you to:
    A. Edit server-side database schemas
    B. View and log runtime errors and debug prints
    C. Disable CSS parsing
    D. Compile TypeScript automatically
    Answer: B
    Explanation: DevTools lets you inspect the DOM, debug JavaScript, view network requests, and see console logs and runtime errors — essential for debugging web apps.

8) Which is NOT a best practice when naming identifiers in JS?
    A. Use lowerCamelCase for variables
    B. Start identifiers with a number if its short
    C. Avoid reserved keywords like const
    D. Use descriptive names
    Answer: B
    Explanation: Identifiers cannot start with digits; follow consistent naming (lowerCamelCase for variables, PascalCase for constructors) and use descriptive names to improve readability.

9) What does "scope" manage in JavaScript?
    A. CSS specificity
    B. Availability and lifetime of bindings (variables/constants)
    C. Database transactions
    D. HTTP headers
    Answer: B
    Explanation: Scope determines where variables are visible and how long they live. Use block scope (`let`/`const`) to limit visibility and avoid accidental global variables.

10) Which block-scoped declarations are recommended for modern JS?
    A. var only
    B. const and let
    C. goto and var
    D. typedef and const
    Answer: B
    Explanation: Prefer `const` for bindings that don't reassign and `let` when reassignment is needed; avoid `var` to prevent hoisting-related bugs.

11) Which statement about "static vs interactive sites" is accurate?
    A. Static sites cannot load CSS
    B. Interactive sites use JS to update UI without full page reloads
    C. Interactive sites require server-side rendering only
    D. Static sites must be single-page apps
    Answer: B
    Explanation: Interactive sites use JavaScript to handle events and change parts of the page dynamically (AJAX/SPAs), while static sites can still be interactive with client-side JS.

12) Where is it most appropriate to include a script tag for best perceived performance in classic pages (without module/defer)?
    A. At top of <head> blocking render
    B. At end of <body>
    C. In CSS files
    D. Inline inside <title>
    Answer: B
    Explanation: Put blocking scripts at the end of `<body>` so primary content renders first. Alternatively, use `defer` or `module` to load scripts without blocking parsing.

13) What keyboard shortcut often opens DevTools?
    A. F12 (or Cmd+Option+I on macOS)
    B. F1
    C. Shift+Tab
    D. Ctrl+C
    Answer: A
    Explanation: F12 or platform shortcuts open DevTools in most browsers, making debugging and inspection quick.

14) Which console method is best to signal an error in logs?
    A. console.info
    B. console.error
    C. console.warn
    D. console.dir
    Answer: B
    Explanation: `console.error` clearly marks errors; many browsers show them prominently in the Console and may include stack traces.

15) What is the main advantage of semantic HTML (e.g., <nav>, <main>, <article>)?
    A. Smaller bundle size than div
    B. Better accessibility and machine understanding
    C. Enables server-side cookies
    D. Increases CSS performance automatically
    Answer: B
    Explanation: Semantic elements give meaning to content, improving accessibility (screen readers), search engine understanding, and maintainability.

16) Which pairing matches responsibility correctly?
    A. Server: rendering CSS animations; Client: DB writes
    B. Client: UI rendering/event handling; Server: data storage/business logic
    C. Client: OS-level drivers; Server: browser rendering
    D. Server: keyboard events; Client: backups
    Answer: B
    Explanation: Clients render UI and handle events; servers host APIs, persist state, and enforce business rules.

17) Whats a drawback of embedding all JS inline in HTML on every page?
    A. Browsers wont execute it
    B. Larger HTML payloads and no effective caching of shared code
    C. CSS stops working
    D. Breaks HTTP/2 multiplexing
    Answer: B
    Explanation: Inline scripts increase page size and prevent browsers from caching shared code; external files benefit from caching and CDNs.

18) Which statement about the browser event loop is true at a high level?
    A. JS runs on multiple threads by default
    B. Asynchronous callbacks are queued and executed after current call stack clears
    C. Promises run before synchronous code
    D. setTimeout always fires exactly at the delay boundary
    Answer: B
    Explanation: Asynchronous callbacks are scheduled and run after synchronous code completes. Microtasks (Promises) run before the next macrotask; timers are macrotasks.

19) Which tool is NOT typically part of a basic front-end dev environment?
    A. Code editor
    B. Browser with DevTools
    C. Node.js and npm
    D. Relational database server on client
    Answer: D
    Explanation: Front-end developers usually need an editor, browser/DevTools, and Node tooling. A relational DB on the client is not typical.

20) What does "caching" of external JS files by the browser achieve?
    A. Prevents code execution on later visits
    B. Avoids refetching unchanged files, improving load performance
    C. Disables minification
    D. Forces hard reloads
    Answer: B
    Explanation: Browser caching stores resources so subsequent visits load faster by avoiding repeated network requests. Proper cache-control headers help manage cache freshness.
