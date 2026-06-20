## 2024-05-18 - Missing semantic attributes on wrapper components
**Learning:** Icon-only interactive elements in generic wrapper components like `MagneticButton` may lack native semantic attributes if not explicitly passed down, leading to accessibility gaps. For example, `ContactSection` explicitly set `aria-label`s but `HeroSection` missed them initially.
**Action:** Always verify `aria-label`s and `focus-visible` styles on custom or wrapped components (like `MagneticButton`) across different sections to ensure consistency, especially for icon-only links.
