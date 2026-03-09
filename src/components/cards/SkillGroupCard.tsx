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
      className="group p-6 rounded-2xl glass-card border border-slate-800 hover:border-cyan-400/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.06)] transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-400/10 transition-colors">
          {group.icon}
        </div>
        <h4 className="text-slate-200 font-semibold text-sm uppercase tracking-wider">
          {group.category}
        </h4>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {group.items.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 text-slate-300 text-xs font-mono rounded-md border border-slate-700/50 hover:bg-cyan-400/10 hover:text-cyan-300 hover:border-cyan-400/30 transition-all duration-200 group/skill"
          >
            <span className="text-slate-400 group-hover/skill:text-cyan-400 transition-colors">
              {skill.icon}
            </span>
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
