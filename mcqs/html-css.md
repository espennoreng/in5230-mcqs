HTML & CSS — MCQs (40)

HTML (20)

1) Which tag best represents a standalone piece of content that could be independently distributed?
   A. <div>
   B. <article>
   C. <section>
   D. <span>
   Answer: B
   Explanation: article is for self-contained content.

2) What is the correct way to provide alternative text for images?
   A. <img alt="description" src="...">
   B. <img title="description" src="...">
   C. <image altText="..." src="...">
   D. <img text="..." src="...">
   Answer: A
   Explanation: alt describes image content for accessibility.

3) Which attribute on <a> is used for navigation destination?
   A. ref
   B. href
   C. src
   D. to
   Answer: B
   Explanation: href specifies target URL.

4) Which element represents a group of introductory or navigational aids for its nearest ancestor sectioning content or root?
   A. <header>
   B. <nav>
   C. <aside>
   D. <footer>
   Answer: A
   Explanation: header contains introductory content.

5) Which element represents content slightly related to the main content (e.g., sidebar)?
   A. <aside>
   B. <section>
   C. <main>
   D. <details>
   Answer: A
   Explanation: aside is tangentially related content.

6) Choose the most semantic markup for a list of navigation links.
   A. <div><a>..</a><a>..</a></div>
   B. <ul><li><a>..</a></li>...</ul>
   C. <p><a>..</a></p>
   D. <span><a>..</a></span>
   Answer: B
   Explanation: Unordered list of links is conventional and accessible.

7) Which input type gives you built-in validation for email format?
   A. type="text"
   B. type="email"
   C. type="url"
   D. type="search"
   Answer: B
   Explanation: Email has built-in validation and mobile keyboard hints.

8) What element groups controls and labels within a form, often with a caption?
   A. <form>
   B. <fieldset>
   C. <legend>
   D. <label>
   Answer: B
   Explanation: fieldset groups; legend provides caption.

9) Which attribute connects a label to a form control by id?
   A. for
   B. name
   C. aria-controls
   D. data-id
   Answer: A
   Explanation: label[for] points to control id.

10) Which element defines the primary content unique to the document?
    A. <main>
    B. <section>
    C. <div>
    D. <body>
    Answer: A
    Explanation: main is unique content (one per page).

11) To open a link in a new tab/window, use:
    A. target="_self"
    B. target="_parent"
    C. target="_top"
    D. target="_blank"
    Answer: D
    Explanation: _blank opens a new browsing context.

12) The best element for an inline phrase without semantic meaning is:
    A. <em>
    B. <strong>
    C. <span>
    D. <mark>
    Answer: C
    Explanation: span is generic inline with no semantics.

13) Which element provides machine-readable time/date?
    A. <date>
    B. <time>
    C. <datetime>
    D. <timestamp>
    Answer: B
    Explanation: time has datetime attribute.

14) What attribute provides fallback text when an image fails to load?
    A. title
    B. alt
    C. aria-label
    D. label
    Answer: B
    Explanation: alt is read and displayed on failure.

15) Which element semantically marks navigation links?
    A. <menu>
    B. <nav>
    C. <aside>
    D. <toolbar>
    Answer: B
    Explanation: nav denotes navigation sections.

16) Which tag best wraps a standalone media with caption?
    A. <figure> with <figcaption>
    B. <div> with <p>
    C. <section> with <header>
    D. <img> with title
    Answer: A
    Explanation: figure/figcaption provide semantics.

17) The correct self-closing syntax for an image in HTML5 is:
    A. <img />
    B. <img></img>
    C. <image />
    D. <img>
    Answer: D
    Explanation: HTML5 void elements like img don’t require a trailing slash or closing tag.

18) Which attribute is recommended for external links that open new tabs for security?
    A. rel="noopener noreferrer"
    B. rel="nofollow"
    C. rel="external"
    D. rel="author"
    Answer: A
    Explanation: Prevents access to window.opener and referrer leakage.

19) Which element is appropriate for a quoted block of text?
    A. <q>
    B. <blockquote>
    C. <cite>
    D. <code>
    Answer: B
    Explanation: blockquote for long external quotations; q is inline.

20) Which attribute improves accessibility by describing a link’s purpose beyond the anchor text (if necessary)?
    A. aria-label
    B. role
    C. class
    D. id
    Answer: A
    Explanation: aria-label can clarify purpose for screen readers.

CSS (20)

21) Which unit scales with the root element’s font-size?
    A. em
    B. rem
    C. px
    D. vh
    Answer: B
    Explanation: rem is relative to root; em to current element.

22) Which CSS color format supports alpha transparency and is widely used?
    A. hex without alpha
    B. hsl() only
    C. rgba()
    D. named colors only
    Answer: C
    Explanation: rgba adds alpha; modern hsl() also supports alpha via hsla()/hsl().

23) Which selector has highest specificity among these?
    A. .card .title
    B. header nav a
    C. #main .card
    D. a:hover
    Answer: C
    Explanation: ID selectors outrank class and type.

24) What does display:flex establish?
    A. Block formatting context only
    B. Flex formatting context for direct children
    C. Grid formatting context
    D. Inline formatting context
    Answer: B
    Explanation: Children become flex items; enables flex layout.

25) In a flex container, which property controls how extra space is distributed along the main axis?
    A. align-items
    B. justify-content
    C. flex-wrap
    D. align-content
    Answer: B
    Explanation: justify-content handles main axis distribution.

26) Which creates a two-column grid with equal widths and 16px gap?
    A. display:grid; grid-template-columns: 1fr 1fr; gap:16px;
    B. display:flex; flex-direction:column; gap:16px;
    C. display:grid; grid-columns:2; margin:16px;
    D. display:flex; grid-template-columns: 1fr 1fr;
    Answer: A
    Explanation: grid-template-columns defines tracks; gap sets gutter.

27) Which media query targets screens narrower than 768px?
    A. @media (max-device-width: 768)
    B. @media screen and (max-width: 768px)
    C. @media (min-width: 768px)
    D. @media screen and (width < 768px)
    Answer: B
    Explanation: max-width matches widths up to 768px.

28) Which property changes stacking order for positioned elements?
    A. order
    B. position
    C. z-index
    D. float
    Answer: C
    Explanation: z-index applies to positioned elements.

29) The best way to center a block horizontally with known width is:
    A. float:center
    B. margin: 0 auto
    C. text-align:center on the block
    D. position:relative; left:50%
    Answer: B
    Explanation: Auto horizontal margins center block-level elements with set width.

30) Which pseudo-class styles a link on hover?
    A. :visited
    B. :hover
    C. :active
    D. :focus
    Answer: B
    Explanation: :hover triggers on pointer hover.

31) Which property controls flex item growth factor?
    A. flex-grow
    B. flex-basis
    C. flex-shrink
    D. align-self
    Answer: A
    Explanation: flex-grow defines how free space is distributed.

32) Grid area assignment is done with:
    A. grid-gap
    B. grid-area
    C. grid-auto-flow
    D. justify-items
    Answer: B
    Explanation: grid-area assigns an item to named/row/column lines.

33) To make images responsive (scale with container) without distortion:
    A. width:100%; height:auto
    B. width:auto; height:100%
    C. object-fit:cover with fixed width/height always
    D. display:block only
    Answer: A
    Explanation: Maintain aspect ratio with auto height.

34) Which unit is relative to viewport height?
    A. vw
    B. vh
    C. vmin
    D. vmax
    Answer: B
    Explanation: vh is 1% of viewport height.

35) Which layout flow removes an element from normal flow and positions it relative to its nearest positioned ancestor?
    A. float
    B. position:absolute
    C. position:relative
    D. display:inline-block
    Answer: B
    Explanation: absolute positions relative to closest positioned ancestor.

36) What is the effect of box-sizing:border-box?
    A. Padding and border are excluded from element’s width/height
    B. Padding and border are included in width/height calculation
    C. Margin is included in width
    D. Disables padding
    Answer: B
    Explanation: border-box includes padding and border in the declared size.

37) To create equal-height columns in a row with Flexbox:
    A. align-items: stretch on container
    B. align-items: baseline on container
    C. height:100% on items
    D. position:absolute on items
    Answer: A
    Explanation: Stretch is default and ensures equal height in a row.

38) Which property creates space between grid/flex items without margins?
    A. gutter
    B. spacing
    C. gap
    D. padding
    Answer: C
    Explanation: gap works for grid and flex (modern).

39) Which is preferable for layout of entire pages with rows/columns?
    A. Float-based layout
    B. CSS Grid
    C. Inline-block layout
    D. Absolute positioning everywhere
    Answer: B
    Explanation: Grid is built for 2D layouts; flex is 1D.

40) Which pseudo-class applies when an element receives keyboard focus?
    A. :hover
    B. :focus
    C. :target
    D. :checked
    Answer: B
    Explanation: :focus triggers on focusable elements.
