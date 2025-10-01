DHIS2 — MCQs (50)

Platform, Tooling, Runtime, UI, Data Operations

1) The DHIS2 App Platform primarily provides:
   A. Database drivers for DHIS2 core
   B. Build tooling, project structure, and CLI (d2) to scaffold/build apps
   C. CSS-only components
   D. Mobile SDK
   Answer: B
   Explanation: App Platform standardizes building, developing, and packaging DHIS2 web apps.

2) The d2 CLI can help you to:
   A. Create new apps and run dev servers
   B. Replace the DHIS2 API
   C. Manage PostgreSQL directly
   D. Configure NGINX on server
   Answer: A
   Explanation: It scaffolds apps, runs dev, builds bundles.

3) The App Runtime is used at:
   A. Build time only
   B. Runtime in the browser to query/mutate the DHIS2 Web API with React hooks
   C. Server-side rendering only
   D. Database migration
   Answer: B
   Explanation: Provides hooks like useDataQuery/useDataMutation inside React apps.

4) The UI library provides:
   A. Design system components consistent with DHIS2
   B. Only CSS variables
   C. Database UI
   D. Node-only widgets
   Answer: A
   Explanation: Reusable React components aligned with DHIS2 design.

5) A typical flow to fetch data in a DHIS2 app is:
   A. window.fetch to any URL without auth
   B. useDataQuery with a declared query object and variables
   C. Read from localStorage only
   D. Server-side render only
   Answer: B
   Explanation: Declare queries and execute with App Runtime hooks.

6) useDataQuery returns state including:
   A. data, error, loading
   B. only data
   C. only loading
   D. only error
   Answer: A
   Explanation: Hook state drives UI (spinner, error, table).

7) To write (POST/PUT/PATCH/DELETE) via App Runtime, you use:
   A. useDataQuery
   B. useDataMutation
   C. useAlert
   D. useConfig
   Answer: B
   Explanation: Mutations modify server data.

8) The UI library’s components like Table, CircularLoader are used to:
   A. Present data consistently and indicate loading states
   B. Build database schemas
   C. Create server logs
   D. Minify bundles
   Answer: A
   Explanation: Present and feedback UI elements.

9) Best practice when presenting query results:
   A. Ignore loading state
   B. Show a loader while loading, an error state on error, and data on success
   C. Always retry silently
   D. Use alert() for errors only
   Answer: B
   Explanation: Drive UI from hook state.

10) When building forms in the DHIS2 app course, forms were implemented with:
    A. React Final Form
    B. Redux Form only
    C. HTML only
    D. jQuery
    Answer: A
    Explanation: Course uses React Final Form for inputs/validation.

11) Mutations pattern in the course Insert form was:
    A. Direct DOM manipulation
    B. useDataMutation called from onSubmit handler with form values
    C. Global window variable assignment
    D. CSS change
    Answer: B
    Explanation: Submit triggers mutation with variable payload.

12) Connecting to a DHIS2 instance during development typically requires:
    A. Hardcoding tokens in source
    B. Configuring the baseUrl/ auth context provided by App Runtime or dev proxy
    C. Disabling CORS in browser
    D. Embedding the server binary
    Answer: B
    Explanation: Apps get server base URL/config from runtime context or d2 dev setup.

13) The DHIS2 Web API is primarily:
    A. GraphQL-only
    B. RESTful HTTP endpoints (JSON)
    C. SOAP
    D. WebSocket-only
    Answer: B
    Explanation: REST JSON endpoints under /api.

14) Declaring a query for useDataQuery involves:
    A. A query object with resource, params, id fields etc.
    B. A URL string only
    C. SQL inside the component
    D. A YAML file
    Answer: A
    Explanation: Query object models endpoint and parameters.

15) The Query Playground referenced by the course is helpful to:
    A. Design SQL schemas
    B. Prototype/inspect App Runtime queries interactively
    C. Deploy apps
    D. Test CSS
    Answer: B
    Explanation: Explore query shapes, fields, variables.

16) To present tabular results quickly you can use:
    A. <table> only
    B. @dhis2/ui components like Table/TableHead/TableRow/TableCell
    C. console.table only
    D. <grid>
    Answer: B
    Explanation: UI library tables match DHIS2 design.

17) useAlert is useful for:
    A. Styling tables
    B. Showing transient messages (success/error/info)
    C. Managing global state
    D. Formatting dates
    Answer: B
    Explanation: Provide user feedback after operations.

18) useConfig gives you:
    A. DHIS2 server baseUrl and system configuration
    B. Database credentials
    C. UI theme
    D. User password
    Answer: A
    Explanation: Context of runtime instance.

19) The recommended folder to store persistent small key/value app data on the server is:
    A. /storage/local
    B. DHIS2 Data Store via Web API
    C. Browser cookies only
    D. CSV files
    Answer: B
    Explanation: DataStore endpoints persist app-specific data.

20) When submitting an app to the App Hub, you must:
    A. Push to any Git repo
    B. Build the app bundle, include manifest, and meet submission criteria
    C. Include a database dump
    D. Submit server logs
    Answer: B
    Explanation: App Hub expects built artifact and metadata per guidelines.

Fetching/Presenting/Mutating details

21) In App Runtime, variables for queries are typically provided:
    A. As global window vars
    B. Via the hook call or refetch function with params
    C. Only at build time
    D. Not supported
    Answer: B
    Explanation: Pass variables to execute/refresh queries.

22) To avoid rendering before data is ready, you should:
    A. Access data unconditionally
    B. Guard on loading/error from hook
    C. Use setTimeout
    D. Throw synchronously
    Answer: B
    Explanation: Conditional rendering based on hook state.

23) For mutating data safely, you should handle:
    A. Only success
    B. Loading, error, success and show appropriate UI (alerts, disabled buttons)
    C. Ignore errors
    D. Retry infinitely without feedback
    Answer: B
    Explanation: Good UX patterns for mutations.

24) When creating forms, validation should run:
    A. Never
    B. Client-side (and server-side) to ensure correct payloads
    C. Only server-side
    D. Only on blur
    Answer: B
    Explanation: Validate before sending and after on server.

25) Which statement about DHIS2 UI components is true?
    A. They are raw HTML only
    B. They are React components designed for accessibility and consistent styling
    C. They require jQuery
    D. They cannot be themed
    Answer: B
    Explanation: UI library underpins consistent UIs.

26) The DHIS2 App Manifest (d2.config or manifest.json) defines:
    A. Server schema
    B. App metadata like name, version, type, entry points and permissions
    C. Database migrations
    D. NGINX routes
    Answer: B
    Explanation: Manifest identifies the app to the platform.

27) To run an app locally against a remote DHIS2 instance in dev:
    A. Use the d2 dev server/proxy and configure baseUrl/auth (env, runtime config)
    B. Copy server files locally
    C. Disable CORS manually in browser
    D. Use file:// URLs
    Answer: A
    Explanation: Dev server proxies requests to target instance.

28) The DHIS2 Web API path for resources is typically under:
    A. /v1
    B. /api
    C. /rest
    D. /graphql
    Answer: B
    Explanation: e.g., /api/dataElements, /api/organisationUnits.

29) The App Runtime query “fields” parameter is analogous to:
    A. Selecting which properties to return to reduce payload
    B. CSS selectors
    C. SQL GROUP BY
    D. HTTP headers
    Answer: A
    Explanation: Limit fields to what UI needs.

30) For pagination in list views you should:
    A. Fetch all records always
    B. Use paging parameters (page, pageSize) and render pagination controls
    C. Use innerHTML
    D. Randomize order
    Answer: B
    Explanation: Efficient, scalable data presentation.

App Guides and Concepts

31) Building and publishing an app involves:
    A. d2 build, verifying manifest, packaging, and submission to App Hub
    B. Only pushing to Git
    C. Writing only server code
    D. Changing DHIS2 core
    Answer: A
    Explanation: Standard distribution path for DHIS2 apps.

32) A common table loading pattern in the course was:
    A. Table first, then loader on top
    B. Show CircularLoader while loading; on success render Table; on error render message
    C. Alert only
    D. Console log
    Answer: B
    Explanation: Clear UI states for data lifecycle.

33) React Final Form provides:
    A. CSS grid
    B. Form state management, validation, and submission handling
    C. Database drivers
    D. Charting
    Answer: B
    Explanation: Widely used form library in React.

34) The DHIS2 design system encourages:
    A. Arbitrary styles per app
    B. Consistency via shared components and patterns
    C. Inline styles only
    D. No accessibility concerns
    Answer: B
    Explanation: UI library maintains consistent look/feel.

35) Mutations often require which HTTP method for partial updates?
    A. GET
    B. PATCH (or PUT for full update)
    C. CONNECT
    D. TRACE
    Answer: B
    Explanation: PATCH modifies part of a resource; PUT replaces it.

36) To avoid over-fetching with App Runtime queries you should:
    A. Omit fields
    B. Use fields parameter to request specific properties
    C. Fetch HTML
    D. Disable caching
    Answer: B
    Explanation: Keep payloads minimal.

37) A typical error surface for queries uses:
    A. useAlert to show an error message when error exists
    B. console.log only
    C. window.alert exclusively
    D. Ignore and render empty UI
    Answer: A
    Explanation: Provide user-visible feedback.

38) To test queries quickly without coding UI you can use:
    A. DataStore UI only
    B. Query Playground or API browser tools
    C. Randomizer
    D. CSV import
    Answer: B
    Explanation: Helpful developer tools.

39) Inserting data from a form typically includes:
    A. Validate inputs; construct mutation variables; call mutate; on success, notify and refetch or update UI
    B. Direct DB access from browser
    C. Server restart
    D. CSS update
    Answer: A
    Explanation: Safe CRUD flow.

40) A DHIS2 app should avoid storing secrets in:
    A. Environment variables passed at build-time only
    B. Client-side bundle or localStorage
    C. Server-side configuration
    D. Deployment pipeline secrets store
    Answer: B
    Explanation: Client bundles are public; use server-side secrets.

41) What are the two main categories of DHIS2 application development tools?
    A. Front-end and back-end tools
    B. Build-time developer tools and runtime libraries
    C. Database tools and UI tools
    D. Testing tools and deployment tools
    Answer: B
    Explanation: Build-time tools (App Platform, d2 CLI) run locally during development, while runtime libraries (App Runtime, UI Library) run in the browser.
    Why A: While related to web development, DHIS2 specifically organizes tools by when they execute
    Why C: Database and UI are features, not tool categories
    Why D: Testing and deployment are included in the categories but not the main division

42) What does the d2 CLI enable developers to do?
    A. Execute App Platform scripts and run local DHIS2 instances via Docker
    B. Only compile TypeScript code
    C. Replace the need for React
    D. Directly modify the DHIS2 database
    Answer: A
    Explanation: d2 CLI is the command-line interface that executes App Platform scripts, runs dev servers, and can spin up local DHIS2 instances for testing.
    Why B: TypeScript compilation is one feature, but d2 does much more
    Why C: d2 is a build tool that works with React
    Why D: Apps interact with DHIS2 via API, not direct database access

43) What is the primary purpose of the DHIS2 App Platform?
    A. To provide a database management system
    B. To automate build scripts similar to create-react-app for DHIS2 apps
    C. To deploy apps to production servers
    D. To write CSS frameworks
    Answer: B
    Explanation: App Platform provides build scripts that automate creating, developing, and publishing DHIS2 applications, similar to how create-react-app works for React apps.
    Why A: DHIS2 core manages the database
    Why C: Deployment is separate; App Platform focuses on development and building
    Why D: UI Library provides components; App Platform handles builds

44) Which statement about the DHIS2 App Runtime is correct?
    A. It only runs during the build process
    B. It provides hooks like useDataQuery to query the DHIS2 API at runtime in the browser
    C. It replaces React in DHIS2 apps
    D. It only handles CSS styling
    Answer: B
    Explanation: App Runtime is a runtime library that executes in the browser, providing React hooks to interact with the DHIS2 Web API.
    Why A: Runtime libraries execute when the app runs, not during build
    Why C: App Runtime works with React, doesn't replace it
    Why D: UI Library handles styling; App Runtime handles data

45) What is the purpose of the DHIS2 UI Library?
    A. To execute database queries
    B. To provide standard React components aligned with the DHIS2 design system
    C. To compile JavaScript code
    D. To manage server infrastructure
    Answer: B
    Explanation: UI Library is part of the DHIS2 design system, offering reusable React components that maintain consistency across DHIS2 applications.
    Why A: App Runtime handles queries
    Why C: Build tools handle compilation
    Why D: Infrastructure is managed separately

46) According to the course, where can DHIS2 apps be downloaded from?
    A. Only from GitHub
    B. The DHIS2 App Hub
    C. npm registry only
    D. Apple App Store
    Answer: B
    Explanation: DHIS2 App Hub (apps.dhis2.org) is the official marketplace where third-party developers can publish and users can download DHIS2 applications.
    Why A: While source code may be on GitHub, the app distribution happens via App Hub
    Why C: npm is for JavaScript packages, not complete DHIS2 apps
    Why D: DHIS2 apps are web applications, not native mobile apps

47) What does the DHIS2 Data Query Playground help developers do?
    A. Write CSS styles
    B. Test and experiment with API queries without coding UI
    C. Deploy apps to production
    D. Create database schemas
    Answer: B
    Explanation: The Query Playground is a developer tool that allows testing DHIS2 API queries interactively, helping developers understand the API before implementing queries in code.
    Why A: Playground focuses on data queries, not styling
    Why C: Deployment is a separate process
    Why D: DHIS2 core manages data schemas

48) Which DHIS2 App Runtime hooks are specifically mentioned in the course?
    A. useState and useEffect only
    B. useDataQuery, useDataMutation, useAlert, and useConfig
    C. useContext and useReducer only
    D. useRouter and useNavigate
    Answer: B
    Explanation: The course covers these DHIS2-specific hooks: useDataQuery (fetch), useDataMutation (write), useAlert (notifications), and useConfig (instance details).
    Why A: These are React hooks, not DHIS2-specific
    Why C: While React hooks, not the DHIS2 App Runtime hooks taught in course
    Why D: These are routing hooks, not DHIS2 App Runtime hooks

49) What form library does the DHIS2 course use for building forms?
    A. Formik
    B. React Final Form
    C. Redux Form
    D. Pure HTML forms only
    Answer: B
    Explanation: The course teaches React Final Form, which the DHIS2 UI Component library has integrated for handling form inputs and validation.
    Why A: Formik is popular but not what DHIS2 UI uses
    Why C: Redux Form is outdated; course uses Final Form
    Why D: React-based forms with validation are preferred

50) According to the course, what are the two main components of the example application?
    A. Login and logout screens
    B. A table displaying fetched data (Browse) and a form for modifying data (Insert)
    C. A dashboard and settings page
    D. User management and reporting
    Answer: B
    Explanation: The course project builds an app with a Browse component (table showing DHIS2 data) and an Insert component (form for data entry/modification).
    Why A: The course focuses on data display and entry, not authentication
    Why C: While common in apps, the course specifically teaches Browse and Insert
    Why D: These are advanced features; the course covers fundamentals
