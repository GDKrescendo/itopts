import type { IconName } from '../components/icons/IconWrapper';

export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  icon: IconName;
  title: string;
  tagline: string;
  description: string;
  items: ServiceItem[];
  pricing: string;
}

export const serviceOverview = [
  {
    icon: 'server' as IconName,
    title: 'Managed IT Services',
    tagline: 'Your dedicated IT department',
    description: 'Proactive monitoring, helpdesk support, and infrastructure management — so you can focus on growing your business.',
    href: '/services#managed-it',
  },
  {
    icon: 'brain' as IconName,
    title: 'AI Automation',
    tagline: 'Work smarter, not harder',
    description: 'Automate repetitive workflows, deploy intelligent chatbots, and extract insights from your data with custom AI solutions.',
    href: '/services#ai-automation',
  },
  {
    icon: 'shield' as IconName,
    title: 'Cybersecurity',
    tagline: 'Stay protected around the clock',
    description: '24/7 threat monitoring, endpoint protection, and compliance support to keep your business safe from evolving cyber threats.',
    href: '/services#cybersecurity',
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'managed-it',
    icon: 'server',
    title: 'Managed IT Services',
    tagline: 'Your dedicated IT department',
    description: 'We handle your IT infrastructure end-to-end so your team can focus on what they do best. From helpdesk support to proactive monitoring, we keep your systems running smoothly.',
    items: [
      { icon: 'headphones', title: 'Help Desk Support', description: 'Fast, friendly remote support for your team. Resolve issues before they slow you down.' },
      { icon: 'eye', title: 'Proactive Monitoring', description: '24/7 infrastructure monitoring with automated alerting. We catch problems before you notice them.' },
      { icon: 'hard-drive', title: 'Patch Management', description: 'Automated updates and security patches across all endpoints, keeping your systems current and secure.' },
      { icon: 'users', title: 'Vendor Management', description: 'We coordinate with your software and hardware vendors so you don\'t have to.' },
      { icon: 'bar-chart', title: 'Monthly Reporting', description: 'Detailed reports on system health, ticket resolution, and recommendations for improvement.' },
      { icon: 'cloud', title: 'Cloud Management', description: 'Azure, AWS, and Google Cloud optimization. Migration, monitoring, and cost management.' },
      { icon: 'map-pin', title: 'Onsite IT Support', description: 'Hands-on support at your location for hardware installs, network setups, office moves, and issues that can\'t be solved remotely. Scheduled or emergency visits available.' },
    ],
    pricing: 'Starting at $2,000/month (10 hours remote support) · Onsite from $175/hr',
  },
  {
    id: 'ai-automation',
    icon: 'brain',
    title: 'AI Automation',
    tagline: 'Intelligent solutions for modern businesses',
    description: 'Leverage artificial intelligence to streamline operations, reduce manual work, and unlock new capabilities. We build custom AI solutions tailored to your business processes.',
    items: [
      { icon: 'workflow', title: 'Workflow Automation', description: 'Automate repetitive business processes — from data entry to approval workflows — saving hours every week.' },
      { icon: 'bot', title: 'AI Chatbots & Assistants', description: 'Deploy intelligent chatbots for customer service, internal helpdesk, and lead qualification.' },
      { icon: 'file-text', title: 'Document Processing', description: 'AI-powered data extraction from invoices, contracts, and forms. Eliminate manual data entry.' },
      { icon: 'link', title: 'Custom AI Integration', description: 'Connect AI capabilities to your existing CRM, ERP, and business systems for seamless automation.' },
      { icon: 'scan-search', title: 'Data Analytics & Insights', description: 'Transform raw data into actionable business intelligence with AI-powered analytics dashboards.' },
    ],
    pricing: 'Starting at $1,500/month or project-based',
  },
  {
    id: 'cybersecurity',
    icon: 'shield',
    title: 'Cybersecurity',
    tagline: '24/7 protection for your business',
    description: 'Comprehensive security solutions to protect your business from the ever-evolving threat landscape. From endpoint protection to compliance support, we\'ve got you covered.',
    items: [
      { icon: 'monitor', title: 'Endpoint Protection', description: 'Next-gen antivirus, EDR, and device management for every endpoint in your organization.' },
      { icon: 'network', title: 'Network Security', description: 'Enterprise-grade firewall, VPN, and intrusion detection systems to secure your perimeter.' },
      { icon: 'mail', title: 'Email Security', description: 'Advanced phishing protection, spam filtering, and email encryption to secure your communications.' },
      { icon: 'graduation-cap', title: 'Security Awareness Training', description: 'Ongoing employee training programs with simulated phishing campaigns to build a security-first culture.' },
      { icon: 'alert-triangle', title: 'Incident Response', description: '24/7 breach response team ready to contain and remediate security incidents.' },
      { icon: 'shield-check', title: 'Compliance Support', description: 'HIPAA, SOC 2, and PCI DSS compliance consulting, auditing, and ongoing support.' },
    ],
    pricing: 'Starting at $500/month add-on or bundled',
  },
];

export const managedITTiers = [
  { hours: '10 hours/month', price: '$2,000/month' },
  { hours: '20 hours/month', price: '$3,500/month' },
  { hours: '40 hours/month', price: '$6,000/month' },
  { hours: 'Unlimited (Fully Managed)', price: 'Custom pricing' },
];
