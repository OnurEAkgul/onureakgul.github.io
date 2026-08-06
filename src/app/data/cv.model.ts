export type Lang = 'en' | 'tr';

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceRole {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface ProjectItem {
  name: string;
  tech: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  detail?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  description: string;
}

export interface CvData {
  name: string;
  headline: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  summary: string[];
  skills: SkillGroup[];
  experience: ExperienceRole[];
  projects: ProjectItem[];
  education: EducationItem[];
  languages: string[];
  social: SocialLink[];
  cvFile: string;
}

export interface UiCopy {
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    projects: string;
    links: string;
    contact: string;
  };
  home: {
    welcome: string;
    ctaProjects: string;
    ctaContact: string;
    ctaCv: string;
  };
  about: {
    title: string;
    summaryTitle: string;
    educationTitle: string;
    languagesTitle: string;
  };
  experience: {
    title: string;
    subtitle: string;
    educationTitle: string;
    educationLead: string;
    highlightsTitle: string;
    highlights: string[];
  };
  skills: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    techLabel: string;
  };
  links: {
    title: string;
    subtitle: string;
    cvTitle: string;
    cvDesc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    clear: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    missingFields: string;
  };
  footer: string;
  meta: {
    siteName: string;
    defaultDescription: string;
  };
}
