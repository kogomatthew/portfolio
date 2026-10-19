export interface Project {
  name: string;
  org: string;
  period?: string;
  problem: string;
  built: string;
  outcome: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    name: 'Self-Hosted Application Platform',
    org: 'Personal infrastructure',
    period: 'Ongoing',
    problem:
      'Run real Next.js and FastAPI applications in production without a managed platform hiding the operational work.',
    built:
      'A self-managed Linux VPS running containerized applications behind a reverse proxy, with TLS configuration and a repeatable deployment flow.',
    outcome:
      'Applications I operate end to end: deployments, reverse-proxy routing, TLS configuration and command-line troubleshooting.',
    stack: ['Linux VPS', 'Docker', 'Traefik', 'TLS/SSL', 'Next.js', 'FastAPI'],
  },
  {
    name: 'Market Data Pipeline',
    org: 'Personal project',
    problem:
      'Turn raw market data from an external API into input a machine-learning model can use.',
    built:
      'A Python workflow that retrieves market data from an external API, processes it and passes it to a machine-learning model.',
    outcome:
      'An end-to-end data flow from a third-party API through processing to model input, built and run in Python.',
    stack: ['Python', 'Alpaca API', 'XGBoost'],
  },
  {
    name: 'VoIP Calling Application',
    org: 'Personal project',
    problem:
      'Build a full-featured mobile calling experience on top of a third-party real-time communications SDK.',
    built:
      'A mobile calling application with dialpad, contacts, call history and recording.',
    outcome:
      'A working calling app that integrates real-time voice with the core features users expect from a phone.',
    stack: ['Flutter', 'Telnyx WebRTC SDK', 'Mobile'],
  },
];
