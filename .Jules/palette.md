## 2024-06-18 - Inconsistent ARIA labels on Icon-only Links
**Learning:** Icon-only links (like social links) might have `aria-label`s properly set in one section (e.g., Contact) but completely missed in other sections (e.g., Hero) of the same application. This inconsistency harms screen reader accessibility.
**Action:** When adding or verifying accessibility attributes like `aria-label` on social/icon links, proactively check the rest of the codebase for similar components to ensure consistent application.
