import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
          style={{ marginBottom: '48px' }}
        >
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>
            Skills
          </p>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#f4f4f5', letterSpacing: '-0.02em' }}>
            What I work with
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px',
        }}>
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <p style={{
                fontFamily: 'monospace',
                fontSize: '10px',
                color: '#52525b',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                marginBottom: '12px',
              }}>
                {group.category}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map((skill) => (
                  <span key={skill} style={{
                    fontSize: '13px',
                    color: '#d4d4d8',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '6px',
                    padding: '4px 11px',
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
