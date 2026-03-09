import { useState, useEffect, useRef } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { ScrollProgress } from './components/ScrollProgress';
import { NavDots } from './components/NavDots';
import { CustomCursor } from './components/CustomCursor';
import { HeroSection } from './components/sections/HeroSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { EducationSection } from './components/sections/EducationSection';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Initialize Lenis Smooth Scroll
  useSmoothScroll();

  useEffect(() => {
    // Intersection Observer for Active Section
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sections = document.querySelectorAll('[data-section]');
          const index = Array.from(sections).indexOf(entry.target);
          if (index !== -1) setActiveSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('[data-section]');
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
      className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 bg-grid cursor-none"
    >
      <CustomCursor />
      <ScrollProgress />
      <NavDots activeSection={activeSection} />

      {/* Background ambient glow */}
      <div className="fixed inset-0 z-0 flex justify-center items-start overflow-hidden pointer-events-none">
        <div className="w-[800px] h-[600px] bg-cyan-900/8 rounded-full blur-[150px] -top-48 absolute"></div>
        <div className="w-[500px] h-[500px] bg-emerald-900/8 rounded-full blur-[120px] top-[60%] absolute right-[-150px]"></div>
        <div className="w-[400px] h-[400px] bg-violet-900/5 rounded-full blur-[100px] bottom-[-100px] left-[-100px] absolute"></div>
      </div>

      <div className="max-w-5xl w-full mx-auto px-6 relative z-10">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </div>
    </div>
  );
}
