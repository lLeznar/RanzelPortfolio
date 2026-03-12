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
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group p-6 rounded-2xl glass-card border border-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors">
          {group.icon}
        </div>
        <h4 className="text-slate-200 font-semibold text-sm uppercase tracking-wider">
          {group.category}
        </h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-full hover:bg-slate-700 hover:text-slate-100 transition-all duration-200"
          >
            <span className="text-slate-500">
              {skill.icon}
            </span>
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
