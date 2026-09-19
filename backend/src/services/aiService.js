const weightedScore = (value, min, max) => {
  return Math.max(min, Math.min(max, value));
};

export const analyzeProject = (project) => {
  const tags = (project.tags || []).join(' ').toLowerCase();
  const technologies = (project.technologies || []).join(' ').toLowerCase();
  const requirements = (project.requirements || []).join(' ').toLowerCase();
  const categoryLower = (project.category || '').toLowerCase();

  const domainTargetMap = {
    agriculture: ['Farmers', 'Agricultural officers', 'Farm cooperatives'],
    healthcare: ['Doctors', 'Nurses', 'Hospital staff'],
    education: ['Students', 'Teachers', 'Academic institutions'],
    fintech: ['Consumers', 'Banking teams', 'Small business owners'],
    sustainability: ['Communities', 'Public agencies', 'Environmental teams'],
    security: ['Security analysts', 'Operations teams', 'IT administrators'],
    mobility: ['Commuters', 'Transport operators', 'Fleet managers'],
    logistics: ['Warehouse teams', 'Supply chain managers', 'Delivery operators'],
    default: ['End users', 'Operators', 'Stakeholders']
  };

  const targetUsers = domainTargetMap[categoryLower] || domainTargetMap.default;

  const technicalBoost = (technologies.includes('react') || technologies.includes('python') || technologies.includes('machine learning') ? 18 : 6);
  const impactBoost = categoryLower.includes('agriculture') || tags.includes('health') ? 22 : 12;
  const stageBoost = project.stage === 'Prototype' ? 10 : project.stage === 'MVP' ? 14 : 8;

  const innovation = weightedScore(70 + (tags.match(/ai|ml|vision|predict|iot/g)?.length || 0) * 6 + technicalBoost, 60, 95);
  const impact = weightedScore(72 + impactBoost + (requirements.includes('pilot') ? 5 : 0), 65, 98);
  const technicalReadiness = weightedScore(60 + (project.technologies?.length || 0) * 4 + stageBoost, 55, 90);
  const scalability = weightedScore(68 + (project.category ? 8 : 0) + (requirements.includes('dataset') ? 5 : 0), 60, 96);
  const industryFit = weightedScore(70 + (categoryLower.includes('agriculture') ? 12 : 8) + (requirements.includes('industry') || requirements.includes('pilot') ? 8 : 0), 60, 97);

  const projectDNA = {
    domain: project.category || 'Innovation',
    problem: project.problemStatement || 'Problem needs deeper validation and evidence.',
    targetUsers,
    technologies: project.technologies || ['AI', 'Web'],
    stage: project.stage || 'Idea',
    impactArea: project.category || 'Societal impact',
    primaryBeneficiaries: targetUsers.slice(0, 2),
    userImpact: project.problemStatement ? `Addresses a clear pain point for ${targetUsers[0].toLowerCase()}.` : 'Potential social or operational benefit for end users.',
    requiredSkills: project.requirements || ['Technical mentor'],
    requiredResources: ['Mentor support', 'Pilot validation'],
    potentialPartners: [
      categoryLower.includes('agriculture') ? 'AgriTech Companies' : 'Industry Partners',
      'Research Institutions',
      'Community Organizations'
    ],
    scalabilityPotential: innovation > 80 ? 'High' : 'Medium',
    stakeholderChannels: ['Mentors', 'Industry partners', 'Pilot users']
  };

  return {
    summary: 'AI-generated prototype indicators show clear market and social potential with some validation gaps.',
    scores: {
      innovation: Math.round(innovation),
      impact: Math.round(impact),
      technicalReadiness: Math.round(technicalReadiness),
      scalability: Math.round(scalability),
      industryFit: Math.round(industryFit),
    },
    projectDNA,
    reasons: {
      innovation: 'The project combines practical AI use with a clear use case, which increases novelty and feasibility.',
      impact: 'The problem area addresses a tangible social or operational pain point with measurable benefit.',
      technicalReadiness: 'The current stack is promising, but data quality and validation steps still matter.',
      scalability: 'The solution has strong opportunities to extend across regions or user groups if validated appropriately.',
      industryFit: 'The problem and technologies align well with real-world industry needs and pilot opportunities.'
    },
    recommendations: [
      'Find a mentor in the relevant domain.',
      'Document the validation process and metrics.',
      'Prepare a pilot or prototype demo for stakeholders.'
    ]
  };
};

export const generateProjectDNA = (project) => analyzeProject(project).projectDNA;

export const generateProjectRecommendations = (project) => {
  const analysis = analyzeProject(project);
  return {
    recommendations: analysis.recommendations,
    potentialPartners: analysis.projectDNA.potentialPartners,
    requiredSupport: analysis.projectDNA.requiredSkills
  };
};

export const calculateProjectIndicators = (project) => analyzeProject(project).scores;

export const generateMatchExplanation = (project, candidate) => {
  const projectDomain = project.category || '';
  const matchReasons = [];

  if (candidate?.domains?.includes(projectDomain)) {
    matchReasons.push('Same domain');
  }
  if (candidate?.expertise?.some((skill) => (project.technologies || []).includes(skill) || (project.requirements || []).includes(skill))) {
    matchReasons.push('Required technical skills available');
  }
  if (candidate?.experience >= 5) {
    matchReasons.push('Suitable project stage');
  }
  if (candidate?.availability === 'Available' || candidate?.availability === 'Weekends') {
    matchReasons.push('Relevant industry experience');
  }

  return matchReasons.length ? matchReasons : ['Strong alignment with project needs'];
};

export default {
  analyzeProject,
  generateProjectDNA,
  generateProjectRecommendations,
  calculateProjectIndicators,
  generateMatchExplanation
};
