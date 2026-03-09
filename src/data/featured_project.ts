import React from 'react';
import { Globe } from 'lucide-react';
import { Project } from '../types';

// Featured IGIS project to be used as Hero Card
export const igisHeroProject: Project = {
  name: "Integrated Government Information System (IGIS)",
  status: "Mission Critical",
  description: "A large-scale digital transformation hub for the Municipality of Santa Rosa. Centralizing 15+ departments into a unified ecosystem including HRIS, Payroll, Citizen Portals, and Financial Management. Impacting 100,000+ citizens with streamlined digital governance.",
  tags: [
    { name: "Laravel", color: "cyan" },
    { name: "React + TypeScript", color: "cyan" },
    { name: "PostgreSQL", color: "cyan" },
    { name: "Docker", color: "emerald" },
    { name: "REST API", color: "emerald" },
  ],
  icon: React.createElement(Globe, { size: 32 })
};
