import React from 'react';
import Layout from '../components/Layout';
import { Camera, MapPin, ZoomIn } from 'lucide-react';

import { GALLERY_CONFIG } from '../config/gallery';

const Gallery: React.FC = () => {
  const images = GALLERY_CONFIG.images;

  return (
    <Layout>
      <section className="bg-white pt-40 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
           <h1 className="text-4xl md:text-6xl font-bold text-navy tracking-tight">{GALLERY_CONFIG.title} <span className="text-primary italic font-serif">{GALLERY_CONFIG.titleAccent}</span></h1>
           <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">{GALLERY_CONFIG.description}</p>
        </div>
      </section>

      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((img, i) => (
                <div key={i} className="space-y-4 group">
                   <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50">
                      <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   </div>
                   <div className="space-y-1">
                      <h3 className="text-lg font-bold text-navy">{img.title}</h3>
                      <div className="flex items-center space-x-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                         <MapPin size={12} className="text-primary" />
                         <span>{img.location}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
