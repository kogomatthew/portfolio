export const competencies: string[] = [
  'Cloud & platform operations',
  'Release planning & deployment support',
  'CI/CD process improvement',
  'Linux service operations',
  'Incident investigation & recovery',
  'Environment consistency',
  'Monitoring & log analysis',
  'Change validation',
  'Runbooks & documentation',
  'Client & team coordination',
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: 'Cloud',
    items: ['AWS EC2', 'S3', 'VPC', 'IAM', 'Lambda', 'CloudWatch', 'Microsoft Azure'],
  },
  {
    label: 'CI/CD & Version Control',
    items: ['Jenkins', 'Azure DevOps', 'GitLab CI/CD', 'Git', 'GitHub', 'YAML pipelines'],
  },
  {
    label: 'Containers & Orchestration',
    items: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm'],
  },
  {
    label: 'Infrastructure Automation',
    items: ['Terraform', 'OpenTofu', 'Declarative configuration', 'GitOps concepts'],
  },
  {
    label: 'Linux & Networking',
    items: ['Linux administration', 'SSH', 'System services', 'Logs', 'DNS', 'Nginx', 'Traefik', 'Reverse proxy', 'TLS/SSL'],
  },
  {
    label: 'Monitoring & Operations',
    items: ['Prometheus', 'Grafana', 'CloudWatch', 'Azure Monitor', 'Log review', 'Alert triage', 'Incident documentation'],
  },
  {
    label: 'Application & Data',
    items: ['Python', 'FastAPI', 'Next.js', 'JavaScript / TypeScript', 'Prisma', 'SQL', 'PostgreSQL', 'Java & Go concepts'],
  },
  {
    label: 'Other',
    items: ['Flutter', 'Swift', 'Technical runbooks', 'Change records', 'Deployment documentation', 'Team handoffs'],
  },
];
