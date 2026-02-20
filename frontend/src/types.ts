export type EducationItem = {
  institution: string;
  degree: string;
  location: string;
  dates: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  dates: string;
  highlights: string[];
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string[];
  about?: string[];
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: Record<string, string[]>;
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  categories: string[];
};
