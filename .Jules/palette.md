## 2026-06-19 - Interactive Elements Missing Focus/ARIA Labels
**Learning:** Interactive elements like icon-only links (socials in HeroSection) and custom UI controls (NavDots) were missing proper keyboard accessibility (`focus-visible`) and/or screen reader labels (`aria-label`).
**Action:** Ensure all interactive elements, especially those without text content or custom implementations, have `aria-label`s and `focus-visible` states using existing utility classes like `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50`.
