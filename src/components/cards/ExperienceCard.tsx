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
      className={`group relative flex flex-col md:flex-row gap-5 p-6 rounded-2xl glass-card border transition-all duration-300 ${
        exp.type === 'current'
          ? 'border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]'
          : 'border-slate-800 hover:border-slate-700 hover:shadow-[0_0_20px_rgba(34,211,238,0.05)]'
      }`}
    >
      {/* Current badge */}
      {exp.type === 'current' && (
        <div className="absolute -top-3 right-6 px-3 py-0.5 bg-cyan-400/15 border border-cyan-400/30 rounded-full text-[10px] font-mono text-cyan-400 tracking-wider">
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
            <span key={i} className="px-2.5 py-1 bg-cyan-400/8 text-cyan-400 text-[11px] font-mono rounded-md border border-cyan-400/15 hover:bg-cyan-400/15 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
