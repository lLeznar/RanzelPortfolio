import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { staggerContainer } from '../../constants/animations';
import { skillsGroups } from '../../data/portfolio';
import { SkillGroupCard } from '../cards/SkillGroupCard';
import { SectionTitle } from '../animations/SectionTitle';

export function SkillsSection() {
  return (
    <motion.section
      data-section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="min-h-screen flex flex-col justify-center snap-start py-20 md:py-0"
    >
      <SectionTitle icon={Code2} title="Technical Expertise" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillsGroups.map((group, idx) => (
          <SkillGroupCard key={idx} group={group} />
        ))}
      </div>
    </motion.section>
  );
}
