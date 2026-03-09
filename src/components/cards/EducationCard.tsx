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
      className={`p-6 rounded-2xl glass-card border border-slate-800 transition-all duration-300 group hover:border-white/20`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg bg-white/5 text-slate-300 group-hover:bg-white/10 transition-colors`}>
          <Icon size={18} />
        </div>
        <span className="text-sm font-mono text-slate-500">{period}</span>
      </div>
      <h4 className="text-lg font-bold text-slate-200 mb-1">{title}</h4>
      <p className="text-slate-400 text-sm">{institution}</p>
    </motion.div>
  );
}
