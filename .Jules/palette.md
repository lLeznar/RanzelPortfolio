## 2026-06-21 - Focus States on Wrapper Components
**Learning:** Interactive wrapper components (like `MagneticButton`) may not automatically pass down accessibility attributes, requiring explicit `focus-visible` styling and `aria-label` on their inner interactive elements for full keyboard support.
**Action:** Always ensure that any interactive element wrapped inside a custom wrapper component has explicit focus styles and accessibility attributes.
