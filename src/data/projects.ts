export interface SkillCategory {
  [key: string]: string[];
}

export const skillsData: SkillCategory = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'],
  'Tools & DevOps': ['Git', 'GitHub', 'Docker', 'Webpack', 'Vite', 'REST APIs', 'Firebase', 'AWS'],
  'Programming Languages': ['Python', 'Java', 'C'],
  Design: ['Figma'],
};

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue.js',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'GraphQL',
  'Git',
  'GitHub',
  'Docker',
  'Webpack',
  'Vite',
  'REST APIs',
  'Firebase',
  'AWS',
  'Python',
  'Java',
  'C',
  'Figma',
];

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/NithishSagar/ecommerce',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team features.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/NithishSagar/taskapp',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Weather application fetching real-time data with beautiful visualizations and forecasts.',
    technologies: ['JavaScript', 'React', 'OpenWeather API', 'Chart.js'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/NithishSagar/weather',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics with advanced data visualization.',
    technologies: ['React', 'TypeScript', 'D3.js', 'PostgreSQL'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/NithishSagar/analytics',
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'Markdown-based blogging platform with user authentication and commenting system.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/NithishSagar/blog',
  },
  {
    id: 6,
    title: 'Mobile App Companion',
    description: 'React Native mobile app with offline support and cloud synchronization.',
    technologies: ['React Native', 'Firebase', 'Expo'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/NithishSagar/mobile',
  },
];
