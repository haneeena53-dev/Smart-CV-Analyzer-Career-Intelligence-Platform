import { CVData, ScoreBreakdown, JobMatchAnalysis } from '../types';

export interface PresetJob {
  id: string;
  title: string;
  company: string;
  category: string;
  description: string;
  requirements: string[];
}

export const PRESET_JOBS: PresetJob[] = [
  {
    id: 'frontend_dev',
    title: 'Frontend Developer',
    company: 'Tech Innovators Corp / Google Partner',
    category: 'Frontend',
    description: `We are looking for an ambitious Frontend Developer to join our product engineering team. You will build highly responsive, accessible, and fast web applications used by thousands of users daily.
    
Key Responsibilities:
- Build reusable UI components with React, TypeScript, and modern styling libraries.
- Integrate REST APIs and GraphQL endpoints for real-time interactive experiences.
- Write unit and integration tests using Jest and React Testing Library.
- Collaborate closely with UI/UX designers, backend engineers, and product managers in an Agile sprint cycle.
- Optimize frontend web performance, SEO, and Core Web Vitals.`,
    requirements: [
      'HTML5 & Semantic Markup',
      'Modern CSS3 / Tailwind CSS / Responsive Design',
      'JavaScript (ES6+)',
      'React.js',
      'TypeScript',
      'Git & Version Control',
      'REST APIs & Asynchronous State',
      'Testing (Jest / RTL)',
      'Agile / Scrum',
      'CI/CD & Web Performance',
    ],
  },
  {
    id: 'react_dev',
    title: 'React & Next.js Developer',
    company: 'Fintech Velocity Global',
    category: 'Frontend / Fullstack',
    description: `Seeking a skilled React & Next.js specialist to lead frontend architecture for our high-frequency payment dashboard. You must possess deep TypeScript knowledge and experience with state management, caching, and server-side rendering.`,
    requirements: [
      'React 18/19',
      'Next.js (App Router, Server Actions)',
      'TypeScript',
      'Tailwind CSS',
      'Zustand / Redux Toolkit',
      'REST APIs & WebSockets',
      'Jest & Cypress',
      'Docker & Cloud Deployment',
    ],
  },
  {
    id: 'fullstack_dev',
    title: 'Full Stack Developer (React & Node.js)',
    company: 'Apex Cloud Solutions',
    category: 'Full Stack',
    description: `We need a versatile Full Stack Developer capable of delivering end-to-end features from database design and Express/Node.js microservices to modern React/Tailwind frontends.`,
    requirements: [
      'React',
      'Node.js & Express',
      'TypeScript',
      'PostgreSQL or MongoDB',
      'RESTful APIs & GraphQL',
      'Docker',
      'Git & GitHub Actions',
      'Unit & E2E Testing',
    ],
  },
  {
    id: 'ui_dev',
    title: 'UI Engineer & Design Systems Specialist',
    company: 'Creative Studio Labs',
    category: 'Design Engineering',
    description: `Looking for a UI Engineer with a sharp eye for visual polish, micro-interactions, accessibility (WCAG AA), and component design systems using Figma, React, and Tailwind CSS.`,
    requirements: [
      'Figma to Code',
      'React & Tailwind CSS',
      'Motion Animations',
      'Design Systems & Storybook',
      'Accessibility (a11y)',
      'CSS Grid & Flexbox',
      'JavaScript & TypeScript',
    ],
  },
];

export const SAMPLE_CV_HANEEN: CVData = {
  id: 'cv_haneen_1',
  versionName: 'Haneen_Ahmed_Frontend_CV_v1',
  createdAt: new Date().toLocaleDateString(),
  rawText: `Haneen Ahmed
Cairo, Egypt | haneen.dev@example.com | +20 100 123 4567 | linkedin.com/in/haneen-ahmed | github.com/haneen-dev

SUMMARY:
Motivated and detail-oriented Frontend Developer with strong foundational knowledge in building responsive web applications using React, HTML5, CSS3, and JavaScript (ES6+). Passionate about crafting intuitive UI experiences and continuous learning.

SKILLS:
- Core Languages: HTML5, CSS3, JavaScript (ES6+), Modern CSS (Flexbox, Grid)
- Frameworks & Libraries: React.js, Tailwind CSS, Bootstrap, Material UI basics
- Developer Tools: Git, GitHub, VS Code, Figma basics, npm/yarn
- Soft Skills: Team Collaboration, Problem Solving, Agile Communication, Continuous Learning

EXPERIENCE:
Frontend Developer Intern | DevSpark Solutions (Jul 2024 - Oct 2024)
- Built interactive and mobile-responsive landing pages using React and Tailwind CSS.
- Collaborated with senior engineers to implement UI components and fix cross-browser rendering bugs.
- Integrated REST APIs for dynamic user dashboard data visualization.

Junior Web Developer (Freelance / Projects) (Jan 2024 - Jun 2024)
- Created 4+ responsive client web templates and portfolio sites with optimized loading speeds.
- Implemented state management using React hooks (useState, useEffect, useReducer).

PROJECTS:
1. E-Commerce Product Explorer (React, Tailwind CSS, FakeStore API)
- Developed a fast e-commerce catalog featuring live product search, category filtering, and shopping cart persistence with LocalStorage.

2. University Event Booking Portal (React, JavaScript, CSS Modules)
- Built a multi-step event ticket reservation interface with interactive seat selection and form validation.

EDUCATION:
B.Sc. in Computer Science (2020 - 2024)
Cairo University, Faculty of Computers and Artificial Intelligence
- Cumulative GPA: 3.6 / 4.0 (Very Good with Honors)

CERTIFICATIONS:
- Meta Frontend Developer Professional Certificate (Coursera)
- Advanced React & Modern JavaScript (Udemy)

LANGUAGES:
- Arabic (Native)
- English (Professional Working Proficiency)`,
  personalInfo: {
    name: 'Haneen Ahmed',
    email: 'haneen.dev@example.com',
    phone: '+20 100 123 4567',
    title: 'Frontend Developer',
    location: 'Cairo, Egypt',
    summary: 'Motivated and detail-oriented Frontend Developer with strong foundational knowledge in building responsive web applications using React, HTML5, CSS3, and JavaScript (ES6+). Passionate about crafting intuitive UI experiences and continuous learning.',
    linkedin: 'linkedin.com/in/haneen-ahmed',
    github: 'github.com/haneen-dev',
  },
  skills: {
    technical: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Git', 'Responsive Design'],
    frameworks: ['React.js', 'Tailwind CSS', 'Bootstrap'],
    tools: ['GitHub', 'VS Code', 'Figma', 'npm'],
    softSkills: ['Team Collaboration', 'Problem Solving', 'Agile Mindset', 'Continuous Learning'],
  },
  experience: [
    {
      id: 'exp_1',
      role: 'Frontend Developer Intern',
      company: 'DevSpark Solutions',
      period: 'Jul 2024 - Oct 2024',
      bullets: [
        'Built interactive and mobile-responsive landing pages using React and Tailwind CSS.',
        'Collaborated with senior engineers to implement UI components and fix cross-browser rendering bugs.',
        'Integrated REST APIs for dynamic user dashboard data visualization.',
      ],
      improvedBullets: [
        'Architected and deployed 6+ responsive web applications using React and Tailwind CSS, increasing mobile user engagement by 32%.',
        'Engineered reusable UI component library reducing frontend delivery cycles by 25% across sprint deadlines.',
        'Consumed REST APIs with asynchronous state handling and error boundaries, supporting 5,000+ daily page interactions.',
      ],
    },
  ],
  education: [
    {
      id: 'edu_1',
      degree: 'B.Sc. in Computer Science',
      major: 'Computer Science',
      institution: 'Cairo University, Faculty of Computers & AI',
      year: '2024',
      grade: '3.6 / 4.0 (Very Good with Honors)',
    },
  ],
  projects: [
    {
      id: 'proj_1',
      name: 'E-Commerce Product Explorer',
      techStack: ['React.js', 'Tailwind CSS', 'REST API', 'LocalStorage'],
      description: 'Developed a fast e-commerce catalog featuring live product search, category filtering, and shopping cart persistence with LocalStorage.',
      improvedDescription: 'Engineered a high-performance e-commerce single-page application with debounced real-time search, multi-criteria filtering, and client-side persistence, achieving 98+ Google Lighthouse performance score.',
      critique: {
        missing: ['TypeScript', 'Unit tests with Jest', 'Global state management (Zustand)'],
        roleClarity: 'Sole Frontend Engineer',
        metricsScore: 82,
      },
    },
    {
      id: 'proj_2',
      name: 'University Event Booking Portal',
      techStack: ['React.js', 'JavaScript', 'CSS Modules'],
      description: 'Built a multi-step event ticket reservation interface with interactive seat selection and form validation.',
      improvedDescription: 'Designed and deployed an interactive ticket reservation portal featuring multi-step form validation and interactive seat map mapping, used by 1,200+ university attendees.',
      critique: {
        missing: ['TypeScript', 'Automated testing', 'Backend webhook integration'],
        roleClarity: 'Lead Frontend Developer',
        metricsScore: 78,
      },
    },
  ],
  certifications: [
    'Meta Frontend Developer Specialization (Coursera)',
    'Advanced React & Modern JavaScript Certification',
  ],
  languages: ['العربية (اللغة الأم)', 'English (Professional / Fluent)'],
  achievements: [
    'Top 5% in University Graduation Project Hackathon 2024',
    'Solved 150+ Data Structures & Algorithms challenges on LeetCode',
  ],
};

export const SAMPLE_SCORE_HANEEN: ScoreBreakdown = {
  overall: 84,
  atsScore: 91,
  contentQuality: 84,
  skillsScore: 88,
  experienceScore: 76,
  formattingScore: 88,
  projectsScore: 90,
  positives: [
    'Strong foundational frontend stack: React, JavaScript, HTML5, Tailwind CSS',
    'B.Sc. in Computer Science from Cairo University with high honors (3.6 GPA)',
    'Practical real-world internship experience at DevSpark Solutions',
    'Clean, scan-friendly ATS format with standard section headers',
  ],
  negatives: [
    'Missing TypeScript: Required by 85%+ of modern Frontend Developer job postings',
    'Lack of automated testing tools (Jest / React Testing Library)',
    'Quantifiable metrics in work experience could be stronger (needs % & user metrics)',
  ],
  summaryFeedback:
    'Your CV demonstrates solid frontend development fundamentals with clean formatting and strong React experience. Adding TypeScript, testing frameworks, and metric-driven achievements will position you in the top 5% of applicants.',
  atsDetails: {
    keywordDensity: 'Strong (82%)',
    sectionCompleteness: 95,
    fileFormatCheck: 'ATS Compliant (Text & PDF Parseable)',
    actionVerbCount: 14,
  },
};

export const SAMPLE_MATCH_HANEEN: JobMatchAnalysis = {
  jobTitle: 'Frontend Developer',
  jobCompany: 'Tech Innovators Corp / Google Partner',
  overallMatch: 74,
  skillsMatch: 78,
  experienceMatch: 71,
  educationMatch: 95,
  keywordsMatch: 69,
  summary:
    'You match 74% of the requirements for Frontend Developer. Your React, JavaScript, and CSS knowledge provides a solid core, but acquiring TypeScript and unit testing is essential to maximize your interview conversion rate.',
  matchedSkills: [
    'HTML5 & Semantic Markup',
    'Modern CSS3 / Tailwind CSS / Responsive Design',
    'JavaScript (ES6+)',
    'React.js',
    'Git & Version Control',
    'REST APIs',
    'Problem Solving',
  ],
  missingSkills: [
    {
      name: 'TypeScript',
      priority: 'high',
      reason: 'Strictly required in the job description for building type-safe enterprise UI components.',
      recommendedAction: 'Learn TypeScript generics, component props typing, and build a project using React + TypeScript.',
    },
    {
      name: 'Automated Testing (Jest / RTL)',
      priority: 'medium',
      reason: 'The engineering team requires unit and integration test coverage before merging code.',
      recommendedAction: 'Write unit tests for your e-commerce project using React Testing Library and Jest.',
    },
    {
      name: 'Agile & CI/CD Practices',
      priority: 'low',
      reason: 'Preferred for cross-functional sprint workflows and automated deployment pipelines.',
      recommendedAction: 'Highlight GitHub Actions automated build workflow in your projects section.',
    },
  ],
  jobRequirementsList: [
    'HTML5 & CSS3',
    'JavaScript (ES6+)',
    'React.js',
    'TypeScript',
    'Git',
    'REST APIs',
    'Jest / RTL',
    'Agile / Scrum',
  ],
  recommendations: [
    {
      action: 'Add TypeScript to your projects',
      detail: 'Convert the E-Commerce Explorer project to TypeScript (.tsx) with strict type checking.',
      urgency: 'high',
    },
    {
      action: 'Quantify your internship achievements',
      detail: 'Rewrite bullets using the formula: Action Verb + Metric + Technology.',
      urgency: 'high',
    },
    {
      action: 'Include React Testing Library',
      detail: 'Add test coverage stats in your project portfolio description.',
      urgency: 'medium',
    },
  ],
};

export const SAMPLE_CV_OMAR: CVData = {
  id: 'cv_omar_1',
  versionName: 'Omar_Khaled_FullStack_v1',
  createdAt: new Date().toLocaleDateString(),
  rawText: `Omar Khaled
Alexandria, Egypt | omar.k@example.com | +20 111 987 6543 | github.com/omarkhaled

SUMMARY:
Junior Full Stack Developer with 1.5 years of practical project experience building web applications with Node.js, Express, MongoDB, and React. Eager to solve real-world problems through scalable software architectures.

TECHNICAL SKILLS:
- Frontend: JavaScript, React, Tailwind CSS, HTML5/CSS3
- Backend: Node.js, Express.js, RESTful APIs, JWT Authentication
- Database: MongoDB, Mongoose, PostgreSQL basics
- Tools: Git, Postman, Docker basics, Linux

EXPERIENCE:
Junior Web Developer | Digital Sprint Co (2023 - Present)
- Developed REST API endpoints and CRUD operations for web portals.
- Maintained React UI dashboards and integrated authentication flows.`,
  personalInfo: {
    name: 'Omar Khaled',
    email: 'omar.k@example.com',
    phone: '+20 111 987 6543',
    title: 'Junior Full Stack Developer',
    location: 'Alexandria, Egypt',
    summary: 'Junior Full Stack Developer with 1.5 years of practical project experience building web applications with Node.js, Express, MongoDB, and React.',
    linkedin: 'linkedin.com/in/omar-khaled-dev',
    github: 'github.com/omarkhaled',
  },
  skills: {
    technical: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git'],
    frameworks: ['React', 'Tailwind CSS'],
    tools: ['Postman', 'Docker', 'VS Code', 'GitHub'],
    softSkills: ['Analytical Thinking', 'Team Collaboration', 'Problem Solving'],
  },
  experience: [
    {
      id: 'exp_omar_1',
      role: 'Junior Web Developer',
      company: 'Digital Sprint Co',
      period: '2023 - Present',
      bullets: [
        'Developed REST API endpoints and CRUD operations for web portals.',
        'Maintained React UI dashboards and integrated authentication flows.',
      ],
      improvedBullets: [
        'Engineered 20+ secure RESTful API endpoints with Express and MongoDB, supporting 10,000+ daily requests with JWT authentication.',
        'Refactored legacy React UI components to modern functional hooks, reducing rendering latency by 28%.',
      ],
    },
  ],
  education: [
    {
      id: 'edu_omar_1',
      degree: 'B.Sc. in Information Systems',
      major: 'Information Systems',
      institution: 'Alexandria University',
      year: '2023',
    },
  ],
  projects: [
    {
      id: 'proj_omar_1',
      name: 'Task Manager API & Dashboard',
      techStack: ['Node.js', 'Express', 'React', 'MongoDB'],
      description: 'A full-stack task collaboration app with team workspaces and role permissions.',
      improvedDescription: 'Designed and deployed a full-stack project tracking application with JWT authorization, role-based access control, and automated email notifications, serving 50+ active team members.',
      critique: {
        missing: ['Redis caching', 'TypeScript migration', 'Integration tests'],
        roleClarity: 'Full Stack Developer',
        metricsScore: 84,
      },
    },
  ],
  certifications: ['Full Stack Open (University of Helsinki)', 'Node.js Certified Developer'],
  languages: ['Arabic (Native)', 'English (Good)'],
  achievements: ['Published 3 open-source npm utility packages with 500+ weekly downloads'],
};
