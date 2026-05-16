import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { PACKAGES, getWhatsAppLink } from '../constants';
import { Clock, MapPin, CheckCircle, XCircle, MessageCircle, Star, Phone, Check, Bus, Users, ShieldCheck } from 'lucide-react';
import { VEHICLES } from '../config/vehicles';

const PackageDetails: React.FC = () => {
  const [pkg, setPkg] = useState<any>(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    const foundPkg = PACKAGES.find(p => p.id === id) || PACKAGES[0];
    setPkg(foundPkg);
    window.scrollTo(0, 0);
  }, [id]);

  if (!pkg) return null;

  return (
    <Layout transparentNavTheme="dark">
      {/* 1. HERO SECTION: Blending Blurred Image */}
      <section className="relative pt-32 pb-32 min-h-[85vh] flex items-center overflow-hidden">
        {/* Blurred Background Image matching package */}
        <div className="absolute inset-0 z-0 bg-navy">
          <img src={pkg.image} alt="Background" className="w-full h-full object-cover scale-105 blur-sm opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/70 to-[#F8FAFC]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: Typography */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full shadow-lg">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">{pkg.category} Signature</span>
              </div>

              <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-serif leading-[1.05] tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                {pkg.title}
              </h1>

              <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                {pkg.description.split('.')[0]}. Experience the ultimate luxury{pkg.destination && pkg.destination !== 'Multiple' ? ` in ${pkg.destination}` : ' with us'}.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                {[
                  { label: 'Duration', value: pkg.duration, icon: <Clock size={18} /> },
                  { label: 'Location', value: pkg.destination || 'Multiple', icon: <MapPin size={18} /> },
                  { label: 'Standard', value: 'Premium', icon: <Star size={18} fill="currentColor" /> },
                ].map((item, idx) => (
                  <div key={idx} className="bg-navy/40 backdrop-blur-md border border-white/10 px-6 py-4 rounded-3xl flex items-center space-x-4 shadow-xl">
                    <div className="text-primary">{item.icon}</div>
                    <div className="text-left">
                      <p className="text-[9px] font-black text-white/50 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                      <p className="text-sm font-black text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Vehicle Card Only */}
            <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex justify-center lg:justify-end">
               <div className="w-full sm:w-4/5 lg:w-full rounded-[3rem] overflow-hidden border-8 border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative transform hover:scale-[1.03] transition-transform duration-700 animate-float">
                 <img 
                   src={VEHICLES[0].image} 
                   alt="Premium Transport" 
                   className="w-full aspect-video md:aspect-[4/3] object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                    <p className="text-primary text-xs font-black uppercase tracking-[0.2em] leading-none mb-2 drop-shadow-md">Signature Fleet</p>
                    <h3 className="text-white text-3xl md:text-4xl font-black leading-tight drop-shadow-xl">{VEHICLES[0].name}</h3>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DETAILS SECTION */}
      <section className="py-20 bg-[#F8FAFC] bg-topo relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-24">

              {/* Description */}
              <div className="relative">
                <div className="absolute -left-10 top-0 text-[10rem] font-black text-primary/5 select-none leading-none -z-10">01</div>
                <div className="space-y-8">
                  <h2 className="text-5xl font-black text-navy tracking-tighter">The Journey <span className="text-primary italic font-serif">Soul.</span></h2>
                  <div className="bg-white/90 backdrop-blur-md p-10 md:p-12 rounded-[3.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-[5rem] -z-10 group-hover:scale-150 transition-transform duration-700"></div>
                    <p className="text-gray-600 leading-relaxed text-xl md:text-2xl font-medium italic font-serif">
                      "{pkg.description}"
                    </p>

                    <div className="flex flex-wrap gap-3 pt-10">
                      {pkg.highlights.map((h: string, i: number) => (
                        <div key={i} className="flex items-center space-x-3 px-6 py-3 bg-[#F0F7FF] text-navy border border-primary/10 rounded-2xl shadow-sm hover:bg-primary hover:text-white transition-all cursor-default group/tag">
                          <Check size={18} className="text-primary group-hover/tag:text-white transition-colors" />
                          <span className="font-black text-xs uppercase tracking-widest">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Itinerary / Attractions */}
              <div className="space-y-12">
                <h2 className="text-4xl font-black text-navy tracking-tighter flex items-center gap-4">
                  <span className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center text-xl shadow-lg">02</span>
                  Must-See Wonders
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {pkg.attractions?.map((attraction: string, i: number) => (
                    <div key={i} className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 flex items-center space-x-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-[#F0F7FF] flex items-center justify-center text-primary text-2xl font-black shrink-0 group-hover:bg-primary group-hover:text-white transition-colors shadow-inner">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-navy group-hover:text-primary transition-colors">{attraction}</h4>
                        <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">Unforgettable Spot</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions Block */}
              <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center text-xl font-black shadow-lg">03</div>
                   <div>
                     <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tighter">All-Inclusive Comfort</h2>
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Everything you need for a signature experience</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Included */}
                  <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
                    <h3 className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-8 flex items-center gap-2">
                       <CheckCircle size={18} /> Included
                    </h3>
                    <ul className="space-y-5">
                      {['Premium Accommodation', 'Daily Gourmet Meals', 'Private Mahadeva Transport', 'Dedicated Travel Concierge', 'All Permits & Entry Fees'].map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-navy group">
                          <Check size={18} className="text-primary mt-0.5 shrink-0" strokeWidth={3} />
                          <span className="font-bold text-sm md:text-base leading-tight group-hover:text-primary transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not Included */}
                  <div className="bg-transparent p-8 md:p-10 rounded-[2.5rem] border-2 border-dashed border-gray-200">
                    <h3 className="text-gray-400 font-black uppercase tracking-[0.2em] text-xs mb-8 flex items-center gap-2">
                       <XCircle size={18} /> Not Included
                    </h3>
                    <ul className="space-y-5">
                      {['Personal Shopping', 'Optional Adventure Activities', 'Specific Insurance Upgrade', 'Extra Alcoholic Beverages'].map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-gray-400">
                          <XCircle size={18} className="text-gray-300 mt-0.5 shrink-0" strokeWidth={2} />
                          <span className="font-medium text-sm md:text-base leading-tight line-through decoration-gray-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white p-10 rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 space-y-10 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>

                  <div className="text-center space-y-4 relative z-10">
                    <div className="w-20 h-20 bg-[#F0F7FF] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner border border-primary/10">
                      <Bus size={36} className="text-primary" />
                    </div>
                    <h3 className="text-4xl font-black text-navy tracking-tight">Ready to <span className="text-primary italic font-serif">Ride?</span></h3>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Secure your signature slot</p>
                  </div>

                  <div className="space-y-4 relative z-10">
                    <a
                      href={getWhatsAppLink(`Hi! I want to book the ${pkg.title} package.`)}
                      className="w-full bg-primary text-white py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-navy transition-all flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
                    >
                      <MessageCircle size={22} />
                      <span>Book on WhatsApp</span>
                    </a>
                    <a
                      href={`tel:+918943491937`}
                      className="w-full bg-[#F0F7FF] text-navy py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-navy hover:text-white transition-all flex items-center justify-center space-x-3 shadow-sm active:scale-95 border border-primary/10"
                    >
                      <Phone size={20} />
                      <span>Direct Line</span>
                    </a>
                  </div>

                  <div className="pt-8 border-t border-gray-100 flex items-center justify-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest relative z-10">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm"><img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="avatar" /></div>)}
                    </div>
                    <span>Verified Service</span>
                  </div>
                </div>

                {/* Custom Tour CTA */}
                <Link to="/custom-tour" className="group block bg-navy p-8 rounded-[3rem] text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all relative overflow-hidden border border-white/10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-0"></div>
                  <h4 className="font-black text-white text-2xl uppercase tracking-tighter relative z-10">Want it Unique?</h4>
                  <p className="text-primary text-[10px] font-black uppercase tracking-widest mt-2 relative z-10">Customize Itinerary</p>
                  <div className="mt-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto text-white group-hover:bg-primary transition-colors backdrop-blur-sm">
                    <MapPin size={20} />
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PackageDetails;
