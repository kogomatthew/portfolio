export interface Principle {
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    title: 'Repeatable by default',
    body: 'I standardize build and deployment steps and keep pipeline configuration consistent, so recurring delivery work is predictable and easy for the team to follow.',
  },
  {
    title: 'Evidence-based troubleshooting',
    body: 'Reproduce the issue, inspect logs and configuration, isolate the cause, apply a fix and verify the result, whether it is a failed release or a faulty link in a rack.',
  },
  {
    title: 'Validate, then record',
    body: 'Work is not done until it is checked and written down. Test results, labels, change records and runbooks keep changes traceable for audits and future troubleshooting.',
  },
  {
    title: 'Clear handoffs, early escalation',
    body: 'Handoff notes cover what is done, what is outstanding and what comes next, and I raise risks to quality, delivery or service reliability early.',
  },
];
