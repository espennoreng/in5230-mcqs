DHIS2 — MCQs (40)

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
