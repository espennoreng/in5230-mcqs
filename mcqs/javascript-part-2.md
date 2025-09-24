JavaScript Part 2 — Arrays, Objects, Control Flow (30)

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
