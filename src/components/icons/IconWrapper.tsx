import {
  Shield, Lock, Cpu, Cloud, Mail, Phone, MapPin, Clock, ChevronRight,
  CheckCircle2, XCircle, Zap, BarChart3, Users, Globe, Server,
  Bot, FileText, Link2, AlertTriangle, Eye, Wifi, HardDrive,
  GraduationCap, HeadphonesIcon, ArrowRight, Star, Quote, Calendar,
  TrendingUp, ShieldCheck, MonitorSmartphone, BrainCircuit, Workflow,
  MessagesSquare, ScanSearch, Network, KeyRound, UserCheck, BookOpen
} from 'lucide-react';

const iconMap = {
  shield: Shield,
  lock: Lock,
  cpu: Cpu,
  cloud: Cloud,
  mail: Mail,
  phone: Phone,
  'map-pin': MapPin,
  clock: Clock,
  'chevron-right': ChevronRight,
  'check-circle': CheckCircle2,
  'x-circle': XCircle,
  zap: Zap,
  'bar-chart': BarChart3,
  users: Users,
  globe: Globe,
  server: Server,
  bot: Bot,
  'file-text': FileText,
  link: Link2,
  'alert-triangle': AlertTriangle,
  eye: Eye,
  wifi: Wifi,
  'hard-drive': HardDrive,
  'graduation-cap': GraduationCap,
  headphones: HeadphonesIcon,
  'arrow-right': ArrowRight,
  star: Star,
  quote: Quote,
  calendar: Calendar,
  'trending-up': TrendingUp,
  'shield-check': ShieldCheck,
  monitor: MonitorSmartphone,
  brain: BrainCircuit,
  workflow: Workflow,
  'messages-square': MessagesSquare,
  'scan-search': ScanSearch,
  network: Network,
  'key-round': KeyRound,
  'user-check': UserCheck,
  'book-open': BookOpen,
} as const;

export type IconName = keyof typeof iconMap;

interface IconWrapperProps {
  name: IconName;
  size?: number;
  className?: string;
}

export default function IconWrapper({ name, size = 24, className = '' }: IconWrapperProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} className={className} />;
}
