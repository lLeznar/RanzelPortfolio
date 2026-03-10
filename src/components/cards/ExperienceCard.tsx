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
          ? 'border-emerald-500/30 bg-emerald-500/[0.02] hover:bg-emerald-500/[0.04] hover:border-emerald-400/50 shadow-[inset_4px_0_0_rgba(16,185,129,0.5)]'
          : 'border-slate-800 hover:border-white/20'
      }`}
    >
      {/* Current badge */}
      {exp.type === 'current' && (
        <div className="absolute -top-3 right-6 px-3 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] uppercase font-bold text-emerald-400 tracking-[0.2em] shadow-xl">
          CURRENT
        </div>
      )}

      {/* Left: icon + period */}
      <div className="md:w-1/4 shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <div className={`p-2 rounded-lg ${exp.type === 'current' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
            {exp.icon}
          </div>
          <span className="text-sm font-mono text-slate-500">{exp.period}</span>
        </div>
      </div>

      {/* Right: content */}
      <div className="md:w-3/4">
        <h4 className={`text-lg font-bold transition-colors mb-1 ${
          exp.type === 'current' ? 'text-emerald-50 group-hover:text-emerald-300' : 'text-slate-200 group-hover:text-cyan-300'
        }`}>
          {exp.role}
        </h4>
        <p className="text-sm text-slate-400 mb-1 font-medium">{exp.company}</p>
        <p className="text-xs text-slate-400 mb-4 font-mono flex items-center gap-1">
          <MapPin size={12} /> {exp.location}
        </p>
        <p className="text-slate-300 leading-relaxed mb-5 text-sm">
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
