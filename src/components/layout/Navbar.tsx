import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s',
      background: scrolled ? 'rgba(13,13,20,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
    }}>
      <nav style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 24px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a href="#" style={{
          fontSize: '14px',
          fontWeight: 600,
          color: '#e4e4e7',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}>
          soham.me
        </a>

        {/* Desktop */}
        <ul style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontSize: '13px',
                  color: '#71717a',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e4e4e7')}
                onMouseLeave={e => (e.currentTarget.style.color = '#71717a')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#71717a', padding: '4px', display: 'none' }}
          className="mobile-toggle"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            style={{
              background: 'rgba(13,13,20,0.97)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              padding: '12px 24px 20px',
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{ fontSize: '14px', color: '#a1a1aa', textDecoration: 'none' }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
