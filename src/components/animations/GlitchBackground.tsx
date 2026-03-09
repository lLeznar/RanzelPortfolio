import { motion, useScroll, useTransform, Variants } from 'framer-motion';

export function GlitchBackground() {
  const { scrollYProgress } = useScroll();
  
  // Parallax layers at different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  
  // Scroll-reactive glitch intensity
  const opacityGlitch = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.12, 0.5, 0.15, 0.55, 0.12]);

  // Framer Motion glitch variants
  const glitchVariant1: Variants = {
    animate: {
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
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'linear' as const,
      },
    },
  };

  const glitchVariant2: Variants = {
    animate: {
      x: [0, 2, -3, 1, -2, 0],
      y: [0, -1, 2, -2, 1, 0],
      clipPath: [
        'inset(100% 0% 0% 0%)',
        'inset(40% 0% 30% 0%)',
        'inset(15% 0% 60% 0%)',
        'inset(70% 0% 10% 0%)',
        'inset(25% 0% 50% 0%)',
        'inset(100% 0% 0% 0%)',
      ],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'linear' as const,
      },
    },
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950">
      {/* Base Image Layer */}
      <motion.div 
        className="absolute inset-[-40%] w-[180%] h-[180%] bg-cover bg-center bg-no-repeat opacity-25 grayscale"
        style={{ backgroundImage: 'url(/bg.jpg)', y: y1 }}
      />
      
      {/* Glitch Layer 1 - Offset white/blue */}
      <motion.div 
        className="absolute inset-[-40%] w-[180%] h-[180%] bg-cover bg-center bg-no-repeat mix-blend-screen"
        style={{ backgroundImage: 'url(/bg.jpg)', y: y2, opacity: opacityGlitch, filter: 'hue-rotate(180deg) saturate(0.5) brightness(0.6)' }}
        variants={glitchVariant1}
        animate="animate"
      />

      {/* Glitch Layer 2 - Offset grey/slate */}
      <motion.div 
        className="absolute inset-[-40%] w-[180%] h-[180%] bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-20"
        style={{ backgroundImage: 'url(/bg.jpg)', y: y3, filter: 'saturate(0) brightness(0.4)' }}
        variants={glitchVariant2}
        animate="animate"
      />
      
      {/* Scanlines */}
      <div 
        className="absolute inset-0 mix-blend-overlay opacity-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, transparent 50%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.08))',
          backgroundSize: '100% 4px',
        }}
      />
      
      {/* Dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40"></div>
    </div>
  );
}
