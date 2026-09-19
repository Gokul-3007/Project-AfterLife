const demoProjects = [
  {
    id: 'proj-1',
    title: 'AI Crop Disease Detection',
    description: 'A computer vision solution for farmers to detect crop stress and disease early.',
    problemStatement: 'Farmers struggle to detect crop diseases before yield loss.',
    solution: 'Use image-based AI diagnostics to help farmers identify diseases early and recommend treatment actions.',
    category: 'Agriculture',
    tags: ['AI', 'Agriculture', 'Computer Vision'],
    technologies: ['Python', 'React', 'TensorFlow', 'MongoDB'],
    stage: 'Prototype',
    githubUrl: 'https://github.com/demo/crop-disease',
    demoUrl: 'https://demo.example/crop-disease',
    videoUrl: '',
    team: ['Aarav Sharma', 'Priya Rao', 'Nikhil Sen'],
    owner: 'student-user',
    requirements: ['Technical Mentor', 'Dataset', 'Pilot Testing'],
    projectDNA: {
      domain: 'Agriculture',
      problem: 'Late detection of crop disease reduces yield and income',
      targetUsers: ['Farmers', 'Agriculture extension officers'],
      technologies: ['Python', 'React', 'Machine Learning'],
      stage: 'Prototype',
      impactArea: 'Productivity',
      requiredSkills: ['Computer Vision', 'ML', 'Field validation'],
      requiredResources: ['Agriculture dataset', 'Pilot testing'],
      potentialPartners: ['AgriTech Solutions', 'Agricultural Institutions'],
      scalabilityPotential: 'High'
    },
    aiAnalysis: {
      summary: 'Strong domain fit with practical AI application and clear social impact.',
      scores: {
        innovation: 82,
        impact: 91,
        technicalReadiness: 74,
        scalability: 79,
        industryFit: 86
      },
      recommendations: [
        'Find an agriculture mentor to validate disease classes.',
        'Collect data from regional farms to improve crop coverage.',
        'Create a pilot with an agri-institution.'
      ]
    },
    lifecycle: ['Idea', 'Hackathon', 'Prototype', 'Mentorship', 'MVP'],
    status: 'ACTIVE',
    lastUpdated: '2026-09-15',
    createdAt: '2026-08-15'
  }
];

const demoMentors = [
  {
    id: 'mentor-1',
    name: 'Meera Nair',
    expertise: ['Machine Learning', 'AgriTech'],
    domains: ['Agriculture', 'Climate'],
    experience: 8,
    availability: 'Available',
    location: 'Bengaluru, India',
    projectsMentored: 12,
    match: 94,
    bio: 'Helps founders convert research prototypes into deployable solutions.'
  },
  {
    id: 'mentor-2',
    name: 'Sanjay Verma',
    expertise: ['Computer Vision', 'MLOps'],
    domains: ['Healthcare', 'Agriculture'],
    experience: 6,
    availability: 'Weekends',
    location: 'Pune, India',
    projectsMentored: 9,
    match: 91,
    bio: 'Strong in building AI systems and generalizable data pipelines.'
  },
  {
    id: 'mentor-3',
    name: 'Lina Joseph',
    expertise: ['Product Strategy', 'AI Ethics'],
    domains: ['Education', 'Community'],
    experience: 10,
    availability: 'Available',
    location: 'Hyderabad, India',
    projectsMentored: 15,
    match: 87,
    bio: 'Supports early teams with user-centered product design and scale strategy.'
  }
];

const demoIndustries = [
  {
    id: 'industry-1',
    name: 'AgriTech Solutions',
    type: 'INDUSTRY',
    industry: 'Agriculture Technology',
    domains: ['Agriculture'],
    technologies: ['AI', 'ML', 'IoT'],
    description: 'Supports agriculture innovation and field pilot partnerships.',
    website: 'https://example.com/agritech',
    location: 'Pune, India',
    verified: true,
    match: 89
  },
  {
    id: 'industry-2',
    name: 'UrbanCare Labs',
    type: 'INDUSTRY',
    industry: 'Public Systems',
    domains: ['Smart Cities'],
    technologies: ['AI', 'Cloud'],
    description: 'Interested in civic technology and scalable public impact pilots.',
    website: 'https://example.com/urbancare',
    location: 'Bengaluru, India',
    verified: true,
    match: 71
  }
];

const demoNotifications = [
  {
    id: 'n-1',
    user: 'student-user',
    title: 'Your project has been analyzed.',
    message: 'AI project analysis is ready for AI Crop Disease Detection.',
    type: 'analysis',
    read: false,
    createdAt: '2026-09-18T09:00:00Z'
  },
  {
    id: 'n-2',
    user: 'student-user',
    title: 'New mentor match.',
    message: 'Meera Nair has been matched to your project.',
    type: 'match',
    read: false,
    createdAt: '2026-09-19T10:00:00Z'
  }
];

const demoCollaborations = [
  {
    id: 'r-1',
    fromUser: 'student-user',
    toUser: 'mentor-user',
    project: 'proj-1',
    type: 'Mentorship',
    message: 'Would you be open to mentoring this project?',
    status: 'Pending',
    createdAt: '2026-09-19T08:30:00Z'
  }
];

const demoMessages = [
  {
    id: 'm-1',
    sender: 'student-user',
    receiver: 'mentor-user',
    message: 'Hi Meera, I would love your feedback on our prototype.',
    conversationId: 'conv-1',
    createdAt: '2026-09-18T12:00:00Z'
  },
  {
    id: 'm-2',
    sender: 'mentor-user',
    receiver: 'student-user',
    message: 'Absolutely, let’s review the data pipeline and pilot plan.',
    conversationId: 'conv-1',
    createdAt: '2026-09-18T12:05:00Z'
  }
];

export default {
  projects: demoProjects,
  mentors: demoMentors,
  industries: demoIndustries,
  notifications: demoNotifications,
  collaborations: demoCollaborations,
  messages: demoMessages,
  users: [
    {
      id: 'student-user',
      name: 'Aarav Sharma',
      email: 'student@afterlife.demo',
      password: '$2a$10$P2YdZtG4kYf/rI5ulFAxVOVh8w1e5VY9HZ2Jwx8uNqK4kIv9rQX8G',
      role: 'STUDENT',
      organization: 'NIT Jaipur',
      skills: ['AI', 'ML', 'React', 'Computer Vision'],
      domains: ['Agriculture', 'Healthcare'],
      location: 'Jaipur, India',
      bio: 'Student building social-impact AI applications for rural communities.'
    },
    {
      id: 'mentor-user',
      name: 'Meera Nair',
      email: 'mentor@afterlife.demo',
      password: '$2a$10$P2YdZtG4kYf/rI5ulFAxVOVh8w1e5VY9HZ2Jwx8uNqK4kIv9rQX8G',
      role: 'MENTOR',
      organization: 'AI Impact Lab',
      skills: ['Machine Learning', 'Product Strategy', 'AgriTech'],
      domains: ['Agriculture', 'Climate'],
      location: 'Bengaluru, India',
      bio: 'Mentor helping student teams turn prototypes into viable products.'
    },
    {
      id: 'industry-user',
      name: 'Rohan Mehta',
      email: 'industry@afterlife.demo',
      password: '$2a$10$P2YdZtG4kYf/rI5ulFAxVOVh8w1e5VY9HZ2Jwx8uNqK4kIv9rQX8G',
      role: 'INDUSTRY',
      organization: 'AgriTech Solutions',
      skills: ['IoT', 'AI', 'Business Development'],
      domains: ['Agriculture', 'Sustainability'],
      location: 'Pune, India',
      bio: 'Industry partner investing in AI-powered operational efficiency solutions.'
    },
    {
      id: 'admin-user',
      name: 'Ananya Kulkarni',
      email: 'admin@afterlife.demo',
      password: '$2a$10$P2YdZtG4kYf/rI5ulFAxVOVh8w1e5VY9HZ2Jwx8uNqK4kIv9rQX8G',
      role: 'ADMIN',
      organization: 'Afterlife Foundation',
      skills: ['Operations', 'Governance', 'Analytics'],
      domains: ['Innovation', 'Education'],
      location: 'Delhi, India',
      bio: 'Admin overseeing the innovation revival pipeline and platform operations.'
    }
  ]
};
