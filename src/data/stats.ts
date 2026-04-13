import type { IconName } from '../components/icons/IconWrapper';

export interface Stat {
  icon: IconName;
  value: number;
  suffix: string;
  prefix: string;
  label: string;
}

export const stats: Stat[] = [
  { icon: 'trending-up', value: 99.9, suffix: '%', prefix: '', label: 'Uptime SLA' },
  { icon: 'clock', value: 15, suffix: ' Min', prefix: '< ', label: 'Response Time' },
  { icon: 'shield', value: 24, suffix: '/7', prefix: '', label: 'AI Threat Detection' },
  { icon: 'check-circle', value: 500, suffix: '+', prefix: '', label: 'Issues Resolved' },
];
