import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { PACKAGES, CATEGORIES, getWhatsAppLink } from '../constants';
import { ArrowRight, Star, ShieldCheck, Users, Clock, MessageCircle, MapPin } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

import { HOME_CONFIG } from '../config/home';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* MODERN CENTERED HERO SECTION WITH FLANKING ILLUSTRATIONS */}
      <section className="relative min-h-[95vh] flex items-center bg-white overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Illustration */}
            {/* Left Illustration */}
            <div className="hidden lg:flex lg:col-span-3 justify-center">
              <img 
                src={HOME_CONFIG.hero.illustrations.left} 
                alt="Travel Illustration Left" 
                className="w-full h-auto"
                loading="eager"
              />
            </div>

            {/* Center Typography Content */}
            <div className="col-span-1 lg:col-span-6 flex flex-col items-center text-center space-y-12 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none -z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(56,189,248,0.2)_0%,transparent_70%)] pointer-events-none -z-10" />
              
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-primary/5 px-6 py-2 rounded-full border border-primary/10 mx-auto">
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">{HOME_CONFIG.hero.badge}</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-navy leading-[1.05] tracking-tight">
                  {HOME_CONFIG.hero.title.line1} <br />
                  {HOME_CONFIG.hero.title.line2} <span className="text-primary relative inline-block">
                    with
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span> <br />
                  {HOME_CONFIG.hero.title.line3}
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto font-medium leading-relaxed">
                  {HOME_CONFIG.hero.description}
                </p>
              </div>

              <div className="w-full max-w-2xl bg-white p-3 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col md:flex-row items-center gap-2">
                <div className="flex-1 px-6 py-2 border-b md:border-b-0 md:border-r border-gray-100 w-full text-left">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Destination</p>
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} className="text-primary" />
                    <span className="text-navy font-bold text-sm">{HOME_CONFIG.hero.search.destination}</span>
                  </div>
                </div>
                <div className="flex-1 px-6 py-2 w-full text-left">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Travel Date</p>
                  <div className="flex items-center space-x-2">
                    <Clock size={14} className="text-primary" />
                    <span className="text-navy font-bold text-sm">{HOME_CONFIG.hero.search.dateLabel}</span>
                  </div>
                </div>
                <Link
                  to="/packages"
                  className="w-full md:w-auto bg-navy text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-xl active:scale-95 flex items-center justify-center space-x-2 group"
                >
                  <span>Explore Now</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            {/* Right Illustration */}
            <div className="hidden lg:flex lg:col-span-3 justify-center">
              <img 
                src={HOME_CONFIG.hero.illustrations.right} 
                alt="Travel Illustration Right" 
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,#0057D90D_0%,transparent_70%)] pointer-events-none -z-10" />
        <div className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] bg-[radial-gradient(circle,#0A25400D_0%,transparent_70%)] pointer-events-none -z-10" />
      </section>


      {/* PACKAGES SECTION */}
      <section className="py-20 md:py-32 bg-light-bg" id="packages">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 space-y-5">
            <h2 className="text-navy font-black text-4xl md:text-6xl tracking-tight leading-tight">Our Curated <br className="md:hidden" /> <span className="text-primary">Packages</span></h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">Extraordinary journeys hand-picked for the discerning traveler.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PACKAGES.slice(0, 3).map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white group flex flex-col h-full">
                <div className="relative h-72 overflow-hidden">
                  <OptimizedImage 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-5 py-2 rounded-2xl text-[10px] font-black text-primary shadow-xl uppercase tracking-[0.2em] z-20">
                    {pkg.category}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-navy group-hover:text-primary transition-colors leading-tight">{pkg.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 font-bold uppercase tracking-widest">
                      <div className="flex items-center space-x-2">
                        <Clock size={16} className="text-primary" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 flex-grow">
                    {pkg.highlights.slice(0, 3).map(h => (
                      <span key={h} className="text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-gray-400 px-3 py-1.5 rounded-xl border border-gray-100">
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="pt-8 flex items-center justify-between border-t border-gray-50">
                    <div>
                       <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-black mb-1">From</p>
                       <p className="text-3xl font-black text-primary">{pkg.price}</p>
                    </div>
                    <Link
                      to={`/package-details?id=${pkg.id}`}
                      className="bg-navy text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-primary transition-all shadow-xl active:scale-95"
                      aria-label="View Details"
                    >
                      <ArrowRight size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/packages" className="inline-flex items-center space-x-2 text-primary font-bold text-lg hover:space-x-4 transition-all">
              <span>View All Packages</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight">{HOME_CONFIG.whyChooseUs.title} <span className="text-primary">{HOME_CONFIG.whyChooseUs.titleAccent}</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {HOME_CONFIG.whyChooseUs.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {HOME_CONFIG.whyChooseUs.features.map((item, i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <div className="bg-light-bg w-16 h-16 rounded-2xl flex items-center justify-center">
                      {/* Mapping dynamic icons if available or static fallback */}
                      {i === 0 ? <ShieldCheck className="text-primary" size={32} /> : 
                       i === 1 ? <Users className="text-primary" size={32} /> : 
                       i === 2 ? <Star className="text-primary" size={32} /> : 
                       <Clock className="text-primary" size={32} />}
                    </div>
                    <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <OptimizedImage 
                src={HOME_CONFIG.whyChooseUs.image} 
                alt="Travel Experience" 
                className="rounded-[40px] shadow-2xl h-[600px]" 
              />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[radial-gradient(circle,#0057D91A_0%,transparent_70%)] pointer-events-none -z-10" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[radial-gradient(circle,#3B82F61A_0%,transparent_70%)] pointer-events-none -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="py-20 md:py-32 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 text-center md:text-left">
            <div className="space-y-5">
              <h2 className="text-navy font-black text-4xl md:text-6xl tracking-tight leading-tight">{HOME_CONFIG.destinations.title} <br className="md:hidden" /> <span className="text-primary">{HOME_CONFIG.destinations.titleAccent}</span></h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-xl font-medium">{HOME_CONFIG.destinations.description}</p>
            </div>
            <Link to="/gallery" className="bg-white text-navy px-10 py-4 rounded-[20px] font-black text-sm uppercase tracking-widest border border-gray-100 shadow-sm hover:border-primary hover:text-primary transition-all">Explore Gallery</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-8">
            {HOME_CONFIG.destinations.list.map((city) => (
              <Link to={`/packages?search=${city.name}`} key={city.name} className="group relative rounded-[32px] overflow-hidden aspect-[3/4] shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <OptimizedImage 
                  src={city.img} 
                  alt={city.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />
                <div className="absolute bottom-6 left-0 w-full text-center px-4 z-20">
                  <p className="text-white font-black text-xl md:text-2xl tracking-tight">{city.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-navy font-bold text-4xl tracking-tight">{HOME_CONFIG.testimonials.title} <span className="text-primary">{HOME_CONFIG.testimonials.titleAccent}</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOME_CONFIG.testimonials.list.map((t, i) => (
              <div key={i} className="bg-light-bg p-8 rounded-[32px] space-y-6 relative border border-white">
                <div className="flex text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic text-lg leading-relaxed">"{t.text}"</p>
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{t.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-12 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[40px] px-8 py-16 md:p-20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{HOME_CONFIG.cta.title} <br className="hidden md:block" /> {HOME_CONFIG.cta.titleLine2}</h2>
              <p className="text-white/80 text-xl max-w-xl">{HOME_CONFIG.cta.description}</p>
            </div>
            
            <div className="relative z-10">
              <a
                href={getWhatsAppLink(HOME_CONFIG.cta.whatsappMessage)}
                className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-navy hover:text-white transition-all shadow-2xl flex items-center space-x-4 group"
              >
                <MessageCircle size={28} />
                <span>Contact on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
