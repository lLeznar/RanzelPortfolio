import { motion } from 'framer-motion';
import { SkillGroup } from '../../types';
import { fadeIn } from '../../constants/animations';

interface SkillGroupCardProps {
  group: SkillGroup;
}

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="group p-6 rounded-2xl glass-card border border-white/5 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-1.5 rounded-lg bg-white/5 text-slate-300 group-hover:bg-white/10 transition-colors">
          {group.icon}
        </div>
        <div>
          <h4 className="text-slate-200 font-semibold text-sm uppercase tracking-wider">
            {group.category}
          </h4>
          {group.description && (
            <p className="text-xs text-slate-500 mt-1 font-mono">
              {group.description}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {group.items.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.03] text-slate-400 text-[10px] uppercase font-bold rounded-md border border-white/5 hover:bg-white/10 hover:text-slate-200 transition-all duration-200 group/skill"
          >
            <span className="text-slate-500 group-hover/skill:text-slate-300 transition-colors">
              {skill.icon}
            </span>
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
