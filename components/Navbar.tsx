
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

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
            <Link 
              to="/" 
              className={`shrink-0 text-[10px] md:text-sm font-bold tracking-[0.2em] transition-colors ${isActive('/') ? 'text-[#00ff88]' : 'hover:text-[#00ff88] text-white/70'}`}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className={`shrink-0 text-[10px] md:text-sm font-bold tracking-[0.2em] transition-colors ${isActive('/about') ? 'text-[#00ff88]' : 'hover:text-[#00ff88] text-white/70'}`}
            >
              ABOUT
            </Link>
            <Link 
              to="/works" 
              className={`shrink-0 text-[10px] md:text-sm font-bold tracking-[0.2em] transition-colors ${isActive('/works') ? 'text-[#00ff88]' : 'hover:text-[#00ff88] text-white/70'}`}
            >
              WORKS
            </Link>
            <a 
              href="#contact" 
              className="shrink-0 text-[10px] md:text-sm font-bold tracking-[0.2em] hover:text-[#00ff88] text-white/70 transition-colors uppercase"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
