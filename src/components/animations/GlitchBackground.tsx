import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface GlitchBackgroundProps {
  activeSection?: number;
}

// Section background images mapped to indices 0-5
const sectionImages = [
  '/BackGround/herobg.png',       // 0 - Hero
  '/BackGround/expbg.jpg',        // 1 - Experience
  '/BackGround/projectbg.png',    // 2 - Projects
  '/BackGround/technicalbg.jpg',  // 3 - Skills / Technical
  '/BackGround/educationbg.jpg',  // 4 - Education
  '/BackGround/herobg.png',       // 5 - Contact (reuses hero)
];

// ─── Per-Section Motion Configs ────────────────────────────────────────────────
// Each section gets its own Framer Motion animate props

const heroMotion = {
  animate: {
    scale: [1, 1.08, 1.04, 1.08, 1],
    x: ['0%', '1.5%', '-1%', '0.5%', '0%'],
    y: ['0%', '-1%', '0.5%', '-0.5%', '0%'],
  },
  transition: {
    duration: 20,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut' as const,
  },
};

const experienceMotion = {
  animate: {
    x: ['0%', '-3%', '-1%', '-3%', '0%'],
    scale: [1, 1.03, 1.01, 1.03, 1],
  },
  transition: {
    duration: 30,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut' as const,
  },
};

const projectsMotion = {
  animate: {
    x: [0, -4, 3, -2, 4, 0],
    y: [0, 2, -3, 1, -2, 0],
    clipPath: [
      'inset(0% 0% 0% 0%)',
      'inset(5% 0% 10% 0%)',
      'inset(15% 0% 5% 0%)',
      'inset(3% 0% 20% 0%)',
      'inset(10% 0% 8% 0%)',
      'inset(0% 0% 0% 0%)',
    ],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'linear' as const,
  },
};

const skillsMotion = {
  animate: {
    backgroundPositionY: ['0%', '100%'],
    scale: [1, 1.02, 1, 1.02, 1],
  },
  transition: {
    duration: 12,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'linear' as const,
  },
};

const educationMotion = {
  animate: {
    scale: [1, 1.04, 1.02, 1.04, 1],
    y: ['0%', '-0.5%', '0.3%', '-0.3%', '0%'],
  },
  transition: {
    duration: 16,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut' as const,
  },
};

const contactMotion = {
  animate: {
    scale: [1, 1.05, 1.02, 1.05, 1],
    y: ['0%', '-0.3%', '0.2%', '-0.2%', '0%'],
  },
  transition: {
    duration: 18,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut' as const,
  },
};

const motionConfigs = [heroMotion, experienceMotion, projectsMotion, skillsMotion, educationMotion, contactMotion];

// Per-section color filters for unique mood
const sectionFilters = [
  'grayscale(0.7) brightness(0.5)',                          // Hero – muted monochrome
  'grayscale(0.5) brightness(0.45) sepia(0.15)',             // Experience – warm muted
  'grayscale(0.3) brightness(0.4) hue-rotate(160deg) saturate(0.6)', // Projects – cool tech
  'grayscale(0.6) brightness(0.35) contrast(1.2)',           // Skills – high-contrast dark
  'grayscale(0.4) brightness(0.45) sepia(0.25)',             // Education – warm parchment
  'grayscale(0.5) brightness(0.4) hue-rotate(200deg) saturate(0.5)', // Contact – cool blue
];

export function GlitchBackground({ activeSection = 0 }: GlitchBackgroundProps) {
  const { scrollYProgress } = useScroll();

  // Parallax offset shared across all layers
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  // Preload images to avoid flicker on crossfade
  useEffect(() => {
    sectionImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const currentMotion = motionConfigs[activeSection] ?? motionConfigs[0];
  const currentFilter = sectionFilters[activeSection] ?? sectionFilters[0];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950">
      {/* ── Crossfading Background Layers ──────────────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={activeSection}
          className="absolute inset-[-20%] w-[140%] h-[140%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${sectionImages[activeSection]})`,
            y: yParallax,
            filter: currentFilter,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.3,
            ...currentMotion.animate,
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.8, ease: 'easeInOut' },
            ...currentMotion.transition,
          }}
        />
      </AnimatePresence>

      {/* ── Glitch Overlay Layer (Projects-style, subtle on other sections) ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`glitch-${activeSection}`}
          className="absolute inset-[-20%] w-[140%] h-[140%] bg-cover bg-center bg-no-repeat mix-blend-screen"
          style={{
            backgroundImage: `url(${sectionImages[activeSection]})`,
            y: yParallax,
            filter: `${currentFilter} hue-rotate(180deg) saturate(0.4) brightness(0.5)`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: activeSection === 2 ? 0.15 : 0.06,
            x: [0, -3, 2, -1, 3, 0],
            y: [0, 1, -2, 1, -1, 0],
            clipPath: [
              'inset(0% 0% 100% 0%)',
              'inset(20% 0% 60% 0%)',
              'inset(50% 0% 30% 0%)',
              'inset(10% 0% 75% 0%)',
              'inset(65% 0% 15% 0%)',
              'inset(0% 0% 100% 0%)',
            ],
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.8, ease: 'easeInOut' },
            x: { duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'linear' },
            y: { duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'linear' },
            clipPath: { duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'linear' },
          }}
        />
      </AnimatePresence>

      {/* ── Scanlines ──────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 mix-blend-overlay pointer-events-none"
        style={{
          opacity: activeSection === 3 ? 0.3 : 0.15,
          background:
            'linear-gradient(to bottom, transparent, transparent 50%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.08))',
          backgroundSize: '100% 4px',
          animation: activeSection === 3 ? 'scanline-flicker 0.15s steps(2) infinite' : 'none',
        }}
      />

      {/* ── Matrix Rain Overlay (Skills section only) ──────────────────── */}
      {activeSection === 3 && (
        <motion.div
          className="absolute inset-0 pointer-events-none mix-blend-soft-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.03) 2px, rgba(34,211,238,0.03) 4px)',
            backgroundSize: '100% 8px',
            animation: 'matrix-rain 2s linear infinite',
          }}
        />
      )}

      {/* ── Radial Pulse (Education section) ───────────────────────────── */}
      {activeSection === 4 && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(34,211,238,0.08) 0%, transparent 60%)',
          }}
        />
      )}

      {/* ── Vignette Pulse (Experience section) ────────────────────────── */}
      {activeSection === 1 && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(2,6,23,0.85) 100%)',
          }}
        />
      )}

      {/* ── Dark Gradient Overlay (text readability) ───────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
    </div>
  );
}
