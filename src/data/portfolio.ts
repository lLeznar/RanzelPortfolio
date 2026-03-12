import React from 'react';
import { 
  Terminal, 
  Server, Database, Globe, Cpu, Wifi, Smartphone, Cloud, Wrench
} from 'lucide-react';
import {
  SiPhp, SiJavascript, SiTypescript,
  SiReact, SiTailwindcss, SiExpo, SiElectron,
  SiLaravel, SiNodedotjs, SiExpress,
  SiPostgresql, SiMysql, SiMongodb,
  SiUbuntu, SiDocker, SiCloudflare,
  SiGit, SiGithub, SiVite, SiPostman
} from '@icons-pack/react-simple-icons';
import { Experience, Project, SkillGroup } from '../types';

export const experiences: Experience[] = [
  {
    role: "Full-Stack Web Developer | System Administrator",
    company: "Municipality of Santa Rosa",
    location: "Santa Rosa, Nueva Ecija",
    period: "2026 – Present",
    type: "current",
    description: "Developing and maintaining the Integrated Government Information System (IGIS), digitalizing manual workflows across 15+ municipal departments. Engineered comprehensive internal platforms including HRIS/Payroll and financial modules (GSO, BFP, DILG). Built a Citizen Portal and a React Native mobile application featuring a Universal ID System.",
    tags: ["Laravel", "React", "React Native", "PostgreSQL", "Ubuntu Linux", "Docker"],
    icon: React.createElement(Globe, { size: 20 })
  },
  {
    role: "Business Owner & Network Administrator",
    company: "Sector Respawn",
    location: "Cabanatuan City, Nueva Ecija",
    period: "Apr 2024 – Present",
    type: "current",
    description: "Architected and manage a commercial diskless local area network (LAN) utilizing iCafe8, optimizing client machine performance and centralizing software updates. Handle end-to-end IT operations, including network routing, hardware troubleshooting, and ensuring zero-downtime for active commercial users.",
    tags: ["Networking", "iCafe8", "Hardware", "System Admin", "IT Operations"],
    icon: React.createElement(Wifi, { size: 20 })
  },
  {
    role: "Logistics Department Manager",
    company: "Divimart",
    location: "Nueva Ecija",
    period: "Mar 2022 – Mar 2024",
    type: "past",
    description: "Directed end-to-end logistics operations, managing inventory flow, team coordination, and supply chain efficiency. Leveraged strong problem-solving and systems-thinking skills to optimize daily department workflows and troubleshoot operational bottlenecks.",
    tags: ["Operations", "Supply Chain", "Process Optimization"],
    icon: React.createElement(Server, { size: 20 })
  },
  {
    role: "Hardware Deployment Specialist",
    company: "COMELEC",
    location: "Cabanatuan City, Nueva Ecija",
    period: "2020 – 2021",
    type: "past",
    description: "Configured and deployed automated voting machines, handling strict technical setups and hardware preparation. Ensured 100% operational readiness and compliance for critical election-use systems.",
    tags: ["Hardware Setup", "System Config", "Compliance"],
    icon: React.createElement(Terminal, { size: 20 })
  }
];

export const projects: Project[] = [
  {
    name: "Pisonet Kiosk & Network Management System",
    status: "In Development",
    description: "Actively developing a custom MERN + Electron self-service kiosk platform to automate billing, time tracking, and client-machine control for the Sector Respawn diskless network. Integrates real-time Socket.io communication and Arduino hardware interfaces.",
    tags: [
      { name: "React + Tailwind", color: "cyan" },
      { name: "Electron", color: "emerald" },
      { name: "Node.js + Socket.io", color: "cyan" },
      { name: "MongoDB", color: "cyan" },
      { name: "Arduino", color: "amber" },
    ],
    icon: React.createElement(Cpu, { size: 20 })
  }
];

export const skillsGroups: SkillGroup[] = [
  { 
    category: "Languages", icon: React.createElement(Terminal, { size: 18 }), 
    items: [
      { name: "PHP", icon: React.createElement(SiPhp, { size: 14 }) },
      { name: "JavaScript", icon: React.createElement(SiJavascript, { size: 14 }) },
      { name: "TypeScript", icon: React.createElement(SiTypescript, { size: 14 }) }
    ] 
  },
  { 
    category: "Web Frontend", icon: React.createElement(Globe, { size: 18 }), 
    items: [
      { name: "React", icon: React.createElement(SiReact, { size: 14 }) },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss, { size: 14 }) }
    ] 
  },
  { 
    category: "Cross-Platform", icon: React.createElement(Smartphone, { size: 18 }), 
    items: [
      { name: "Expo", icon: React.createElement(SiExpo, { size: 14 }) },
      { name: "Electron", icon: React.createElement(SiElectron, { size: 14 }) }
    ] 
  },
  { 
    category: "Backend", icon: React.createElement(Server, { size: 18 }), 
    items: [
      { name: "Laravel", icon: React.createElement(SiLaravel, { size: 14 }) },
      { name: "Node.js", icon: React.createElement(SiNodedotjs, { size: 14 }) },
      { name: "Express", icon: React.createElement(SiExpress, { size: 14 }) }
    ] 
  },
  { 
    category: "Databases", icon: React.createElement(Database, { size: 18 }), 
    items: [
      { name: "MySQL", icon: React.createElement(SiMysql, { size: 14 }) },
      { name: "PostgreSQL", icon: React.createElement(SiPostgresql, { size: 14 }) },
      { name: "MongoDB", icon: React.createElement(SiMongodb, { size: 14 }) }
    ] 
  },
  { 
    category: "DevOps & Infrastructure", icon: React.createElement(Cloud, { size: 18 }), 
    items: [
      { name: "Ubuntu", icon: React.createElement(SiUbuntu, { size: 14 }) },
      { name: "Coolify", icon: React.createElement(Server, { size: 14 }) },
      { name: "Docker", icon: React.createElement(SiDocker, { size: 14 }) },
      { name: "Cloudflare", icon: React.createElement(SiCloudflare, { size: 14 }) }
    ] 
  },
  { 
    category: "Tools & Build", icon: React.createElement(Wrench, { size: 18 }), 
    items: [
      { name: "Git", icon: React.createElement(SiGit, { size: 14 }) },
      { name: "GitHub", icon: React.createElement(SiGithub, { size: 14 }) },
      { name: "Vite", icon: React.createElement(SiVite, { size: 14 }) },
      { name: "Postman", icon: React.createElement(SiPostman, { size: 14 }) }
    ] 
  },
];

export const personalDetails = [
  { value: "Pisonet Kiosk & IGIS", label: "Current Project", icon: "briefcase" },
  { value: "4+ Years", label: "Experience", icon: "award" },
  { value: "Enterprise-Grade", label: "DevOps Standards", icon: "shield" },
  { value: "20+ Techs", label: "Tech Stack", icon: "terminal" },
];

export const sectionNames = ["Home", "Experience", "Projects", "Skills", "Education", "Contact"];
