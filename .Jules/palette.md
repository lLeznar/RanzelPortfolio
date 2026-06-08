## 2024-05-24 - Accessible Focus States for Theme
**Learning:** This design system uses a dark theme with cyan accents (`cyan-400`). Icon-only links lacked `aria-label`s and visible focus states, degrading keyboard accessibility.
**Action:** When adding interactive elements, always ensure they have an `aria-label` (if icon-only) and use `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80` to provide a clear, theme-consistent focus indicator without breaking mouse-click styles.
