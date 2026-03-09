import React from 'react';

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'current' | 'past';
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

export interface ProjectTag {
  name: string;
  color: 'cyan' | 'emerald' | 'amber';
}

export interface Project {
  name: string;
  status: string;
  description: string;
  tags: ProjectTag[];
  icon: React.ReactNode;
}

export interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

export interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  items: SkillItem[];
}

export interface Stat {
  value: string;
  label: string;
}
