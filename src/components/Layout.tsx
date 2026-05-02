import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, MapPin, Mail, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

import { SITE_CONFIG } from '../config/site';

interface LayoutProps {
  children: React.ReactNode;
}

const Navbar: React.FC = () => {
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
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-out will-change-transform ${isScrolled ? 'py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`relative flex justify-between items-center transition-all duration-300 rounded-2xl will-change-transform ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.06)] py-3 px-8' : 'bg-transparent py-0 px-0'}`}>
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-3 group relative z-50">
              <div className="bg-navy p-2 rounded-xl shadow-lg shadow-navy/20 group-hover:bg-primary transition-all duration-500 group-hover:scale-105 active:scale-95">
                <span className="text-white font-bold text-lg leading-none tracking-tighter">JM</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-sm tracking-tight leading-none transition-colors duration-500 ${isScrolled ? 'text-navy' : 'text-navy'}`}>{SITE_CONFIG.name}</span>
                <span className="text-[6px] uppercase font-bold tracking-[0.4em] text-primary mt-1">{SITE_CONFIG.title}</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 text-[10px] uppercase font-bold tracking-[0.2em] transition-all duration-300 rounded-lg ${isScrolled ? 'text-navy/60 hover:text-navy hover:bg-navy/5' : 'text-navy/60 hover:text-navy hover:bg-navy/5'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-[1px] h-4 bg-gray-200 mx-4" />
              <a
                href={getWhatsAppLink(`Hello ${SITE_CONFIG.name}, I would like to enquire.`)}
                className="bg-navy text-white px-6 py-2.5 rounded-xl font-bold text-[9px] uppercase tracking-widest hover:bg-primary transition-all shadow-lg shadow-navy/10 flex items-center space-x-2 active:scale-95 ml-4"
              >
                <MessageCircle size={14} className="text-primary" />
                <span>Concierge</span>
              </a>
            </div>

            {/* Mobile Right Controls */}
            <div className="lg:hidden flex items-center space-x-3 relative z-50">
              <a 
                href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`} 
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isScrolled ? 'bg-navy/5 text-navy' : 'bg-white/10 text-navy backdrop-blur-md shadow-sm border border-navy/5'}`}
              >
                <Phone size={16} />
              </a>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all duration-500 ${isOpen ? 'bg-navy text-white' : isScrolled ? 'bg-navy text-white shadow-lg' : 'bg-white shadow-lg text-navy border border-gray-100'}`}
                aria-label="Toggle menu"
              >
                <span className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 w-3 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
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
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-xl">
                <span className="text-white font-bold text-lg leading-none tracking-tighter">JM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight leading-none text-white">{SITE_CONFIG.name}</span>
                <span className="text-[6px] uppercase font-bold tracking-[0.4em] text-primary mt-1">{SITE_CONFIG.title}</span>
              </div>
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
            <div className="space-y-4">
              <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Connect with us</p>
              <a href={getWhatsAppLink(`Hello ${SITE_CONFIG.name}`)} className="text-lg font-bold text-white flex items-center space-x-3 active:scale-95 transition-transform">
                <MessageCircle size={18} className="text-primary" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <span className="text-white font-bold text-xl leading-none">JM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">{SITE_CONFIG.name}</span>
                <span className="text-[10px] uppercase tracking-widest text-primary">{SITE_CONFIG.tagline}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              <a href={SITE_CONFIG.social.facebook} className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href={SITE_CONFIG.social.instagram} className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href={SITE_CONFIG.social.twitter} className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              {SITE_CONFIG.navigation.map(link => (
                <li key={link.name}><Link to={link.href} className="hover:text-primary transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-6">Popular Categories</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              {SITE_CONFIG.categories.map(cat => (
                <li key={cat.name}><Link to={cat.href} className="hover:text-primary transition-colors">{cat.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span>{SITE_CONFIG.contact.email}</span>
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

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col pt-0 selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-grow overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
