HTML & CSS — MCQs (40)

HTML (20)

1) Which tag best represents a standalone piece of content that could be independently distributed?
    A. <div>
    B. <article>
    C. <section>
    D. <span>
    Answer: B
    Explanation: `<article>` denotes self-contained content (e.g., blog post, news item) that could be syndicated. `<div>` is generic and non-semantic.

2) What is the correct way to provide alternative text for images?
    A. <img alt="description" src="...">
    B. <img title="description" src="...">
    C. <image altText="..." src="...">
    D. <img text="..." src="...">
    Answer: A
    Explanation: The `alt` attribute describes the image for screen readers and when images fail to load. `title` is supplementary and not a replacement for meaningful alt text.

3) Which attribute on `<a>` is used for navigation destination?
    A. ref
    B. href
    C. src
    D. to
    Answer: B
    Explanation: `href` contains the URL for the link. In client-side routers, props like `to` are used by routing libraries, but in plain HTML `href` is standard.

4) Which element represents a group of introductory or navigational aids for its nearest ancestor sectioning content or root?
    A. <header>
    B. <nav>
    C. <aside>
    D. <footer>
    Answer: A
    Explanation: `<header>` contains introductory content like headings, logos, or navs for its nearest sectioning ancestor. Use `<nav>` specifically for navigation links.

5) Which element represents content slightly related to the main content (e.g., sidebar)?
    A. <aside>
    B. <section>
    C. <main>
    D. <details>
    Answer: A
    Explanation: `<aside>` is for tangential or complementary content, such as sidebars, pull quotes, or related links.

6) Choose the most semantic markup for a list of navigation links.
    A. <div><a>..</a><a>..</a></div>
    B. <ul><li><a>..</a></li>...</ul>
    C. <p><a>..</a></p>
    D. <span><a>..</a></span>
    Answer: B
    Explanation: A `<ul>` with `<li>` is the semantic structure for lists, including navigation. Screen readers and CSS expectations are better served by list markup.

7) Which input type gives you built-in validation for email format?
    A. type="text"
    B. type="email"
    C. type="url"
    D. type="search"
    Answer: B
    Explanation: `type="email"` triggers browser validation for email format and can surface mobile keyboard optimizations. Still validate on the server.

8) What element groups controls and labels within a form, often with a caption?
    A. <form>
    B. <fieldset>
    C. <legend>
    D. <label>
    Answer: B
    Explanation: `<fieldset>` groups related inputs; `<legend>` provides a caption for the grouped controls — both improve form semantics and accessibility.

9) Which attribute connects a label to a form control by id?
    A. for
    B. name
    C. aria-controls
    D. data-id
    Answer: A
    Explanation: `label[for="control-id"]` links the label to the input, improving accessibility and click-area behavior.

10) Which element defines the primary content unique to the document?
    A. <main>
    B. <section>
    C. <div>
    D. <body>
    Answer: A
    Explanation: `<main>` identifies the dominant content of the `<body>`; there should generally be only one `<main>` per page to aid accessibility.

11) To open a link in a new tab/window, use:
    A. target="_self"
    B. target="_parent"
    C. target="_top"
    D. target="_blank"
    Answer: D
    Explanation: `target="_blank"` opens a new tab. For security, also include `rel="noopener noreferrer"` to prevent `window.opener` access and referrer leakage.

12) The best element for an inline phrase without semantic meaning is:
    A. <em>
    B. <strong>
    C. <span>
    D. <mark>
    Answer: C
    Explanation: `<span>` is a generic inline container with no semantic meaning; use semantic tags like `<em>`/`<strong>` when they convey emphasis or importance.

13) Which element provides machine-readable time/date?
    A. <date>
    B. <time>
    C. <datetime>
    D. <timestamp>
    Answer: B
    Explanation: `<time datetime="2023-10-03">Oct 3, 2023</time>` provides both human- and machine-readable time, useful for parsers and accessibility.

14) What attribute provides fallback text when an image fails to load?
    A. title
    B. alt
    C. aria-label
    D. label
    Answer: B
    Explanation: `alt` describes the image and is shown when the image can't load; it's essential for accessibility.

15) Which element semantically marks navigation links?
    A. <menu>
    B. <nav>
    C. <aside>
    D. <toolbar>
    Answer: B
    Explanation: `<nav>` groups primary navigation links (menus, site navigation) and improves semantics for assistive tech.

16) Which tag best wraps a standalone media with caption?
    A. <figure> with <figcaption>
    B. <div> with <p>
    C. <section> with <header>
    D. <img> with title
    Answer: A
    Explanation: `<figure>` groups media with an optional `<figcaption>` for a descriptive caption; useful for images, charts, and diagrams.

17) The correct self-closing syntax for an image in HTML5 is:
    A. <img />
    B. <img></img>
    C. <image />
    D. <img>
    Answer: D
    Explanation: In HTML5, void elements like `<img>` are written as `<img src="..." alt="...">` (no closing tag required); the trailing slash is optional and primarily for XHTML compatibility.

18) Which attribute is recommended for external links that open new tabs for security?
    A. rel="noopener noreferrer"
    B. rel="nofollow"
    C. rel="external"
    D. rel="author"
    Answer: A
    Explanation: `rel="noopener noreferrer"` prevents the new page from accessing `window.opener` (mitigates tabnabbing) and may avoid sending referrer information.

19) Which element is appropriate for a quoted block of text?
    A. <q>
    B. <blockquote>
    C. <cite>
    D. <code>
    Answer: B
    Explanation: `<blockquote>` marks longer quoted blocks; `<q>` is for short inline quotations, and `<cite>` denotes a reference to a work or author.

20) Which attribute improves accessibility by describing a links purpose beyond the anchor text (if necessary)?
    A. aria-label
    B. role
    C. class
    D. id
    Answer: A
    Explanation: `aria-label` provides an accessible name to elements when the visible text isn't sufficient. Use ARIA attributes carefully and prefer semantic markup when possible.

CSS (20)

21) Which unit scales with the root elements font-size?
    A. em
    B. rem
    C. px
    D. vh
    Answer: B
    Explanation: `rem` is relative to the root (`<html>`) font-size; `em` is relative to the current element's font-size. Use `rem` for consistent sizing across components.

22) Which CSS color format supports alpha transparency and is widely used?
    A. hex without alpha
    B. hsl() only
    C. rgba()
    D. named colors only
    Answer: C
    Explanation: `rgba(r,g,b,a)` supports alpha transparency. Modern `hsl()` also supports alpha via `hsla()` or `hsl(... / alpha)` syntax. Hex now supports alpha with 8-digit hex (e.g., `#RRGGBBAA`).

23) Which selector has highest specificity among these?
    A. .card .title
    B. header nav a
    C. #main .card
    D. a:hover
    Answer: C
    Explanation: ID selectors (`#id`) have higher specificity than class or type selectors. Use specificity carefully — rely on classes and cascade order rather than heavy IDs.

24) What does display:flex establish?
    A. Block formatting context only
    B. Flex formatting context for direct children
    C. Grid formatting context
    D. Inline formatting context
    Answer: B
    Explanation: `display: flex` creates a flex formatting context for its direct children, turning them into flex items and enabling flexible layout along a main axis.

25) In a flex container, which property controls how extra space is distributed along the main axis?
    A. align-items
    B. justify-content
    C. flex-wrap
    D. align-content
    Answer: B
    Explanation: `justify-content` adjusts alignment and distribution of free space along the main axis (e.g., `center`, `space-between`, `flex-start`).

26) Which creates a two-column grid with equal widths and 16px gap?
    A. display:grid; grid-template-columns: 1fr 1fr; gap:16px;
    B. display:flex; flex-direction:column; gap:16px;
    C. display:grid; grid-columns:2; margin:16px;
    D. display:flex; grid-template-columns: 1fr 1fr;
    Answer: A
    Explanation: `grid-template-columns: 1fr 1fr` creates two equal columns and `gap` sets spacing between grid cells.

27) Which media query targets screens narrower than 768px?
    A. @media (max-device-width: 768)
    B. @media screen and (max-width: 768px)
    C. @media (min-width: 768px)
    D. @media screen and (width < 768px)
    Answer: B
    Explanation: `@media screen and (max-width: 768px)` applies styles when the viewport width is 768px or less; prefer `max-width` for responsive breakpoints.

28) Which property changes stacking order for positioned elements?
    A. order
    B. position
    C. z-index
    D. float
    Answer: C
    Explanation: `z-index` adjusts stacking context for positioned elements (with position not static). Higher `z-index` appears above lower ones.

29) The best way to center a block horizontally with known width is:
    A. float:center
    B. margin: 0 auto
    C. text-align:center on the block
    D. position:relative; left:50%
    Answer: B
    Explanation: `margin: 0 auto` centers a block with a specified width. For flexible containers, use flexbox: `display:flex; justify-content:center`.

30) Which pseudo-class styles a link on hover?
    A. :visited
    B. :hover
    C. :active
    D. :focus
    Answer: B
    Explanation: `:hover` applies styles when the user points to an element (mouse hover or similar pointer). For keyboard accessibility, also style `:focus`.

31) Which property controls flex item growth factor?
    A. flex-grow
    B. flex-basis
    C. flex-shrink
    D. align-self
    Answer: A
    Explanation: `flex-grow` sets how much an item will grow relative to others when extra space is available. Combined with `flex-shrink` and `flex-basis`, it defines the `flex` shorthand.

32) Grid area assignment is done with:
    A. grid-gap
    B. grid-area
    C. grid-auto-flow
    D. justify-items
    Answer: B
    Explanation: `grid-area` assigns an item to a named area or uses row/column line numbers. Use `grid-template-areas` on the container to map names to the layout.

33) To make images responsive (scale with container) without distortion:
    A. width:100%; height:auto
    B. width:auto; height:100%
    C. object-fit:cover with fixed width/height always
    D. display:block only
    Answer: A
    Explanation: `width:100%; height:auto` scales images while preserving aspect ratio. `object-fit` is useful for controlling fit when using fixed dimensions.

34) Which unit is relative to viewport height?
    A. vw
    B. vh
    C. vmin
    D. vmax
    Answer: B
    Explanation: `vh` is 1% of the viewport height; `vw` is 1% of viewport width. `vmin`/`vmax` are min/max of vw and vh.

35) Which layout flow removes an element from normal flow and positions it relative to its nearest positioned ancestor?
    A. float
    B. position:absolute
    C. position:relative
    D. display:inline-block
    Answer: B
    Explanation: `position: absolute` takes the element out of normal flow and positions it according to the nearest ancestor with `position` set (other than `static`). This can overlap content and should be used carefully.

36) What is the effect of box-sizing:border-box?
    A. Padding and border are excluded from elements width/height
    B. Padding and border are included in width/height calculation
    C. Margin is included in width
    D. Disables padding
    Answer: B
    Explanation: `box-sizing: border-box` makes element width/height include padding and border, often making sizing simpler and avoiding layout surprises.

37) To create equal-height columns in a row with Flexbox:
    A. align-items: stretch on container
    B. align-items: baseline on container
    C. height:100% on items
    D. position:absolute on items
    Answer: A
    Explanation: `align-items: stretch` (the default) makes flex items stretch to the container's cross size, producing equal heights for columns.

38) Which property creates space between grid/flex items without margins?
    A. gutter
    B. spacing
    C. gap
    D. padding
    Answer: C
    Explanation: `gap` (formerly grid-gap) adds spacing between items in Grid and, in modern browsers, Flexbox — cleaner than using margins.

39) Which is preferable for layout of entire pages with rows/columns?
    A. Float-based layout
    B. CSS Grid
    C. Inline-block layout
    D. Absolute positioning everywhere
    Answer: B
    Explanation: CSS Grid is designed for two-dimensional layouts (rows and columns) and simplifies page layout compared to old float-based techniques.

40) Which pseudo-class applies when an element receives keyboard focus?
    A. :hover
    B. :focus
    C. :target
    D. :checked
    Answer: B
    Explanation: `:focus` applies when an element (like an input or link) receives keyboard focus; styling `:focus` improves keyboard accessibility.
