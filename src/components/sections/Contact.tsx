import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../ui/Icons';

const links = [
  { Icon: Mail, label: 'singhsoham135@gmail.com', href: 'mailto:singhsoham135@gmail.com' },
  { Icon: LinkedInIcon, label: 'linkedin.com/in/singhsoham', href: 'https://www.linkedin.com/in/singhsoham/' },
  { Icon: GitHubIcon, label: 'github.com/sohxm135', href: 'https://github.com/sohxm135' },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
          style={{ maxWidth: '480px' }}
        >
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>
            Contact
          </p>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#f4f4f5', letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Let's talk
          </h2>
          <p style={{ color: '#71717a', fontSize: '14px', lineHeight: 1.7, marginBottom: '40px' }}>
            Open to opportunities, collaborations, and interesting conversations.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {links.map(({ Icon, label, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  fontSize: '14px', color: '#a1a1aa', textDecoration: 'none',
                  transition: 'color 0.15s',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.02)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#e4e4e7';
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
                  e.currentTarget.style.background = 'rgba(99,102,241,0.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#a1a1aa';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
