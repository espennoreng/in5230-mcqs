JavaScript Part 1 — Variables, Functions, Types (30)

1) Which declaration creates a block-scoped binding that cannot be reassigned?
   A. var
   B. let
   C. const
   D. static
   Answer: C
   Explanation: const is block-scoped and not reassignable (note: object contents can still mutate).

2) Which is true about var?
   A. Block-scoped and preferred
   B. Function/global scoped and should be avoided in modern JS
   C. Immutable
   D. Module-scoped only
   Answer: B
   Explanation: var has function/global scope; use let/const instead.

3) What is the typical naming convention for JS variables?
   A. snake_case
   B. kebab-case
   C. PascalCase
   D. lowerCamelCase
   Answer: D
   Explanation: lowerCamelCase is widely used for variables/functions.

4) Which is NOT a valid identifier?
   A. _counter
   B. name2
   C. 2name
   D. $value
   Answer: C
   Explanation: Identifiers cannot start with a digit.

5) Functions in JS are:
   A. Not first-class values
   B. First-class values that can be passed/stored/returned
   C. Only class methods
   D. Compile-time only
   Answer: B
   Explanation: They can be used like other values.

6) Choose the arrow function returning the square of x.
   A. const f = x => x * x
   B. const f = (x) => { x * x }
   C. function f(x) return x * x
   D. const f = => x * x
   Answer: A
   Explanation: Concise body implicitly returns expression.

7) Regular function syntax must include:
   A. The async keyword
   B. Parentheses after name, braces for body, optional return
   C. Arrow =>
   D. A class context
   Answer: B
   Explanation: function name(params) { ... }

8) Methods are:
   A. Functions attached to objects/classes
   B. Always static
   C. Only available on arrays
   D. Private by default
   Answer: A
   Explanation: e.g., 'string'.toLowerCase().

9) Small, single-responsibility functions help with:
   A. Obfuscation
   B. Maintainability, testing, reuse
   C. Performance only
   D. None of the above
   Answer: B
   Explanation: Easier to reason and debug.

10) JavaScript typing is:
    A. Static
    B. Dynamic
    C. None
    D. Strong static
    Answer: B
    Explanation: Types are determined at runtime.

11) Strings in JS are:
    A. Mutable
    B. Immutable primitives
    C. Always wrapped objects
    D. Passed by reference
    Answer: B
    Explanation: Operations create new strings.

12) Numbers in JS are:
    A. Separate integer and float types
    B. Double-precision floating point (Number)
    C. BigInt by default
    D. Arbitrary precision
    Answer: B
    Explanation: IEEE-754 double-precision.

13) Booleans are commonly used for:
    A. CSS selection
    B. Control flow branching
    C. Memory allocation
    D. I/O
    Answer: B
    Explanation: if/switch/ternary.

14) Which are primitive types? (select best)
    A. Object, Array
    B. Number, String, Boolean, undefined, null, Symbol, BigInt
    C. Function, Class
    D. Map, Set
    Answer: B
    Explanation: These are primitives (note: null represents absence of object).

15) Object types include:
    A. Array, Object, Set, Date
    B. Number, Boolean
    C. String
    D. Symbol
    Answer: A
    Explanation: Complex structures passed by reference.

16) What does scope determine?
    A. Layout
    B. Visibility and lifetime of identifiers
    C. Thread count
    D. Protocol
    Answer: B
    Explanation: Blocks/functions/modules create scopes.

17) Code blocks are delimited by:
    A. ()
    B. {}
    C. []
    D. <>
    Answer: B
    Explanation: Curly braces.

18) What is hoisted differently among var/let/const?
    A. All identical
    B. var is function-scoped and initialized to undefined; let/const are TDZ until initialized
    C. const is hoisted to globalThis
    D. let becomes global
    Answer: B
    Explanation: Temporal Dead Zone for let/const.

19) Which examples shows function as a value?
    A. const f = 42
    B. const f = (x) => x + 1
    C. class f {}
    D. import f from 'x'
    Answer: B
    Explanation: Arrow function bound to const.

20) What is the output of console.log('I AM CALM'.toLowerCase())?
    A. I am calm
    B. I AM CALM
    C. i am calm
    D. error
    Answer: C
    Explanation: toLowerCase returns a new lowercase string.

21) Arrays are:
    A. Keyed collections only
    B. Indexed collections, zero-based
    C. Immutable
    D. Only numeric types
    Answer: B
    Explanation: Index-based list.

22) Access second element of const a = ['x','y','z']:
    A. a(2)
    B. a.1
    C. a[1]
    D. a['1'] only
    Answer: C
    Explanation: Zero-based indexing.

23) Objects are:
    A. Ordered lists
    B. Key/value collections with string/symbol keys
    C. Only number keys
    D. Immutable by default
    Answer: B
    Explanation: Keys to values; properties.

24) Extract property isbn from book:
    A. book['isbn'] or book.isbn
    B. book(isbn)
    C. book#isbn
    D. isbn(book)
    Answer: A
    Explanation: Dot or bracket notation.

25) Which is true about methods on String?
    A. They mutate the original string
    B. They return new strings because strings are immutable
    C. They only work in Node.js
    D. They require import
    Answer: B
    Explanation: String is immutable primitive.

26) Which function form immediately returns expression without braces/return?
    A. const f = x => { return x + 1 }
    B. const f = x => x + 1
    C. function f(x) { return x + 1 }
    D. function f(x) => x + 1
    Answer: B
    Explanation: Concise body.

27) Passing a function to another function illustrates:
    A. OOP only
    B. Higher-order functions and functional programming
    C. Compilation phase
    D. Event loop
    Answer: B
    Explanation: Functions as inputs/outputs.

28) Which output is correct for the greeter example when passing loudGreet('Kalam')?
    A. GREETINGS Kalam then How are you?
    B. Greetings Kalam only
    C. Error: not a function
    D. Undefined
    Answer: A
    Explanation: Provided example logs greeting and then second line.

29) Choose the most maintainable approach:
    A. One 500-line function
    B. Multiple small focused functions composed together
    C. Duplicated code blocks per use case
    D. Deeply nested conditionals without refactoring
    Answer: B
    Explanation: Improves readability/testing.

30) Which statement about dynamic typing pitfalls is true?
    A. Variables never change type
    B. Reusing one variable for many types can cause surprises; prefer consistent typing
    C. Type declarations are required
    D. Types are erased at runtime
    Answer: B
    Explanation: Keep variables single-purpose to avoid bugs.
