import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { staggerContainer } from '../../constants/animations';
import { projects } from '../../data/portfolio';
import { igisHeroProject } from '../../data/featured_project';
import { ProjectCard } from '../cards/ProjectCard';
import { SectionTitle } from '../animations/SectionTitle';

export function ProjectsSection() {
  return (
    <motion.section
      data-section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="min-h-screen flex flex-col justify-center snap-start snap-always py-16 md:py-0"
    >
      <SectionTitle icon={Rocket} title="Projects" accent="emerald" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-min">
        {/* Hero Card */}
        <ProjectCard project={igisHeroProject} featured />

        {/* Subsequent Projects */}
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
