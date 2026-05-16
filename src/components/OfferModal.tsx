import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { getWhatsAppLink } from '../constants';
import { PACKAGES } from '../constants';

let hasShownThisSession = false;

const OfferModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    // Show once per app load (resets on refresh, persists across page navigation)
    if (!hasShownThisSession) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        hasShownThisSession = true;
      }, 3000); // show after 3 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClaim = () => {
    if (!mobile.trim()) {
      alert("Please enter your mobile number");
      return;
    }
    const message = `Hi! Can I get this offer? 
Number: ${mobile}
Offer Name: FLAT ₹1000/- OFFER on Wayanad Packages`;
    const link = getWhatsAppLink(message);
    window.open(link, '_blank');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-gradient-to-br from-[#0072B5] to-navy rounded-3xl sm:rounded-[2.5rem] shadow-2xl overflow-visible flex flex-col md:flex-row animate-[slideUp_0.5s_ease-out]">
        
        {/* Close Button - Floats outside on desktop, inside on mobile */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-50 border-2 border-white"
        >
          <X size={20} strokeWidth={3} />
        </button>

        {/* Left Side: Offer Details */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden">
           {/* Decorative background noise/pattern could go here */}
           <div className="absolute inset-0 bg-topo opacity-10 mix-blend-overlay pointer-events-none"></div>
           
           <div className="relative z-10 space-y-6 text-center md:text-left">
              <div className="inline-block transform -rotate-3 bg-[#3B82F6] text-white font-black px-6 py-2 text-2xl sm:text-3xl rounded-lg shadow-lg mb-2">
                Wait!
              </div>
              
              <div className="bg-[#FFB800] text-navy inline-block transform rotate-1 px-8 py-4 rounded-xl shadow-xl">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-none">
                  ₹1000<span className="text-2xl sm:text-3xl align-top">/*</span>
                </div>
              </div>
              
              <div className="inline-block transform -rotate-2 bg-[#3B82F6] text-white font-black px-4 py-1 text-xl sm:text-2xl rounded-full shadow-md mt-[-10px] relative z-20">
                OFFER
              </div>

              <div className="pt-6 space-y-1">
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="h-px w-12 bg-white/30"></div>
                  <p className="text-white/80 font-medium italic text-sm sm:text-base">on our best selling</p>
                  <div className="h-px w-12 bg-white/30"></div>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#FFB800] tracking-tight leading-none uppercase">
                  Wayanad
                </h3>
                <h4 className="text-2xl sm:text-3xl font-black text-white italic tracking-widest uppercase">
                  Packages
                </h4>
              </div>
           </div>
        </div>

        {/* Right Side: Images and Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 bg-black/10 flex flex-col justify-center items-center backdrop-blur-sm rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
          
          {/* Collage Images */}
          <div className="relative w-full max-w-[280px] h-40 sm:h-48 mb-10 flex justify-center items-end">
             {/* Left Image */}
             <div className="absolute left-0 bottom-0 w-24 sm:w-28 aspect-[3/4] bg-white p-1.5 rounded-sm shadow-2xl transform -rotate-12 translate-x-4 hover:scale-110 hover:z-30 transition-transform duration-300 z-10">
               <img src={PACKAGES[0]?.image} alt="Tour 1" className="w-full h-full object-cover" />
             </div>
             {/* Center Image */}
             <div className="absolute bottom-2 w-28 sm:w-32 aspect-[3/4] bg-white p-1.5 rounded-sm shadow-2xl transform z-20 hover:scale-110 transition-transform duration-300">
               <img src={PACKAGES[1]?.image} alt="Tour 2" className="w-full h-full object-cover" />
             </div>
             {/* Right Image */}
             <div className="absolute right-0 bottom-0 w-24 sm:w-28 aspect-[3/4] bg-white p-1.5 rounded-sm shadow-2xl transform rotate-12 -translate-x-4 hover:scale-110 hover:z-30 transition-transform duration-300 z-10">
               <img src={PACKAGES[2]?.image} alt="Tour 3" className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Input Form */}
          <div className="w-full max-w-sm space-y-3">
            <input 
              type="tel" 
              placeholder="Enter your mobile number." 
              className="w-full px-6 py-4 bg-white rounded-xl text-navy font-bold text-center focus:outline-none focus:ring-4 focus:ring-primary/50 shadow-inner"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <button 
              onClick={handleClaim}
              className="w-full bg-[#0057D9] hover:bg-navy text-white font-black text-lg py-4 rounded-xl transition-colors shadow-lg border border-white/10"
            >
              Claim Benefit
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
