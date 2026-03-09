import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
  accent?: 'cyan' | 'emerald';
}

export function SectionTitle({ icon: Icon, title, accent = 'cyan' }: SectionTitleProps) {
  const accentColors = {
    cyan: { bg: 'bg-cyan-400/10', border: 'border-cyan-400/20', text: 'text-cyan-400' },
    emerald: { bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', text: 'text-emerald-400' }
  };
  
  const colors = accentColors[accent];
  
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex items-center gap-3 mb-10 overflow-hidden"
    >
      <motion.div 
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
        }}
        className={`p-2 rounded-lg ${colors.bg} border ${colors.border}`}
      >
        <Icon className={colors.text} size={20} />
      </motion.div>
      
      <motion.h3 
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.1 } }
        }}
        className="text-2xl font-bold text-slate-100"
      >
        {title}
      </motion.h3>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="h-px bg-gradient-to-r from-slate-800 to-transparent flex-1 ml-4 hidden sm:block origin-left"
      />
    </motion.div>
  );
}
