export interface Profile {
  name: string;
  headline: string;
  bio: string;
  email: string;
  phone?: string;
  languages?: string[];
  degree?: string;
  portfolioUrl?: string;
  linkedin: string;
  github: string;
  location: string;
  targetLocations: string;
  status: string;
  avatarUrl: string;
  bannerUrl: string;
  connections: string;
  followers: string;
  postImpressions: string;
  metrics: {
    label: string;
    value: string;
    subtext?: string;
  }[];
}

export interface SkillItem {
  name: string;
  level: number;
  tag: string;
  highlight?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  items: SkillItem[];
}

export interface Project {
  id: number;
  projectNumber: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  toolsUsed: string[];
  dataSources: string[];
  daxFunctions?: string[];
  demoUrl?: string;
  githubUrl?: string;
  linkedinPostUrl?: string;
  sectionBadge?: string;
  metrics: string;
  gradient: string;
  highlights: string[];
  businessImpact: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  image: string;
  skills: string[];
  description: string;
  badge?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  logoUrl?: string;
  period: string;
  location: string;
  description: string;
  coursework: string[];
}
