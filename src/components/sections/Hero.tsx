import { motion } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../ui/Icons';
import heroImg from '../../assets/avatar.jpeg';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '56px',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '48px',
          flexWrap: 'wrap-reverse',
        }}>

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            style={{ flex: '1 1 340px', minWidth: 0 }}
          >
            <p style={{
              fontFamily: 'monospace',
              fontSize: '13px',
              color: '#818cf8',
              letterSpacing: '0.08em',
              marginBottom: '16px',
            }}>
              Hi, I'm
            </p>

            <h1 style={{
              fontSize: 'clamp(38px, 7vw, 72px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #f4f4f5 0%, #a1a1aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Soham Singh
            </h1>

            <p style={{
              fontSize: 'clamp(15px, 2vw, 19px)',
              color: '#a1a1aa',
              maxWidth: '480px',
              lineHeight: 1.65,
              fontWeight: 300,
              marginBottom: '32px',
            }}>
              Software engineer. I build things that work at the edges —{' '}
              <span style={{ color: '#c4b5fd' }}>embedded systems</span>,{' '}
              <span style={{ color: '#818cf8' }}>web apps</span>, and everything in between.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '5px 14px', borderRadius: '999px',
                border: '1px solid rgba(99,102,241,0.4)',
                background: 'rgba(99,102,241,0.08)',
                color: '#a5b4fc', fontSize: '12px', fontWeight: 500,
              }}>
                <span style={{
                  display: 'inline-block', width: '7px', height: '7px',
                  borderRadius: '50%', background: '#818cf8',
                  boxShadow: '0 0 6px #818cf8',
                }} />
                Incoming SDE Intern @ Amazon
              </span>
              <span style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '5px 14px', borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                color: '#71717a', fontSize: '12px',
              }}>
                MIT Manipal · IT · 2027
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              {[
                { href: 'https://github.com/sohxm135', label: 'GitHub', icon: <GitHubIcon size={20} /> },
                { href: 'https://www.linkedin.com/in/singhsoham/', label: 'LinkedIn', icon: <LinkedInIcon size={20} /> },
                { href: 'mailto:singhsoham135@gmail.com', label: 'Email', icon: <Mail size={20} /> },
              ].map(({ href, label, icon }) => (
                <a key={label} href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: '#71717a', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#e4e4e7')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#71717a')}
                >
                  {icon}
                </a>
              ))}

              <div style={{ width: '1px', height: '20px', background: '#3f3f46' }} />

              <a
                href="#projects"
                style={{
                  fontSize: '14px', color: '#c4b5fd',
                  border: '1px solid rgba(139,92,246,0.35)',
                  borderRadius: '8px', padding: '8px 18px',
                  textDecoration: 'none',
                  background: 'rgba(139,92,246,0.06)',
                  transition: 'background 0.15s, border-color 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(139,92,246,0.14)';
                  e.currentTarget.style.borderColor = 'rgba(139,92,246,0.6)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(139,92,246,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(139,92,246,0.35)';
                }}
              >
                View projects
              </a>
            </div>
          </motion.div>

          {/* ── Right: photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            style={{ flex: '0 0 auto' }}
          >
            <div style={{
              position: 'relative',
              width: '260px',
              height: '260px',
            }}>
              {/* Glow ring behind photo */}
              <div style={{
                position: 'absolute',
                inset: '-3px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.6), rgba(139,92,246,0.3), transparent)',
                zIndex: 0,
              }} />
              {/* Photo */}
              <img
                src={heroImg}
                alt="Soham Singh"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '260px',
                  height: '260px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  border: '3px solid #0d0d14',
                  display: 'block',
                }}
              />
            </div>
          </motion.div>

        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span style={{ fontSize: '11px', color: '#52525b', letterSpacing: '0.08em', fontFamily: 'monospace' }}>scroll</span>
          <ArrowDown size={13} style={{ color: '#52525b' }} />
        </motion.div>
      </div>
    </section>
  );
}
