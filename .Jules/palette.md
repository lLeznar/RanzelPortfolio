## 2026-07-01 - Focus States on Framer Motion / Custom Links
**Learning:** Interactive wrapper components in this project may not automatically pass down accessibility attributes, requiring explicit `aria-label` and `focus-visible` styling on their inner interactive elements (like icon-only `<a>` tags) to ensure keyboard navigation is visible and screen readers are supported.
**Action:** Always verify that custom buttons and links used as wrappers receive `aria-label`s and have `focus-visible` outline/ring styling added, especially for icon-only actions.
