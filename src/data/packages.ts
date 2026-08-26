export type PackageType = 'fixed' | 'group' | 'fit' | 'custom';
export type TravelStyle = 'honeymoon' | 'family' | 'luxury' | 'budget' | 'general';

export type PackageHighlight = {
  title: string;
  description: string;
};

export type PackageItineraryDay = {
  day: number;
  title: string;
  destination: string;
  description: string;
  highlights?: string[];
};

export type PackageDestinationPanel = {
  name: string;
  image: string;
  description: string;
  highlights: string[];
};

export type PackageInfoPoint = {
  title: string;
  description: string;
};

export type OptionalExperience = {
  title: string;
  description: string;
  image: string;
  label?: string;
};

export type Package = {
  id: string;
  slug: string;
  title: string;
  type: PackageType;
  travelStyle: TravelStyle | string;
  duration: string;
  destinations: string;
  description: string;
  price: number;
  image: string;
  highlights: string[];
  // backwards-compatible aliases used by older components/routes
  destination?: string;
  travelType?: string;
  short?: string;
  priceFromINR?: number;
  itinerary?: { day: number; title: string; content: string }[];
  tripTypeLabel?: string;
  travelStyleLabel?: string;
  heroDescription?: string;
  overviewNote?: string;
  journeyHeading?: string;
  journeyIntro?: string;
  journeyHighlights?: PackageHighlight[];
  itineraryDays?: PackageItineraryDay[];
  destinationPanels?: PackageDestinationPanel[];
  travelArrangements?: PackageInfoPoint[];
  foodSection?: {
    heading: string;
    description: string;
    points: string[];
    image: string;
  };
  includedItems?: string[];
  excludedItems?: string[];
  optionalExperiences?: OptionalExperience[];
  importantInformation?: PackageInfoPoint[];
  heroTitle?: string;
  heroEyebrow?: string;
  bestFor?: string;
  atAGlance?: {
    heading: string;
    description: string;
    stats: { label: string; value: string }[];
  };
  citySections?: PackageDestinationPanel[];
  inclusionsNote?: string;
  faqItems?: { q: string; a: string }[];
  finalCta?: {
    heading: string;
    description: string;
    image: string;
  };
};

export const packages: Package[] = [
  {
    id: 'classic-japan',
    slug: 'classic-japan',
    title: 'Classic Japan',
    type: 'fixed',
    travelStyle: 'general',
    duration: '10 Days',
    destinations: 'Tokyo · Kyoto · Osaka',
    description: 'A refined introduction to Japan with iconic city highlights, cultural depth and a seamless rhythm.',
    price: 229990,
    image: '/images/packages/classic-japan/classic-japan-hero.webp',
    highlights: ['Tokyo experiences', 'Kyoto heritage', 'Osaka dining'],
    destination: 'Tokyo · Kyoto · Osaka',
    travelType: 'general',
    short: 'A carefully paced introduction to Japan’s highlights — culture, food and history.',
    priceFromINR: 229990,
    tripTypeLabel: 'Fixed Package',
    travelStyleLabel: 'Classic',
    heroTitle: 'Classic Japan',
    heroEyebrow: 'CLASSIC JAPAN',
    bestFor: 'First-time Japan travelers',
    heroDescription:
      "From Tokyo’s energy to Kyoto’s timeless streets and Osaka’s vibrant food culture, discover three unforgettable sides of Japan in one carefully planned journey.",
    overviewNote: 'Starting price shown is placeholder commercial data and may vary by travel dates, inclusions and availability.',
    atAGlance: {
      heading: 'Japan’s classics, thoughtfully brought together.',
      description:
        'This journey brings together Japan’s most iconic cities while leaving room to experience the culture, food and everyday atmosphere that make each destination different.',
      stats: [
        { label: 'Duration', value: '10 Days' },
        { label: 'Destinations', value: 'Tokyo · Kyoto · Osaka' },
        { label: 'Travel Style', value: 'Classic' },
        { label: 'Trip Type', value: 'Fixed Package' },
        { label: 'Starting From', value: '₹2,29,990' }
      ]
    },
    journeyHeading: 'Japan’s classics, thoughtfully brought together.',
    journeyIntro:
      'This journey brings together Japan’s most iconic cities while leaving room to experience the culture, food and everyday atmosphere that make each destination different.',
    journeyHighlights: [
      {
        title: 'Tokyo Energy',
        description:
          'Experience the contrast between modern Tokyo, historic neighborhoods and world-class dining.'
      },
      {
        title: 'Kyoto Heritage',
        description:
          'Discover temples, traditional streets, gardens and the quieter side of Japan.'
      },
      {
        title: 'Osaka Flavours',
        description:
          'Experience Osaka’s lively atmosphere and famous food culture.'
      },
      {
        title: 'Balanced Journey',
        description:
          'A carefully paced itinerary designed to experience three major destinations without making the trip feel rushed.'
      }
    ],
    itineraryDays: [
      {
        day: 1,
        title: 'Arrive in Tokyo',
        destination: 'Tokyo',
        description:
          'Settle in and ease into Japan with a relaxed arrival in Tokyo, followed by a first evening to enjoy the city at your own pace.',
        highlights: ['Arrival support', 'Check-in and orientation', 'First evening at leisure']
      },
      {
        day: 2,
        title: 'Tokyo: Modern & Traditional',
        destination: 'Tokyo',
        description:
          'Explore the contrast between Tokyo’s modern city life and the quieter historic pockets that still define the city’s character.',
        highlights: ['City highlights', 'Historic neighbourhoods', 'Flexible local time']
      },
      {
        day: 3,
        title: 'Tokyo: Culture & Local Experiences',
        destination: 'Tokyo',
        description:
          'Continue discovering Tokyo through its neighbourhoods, cultural sites, food culture and everyday rhythm.',
        highlights: ['Local experiences', 'Culture and food', 'Time to explore']
      },
      {
        day: 4,
        title: 'Tokyo → Kyoto',
        destination: 'Kyoto',
        description:
          'Travel from Tokyo to Kyoto and begin a slower, more traditional chapter of the journey.',
        highlights: ['Intercity transfer', 'Kyoto arrival', 'Evening at leisure']
      },
      {
        day: 5,
        title: 'Kyoto: Temples & Heritage',
        destination: 'Kyoto',
        description:
          'Discover Kyoto’s historic character through temples, heritage streets and the quieter beauty that defines the city.',
        highlights: ['Temple districts', 'Historic streets', 'Cultural sightseeing']
      },
      {
        day: 6,
        title: 'Kyoto: Local Japan',
        destination: 'Kyoto',
        description:
          'Spend the day experiencing Kyoto beyond the main highlights, with time for local neighbourhoods, gardens and slower discovery.',
        highlights: ['Local rhythm', 'Gardens and lanes', 'Relaxed pace']
      },
      {
        day: 7,
        title: 'Kyoto → Osaka',
        destination: 'Osaka',
        description:
          'Continue to Osaka and begin enjoying a more energetic and flavour-led city experience.',
        highlights: ['Intercity transfer', 'City orientation', 'Osaka arrival']
      },
      {
        day: 8,
        title: 'Osaka: City & Food',
        destination: 'Osaka',
        description:
          'Explore Osaka’s lively streets, evening atmosphere and famous food culture at a comfortable pace.',
        highlights: ['Food districts', 'City exploration', 'Flexibility for evenings']
      },
      {
        day: 9,
        title: 'Osaka: Flexible Exploration',
        destination: 'Osaka',
        description:
          'Enjoy a day shaped around your preferences, with room for shopping, additional city experiences or a slower pace.',
        highlights: ['Free exploration', 'Optional add-ons', 'Flexible day']
      },
      {
        day: 10,
        title: 'Departure',
        destination: 'Osaka',
        description:
          'Complete the journey and depart with lasting memories of Japan’s most iconic contrasts.',
        highlights: ['Departure support']
      }
    ],
    destinationPanels: [
      {
        name: 'Tokyo',
        image: '/images/packages/classic-japan/classic-japan-tokyo.webp',
        description: 'Where tradition and innovation exist side by side.',
        highlights: ['Urban culture', 'Tradition', 'Dining']
      },
      {
        name: 'Kyoto',
        image: '/images/packages/classic-japan/classic-japan-kyoto.webp',
        description: 'Japan’s timeless cultural heart.',
        highlights: ['Heritage', 'Temple districts', 'Classic streets']
      },
      {
        name: 'Osaka',
        image: '/images/packages/classic-japan/classic-japan-osaka.webp',
        description: 'Warm, energetic and made for food lovers.',
        highlights: ['Food culture', 'Lively city atmosphere', 'Flexible evenings']
      }
    ],
    travelArrangements: [
      {
        title: 'Accommodation',
        description:
          'Comfortable stays selected around location, convenience and journey flow.'
      },
      {
        title: 'Transport',
        description:
          'Planned intercity travel and local transportation according to the itinerary.'
      },
      {
        title: 'Airport Transfers',
        description:
          'Airport transfer arrangements can be included according to the selected package.'
      },
      {
        title: 'Local Support',
        description:
          'Guidance and assistance throughout the journey where applicable.'
      }
    ],
    foodSection: {
      heading: 'Japan without compromising on food.',
      description:
        'Food is an important part of experiencing Japan — and we understand that dietary preferences need thoughtful planning. Through our restaurant relationships and local knowledge, vegetarian and Jain-friendly dining arrangements can be incorporated into your journey.',
      points: [
        'Vegetarian-friendly planning',
        'Jain-friendly arrangements',
        'Local Japanese food experiences'
      ],
      image: '/images/packages/classic-japan/classic-japan-food.webp'
    },
    includedItems: [
      'Accommodation',
      'Intercity transportation',
      'Airport transfers where specified',
      'Selected meals',
      'Local guide where specified',
      'Selected experiences',
      'Planned transportation according to itinerary'
    ],
    excludedItems: [
      'International flights',
      'Personal expenses',
      'Travel insurance',
      'Optional activities',
      'Anything not specifically mentioned in the itinerary'
    ],
    inclusionsNote:
      "What's included can vary depending on the final package configuration. Your detailed quotation will clearly outline all inclusions and exclusions.",
    optionalExperiences: [
      {
        title: 'Private Kyoto cultural experience',
        description: 'Optional',
        image: '/images/destinations/kyoto.webp',
        label: 'Optional'
      },
      {
        title: 'Japanese tea experience',
        description: 'Optional',
        image: '/images/experiences/japanese-culture.webp',
        label: 'Optional'
      },
      {
        title: 'Hakone onsen experience',
        description: 'Optional',
        image: '/images/hero/japan-hero.webp',
        label: 'Optional'
      },
      {
        title: 'Osaka evening experience',
        description: 'Optional',
        image: '/images/destinations/tokyo.webp',
        label: 'Optional'
      }
    ],
    importantInformation: [
      {
        title: 'Best Time to Travel',
        description:
          'Japan can be experienced throughout the year, with different seasonal highlights.'
      },
      {
        title: 'Pace',
        description:
          'This itinerary combines multiple cities and involves intercity travel.'
      },
      {
        title: 'Travel Documents',
        description:
          "Passport, visa and entry requirements should be checked according to the traveler's nationality."
      },
      {
        title: 'Customization',
        description:
          'The itinerary can potentially be adjusted depending on requirements.'
      }
    ],
    faqItems: [
      {
        q: 'Is this Japan tour suitable for first-time visitors?',
        a: 'Yes. Classic Japan is designed as an accessible first journey through three of Japan’s most iconic cities.'
      },
      {
        q: 'How many days is the Classic Japan tour?',
        a: 'The package is planned as a 10-day journey.'
      },
      {
        q: 'Can I customize the Classic Japan package?',
        a: 'Yes. The route can be adapted depending on your preferred dates, pace and interests.'
      },
      {
        q: 'Can vegetarian food be arranged?',
        a: 'Vegetarian-friendly planning can be incorporated into the journey.'
      },
      {
        q: 'Can Jain food be arranged in Japan?',
        a: 'Jain-friendly arrangements can be discussed and planned according to your requirements.'
      },
      {
        q: 'Does the package include international flights?',
        a: 'International flights are not assumed to be included unless specifically stated in your quotation.'
      },
      {
        q: 'Can I add more days to the tour?',
        a: 'Yes. The journey can potentially be extended or adjusted around your travel plan.'
      }
    ],
    finalCta: {
      heading: 'Ready to experience Japan beyond the ordinary?',
      description:
        "Tell us your preferred dates, interests and travel style. We'll help you turn Classic Japan into a journey that feels right for you.",
      image: '/images/hero/japan-hero.webp'
    }
  },
  {
    id: 'tokyo-kyoto-escape',
    slug: 'tokyo-kyoto-escape',
    title: 'Tokyo & Kyoto Escape',
    type: 'fixed',
    travelStyle: 'general',
    duration: '7 Days',
    destinations: 'Tokyo · Kyoto',
    description: 'A compact introduction to Tokyo and Kyoto that balances modern city life with timeless Japanese culture.',
    price: 179990,
    image: '/images/packages/tokyo-kyoto-escape/tokyo-kyoto-escape-hero.webp',
    highlights: ['Tokyo rhythm', 'Kyoto heritage', 'Compact pacing'],
    destination: 'Tokyo · Kyoto',
    travelType: 'general',
    short: 'A concentrated route through two iconic cities with space to explore both contrast and calm.',
    priceFromINR: 179990,
    tripTypeLabel: 'Fixed Package',
    travelStyleLabel: 'City & Culture',
    heroTitle: 'Tokyo & Kyoto Escape: Two Sides of Japan',
    heroEyebrow: 'TOKYO & KYOTO ESCAPE',
    bestFor: 'First-time visitors & couples',
    heroDescription:
      'Experience the energy of Tokyo and the timeless character of Kyoto on a carefully planned 7-day journey designed around contrast, culture and discovery.',
    overviewNote: 'Price shown is placeholder commercial data and may vary by travel dates, inclusions and availability.',
    atAGlance: {
      heading: 'Two iconic cities, one beautifully balanced escape.',
      description:
        'Seven days is enough to experience the very different personalities of Tokyo and Kyoto without trying to see all of Japan at once. This journey combines modern city life, historic neighbourhoods, Japanese culture and carefully selected experiences into a compact introduction to two of the country’s most distinctive destinations.',
      stats: [
        { label: 'Duration', value: '7 DAYS' },
        { label: 'Route', value: 'Tokyo · Kyoto' },
        { label: 'Focus', value: 'City & Culture' },
        { label: 'Type', value: 'Fixed Package' },
        { label: 'Best For', value: 'First-time visitors & couples' },
        { label: 'From', value: '₹1,79,990' }
      ]
    },
    journeyHeading: 'One journey. Two completely different rhythms.',
    journeyIntro:
      'This escape is about contrast. Tokyo feels energetic and contemporary, while Kyoto slows the pace and brings more space for tradition, atmosphere and quieter discovery.',
    journeyHighlights: [
      {
        title: 'Modern Tokyo',
        description:
          'Discover a city where futuristic skylines, quiet neighbourhoods, traditional culture and everyday Japanese life exist side by side.'
      },
      {
        title: 'Tokyo After Dark',
        description:
          'Experience the city after sunset, when streets, food districts and neighbourhood lights create a completely different mood.'
      },
      {
        title: 'Slow Kyoto',
        description:
          'Walk through historic streets, discover traditional architecture and experience the atmosphere that gives Kyoto its distinctive character.'
      }
    ],
    itineraryDays: [
      {
        day: 1,
        title: 'Arrival in Tokyo',
        destination: 'Tokyo',
        description:
          'Arrive in Tokyo and settle into your surroundings. Depending on your arrival time, enjoy a relaxed first evening and begin getting familiar with the city.',
        highlights: ['Arrival support', 'Hotel check-in']
      },
      {
        day: 2,
        title: 'Tokyo — The City in Motion',
        destination: 'Tokyo',
        description:
          "Discover Tokyo's modern energy through its neighbourhoods, architecture, shopping streets and distinctive local atmosphere.",
        highlights: ['Modern districts', 'Local atmosphere']
      },
      {
        day: 3,
        title: 'Tokyo — Beyond the Obvious',
        destination: 'Tokyo',
        description:
          'Explore another side of Tokyo through quieter neighbourhoods, cultural experiences, local food or time to discover the city independently.',
        highlights: ['Quieter neighbourhoods', 'Independent discovery']
      },
      {
        day: 4,
        title: 'Tokyo → Kyoto',
        destination: 'Kyoto',
        description:
          "Leave Tokyo behind and travel towards Kyoto by high-speed rail. The change of scenery marks the beginning of a very different chapter of the journey.",
        highlights: ['Rail journey', 'Changing landscapes']
      },
      {
        day: 5,
        title: 'Kyoto — Timeless Japan',
        destination: 'Kyoto',
        description:
          "Discover Kyoto's historic atmosphere through traditional streets, cultural landmarks and beautiful Japanese surroundings.",
        highlights: ['Historic atmosphere', 'Cultural landmarks']
      },
      {
        day: 6,
        title: 'Kyoto — Local Experiences',
        destination: 'Kyoto',
        description:
          'Explore Kyoto at a slower pace with opportunities for food, culture, crafts, neighbourhoods or optional experiences.',
        highlights: ['Food and culture', 'Optional experiences']
      },
      {
        day: 7,
        title: 'Departure',
        destination: 'Kyoto',
        description:
          'Complete your Kyoto stay and depart Japan, or extend your journey with additional nights or destinations.',
        highlights: ['Departure support']
      }
    ],
    citySections: [
      {
        name: 'Tokyo',
        image: '/images/packages/tokyo-kyoto-escape/tokyo-kyoto-escape-tokyo.webp',
        description: 'The energy of modern Japan.',
        highlights: ['Modern Tokyo', 'Hidden neighbourhoods', 'Tokyo after dark']
      },
      {
        name: 'Kyoto',
        image: '/images/packages/tokyo-kyoto-escape/tokyo-kyoto-escape-kyoto.webp',
        description: 'Slow down and discover tradition.',
        highlights: ['Historic streets', 'Traditional architecture', 'Slower pace']
      }
    ],
    travelArrangements: [
      {
        title: 'Accommodation',
        description: 'Comfortable stays selected around convenience and the rhythm of the route.'
      },
      {
        title: 'Tokyo → Kyoto Transportation',
        description: 'Thoughtful rail planning helps make the transition between cities feel smooth.'
      },
      {
        title: 'Airport Transfers',
        description: 'Airport transfers can be included according to the final package configuration.'
      },
      {
        title: 'Local Support',
        description: 'Guidance and assistance throughout the journey where applicable.'
      }
    ],
    foodSection: {
      heading: 'Good travel should work around you.',
      description:
        'Food is part of the journey, and dietary preferences should never feel like an afterthought. Vegetarian and Jain-friendly dining arrangements can be incorporated into the trip through thoughtful planning and restaurant selection.',
      points: ['Vegetarian-friendly', 'Jain-friendly', 'Japanese cuisine'],
      image: '/images/packages/tokyo-kyoto-escape/tokyo-kyoto-escape-dining.webp'
    },
    includedItems: [
      'Accommodation',
      'Tokyo → Kyoto transportation',
      'Airport transfers where specified',
      'Selected meals',
      'Selected guided experiences',
      'Itinerary planning'
    ],
    excludedItems: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Optional experiences',
      'Visa fees',
      'Anything not specifically stated'
    ],
    inclusionsNote:
      'Final inclusions and exclusions will be clearly outlined in your quotation.',
    optionalExperiences: [
      {
        title: 'Private Kyoto cultural experience',
        description: 'Optional',
        image: '',
        label: 'Optional'
      },
      {
        title: 'Tokyo food experience',
        description: 'Optional',
        image: '',
        label: 'Optional'
      },
      {
        title: 'Travel by Shinkansen',
        description: 'Optional',
        image: '',
        label: 'Optional'
      }
    ],
    importantInformation: [
      {
        title: 'Best Time to Travel',
        description: 'Japan can be experienced throughout the year, with different seasonal highlights.'
      },
      {
        title: 'Pace',
        description: 'This route combines two cities and keeps the journey intentionally compact.'
      },
      {
        title: 'Customization',
        description: 'The itinerary can potentially be adjusted depending on requirements.'
      }
    ],
    faqItems: [
      {
        q: 'Is 7 days enough for Tokyo and Kyoto?',
        a: 'Yes. This itinerary is designed to offer a focused introduction to both cities.'
      },
      {
        q: 'Can I add Osaka to this package?',
        a: 'Yes. The journey can potentially be extended depending on your requirements.'
      },
      {
        q: 'Can I customize the itinerary?',
        a: 'Yes. Adjustments can be discussed around dates, pace and interests.'
      },
      {
        q: 'Is this package suitable for first-time visitors to Japan?',
        a: 'Yes. It is designed as a compact first journey through two iconic destinations.'
      },
      {
        q: 'Can vegetarian food be arranged?',
        a: 'Vegetarian-friendly planning can be incorporated into the journey.'
      },
      {
        q: 'Can Jain food be arranged?',
        a: 'Jain-friendly arrangements can be discussed and planned according to your requirements.'
      }
    ],
    finalCta: {
      heading: 'Ready to discover Tokyo and Kyoto?',
      description:
        "Tell us when you want to travel and what you'd like to experience. We'll help you shape the right Japan journey.",
      image: '/images/packages/tokyo-kyoto-escape/tokyo-kyoto-escape-hero.webp'
    }
  },
  {
    id: 'golden-route-japan',
    slug: 'golden-route-japan',
    title: 'Golden Route Japan',
    type: 'fixed',
    travelStyle: 'general',
    duration: '12 Days',
    destinations: 'Tokyo · Hakone · Kyoto · Nara · Osaka',
    description: 'An elegant route through Japan’s signature landscapes, cultural centres and memorable city moments.',
    price: 319990,
    image: '/images/packages/golden-route.webp',
    highlights: ['Hakone scenery', 'Nara heritage', 'Kyoto evenings'],
    destination: 'Tokyo · Hakone · Kyoto · Nara · Osaka',
    travelType: 'general',
    short: 'A balanced mix of iconic cities and classic Japanese landscapes.',
    priceFromINR: 319990
  },
  {
    id: 'japan-discovery',
    slug: 'japan-discovery',
    title: 'Japan Discovery',
    type: 'fixed',
    travelStyle: 'general',
    duration: '14 Days',
    destinations: 'Tokyo · Mount Fuji · Kyoto · Osaka · Hiroshima',
    description: 'A complete cultural and scenic journey shaped for travelers who want a fuller picture of Japan.',
    price: 399990,
    image: '/images/packages/japan-discovery.webp',
    highlights: ['Mount Fuji views', 'Hiroshima reflection', 'Kyoto culture'],
    destination: 'Tokyo · Mount Fuji · Kyoto · Osaka · Hiroshima',
    travelType: 'general',
    short: 'A broad yet well-paced journey through Japan’s major highlights.',
    priceFromINR: 399990
  },
  {
    id: 'japan-group-explorer',
    slug: 'japan-group-explorer',
    title: 'Japan Group Explorer',
    type: 'group',
    travelStyle: 'general',
    duration: '10 Days',
    destinations: 'Tokyo · Kyoto · Osaka',
    description: 'Group travel with clear planning, shared experiences and the comfort of expert support throughout.',
    price: 259990,
    image: '/images/packages/group-japan.webp',
    highlights: ['Shared city tours', 'Comfortable logistics', 'Flexible pacing'],
    destination: 'Tokyo · Kyoto · Osaka',
    travelType: 'general',
    short: 'A smooth, social way to see Japan with a group and local guidance.',
    priceFromINR: 259990
  },
  {
    id: 'autumn-japan-group-journey',
    slug: 'autumn-japan-group-journey',
    title: 'Autumn Japan Group Journey',
    type: 'group',
    travelStyle: 'general',
    duration: '10 Days',
    destinations: 'Tokyo · Kyoto · Nara · Osaka',
    description: 'Designed for travelers who want seasonal color, cultural moments and easy group coordination.',
    price: 279990,
    image: '/images/packages/autumn-group.webp',
    highlights: ['Seasonal scenery', 'Group-friendly routing', 'Temple visits'],
    destination: 'Tokyo · Kyoto · Nara · Osaka',
    travelType: 'general',
    short: 'A gentle group journey built around Japan’s autumn atmosphere.',
    priceFromINR: 279990
  },
  {
    id: 'cherry-blossom-group-tour',
    slug: 'cherry-blossom-group-tour',
    title: 'Cherry Blossom Japan Group Tour',
    type: 'group',
    travelStyle: 'general',
    duration: '10 Days',
    destinations: 'Tokyo · Kyoto · Osaka · Nara',
    description: 'A spring-focused excursion for groups wanting a classic Japan itinerary in bloom.',
    price: 289990,
    image: '/images/packages/cherry-blossom-group.webp',
    highlights: ['Hanami moments', 'Historic gardens', 'Spring routing'],
    destination: 'Tokyo · Kyoto · Osaka · Nara',
    travelType: 'general',
    short: 'Japan in bloom, planned for shared discovery and memorable moments.',
    priceFromINR: 289990
  },
  {
    id: 'tokyo-fit-escape',
    slug: 'tokyo-fit-escape',
    title: 'Tokyo FIT Escape',
    type: 'fit',
    travelStyle: 'general',
    duration: '6 Days',
    destinations: 'Tokyo',
    description: 'Flexible independent travel in Tokyo with tailored recommendations and carefully selected experiences.',
    price: 129990,
    image: '/images/packages/tokyo-fit.webp',
    highlights: ['Independent rhythm', 'Smart city planning', 'Flexible days'],
    destination: 'Tokyo',
    travelType: 'general',
    short: 'A flexible Tokyo getaway with support built around your pace.',
    priceFromINR: 129990
  },
  {
    id: 'tokyo-kyoto-fit',
    slug: 'tokyo-kyoto-fit',
    title: 'Tokyo & Kyoto FIT',
    type: 'fit',
    travelStyle: 'general',
    duration: '8 Days',
    destinations: 'Tokyo · Kyoto',
    description: 'A freedom-led city stay with structure, support and room to shape your own journey.',
    price: 169990,
    image: '/images/packages/tokyo-kyoto-fit.webp',
    highlights: ['Flexible route', 'Selective experiences', 'Travel support'],
    destination: 'Tokyo · Kyoto',
    travelType: 'general',
    short: 'Independent city travel with the guidance of local knowledge.',
    priceFromINR: 169990
  },
  {
    id: 'japan-fit-explorer',
    slug: 'japan-fit-explorer',
    title: 'Japan FIT Explorer',
    type: 'fit',
    travelStyle: 'general',
    duration: '12 Days',
    destinations: 'Tokyo · Hakone · Kyoto · Osaka',
    description: 'Flexible independent travel with well-chosen stays, train coordination and thoughtful planning.',
    price: 239990,
    image: '/images/packages/japan-fit.webp',
    highlights: ['Rail coordination', 'Independent flexibility', 'Curated support'],
    destination: 'Tokyo · Hakone · Kyoto · Osaka',
    travelType: 'general',
    short: 'For travelers who want freedom with the confidence of expert planning.',
    priceFromINR: 239990
  },
  {
    id: 'private-japan-discovery',
    slug: 'private-japan-discovery',
    title: 'Private Japan Discovery',
    type: 'custom',
    travelStyle: 'general',
    duration: '10 Days',
    destinations: 'Customizable',
    description: 'A fully private Japan journey shaped around your interests, pace and travel style.',
    price: 319990,
    image: '/images/packages/private-japan.webp',
    highlights: ['Private guide options', 'Flexible routing', 'Tailored travel rhythm'],
    destination: 'Customizable',
    travelType: 'general',
    short: 'A private journey built around your interests, dates and travel style.',
    priceFromINR: 319990
  },
  {
    id: 'private-luxury-japan',
    slug: 'private-luxury-japan',
    title: 'Private Luxury Japan',
    type: 'custom',
    travelStyle: 'luxury',
    duration: '12 Days',
    destinations: 'Tokyo · Hakone · Kyoto',
    description: 'A premium private itinerary designed for refined, relaxation-first travel in Japan.',
    price: 549990,
    image: '/images/packages/luxury-japan.webp',
    highlights: ['Luxury stays', 'Private experiences', 'High-touch planning'],
    destination: 'Tokyo · Hakone · Kyoto',
    travelType: 'luxury',
    short: 'A premium private itinerary designed around your pace and preferences.',
    priceFromINR: 549990
  },
  {
    id: 'japan-honeymoon',
    slug: 'japan-honeymoon',
    title: 'Japan Honeymoon',
    type: 'fixed',
    travelStyle: 'honeymoon',
    duration: '9 Days',
    destinations: 'Tokyo · Hakone · Kyoto',
    description: 'A romantic route with special moments, scenic stays and intimate experiences across Japan.',
    price: 349990,
    image: '/images/packages/japan-honeymoon.webp',
    highlights: ['Honeymoon stays', 'Private onsen', 'Romantic experiences'],
    destination: 'Tokyo · Hakone · Kyoto',
    travelType: 'honeymoon',
    short: 'Intimate experiences, ryokan stays and private guided moments.',
    priceFromINR: 349990
  },
  {
    id: 'luxury-japan-honeymoon',
    slug: 'luxury-japan-honeymoon',
    title: 'Luxury Japan Honeymoon',
    type: 'custom',
    travelStyle: 'honeymoon, luxury',
    duration: '12 Days',
    destinations: 'Tokyo · Hakone · Kyoto · Osaka',
    description: 'An elevated honeymoon with privacy, exceptional stays and immersive cultural moments.',
    price: 699990,
    image: '/images/packages/luxury-honeymoon.webp',
    highlights: ['Luxury ryokan', 'Private dining', 'Warm, intimate planning'],
    destination: 'Tokyo · Hakone · Kyoto · Osaka',
    travelType: 'honeymoon, luxury',
    short: 'A refined romantic journey with luxury stays and thoughtful experiences.',
    priceFromINR: 699990
  },
  {
    id: 'family-japan-adventure',
    slug: 'family-japan-adventure',
    title: 'Family Japan Adventure',
    type: 'fixed',
    travelStyle: 'family',
    duration: '12 Days',
    destinations: 'Tokyo · Kyoto · Osaka',
    description: 'A family-friendly route balancing fun, culture and comfortable pacing for all ages.',
    price: 259990,
    image: '/images/packages/family-japan.webp',
    highlights: ['Family-friendly pacing', 'Comfortable hotels', 'Guided culture time'],
    destination: 'Tokyo · Kyoto · Osaka',
    travelType: 'family',
    short: 'Child-friendly experiences and gentle pace for families.',
    priceFromINR: 259990
  },
  {
    id: 'japan-family-discovery',
    slug: 'japan-family-discovery',
    title: 'Japan Family Discovery',
    type: 'fixed',
    travelStyle: 'family',
    duration: '10 Days',
    destinations: 'Tokyo · Mount Fuji · Kyoto',
    description: 'Thoughtful family travel designed to keep the journey enjoyable, interactive and effortless.',
    price: 219990,
    image: '/images/packages/family-discovery.webp',
    highlights: ['Mount Fuji day', 'Flexible family activities', 'Easy logistics'],
    destination: 'Tokyo · Mount Fuji · Kyoto',
    travelType: 'family',
    short: 'A fun and comfortable route for families exploring Japan together.',
    priceFromINR: 219990
  }
];
