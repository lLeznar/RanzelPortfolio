<div align="center">

# ⚡ Ranzel Aris A. Merto — Portfolio

A modern, Awwwards-tier developer portfolio built with **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**. Features section-specific animated backgrounds, snap-scroll navigation, glitch effects, and a fully responsive mobile-first design.

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4?logo=framer)](https://motion.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite)](https://vite.dev/)

</div>

---

## ✨ Features

- **5-Level Snap Scroll** — Each section locks to the viewport for a cinematic page-by-page experience
- **Per-Section Motion Backgrounds** — Unique animated backgrounds for each section (Ken Burns, parallax pan, glitch slices, matrix-rain, radial pulse)
- **Glitch Effects** — Multi-layer glitch overlays with scroll-reactive intensity and scanline filters
- **Custom Cursor** — Magnetic hover effects and a custom-designed cursor
- **Typing Effect** — Rotating role titles with a typewriter animation
- **Responsive Design** — Fully mobile-friendly with adaptive layouts, compact cards, and touch-optimized scrolling
- **Premium Aesthetics** — Glassmorphism cards, gradient text, micro-animations, and a curated dark color palette

## 🗂️ Sections

| # | Section | Background | Motion Effect |
|---|---------|-----------|---------------|
| 1 | **Hero** | `herobg.png` | Ken Burns zoom + parallax drift |
| 2 | **Experience** | `expbg.jpg` | Horizontal pan + vignette pulse |
| 3 | **Projects** | `projectbg.png` | Glitch slices + color shift |
| 4 | **Technical Skills** | `technicalbg.jpg` | Matrix-rain + scanline flicker |
| 5 | **Education** | `educationbg.jpg` | Radial pulse + gentle float |

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Core** | React 19, TypeScript 5.9 |
| **Styling** | Tailwind CSS 4, Vanilla CSS |
| **Animation** | Framer Motion 12 |
| **Icons** | Lucide React, Simple Icons |
| **Build** | Vite 7 |

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/lLeznar/ranzel-portfolio.git
cd ranzel-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── animations/       # GlitchBackground, SectionTitle
│   ├── cards/            # ExperienceCard, ProjectCard, SkillGroupCard, EducationCard
│   ├── sections/         # HeroSection, ExperienceSection, ProjectsSection, SkillsSection, EducationSection
│   ├── CustomCursor.tsx
│   ├── NavDots.tsx
│   ├── ScrollProgress.tsx
│   └── MagneticButton.tsx
├── constants/            # Animation variants
├── data/                 # Portfolio data (experiences, projects, skills)
├── hooks/                # useTypingEffect, useSmoothScroll
├── types/                # TypeScript interfaces
├── App.tsx
└── index.css
public/
└── BackGround/           # Per-section background images
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with ☕ by <strong>Ranzel Aris A. Merto</strong></sub>
</div>
