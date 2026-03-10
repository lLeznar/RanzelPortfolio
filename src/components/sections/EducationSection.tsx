import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { staggerContainer } from '../../constants/animations';
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
      className="min-h-screen flex flex-col justify-center snap-start snap-always pt-16 md:py-0"
    >
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
    </motion.section>
  );
}
