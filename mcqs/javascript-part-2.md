JavaScript Part 2 — Arrays, Objects, Control Flow (35)

1) Which Array method transforms each element and returns a new array?
   A. forEach
   B. map
   C. reduce
   D. filter
   Answer: B
   Explanation: map transforms elements one-to-one.

2) Which method accumulates into a single value from an array?
   A. reduce
   B. filter
   C. find
   D. some
   Answer: A
   Explanation: reduce folds array to a value.

3) Which method returns elements matching a predicate?
   A. filter
   B. find
   C. includes
   D. slice
   Answer: A
   Explanation: filter returns subset array.

4) Which method returns the first element that satisfies a predicate?
   A. some
   B. find
   C. every
   D. indexOf
   Answer: B
   Explanation: find returns first match or undefined.

5) Which is not mutating the original array?
   A. push
   B. splice
   C. map
   D. sort (default)
   Answer: C
   Explanation: map returns new array; sort/splice/push mutate.

6) To copy an array shallowly:
   A. const b = a
   B. const b = [...a]
   C. a.copy()
   D. b = a.push()
   Answer: B
   Explanation: Spread creates shallow copy.

7) To add a property to an object immutably:
   A. obj.new = 1
   B. const next = { ...obj, new: 1 }
   C. Object.freeze(obj).new = 1
   D. obj.assign({new:1})
   Answer: B
   Explanation: Spread creates new object with added property.

8) Choose the correct if statement syntax:
   A. if condition { ... }
   B. if (condition) { ... }
   C. if (condition) then { ... }
   D. if: (condition) { ... }
   Answer: B
   Explanation: Parentheses required in JS.

9) The ternary operator requires:
   A. One operand
   B. Two operands
   C. Three operands: condition ? truthyExpr : falsyExpr
   D. Four operands
   Answer: C
   Explanation: Only ternary requires three.

10) Switch statements by default:
    A. Never match
    B. Fall through subsequent cases unless break
    C. Throw on duplicate cases
    D. Evaluate asynchronously
    Answer: B
    Explanation: Fallthrough until break.

11) Prefer switch over long else-if chains when:
    A. Comparing against many equality cases on same value
    B. Doing complex range checks
    C. Pattern matching nested objects
    D. Handling async
    Answer: A
    Explanation: Readable and efficient for discrete values.

12) Which is the cleaner boolean function?
    A. if (cond) return true; else return false;
    B. return cond;
    C. return cond ? true : false;
    D. return !!cond ? true : false
    Answer: B
    Explanation: Return the expression directly.

13) Loops: when is functional style often better?
    A. Element-wise transforms/filtering/searching
    B. Complex stepping patterns
    C. Infinite loops
    D. Tight numeric aggregation with steps
    Answer: A
    Explanation: map/filter/find/readability benefits.

14) Imperative loops excel at:
    A. Simple transformation
    B. Custom stepping and performance-sensitive aggregation
    C. Memoization
    D. Recursion only
    Answer: B
    Explanation: for/while allow flexible control.

15) Example: sum numbers 1..100 with step 3 is easiest with:
    A. reduce only
    B. for loop with i += 3
    C. map
    D. filter
    Answer: B
    Explanation: Step control suits imperative loop.

16) Which loop stops the current iteration and continues with next?
    A. break
    B. continue
    C. return
    D. exit
    Answer: B
    Explanation: continue skips to next iteration.

17) Which loop exits the entire loop immediately?
    A. break
    B. continue
    C. next
    D. stop
    Answer: A
    Explanation: break exits loop body.

18) A truthy value example is:
    A. 0
    B. ""
    C. []
    D. null
    Answer: C
    Explanation: Empty array is truthy; 0, "", null are falsy.

19) Using map to add 1 to [1,2,3] results in:
    A. [2,3,4]
    B. [1,2,3]
    C. 6
    D. Error
    Answer: A
    Explanation: Transform each element.

20) Using filter(x => x % 2 === 0) on [1,2,3,4]:
    A. [1,3]
    B. [2,4]
    C. [1,2,3,4]
    D. []
    Answer: B
    Explanation: Keeps even numbers.

21) Reduce((acc,x)=>acc+x, 0) on [1,2,3]:
    A. 0
    B. 6
    C. [1,2,3]
    D. [2,3,4]
    Answer: B
    Explanation: Sum of elements.

22) The expression width >= 1024 returns:
    A. string
    B. boolean
    C. number
    D. undefined
    Answer: B
    Explanation: Comparison yields boolean.

23) Convert beginner boolean function to concise form: isLarge(width)
    A. return width >= 1024;
    B. if (width>=1024) return true; else return false;
    C. return width >= 1024 ? true : false;
    D. return !!(width>=1024);
    Answer: A
    Explanation: Directly return comparison result.

24) In switch, where to put default handling?
    A. At top only
    B. Anywhere; often last
    C. Must be second
    D. It’s required first
    Answer: B
    Explanation: default can appear anywhere; conventionally last.

25) Which array method is best to check if any element matches a predicate?
    A. every
    B. some
    C. includes
    D. findIndex
    Answer: B
    Explanation: some returns true if at least one matches.

26) Which array method returns a shallow copy of a subarray?
    A. slice
    B. splice
    C. concat
    D. fill
    Answer: A
    Explanation: slice does not mutate; splice mutates.

27) Accessing out-of-range index returns:
    A. null
    B. undefined
    C. 0
    D. Error
    Answer: B
    Explanation: Non-existent property yields undefined.

28) Object deletion syntax:
    A. delete(obj.key)
    B. delete obj.key
    C. obj.delete(key)
    D. remove obj.key
    Answer: B
    Explanation: delete operator removes property.

29) Which is a safe equality for numbers and strings without coercion?
    A. ==
    B. ===
    C. =
    D. =>
    Answer: B
    Explanation: Strict equality avoids type coercion.

30) Ternary example result: const x = cond ? 'a' : 'b'; cond=false
    A. 'a'
    B. 'b'
    C. true
    D. undefined
    Answer: B
    Explanation: Picks falsy branch.

31) According to the course, when should you prefer functional style over imperative loops?
    A. Never, always use for loops
    B. When working with array transformations, filtering, and reduction
    C. Only when performance doesn't matter
    D. When you need to iterate exactly 3 times
    Answer: B
    Explanation: Functional methods like map, filter, and reduce are often shorter, easier to read, and each has a clear, specific purpose.
    Why A: Functional style is recommended for array operations
    Why C: Performance is often comparable; readability is the key benefit
    Why D: The iteration count doesn't determine the style choice

32) What is the main advantage of functional array methods over imperative loops according to the course?
    A. They execute faster
    B. They are unique and predictable - each does one thing, making code easier to understand
    C. They use less memory
    D. They can only be used with numbers
    Answer: B
    Explanation: Each functional method (map, filter, reduce, find) has a single clear purpose, unlike imperative loops which require reading every line to understand intent.
    Why A: Performance is similar; the advantage is clarity
    Why C: Memory usage is comparable
    Why D: Functional methods work with any data types

33) What does the `break` statement do in a loop?
    A. Skips the current iteration and continues with the next one
    B. Exits the entire loop immediately
    C. Restarts the loop from the beginning
    D. Pauses the loop for 1 second
    Answer: B
    Explanation: The break statement terminates the loop entirely and continues execution after the loop.
    Why A: This describes continue, not break
    Why C: break doesn't restart loops
    Why D: break executes immediately without delays

34) What does the `continue` statement do in a loop?
    A. Exits the entire loop immediately
    B. Stops the current iteration and proceeds to the next iteration
    C. Breaks out of nested loops
    D. Continues executing after the loop ends
    Answer: B
    Explanation: continue skips the remaining code in the current iteration and moves to the next iteration of the loop.
    Why A: This describes break, not continue
    Why C: continue only affects the current loop level
    Why D: continue operates within the loop, not after it

35) When is an imperative loop (for/while) better than functional style according to the course?
    A. Never, functional is always better
    B. When the problem involves custom step increments or conditions that don't fit array operations
    C. Only for arrays
    D. When you need exactly one iteration
    Answer: B
    Explanation: The course example of summing 1, 4, 7, ...  up to 100 (step of 3) is easy with for loops but messy with functional style.
    Why A: The course explicitly shows examples where imperative is better
    Why C: Imperative loops work with many patterns beyond arrays
    Why D: Single iterations can use either style
