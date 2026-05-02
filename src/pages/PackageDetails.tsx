import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { PACKAGES, getWhatsAppLink } from '../constants';
import { Clock, MapPin, CheckCircle, XCircle, ChevronDown, ChevronUp, MessageCircle, Star, Phone } from 'lucide-react';

const PackageDetails: React.FC = () => {
  const [pkg, setPkg] = useState<any>(null);
  const [activeDay, setActiveDay] = useState<number | null>(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const foundPkg = PACKAGES.find(p => p.id === id) || PACKAGES[0];
    setPkg(foundPkg);
  }, []);

  if (!pkg) return null;

  const itinerary = [
    { day: 1, title: 'Arrival and Check-in', desc: 'Arrive at the destination and transfer to your luxury hotel. Spend the evening at leisure exploring the surroundings.' },
    { day: 2, title: 'Local Sightseeing', desc: 'Visit the most famous landmarks and enjoy a guided tour of the city\'s heritage sites.' },
    { day: 3, title: 'Adventure & Activities', desc: 'Participate in thrilling outdoor activities or enjoy a peaceful day at a scenic spot.' },
    { day: 4, title: 'Shopping and Leisure', desc: 'Free time for shopping and exploring local markets. Evening farewell dinner.' },
    { day: 5, title: 'Departure', desc: 'Wrap up your memories and head back to the airport for your return journey.' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] min-h-[450px] overflow-hidden">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full pb-12 md:pb-20 pt-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4 text-center md:text-left">
                <div className="inline-flex items-center space-x-2 bg-primary px-4 py-1.5 rounded-lg text-[9px] font-bold text-white uppercase tracking-widest shadow-xl">
                  {pkg.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">{pkg.title}</h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-white/80 font-bold uppercase tracking-widest text-[10px]">
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-primary" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-primary" />
                    <span>Multiple Locations</span>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 min-w-[300px] shadow-2xl hidden md:block">
                <p className="text-white/50 text-[9px] uppercase tracking-widest font-bold mb-1">Exclusive Experience</p>
                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">/ person</span>
                </div>
                <a
                  href={getWhatsAppLink(`Hi! I am interested in the ${pkg.title} package. Please share availability and details.`)}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={18} />
                  <span>Request Custom Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-navy">Package <span className="text-primary italic font-serif">Overview</span></h2>
                <p className="text-gray-500 leading-relaxed text-lg font-medium">
                  {pkg.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {pkg.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <CheckCircle size={16} />
                      </div>
                      <span className="text-navy font-bold text-xs leading-tight tracking-tight">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-navy">Tour <span className="text-primary italic font-serif">Itinerary</span></h2>
                <div className="space-y-4">
                  {itinerary.map((item, i) => (
                    <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setActiveDay(activeDay === i ? null : i)}
                        className={`w-full flex items-center justify-between p-5 text-left transition-all ${activeDay === i ? 'bg-navy text-white' : 'bg-white hover:bg-gray-50'}`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${activeDay === i ? 'bg-primary text-white' : 'bg-light-bg text-primary'}`}>
                            {item.day}
                          </div>
                          <div>
                            <p className={`text-[8px] uppercase tracking-widest font-bold ${activeDay === i ? 'text-primary' : 'text-primary'}`}>Day {item.day}</p>
                            <h4 className="text-base font-bold tracking-tight">{item.title}</h4>
                          </div>
                        </div>
                        {activeDay === i ? <ChevronUp size={20} className="text-primary" /> : <ChevronDown size={20} className="text-gray-400" />}
                      </button>
                      {activeDay === i && (
                        <div className="p-8 bg-gray-50 border-t border-gray-100">
                          <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions / Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-50">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-navy flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                      <CheckCircle size={18} />
                    </div>
                    <span>Inclusions</span>
                  </h3>
                  <ul className="space-y-4">
                    {['Premium Accommodation', 'Daily Breakfast & Dinner', 'Private AC Transport', 'Airport Transfers', 'Professional Guide'].map((item, i) => (
                      <li key={i} className="flex items-center space-x-3 text-gray-500 text-sm font-medium">
                         <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                         <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-navy flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
                      <XCircle size={18} />
                    </div>
                    <span>Exclusions</span>
                  </h3>
                  <ul className="space-y-4">
                    {['Any Air/Train Fair', 'Personal Expenses', 'Tips & Laundry', 'Monument Entrance Fees', 'Optional Activities'].map((item, i) => (
                      <li key={i} className="flex items-center space-x-3 text-gray-500 text-sm font-medium">
                         <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                         <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-navy">Important <span className="text-primary italic font-serif">Information</span></h2>
                <div className="bg-[#1A2B3C] p-10 rounded-3xl text-white space-y-8">
                   <div className="space-y-3">
                      <h4 className="font-bold text-primary uppercase text-[10px] tracking-[0.3em]">Booking Policy</h4>
                      <p className="text-white/60 text-sm leading-relaxed font-medium">A deposit of 25% is required at the time of booking. The remaining balance must be paid 30 days before departure.</p>
                   </div>
                   <div className="space-y-3">
                      <h4 className="font-bold text-primary uppercase text-[10px] tracking-[0.3em]">Cancellation Policy</h4>
                      <p className="text-white/60 text-sm leading-relaxed font-medium">Full refund if cancelled 45 days before the trip. 50% refund between 45-15 days. No refund within 15 days of journey.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky Panel */}
            <div className="hidden lg:block relative">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-50 space-y-8">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-navy tracking-tight">Reserve Slot</h3>
                    <p className="text-primary text-[9px] uppercase font-bold tracking-widest">Secure with 25% Deposit</p>
                  </div>
                  
                  <div className="space-y-3">
                    <a
                      href={getWhatsAppLink(`Hi! I want to book the ${pkg.title} package.`)}
                      className="w-full bg-navy text-white px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center space-x-3 shadow-xl shadow-navy/10 active:scale-95"
                    >
                      <MessageCircle size={18} className="text-primary" />
                      <span>Book on WhatsApp</span>
                    </a>
                    <a
                      href={`tel:+919876543210`}
                      className="w-full bg-white text-navy border border-gray-100 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center space-x-3 active:scale-95"
                    >
                      <Phone size={18} className="text-primary" />
                      <span>Direct Enquiry</span>
                    </a>
                  </div>

                  <div className="pt-6 border-t border-gray-50 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary"><CheckCircle size={16} /></div>
                      <span className="text-[10px] font-bold text-navy/60 uppercase tracking-widest">Best Price Guaranteed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary"><CheckCircle size={16} /></div>
                      <span className="text-[10px] font-bold text-navy/60 uppercase tracking-widest">Transparent Pricing</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-2xl text-center space-y-4 border border-gray-100">
                   <h4 className="font-bold text-navy text-sm">Need Customization?</h4>
                   <p className="text-gray-400 text-[10px] font-semibold leading-relaxed">We can tailor this package to your specific preferences and budget.</p>
                   <a href="/custom-tour.html" className="inline-block text-primary text-xs font-bold hover:underline tracking-widest uppercase">Request Custom Tour</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NO STICKY BOTTOM BAR HERE - USING GLOBAL ONE FROM LAYOUT OR SPECIFIC ONE INSTEAD TO AVOID DUPLICATION */}
    </Layout>
  );
};

export default PackageDetails;
