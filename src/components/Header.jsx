import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/portfolio.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '13px',
    fontWeight: 600,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.75)',
    textDecoration: 'none',
    position: 'relative',
    transition: 'color 0.3s ease',
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(2, 6, 8, 0.92)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(14px)' : 'none',
        borderBottom: isScrolled
          ? '1px solid rgba(255,255,255,0.07)'
          : '1px solid transparent',
        padding: isScrolled ? '14px 0' : '20px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          {/* <img src="Images/darkamit.png" alt="Amit Kumar Logo" style={{ height: '36px', display: 'block' }} /> */}
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hdr-desktop-nav">
          {[
            { label: 'Home', to: '/' },
            { label: 'Experience', to: '/experience' },
            { label: 'Projects', to: '/projects' },
          ].map(({ label, to }) => (
            <Link key={to} to={to} style={navLinkStyle}
              onMouseEnter={e => { e.currentTarget.style.color = '#1da1f2'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
            >
              {label}
              {/* Underline bar */}
              <span style={{
                position: 'absolute', bottom: '-4px', left: 0,
                height: '1.5px', width: '0%', background: '#1da1f2',
                transition: 'width 0.3s ease',
              }} className="hdr-underline" />
            </Link>
          ))}

          {/* Contact CTA */}
          <a
            href="https://wa.me/919315264682"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 20px', borderRadius: '50px',
              background: 'rgba(29,161,242,0.10)',
              border: '1px solid rgba(29,161,242,0.35)',
              color: '#1da1f2',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '12px', fontWeight: 700,
              letterSpacing: '1px', textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(29,161,242,0.20)';
              e.currentTarget.style.boxShadow = '0 0 18px rgba(29,161,242,0.35)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(29,161,242,0.10)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = '';
            }}
          >
            Hire Me
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            flexDirection: 'column', justifyContent: 'space-between',
            width: '24px', height: '18px',
            background: 'transparent', border: 'none', cursor: 'pointer',
            padding: 0,
          }}
          className="hdr-hamburger"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '100%', height: '2px',
              background: 'rgba(255,255,255,0.85)',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform:
                i === 0 && isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' :
                  i === 1 && isMenuOpen ? 'scaleX(0)' :
                    i === 2 && isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              opacity: i === 1 && isMenuOpen ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div style={{
        maxHeight: isMenuOpen ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
        background: 'rgba(2,6,8,0.97)',
        borderTop: isMenuOpen ? '1px solid rgba(255,255,255,0.07)' : 'none',
      }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '16px 24px 20px' }}>
          {[
            { label: 'Home', to: '/' },
            { label: 'Experience', to: '/experience' },
            { label: 'Projects', to: '/projects' },
          ].map(({ label, to }) => (
            <Link
              key={to} to={to}
              onClick={() => setIsMenuOpen(false)}
              style={{
                ...navLinkStyle,
                padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            style={{
              ...navLinkStyle,
              marginTop: '10px',
              color: '#1da1f2',
            }}
          >
            Hire Me ↗
          </a>
        </nav>
      </div>

      {/* Inline responsive style to show/hide hamburger */}
      <style>{`
        @media (max-width: 768px) {
          .hdr-desktop-nav { display: none !important; }
          .hdr-hamburger   { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;