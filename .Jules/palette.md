## 2024-05-24 - [Focus States with Magnetic Wrapper Components]
**Learning:** Interactive wrapper components (like `MagneticButton`) in this project handle animation but don't inherently provide accessibility roles or focus management.
**Action:** Always apply `aria-label` and `focus-visible` styling directly to the inner semantically interactive child element (`<a>`, `<button>`) rather than the animation wrapper to ensure screen readers and keyboard navigation work correctly.
