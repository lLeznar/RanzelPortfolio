import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Cake, User, Flag, Heart } from 'lucide-react';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { staggerContainer, fadeIn, scaleIn } from '../../constants/animations';
import { MagneticButton } from '../MagneticButton';
import { personalDetails } from '../../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  cake: <Cake size={18} className="text-cyan-400" />,
  user: <User size={18} className="text-cyan-400" />,
  flag: <Flag size={18} className="text-cyan-400" />,
  heart: <Heart size={18} className="text-cyan-400" />,
};

export function HeroSection() {
  const typingText = useTypingEffect([
    'Full-Stack Web Developer',
    'System Architect',
    'Mobile Developer',
    'System Administrator',
  ]);

  return (
    <motion.header
      data-section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen flex flex-col justify-center snap-start snap-always py-16 md:py-0 relative"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 pt-16 md:pt-0">
        <div className="flex-1 w-full text-center md:text-left">
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 mb-2 font-light tracking-wide">
            Hi, I'm
          </motion.p>

          <motion.h1 
            variants={fadeIn} 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent animate-text-glitch-pro inline-block">
              Ranzel Aris A. Merto
            </span>
          </motion.h1>

          <motion.div variants={fadeIn} className="text-xl md:text-2xl font-medium text-slate-400 mb-6 h-8 md:h-10">
            <span className="text-slate-400">And I am a </span>
            <span className="font-mono text-cyan-300">{typingText}</span>
            <span className="text-cyan-400 animate-blink ml-0.5">|</span>
          </motion.div>

          <motion.p variants={fadeIn} className="max-w-lg mx-auto md:mx-0 text-base text-slate-400/90 leading-relaxed mb-8">
            Results-driven developer digitalizing government infrastructure.
            Specialized in building large-scale full-stack applications,
            mobile platforms, and containerized server deployments.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-sm font-mono">
            <MagneticButton>
              <a href="mailto:ranzelmerto.rm@gmail.com" className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group">
                <Mail size={15} className="text-cyan-400 group-hover:scale-110 transition-transform shrink-0" /> ranzelmerto.rm@gmail.com
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="tel:+639366808540" className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group">
                <Phone size={15} className="text-cyan-400 group-hover:scale-110 transition-transform shrink-0" /> +639366808540
              </a>
            </MagneticButton>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-slate-800 text-slate-500">
              <MapPin size={15} className="text-cyan-400 shrink-0" /> Cabanatuan City, Nueva Ecija, Philippines
            </div>
            <MagneticButton className="flex">
              <a href="https://github.com/lLeznar" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-xl glass-card border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group">
                <Github size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </MagneticButton>
            <MagneticButton className="flex">
              <a href="https://www.linkedin.com/in/ranzel-aris-merto-b51aa6296/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-xl glass-card border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group">
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div variants={scaleIn} className="shrink-0">
          <div className="relative w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 group">
            {/* Clean border glow */}
            <div className="absolute inset-[-2px] rounded-[2.5rem] bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Inner Content Container */}
            <div className="absolute inset-[1px] rounded-[2.4rem] overflow-hidden bg-slate-950 border border-white/10 shadow-2xl shadow-black/50">
              <img
                src="/profile.jpg"
                alt="Ranzel Aris Merto"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent group-hover:from-slate-950/40 group-hover:via-transparent transition-all duration-500"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-12 md:mt-16">
        {personalDetails.map((detail, i) => (
          <div key={i} className="flex items-center gap-3 p-4 rounded-xl glass-card border border-white/5 bg-white/[0.02]">
            {iconMap[detail.icon]}
            <div>
              <div className="text-sm md:text-base font-semibold text-slate-200">
                {detail.value}
              </div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{detail.label}</div>
            </div>
          </div>
        ))}
      </motion.div>

    </motion.header>
  );
}
