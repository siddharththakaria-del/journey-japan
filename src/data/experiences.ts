export type Experience = { slug: string; title: string; category: string; image: string };

export const experiences: Experience[] = [
  { slug: 'culture', title: 'Culture', category: 'Culture', image: '/images/experiences/japanese-culture.webp' },
    { slug: 'food', title: 'Food', category: 'Food', image: '/images/food/japan-vegetarian-food.webp' },
    { slug: 'nature', title: 'Nature', category: 'Nature', image: '/images/experiences/japan-nature.webp' },
    { slug: 'adventure', title: 'Adventure', category: 'Adventure', image: '/images/experiences/shinkansen.webp' },
    { slug: 'shopping', title: 'Shopping', category: 'Shopping', image: '/images/experiences/japan-night.webp' },
    { slug: 'anime', title: 'Anime & Pop Culture', category: 'Pop', image: '/images/experiences/authentic-japan.webp' }
];
