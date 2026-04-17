export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '28px 0',
      marginTop: '48px',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
      }}>
        <span style={{ fontSize: '12px', color: '#52525b' }}>
          © {new Date().getFullYear()} Soham Singh
        </span>
        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/sohxm135' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/singhsoham/' },
            { label: 'Email', href: 'mailto:singhsoham135@gmail.com' },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{ fontSize: '12px', color: '#52525b', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a1a1aa')}
              onMouseLeave={e => (e.currentTarget.style.color = '#52525b')}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
