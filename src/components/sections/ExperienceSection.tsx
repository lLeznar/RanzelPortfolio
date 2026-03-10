import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { staggerContainer } from '../../constants/animations';
import { experiences } from '../../data/portfolio';
import { ExperienceCard } from '../cards/ExperienceCard';
import { SectionTitle } from '../animations/SectionTitle';

export function ExperienceSection() {
  return (
    <motion.section
      data-section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="min-h-screen flex flex-col justify-center snap-start snap-always py-16 md:py-0"
    >
      <SectionTitle icon={Briefcase} title="Experience" />

      <div className="space-y-3 md:space-y-5">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} />
        ))}
      </div>
    </motion.section>
  );
}
