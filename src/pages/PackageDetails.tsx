import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { PACKAGES, getWhatsAppLink } from '../constants';
import { Clock, MapPin, CheckCircle, XCircle, MessageCircle, Star, Phone, Check } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

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
      {/* IMMERSIVE HERO */}
      <section className="relative pt-24 pb-12 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[50vh] md:h-[60vh] rounded-[3rem] overflow-hidden shadow-2xl">
            <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 z-10 flex flex-col items-start space-y-4">

              <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black text-white tracking-tight leading-none drop-shadow-lg">
                {pkg.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs pt-2">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg">
                  <Clock size={16} />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg">
                  <MapPin size={16} />
                  <span>Multiple Locations</span>
                </div>
                <div className="flex items-center space-x-1 text-yellow-400 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                  <span className="text-white ml-1 font-black">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              
              {/* The Vibe */}
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-navy flex items-center gap-3">
                  <span className="text-4xl">✨</span> The Vibe
                </h2>
                <p className="text-gray-500 leading-relaxed text-lg font-medium bg-[#F0F7FF] p-6 rounded-3xl">
                  {pkg.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {pkg.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-center space-x-2 px-4 py-2 bg-primary/5 text-primary rounded-2xl border border-primary/10">
                      <span className="font-black text-sm text-navy">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary / Places */}
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-navy flex items-center gap-3">
                  <span className="text-4xl">🗺️</span> Places to Explore
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.attractions?.map((attraction: string, i: number) => (
                    <div key={i} className="bg-gray-50 p-5 rounded-[2rem] border border-gray-100 flex items-start space-x-4 hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center text-navy font-black shrink-0 shadow-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-navy">{attraction}</h4>
                        <p className="text-sm text-gray-500 mt-1 font-bold">Unforgettable experiences await.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="space-y-8 bg-[#F9FBFF] p-8 md:p-10 rounded-[3rem]">
                <h2 className="text-3xl font-black text-navy text-center mb-8">What's in the Box? 🎁</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6 bg-white p-6 rounded-3xl shadow-sm">
                    <h3 className="text-xl font-black text-green-500 flex items-center space-x-2">
                      <span>Yay! Included</span>
                    </h3>
                    <ul className="space-y-4">
                      {['Premium Accommodation', 'Daily Breakfast & Dinner', 'Private AC Transport', 'Local Transfers', 'Professional Guide'].map((item, i) => (
                        <li key={i} className="flex items-center space-x-3 text-gray-600 text-sm font-bold">
                           <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-500 shrink-0"><Check size={14} strokeWidth={3} /></div>
                           <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-6 bg-white p-6 rounded-3xl shadow-sm">
                    <h3 className="text-xl font-black text-red-500 flex items-center space-x-2">
                      <span>Oops! Not Included</span>
                    </h3>
                    <ul className="space-y-4">
                      {['Travel Fares to Destination', 'Personal Expenses', 'Tips & Laundry', 'Monument Entrance Fees', 'Optional Activities'].map((item, i) => (
                        <li key={i} className="flex items-center space-x-3 text-gray-400 text-sm font-bold">
                           <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 shrink-0"><XCircle size={14} strokeWidth={3} /></div>
                           <span className="line-through decoration-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Important Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-black text-navy">Boring (But Important) Stuff 📋</h2>
                <div className="bg-navy p-8 rounded-3xl text-white space-y-6 transform rotate-1">
                   <div className="space-y-2">
                      <h4 className="font-black text-yellow-400 uppercase text-[10px] tracking-widest">Booking Policy</h4>
                      <p className="text-white/80 text-sm leading-relaxed font-medium">A deposit of 25% is required at the time of booking. The remaining balance must be paid 30 days before departure.</p>
                   </div>
                   <div className="space-y-2">
                      <h4 className="font-black text-yellow-400 uppercase text-[10px] tracking-widest">Cancellation Policy</h4>
                      <p className="text-white/80 text-sm leading-relaxed font-medium">Full refund if cancelled 45 days before the trip. 50% refund between 45-15 days. No refund within 15 days of journey.</p>
                   </div>
                </div>
              </div>
              
            </div>

            {/* Sidebar Sticky Panel */}
            <div className="lg:col-span-1 relative">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-4 border-[#F0F7FF] space-y-8">
                  <div className="text-center space-y-3">

                    <h3 className="text-3xl font-black text-navy tracking-tight">Ready to Pack?</h3>
                    <p className="text-gray-500 text-xs font-bold leading-relaxed">Secure your spot for this amazing adventure!</p>
                  </div>
                  
                  <div className="space-y-3">
                    <a
                      href={getWhatsAppLink(`Hi! I want to book the ${pkg.title} package.`)}
                      className="w-full bg-primary text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-navy transition-all flex items-center justify-center space-x-2 shadow-xl shadow-primary/20 active:scale-95"
                    >
                      <MessageCircle size={20} />
                      <span>Book via WhatsApp</span>
                    </a>
                    <a
                      href={`tel:+919876543210`}
                      className="w-full bg-white text-navy border-2 border-gray-100 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-navy transition-all flex items-center justify-center space-x-2 active:scale-95"
                    >
                      <Phone size={18} className="text-gray-400" />
                      <span>Call Us Now</span>
                    </a>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <div className="bg-[#F9FBFF] p-4 rounded-2xl flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 shrink-0">
                        <Check size={20} strokeWidth={3} />
                      </div>
                      <p className="text-[10px] font-black text-navy uppercase tracking-widest leading-tight">100% Secure & Personalized Experience</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-100 p-6 rounded-[2rem] text-center space-y-3 transform -rotate-2 hover:rotate-0 transition-transform">
                   <h4 className="font-black text-navy text-sm uppercase tracking-widest">Want to Tweak This?</h4>
                   <p className="text-navy/60 text-xs font-bold leading-relaxed">We can customize the itinerary just for you.</p>
                   <Link to="/custom-tour" className="inline-block bg-navy text-white px-6 py-3 rounded-xl text-xs font-black hover:bg-primary transition-colors uppercase tracking-widest mt-2">Custom Tour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PackageDetails;
