import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown } from 'lucide-react';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { staggerContainer, fadeIn, scaleIn } from '../../constants/animations';
import { SplitText } from '../animations/SplitText';
import { MagneticButton } from '../MagneticButton';
import { stats } from '../../data/portfolio';

export function HeroSection() {
  const typingText = useTypingEffect([
    'Full-Stack Web Developer',
    'Systems Architect',
    'Government Tech Builder',
    'React & Laravel Engineer',
  ]);

  return (
    <motion.header
      data-section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen flex flex-col justify-center snap-start py-20 md:py-0 relative"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 pt-16 md:pt-0">
        <div className="flex-1 w-full text-center md:text-left">
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-xs font-mono tracking-wider animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            AVAILABLE FOR NEW OPPORTUNITIES
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-50 tracking-tight mb-3 leading-[1.1]">
            <SplitText text="Ranzel Aris" />
            <span className="block bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              <SplitText text="Merto" delay={0.5} />
            </span>
          </motion.h1>

          <motion.div variants={fadeIn} className="text-xl md:text-2xl font-medium text-slate-400 mb-6 h-8 md:h-10">
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
                <Mail size={15} className="text-cyan-400 group-hover:scale-110 transition-transform" /> Email
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="tel:+639366808540" className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group">
                <Phone size={15} className="text-cyan-400 group-hover:scale-110 transition-transform" /> Phone
              </a>
            </MagneticButton>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-slate-800 text-slate-500">
              <MapPin size={15} className="text-cyan-400" /> Cabanatuan City
            </div>
            <MagneticButton className="flex">
              <a href="#" className="w-11 h-11 flex items-center justify-center rounded-xl glass-card border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group">
                <Github size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </MagneticButton>
            <MagneticButton className="flex">
              <a href="#" className="w-11 h-11 flex items-center justify-center rounded-xl glass-card border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group">
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div variants={scaleIn} className="shrink-0">
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 group">
            <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-cyan-400 via-emerald-400 to-violet-500 animate-spin-slow opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"></div>
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-slate-950 border-2 border-slate-900">
              <img
                src="/profile.jpg"
                alt="Ranzel Aris Merto"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        {stats.map((stat, i) => (
          <div key={i} className="text-center p-4 rounded-xl glass-card border border-slate-800/50">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-1">
              {stat.value}
            </div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ChevronDown size={18} />
      </motion.div>
    </motion.header>
  );
}
