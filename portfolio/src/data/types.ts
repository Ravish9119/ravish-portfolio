export interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  skills: string[];
  highlightTool: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  businessChallenge: string;
  analyticalSolution: string;
  measurableOutcome: string;
  metrics: ProjectMetric[];
  tools: string[];
  repoUrl: string;
  featured?: boolean;
}

export interface WorkflowStage {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
  gradeLabel: string;
  subjects: string[];
  badge?: string;
}

export interface StrengthItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}
