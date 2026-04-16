export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "ITOPTS transformed our IT infrastructure. We went from constant downtime to 99.9% uptime, and their AI automation tools saved our team over 20 hours a week on repetitive tasks.",
    name: 'Sarah Mitchell',
    role: 'Operations Director',
    company: 'Coastal Legal Group',
    initials: 'SM',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face',
  },
  {
    quote: "As a healthcare practice, HIPAA compliance was our biggest concern. ITOPTS not only secured our systems but made the entire compliance process seamless. Their team feels like an extension of ours.",
    name: 'Dr. Marcus Rivera',
    role: 'Managing Partner',
    company: 'SunCoast Medical Associates',
    initials: 'MR',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face',
  },
  {
    quote: "We were hit with a phishing attack before ITOPTS. Since switching, zero incidents in 18 months. Their proactive monitoring and employee training program have been game-changers.",
    name: 'James Chen',
    role: 'CEO',
    company: 'Pinnacle Financial Advisors',
    initials: 'JC',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
  },
];
