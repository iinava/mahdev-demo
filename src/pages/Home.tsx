import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { PACKAGES, CATEGORIES, getWhatsAppLink } from '../constants';
import { ArrowRight, Star, ShieldCheck, Users, Clock, MessageCircle, MapPin, Bus, Facebook, Instagram, Check, Tent, Binoculars, Map, Car, Ticket, Building2 } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import { VEHICLES } from '../config/vehicles';
import OfferModal from '../components/OfferModal';
import CoolShape from '../components/CoolShape';

import { HOME_CONFIG } from '../config/home';
import { SITE_CONFIG } from '../config/site';
import { GALLERY_CONFIG } from '../config/gallery';

const Home: React.FC = () => {
  return (
    <Layout>
      <OfferModal />
      {/* MODERN CENTERED HERO SECTION WITH FLANKING ILLUSTRATIONS */}
      {/* MAHADEVA SIGNATURE HERO */}
      <section className="relative min-h-[100vh] flex items-center bg-light-bg overflow-hidden pt-32 pb-20">
        {/* Artistic Background Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
          <span className="text-[20vw] font-black text-navy/[0.02] leading-none whitespace-nowrap uppercase tracking-tighter">
            MAHADEVA SIGNATURE
          </span>
        </div>

        {/* Dynamic Abstract Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[50%] blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-400/5 rounded-r-[50%] blur-3xl -z-10 animate-pulse-slow"></div>

        {/* Cool Abstract Shapes */}
        <div className="absolute top-32 left-[5%] opacity-60 animate-float" style={{ animationDelay: '0.5s' }}>
          <CoolShape className="w-16 h-16 md:w-24 md:h-24 rotate-12" />
        </div>
        <div className="absolute bottom-24 lg:bottom-40 right-[5%] lg:right-[42%] opacity-40 animate-float" style={{ animationDelay: '2s' }}>
          <CoolShape className="w-20 h-20 md:w-32 md:h-32 -rotate-12" />
        </div>
        <div className="absolute top-[20%] right-[10%] lg:right-[8%] opacity-50 animate-float" style={{ animationDelay: '1.2s' }}>
          <CoolShape className="w-12 h-12 md:w-16 md:h-16 rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Image Section - Visible on Mobile (Appears first or second depending on design) */}
            <div className="lg:col-span-5 lg:order-2 relative group">
              {/* Main Image with decorative border */}
              <div className="relative z-10 w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border-4 lg:border-8 border-white">
                <img
                  src="/hero/buses.png"
                  alt="Mahadeva Luxury"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent lg:hidden"></div>

                {/* Mobile Text Overlay (Optional, but let's keep text below for clarity) */}
              </div>

              {/* Secondary Floating Image - Repositioned for Mobile */}
              <div className="absolute -left-4 -bottom-6 sm:-left-6 sm:-bottom-10 lg:-left-20 lg:-bottom-16 w-[35%] sm:w-[40%] lg:w-1/2 aspect-square rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden border-4 lg:border-8 border-white shadow-2xl z-20 animate-float">
                <img
                  src="/hero/illustration mahadeva.png"
                  alt="Explore More"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Luxury Badge - Scaled for Mobile */}
              <div className="absolute -right-4 top-8 sm:-right-8 sm:top-12 z-30 w-24 h-24 sm:w-32 sm:h-32 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-center p-2 sm:p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-full h-full rounded-full border border-white/20 flex flex-col items-center justify-center">
                  <span className="text-[8px] sm:text-[10px] font-black text-navy/60 uppercase tracking-tighter">Premium</span>
                  <span className="text-xl sm:text-2xl font-black text-primary leading-none">Hub</span>
                  <div className="w-4 h-0.5 bg-navy/20 my-1"></div>
                  <span className="text-[6px] sm:text-[8px] font-bold text-navy/40 uppercase tracking-widest">Selection</span>
                </div>
              </div>
            </div>

            {/* Typography & Search Section */}
            <div className="lg:col-span-7 lg:order-1 space-y-10 lg:space-y-12 relative text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-navy/5 px-5 py-2 rounded-full border border-navy/5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-navy/60 leading-none">Crafting Memories Since 2024</span>
                </div>

                <h1 className="text-navy text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-serif leading-[1] sm:leading-[0.95] tracking-tight">
                  Escape the <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-primary/80 relative inline-block">
                    Ordinary.
                    <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3 sm:h-4 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                    </svg>
                  </span>
                </h1>

                <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  Experience the pinnacle of travel with Mahadeva. We curate soul-stirring journeys designed specifically for your rhythm.
                </p>
              </div>

              {/* Floating Glass CTA Area - Responsive Layout */}
              <div className="bg-white/60 backdrop-blur-xl border border-white p-2 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] flex flex-col sm:flex-row items-center gap-2 group max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center space-x-4 px-6 py-4 w-full sm:w-auto">
                  <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Explore</p>
                    <p className="text-sm font-black text-navy">Signature Packages</p>
                  </div>
                </div>
                <div className="h-px w-full sm:h-10 sm:w-px bg-gray-200"></div>
                <Link
                  to="/packages"
                  className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-[1.5rem] sm:rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-navy transition-all shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-3"
                >
                  <span>Start Journey</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Mobile Social Bar (Horizontal) */}
              <div className="flex lg:hidden items-center justify-center space-x-6 pt-4">
                <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary transition-all"><Instagram size={18} /></a>
                <a href={getWhatsAppLink('Hi Mahadeva Travel Hub!')} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary transition-all"><MessageCircle size={18} /></a>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* CATEGORIES / QUICK LINKS SECTION */}
      <section
        className="py-12 bg-white border-b border-gray-100 relative z-20 shadow-sm"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, rgba(0, 87, 217, 0.05), rgba(0, 87, 217, 0.05) 1px, transparent 1px, transparent 6px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 items-center">
            {[
              { icon: <Building2 size={36} strokeWidth={1.5} />, label: 'Resorts' },
              { icon: <Tent size={36} strokeWidth={1.5} />, label: 'Camping' },
              { icon: <Binoculars size={36} strokeWidth={1.5} />, label: 'Sightseeing' },
              { icon: <Map size={36} strokeWidth={1.5} />, label: 'Treks & Hikes' },
              { icon: <Car size={36} strokeWidth={1.5} />, label: 'Cab Services' },
              { icon: <Ticket size={36} strokeWidth={1.5} />, label: 'Tickets' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-3 group cursor-pointer hover:-translate-y-1 transition-transform duration-300 w-24">
                <div className="text-navy group-hover:text-primary transition-colors">
                  {item.icon}
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-navy transition-colors text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
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

                  <div className="pt-8 flex justify-end border-t border-gray-50">
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
                className="rounded-[32px] md:rounded-[40px] shadow-2xl h-[350px] md:h-[450px] lg:h-[600px] w-full object-cover"
              />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[radial-gradient(circle,#0057D91A_0%,transparent_70%)] pointer-events-none -z-10" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[radial-gradient(circle,#3B82F61A_0%,transparent_70%)] pointer-events-none -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* OUR FLEET SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white via-[#F9FBFF] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center space-x-3 bg-white px-5 py-1.5 rounded-full border border-gray-100 shadow-sm mx-auto">
              <Bus size={14} className="text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-navy">Custom Fleet</span>
            </div>
            <h2 className="text-navy font-black text-4xl md:text-6xl tracking-tight leading-tight">Meet Our <br className="md:hidden" /> <span className="text-primary">Beasts</span> 🚐</h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">Travel in style with our fleet of custom-engineered Mahadeva vehicles — each one with a name, a story, and a soul.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VEHICLES.slice(0, 3).map((vehicle, i) => {
              const rotations = ['rotate-1', '-rotate-1', 'rotate-1'];
              return (
                <div
                  key={vehicle.id}
                  className={`group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform ${rotations[i]} hover:rotate-0 hover:-translate-y-2 border border-gray-100`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-white/60">{vehicle.nickname}</p>
                        <h3 className="text-2xl font-black text-white tracking-tight">{vehicle.name}</h3>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl">
                        {vehicle.capacity}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-primary">
                      <Bus size={12} />
                      <span>{vehicle.type}</span>
                    </div>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-2">{vehicle.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Remaining vehicles as a compact row */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {VEHICLES.slice(3).map((vehicle, i) => (
              <div
                key={vehicle.id}
                className={`group flex items-center space-x-5 bg-white p-4 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 transform ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 hover:scale-[1.02]`}
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover object-bottom group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="space-y-1 min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-widest text-primary">{vehicle.nickname}</p>
                  <h4 className="text-lg font-black text-navy truncate">{vehicle.name}</h4>
                  <p className="text-xs text-gray-400 font-bold">{vehicle.type} · {vehicle.capacity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-navy text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary transition-all shadow-xl active:scale-95"
            >
              <Bus size={20} />
              <span>Request a Vehicle</span>
            </Link>
          </div>
        </div>
      </section>



      {/* GALLERY MARQUEE */}
      <section className="py-16 bg-light-bg overflow-hidden border-t border-b border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-navy font-bold text-3xl md:text-4xl tracking-tight">Glimpses of <span className="text-primary">Joy</span> 📸</h2>
          <p className="text-gray-500 mt-3 font-medium">Real moments from our unforgettable journeys.</p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full flex overflow-x-auto md:overflow-hidden snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Gradient Masks for smooth fade at edges */}
          <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-light-bg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-light-bg to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-marquee-desktop space-x-4 md:space-x-6 px-4 md:px-3 py-4 md:py-0">
            {[...GALLERY_CONFIG.images, ...GALLERY_CONFIG.images].map((img, i) => (
              <div key={i} className="snap-center w-64 md:w-80 h-48 md:h-60 rounded-2xl md:rounded-[32px] overflow-hidden shrink-0 shadow-sm border border-gray-100 relative group cursor-pointer">
                <OptimizedImage
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold tracking-wider text-sm md:text-base translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</span>
                </div>
              </div>
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
