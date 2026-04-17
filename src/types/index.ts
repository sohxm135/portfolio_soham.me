export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  demo?: string;
  docs?: string;
  featured: boolean;
  status?: 'active' | 'completed' | 'archived';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tech?: string[];
  badge?: 'incoming' | 'current';
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
