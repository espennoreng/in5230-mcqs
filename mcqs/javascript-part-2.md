JavaScript Part 2 — Arrays, Objects, Control Flow (35)

1) Which Array method transforms each element and returns a new array?
    A. forEach
    B. map
    C. reduce
    D. filter
    Answer: B
    Explanation: `map` applies a function to every element and returns a new array of the same length. Example: `[1,2,3].map(x => x * 2)` yields `[2,4,6]`. Use map for element-wise transformations. Note: `forEach` iterates but returns undefined.

2) Which method accumulates into a single value from an array?
    A. reduce
    B. filter
    C. find
    D. some
    Answer: A
    Explanation: `reduce` combines array elements into one value via an accumulator: `[1,2,3].reduce((acc, x) => acc + x, 0)` returns `6`. It's powerful for sums, grouping, or building objects, but can be less readable if overused—consider clear helper functions.

3) Which method returns elements matching a predicate?
    A. filter
    B. find
    C. includes
    D. slice
    Answer: A
    Explanation: `filter` returns a new array with all elements satisfying the predicate: `[1,2,3,4].filter(n => n % 2 === 0)` -> `[2,4]`. Use `find` if you only need the first match.

4) Which method returns the first element that satisfies a predicate?
    A. some
    B. find
    C. every
    D. indexOf
    Answer: B
    Explanation: `find` returns the first matching element or `undefined` if none: `[1,2,3].find(n => n > 1)` -> `2`. Use `findIndex` to get the index instead.

5) Which is not mutating the original array?
    A. push
    B. splice
    C. map
    D. sort (default)
    Answer: C
    Explanation: `map` returns a new array and does not change the original. Methods like `push`, `splice`, and `sort` mutate the array in-place. Prefer non-mutating patterns (spread, slice) when immutability matters.

6) To copy an array shallowly:
    A. const b = a
    B. const b = [...a]
    C. a.copy()
    D. b = a.push()
    Answer: B
    Explanation: `const b = [...a]` (spread) or `a.slice()` create shallow copies. `const b = a` copies the reference. Shallow copy means nested objects are still shared between arrays.

7) To add a property to an object immutably:
    A. obj.new = 1
    B. const next = { ...obj, new: 1 }
    C. Object.freeze(obj).new = 1
    D. obj.assign({new:1})
    Answer: B
    Explanation: Use object spread (`{ ...obj, new: 1 }`) or `Object.assign({}, obj, { new: 1 })` to create a new object with the added property. Direct assignment mutates the original. Immutability is helpful for predictable state updates and change detection.

8) Choose the correct if statement syntax:
    A. if condition { ... }
    B. if (condition) { ... }
    C. if (condition) then { ... }
    D. if: (condition) { ... }
    Answer: B
    Explanation: JavaScript requires parentheses around the condition: `if (condition) { /* ... */ }`. This is basic syntax; forgetting parentheses causes syntax errors.

9) The ternary operator requires:
    A. One operand
    B. Two operands
    C. Three operands: condition ? truthyExpr : falsyExpr
    D. Four operands
    Answer: C
    Explanation: The ternary `cond ? a : b` evaluates `a` if `cond` is truthy, otherwise `b`. It's useful for concise conditional expressions but avoid nesting many ternaries for readability.

10) Switch statements by default:
    A. Never match
    B. Fall through subsequent cases unless break
    C. Throw on duplicate cases
    D. Evaluate asynchronously
    Answer: B
    Explanation: Without `break`, execution continues (falls through) to subsequent cases. Use `break` to prevent this unless fall-through is intentional. Example pitfall: forgetting break leads to unexpected behavior.

11) Prefer switch over long else-if chains when:
    A. Comparing against many equality cases on same value
    B. Doing complex range checks
    C. Pattern matching nested objects
    D. Handling async
    Answer: A
    Explanation: Use `switch` for multiple discrete equality checks on the same expression — it can be more readable than chained `if/else if`. For range checks or complex logic, if/else may be clearer.

12) Which is the cleaner boolean function?
    A. if (cond) return true; else return false;
    B. return cond;
    C. return cond ? true : false;
    D. return !!cond ? true : false
    Answer: B
    Explanation: Return the boolean expression directly. It's concise and idiomatic. Use `!!value` if you need to coerce truthy/falsy values to `true`/`false` explicitly.

13) Loops: when is functional style often better?
    A. Element-wise transforms/filtering/searching
    B. Complex stepping patterns
    C. Infinite loops
    D. Tight numeric aggregation with steps
    Answer: A
    Explanation: For clear element-wise operations (`map`, `filter`, `find`), functional methods are more declarative and readable. For complex stepping or performance-critical loops, imperative loops may be more suitable.

14) Imperative loops excel at:
    A. Simple transformation
    B. Custom stepping and performance-sensitive aggregation
    C. Memoization
    D. Recursion only
    Answer: B
    Explanation: `for`/`while` loops give explicit control (custom step sizes, early exits, complex index math) and can be more efficient for certain algorithms. Use them when functional methods aren't a natural fit.

15) Example: sum numbers 1..100 with step 3 is easiest with:
    A. reduce only
    B. for loop with i += 3
    C. map
    D. filter
    Answer: B
    Explanation: A `for` loop with `i += 3` directly expresses the stepping logic and is straightforward and efficient. You could also generate the sequence and `reduce` it, but the imperative loop is simplest here.

16) Which loop stops the current iteration and continues with next?
    A. break
    B. continue
    C. return
    D. exit
    Answer: B
    Explanation: `continue` skips the remaining code in the current iteration and proceeds with the next one. `break` exits the loop entirely; `return` exits the function.

17) Which loop exits the entire loop immediately?
    A. break
    B. continue
    C. next
    D. stop
    Answer: A
    Explanation: `break` terminates the loop and continues execution after it. Use it to stop early when a condition is met.

18) A truthy value example is:
    A. 0
    B. ""
    C. []
    D. null
    Answer: C
    Explanation: An empty array `[]` is truthy in JavaScript. Falsy values include `0`, `''` (empty string), `null`, `undefined`, `NaN`, and `false`. Be careful relying on truthiness for values like `0` which is falsy.

19) Using map to add 1 to [1,2,3] results in:
    A. [2,3,4]
    B. [1,2,3]
    C. 6
    D. Error
    Answer: A
    Explanation: `[1,2,3].map(x => x + 1)` returns `[2,3,4]`. `map` builds a new array based on applying the function to each element.

20) Using filter(x => x % 2 === 0) on [1,2,3,4]:
    A. [1,3]
    B. [2,4]
    C. [1,2,3,4]
    D. []
    Answer: B
    Explanation: `filter` keeps elements for which the predicate returns true, so this returns `[2,4]` — the even numbers.

21) Reduce((acc,x)=>acc+x, 0) on [1,2,3]:
    A. 0
    B. 6
    C. [1,2,3]
    D. [2,3,4]
    Answer: B
    Explanation: The reducer accumulates the sum: `((0+1)+2)+3` gives `6`.

22) The expression width >= 1024 returns:
    A. string
    B. boolean
    C. number
    D. undefined
    Answer: B
    Explanation: Comparison operators produce boolean results (`true`/`false`). Example: `1024 >= 1024` is `true`.

23) Convert beginner boolean function to concise form: isLarge(width)
    A. return width >= 1024;
    B. if (width>=1024) return true; else return false;
    C. return width >= 1024 ? true : false;
    D. return !!(width>=1024);
    Answer: A
    Explanation: Returning the comparison directly is concise and clear. The other forms are more verbose but functionally equivalent; avoid unnecessary coercions or ternaries for booleans.

24) In switch, where to put default handling?
    A. At top only
    B. Anywhere; often last
    C. Must be second
    D. Its required first
    Answer: B
    Explanation: `default` can appear anywhere in a `switch`; conventionally it is placed last to act as a fallback. Make sure to include `break` where appropriate to avoid accidental fall-through.

25) Which array method is best to check if any element matches a predicate?
    A. every
    B. some
    C. includes
    D. findIndex
    Answer: B
    Explanation: `some` returns true if at least one element satisfies the predicate: `[1,2,3].some(n => n > 2)` -> `true`. Use `every` to check that all elements match.

26) Which array method returns a shallow copy of a subarray?
    A. slice
    B. splice
    C. concat
    D. fill
    Answer: A
    Explanation: `slice(start, end)` returns a new array copy of the specified range and does not mutate the original. `splice` mutates the array by removing/adding elements.

27) Accessing out-of-range index returns:
    A. null
    B. undefined
    C. 0
    D. Error
    Answer: B
    Explanation: Accessing `arr[100]` when the index doesn't exist yields `undefined`. This is because missing properties on objects return `undefined`.

28) Object deletion syntax:
    A. delete(obj.key)
    B. delete obj.key
    C. obj.delete(key)
    D. remove obj.key
    Answer: B
    Explanation: Use `delete obj.key` (or `delete obj['key']`) to remove a property. Note that `delete` mutates the object and can have performance implications; prefer creating a new object without the key when immutability is desired: `const { [key]: _, ...rest } = obj;`.

29) Which is a safe equality for numbers and strings without coercion?
    A. ==
    B. ===
    C. =
    D. =>
    Answer: B
    Explanation: Use `===` for strict equality (no type coercion). `==` performs coercion which can lead to surprising results (e.g., `'' == 0` is true). `=` is assignment; `=>` is arrow function syntax.

30) Ternary example result: const x = cond ? 'a' : 'b'; cond=false
    A. 'a'
    B. 'b'
    C. true
    D. undefined
    Answer: B
    Explanation: The ternary returns the second expression when the condition is falsy — so `x` becomes `'b'`.

31) According to the course, when should you prefer functional style over imperative loops?
    A. Never, always use for loops
    B. When working with array transformations, filtering, and reduction
    C. Only when performance doesn't matter
    D. When you need to iterate exactly 3 times
    Answer: B
    Explanation: Functional methods (`map`, `filter`, `reduce`) are concise, declarative, and make code intent clear for array transformations. Performance is often comparable for typical use; prefer readability and clarity.
    Why A: The course recommends functional style for many array tasks
    Why C: Readability, not just performance, is the main reason
    Why D: Iteration count alone doesn't decide style

32) What is the main advantage of functional array methods over imperative loops according to the course?
    A. They execute faster
    B. They are unique and predictable - each does one thing, making code easier to understand
    C. They use less memory
    D. They can only be used with numbers
    Answer: B
    Explanation: Functional methods encapsulate a single purpose (transform, filter, reduce), making code easier to read and reason about. Performance and memory characteristics are usually similar to well-written loops.
    Why A: Not necessarily faster; readability is the main benefit
    Why C: Memory usage is similar
    Why D: They work with any types

33) What does the `break` statement do in a loop?
    A. Skips the current iteration and continues with the next one
    B. Exits the entire loop immediately
    C. Restarts the loop from the beginning
    D. Pauses the loop for 1 second
    Answer: B
    Explanation: `break` terminates the loop immediately and continues execution after the loop. Use it for early exit when a condition is satisfied.
    Why A: That's `continue`

34) What does the `continue` statement do in a loop?
    A. Exits the entire loop immediately
    B. Stops the current iteration and proceeds to the next iteration
    C. Breaks out of nested loops
    D. Continues executing after the loop ends
    Answer: B
    Explanation: `continue` skips the rest of the current iteration and proceeds with the next. It's useful for skipping items that don't meet a condition while keeping the loop running.

35) When is an imperative loop (for/while) better than functional style according to the course?
    A. Never, functional is always better
    B. When the problem involves custom step increments or conditions that don't fit array operations
    C. Only for arrays
    D. When you need exactly one iteration
    Answer: B
    Explanation: Use imperative loops for custom stepping, complex index math, or when performance/early exits matter. The course example (sum with step 3) shows that `for (let i = 1; i <= 100; i += 3)` is simplest and most readable.
