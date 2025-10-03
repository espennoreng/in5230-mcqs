JavaScript Part 1 — Variables, Functions, Types (30)

1) Which declaration creates a block-scoped binding that cannot be reassigned?
   A. var
   B. let
   C. const
   D. static
   Answer: C
   Explanation: const creates a block-scoped constant binding that cannot be reassigned. For example, `const x = 5; x = 10;` throws an error. Important: while the binding itself can't change, if you store an object or array in a const, you can still mutate its contents: `const arr = [1, 2]; arr.push(3);` is valid. Use const by default to prevent accidental reassignment and signal intent that a variable won't change.

2) Which is true about var?
   A. Block-scoped and preferred
   B. Function/global scoped and should be avoided in modern JS
   C. Immutable
   D. Module-scoped only
   Answer: B
   Explanation: var has function or global scope (not block scope), which can lead to unexpected behavior. Example: `if (true) { var x = 5; } console.log(x);` prints 5 because var ignores the block. var is also hoisted and initialized to undefined. Modern JavaScript uses let and const instead because they provide block scoping, making code more predictable. var is considered legacy and should be avoided in new code.

3) What is the typical naming convention for JS variables?
   A. snake_case
   B. kebab-case
   C. PascalCase
   D. lowerCamelCase
   Answer: D
   Explanation: JavaScript convention uses lowerCamelCase for variables and functions (e.g., `userName`, `calculateTotal`). PascalCase is reserved for class and constructor names (e.g., `UserAccount`, `HttpRequest`). Constants that truly never change may use SCREAMING_SNAKE_CASE (e.g., `MAX_SIZE`). Following consistent naming conventions makes code more readable and helps other developers understand your code at a glance.

4) Which is NOT a valid identifier?
   A. _counter
   B. name2
   C. 2name
   D. $value
   Answer: C
   Explanation: JavaScript identifiers (variable/function names) must start with a letter, underscore (_), or dollar sign ($). They cannot start with a digit. So `2name` is invalid, but `name2` is fine. Valid examples: `_counter`, `$value`, `myVar`, `userName123`. Reserved keywords like `const`, `let`, `function` also cannot be used as identifiers. Understanding these rules helps avoid syntax errors when naming variables.

5) Functions in JS are:
   A. Not first-class values
   B. First-class values that can be passed/stored/returned
   C. Only class methods
   D. Compile-time only
   Answer: B
   Explanation: Functions are first-class citizens in JavaScript, meaning they can be: (1) stored in variables: `const greet = function() {...}`, (2) passed as arguments: `array.map(x => x * 2)`, (3) returned from other functions: `function makeAdder(x) { return y => x + y; }`, and (4) stored in data structures. This enables powerful functional programming patterns like higher-order functions, callbacks, and closures.

6) Choose the arrow function returning the square of x.
   A. const f = x => x * x
   B. const f = (x) => { x * x }
   C. function f(x) return x * x
   D. const f = => x * x
   Answer: A
   Explanation: Arrow functions with a concise body (no braces) implicitly return the expression: `const f = x => x * x` returns x squared. Option B uses braces but no return statement, so it returns undefined. When using braces, you must explicitly write `return`: `const f = (x) => { return x * x; }`. The concise syntax is preferred for short functions like `array.map(x => x * 2)`. Arrow functions also don't bind their own `this`, making them useful in callbacks.

7) Regular function syntax must include:
   A. The async keyword
   B. Parentheses after name, braces for body, optional return
   C. Arrow =>
   D. A class context
   Answer: B
   Explanation: Regular function declarations follow this syntax: `function name(param1, param2) { /* body */ return value; }`. The parentheses are required even with no parameters: `function greet() {...}`. The braces define the function body. The return statement is optional; without it, the function returns undefined. Regular functions have their own `this` binding (unlike arrows) and can be hoisted, so they're available before their declaration in the code.

8) Methods are:
   A. Functions attached to objects/classes
   B. Always static
   C. Only available on arrays
   D. Private by default
   Answer: A
   Explanation: Methods are functions that belong to objects or classes. Examples: `'hello'.toUpperCase()` calls the toUpperCase method on a string object; `array.push(5)` calls the push method on an array. You can define your own methods: `const person = { name: 'Ali', greet() { return 'Hi, ' + this.name; } }; person.greet()` returns "Hi, Ali". In classes: `class Counter { increment() { this.count++; } }`. Methods typically use `this` to access the object's properties.

9) Small, single-responsibility functions help with:
   A. Obfuscation
   B. Maintainability, testing, reuse
   C. Performance only
   D. None of the above
   Answer: B
   Explanation: Breaking code into small, focused functions following the Single Responsibility Principle makes your code easier to: (1) understand - each function does one thing well, (2) test - you can test each piece independently, (3) debug - problems are isolated to specific functions, (4) reuse - small functions can be composed in different ways. Example: instead of one giant function, split into `validateInput()`, `processData()`, `formatOutput()`. This is a core principle of clean code and professional development.

10) JavaScript typing is:
    A. Static
    B. Dynamic
    C. None
    D. Strong static
    Answer: B
    Explanation: JavaScript uses dynamic typing, meaning variable types are determined at runtime and can change. Example: `let x = 5; x = "hello";` is valid - x starts as a number, then becomes a string. This flexibility is powerful but can cause bugs if you're not careful. TypeScript adds optional static type checking on top of JavaScript. Dynamic typing means you don't declare types explicitly: `const age = 25` (not `int age = 25`). The type is inferred from the value assigned.

11) Strings in JS are:
    A. Mutable
    B. Immutable primitives
    C. Always wrapped objects
    D. Passed by reference
    Answer: B
    Explanation: Strings are immutable - once created, they cannot be changed. All string methods return NEW strings rather than modifying the original. Example: `const name = 'alice'; const upper = name.toUpperCase();` creates a new string 'ALICE'; the original 'alice' is unchanged. This is why `name[0] = 'A'` doesn't work in strict mode. String immutability makes them safe to share and prevents accidental modifications. When you need to build strings dynamically, consider using template literals or array join().

12) Numbers in JS are:
    A. Separate integer and float types
    B. Double-precision floating point (Number)
    C. BigInt by default
    D. Arbitrary precision
    Answer: B
    Explanation: JavaScript has a single Number type based on IEEE-754 double-precision (64-bit) floating point. This means both `5` and `5.5` are the same type. Important implications: (1) integers are safe up to 2^53 - 1 (Number.MAX_SAFE_INTEGER), (2) decimal arithmetic can have precision issues: `0.1 + 0.2 !== 0.3`, (3) for very large integers, use BigInt: `const big = 123456789012345678901234567890n`. Always be aware of floating-point limitations when doing financial calculations.

13) Booleans are commonly used for:
    A. CSS selection
    B. Control flow branching
    C. Memory allocation
    D. I/O
    Answer: B
    Explanation: Booleans (true/false) control program flow through conditionals and loops. Examples: `if (isLoggedIn) {...}`, `while (hasMore) {...}`, `const result = age >= 18 ? 'adult' : 'minor'`. JavaScript has "truthy" and "falsy" values: falsy values (false, 0, '', null, undefined, NaN) act like false in conditionals; everything else is truthy. Use explicit comparisons for clarity: `if (array.length > 0)` instead of `if (array.length)`. Understanding boolean logic is fundamental to programming control structures.

14) Which are primitive types? (select best)
    A. Object, Array
    B. Number, String, Boolean, undefined, null, Symbol, BigInt
    C. Function, Class
    D. Map, Set
    Answer: B
    Explanation: JavaScript has 7 primitive types that are immutable and passed by value: Number (1, 3.14), String ('hello'), Boolean (true/false), undefined (uninitialized variable), null (intentional absence), Symbol (unique identifier), and BigInt (large integers). Everything else is an object type. Primitives are stored directly in variables, while objects are stored as references. Example: `let a = 5; let b = a;` copies the value, but `let obj1 = {}; let obj2 = obj1;` copies the reference. Understanding this distinction is crucial for avoiding bugs.

15) Object types include:
    A. Array, Object, Set, Date
    B. Number, Boolean
    C. String
    D. Symbol
    Answer: A
    Explanation: Object types are complex data structures passed by reference. They include: Array `[1, 2, 3]`, plain Object `{name: 'Ali'}`, Map, Set, Date, RegExp, Function, and more. Unlike primitives, when you assign an object to a variable, you're storing a reference: `const arr1 = [1, 2]; const arr2 = arr1; arr2.push(3);` modifies the same array that arr1 points to. This reference behavior is important for understanding how data flows in your program and avoiding unintended mutations. Use spread operator or methods like slice() to create copies when needed.

16) What does scope determine?
    A. Layout
    B. Visibility and lifetime of identifiers
    C. Thread count
    D. Protocol
    Answer: B
    Explanation: Scope determines where variables are accessible in your code. JavaScript has: (1) Global scope - variables accessible everywhere, (2) Function scope - variables accessible within the function, (3) Block scope (let/const) - variables accessible within {} blocks. Example: `function test() { const x = 5; if (true) { const y = 10; } console.log(x); // works; console.log(y); // ReferenceError }`. Understanding scope prevents naming conflicts, keeps data encapsulated, and helps manage memory. Variables "shadow" outer ones with the same name in inner scopes.

17) Code blocks are delimited by:
    A. ()
    B. {}
    C. []
    D. <>
    Answer: B
    Explanation: Curly braces {} define code blocks that group statements and create block scope for let/const variables. Used in: functions `function f() {...}`, conditionals `if (x > 0) {...}`, loops `for (let i = 0; i < 10; i++) {...}`, and standalone blocks `{ const temp = 5; }`. Variables declared with let/const inside blocks are only accessible within those braces. Parentheses () are for expressions and function parameters; square brackets [] are for arrays and property access; angle brackets <> are used in JSX/TypeScript.

18) What is hoisted differently among var/let/const?
    A. All identical
    B. var is function-scoped and initialized to undefined; let/const are TDZ until initialized
    C. const is hoisted to globalThis
    D. let becomes global
    Answer: B
    Explanation: Hoisting moves declarations to the top of their scope, but initialization behavior differs. With var: `console.log(x); var x = 5;` prints undefined (hoisted and initialized). With let/const: `console.log(y); let y = 5;` throws ReferenceError because let/const are in the Temporal Dead Zone (TDZ) from scope start until declaration. This makes let/const safer by catching accidental use-before-declaration. Always declare variables at the top of their scope for clarity. The TDZ helps prevent subtle bugs common with var hoisting.

19) Which examples shows function as a value?
    A. const f = 42
    B. const f = (x) => x + 1
    C. class f {}
    D. import f from 'x'
    Answer: B
    Explanation: Storing a function in a variable demonstrates that functions are first-class values. `const f = (x) => x + 1` assigns an arrow function to f. You can then pass f around: `[1, 2, 3].map(f)` returns [2, 3, 4]. This is different from just calling a function. Functions as values enable callbacks, event handlers, and functional programming: `button.onclick = function() {...}` assigns a function to a property. Option A assigns a number, C defines a class, and D imports a module.

20) What is the output of console.log('I AM CALM'.toLowerCase())?
    A. I am calm
    B. I AM CALM
    C. i am calm
    D. error
    Answer: C
    Explanation: The toLowerCase() method converts ALL characters to lowercase, returning 'i am calm'. Note that this creates a new string; the original is unchanged because strings are immutable. Common string methods: toUpperCase(), toLowerCase(), trim(), slice(), split(), replace(). Case conversion is useful for case-insensitive comparisons: `if (input.toLowerCase() === 'yes')` matches 'YES', 'Yes', 'yes', etc. Remember that non-English characters may have special case conversion rules in different locales.

21) Arrays are:
    A. Keyed collections only
    B. Indexed collections, zero-based
    C. Immutable
    D. Only numeric types
    Answer: B
    Explanation: Arrays are ordered collections accessed by numeric indices starting at 0. Example: `const colors = ['red', 'green', 'blue']; colors[0]` is 'red', colors[2] is 'blue'. Arrays can hold any type: numbers, strings, objects, even other arrays. Key methods: push() (add to end), pop() (remove from end), shift() (remove from start), unshift() (add to start), slice() (copy section), map() (transform), filter() (select), reduce() (accumulate). Arrays are mutable objects, so be careful with references. Length property: `colors.length` is 3.

22) Access second element of const a = ['x','y','z']:
    A. a(2)
    B. a.1
    C. a[1]
    D. a['1'] only
    Answer: C
    Explanation: Arrays use zero-based indexing with bracket notation. The second element is at index 1: `a[1]` returns 'y'. First element: a[0] = 'x', third: a[2] = 'z'. Accessing out-of-bounds indices returns undefined: a[10] = undefined. Both a[1] and a['1'] work (string is coerced to number), but numeric form is preferred. Common mistake: forgetting zero-based indexing. You can also use at() method: `a.at(1)` returns 'y', and negative indices work: `a.at(-1)` returns last element 'z'.

23) Objects are:
    A. Ordered lists
    B. Key/value collections with string/symbol keys
    C. Only number keys
    D. Immutable by default
    Answer: B
    Explanation: Objects are collections of key-value pairs (properties). Keys are strings or Symbols; values can be any type. Example: `const user = { name: 'Sara', age: 25, isActive: true }`. Properties can be functions (methods): `const calc = { add(a, b) { return a + b; } }; calc.add(2, 3)` returns 5. Objects are mutable and passed by reference. Modern JavaScript maintains insertion order for string keys. Use objects for related data with named properties, unlike arrays which use numeric indices. Computed property names: `{[key]: value}`.

24) Extract property isbn from book:
    A. book['isbn'] or book.isbn
    B. book(isbn)
    C. book#isbn
    D. isbn(book)
    Answer: A
    Explanation: JavaScript offers two ways to access object properties: dot notation `book.isbn` (preferred when you know the property name) and bracket notation `book['isbn']` (required for dynamic keys or keys with special characters). Example: `const book = { isbn: '978-0134685991', title: 'Effective Java' }; book.isbn` or `book['isbn']` both return '978-0134685991'. Bracket notation is useful with variables: `const key = 'title'; book[key]` returns 'Effective Java'. For keys with spaces or hyphens: `obj['my-key']` works, `obj.my-key` doesn't.

25) Which is true about methods on String?
    A. They mutate the original string
    B. They return new strings because strings are immutable
    C. They only work in Node.js
    D. They require import
    Answer: B
    Explanation: Since strings are immutable primitives, all string methods return new strings rather than modifying the original. Example: `const original = 'hello'; const upper = original.toUpperCase(); console.log(original);` still prints 'hello', not 'HELLO'. This is different from array methods like push() which modify the array. Common string methods: slice() (extract substring), replace() (substitute text), split() (convert to array), trim() (remove whitespace), includes() (check if contains substring). If you forget strings are immutable, you might expect `str.toUpperCase()` to change str, but you must reassign: `str = str.toUpperCase()`.

26) Which function form immediately returns expression without braces/return?
    A. const f = x => { return x + 1 }
    B. const f = x => x + 1
    C. function f(x) { return x + 1 }
    D. function f(x) => x + 1
    Answer: B
    Explanation: Arrow functions with concise body syntax (no braces) implicitly return the expression: `const f = x => x + 1` automatically returns x + 1. This is perfect for short transformations: `numbers.map(n => n * 2)`, `names.filter(n => n.length > 3)`. If you use braces, you MUST explicitly return: `const f = x => { return x + 1; }`. Common gotcha: `const f = x => { x + 1 }` returns undefined (no return statement). For returning object literals, wrap in parentheses: `const f = () => ({ name: 'Ali' })`.

27) Passing a function to another function illustrates:
    A. OOP only
    B. Higher-order functions and functional programming
    C. Compilation phase
    D. Event loop
    Answer: B
    Explanation: Higher-order functions are functions that take functions as arguments or return functions. Examples: `array.map(fn)`, `setTimeout(callback, 1000)`, `addEventListener('click', handler)`. This enables powerful functional programming patterns. Example: `function repeat(n, action) { for (let i = 0; i < n; i++) action(i); } repeat(3, console.log);` prints 0, 1, 2. Higher-order functions enable abstraction, code reuse, and composition. Array methods like map, filter, reduce are higher-order functions that make data transformation elegant and declarative rather than imperative.

28) Which output is correct for the greeter example when passing loudGreet('Kalam')?
    A. GREETINGS Kalam then How are you?
    B. Greetings Kalam only
    C. Error: not a function
    D. Undefined
    Answer: A
    Explanation: This tests understanding of callback functions. If loudGreet is a function that takes a name and a callback function, it likely calls the callback with an uppercase greeting first, then logs a follow-up message. Pattern: `function loudGreet(name, greetFn) { greetFn('GREETINGS ' + name); console.log('How are you?'); }`. This demonstrates how callbacks enable customizable behavior - the caller controls what happens with the greeting via the callback function. Understanding callback patterns is essential for asynchronous programming and event handling.

29) Choose the most maintainable approach:
    A. One 500-line function
    B. Multiple small focused functions composed together
    C. Duplicated code blocks per use case
    D. Deeply nested conditionals without refactoring
    Answer: B
    Explanation: Professional code splits complex logic into small, focused, composable functions - this is the Single Responsibility Principle. Example: instead of one processUserData() doing everything, have validateUser(), enrichUserData(), saveToDatabase(), sendNotification(). Benefits: (1) Each function is easy to test in isolation, (2) Bugs are easier to locate, (3) Functions can be reused, (4) Code is self-documenting with good names, (5) Changes are localized. Aim for functions under 20-30 lines. Use composition: `const process = pipe(validate, enrich, save, notify)`.

30) Which statement about dynamic typing pitfalls is true?
    A. Variables never change type
    B. Reusing one variable for many types can cause surprises; prefer consistent typing
    C. Type declarations are required
    D. Types are erased at runtime
    Answer: B
    Explanation: Dynamic typing allows `let x = 5; x = "hello";` but this practice leads to bugs and confusion. Best practice: keep variables single-purpose with consistent types. Example of problems: `function process(data) { if (condition) data = 0; else data = []; return data.length; }` - this breaks when data is 0 (no length property). Use different variable names for different types. TypeScript adds static type checking to catch these errors early. Even in plain JavaScript, disciplined typing makes code more reliable and easier to understand.
