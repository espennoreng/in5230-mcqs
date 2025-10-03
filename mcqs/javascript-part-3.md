JavaScript Part 3 — Async, Fetch, DOM (30)

1) JavaScript concurrency model in browsers is:
    A. Multi-threaded JS by default
    B. Single-threaded with an event loop and task/microtask queues
    C. Only synchronous
    D. Parallel threads per function
    Answer: B
    Explanation: JavaScript runs on a single main thread but uses an event loop and queues (tasks and microtasks) to handle asynchronous callbacks. Understanding this model explains why async work doesn't block UI and how promises vs. setTimeout ordering works.

2) setTimeout(() => console.log('x'), 0) logs:
    A. Before any synchronous logs
    B. After the current call stack completes
    C. At exactly 0ms regardless of load
    D. Never
    Answer: B
    Explanation: A zero-delay timer schedules a macrotask that runs after the current call stack finishes and after pending microtasks. It does not run immediately; actual delay may be longer due to browser throttling and load.

3) Promises primarily represent:
    A. Immediate values
    B. A proxy for a value that may be available now, later, or never
    C. DOM nodes
    D. CSS animations
    Answer: B
    Explanation: A Promise is an object representing eventual success or failure of an asynchronous operation. Use `.then/.catch` or `await` to work with the resolved value or error.

4) Async/await is syntactic sugar over:
    A. Callbacks only
    B. Promises
    C. Generators exclusively
    D. Web Workers
    Answer: B
    Explanation: `async`/`await` makes promise-based code look synchronous. An `async` function returns a Promise; `await` pauses execution until the Promise resolves (inside the async function), simplifying control flow and error handling with try/catch.

5) Which is true about fetch API?
    A. Returns data directly
    B. Returns a Promise resolving to a Response
    C. Requires jQuery
    D. Only works with XML
    Answer: B
    Explanation: `fetch()` returns a Promise that resolves to a `Response` object. To get JSON, call `await response.json()`. Remember to check `response.ok` or `response.status` to handle HTTP errors — fetch doesn't throw on non-2xx statuses.

6) REST commonly uses which HTTP verbs for CRUD?
    A. GET/POST/PUT/PATCH/DELETE
    B. FETCH/SEND/UPDATE/REMOVE
    C. OPEN/CLOSE
    D. LIST/CREATE/ALTER/DROP
    Answer: A
    Explanation: RESTful APIs typically map CRUD operations to HTTP methods: GET (read), POST (create), PUT/PATCH (update), DELETE (remove). PATCH is for partial updates; PUT often replaces a resource.

7) JSON stands for:
    A. JavaScript Object Notation
    B. Java Serialization Object Notation
    C. JavaScript Ordered Numbers
    D. Java Source Object Notation
    Answer: A
    Explanation: JSON is a lightweight, language-agnostic text format for data interchange that resembles JavaScript object literals. Use `JSON.stringify`/`JSON.parse` or `response.json()` to handle JSON.

8) Parsing JSON from fetch response:
    A. const data = response.body
    B. const data = await response.json()
    C. const data = JSON.parse(response)
    D. response.toJSON()
    Answer: B
    Explanation: `response.json()` is asynchronous and returns a Promise resolving with the parsed JSON. `response.body` is a stream; don't pass the raw Response into `JSON.parse` directly.

9) DOM stands for:
    A. Document Object Model
    B. Data Object Map
    C. Document Oriented Module
    D. Dynamic Object Mesh
    Answer: A
    Explanation: The DOM is the in-memory tree representation of the document (HTML). You interact with it via APIs like `document.querySelector`, `element.textContent`, and event listeners.

10) Select the first element matching a CSS selector:
    A. document.getElementByIdAll('x')
    B. document.querySelector('.class')
    C. document.query('.class')
    D. window.querySelectorAll()
    Answer: B
    Explanation: `document.querySelector(selector)` returns the first matching element. For all matches use `querySelectorAll`, and for single ID use `getElementById` for performance.

11) Add a click handler to a button with id="go":
    A. btn.onClick = fn
    B. document.getElementById('go').addEventListener('click', fn)
    C. document.on('go','click', fn)
    D. window.click('go', fn)
    Answer: B
    Explanation: `addEventListener` attaches event handlers without overwriting existing ones. `element.onclick = fn` also works but replaces any previous handler.

12) Changing text content of an element:
    A. el.innerHTML = '<script>'
    B. el.textContent = 'Hello'
    C. el.value = 'Hello' for any element
    D. el.appendStyle('Hello')
    Answer: B
    Explanation: `textContent` sets or reads text safely and does not parse HTML, preventing XSS. Use `innerHTML` only for trusted HTML snippets.

13) Preventing default form submit:
    A. event.stop()
    B. event.stopPropagation()
    C. event.preventDefault()
    D. return false always
    Answer: C
    Explanation: `event.preventDefault()` prevents the browser's default action (like form submission). `stopPropagation()` stops the event bubbling; `return false` only works in some older frameworks.

14) Which is a common pitfall with async code?
    A. Believing setTimeout(0) runs before synchronous code
    B. Using const
    C. Using CSS
    D. Writing small functions
    Answer: A
    Explanation: Expecting asynchronous callbacks to run immediately is a common mistake. Timers and promise callbacks execute after current synchronous code and microtasks, so order matters. Always reason about scheduling when composing async operations.

15) Safely inserting user-provided text into the DOM:
    A. innerHTML with concatenation
    B. textContent or createTextNode
    C. document.write
    D. eval()
    Answer: B
    Explanation: Use `textContent` or `createTextNode` to add user text safely. Avoid `innerHTML` with untrusted input because it can enable XSS attacks.

16) With fetch, how do you handle non-2xx statuses?
    A. Fetch throws automatically
    B. Check response.ok or status and branch
    C. Its impossible
    D. Use console.error only
    Answer: B
    Explanation: `fetch` resolves the Promise even for HTTP errors; check `response.ok` or `response.status` and handle error cases (throw or return appropriate UI state). Network failures reject the promise.

17) Which header typically indicates JSON payload on POST?
    A. Accept: text/html
    B. Content-Type: application/json
    C. Authorization: Bearer
    D. Origin: *
    Answer: B
    Explanation: `Content-Type: application/json` tells the server the request body is JSON. Also set `Accept` if you require a particular response type. Always stringify objects (`JSON.stringify`) when sending JSON.

18) Debouncing scroll or input events helps with:
    A. Memory leaks
    B. Limiting frequency of handler execution
    C. CSS specificity
    D. Access control
    Answer: B
    Explanation: Debounce and throttle limit how often expensive handlers run (e.g., on resize/scroll/input), improving responsiveness and reducing unnecessary work.

19) The event target property refers to:
    A. The current listeners element only
    B. The element that triggered the event
    C. The window
    D. The document always
    Answer: B
    Explanation: `event.target` is the original element that dispatched the event (useful with event delegation). `event.currentTarget` is the element whose listener is currently running.

20) Which approach updates UI without full page reload?
    A. XMLHttpRequest/fetch with DOM updates (AJAX)
    B. Linking to a new page only
    C. Using only CSS transitions
    D. Server restarts
    Answer: A
    Explanation: AJAX (XHR/fetch) allows fetching data and updating parts of the DOM dynamically, enabling single-page-app style interactions without full navigation.

21) Which is true about CORS?
    A. Client can bypass it automatically
    B. Server must allow origins via headers
    C. Its a CSS feature
    D. Only applies to images
    Answer: B
    Explanation: CORS is enforced by browsers: servers must include appropriate `Access-Control-Allow-Origin` and related headers to permit cross-origin requests. Clients cannot bypass CORS without server cooperation or proxying.

22) A good practice when manipulating lists in the DOM repeatedly is to:
    A. Force synchronous layouts
    B. Use document fragments or batch updates
    C. Use alert()
    D. Set innerHTML in a loop thousands of times
    Answer: B
    Explanation: Build content off-DOM (DocumentFragment) or in-memory and append once to minimize reflows/repaints and improve performance. Avoid frequent direct DOM mutations in loops.

23) Async function error handling uses:
    A. try/catch around await or .catch on the Promise
    B. Only window.onerror
    C. Synchronous catch only
    D. Not needed
    Answer: A
    Explanation: Use try/catch inside async functions to handle awaited Promise rejections, or attach `.catch()` to Promises. Always handle errors to avoid unhandled rejections.

24) The Response.json() method:
    A. Is synchronous
    B. Returns a Promise that resolves with parsed JSON
    C. Mutates response
    D. Only works in Node
    Answer: B
    Explanation: `response.json()` returns a Promise because parsing may be asynchronous. Use `await response.json()` to get the parsed object.

25) A DOMContentLoaded event fires when:
    A. All images and styles finish loading
    B. Initial HTML has been parsed
    C. The service worker is ready
    D. After onload only
    Answer: B
    Explanation: `DOMContentLoaded` fires when the initial HTML document is parsed and DOM is built; it does not wait for images/stylesheets. Use `load` if you need all resources loaded.

26) To read or change classes on an element programmatically:
    A. el.style.className
    B. el.classList.add/remove/toggle
    C. el.classes()
    D. el.setAttribute('styles','')
    Answer: B
    Explanation: `element.classList` offers `add`, `remove`, `toggle`, and `contains` methods for safe class manipulation. `className` works but requires string manipulation.

27) Which is a safe pattern for updating many rows from fetched JSON?
    A. Build HTML strings and eval
    B. Map JSON to elements, append via DocumentFragment, replace container
    C. Insert one row at a time with synchronous layout forced
    D. Use alert in a loop
    Answer: B
    Explanation: Create DOM nodes from data, append them to a `DocumentFragment`, then attach once to the DOM to minimize reflows. Avoid `eval` and excessive synchronous layout thrashing.

28) A typical REST GET to an API endpoint returns:
    A. UI HTML for browsers only
    B. Structured data like JSON
    C. Compiled WASM
    D. CSS styles
    Answer: B
    Explanation: REST APIs usually return structured data (JSON) that clients consume and render into the UI. HTML responses are possible but APIs generally provide data.

29) The best place to attach event handlers for dynamically-created elements is often:
    A. Directly on each element only
    B. Event delegation on a stable ancestor element
    C. window
    D. document.head
    Answer: B
    Explanation: Event delegation attaches a single listener to a parent and uses `event.target` to handle events from children, reducing memory and ensuring handlers work for future elements.

30) Security note for user-supplied HTML:
    A. Its safe to trust if from same origin
    B. Sanitize or avoid innerHTML; prefer textContent
    C. Use eval for fast parsing
    D. Nothing needed
    Answer: B
    Explanation: Never insert untrusted HTML with `innerHTML`. Sanitize content server-side or use `textContent`/templating to avoid cross-site scripting (XSS) vulnerabilities.
