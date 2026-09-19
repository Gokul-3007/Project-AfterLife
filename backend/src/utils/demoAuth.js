export const demoUsers = [
  {
    id: 'student-user',
    name: 'Aarav Sharma',
    email: 'student@afterlife.demo',
    password: 'Demo@123',
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
    password: 'Demo@123',
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
    password: 'Demo@123',
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
    password: 'Demo@123',
    role: 'ADMIN',
    organization: 'Afterlife Foundation',
    skills: ['Operations', 'Governance', 'Analytics'],
    domains: ['Innovation', 'Education'],
    location: 'Delhi, India',
    bio: 'Admin overseeing the innovation revival pipeline and platform operations.'
  }
];

export const createToken = (user) => ({
  token: `demo-token-${user.role.toLowerCase()}`,
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    organization: user.organization,
    skills: user.skills,
    domains: user.domains,
    location: user.location,
    bio: user.bio,
  }
});

export default demoUsers;
