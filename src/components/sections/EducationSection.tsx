import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { staggerContainer } from '../../constants/animations';
import { EducationCard } from '../cards/EducationCard';
import { SectionTitle } from '../animations/SectionTitle';

import { educationDistinctions } from '../../data/portfolio';

export function EducationSection() {
  return (
    <motion.section
      data-section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="min-h-screen flex flex-col justify-center snap-start snap-always pt-16 md:py-0"
    >
      <SectionTitle icon={GraduationCap} title="Education & Certifications" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {educationDistinctions.map((edu, idx) => (
          <EducationCard 
            key={idx}
            period={edu.period}
            title={edu.degree}
            institution={edu.institution}
            type={edu.type as 'degree' | 'cert'}
            achievements={edu.achievements}
          />
        ))}
      </div>
    </motion.section>
  );
}
