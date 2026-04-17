import { motion } from 'framer-motion';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
          style={{ marginBottom: '48px' }}
        >
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>
            Experience
          </p>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#f4f4f5', letterSpacing: '-0.02em' }}>
            Where I've worked
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${i}`}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }}
              style={{
                display: 'flex',
                gap: '20px',
              }}
            >
              {/* Timeline dot */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '4px',
                flexShrink: 0,
              }}>
                <div style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: i === 0 ? 'rgba(99,102,241,0.6)' : '#3f3f46',
                  border: '1px solid rgba(255,255,255,0.15)',
                  flexShrink: 0,
                }} />
                {i < experience.length - 1 && (
                  <div style={{ width: '1px', flex: 1, background: 'rgba(255,255,255,0.06)', marginTop: '8px' }} />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: '8px', flex: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 600, color: '#f4f4f5' }}>{job.company}</span>
                  {job.badge === 'incoming' && (
                    <span style={{
                      fontSize: '11px', borderRadius: '999px',
                      background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)',
                      color: '#a5b4fc', padding: '2px 10px',
                    }}>Incoming</span>
                  )}
                  {job.badge === 'current' && (
                    <span style={{
                      fontSize: '11px', borderRadius: '999px',
                      background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)',
                      color: '#6ee7b7', padding: '2px 10px',
                    }}>Current</span>
                  )}
                </div>

                <div style={{ fontSize: '13px', color: '#52525b', marginBottom: '12px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span>{job.role}</span>
                  <span>·</span>
                  <span>{job.period}</span>
                  <span>·</span>
                  <span>{job.location}</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {job.description.map((pt, j) => (
                    <li key={j} style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.65, display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#3f3f46', flexShrink: 0, marginTop: '2px' }}>–</span>
                      {pt}
                    </li>
                  ))}
                </ul>

                {job.tech && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {job.tech.map((t) => (
                      <span key={t} style={{
                        fontSize: '11px', fontFamily: 'monospace',
                        color: '#71717a', border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '4px', padding: '1px 7px',
                        background: 'rgba(255,255,255,0.02)',
                      }}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
