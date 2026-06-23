## 2024-03-24 - Accessibility on wrapper components
**Learning:** Wrapper components like `MagneticButton` do not automatically pass accessibility attributes (like keyboard focus or aria-labels) down to their inner interactive elements (`<a>` or `<button>`).
**Action:** Always verify that interactive elements inside layout/animation wrappers have their own explicit `aria-label` (for icon-only elements) and `focus-visible` styling applied directly to the inner element.
