JavaScript Part 3 — Async, Fetch, DOM (30)

1) JavaScript concurrency model in browsers is:
   A. Multi-threaded JS by default
   B. Single-threaded with an event loop and task/microtask queues
   C. Only synchronous
   D. Parallel threads per function
   Answer: B
   Explanation: Event loop processes callbacks after stack clears.

2) setTimeout(() => console.log('x'), 0) logs:
   A. Before any synchronous logs
   B. After the current call stack completes
   C. At exactly 0ms regardless of load
   D. Never
   Answer: B
   Explanation: Timers queue a task; executed later.

3) Promises primarily represent:
   A. Immediate values
   B. A proxy for a value that may be available now, later, or never
   C. DOM nodes
   D. CSS animations
   Answer: B
   Explanation: Promise encapsulates async completion/failure.

4) Async/await is syntactic sugar over:
   A. Callbacks only
   B. Promises
   C. Generators exclusively
   D. Web Workers
   Answer: B
   Explanation: await unwraps Promises.

5) Which is true about fetch API?
   A. Returns data directly
   B. Returns a Promise resolving to a Response
   C. Requires jQuery
   D. Only works with XML
   Answer: B
   Explanation: Use response.json() to parse JSON.

6) REST commonly uses which HTTP verbs for CRUD?
   A. GET/POST/PUT/PATCH/DELETE
   B. FETCH/SEND/UPDATE/REMOVE
   C. OPEN/CLOSE
   D. LIST/CREATE/ALTER/DROP
   Answer: A
   Explanation: Standard RESTful verbs.

7) JSON stands for:
   A. JavaScript Object Notation
   B. Java Serialization Object Notation
   C. JavaScript Ordered Numbers
   D. Java Source Object Notation
   Answer: A
   Explanation: Text format for data interchange.

8) Parsing JSON from fetch response:
   A. const data = response.body
   B. const data = await response.json()
   C. const data = JSON.parse(response)
   D. response.toJSON()
   Answer: B
   Explanation: Response.json() returns a Promise of parsed JSON.

9) DOM stands for:
   A. Document Object Model
   B. Data Object Map
   C. Document Oriented Module
   D. Dynamic Object Mesh
   Answer: A
   Explanation: In-memory tree representation of a page.

10) Select the first element matching a CSS selector:
    A. document.getElementByIdAll('x')
    B. document.querySelector('.class')
    C. document.query('.class')
    D. window.querySelectorAll()
    Answer: B
    Explanation: querySelector returns first match.

11) Add a click handler to a button with id="go":
    A. btn.onClick = fn
    B. document.getElementById('go').addEventListener('click', fn)
    C. document.on('go','click', fn)
    D. window.click('go', fn)
    Answer: B
    Explanation: addEventListener attaches event handlers.

12) Changing text content of an element:
    A. el.innerHTML = '<script>'
    B. el.textContent = 'Hello'
    C. el.value = 'Hello' for any element
    D. el.appendStyle('Hello')
    Answer: B
    Explanation: textContent sets text safely.

13) Preventing default form submit:
    A. event.stop()
    B. event.stopPropagation()
    C. event.preventDefault()
    D. return false always
    Answer: C
    Explanation: preventDefault cancels default action.

14) Which is a common pitfall with async code?
    A. Believing setTimeout(0) runs before synchronous code
    B. Using const
    C. Using CSS
    D. Writing small functions
    Answer: A
    Explanation: Timers execute after stack clears.

15) Safely inserting user-provided text into the DOM:
    A. innerHTML with concatenation
    B. textContent or createTextNode
    C. document.write
    D. eval()
    Answer: B
    Explanation: Avoid XSS; don’t set HTML directly from user input.

16) With fetch, how do you handle non-2xx statuses?
    A. Fetch throws automatically
    B. Check response.ok or status and branch
    C. It’s impossible
    D. Use console.error only
    Answer: B
    Explanation: Fetch resolves on HTTP errors; you must check status.

17) Which header typically indicates JSON payload on POST?
    A. Accept: text/html
    B. Content-Type: application/json
    C. Authorization: Bearer
    D. Origin: *
    Answer: B
    Explanation: Content-Type declares body format.

18) Debouncing scroll or input events helps with:
    A. Memory leaks
    B. Limiting frequency of handler execution
    C. CSS specificity
    D. Access control
    Answer: B
    Explanation: Debounce/throttle improve performance.

19) The event target property refers to:
    A. The current listener’s element only
    B. The element that triggered the event
    C. The window
    D. The document always
    Answer: B
    Explanation: event.target is original source.

20) Which approach updates UI without full page reload?
    A. XMLHttpRequest/fetch with DOM updates (AJAX)
    B. Linking to a new page only
    C. Using only CSS transitions
    D. Server restarts
    Answer: A
    Explanation: AJAX pattern updates parts of page.

21) Which is true about CORS?
    A. Client can bypass it automatically
    B. Server must allow origins via headers
    C. It’s a CSS feature
    D. Only applies to images
    Answer: B
    Explanation: Cross-Origin Resource Sharing controlled by server.

22) A good practice when manipulating lists in the DOM repeatedly is to:
    A. Force synchronous layouts
    B. Use document fragments or batch updates
    C. Use alert()
    D. Set innerHTML in a loop thousands of times
    Answer: B
    Explanation: Reduces reflows and improves performance.

23) Async function error handling uses:
    A. try/catch around await or .catch on the Promise
    B. Only window.onerror
    C. Synchronous catch only
    D. Not needed
    Answer: A
    Explanation: Handle rejections/errors with try/catch or promise chains.

24) The Response.json() method:
    A. Is synchronous
    B. Returns a Promise that resolves with parsed JSON
    C. Mutates response
    D. Only works in Node
    Answer: B
    Explanation: Parsing is async.

25) A DOMContentLoaded event fires when:
    A. All images and styles finish loading
    B. Initial HTML has been parsed
    C. The service worker is ready
    D. After onload only
    Answer: B
    Explanation: DOM ready before all subresources.

26) To read or change classes on an element programmatically:
    A. el.style.className
    B. el.classList.add/remove/toggle
    C. el.classes()
    D. el.setAttribute('styles','')
    Answer: B
    Explanation: classList API is convenient and safe.

27) Which is a safe pattern for updating many rows from fetched JSON?
    A. Build HTML strings and eval
    B. Map JSON to elements, append via DocumentFragment, replace container
    C. Insert one row at a time with synchronous layout forced
    D. Use alert in a loop
    Answer: B
    Explanation: Batching avoids excessive reflow/paint.

28) A typical REST GET to an API endpoint returns:
    A. UI HTML for browsers only
    B. Structured data like JSON
    C. Compiled WASM
    D. CSS styles
    Answer: B
    Explanation: APIs return data; clients render it.

29) The best place to attach event handlers for dynamically-created elements is often:
    A. Directly on each element only
    B. Event delegation on a stable ancestor element
    C. window
    D. document.head
    Answer: B
    Explanation: Delegation uses bubbling to reduce listeners.

30) Security note for user-supplied HTML:
    A. It’s safe to trust if from same origin
    B. Sanitize or avoid innerHTML; prefer textContent
    C. Use eval for fast parsing
    D. Nothing needed
    Answer: B
    Explanation: Prevent XSS by not injecting raw HTML.
