export interface Role {
  company: string;
  title: string;
  period: string;
  summary?: string;
  achievements: string[];
}

export const experience: Role[] = [
  {
    company: 'E2 Optics (Meta Data Center) · New Albany, OH',
    title: 'Fiber Installer',
    period: 'Aug 2026 - Present',
    summary:
      'Building physical network infrastructure inside a live hyperscale data center, following engineering prints and approved work instructions.',
    achievements: [
      'Install, route and terminate structured fiber and copper cabling and patch panels in a hyperscale data-center build, following engineering prints and approved work instructions.',
      'Perform continuity and certification tests and check results before work is presented for acceptance.',
      'Maintain cable labels, test records and work documentation so changes remain traceable for audits, maintenance and future troubleshooting.',
      'Investigate cabling, rack and connectivity issues, capture findings and escalate unresolved faults with clear status updates.',
      'Coordinate work with site teams to keep implementation aligned with engineering requirements, dependencies and quality expectations.',
      'Follow controlled procedures when working around mission-critical infrastructure, validating completed work rather than relying on assumptions.',
      'Prepare clear handoff notes covering completed tasks, outstanding issues and next actions for other technicians and leads.',
      'Apply disciplined operational practices: verify changes, record outcomes, communicate risk early and complete required checks before closing work.',
    ],
  },
  {
    company: 'Enthrallix',
    title: 'Cloud & DevOps Consultant',
    period: 'Sep 2023 - Jul 2026',
    summary:
      'Supported cloud-hosted applications across Azure and AWS, owning CI/CD workflows, production releases, monitoring and incident response with engineering teams and clients.',
    achievements: [
      'Built and maintained Azure DevOps and GitLab CI/CD workflows to automate builds, tests, artifact handling and releases across development, staging and production.',
      'Supported Azure and AWS environments, including compute, networking, storage, identity/access configuration, environment setup and cloud troubleshooting.',
      'Coordinated production releases with engineering and clients; checked prerequisites, validated application health after rollout and documented rollback steps.',
      'Managed pipeline variables, service connections, environment approvals and deployment permissions; helped protect credentials and secrets in delivery workflows.',
      'Reviewed dashboards, logs and alerts across cloud monitoring tools; investigated service degradation and escalated incidents with actionable evidence.',
      'Resolved production issues involving startup failures, connectivity, configuration drift, resource constraints and deployments; verified recovery after fixes.',
      'Supported DevSecOps controls including least-privilege access, vulnerability remediation, secure configuration checks and pipeline security gates.',
      'Supported container deployments, image/version management, health checks and runtime troubleshooting with developers.',
      'Supported MLOps-oriented workflows for repeatable data/ML component execution and deployment, environment configuration, artifact traceability and post-release validation.',
      'Maintained release notes, runbooks, incident records and deployment checklists; communicated risks, dependencies and status to stakeholders.',
      'Supported repeatable infrastructure provisioning and environment consistency through version-controlled definitions and reviewed changes.',
    ],
  },
  {
    company: 'Webspec Design · Think Future Technologies · PRIMETECH',
    title: 'Software Engineer',
    period: 'Jan 2020 - Aug 2023',
    summary:
      'Delivered and supported applications on Linux-hosted environments, from CI/CD pipelines through deployment, troubleshooting and performance fixes.',
    achievements: [
      'Built and maintained Jenkins CI/CD pipelines to standardize application build and deployment steps and support repeatable releases to Linux VPS environments.',
      'Deployed applications to Linux-hosted environments and investigated failed releases, configuration mismatches, startup issues and runtime errors.',
      'Used command-line checks and application logs to narrow down service, environment and connectivity problems during deployment and support.',
      'Investigated slow application behavior by tracing database queries and code paths, then implemented fixes based on the findings.',
      'Worked with engineering colleagues to coordinate releases, communicate deployment status and resolve issues found during production support.',
      'Created troubleshooting guides and technical documentation covering setup requirements, common failures and recovery steps for handoffs.',
      'Maintained pipeline and deployment configuration to make recurring delivery tasks more consistent and easier for the team to follow.',
      'Used a structured troubleshooting approach: reproduce the issue, inspect logs and configuration, isolate the cause, apply a fix and verify the result.',
    ],
  },
];
