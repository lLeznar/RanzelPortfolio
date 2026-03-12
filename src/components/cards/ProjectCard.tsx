import { motion } from 'framer-motion';
import { Wifi } from 'lucide-react';
import { Project } from '../../types';
import { fadeIn } from '../../constants/animations';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const professionalTag = 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-slate-100';
  const colorMap = {
    cyan: professionalTag,
    emerald: professionalTag,
    amber: professionalTag,
  };

  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ scale: featured ? 1.01 : 1.02, y: -5, transition: { duration: 0.2 } }}
      data-cursor="expand"
      className={`group relative rounded-3xl border transition-all duration-500 overflow-hidden md:col-span-2 ${
        featured 
          ? 'p-8 bg-slate-900/40 border-white/10 hover:border-white/30 shadow-2xl' 
          : 'p-7 glass-card border border-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-cyan-500/5'
      }`}
    >
      {/* Featured Glass Overlay */}
      {featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
      )}

      {/* Status badge - inline on mobile, absolute on md+ */}
      <div className={`md:absolute md:top-6 md:right-8 inline-block mb-3 md:mb-0 px-3 py-1 border rounded-full text-[9px] font-bold uppercase tracking-[0.2em] z-10 ${
        featured ? 'bg-white/10 border-white/20 text-slate-100 shadow-xl' : 'bg-white/5 border-white/10 text-slate-400'
      }`}>
        {project.status.toUpperCase()}
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-6">
          <div className={`p-3 rounded-2xl transition-colors ${
            featured ? 'bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20' : 'bg-emerald-400/10 text-emerald-400 group-hover:bg-emerald-400/15'
          }`}>
            {project.icon}
          </div>
          <div>
            <h4 className={`font-bold transition-colors mb-1 ${
              featured ? 'text-2xl md:text-3xl text-slate-50 group-hover:text-cyan-300' : 'text-xl text-slate-100 group-hover:text-emerald-300'
            }`}>
              {project.name}
            </h4>
            <p className="text-xs font-mono text-slate-500 flex items-center gap-1.5 lights-on">
              <Wifi size={12} className={featured ? 'text-cyan-400' : 'text-emerald-400'} /> 
              {featured ? 'Featured System · Municipal Infrastructure' : 'Sector Respawn · Utility Platform'}
            </p>
          </div>
        </div>

        <p className={`text-slate-400/90 leading-relaxed mb-8 ${featured ? 'text-base md:text-lg' : 'text-sm'}`}>
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2.5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className={`px-3 py-1.5 text-[11px] font-mono rounded-lg border transition-all duration-300 ${colorMap[tag.color] || colorMap.cyan}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
