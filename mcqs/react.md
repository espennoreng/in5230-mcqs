React — MCQs (40)

JSX, Elements, Virtual DOM

1) JSX allows you to:
    A. Write CSS inside JSON
    B. Embed HTML-like syntax in JavaScript and run JS expressions inside {}
    C. Replace JavaScript
    D. Write server-side templates only
    Answer: B
    Explanation: JSX is a syntax extension that lets you write HTML-like markup inside JavaScript. Under the hood a JSX fragment like `<h1>{title}</h1>` compiles to `React.createElement('h1', null, title)`. JSX improves readability by colocating markup with logic; use curly braces `{}` to embed expressions (e.g., `{items.length}`) and remember it is just syntactic sugar — you still write JavaScript.

2) Given const el = <h1>Hello</h1>; it compiles roughly to:
    A. document.createElement('h1','Hello')
    B. React.createElement('h1', {}, 'Hello')
    C. new H1('Hello')
    D. DOM.virtual('h1','Hello')
    Answer: B
    Explanation: JSX compiles to React.createElement calls. The element `<h1>Hello</h1>` becomes `React.createElement('h1', null, 'Hello')` (or a similar runtime representation). This is an immutable description of the UI that React uses during rendering; it is not a direct DOM node.

3) React elements are:
    A. Mutable DOM nodes
    B. Immutable descriptions of UI
    C. CSS rules
    D. HTML strings
    Answer: B
    Explanation: React elements are plain objects (or lightweight descriptions) that describe what the UI should look like. They are immutable: once created they don't change. React compares these descriptions (the virtual DOM) to decide the minimal set of real DOM updates. Because elements are descriptions, you don't mutate them directly — instead you change the component's output and let React reconcile the difference.

4) Why shouldnt you directly mutate the DOM in React components?
    A. Its impossible
    B. It bypasses Reacts reconciliation and can cause inconsistencies
    C. It makes CSS invalid
    D. It disables hooks
    Answer: B
    Explanation: Direct DOM manipulation (e.g., `document.querySelector(...).innerHTML = 'x'`) bypasses React's virtual DOM and reconciliation. React expects the component render output to be the single source of truth; manual DOM changes can be overwritten by the next render or cause UI/state mismatches. When you need imperative control (for focus, measuring size), use refs and perform DOM work inside effects (`useEffect`) so React remains in charge of declarative updates.

5) What does the virtual DOM do?
    A. Replaces the real DOM permanently
    B. Keeps a lightweight representation to diff and update the real DOM efficiently
    C. Compiles CSS
    D. Stores cookies
    Answer: B
    Explanation: The virtual DOM is a lightweight in-memory representation of the UI (React elements). When state/props change, React produces a new virtual tree and diffs it against the previous one to compute minimal updates to the real DOM. This reduces expensive DOM operations and improves performance. Note: the VDOM is an implementation detail — writing efficient components (keys, avoiding heavy computation in render) matters more than relying on "virtual DOM" magic.

6) Embedding a list from an array in JSX commonly uses:
    A. for loops in HTML
    B. map to return arrays of elements
    C. while loops in attributes
    D. template literals only
    Answer: B
    Explanation: Use `items.map(item => <li key={item.id}>{item.name}</li>)` to render lists. The map returns an array of React elements that JSX can render. Always provide a stable `key` prop for each item (prefer a unique id, not the array index) so React can track items between renders. Avoid side-effects in render; keep mapping pure and fast.

Components and Props

7) Functional vs class components today:
    A. Class components are required for state
    B. Functional components with hooks are recommended and can manage state
    C. Only classes can render
    D. Functions cannot receive props
    Answer: B
    Explanation: Since React 16.8, functional components with hooks (useState, useEffect, etc.) can manage state and lifecycle needs. They are concise and preferred for new code. Class components still work but are less common. Example: `function Counter() { const [c, setC] = useState(0); return <button onClick={() => setC(c + 1)}>{c}</button>; }`.

8) Props are:
    A. Mutable by children
    B. Read-only inputs passed from parents to children
    C. Global state
    D. Only strings
    Answer: B
    Explanation: Props are values passed from parent to child components and should be treated as read-only within the child. Mutating props in the child breaks the data flow model. If a child needs to change data, lift the state up to a common ancestor or pass a callback prop to request changes.

9) Passing a callback from parent to child is useful to:
    A. Let child request parent state updates
    B. Share CSS
    C. Avoid re-renders
    D. Access DOM directly
    Answer: A
    Explanation: Pass a function as a prop so the child can notify or request changes from the parent. Pattern: `<Child onChange={value => setParent(value)} />` allows child to call `props.onChange(newValue)`. This keeps the parent as the source of truth while letting children initiate updates.

10) The key prop in lists helps React to:
    A. Style items
    B. Identify elements across renders for efficient diffing
    C. Prevent re-rendering
    D. Provide accessibility labels
    Answer: B
    Explanation: Keys let React match items between renders so it can reuse DOM nodes and preserve component state. Use stable unique identifiers (`user.id`) when possible. Using array indices as keys can cause bugs when items are reordered, inserted, or removed because indices change. Correct keys help avoid unnecessary remounting and preserve input focus, local state in child components, and animations.

11) Default export of a component must be:
    A. A class only
    B. A function or class returning/rendering elements
    C. An object literal
    D. A string
    Answer: B
    Explanation: A component export (default or named) should be a function or class that returns React elements (or null). Example: `export default function App() { return <div /> }`. The module system doesn't enforce component shape, but consumers expect the export to be a component.

State and Hooks

12) Component state is:
    A. Global store
    B. Component-local data that can change over time and trigger re-render
    C. Server data cache only
    D. Props alias
    Answer: B
    Explanation: State is data local to a component (or managed via external stores) that, when changed, causes the component to re-render. Use `useState` or `useReducer` for local state. For shared/global needs, lift state up or use context/external stores. Keep state minimal: derive values when possible rather than storing redundant copies.

13) Which rule is correct for hooks?
    A. Call hooks anywhere
    B. Call hooks only at top level of function components
    C. Call hooks inside loops for performance
    D. Call hooks inside conditions to skip
    Answer: B
    Explanation: Hooks must be called at the top level of React function components (not inside loops, conditions, or nested functions) and only from React functions. This ensures consistent call order across renders so React can associate hook state correctly. Breaking these rules leads to bugs and runtime errors.

14) useState returns:
    A. Only a value
    B. [state, setState] pair
    C. A reducer
    D. A promise
    Answer: B
    Explanation: `const [count, setCount] = useState(0)` returns a pair: the current state value and a setter function. Call the setter to update state and schedule a re-render. The setter accepts either a new value or an updater function: `setCount(c => c + 1)`. Remember setters are stable (identity doesn't change), so you can safely pass them to children.

15) Updating state based on previous state should use:
    A. setCount(count + 1) always
    B. setCount(c => c + 1)
    C. count++
    D. this.state.count++
    Answer: B
    Explanation: When the new state depends on the previous value, pass an updater function to the setter: `setCount(prev => prev + 1)`. This avoids bugs caused by stale closures when multiple state updates are queued. Example: calling `setCount(count + 1)` twice in the same render may not increment as expected; functional updates are reliable.

16) useEffect runs:
    A. During rendering
    B. After render commit by default
    C. Only on mount
    D. Only on unmount
    Answer: B
    Explanation: Effects run after the render is committed to the DOM. This is where to perform side effects (fetching data, subscribing, updating DOM via refs). The dependency array controls when the effect runs: `[]` runs once on mount, `[dep]` runs when dep changes. Effects do not run during the render phase, so they must not block rendering or return JSX.

17) Cleanup in useEffect is performed by:
    A. Returning a function from the effect
    B. setTimeout
    C. finally block
    D. useCleanup hook
    Answer: A
    Explanation: If an effect returns a function, React runs that function to clean up (on unmount or before re-running the effect when dependencies change). Example: `useEffect(() => { const id = setInterval(tick, 1000); return () => clearInterval(id); }, []);` ensures the timer is cleared when the component unmounts.

18) To run an effect only once on mount, dependencies should be:
    A. Omitted
    B. [] (empty array)
    C. [props]
    D. [Math.random()]
    Answer: B
    Explanation: Passing an empty dependency array `[]` tells React to run the effect only after the initial render (mount). Omitting the array runs the effect after every render. Be careful: if your effect uses props/state, include them in the deps array or intentionally memoize values to avoid stale closures.

19) Derived state from props should be handled by:
    A. Copying props into state always
    B. Computing on render when needed or memoizing
    C. useLayoutEffect only
    D. Global store
    Answer: B
    Explanation: Avoid copying props into local state unless you really need to (e.g., for controlled input initial value). Instead compute values from props during render or use `useMemo` to memoize expensive computations. Duplicating props in state causes synchronization bugs where state doesn't reflect prop changes.

20) What happens if you violate the Rules of Hooks (e.g., conditional calls)?
    A. Nothing
    B. Hook order breaks; state/Effects tie to wrong calls
    C. Only dev warning
    D. Auto-fix by React
    Answer: B
    Explanation: Hooks rely on a consistent call order across renders. If you call hooks conditionally or inside loops, the order can change between renders and React will associate hook state with the wrong call sites. This leads to subtle bugs and runtime errors. Follow the Rules of Hooks and extract conditional logic inside hooks or components instead.

JSX/Rendering specifics

21) Embedding a JS variable in JSX is done with:
    A. ${}
    B. {}
    C. %%
    D. ()
    Answer: B
    Explanation: Use `{}` to evaluate JavaScript expressions inside JSX: `<p>{user.name}</p>`. Template literal syntax `${}` is used inside strings but not directly inside JSX outside of an expression. Remember you can include any expression (ternary, function calls) but not statements (e.g., if) directly inside `{}`.

22) Which is valid JSX for conditional display?
    A. { if (cond) <A/> }
    B. { cond ? <A/> : null }
    C. <A/> if cond
    D. () => cond && <A/>
    Answer: B
    Explanation: Use ternary expressions (`{cond ? <A/> : null}`) or short-circuit (`{cond && <A/>}`) inside JSX. You cannot use statements like `if` directly inside JSX; wrap them in functions or perform conditional logic before returning JSX.

23) Providing class names in JSX uses:
    A. class
    B. className
    C. classes
    D. css
    Answer: B
    Explanation: JSX uses `className` (not `class`) because `class` is a reserved word in JavaScript. Example: `<div className="button primary">` maps to `class="button primary"` in the DOM. When conditionally applying classes, libraries like `clsx` or templates like `` `btn ${isActive ? 'active' : ''}` `` are helpful.

24) Inline styles in JSX use:
    A. String CSS
    B. Object with camelCased properties
    C. External CSS only
    D. SCSS variables
    Answer: B
    Explanation: The `style` prop expects an object with camelCased keys: `style={{ backgroundColor: 'red', fontSize: 14 }}`. Values are usually strings or numbers (numbers are treated as px). Prefer CSS classes for most styling; inline styles are useful for dynamic values calculated in JS.

25) Keys in lists must be:
    A. Index always
    B. Stable unique identifiers when possible
    C. Random each render
    D. Same for all items
    Answer: B
    Explanation: Use stable unique identifiers for keys (e.g., `id`). Keys help React match items between renders and preserve component state and DOM. Avoid generating new keys on every render (randoms) or using array indices when the list order can change, because this can cause incorrect re-use of components and subtle bugs (e.g., losing input focus or resetting component-local state).

React practices

26) Lifting state up means:
    A. Moving state to a common ancestor so children can share data
    B. Using context
    C. Refactoring to classes
    D. Storing in window
    Answer: A
    Explanation: When multiple components need the same data, move state to their nearest common ancestor and pass it down via props. This keeps a single source of truth and avoids duplicated logic. Example: parent holds `const [value, setValue] = useState('')` and passes `value` and `onChange` to child inputs.

27) For expensive recalculations based on inputs, you can use:
    A. useMemo
    B. useRef
    C. useId
    D. useImperativeHandle
    Answer: A
    Explanation: `useMemo(() => compute(a, b), [a, b])` memoizes a computed value and recomputes only when dependencies change. This can avoid expensive calculations on every render. Use it judiciously — premature memoization can add complexity; profile first.

28) To keep a mutable value that does not cause re-renders when changed:
    A. useState
    B. useRef
    C. useEffect
    D. useReducer
    Answer: B
    Explanation: `useRef` returns a mutable ref object whose `.current` property persists across renders without triggering re-renders when updated. It's useful for storing DOM nodes, timers, or mutable values that don't affect rendering. Example: `const idRef = useRef(); idRef.current = setTimeout(...)`.

29) useReducer suits:
    A. Trivial counters only
    B. Complex state transitions described by a reducer
    C. Styling
    D. DOM refs
    Answer: B
    Explanation: `useReducer` is helpful when state logic is complex or depends on previous state in many ways (complex updates, many actions). It centralizes update logic in a reducer function: `const [state, dispatch] = useReducer(reducer, initialState)`. It can make testing and reasoning about state easier than multiple useState calls.

30) When rendering large lists, performance improves with:
    A. No keys
    B. Virtualization (e.g., react-window), memoization, avoiding unnecessary renders
    C. Multiple nested providers
    D. Using innerHTML
    Answer: B
    Explanation: For long lists, use virtualization libraries (react-window/react-virtualized) to render only visible items. Combine with memoization and stable keys to reduce re-renders. Avoid rendering thousands of DOM nodes at once — virtualization keeps the DOM small and improves responsiveness.

VDOM/DOM differences

31) In React, you typically dont call:
    A. document.querySelector to update UI inside component render paths
    B. setState
    C. useEffect
    D. map for lists
    Answer: A
    Explanation: Manipulating the DOM directly in render bypasses React and causes maintenance issues. Use refs (`useRef`) inside `useEffect` for imperative DOM work when necessary (focus, measurements), but prefer declarative updates through JSX and state whenever possible.

32) React updates are:
    A. Always synchronous
    B. Batched and scheduled; may be asynchronous
    C. Random
    D. Only on user input
    Answer: B
    Explanation: React batches and schedules updates to optimize rendering; updates may be asynchronous and coalesced. This affects how state updates behave — multiple setState calls inside event handlers may be batched. Use functional updates when new state depends on previous state.

33) Which is true about dangerouslySetInnerHTML?
    A. Safe for any user input
    B. Must be avoided entirely
    C. Use only with trusted, sanitized HTML
    D. Its deprecated
    Answer: C
    Explanation: `dangerouslySetInnerHTML` inserts raw HTML into the DOM and bypasses React's escaping, creating XSS risks if content is untrusted. Use only for trusted/sanitized content (e.g., server-provided HTML you've sanitized) and prefer rendering through React when possible.

34) A component must return:
    A. A single parent element or fragment wrapping children
    B. Multiple adjacent elements side-by-side without wrapper
    C. Only strings
    D. null is not allowed
    Answer: A
    Explanation: A component's render must return a single React node — use a parent element or a fragment (`<>...</>`) to wrap multiple siblings. Returning `null` is allowed (renders nothing). Fragments avoid adding extra DOM nodes.

35) Fragments (<></>) are used to:
    A. Add extra nodes to the DOM
    B. Group children without extra DOM elements
    C. Replace keys
    D. Add styles
    Answer: B
    Explanation: Fragments let you return multiple children from a component without inserting an extra wrapper element into the DOM. This keeps the DOM cleaner and avoids unnecessary nesting. Use `<React.Fragment key={id}>` when you need keys on fragment children.

Hooks extras

36) Running an effect when a specific prop changes uses deps:
    A. []
    B. [thatProp]
    C. undefined
    D. [Math.random()]
    Answer: B
    Explanation: Include the specific prop in the dependency array: `useEffect(() => { ... }, [thatProp])`. React will re-run the effect whenever `thatProp` changes. Include all values the effect reads to avoid stale data; ESLint `react-hooks/exhaustive-deps` helps catch missing deps.

37) To avoid re-creating a callback passed to deep children on every render:
    A. useEffect
    B. useCallback
    C. useLayoutEffect
    D. useTransition
    Answer: B
    Explanation: `useCallback(() => { ... }, [deps])` returns a memoized function reference so children that depend on function identity (via `React.memo`) don't re-render unnecessarily. Use it when passing callbacks to memoized components; excessive use can add complexity.

38) useLayoutEffect differs from useEffect by:
    A. Running before browser paint synchronously
    B. Running only on unmount
    C. Being server-only
    D. Ignoring deps
    Answer: A
    Explanation: `useLayoutEffect` runs synchronously after DOM mutations but before the browser paints. Use it for measurements or synchronously applying DOM changes that must happen before paint. Prefer `useEffect` for most side effects to avoid blocking the UI.

39) A common anti-pattern with state is:
    A. Keeping derived values in state unnecessarily
    B. Using keys in lists
    C. Using controlled inputs
    D. Lifting state up
    Answer: A
    Explanation: Storing values that can be derived from props/state duplicates data and leads to synchronization bugs. Instead compute derived values during render or memoize them with `useMemo` if expensive. Keep state minimal to what's necessary to represent the UI.

40) The primary benefit of JSX is:
    A. Performance at runtime
    B. Expressiveness and readability combining markup and logic with tooling support
    C. Smaller bundles
    D. Eliminates the need for JavaScript
    Answer: B
    Explanation: JSX improves developer ergonomics by letting you describe UI in a familiar markup-like syntax inside JavaScript. It makes components more readable and works well with tooling (linters, type-checkers, editors). JSX compiles to JavaScript; the primary benefits are clarity and maintainability rather than raw runtime performance.
