export interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  initials: string;
  photo: string;
  expertise: string[];
}

export const founders: TeamMember[] = [
  {
    name: 'Edgar Gunness',
    role: 'CEO',
    tagline: '40+ years of IT leadership and network architecture experience',
    bio: 'Edgar brings four decades of enterprise IT leadership to ITOPTS. From designing resilient network architectures for Fortune 500 companies to building high-performance infrastructure teams, his deep operational expertise provides the strategic foundation that drives every client engagement.',
    initials: 'EG',
    photo: '/images/team/edgar-gunness.jpeg',
    expertise: ['Strategic IT Planning', 'Network Architecture', 'Enterprise Infrastructure', 'Digital Transformation', 'Team Leadership'],
  },
  {
    name: 'Godfrey Diaz',
    role: 'CTO',
    tagline: '10+ years of cybersecurity, cloud security, and AI expertise',
    bio: 'Godfrey is a cybersecurity and AI engineer who architects secure, intelligent systems from the ground up. His expertise spans cloud security, identity and access management, threat detection, and AI-driven automation — giving ITOPTS clients a modern security posture that evolves as fast as the threats they face.',
    initials: 'GD',
    photo: '/images/team/godfrey-diaz.jpeg',
    expertise: ['Cybersecurity', 'Cloud Security', 'Identity & Access Management', 'AI & Machine Learning', 'Automation Engineering', 'Threat Detection', 'Incident Response'],
  },
];
