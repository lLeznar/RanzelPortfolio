## 2024-06-06 - Keyboard Navigation for Hover-Only Elements
**Learning:** Hover-only reveals (like navigation tooltips or dot labels) are entirely inaccessible to keyboard users unless explicitly paired with focus states. In this app's NavDots component, the section names only appeared on mouse hover, making keyboard navigation blind.
**Action:** Always pair `group-hover` utility classes with `group-focus-visible` classes (e.g., `group-focus-visible:opacity-100`) for custom navigation elements to ensure feature parity between mouse and keyboard users.
