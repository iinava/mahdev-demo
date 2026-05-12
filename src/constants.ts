import { SITE_CONFIG } from './config/site';
import DESTINATIONS from './data/destinations.json';

export interface Package {
  id: string;
  title: string;
  category: 'Domestic' | 'Honeymoon' | 'Family' | 'Group' | 'Pilgrimage';
  duration: string;
  highlights: string[];
  image: string;
  description: string;
  attractions?: string[];
}

export const PACKAGES: Package[] = DESTINATIONS.map((dest: any) => ({
  id: dest.id,
  title: dest.title,
  category: dest.category,
  duration: dest.duration,
  highlights: dest.attractions.slice(0, 3),
  image: dest.image,
  description: dest.description,
  attractions: dest.attractions
}));

export const CATEGORIES = SITE_CONFIG.categories.map(c => c.name);

export const WHATSAPP_NUMBER = SITE_CONFIG.contact.whatsapp;

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

