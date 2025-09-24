React — MCQs (40)

JSX, Elements, Virtual DOM

1) JSX allows you to:
   A. Write CSS inside JSON
   B. Embed HTML-like syntax in JavaScript and run JS expressions inside {}
   C. Replace JavaScript
   D. Write server-side templates only
   Answer: B
   Explanation: JSX is a syntax extension compiled to React.createElement calls.

2) Given const el = <h1>Hello</h1>; it compiles roughly to:
   A. document.createElement('h1','Hello')
   B. React.createElement('h1', {}, 'Hello')
   C. new H1('Hello')
   D. DOM.virtual('h1','Hello')
   Answer: B
   Explanation: React elements are created via createElement.

3) React elements are:
   A. Mutable DOM nodes
   B. Immutable descriptions of UI
   C. CSS rules
   D. HTML strings
   Answer: B
   Explanation: They describe what to render.

4) Why shouldn’t you directly mutate the DOM in React components?
   A. It’s impossible
   B. It bypasses React’s reconciliation and can cause inconsistencies
   C. It makes CSS invalid
   D. It disables hooks
   Answer: B
   Explanation: React uses the virtual DOM to manage updates efficiently.

5) What does the virtual DOM do?
   A. Replaces the real DOM permanently
   B. Keeps a lightweight representation to diff and update the real DOM efficiently
   C. Compiles CSS
   D. Stores cookies
   Answer: B
   Explanation: Minimizes costly real DOM operations.

6) Embedding a list from an array in JSX commonly uses:
   A. for loops in HTML
   B. map to return arrays of elements
   C. while loops in attributes
   D. template literals only
   Answer: B
   Explanation: {items.map(x => <li key={x.id}>{x.name}</li>)} pattern.

Components and Props

7) Functional vs class components today:
   A. Class components are required for state
   B. Functional components with hooks are recommended and can manage state
   C. Only classes can render
   D. Functions cannot receive props
   Answer: B
   Explanation: Since React 16.8, hooks give functions state/lifecycle.

8) Props are:
   A. Mutable by children
   B. Read-only inputs passed from parents to children
   C. Global state
   D. Only strings
   Answer: B
   Explanation: Changing props triggers re-render in child, but child shouldn’t mutate them.

9) Passing a callback from parent to child is useful to:
   A. Let child request parent state updates
   B. Share CSS
   C. Avoid re-renders
   D. Access DOM directly
   Answer: A
   Explanation: Functions can be passed via props for upward data flow.

10) The key prop in lists helps React to:
    A. Style items
    B. Identify elements across renders for efficient diffing
    C. Prevent re-rendering
    D. Provide accessibility labels
    Answer: B
    Explanation: Stable keys improve reconciliation.

11) Default export of a component must be:
    A. A class only
    B. A function or class returning/rendering elements
    C. An object literal
    D. A string
    Answer: B
    Explanation: Components are functions or classes that return React elements.

State and Hooks

12) Component state is:
    A. Global store
    B. Component-local data that can change over time and trigger re-render
    C. Server data cache only
    D. Props alias
    Answer: B
    Explanation: State is local and managed by the component.

13) Which rule is correct for hooks?
    A. Call hooks anywhere
    B. Call hooks only at top level of function components
    C. Call hooks inside loops for performance
    D. Call hooks inside conditions to skip
    Answer: B
    Explanation: Follow the Rules of Hooks.

14) useState returns:
    A. Only a value
    B. [state, setState] pair
    C. A reducer
    D. A promise
    Answer: B
    Explanation: Destructure to get state and setter.

15) Updating state based on previous state should use:
    A. setCount(count + 1) always
    B. setCount(c => c + 1)
    C. count++
    D. this.state.count++
    Answer: B
    Explanation: Functional updates avoid stale closures.

16) useEffect runs:
    A. During rendering
    B. After render commit by default
    C. Only on mount
    D. Only on unmount
    Answer: B
    Explanation: Side effects after paint; dependency array controls frequency.

17) Cleanup in useEffect is performed by:
    A. Returning a function from the effect
    B. setTimeout
    C. finally block
    D. useCleanup hook
    Answer: A
    Explanation: Return a cleanup function to run on unmount/deps change.

18) To run an effect only once on mount, dependencies should be:
    A. Omitted
    B. [] (empty array)
    C. [props]
    D. [Math.random()]
    Answer: B
    Explanation: Empty array signals no reactive deps.

19) Derived state from props should be handled by:
    A. Copying props into state always
    B. Computing on render when needed or memoizing
    C. useLayoutEffect only
    D. Global store
    Answer: B
    Explanation: Avoid redundant state; compute or memoize.

20) What happens if you violate the Rules of Hooks (e.g., conditional calls)?
    A. Nothing
    B. Hook order breaks; state/Effects tie to wrong calls
    C. Only dev warning
    D. Auto-fix by React
    Answer: B
    Explanation: Hooks rely on call order consistency.

JSX/Rendering specifics

21) Embedding a JS variable in JSX is done with:
    A. ${}
    B. {}
    C. %%
    D. ()
    Answer: B
    Explanation: Curly braces evaluate JavaScript expressions.

22) Which is valid JSX for conditional display?
    A. { if (cond) <A/> }
    B. { cond ? <A/> : null }
    C. <A/> if cond
    D. () => cond && <A/>
    Answer: B
    Explanation: Use conditional expressions (ternary, &&) in JSX.

23) Providing class names in JSX uses:
    A. class
    B. className
    C. classes
    D. css
    Answer: B
    Explanation: className prop maps to class attribute.

24) Inline styles in JSX use:
    A. String CSS
    B. Object with camelCased properties
    C. External CSS only
    D. SCSS variables
    Answer: B
    Explanation: style={{ backgroundColor: 'red' }}.

25) Keys in lists must be:
    A. Index always
    B. Stable unique identifiers when possible
    C. Random each render
    D. Same for all items
    Answer: B
    Explanation: Stable keys prevent remounting and preserve state.

React practices

26) Lifting state up means:
    A. Moving state to a common ancestor so children can share data
    B. Using context
    C. Refactoring to classes
    D. Storing in window
    Answer: A
    Explanation: Common pattern for syncing components.

27) For expensive recalculations based on inputs, you can use:
    A. useMemo
    B. useRef
    C. useId
    D. useImperativeHandle
    Answer: A
    Explanation: Memoize computed values.

28) To keep a mutable value that does not cause re-renders when changed:
    A. useState
    B. useRef
    C. useEffect
    D. useReducer
    Answer: B
    Explanation: useRef persists .current across renders without re-render.

29) useReducer suits:
    A. Trivial counters only
    B. Complex state transitions described by a reducer
    C. Styling
    D. DOM refs
    Answer: B
    Explanation: Reducer centralizes state logic.

30) When rendering large lists, performance improves with:
    A. No keys
    B. Virtualization (e.g., react-window), memoization, avoiding unnecessary renders
    C. Multiple nested providers
    D. Using innerHTML
    Answer: B
    Explanation: Render only visible items and memoize.

VDOM/DOM differences

31) In React, you typically don’t call:
    A. document.querySelector to update UI inside component render paths
    B. setState
    C. useEffect
    D. map for lists
    Answer: A
    Explanation: React handles DOM updates; use refs/effects for imperative needs sparingly.

32) React updates are:
    A. Always synchronous
    B. Batched and scheduled; may be asynchronous
    C. Random
    D. Only on user input
    Answer: B
    Explanation: React batches updates for performance.

33) Which is true about dangerouslySetInnerHTML?
    A. Safe for any user input
    B. Must be avoided entirely
    C. Use only with trusted, sanitized HTML
    D. It’s deprecated
    Answer: C
    Explanation: Risk of XSS if used with untrusted content.

34) A component must return:
    A. A single parent element or fragment wrapping children
    B. Multiple adjacent elements side-by-side without wrapper
    C. Only strings
    D. null is not allowed
    Answer: A
    Explanation: Wrap siblings with <>...</> or a parent.

35) Fragments (<></>) are used to:
    A. Add extra nodes to the DOM
    B. Group children without extra DOM elements
    C. Replace keys
    D. Add styles
    Answer: B
    Explanation: Fragment groups without DOM wrappers.

Hooks extras

36) Running an effect when a specific prop changes uses deps:
    A. []
    B. [thatProp]
    C. undefined
    D. [Math.random()]
    Answer: B
    Explanation: Include dependencies you read in the effect.

37) To avoid re-creating a callback passed to deep children on every render:
    A. useEffect
    B. useCallback
    C. useLayoutEffect
    D. useTransition
    Answer: B
    Explanation: Memoize function identity.

38) useLayoutEffect differs from useEffect by:
    A. Running before browser paint synchronously
    B. Running only on unmount
    C. Being server-only
    D. Ignoring deps
    Answer: A
    Explanation: useLayoutEffect fires synchronously after DOM mutations but before paint.

39) A common anti-pattern with state is:
    A. Keeping derived values in state unnecessarily
    B. Using keys in lists
    C. Using controlled inputs
    D. Lifting state up
    Answer: A
    Explanation: Compute from source of truth instead.

40) The primary benefit of JSX is:
    A. Performance at runtime
    B. Expressiveness and readability combining markup and logic with tooling support
    C. Smaller bundles
    D. Eliminates the need for JavaScript
    Answer: B
    Explanation: Developer ergonomics; compiles to efficient JS.
