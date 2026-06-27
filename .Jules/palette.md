## 2024-03-21 - Wrapper Component Accessibility
**Learning:** Interactive wrapper components like `MagneticButton` do not automatically pass down accessibility attributes or focus states to their child elements.
**Action:** When using wrapper components for interactive elements, always ensure to explicitly apply `aria-label` (for icon-only links) and `focus-visible` styling (for keyboard navigation) to the inner interactive element itself (e.g., the `<a>` or `<button>` tag).
