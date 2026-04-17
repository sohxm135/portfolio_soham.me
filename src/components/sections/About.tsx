import { motion } from 'framer-motion';

const S = {
  section: {
    padding: '96px 0',
  } as React.CSSProperties,
  inner: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 24px',
  } as React.CSSProperties,
  label: {
    fontFamily: 'monospace',
    fontSize: '11px',
    color: '#818cf8',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.12em',
    marginBottom: '12px',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#f4f4f5',
    letterSpacing: '-0.02em',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '48px',
  } as React.CSSProperties,
  body: {
    color: '#a1a1aa',
    lineHeight: 1.75,
    fontSize: '15px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
};

const facts = [
  { label: 'Currently', value: 'Data Handling Lead · Parikshit Satellite' },
  { label: 'Next', value: 'SDE Intern · Amazon · Jul 2026' },
  { label: 'Education', value: 'B.Tech IT · MIT Manipal · 2027' },
  { label: 'Focused on', value: 'Distributed systems, backend engineering' },
  { label: 'Location', value: 'Manipal / Mumbai, India' },
];

export default function About() {
  return (
    <section id="about" style={S.section}>
      <div style={S.inner}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <p style={S.label}>About</p>
          <h2 style={S.heading}>A bit about me</h2>
        </motion.div>

        <div style={S.grid}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
            style={S.body}
          >
            <p>
              I'm a third-year at MIT Manipal leading the data handling subsystem for Parikshit — a student-built satellite. That means firmware where a bug doesn't get a hotfix: real-time GPS telemetry over UART, FreeRTOS task scheduling across STM32 H7 boards, and PWM output tested to within 0.25% of spec.
            </p>
            <p>
              On the web side, I interned at 360 One building financial analytics dashboards in Next.js for internal teams, and I've shipped a full-stack app with a normalized SQL schema and role-based access control.
            </p>
            <p>
              I'm joining Amazon as an SDE intern in July 2026. Right now I'm studying how distributed systems handle scale — because that's the class of problem I'll be working on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
          >
            {facts.map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
                <span style={{ color: '#52525b', width: '90px', flexShrink: 0 }}>{label}</span>
                <span style={{ color: '#d4d4d8' }}>{value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
