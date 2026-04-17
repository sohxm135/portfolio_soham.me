import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
          style={{ marginBottom: '48px' }}
        >
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>
            Projects
          </p>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#f4f4f5', letterSpacing: '-0.02em', marginBottom: '8px' }}>
            Things I've built
          </h2>
        </motion.div>

        {/* Featured 2-col */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          marginBottom: rest.length > 0 ? '16px' : 0,
        }}>
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Rest */}
        {rest.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}>
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={featured.length + i} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}
          style={{ marginTop: '36px', textAlign: 'center' }}
        >
          <a
            href="https://github.com/sohxm135"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '13px', color: '#52525b', textDecoration: 'none', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#a1a1aa')}
            onMouseLeave={e => (e.currentTarget.style.color = '#52525b')}
          >
            More on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
