
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050a1b]/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Wildmark Logo" 
            className="h-32 md:h-40 w-auto object-contain transform-gpu antialiased group-hover:scale-105 transition-transform" 
            style={{ WebkitFontSmoothing: 'antialiased' }}
          />
        </Link>
        
        <div className="flex items-center gap-6 md:gap-10">
          <Link 
            to="/" 
            className={`text-[10px] md:text-sm font-bold tracking-[0.2em] transition-colors ${isActive('/') ? 'text-[#00ff88]' : 'hover:text-[#00ff88] text-white/70'}`}
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            className={`text-[10px] md:text-sm font-bold tracking-[0.2em] transition-colors ${isActive('/about') ? 'text-[#00ff88]' : 'hover:text-[#00ff88] text-white/70'}`}
          >
            ABOUT
          </Link>
          <Link 
            to="/works" 
            className={`text-[10px] md:text-sm font-bold tracking-[0.2em] transition-colors ${isActive('/works') ? 'text-[#00ff88]' : 'hover:text-[#00ff88] text-white/70'}`}
          >
            WORKS
          </Link>
          <a 
            href="#contact" 
            className="text-[10px] md:text-sm font-bold tracking-[0.2em] hover:text-[#00ff88] text-white/70 transition-colors uppercase"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
