
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050a1b]/90 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-[#050a1b]/70 md:bg-transparent backdrop-blur-md md:backdrop-blur-0 py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <Link to="/" className="flex items-center justify-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Wildmark Logo" 
            className="w-[min(78vw,330px)] md:w-auto md:h-40 h-auto object-contain transform-gpu antialiased group-hover:scale-105 transition-transform" 
            style={{ WebkitFontSmoothing: 'antialiased' }}
          />
        </Link>
        
        <div className="flex w-full md:w-auto items-center justify-center gap-4 sm:gap-6 md:gap-10 overflow-x-auto no-scrollbar pb-1 md:pb-0">
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
    </nav>
  );
};

export default Navbar;
