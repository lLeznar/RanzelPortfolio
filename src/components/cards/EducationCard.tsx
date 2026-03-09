import { motion } from 'framer-motion';
import { GraduationCap, Download } from 'lucide-react';
import { fadeIn } from '../../constants/animations';

interface EducationCardProps {
  period: string;
  title: string;
  institution: string;
  type?: 'degree' | 'cert';
}

export function EducationCard({ period, title, institution, type = 'degree' }: EducationCardProps) {
  const isCert = type === 'cert';
  const Icon = isCert ? Download : GraduationCap;
  
  return (
    <motion.div 
      variants={fadeIn} 
      whileHover={{ scale: 1.02 }} 
      className={`p-6 rounded-2xl glass-card border border-slate-800 transition-all duration-300 group ${
        isCert ? 'hover:border-emerald-400/20' : 'hover:border-cyan-400/20'
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg bg-slate-800 group-hover:bg-opacity-10 transition-colors ${
          isCert ? 'text-emerald-400 group-hover:bg-emerald-400' : 'text-cyan-400 group-hover:bg-cyan-400'
        }`}>
          <Icon size={18} />
        </div>
        <span className="text-sm font-mono text-slate-500">{period}</span>
      </div>
      <h4 className="text-lg font-bold text-slate-200 mb-1">{title}</h4>
      <p className="text-slate-400 text-sm">{institution}</p>
    </motion.div>
  );
}
