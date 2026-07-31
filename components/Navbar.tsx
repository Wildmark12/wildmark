
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const contactSection = document.getElementById('contact');

      if (!contactSection) {
        setIsContactActive(false);
        return;
      }

      const rect = contactSection.getBoundingClientRect();
      setIsContactActive(rect.top <= window.innerHeight * 0.65 && rect.bottom > 120);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => !isContactActive && location.pathname === path;
  const navLinkClass = (path: string) =>
    `shrink-0 text-[10px] md:text-sm font-bold tracking-[0.2em] transition-colors ${isActive(path) ? 'text-[#00ff88]' : 'hover:text-[#00ff88] text-white/70'}`;
  const contactLinkClass = `shrink-0 text-[10px] md:text-sm font-bold tracking-[0.2em] transition-colors uppercase ${isContactActive ? 'text-[#00ff88]' : 'hover:text-[#00ff88] text-white/70'}`;
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

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
            <button 
              type="button"
              className={contactLinkClass}
              onClick={scrollToContact}
            >
              CONTACT US
            </button>
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
          <button
            type="button"
            className={contactLinkClass}
            onClick={scrollToContact}
          >
            CONTACT US
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
