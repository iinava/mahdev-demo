export interface Vehicle {
  id: string;
  name: string;
  nickname: string;
  type: string;
  capacity: string;
  image: string;
  description: string;
  color: string;
}

export const VEHICLES: Vehicle[] = [
  {
    id: 'cheettapuli',
    name: 'Cheettapuli',
    nickname: 'The Leopard',
    type: 'Tata Marcepolo Bus',
    capacity: '35+ Seater',
    image: '/vehicles/cheettapuli.jpg',
    description: 'Commands every road with silent grace and ferocious acceleration. A force of nature designed for speed without sacrificing custom luxury.',
    color: '#F5F5F5',
  },
  {
    id: 'honeybadger',
    name: 'Honey Badger',
    nickname: 'The Fearless',
    type: 'Force Traveller',
    capacity: '12-17 Seater',
    image: '/vehicles/honeybadger.jpg',
    description: 'Built with unparalleled resilience and rugged power. Fear no terrain, fear no distance — a truly one-of-a-kind travel experience.',
    color: '#F8F8F8',
  },
  {
    id: 'kaduva',
    name: 'Kaduva',
    nickname: 'The Forest King',
    type: 'Force Traveller',
    capacity: '12-17 Seater',
    image: '/vehicles/kaduva.jpg',
    description: 'Embodies the unstoppable spirit of the forest king. Built with unparalleled resilience in striking red — fear no terrain, fear no distance.',
    color: '#FFF0F0',
  },
  {
    id: 'mandhakini',
    name: 'Mandhakini',
    nickname: 'The Sacred',
    type: 'Force Traveller',
    capacity: '12-17 Seater',
    image: '/vehicles/mandhakini.jpg',
    description: 'A sacred vehicle of the mountain peak, where every snowflake is a tale and the journey is a meditation. Custom-engineered for divine travel.',
    color: '#F8F5F0',
  },
  {
    id: 'thrilokadhipathi',
    name: 'Thrilokadhipathi',
    nickname: 'Lord of Three Worlds',
    type: 'Force Traveller',
    capacity: '12-17 Seater',
    image: '/vehicles/thrilokadhipadhi.jpg',
    description: 'A bespoke force that traverses concrete canyons and untamed peaks. Experience power, durability, and divine aesthetics in one unmatched package.',
    color: '#F0FFF0',
  },
];
