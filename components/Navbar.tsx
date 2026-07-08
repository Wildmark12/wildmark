
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const navLinkClass = (path: string) =>
    `shrink-0 text-[10px] md:text-sm font-bold tracking-[0.2em] transition-colors ${isActive(path) ? 'text-[#00ff88]' : 'hover:text-[#00ff88] text-white/70'}`;

  return (
    <nav className={`nav-custom-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-custom-pill">
        <div className="nav-container">
          <Link to="/" className="nav-logo-link flex items-center justify-center shrink-0 group">
            <img 
              src="/logo.png" 
              alt="Wildmark Logo" 
              className="nav-logo transform-gpu antialiased" 
              style={{ WebkitFontSmoothing: 'antialiased' }}
            />
          </Link>
          
          <div className="nav-links-container overflow-x-auto no-scrollbar">
            <Link to="/" className={navLinkClass('/')}>
              HOME
            </Link>
            <Link to="/about" className={navLinkClass('/about')}>
              ABOUT
            </Link>
            <Link to="/works" className={navLinkClass('/works')}>
              WORKS
            </Link>
            <a 
              href="#contact" 
              className="shrink-0 text-[10px] md:text-sm font-bold tracking-[0.2em] hover:text-[#00ff88] text-white/70 transition-colors uppercase"
            >
              CONTACT US
            </a>
          </div>

          <button
            type="button"
            className="nav-menu-toggle"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} strokeWidth={2.4} /> : <Menu size={20} strokeWidth={2.4} />}
          </button>
        </div>

        <div className={`mobile-nav-panel ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={navLinkClass('/')}>
            HOME
          </Link>
          <Link to="/about" className={navLinkClass('/about')}>
            ABOUT
          </Link>
          <Link to="/works" className={navLinkClass('/works')}>
            WORKS
          </Link>
          <a
            href="#contact"
            className="shrink-0 text-[10px] md:text-sm font-bold tracking-[0.2em] hover:text-[#00ff88] text-white/70 transition-colors uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT US
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
