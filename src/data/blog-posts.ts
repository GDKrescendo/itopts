export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: '5 Cybersecurity Mistakes South Florida SMBs Make',
    excerpt: 'Many small businesses in South Florida are unknowingly leaving their digital doors wide open. Here are the five most common cybersecurity mistakes — and how to fix them before it\'s too late.',
    category: 'Cybersecurity',
    date: 'March 28, 2026',
    readTime: '6 min read',
    slug: '5-cybersecurity-mistakes-smbs',
  },
  {
    title: 'How AI Automation Saved Our Client 20 Hours Per Week',
    excerpt: 'When a local law firm came to us drowning in manual data entry, we deployed an AI-powered automation workflow that transformed their operations. Here\'s the full case study.',
    category: 'AI Automation',
    date: 'March 15, 2026',
    readTime: '8 min read',
    slug: 'ai-automation-case-study',
  },
  {
    title: 'Why Your Business Needs an MSP in 2026',
    excerpt: 'The IT landscape has changed dramatically. Between rising cyber threats and the AI revolution, here\'s why partnering with a managed service provider is no longer optional.',
    category: 'Managed IT',
    date: 'March 2, 2026',
    readTime: '5 min read',
    slug: 'why-your-business-needs-msp-2026',
  },
];
