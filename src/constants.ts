export interface Package {
  id: string;
  title: string;
  category: 'Domestic' | 'International' | 'Honeymoon' | 'Family' | 'Group' | 'Pilgrimage';
  duration: string;
  price: string;
  highlights: string[];
  image: string;
  description: string;
}

export const PACKAGES: Package[] = [
  {
    id: 'dubai-luxury',
    title: 'Dubai Luxury Getaway',
    category: 'International',
    duration: '5 Days / 4 Nights',
    price: '₹55,000',
    highlights: ['Burj Khalifa Visit', 'Desert Safari', 'Dhow Cruise'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    description: 'Experience the glitz and glamour of Dubai with our premium luxury package.'
  },
  {
    id: 'bali-paradise',
    title: 'Bali Island Paradise',
    category: 'International',
    duration: '6 Days / 5 Nights',
    price: '₹48,000',
    highlights: ['Ubud Swings', 'Uluwatu Temple', 'Beach Dinner'],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    description: 'Relax in the serene beaches and lush jungles of Bali.'
  },
  {
    id: 'kashmir-heaven',
    title: 'Kashmir: Paradise on Earth',
    category: 'Domestic',
    duration: '7 Days / 6 Nights',
    price: '₹35,000',
    highlights: ['Shikara Boat Ride', 'Gulmarg Cable Car', 'Pahalgam'],
    image: 'https://images.unsplash.com/photo-1566833925204-74950e932626?auto=format&fit=crop&q=80&w=800',
    description: 'Explore the breathtaking valleys and snowy mountains of Kashmir.'
  },
  {
    id: 'kerala-backwaters',
    title: 'Kerala Backwaters & Hills',
    category: 'Family',
    duration: '6 Days / 5 Nights',
    price: '₹32,000',
    highlights: ['Munnar Tea Gardens', 'Alleppey Houseboat', 'Thekkady'],
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800',
    description: 'A perfect family getaway to the "God\'s Own Country".'
  },
  {
    id: 'thailand-escapade',
    title: 'Thailand Island Escapade',
    category: 'Group',
    duration: '5 Days / 4 Nights',
    price: '₹38,000',
    highlights: ['Bangkok City Tour', 'Coral Island', 'Wat Arun'],
    image: 'https://images.unsplash.com/photo-1528181304800-2f140819898f?auto=format&fit=crop&q=80&w=800',
    description: 'Fun-filled group tour exploring the best of Thailand.'
  },
  {
    id: 'chardham-yatra',
    title: 'Chardham Holy Pilgrimage',
    category: 'Pilgrimage',
    duration: '12 Days / 11 Nights',
    price: '₹45,000',
    highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'],
    image: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&q=80&w=800',
    description: 'The ultimate spiritual journey through the Himalayas.'
  }
];

export const CATEGORIES = [
  'Domestic Tours',
  'International Tours',
  'Honeymoon Packages',
  'Family Tours',
  'Group Tours',
  'Pilgrimage Tours'
];

export const WHATSAPP_NUMBER = '919876543210'; // Example number

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
