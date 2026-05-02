import React from 'react';
import Layout from '../components/Layout';
import { Camera, MapPin, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800', title: 'Dubai Cityscape', location: 'United Arab Emirates' },
    { url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800', title: 'Ubud Jungle', location: 'Bali, Indonesia' },
    { url: 'https://images.unsplash.com/photo-1528181304800-2f140819898f?auto=format&fit=crop&q=80&w=800', title: 'Tropical Island', location: 'Phuket, Thailand' },
    { url: 'https://images.unsplash.com/photo-1566833925204-74950e932626?auto=format&fit=crop&q=80&w=800', title: 'Snowy Peaks', location: 'Gulmarg, Kashmir' },
    { url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800', title: 'Alleppey Backwaters', location: 'Kerala, India' },
    { url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800', title: 'Sunset Beach', location: 'Goa, India' },
    { url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800', title: 'Taj Mahal', location: 'Agra, India' },
    { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800', title: 'Mountain Lake', location: 'Swiss Alps' },
    { url: 'https://images.unsplash.com/photo-1506929113674-bf9ca4d9d40e?auto=format&fit=crop&q=80&w=800', title: 'Desert Waves', location: 'Sahara' },
    { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800', title: 'City Lights', location: 'Tokyo' },
    { url: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=800', title: 'Red Bus', location: 'London' },
    { url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800', title: 'Eiffel Tower', location: 'Paris' },
  ];

  return (
    <Layout>
      <section className="bg-white py-24 md:py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
           <div className="bg-primary/10 w-20 h-20 rounded-[28px] flex items-center justify-center mx-auto text-primary mb-8 shadow-xl shadow-primary/10">
              <Camera size={36} />
           </div>
           <h1 className="text-5xl md:text-8xl font-black text-navy leading-none tracking-tighter">Travel <span className="text-primary italic">Gallery</span></h1>
           <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">Capture the world through our lens. Each moment is a testament to the beauty of discovery.</p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
              {images.map((img, i) => (
                <div key={i} className="relative group rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-white break-inside-avoid">
                   <img src={img.url} alt={img.title} className="w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-2">
                         <h3 className="text-white font-bold text-2xl">{img.title}</h3>
                         <div className="flex items-center space-x-2 text-white/70 text-sm">
                            <MapPin size={16} className="text-primary" />
                            <span>{img.location}</span>
                         </div>
                      </div>
                      <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                         <ZoomIn className="text-white" size={20} />
                      </div>
                   </div>
                </div>
              ))}
           </div>

           <div className="mt-20 p-12 rounded-[40px] bg-navy text-white text-center space-y-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                 <div className="w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]" />
              </div>
              <h2 className="text-4xl font-bold relative z-10">Ready to capture your own memories?</h2>
              <p className="text-gray-400 max-w-xl mx-auto relative z-10">Start your journey today and let us handle all the logistics while you focus on the moments.</p>
              <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
                 <a href="/packages.html" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-secondary transition-all shadow-xl shadow-primary/20">Book a Package</a>
                 <a href="/custom-tour.html" className="bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-navy transition-all">Custom Request</a>
              </div>
           </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
