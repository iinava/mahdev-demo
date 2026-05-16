import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { PACKAGES, getWhatsAppLink } from '../constants';
import { Clock, MapPin, CheckCircle, XCircle, MessageCircle, Star, Phone, Check, Bus } from 'lucide-react';
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
    <Layout>
      {/* 1. HERO SECTION: Dark, Readable, Immersive */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Typography */}
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
               <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">{pkg.category} Signature</span>
               </div>

               <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-serif leading-[1.1] tracking-tight">
                 {pkg.title}
               </h1>

               <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                 {pkg.description.split('.')[0]}. Experience the ultimate luxury in {pkg.destination}.
               </p>

               <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  {[
                    { label: 'Duration', value: pkg.duration, icon: <Clock size={18} /> },
                    { label: 'Location', value: pkg.destination || 'Multiple', icon: <MapPin size={18} /> },
                    { label: 'Standard', value: '5 Star', icon: <Star size={18} fill="currentColor" /> },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-3xl flex items-center space-x-4">
                       <div className="text-primary">{item.icon}</div>
                       <div className="text-left">
                         <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                         <p className="text-sm font-black text-white">{item.value}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Right: Composite Image (Destination + Vehicle) */}
            <div className="lg:col-span-6 relative mt-16 lg:mt-0 pb-8 sm:pb-12 lg:pb-0">
               {/* Main Destination Image */}
               <div className="w-full aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
                 <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
               </div>

               {/* Vehicle Overlay */}
               <div className="absolute -bottom-8 -left-4 sm:-bottom-12 sm:-left-12 w-[85%] sm:w-[75%] rounded-[2rem] overflow-hidden border-[6px] border-navy shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-20 bg-navy transform hover:-translate-y-2 transition-transform duration-500">
                 <img 
                   src={VEHICLES[0].image} 
                   alt="Mahadeva Beast" 
                   className="w-full aspect-[16/10] object-cover"
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-navy via-navy/80 to-transparent pt-16 pb-4 px-6 flex items-end">
                    <div>
                      <p className="text-primary text-[10px] font-black uppercase tracking-widest leading-none mb-1">Included</p>
                      <p className="text-white text-sm sm:text-base font-bold leading-tight">Premium Transport</p>
                    </div>
                 </div>
               </div>
               
               {/* Dashed Border Decoration */}
               <div className="absolute -inset-6 border-2 border-primary/20 border-dashed rounded-[4rem] -z-10 animate-[spin_40s_linear_infinite] hidden sm:block"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DETAILS SECTION: Topo Pattern, No empty white space */}
      <section className="py-24 bg-[#F8FAFC] bg-topo relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-24">
              
              {/* Description */}
              <div className="relative">
                <div className="absolute -left-10 top-0 text-[10rem] font-black text-primary/5 select-none leading-none -z-10">01</div>
                <div className="space-y-8">
                  <h2 className="text-5xl font-black text-navy tracking-tighter">The Journey <span className="text-primary italic">Soul.</span></h2>
                  <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] border border-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] -z-10 group-hover:scale-150 transition-transform duration-700"></div>
                    <p className="text-gray-500 leading-relaxed text-xl md:text-2xl font-medium italic">
                      "{pkg.description}"
                    </p>
                    
                    <div className="flex flex-wrap gap-3 pt-10">
                      {pkg.highlights.map((h: string, i: number) => (
                        <div key={i} className="flex items-center space-x-3 px-6 py-3 bg-navy text-white rounded-2xl shadow-xl hover:bg-primary transition-all cursor-default">
                          <Check size={18} className="text-primary group-hover:text-white" />
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
                   <span className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center text-xl">02</span>
                   Must-See Wonders
                 </h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   {pkg.attractions?.map((attraction: string, i: number) => (
                     <div key={i} className="group bg-white p-8 rounded-[3rem] border border-gray-100 flex items-center space-x-6 hover:shadow-2xl hover:-translate-y-1 transition-all">
                       <div className="w-16 h-16 rounded-[1.5rem] bg-[#F0F7FF] flex items-center justify-center text-primary text-2xl font-black shrink-0 group-hover:bg-primary group-hover:text-white transition-colors shadow-inner">
                         {String(i + 1).padStart(2, '0')}
                       </div>
                       <div>
                         <h4 className="text-2xl font-black text-navy group-hover:text-primary transition-colors">{attraction}</h4>
                         <p className="text-xs text-gray-400 mt-1 font-bold uppercase tracking-widest">Unforgettable Spot</p>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>

              {/* Inclusions Block (Dark to add weight) */}
              <div className="bg-navy rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-0"></div>
                <div className="relative z-10 space-y-16">
                  <div className="text-center space-y-4">
                    <h2 className="text-5xl font-black text-white tracking-tighter">Your All-Inclusive <span className="text-primary italic">Comfort.</span></h2>
                    <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Everything you need for a signature experience</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <h3 className="text-primary font-black uppercase tracking-[0.3em] text-xs pl-4 border-l-4 border-primary">We've Got You Covered</h3>
                      <ul className="space-y-5">
                        {['Premium Accommodation', 'Daily Gourmet Meals', 'Private Mahadeva Beast Transport', 'Dedicated Travel Concierge', 'All Permits & Entry Fees'].map((item, i) => (
                          <li key={i} className="flex items-center space-x-4 text-white group cursor-default">
                             <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"><Check size={16} strokeWidth={3} /></div>
                             <span className="font-bold text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-8 opacity-60">
                      <h3 className="text-white/40 font-black uppercase tracking-[0.3em] text-xs pl-4 border-l-4 border-white/20">Not Included</h3>
                      <ul className="space-y-5">
                        {['Personal Shopping', 'Optional Adventure Activities', 'Specific Insurance Upgrade', 'Extra Alcoholic Beverages'].map((item, i) => (
                          <li key={i} className="flex items-center space-x-4 text-white/60">
                             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/20"><XCircle size={16} /></div>
                             <span className="font-bold text-lg line-through decoration-white/20">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white/80 backdrop-blur-2xl p-10 rounded-[3.5rem] shadow-[0_48px_80px_-16px_rgba(0,0,0,0.15)] border border-white space-y-10">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                       <Bus size={36} className="text-primary" />
                    </div>
                    <h3 className="text-4xl font-black text-navy tracking-tight">Ready to <span className="text-primary">Ride?</span></h3>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">Secure your signature slot</p>
                  </div>
                  
                  <div className="space-y-4">
                    <a
                      href={getWhatsAppLink(`Hi! I want to book the ${pkg.title} package.`)}
                      className="w-full bg-primary text-white py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-navy transition-all flex items-center justify-center space-x-3 shadow-2xl shadow-primary/30 active:scale-95"
                    >
                      <MessageCircle size={22} />
                      <span>Book on WhatsApp</span>
                    </a>
                    <a
                      href={`tel:+918943491937`}
                      className="w-full bg-navy text-white py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center space-x-3 shadow-xl active:scale-95"
                    >
                      <Phone size={20} />
                      <span>Direct Line</span>
                    </a>
                  </div>

                  <div className="pt-8 border-t border-gray-100 flex items-center justify-center gap-4 text-[10px] font-black text-navy/40 uppercase tracking-widest">
                     <div className="flex -space-x-2">
                        {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm"><img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="avatar" /></div>)}
                     </div>
                     <span>Verified Service</span>
                  </div>
                </div>

                {/* Custom Tour CTA */}
                <Link to="/custom-tour" className="group block bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-[3rem] text-center shadow-xl hover:scale-[1.02] transition-all relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-2xl -z-0"></div>
                   <h4 className="font-black text-navy text-xl uppercase tracking-tighter relative z-10">Want it Unique?</h4>
                   <p className="text-navy/60 text-[10px] font-black uppercase tracking-widest mt-1 relative z-10">Customize Itinerary</p>
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
