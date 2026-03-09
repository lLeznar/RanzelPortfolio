import { motion, useScroll, useTransform } from 'framer-motion';

export function GlitchBackground() {
  const { scrollYProgress } = useScroll();
  
  // Interactive scrolling: move the layers slightly at different speeds (parallax)
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  
  // Scroll-based glitch intensity (opacity changes as you scroll)
  const opacityGlitch = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.15, 0.6, 0.2, 0.7, 0.15]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950">
      {/* Base Image */}
      <motion.div 
        className="absolute inset-[-40%] w-[180%] h-[180%] bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity grayscale"
        style={{ backgroundImage: 'url(/bg.jpg)', y: y1 }}
      />
      
      {/* Cyan Glitch Layer */}
      <motion.div 
        className="absolute inset-[-40%] w-[180%] h-[180%] bg-cover bg-center bg-no-repeat mix-blend-screen opacity-40 animate-glitch-1"
        style={{ backgroundImage: 'url(/bg.jpg)', y: y2, opacity: opacityGlitch, filter: 'hue-rotate(90deg) saturate(3)' }}
      />

      {/* Red/Magenta Glitch Layer */}
      <motion.div 
        className="absolute inset-[-40%] w-[180%] h-[180%] bg-cover bg-center bg-no-repeat mix-blend-color-dodge opacity-30 animate-glitch-2"
        style={{ backgroundImage: 'url(/bg.jpg)', y: y3, filter: 'hue-rotate(-45deg) saturate(2)' }}
      />
      
      {/* Scanlines overlay */}
      <div className="absolute inset-0 bg-scanlines mix-blend-overlay opacity-30"></div>
      
      {/* Radial/Linear Gradient for readability focus */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40"></div>
    </div>
  );
}
