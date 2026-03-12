import { useState, useEffect, useRef } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { NavDots } from './components/NavDots';
import { CustomCursor } from './components/CustomCursor';
import { HeroSection } from './components/sections/HeroSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { EducationSection } from './components/sections/EducationSection';
import { ContactSection } from './components/sections/ContactSection';
import { GlitchBackground } from './components/animations/GlitchBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Intersection Observer scoped to the snap container
    const observerOptions = {
      root: container,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sections = container.querySelectorAll('[data-section]');
          const index = Array.from(sections).indexOf(entry.target);
          if (index !== -1) setActiveSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = container.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Force cursor hide on the root element
    document.documentElement.style.cursor = 'none';
    
    // Fallback for cases where some elements might override it
    const style = document.createElement('style');
    style.innerHTML = '* { cursor: none !important; }';
    document.head.appendChild(style);
    
    return () => {
      document.documentElement.style.cursor = 'auto';
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="h-[100dvh] overflow-y-auto w-screen snap-y snap-mandatory bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 cursor-none"
    >
      <CustomCursor />
      <ScrollProgress />
      <NavDots activeSection={activeSection} />

      <GlitchBackground activeSection={activeSection} />

      <div className="max-w-5xl w-full mx-auto px-6 relative z-10">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
}
