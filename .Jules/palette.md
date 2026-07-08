## 2024-05-18 - MagneticButton Interactive Element Accessibility
**Learning:** Interactive wrapper components in this project (like `MagneticButton`) do not automatically pass down or enforce accessibility attributes on their inner interactive elements, which can lead to missing `aria-label`s and focus states for keyboard users.
**Action:** Always verify and manually add `aria-label` and `focus-visible` styling to the inner interactive elements (e.g., `<a>`, `<button>`) when they are wrapped by custom animation or layout components.
