import type { IconName } from '../components/icons/IconWrapper';

export interface Value {
  icon: IconName;
  title: string;
  description: string;
}

export const companyValues: Value[] = [
  {
    icon: 'shield-check',
    title: 'Trust',
    description: 'We build lasting partnerships through transparency, honesty, and consistent delivery. Your trust is our most valuable asset.',
  },
  {
    icon: 'zap',
    title: 'Innovation',
    description: 'We stay at the cutting edge of IT and AI technology so our clients never fall behind. Tomorrow\'s solutions, available today.',
  },
  {
    icon: 'server',
    title: 'Reliability',
    description: '99.9% uptime isn\'t just a metric — it\'s a promise. We engineer systems and processes that you can depend on, day and night.',
  },
  {
    icon: 'eye',
    title: 'Transparency',
    description: 'No hidden fees, no jargon, no surprises. Clear pricing, honest assessments, and monthly reports you can actually understand.',
  },
];
