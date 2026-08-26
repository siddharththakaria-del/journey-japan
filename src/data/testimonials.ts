export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  location?: string;
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'A beautifully curated trip — authentic, effortless and deeply memorable.',
    author: 'Guest Name',
    location: 'Couple from India',
    image: '/images/about/testimonial-1.webp'
  },
  {
    id: 't2',
    quote: 'Journey Japan arranged a perfect honeymoon with thoughtful details throughout.',
    author: 'Family Traveler',
    location: 'Sydney, Australia'
  },
  {
    id: 't3',
    quote: 'Excellent vegetarian arrangements; we never had to worry about food.',
    author: 'Guest Name',
    location: 'Bengaluru, India'
  },
  {
    id: 't4',
    quote: 'Everything felt considered, personal and beautifully paced from start to finish.',
    author: 'Couple from India',
    location: 'Mumbai, India'
  }
];
