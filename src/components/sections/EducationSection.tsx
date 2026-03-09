import { motion } from 'framer-motion';
import { GraduationCap, Mail, Github, Linkedin } from 'lucide-react';
import { staggerContainer, fadeIn } from '../../constants/animations';
import { EducationCard } from '../cards/EducationCard';
import { SectionTitle } from '../animations/SectionTitle';

export function EducationSection() {
  return (
    <motion.section
      data-section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="min-h-screen flex flex-col justify-center snap-start pt-20 md:py-0"
    >
      <div className="flex-1 flex flex-col justify-center">
        <SectionTitle icon={GraduationCap} title="Education & Certifications" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <EducationCard 
            period="2018 – 2022"
            title="BS in Information Technology"
            institution="College for Research and Technology"
            type="degree"
          />
          <EducationCard 
            period="2016 – 2018"
            title="ICT Vocational"
            institution="College for Research and Technology"
            type="degree"
          />
          <EducationCard 
            period="2021 | TESDA"
            title="NC III – Events Management"
            institution="National Certificate III"
            type="cert"
          />
          <EducationCard 
            period="2021 | TESDA"
            title="NC II – Computer System Services"
            institution="National Certificate II"
            type="cert"
          />
        </div>
      </div>

      <motion.footer
        variants={fadeIn}
        className="pb-8 pt-12 border-t border-slate-800/50 text-center flex flex-col items-center gap-3 mt-auto"
      >
        <div className="flex items-center gap-4 mb-2">
          <a href="mailto:ranzelmerto.rm@gmail.com" className="text-slate-500 hover:text-cyan-400 transition-colors"><Mail size={16} /></a>
          <a href="https://github.com/lLeznar" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors"><Github size={16} /></a>
          <a href="https://www.linkedin.com/in/ranzel-aris-merto-b51aa6296/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors"><Linkedin size={16} /></a>
        </div>
        <p className="text-sm font-mono text-slate-600">
          © {new Date().getFullYear()} <span className="text-slate-500">Ranzel Aris Merto</span>
        </p>
      </motion.footer>
    </motion.section>
  );
}
