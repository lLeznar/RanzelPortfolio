## 2024-06-30 - Interactive Wrapper Component Accessibility
**Learning:** Interactive wrapper components (like `MagneticButton` in this project) do not automatically pass down accessibility attributes like focus states or ARIA labels to the inner elements.
**Action:** When wrapping native interactive elements (like `<a>` or `<button>`) with custom wrappers, explicitly add `focus-visible` styles and `aria-label` (for icon-only links) directly to the inner elements to ensure keyboard visibility and screen reader accessibility.
