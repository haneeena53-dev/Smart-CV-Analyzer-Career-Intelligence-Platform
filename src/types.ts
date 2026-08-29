export type Language = 'ar' | 'en';

export type TabType =
  | 'dashboard'
  | 'upload'
  | 'job_match'
  | 'simulator'
  | 'improver'
  | 'roadmap'
  | 'readiness'
  | 'interview'
  | 'chat';

export interface CVData {
  id: string;
  versionName: string;
  createdAt: string;
  rawText: string;
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    title: string;
    location: string;
    summary: string;
    linkedin?: string;
    github?: string;
  };
  skills: {
    technical: string[];
    frameworks: string[];
    tools: string[];
    softSkills: string[];
  };
  experience: {
    id: string;
    role: string;
    company: string;
    period: string;
    bullets: string[];
    improvedBullets?: string[];
  }[];
  education: {
    id: string;
    degree: string;
    major: string;
    institution: string;
    year: string;
    grade?: string;
  }[];
  projects: {
    id: string;
    name: string;
    techStack: string[];
    description: string;
    improvedDescription?: string;
    critique?: {
      missing: string[];
      roleClarity: string;
      metricsScore: number;
    };
  }[];
  certifications: string[];
  languages: string[];
  achievements: string[];
}

export interface ScoreBreakdown {
  overall: number; // 0-100
  atsScore: number;
  contentQuality: number;
  skillsScore: number;
  experienceScore: number;
  formattingScore: number;
  projectsScore: number;
  summaryFeedback: string;
  positives: string[];
  negatives: string[];
  atsDetails?: {
    keywordDensity: string;
    sectionCompleteness: number;
    fileFormatCheck: string;
    actionVerbCount: number;
  };
}

export interface JobMatchAnalysis {
  jobTitle: string;
  jobCompany?: string;
  overallMatch: number; // 0-100
  skillsMatch: number;
  experienceMatch: number;
  educationMatch: number;
  keywordsMatch: number;
  summary: string;
  matchedSkills: string[];
  missingSkills: {
    name: string;
    priority: 'high' | 'medium' | 'low';
    reason: string;
    recommendedAction: string;
  }[];
  jobRequirementsList: string[];
  recommendations: {
    action: string;
    detail: string;
    urgency: 'high' | 'medium' | 'low';
  }[];
}

export interface CareerReadiness {
  readinessScore: number;
  technicalSkillsScore: number;
  cvQualityScore: number;
  experienceScore: number;
  projectsScore: number;
  certificationsScore: number;
  strongestArea: string;
  weakestArea: string;
  recommendedJobs: {
    title: string;
    matchPercentage: number;
    reason: string;
  }[];
}

export interface RoadmapStep {
  id: string;
  skill: string;
  status: 'completed' | 'current' | 'upcoming';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  estimatedHours: number;
  suggestedProject: string;
  resources: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface SampleProfile {
  name: string;
  title: string;
  cv: Partial<CVData>;
  targetJob: {
    title: string;
    description: string;
  };
}
