import type { IconName } from '../components/icons/IconWrapper';

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  bestFor: string;
  features: { text: string; included: boolean }[];
  popular?: boolean;
  cta: string;
}

export interface AddOn {
  icon: IconName;
  title: string;
  price: string;
  description: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$2,000',
    period: '/month',
    description: 'Essential IT support and monitoring for small teams.',
    bestFor: '1–10 employees',
    cta: 'Get Started',
    features: [
      { text: '10 hours remote support', included: true },
      { text: 'Basic monitoring', included: true },
      { text: 'Email security', included: true },
      { text: 'Monthly reporting', included: true },
      { text: 'Endpoint protection', included: false },
      { text: 'Onsite support', included: false },
      { text: 'AI automation', included: false },
    ],
  },
  {
    name: 'Growth',
    price: '$3,500',
    period: '/month',
    description: 'Advanced protection and monitoring for growing teams.',
    bestFor: '11–25 employees',
    popular: true,
    cta: 'Get Started',
    features: [
      { text: '20 hours remote support', included: true },
      { text: 'Advanced monitoring + alerting', included: true },
      { text: 'Endpoint protection (up to 25 devices)', included: true },
      { text: 'Email + network security', included: true },
      { text: 'Quarterly security review', included: true },
      { text: 'Onsite support (add-on)', included: false },
      { text: 'AI automation', included: false },
    ],
  },
  {
    name: 'Scale',
    price: '$6,000',
    period: '/month',
    description: 'Full-stack IT, security, and automation for scaling teams.',
    bestFor: '26–50 employees',
    cta: 'Get Started',
    features: [
      { text: '40 hours remote support', included: true },
      { text: '24/7 proactive monitoring', included: true },
      { text: 'Full cybersecurity stack', included: true },
      { text: 'AI automation (1 workflow)', included: true },
      { text: 'Monthly onsite visit included', included: true },
      { text: 'Monthly executive report', included: true },
      { text: 'Compliance support', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored IT solutions with dedicated onsite presence.',
    bestFor: '50+ employees',
    cta: 'Contact Us',
    features: [
      { text: 'Unlimited remote + onsite support', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Full AI automation suite', included: true },
      { text: 'Compliance support (HIPAA, SOC 2, PCI)', included: true },
      { text: 'Custom SLA', included: true },
      { text: 'Scheduled weekly onsite visits', included: true },
      { text: 'Priority escalation', included: true },
    ],
  },
];

export const addOns: AddOn[] = [
  {
    icon: 'brain',
    title: 'AI Automation',
    price: 'From $1,500/month',
    description: 'Workflow automation, chatbots, and document processing.',
  },
  {
    icon: 'shield-check',
    title: 'Compliance Package',
    price: 'From $800/month',
    description: 'HIPAA, SOC 2, and PCI DSS compliance consulting and auditing.',
  },
  {
    icon: 'graduation-cap',
    title: 'Security Awareness Training',
    price: '$25/user/month',
    description: 'Phishing simulations and ongoing security training for your team.',
  },
  {
    icon: 'clock',
    title: 'Additional Remote Hours',
    price: '$150/hour',
    description: 'Need more remote support? Add hours to any plan as needed.',
  },
  {
    icon: 'map-pin',
    title: 'Onsite IT Support',
    price: '$175/hour',
    description: 'Hands-on support at your location. Half-day ($750) and full-day ($1,400) rates available.',
  },
  {
    icon: 'calendar',
    title: 'Recurring Onsite Visits',
    price: 'From $800/month',
    description: 'Scheduled monthly onsite visits for hardware, networking, and hands-on IT needs.',
  },
];
