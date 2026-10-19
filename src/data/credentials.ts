export interface Certification {
  name: string;
  issuer: string;
  date?: string;
}

export const certifications: Certification[] = [
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
  { name: 'OSHA 10-Hour Construction Safety', issuer: 'OSHA' },
  {
    name: 'Data Center Fiber Installer Pathway',
    issuer: 'American Workforce Academy (Meta)',
    date: 'Aug 2026',
  },
];

export interface Degree {
  degree: string;
  school: string;
  date: string;
}

export const education: Degree[] = [
  {
    degree: 'M.S. Computer Science (Computing Systems)',
    school: 'Georgia Institute of Technology',
    date: 'Expected Dec 2026',
  },
  {
    degree: 'B.S. Computer Science',
    school: 'Moi University',
    date: '2019',
  },
];
