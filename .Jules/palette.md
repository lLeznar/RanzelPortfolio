## 2024-05-24 - Interactive Component Wrappers Obscuring A11y Focus
**Learning:** In components using wrapper libraries like Framer Motion or custom interactive wrappers (like `MagneticButton`), the inner interactive elements (`<button>` or `<a>`) can lose native focus visibility, and a11y labels might not be correctly passed down or applied to the actual interactive node.
**Action:** Always verify that inner elements of interactive wrappers have explicitly defined `focus-visible` styling and required `aria-label`s for screen readers.
