import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, MapPin, Mail, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

import { SITE_CONFIG } from '../config/site';

interface LayoutProps {
  children: React.ReactNode;
  transparentNavTheme?: 'light' | 'dark';
}

const Navbar: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'light' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = SITE_CONFIG.navigation;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-6 px-6 lg:px-10`}>
        <div className={`max-w-7xl mx-auto transition-all duration-700 border ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[2rem] py-3 px-8 border-white/20' : 'bg-transparent py-0 px-0 border-transparent'}`}>
          <div className="flex justify-between items-center">
            
            {/* Logo Section */}
            <Link to="/" className="shrink-0 relative group">
              <div className="h-10 md:h-12 w-auto transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                <img 
                  src="/mahadev logo 2.png" 
                  alt="Mahadeva Travel Hub" 
                  className="h-full w-auto object-contain" 
                />
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-bold hover:text-primary transition-all uppercase tracking-wider relative group ${isScrolled ? 'text-navy/90' : (theme === 'dark' ? 'text-white/90 drop-shadow-md' : 'text-navy/90')}`}
                >
                  {link.name}
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-1.5 group-hover:h-1.5"></span>
                </Link>
              ))}
            </div>

            {/* Right Side - Call Button */}
            <div className="hidden lg:flex items-center">
              <a 
                href={`tel:${SITE_CONFIG.contact.phone}`} 
                className={`flex items-center space-x-3 px-5 py-2 rounded-full transition-all duration-500 border border-gray-100/50 hover:border-primary/30 hover:bg-white group ${isScrolled ? 'bg-navy/5' : 'bg-white/50 backdrop-blur-sm shadow-sm'}`}
              >
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center transition-transform group-hover:rotate-[15deg]">
                  <Phone size={16} />
                </div>
                <div className="text-left pr-2">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-1">Inquiry</p>
                  <p className="text-sm font-black text-navy tracking-wide leading-none">{SITE_CONFIG.contact.phone}</p>
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-full transition-all ${isScrolled ? 'bg-navy text-white shadow-lg' : 'bg-white/80 backdrop-blur-md text-navy shadow-sm'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>



      {/* Modern Immersive Menu - Sliding Animation */}
      <div 
        className={`fixed inset-0 z-[150] lg:hidden transition-all duration-500 ease-in-out ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        {/* Backdrop overlay */}
        <div 
          className={`absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Sliding Menu Panel */}
        <div className={`absolute top-0 right-0 w-[85%] h-full bg-navy shadow-2xl transition-transform duration-500 ease-out flex flex-col px-8 py-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Menu Header */}
          <div className="flex justify-between items-center mb-16">
            <div className="h-10 w-auto flex items-center">
              <img src="/mahadev logo 2.png" alt="Mahadeva Travel Hub" className="h-full w-auto object-contain" />
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center border border-white/10 active:scale-90"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-grow flex flex-col justify-center space-y-8">
            {navLinks.map((link, i) => (
              <div 
                key={link.name}
                style={{ transitionDelay: `${isOpen ? i * 50 : 0}ms` }}
                className={`transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
              >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center"
                  >
                    <span className="text-4xl font-bold text-white hover:text-primary transition-all duration-300 tracking-tighter uppercase">
                      {link.name}
                    </span>
                  </Link>
              </div>
            ))}
          </nav>

          {/* Menu Footer */}
          <div className={`mt-auto pt-8 border-t border-white/10 transition-all duration-700 delay-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href={`tel:${SITE_CONFIG.contact.phone}`} className="flex items-center space-x-4 mb-8 active:opacity-70 transition-opacity">
              <Phone size={32} className="text-white" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-white/60 mb-0.5">Call Now</p>
                <p className="text-xl font-bold text-white tracking-wide">{SITE_CONFIG.contact.phone}</p>
              </div>
            </a>
            <Link 
              to="/packages"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-[#1A98FF] hover:bg-[#007AFF] text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-all"
            >
              Book A Trip
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
            {/* Brand & Social */}
            <div className="space-y-8">
              <div className="h-14 w-auto flex items-center">
                <img src="/mahadev logo 2.png" alt="Mahadeva Travel Hub" className="h-full w-auto object-contain" />
              </div>
              <div className="flex space-x-5">
                <a href={SITE_CONFIG.social.instagram} className="text-white/40 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <p className="text-white font-bold text-sm uppercase tracking-widest mb-8">Navigation</p>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-gray-400 text-sm">
                {SITE_CONFIG.navigation.map(link => (
                  <li key={link.name}><Link to={link.href} className="hover:text-primary transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>

            {/* Direct Contact */}
            <div>
              <p className="text-white font-bold text-sm uppercase tracking-widest mb-8">Get In Touch</p>
              <ul className="space-y-6 text-gray-400 text-sm">
                <li className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone size={16} className="text-primary group-hover:text-white" />
                  </div>
                  <span>{SITE_CONFIG.contact.phone}</span>
                </li>
                <li className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail size={16} className="text-primary group-hover:text-white" />
                  </div>
                  <span className="break-all">{SITE_CONFIG.contact.email}</span>
                </li>
              </ul>
            </div>
          </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name} {SITE_CONFIG.tagline}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<LayoutProps> = ({ children, transparentNavTheme }) => {
  return (
    <div className="min-h-screen flex flex-col pt-0 selection:bg-primary/20 selection:text-primary overflow-x-hidden w-full relative">
      <Navbar theme={transparentNavTheme} />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
