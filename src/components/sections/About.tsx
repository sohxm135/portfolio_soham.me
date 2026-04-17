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
  { label: 'Next', value: 'SDE Intern · Amazon (Jul 2026)' },
  { label: 'Education', value: 'B.Tech IT · MIT Manipal · 2027' },
  { label: 'Interests', value: 'Systems, distributed infra, product engineering' },
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
              I'm a third-year IT student at MIT Manipal with a genuine interest in how software works — not just what it does, but the systems underneath.
            </p>
            <p>
              On the hardware side, I lead data handling for a student satellite project, writing firmware that has to be right the first time. On the software side, I've built full-stack applications and worked at a fintech company building dashboards for financial data.
            </p>
            <p>
              I'm joining Amazon as an SDE Intern in July 2026. For now I'm building things, learning systems, and staying curious.
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
