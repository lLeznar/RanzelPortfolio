import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Experience } from '../../types';
import { fadeIn } from '../../constants/animations';

interface ExperienceCardProps {
  exp: Experience;
}

export function ExperienceCard({ exp }: ExperienceCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
      className={`group relative flex flex-col md:flex-row gap-3 md:gap-5 p-4 md:p-6 rounded-2xl glass-card border transition-all duration-300 ${
        exp.type === 'current'
          ? 'border-white/20 hover:border-white/40'
          : 'border-slate-800 hover:border-white/20'
      }`}
    >
      {/* Current badge */}
      {exp.type === 'current' && (
        <div className="absolute -top-3 right-6 px-3 py-0.5 bg-white/10 border border-white/20 rounded-full text-[10px] uppercase font-bold text-slate-200 tracking-[0.2em] shadow-xl">
          CURRENT
        </div>
      )}

      {/* Left: icon + period */}
      <div className="md:w-1/4 shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <div className={`p-2 rounded-lg ${exp.type === 'current' ? 'bg-cyan-400/10 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
            {exp.icon}
          </div>
          <span className="text-sm font-mono text-slate-500">{exp.period}</span>
        </div>
      </div>

      {/* Right: content */}
      <div className="md:w-3/4">
        <h4 className="text-lg font-bold text-slate-200 group-hover:text-cyan-300 transition-colors mb-1">
          {exp.role}
        </h4>
        <p className="text-sm text-slate-400 mb-1 font-medium">{exp.company}</p>
        <p className="text-xs text-slate-500 mb-4 font-mono flex items-center gap-1">
          <MapPin size={12} /> {exp.location}
        </p>
        <p className="text-slate-400/90 leading-relaxed mb-5 text-sm">
          {exp.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag, i) => (
            <span key={i} className="px-2.5 py-1 bg-white/5 text-slate-400 text-[10px] uppercase font-bold rounded-md border border-white/5 hover:bg-white/10 hover:text-slate-200 transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
