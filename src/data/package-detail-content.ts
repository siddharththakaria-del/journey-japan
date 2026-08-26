export type PackageDetailSection = {
  eyebrow: string;
  heading: string;
  copy: string;
  points?: string[];
};

export type PackageDetailNotes = {
  arrival: string;
  city: string;
  culture: string;
  transfer: string;
  flex: string;
  departure: string;
};

export type PackageDetailFaq = {
  q: string;
  a: string;
};

export type PackageDetailContent = {
  heroDescription: string;
  briefSections: PackageDetailSection[];
  itineraryDays?: {
    day: number;
    title: string;
    destination: string;
    description: string;
    highlights?: string[];
  }[];
  itineraryNotes: PackageDetailNotes;
  faqItems: PackageDetailFaq[];
  finalCta: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

const s = (eyebrow: string, heading: string, copy: string, points?: string[]): PackageDetailSection => ({
  eyebrow,
  heading,
  copy,
  points
});

const f = (q: string, a: string): PackageDetailFaq => ({ q, a });

export const packageDetailContent: Record<string, PackageDetailContent> = {
  'classic-japan': {
    heroDescription:
      'A considered first journey through Japan that brings Tokyo, Kyoto and Osaka into one calm, confident flow.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'A first Japan trip that feels clear rather than crowded.',
        'Classic Japan is shaped for travelers who want the reassurance of a well-known route without losing the feeling of discovery. The trip introduces Japan through three cities that each show a different side of the country, so the experience feels complete without becoming overly ambitious.\n\nThe structure gives you room to arrive, settle and move with confidence. That makes it especially useful for first-time travelers who want a premium introduction that still feels easy to follow day by day.'
      ),
      s(
        'ROUTING',
        'Tokyo first, Kyoto second, Osaka to finish with energy.',
        'The sequence matters here. Tokyo opens the journey with scale and momentum, Kyoto slows the pace with history and atmosphere, and Osaka closes the trip on a warmer, more relaxed note. The contrast between those cities is what gives the package its rhythm.\n\nBy moving in this order, the route avoids backtracking and keeps each transfer purposeful. It is a simple but effective way to make a classic itinerary feel polished and intelligently planned.'
      ),
      s(
        'LOCAL FEEL',
        'Iconic cities, but with enough room for small discoveries.',
        'This package is not about rushing through a checklist of famous sights. It leaves space for neighbourhood walks, food stops and moments that help each city feel lived-in rather than simply visited.\n\nThat balance is what makes the route feel more premium. You still see the essentials, but the journey also creates time to notice the quiet details that are often remembered most after the trip ends.',
        ['Neighbourhood time', 'Cultural pauses', 'A better sense of place']
      ),
      s(
        'PRACTICAL PLANNING',
        'Designed for comfort, pacing and straightforward decision-making.',
        'Classic Japan works well for travelers who want to feel looked after without being over-directed. The itinerary can support different travel styles, from couples to families, while keeping the planning process easy to understand.\n\nSeasonal conditions, transport timing and daily pace are all important on a multi-city trip like this, so the structure is built to stay calm and manageable. That makes it a dependable choice when you want a refined, low-friction Japan experience.',
        ['Easy pacing', 'Comfort-first flow', 'Good for a first visit']
      )
    ],
    itineraryNotes: {
      arrival: 'The first day is kept deliberately gentle so you can settle in, reset after travel and start the trip with a clear sense of pace.',
      city: 'Each full day uses the city at a natural rhythm, mixing main highlights with local streets and enough time to pause between experiences.',
      culture: 'Cultural moments are woven in without feeling heavy, letting the route show temples, neighbourhood character and everyday Japan together.',
      transfer: 'City changes are handled as part of the experience, so the transition feels smooth and the next chapter begins without stress.',
      flex: 'Where the route allows flexibility, the day is left open for food, shopping, extra sightseeing or a slower personal pace.',
      departure: 'The final day closes the journey cleanly, with practical departure planning and a final chance to remember the trip in comfort.'
    },
    faqItems: [
      f('Is Classic Japan a good first trip?', 'Yes. It is designed as a clear introduction to Japan for travelers who want the major highlights in one well-paced journey.'),
      f('How much moving around is involved?', 'The route includes three cities, but the flow is planned to keep transfers orderly and the overall pace comfortable.'),
      f('Can the trip be adjusted?', 'Yes. Dates, pace and selected experiences can be discussed during the quotation stage.'),
      f('Is this suitable for couples or families?', 'Yes. The structure is flexible enough to work for different traveler types while keeping the journey coherent.')
    ],
    finalCta: {
      eyebrow: 'READY TO PLAN YOUR CLASSIC JOURNEY?',
      heading: 'Turn a first Japan trip into a confident one.',
      description:
        'Share your dates and the style of travel you prefer, and our team can shape Classic Japan around your pace, comfort and priorities.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'tokyo-kyoto-escape': {
    heroDescription:
      'A focused two-city journey that pairs Tokyo energy with Kyoto calm in a short, well-balanced escape.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'Two cities, one clear story.',
        'Tokyo and Kyoto create a strong contrast, which is why this package works so well for shorter travel windows. The route gives you enough time to feel the personality of each city instead of trying to cover too much ground.\n\nThat simplicity is part of the appeal. It keeps the experience elegant, removes unnecessary pressure and makes the trip feel restful even when the days are full.'
      ),
      s(
        'ROUTING',
        'A short itinerary that still feels complete.',
        'The journey is paced to let Tokyo set the tone before Kyoto brings the pace down. That change in rhythm is what turns a seven-day trip into something memorable rather than rushed.\n\nBecause the route is compact, each day can stay focused. There is enough movement to feel like a proper Japan trip, but not so much that the experience starts to feel crowded or thin.'
      ),
      s(
        'LOCAL FEEL',
        'Modern city life and old-world atmosphere in close contrast.',
        'Tokyo gives the trip movement, variety and scale, while Kyoto adds tradition, texture and a quieter emotional tone. Together they show two of the strongest reasons people fall in love with Japan.\n\nThe package is especially good for travelers who want to feel the contrast between contemporary and historic Japan without needing a long holiday to do it.',
        ['Strong contrast', 'Compact but complete', 'Good city balance']
      ),
      s(
        'PRACTICAL PLANNING',
        'Built for travelers who want clarity and momentum.',
        'Seven days is enough when the routing is thoughtful. This package keeps decisions easy by narrowing the focus to two cities and making the plan feel intentional from the start.\n\nThat makes it useful for short breaks, couples and first visits alike. The result is a trip that feels highly usable, easy to quote and simple to adapt if the traveler wants to add more depth later.',
        ['Short break friendly', 'Easy to adapt', 'Low planning friction']
      )
    ],
    itineraryNotes: {
      arrival: 'The opening day is about arriving well and easing into Tokyo so the trip starts with confidence rather than urgency.',
      city: 'Tokyo days focus on modern neighborhoods, food and cultural contrast, giving the city time to feel layered and alive.',
      culture: 'Kyoto days slow the tempo with heritage streets, quieter mornings and the kind of atmosphere that rewards a gentler pace.',
      transfer: 'The transfer day becomes a meaningful transition, so the move between cities feels like part of the journey rather than a logistical interruption.',
      flex: 'Flexible moments are left open for shopping, cafes, optional sightseeing or simply letting the day breathe.',
      departure: 'The final day is practical and calm, with enough space to leave Japan without feeling rushed.'
    },
    faqItems: [
      f('Is seven days enough for Tokyo and Kyoto?', 'Yes. The package is designed specifically to make a shorter two-city trip feel complete and comfortable.'),
      f('Can I extend this trip later?', 'Yes. It can be expanded if you decide you want more time in Japan or want to add Osaka.'),
      f('Is this a good couple package?', 'Yes. The compact routing and contrast between the two cities make it especially appealing for couples.'),
      f('Will I have free time?', 'Yes. The itinerary leaves space for independent exploration so the journey does not feel over-scheduled.')
    ],
    finalCta: {
      eyebrow: 'READY TO MAKE IT TWO CITIES?',
      heading: 'Shape a shorter Japan escape with more intention.',
      description:
        'Tell us how you like to travel and we can tailor this compact Tokyo and Kyoto journey around your pace, interests and travel dates.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'golden-route-japan': {
    heroDescription:
      'A classic Japan route with scenic pauses in Hakone and heritage stops that make the journey feel broad and refined.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'The signature route, reworked with more breathing room.',
        'Golden Route Japan brings together the cities and landscapes that define the country for many first-time travelers. The difference here is the pacing: it gives each stop enough room to feel distinct rather than rushing from highlight to highlight.\n\nThat approach makes the route feel especially polished. It is broad in scope, but the flow still feels controlled and easy to follow, which is why it works so well for travelers who want a classic experience with more composure.'
      ),
      s(
        'ROUTING',
        'From city momentum to mountain calm and back again.',
        'The route moves with purpose. Tokyo introduces the energy, Hakone softens the rhythm, Kyoto and Nara deepen the cultural story and Osaka finishes the journey with a lively, food-led edge.\n\nThat sequence keeps the experience varied without feeling random. Each move reveals a different side of Japan, which is exactly what makes this itinerary one of the most dependable ways to experience the country for the first time.'
      ),
      s(
        'LOCAL FEEL',
        'Scenery, heritage and city life in one trip.',
        'This package has a nice balance between well-known sights and the quieter moments between them. Hakone gives the route its scenic pause, Kyoto adds depth and Nara brings a gentler pace that many travelers appreciate.\n\nThe result is a journey that feels fuller than a simple city circuit. It has enough variety to stay interesting over 12 days while still remaining easy to understand and plan around.',
        ['Scenic balance', 'Cultural depth', 'A richer first view of Japan']
      ),
      s(
        'PRACTICAL PLANNING',
        'Good for travelers who want structure without a rigid feel.',
        'A longer route like this benefits from clear sequencing and sensible day design. The journey is meant to feel comfortable across multiple destinations, so the pacing matters as much as the sights themselves.\n\nIt also gives room to think about seasonality, weather and travel timing in a more thoughtful way. That makes it a strong fit for travelers who want a classic itinerary that still feels personal and well considered.',
        ['Multiple-stop comfort', 'Season-aware planning', 'Good for a fuller holiday']
      )
    ],
    itineraryNotes: {
      arrival: 'The opening day eases you into Tokyo and keeps the arrival experience calm, practical and easy to manage.',
      city: 'Tokyo days are used to show contrast, with a mix of city movement, neighborhood texture and time to enjoy food and design.',
      culture: 'Kyoto and Nara days focus on atmosphere, heritage and a slower cultural rhythm that brings more depth to the route.',
      transfer: 'Hakone and intercity transfers are treated as part of the journey, giving the route a scenic and deliberate shift in pace.',
      flex: 'Flexible days can be used for optional sightseeing, resting or leaning into the kind of discovery that suits the traveler best.',
      departure: 'The final stretch is handled with the same calm planning, so departure feels smooth after a broad and rewarding route.'
    },
    faqItems: [
      f('Why is this called the Golden Route?', 'It follows the classic Tokyo, Hakone, Kyoto, Nara and Osaka pattern that many travelers use as a first major Japan journey.'),
      f('Is the route too busy?', 'No. The itinerary is paced to keep the journey broad without making it feel rushed.'),
      f('Can it be tuned for couples or families?', 'Yes. The route can be adapted within the same overall structure depending on the traveler profile.'),
      f('Does Hakone add much to the trip?', 'Yes. It gives the journey a scenic pause and helps break up the city rhythm in a meaningful way.')
    ],
    finalCta: {
      eyebrow: 'READY FOR THE SIGNATURE ROUTE?',
      heading: 'Plan a classic Japan journey with more balance.',
      description:
        'If you want the iconic route done thoughtfully, we can tailor this journey around your dates, preferred pace and comfort level.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'japan-discovery': {
    heroDescription:
      'A fuller Japan journey that combines major cities, Mount Fuji views and a wider cultural arc across the country.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'Built for travelers who want a broader picture of Japan.',
        'Japan Discovery is the most expansive of the classic fixed journeys, which makes it ideal for travelers who want to see more than the usual short-route highlights. It stretches the experience just enough to include scenic context and a stronger sense of national variety.\n\nBecause the route is longer, it can move with a more relaxed rhythm. That gives each place time to register properly, which matters when the goal is to leave with a deeper and more rounded view of Japan.'
      ),
      s(
        'ROUTING',
        'The itinerary links city scale with landscape and memory.',
        'Tokyo and Osaka provide the energy and movement, Kyoto adds cultural weight, Mount Fuji brings in a scenic pause and Hiroshima introduces a more reflective chapter. The route has a clear emotional curve, not just a list of stops.\n\nThat makes it especially strong for travelers who want a journey that feels meaningful as well as enjoyable. There is a sense of progression from one chapter to the next, which helps the whole trip feel substantial.'
      ),
      s(
        'LOCAL FEEL',
        'More time means more room to understand the country.',
        'A 14-day journey creates space for local pace, not just sightseeing. It allows the itinerary to show how the mood changes from one place to the next and how the same country can feel very different across regions.\n\nThat depth is what makes Japan Discovery feel special. It is less about speed and more about understanding, which is often what travelers are looking for when they choose a longer trip.',
        ['Wider geographic range', 'More reflective pacing', 'A fuller Japan story']
      ),
      s(
        'PRACTICAL PLANNING',
        'Longer trips need stronger rhythm, and this one has it.',
        'With more days comes more opportunity, but also more need for careful planning. The route is designed to stay coherent so the journey feels like one flowing experience rather than several short trips stitched together.\n\nThat is especially useful for travelers who want value in the shape of the experience, not just in the number of places visited. The pace stays measured, the transitions stay clear and the trip remains comfortable throughout.',
        ['Long-trip balance', 'Clear progression', 'Comfort across distance']
      )
    ],
    itineraryNotes: {
      arrival: 'The first day gives Tokyo enough time to welcome you in properly so the longer trip begins with an easy landing.',
      city: 'City days blend major sights with slower moments, helping each destination feel more layered and less like a quick stopover.',
      culture: 'Cultural chapters are given more room, which helps Kyoto and Hiroshima add depth rather than just checkbox value.',
      transfer: 'Longer moves are paced carefully so the journey keeps its sense of ease even as the route grows broader.',
      flex: 'Flexible days can be used for extra views of Mount Fuji, shopping, dining or simply absorbing the destination more slowly.',
      departure: 'The closing day is planned to feel graceful and practical after a long journey through several distinct parts of Japan.'
    },
    faqItems: [
      f('What makes this trip more complete?', 'It includes more of Japan’s major highlights and gives the itinerary enough time to breathe.'),
      f('Is 14 days too long for a first visit?', 'Not if you want a fuller introduction. The pacing is designed so the longer route still feels manageable.'),
      f('Can Hiroshima be adjusted out?', 'If needed, the route can be discussed and adapted before confirmation.'),
      f('Is this suitable for travelers who want scenic variety?', 'Yes. The mix of city, mountain and reflective cultural stops is one of its strongest features.')
    ],
    finalCta: {
      eyebrow: 'READY FOR A BIGGER PICTURE?',
      heading: 'See more of Japan without losing the thread.',
      description:
        'We can help you turn a longer route into a clear, comfortable journey that still feels refined from start to finish.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'japan-group-explorer': {
    heroDescription:
      'A sociable group journey through Tokyo, Kyoto and Osaka with a pace that keeps the itinerary coordinated and easy to share.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'A group trip that stays organised without feeling stiff.',
        'Japan Group Explorer is designed for shared travel, where the value comes from smooth coordination and a route that everyone can enjoy together. The itinerary keeps the group moving in the same direction while leaving space for a sense of discovery.\n\nThat balance matters in group travel. When the structure is clear, the experience feels lighter, because travelers can focus on the journey itself instead of on the logistics around it.'
      ),
      s(
        'ROUTING',
        'Built around easy city changes and common touchpoints.',
        'The route follows the classic three-city pattern, which makes it easy to understand and simple to manage as a group. Tokyo starts with energy, Kyoto brings in history and Osaka finishes with a more relaxed social tone.\n\nThat structure works well for groups because it creates shared reference points each day. Everyone experiences the same journey, but there is still room for different interests and personal pace within the plan.'
      ),
      s(
        'LOCAL FEEL',
        'Shared experiences, not just shared transport.',
        'A good group journey should still feel like travel, not coordination for its own sake. This route keeps a thoughtful mix of highlights, local atmosphere and softer moments so the group feels engaged rather than rushed.\n\nIt is especially effective for friends, communities and smaller touring groups that want to enjoy Japan together while still having a premium level of structure and support.',
        ['Shared highlights', 'Easy coordination', 'Premium group flow']
      ),
      s(
        'PRACTICAL PLANNING',
        'Designed to keep a group comfortable from start to finish.',
        'Group travel works best when the plan is straightforward and consistent. This itinerary does that while still leaving enough flexibility for the group dynamic to stay enjoyable over multiple days.\n\nIt also helps with planning expectations before the trip begins. Travelers can see how the journey unfolds, understand the pace and feel confident that the structure supports the whole group well.',
        ['Coordinated pacing', 'Comfortable for sharing', 'Clear journey structure']
      )
    ],
    itineraryNotes: {
      arrival: 'Arrival day keeps the group together in a calm, manageable way so the trip begins smoothly for everyone.',
      city: 'City days are paced for shared discovery, with enough structure to keep the group aligned and enough space for individual interest.',
      culture: 'Cultural days give the group a common experience that feels memorable without becoming overly packed.',
      transfer: 'Transfers are planned as part of the group flow, helping the whole itinerary stay cohesive and low-stress.',
      flex: 'Flexible time can be used for common meals, independent browsing or a slower option for anyone who wants it.',
      departure: 'The final day closes the group journey in a simple and practical way so departures stay organised.'
    },
    faqItems: [
      f('How large can the group be?', 'The package can be discussed for different group sizes depending on the travel brief.'),
      f('Will everyone follow the same plan?', 'Yes, but there can still be room for flexibility around certain experiences.'),
      f('Is this good for mixed-age groups?', 'Yes. The pacing is intended to stay comfortable across a range of traveler types.'),
      f('Can vegetarian or Jain dining be arranged?', 'Yes. Meal planning can be discussed as part of the group quotation.')
    ],
    finalCta: {
      eyebrow: 'READY TO TRAVEL TOGETHER?',
      heading: 'Plan a group journey that stays easy to share.',
      description:
        'We can help shape a coordinated Japan trip that keeps the group aligned, comfortable and engaged throughout the journey.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'autumn-japan-group-journey': {
    heroDescription:
      'A seasonal group journey shaped around Japan in autumn, with quieter pacing and a warmer visual rhythm.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'Autumn gives the trip a softer, more atmospheric quality.',
        'This itinerary is designed for travelers who want to enjoy Japan when the season itself becomes part of the experience. Autumn colors, cooler air and more comfortable walking days all help the trip feel especially inviting.\n\nBecause it is a group journey, the seasonal mood becomes something shared. The package is built to make that atmosphere feel central without losing the practical ease that group travel needs.'
      ),
      s(
        'ROUTING',
        'A route that suits autumn light and relaxed exploration.',
        'The route moves through Tokyo, Kyoto, Nara and Osaka in a way that supports the season rather than fighting it. The days are structured to give travelers time to enjoy streets, gardens and changing scenery without a sense of hurry.\n\nThat means the package feels especially good for travelers who like a slower, more reflective kind of group trip. It is seasonal, but still very practical in the way the route is arranged.'
      ),
      s(
        'LOCAL FEEL',
        'Seasonal atmosphere, heritage spaces and shared pauses.',
        'Autumn is one of the easiest seasons in which to appreciate Japan’s everyday beauty. This package uses that quality well, giving the group time to enjoy the mood of the cities as much as the major sights.\n\nThe result is a journey that feels grounded and cinematic at the same time. It has the clarity of a fixed itinerary but the feeling of traveling through a season, not just a route.',
        ['Season-led pacing', 'Good for walking', 'Warm shared atmosphere']
      ),
      s(
        'PRACTICAL PLANNING',
        'Comfort and seasonality matter equally here.',
        'Autumn is a popular time to travel, so clear planning helps. This itinerary keeps the journey manageable across a group while making sure the seasonal experience remains the central feature.\n\nThat combination is useful for travelers who want the mood of autumn without having to handle the planning on their own. It keeps the route usable, comfortable and easy to communicate.',
        ['Season-aware routing', 'Group-friendly structure', 'Comfortable walking pace']
      )
    ],
    itineraryNotes: {
      arrival: 'Arrival day is kept gentle so the group can settle in before the seasonal part of the journey begins.',
      city: 'Autumn city days are built around comfortable movement, easier walks and time to enjoy the season’s atmosphere.',
      culture: 'Kyoto and Nara bring the strongest seasonal tone, with heritage spaces that feel especially rewarding in autumn.',
      transfer: 'Transfers are timed to preserve the sense of flow so the group can enjoy the season rather than rush through it.',
      flex: 'Flexible time can be used for more scenic walks, photo stops or a slower pace if the weather invites it.',
      departure: 'The departure day closes the seasonal journey cleanly, with enough time left to leave Japan feeling unhurried.'
    },
    faqItems: [
      f('Why choose autumn for this trip?', 'Autumn brings a softer atmosphere, more comfortable weather and especially memorable city and garden moments.'),
      f('Is this itinerary suitable for group travel?', 'Yes. It is structured so the group can stay coordinated while still enjoying the seasonal mood.'),
      f('Can it be shifted slightly for weather?', 'Yes. Seasonal timing and travel dates can be discussed during planning.'),
      f('Will there be enough time to enjoy the foliage?', 'The route is designed with enough breathing room to enjoy the season rather than hurry through it.')
    ],
    finalCta: {
      eyebrow: 'READY FOR AUTUMN JAPAN?',
      heading: 'Make the season part of the journey.',
      description:
        'If you want a group trip with a stronger seasonal mood, we can shape the route around your dates and the pace you prefer.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'cherry-blossom-group-tour': {
    heroDescription:
      'A spring group journey built around blossom season, shared city experiences and the joy of traveling together in peak season.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'Spring adds energy, softness and a sense of occasion.',
        'Cherry Blossom Group Tour is built for travelers who want to experience Japan at one of its most memorable times of year. The route is not just about flowers; it is about the way spring changes the mood of the whole trip.\n\nBecause the trip is shared, the seasonal feeling becomes part of the group memory. That makes the package particularly appealing for travelers who want an uplifting and visually rich Japan journey.'
      ),
      s(
        'ROUTING',
        'A spring itinerary with enough structure to enjoy the season well.',
        'Tokyo, Kyoto, Osaka and Nara each bring a different part of the spring experience, from city parks to calmer heritage spaces. The route stays practical, but it is arranged to give the group enough time to enjoy the season when it matters most.\n\nThat balance is important during blossom season, when travelers often want both direction and room to pause. This package is built to provide exactly that.'
      ),
      s(
        'LOCAL FEEL',
        'Spring moments that feel shared rather than rushed.',
        'There is something special about seeing Japan in bloom with other travelers. This journey uses that feeling well by creating a route that leaves room for scenic pauses, local walking and simple spring moments.\n\nIt is designed to feel celebratory but still polished. The result is a group package that feels lively, memorable and easy to trust during a busy season.'
      ),
      s(
        'PRACTICAL PLANNING',
        'Blossom season needs careful timing, and the plan reflects that.',
        'Spring is one of the most in-demand times to travel, so the itinerary has to be both appealing and realistic. This package keeps the structure simple, which makes it easier to adapt around travel dates and seasonal conditions.\n\nThat makes it a good option for groups who want the blossom experience but also value clarity in how the trip is organized. It stays elegant rather than complicated.',
        ['Peak-season awareness', 'Simple group planning', 'Room for scenic pauses']
      )
    ],
    itineraryNotes: {
      arrival: 'The opening day gives the group time to settle in before the spring-focused parts of the journey begin.',
      city: 'Spring city days are paced so the group can enjoy parks, streets and seasonal atmosphere without feeling hurried.',
      culture: 'Kyoto and Nara bring a softer spring mood that works beautifully with heritage spaces and quiet walks.',
      transfer: 'Transfers are kept orderly so the blossom experience remains the focus instead of the logistics.',
      flex: 'Flexible time can be used for extra scenic stops, relaxed meals or a slower visit if the weather is especially good.',
      departure: 'Departure is planned with the same calm pacing so the trip ends comfortably after a busy season.'
    },
    faqItems: [
      f('How does this differ from a regular group trip?', 'It is timed and paced specifically to make spring the mood of the whole journey.'),
      f('Is blossom timing guaranteed?', 'Timing depends on the season, so planning should be discussed carefully around travel dates.'),
      f('Can the group itinerary be adapted?', 'Yes. The structure can be discussed and adjusted before confirmation.'),
      f('Is this suitable for first-time visitors?', 'Yes. The itinerary remains clear and approachable even during a peak travel season.')
    ],
    finalCta: {
      eyebrow: 'READY FOR SPRING IN JAPAN?',
      heading: 'Plan a group journey around the season that everyone remembers.',
      description:
        'If blossom season is on your list, we can help structure a Japan trip that keeps the season central and the planning simple.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'tokyo-fit-escape': {
    heroDescription:
      'A flexible Tokyo stay for travelers who want independent days with thoughtful support behind the scenes.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'Built for travelers who like freedom with a little guidance.',
        'Tokyo FIT Escape gives independent travelers the structure they need without taking away their sense of control. It is ideal for people who want to move at their own pace while still knowing that the trip has been planned with care.\n\nThe result is a city stay that feels effortless. You can keep the days light or make them active, but the framework around the trip stays reliable and easy to manage.'
      ),
      s(
        'ROUTING',
        'All Tokyo, all flexibility.',
        'Because the journey stays in one city, the itinerary can be more responsive to mood, weather and personal preference. That makes Tokyo a particularly good place for FIT travel, since the city already offers so many different ways to spend a day.\n\nThe package is set up so the traveler can feel independent without feeling unprepared. It gives enough direction to keep the experience smart, while still leaving real room to decide what the day should be.'
      ),
      s(
        'LOCAL FEEL',
        'A city stay that can be as energetic or as calm as you want.',
        'Tokyo is made for flexible travel because every neighborhood has its own character. This package leans into that by leaving room for food, design, shopping, culture and quieter corners of the city.\n\nThat variety is what makes FIT travel here especially rewarding. You are not locked into one style of day, so the trip can adapt naturally to what feels right in the moment.',
        ['Independent pace', 'City variety', 'Good for repeat travelers']
      ),
      s(
        'PRACTICAL PLANNING',
        'Support is hidden in the background, not at the center.',
        'The aim of a FIT package is to make travel feel easy without making it feel managed. That means transport, timing and recommendations are all thought through, but the day itself still belongs to the traveler.\n\nThis is a strong choice for confident travelers, short city breaks and anyone who wants a Tokyo stay that feels polished, personal and adaptable.',
        ['Flexible days', 'Quiet support', 'Easy to personalize']
      )
    ],
    itineraryNotes: {
      arrival: 'The opening day helps the traveler settle into Tokyo at an easy pace before independent exploring begins.',
      city: 'City days are loose enough to adapt, with space for food, neighborhoods and whichever side of Tokyo feels most appealing.',
      culture: 'Cultural stops can be folded in naturally so the trip feels rounded without becoming over-structured.',
      transfer: 'There is no intercity transfer pressure here, so the itinerary keeps its focus on ease and local movement.',
      flex: 'Flexible days are especially useful in Tokyo, where the weather, energy and personal mood can all shape the plan.',
      departure: 'The last day is practical and efficient, keeping the departure smooth after a self-directed city stay.'
    },
    faqItems: [
      f('What does FIT mean?', 'FIT means Flexible Independent Travel, with support planned around your own pace.'),
      f('Is this just a hotel stay?', 'No. It includes planning and structure so the city stay feels thought through, not improvised.'),
      f('Can I add experiences?', 'Yes. Optional experiences can be discussed as part of the quotation.'),
      f('Is this suitable for solo travelers?', 'Yes. It is especially useful for confident independent travelers who still want expert planning.')
    ],
    finalCta: {
      eyebrow: 'READY FOR FLEXIBLE TOKYO TRAVEL?',
      heading: 'Keep the freedom, keep the planning simple.',
      description:
        'We can help shape a Tokyo stay that gives you independence while still feeling professionally organised.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'tokyo-kyoto-fit': {
    heroDescription:
      'Independent travel across Tokyo and Kyoto with enough planning support to keep the journey smooth and adaptable.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'Two cities, but still plenty of room to choose your own pace.',
        'Tokyo & Kyoto FIT is ideal for travelers who want to move between two major destinations without giving up the freedom of independent travel. The structure is there, but it never feels heavy handed.\n\nThat makes the journey feel especially practical for travelers who are confident exploring on their own but still want the reassurance of well-placed planning behind the scenes.'
      ),
      s(
        'ROUTING',
        'A clear city pair with a strong contrast in mood.',
        'Tokyo gives the trip momentum and variety, while Kyoto shifts the rhythm toward quiet streets, heritage spaces and more reflective time. The trip works because those two cities complement each other so well.\n\nFor FIT travelers, that contrast is useful. It creates a trip with enough variety to feel meaningful, yet the route still remains focused and easy to navigate independently.'
      ),
      s(
        'LOCAL FEEL',
        'Independent days, but with a stronger sense of direction.',
        'FIT travel is at its best when the traveler can enjoy the city instead of worrying about logistics. This package supports that by giving just enough framing to help each day feel easy to shape.\n\nIt is especially appealing for travelers who like to combine landmarks with local cafes, shopping streets, cultural time and quieter walking neighborhoods. The journey feels personal because the choices stay open.'
      ),
      s(
        'PRACTICAL PLANNING',
        'A good fit for travelers who want ease without being boxed in.',
        'The package is intentionally designed to keep the trip usable across both cities. That means the plan has structure, but it still leaves enough space for spontaneous decisions once you arrive.\n\nIt is a practical option for people who want a smarter version of independent travel, especially when visiting Japan for the first time or returning for a more relaxed second trip.',
        ['Easy self-paced travel', 'Two-city balance', 'Planning support in the background']
      )
    ],
    itineraryNotes: {
      arrival: 'Arrival in Tokyo is handled gently so the independent trip begins with confidence and no sense of rush.',
      city: 'Tokyo days leave room for spontaneous choices while still giving enough structure to make the city feel easy to approach.',
      culture: 'Kyoto brings the itinerary into a slower, more reflective mode with space for heritage streets and quieter exploration.',
      transfer: 'The move between cities is a planned transition, so the trip keeps its independent feel without becoming complicated.',
      flex: 'Flexible time can be used for personal interests, extra food stops or whatever style of exploring suits the traveler best.',
      departure: 'Departure planning stays simple and practical so the journey ends cleanly after two independent city stays.'
    },
    faqItems: [
      f('Is this a good first FIT trip?', 'Yes. It gives the right amount of support for travelers who want more freedom but still value planning.'),
      f('Can I spend longer in one city?', 'That can be discussed, depending on your dates and overall travel plan.'),
      f('Does FIT mean no guidance?', 'No. It means the guidance is light-touch and the traveler still controls the experience.'),
      f('Is Kyoto easy to navigate this way?', 'Yes. The structure helps make the move from Tokyo to Kyoto feel straightforward.')
    ],
    finalCta: {
      eyebrow: 'READY FOR FLEXIBLE CITY TRAVEL?',
      heading: 'Plan Tokyo and Kyoto your way, with less guesswork.',
      description:
        'We can build a FIT journey that leaves you free to explore while keeping the overall trip well prepared.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'japan-fit-explorer': {
    heroDescription:
      'A longer FIT journey across Tokyo, Hakone, Kyoto and Osaka for travelers who want freedom with a stronger framework.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'Independent travel, but with a broader route already worked out.',
        'Japan FIT Explorer is a strong option for travelers who like the control of independent travel but want more than a single-city stay. The route adds depth by linking four destinations that each give the journey a different tone.\n\nThat broad shape makes it feel like a real exploration rather than a basic city break. The planning still stays light, but the trip itself feels more varied and more rewarding because the route has been carefully thought through.'
      ),
      s(
        'ROUTING',
        'A route that lets you move with confidence.',
        'Tokyo sets the pace, Hakone creates a scenic pause, Kyoto adds the cultural core and Osaka brings the journey to a lively close. It is a route that suits travelers who want to feel they are really moving through Japan instead of staying in one place.\n\nBecause the itinerary keeps the framework clear, the traveler can focus on the experience rather than on the route. That makes the journey feel accessible even when it covers several destinations.'
      ),
      s(
        'LOCAL FEEL',
        'More freedom, but still enough context to travel well.',
        'This package works because it gives travelers the satisfaction of independence without requiring them to build everything themselves. The route itself already has logic, which is often the hardest part of planning a longer FIT journey.\n\nThat means the trip can feel personal without feeling improvised. It is a useful choice for travelers who want to see more of Japan while keeping the overall planning process relaxed.'
      ),
      s(
        'PRACTICAL PLANNING',
        'Independent travel becomes easier when the route is clear.',
        'The value of this package is not just in the destinations, but in the confidence that comes from having the route mapped out. The traveler can enjoy the freedom of exploring while still knowing the backbone of the trip is sound.\n\nFor a multi-stop FIT journey, that combination is especially useful. It keeps the trip polished, flexible and easy to use in real life.',
        ['More route variety', 'Independent but supported', 'Works well for longer stays']
      )
    ],
    itineraryNotes: {
      arrival: 'Tokyo arrival is calm and practical, giving the traveler time to settle before the longer FIT journey starts moving.',
      city: 'Tokyo days can be used for a mix of landmark time and independent neighborhood exploration at a comfortable pace.',
      culture: 'Hakone and Kyoto bring in scenic and cultural contrast, which helps the route feel broad without becoming difficult.',
      transfer: 'Each move is treated as a smooth transition so the journey stays comfortable even while it covers multiple places.',
      flex: 'Flexible time is especially useful on a FIT route, letting the traveler decide how active or relaxed each day should feel.',
      departure: 'The final day ends the trip neatly, with a clear departure plan after a journey that covers much of classic Japan.'
    },
    faqItems: [
      f('How independent is this trip?', 'It is designed to feel independent while still giving you a clearly planned route and support structure.'),
      f('Is Hakone included for scenery?', 'Yes. It creates a scenic pause that helps the route feel more varied and memorable.'),
      f('Can this be stretched or shortened?', 'Adjustments can be discussed depending on your dates and travel goals.'),
      f('Who is this best for?', 'It suits travelers who like freedom but do not want to build a multi-city journey from scratch.')
    ],
    finalCta: {
      eyebrow: 'READY TO EXPLORE MORE OF JAPAN?',
      heading: 'Make a bigger FIT journey feel easy to own.',
      description:
        'We can help you shape a multi-city independent trip that stays flexible while still being properly planned.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'private-japan-discovery': {
    heroDescription:
      'A private Japan journey shaped around your pace, your interests and the kind of trip you want to have.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'Built as a private journey from the start.',
        'Private Japan Discovery is for travelers who want the experience to feel personal, not adapted after the fact. The route is private by nature, so the planning can center on the traveler’s pace, comfort and interests from the beginning.\n\nThat makes it especially useful for travelers who want a more tailored Japan experience without moving into the highest luxury tier. It has enough structure to feel polished, but the emotional tone remains fully customized.'
      ),
      s(
        'ROUTING',
        'Flexible routing with enough structure to feel coherent.',
        'Because the trip is private, the route can be shaped around the things that matter most to the traveler. That might mean more time in a favorite city, a slower pace between destinations or a stronger emphasis on local experiences.\n\nThe key is that the journey still feels organized. A private trip is strongest when it gives freedom without losing clarity, and that is exactly the balance this package is aiming for.'
      ),
      s(
        'LOCAL FEEL',
        'A trip that can respond to interests rather than forcing them.',
        'This package works well for travelers who want Japan to feel personally relevant. It can be adjusted toward food, culture, shopping, quieter neighborhoods or a more relaxed rhythm, depending on what is most important.\n\nThat adaptability is what gives private travel its value. Instead of asking the traveler to fit a fixed pattern, the itinerary is built to meet them where they are.'
      ),
      s(
        'PRACTICAL PLANNING',
        'Private does not need to mean complicated.',
        'The journey is designed to feel calm and considered, with enough support to keep the planning simple. That is useful for travelers who want a private tour but do not want the process to feel administratively heavy.\n\nIt also helps the trip stay comfortable once travel begins. The focus stays on the experience itself, while the structure behind it remains neat and easy to trust.',
        ['Private by design', 'Flexible around interests', 'Calm and comfortable planning']
      )
    ],
    itineraryNotes: {
      arrival: 'Arrival is paced for a private guest, with time to settle in before the tailor-made parts of the journey begin.',
      city: 'City days can be tuned toward the traveler’s interests, making the experience feel personal rather than preset.',
      culture: 'Cultural time can be expanded or softened depending on how the traveler likes to move through a destination.',
      transfer: 'Transfers are planned to preserve the private rhythm of the trip, so changes feel comfortable and easy.',
      flex: 'Flexible time is a key feature here and can be used to adjust the day around mood, weather or spontaneous interest.',
      departure: 'Departure is handled with the same private calm, keeping the trip smooth until the final step.'
    },
    faqItems: [
      f('What makes this private?', 'The route and pace can be shaped around the traveler rather than around a fixed group pattern.'),
      f('Can I change the destinations?', 'Yes. The route can be discussed and adapted according to your travel brief.'),
      f('Is this a luxury package?', 'It is private, but it is not automatically the highest luxury tier unless that is requested.'),
      f('How much can be customized?', 'Dates, pacing, experiences and destination focus can all be part of the discussion.')
    ],
    finalCta: {
      eyebrow: 'READY FOR A PRIVATE JOURNEY?',
      heading: 'Let the route follow your priorities.',
      description:
        'Tell us what matters most to you and we can shape a private Japan journey around it from the very first draft.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'private-luxury-japan': {
    heroDescription:
      'A private luxury journey through Tokyo, Hakone and Kyoto with a calmer pace and a more refined overall tone.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'Luxury here means space, calm and careful attention.',
        'Private Luxury Japan is built for travelers who want a more elevated version of the private trip. The emphasis is not on excess, but on the feeling that everything has been chosen with more care and less friction.\n\nThat gives the journey a distinctly premium tone. It feels private, calm and considered from start to finish, which is exactly what many luxury travelers are hoping for when they travel in Japan.'
      ),
      s(
        'ROUTING',
        'A refined route that allows each stop to breathe.',
        'Tokyo gives the trip its modern edge, Hakone slows it down with scenery and Kyoto adds cultural weight without feeling crowded. The route is intentionally selective so the experience stays elegant rather than overfilled.\n\nThat is one of the strongest advantages of a luxury private itinerary. The route itself becomes part of the comfort, because there is no sense of having to squeeze too much into the days.'
      ),
      s(
        'LOCAL FEEL',
        'A luxury journey should still feel connected to Japan.',
        'This package is designed to feel premium without losing the authenticity that makes Japan special. That means the journey can still include meaningful streets, local food experiences and calmer cultural moments that root the trip in place.\n\nThe tone stays sophisticated, but it never becomes sterile. Travelers can still feel the character of Japan while enjoying a more polished level of travel support around it.'
      ),
      s(
        'PRACTICAL PLANNING',
        'The comfort of the trip is built into the structure.',
        'Luxury often shows up in the way the journey feels, not just in the headline features. This itinerary is planned so the traveler spends less energy managing the trip and more energy enjoying it.\n\nThat is why the route works so well for private luxury travel. It is calm, efficient and emotionally easy, which is often what makes a trip feel genuinely premium in practice.',
        ['Private and premium', 'Less friction, more ease', 'Refined pacing throughout']
      )
    ],
    itineraryNotes: {
      arrival: 'Arrival is arranged to feel calm and unrushed, so the private luxury tone starts immediately.',
      city: 'City days favor polished movement, comfortable timing and enough space for the traveler to enjoy the pace.',
      culture: 'Cultural experiences are chosen to feel meaningful and elegant rather than crowded or hurried.',
      transfer: 'Transfers are kept smooth and discreet so the journey feels refined at every step.',
      flex: 'Flexible time can be used for private dining, slower sightseeing or simply a more restful day.',
      departure: 'Departure closes the itinerary as cleanly as it began, preserving the calm tone through the end of the trip.'
    },
    faqItems: [
      f('What makes this different from private Japan Discovery?', 'The luxury version puts more weight on calm, refinement and a more elevated overall tone.'),
      f('Can this be made even more exclusive?', 'Yes. The private framework allows the trip to be discussed in more detail.'),
      f('Is Hakone included for scenery or pace?', 'Both. It gives the route a scenic and restorative pause.'),
      f('Can dining be arranged carefully?', 'Yes. Food planning can be part of the private luxury discussion.')
    ],
    finalCta: {
      eyebrow: 'READY FOR A REFINED JAPAN JOURNEY?',
      heading: 'Design a private trip with more calm and more space.',
      description:
        'We can help build a luxury private itinerary that feels elegant, smooth and tailored around how you like to travel.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'japan-honeymoon': {
    heroDescription:
      'A romantic Japan journey designed to feel intimate, scenic and easy to enjoy together.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'Created for couples who want the trip to feel special from day one.',
        'Japan Honeymoon is built around the idea that the journey itself should feel personal and memorable. The route includes time in Tokyo, Hakone and Kyoto, which gives it a mix of city energy, scenic calm and quieter cultural moments.\n\nThat combination is strong for honeymoon travel because it creates contrast without making the trip complicated. The mood stays intimate, but the route still feels active and interesting throughout.'
      ),
      s(
        'ROUTING',
        'A route that moves from energy to calm and back again.',
        'Tokyo opens with momentum, Hakone creates a scenic pause and Kyoto brings the trip into a softer, more reflective mode. That rhythm is ideal for couples who want the honeymoon to feel like a journey rather than just a stay.\n\nThe itinerary has a natural romantic flow because each place offers a different mood. It is lively where it needs to be and gentle where the trip benefits from a quieter pace.'
      ),
      s(
        'LOCAL FEEL',
        'Romance can still feel rooted in real travel.',
        'The best honeymoon trips are memorable because they feel like the couple is experiencing something together, not just ticking off destinations. This package allows for that by leaving room for scenic walks, good meals and shared pauses.\n\nIt also works well for couples who want privacy without choosing a fully secluded trip. The balance of iconic Japan and intimate rhythm makes the experience feel genuinely special.'
      ),
      s(
        'PRACTICAL PLANNING',
        'A romantic trip still needs solid travel logic.',
        'The route is chosen to keep the journey comfortable and manageable, especially when the experience is meant to feel easy rather than busy. The planning supports that by keeping transitions clear and the pacing gentle.\n\nThat makes the package useful for honeymooners who want emotion and elegance, but also want the practical side of the trip handled with care.',
        ['Romantic pacing', 'Comfortable transitions', 'Intimate without feeling isolated']
      )
    ],
    itineraryNotes: {
      arrival: 'Arrival is kept light so the couple can settle in together before the more scenic parts of the honeymoon begin.',
      city: 'City days mix famous places with pauses that let the trip feel personal and unhurried.',
      culture: 'Kyoto gives the journey its most romantic cultural atmosphere, with calmer streets and quieter moments.',
      transfer: 'The move into Hakone and onward to Kyoto feels like a soft shift in mood rather than a hard change of pace.',
      flex: 'Flexible time is useful for private meals, scenic walks or simply deciding the day together once you are there.',
      departure: 'The final day is practical but gentle, giving the honeymoon a polished ending.'
    },
    faqItems: [
      f('Is this good for a honeymoon?', 'Yes. It is built to feel intimate, scenic and comfortable for couples traveling together.'),
      f('Can we make it more romantic?', 'Yes. The private planning stage can shape the experience around your preferences.'),
      f('Is it too busy for a honeymoon?', 'No. The pacing is intentionally gentle so the trip feels enjoyable rather than packed.'),
      f('Can food be planned carefully?', 'Yes. Dining can be discussed as part of the trip design.')
    ],
    finalCta: {
      eyebrow: 'READY FOR A ROMANTIC JOURNEY?',
      heading: 'Make your Japan honeymoon feel personal from the first draft.',
      description:
        'We can help shape a honeymoon route that feels romantic, comfortable and easy to enjoy together.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'luxury-japan-honeymoon': {
    heroDescription:
      'A higher-touch honeymoon with more privacy, more refinement and a stronger sense of occasion throughout.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'A honeymoon designed to feel elevated, not just longer.',
        'Luxury Japan Honeymoon is built for couples who want their first journey together to feel especially polished. It extends the honeymoon arc across more destinations, which gives the trip a richer emotional shape and more room to enjoy each city properly.\n\nThe luxury element comes through in the tone of the planning. It is quieter, more refined and more spacious, which helps the honeymoon feel memorable in a sophisticated way.'
      ),
      s(
        'ROUTING',
        'Tokyo, Hakone, Kyoto and Osaka create a layered romantic flow.',
        'The route starts with city energy and then gradually moves toward more intimate and scenic chapters before ending on a livelier note in Osaka. That progression helps the journey feel like it is unfolding rather than simply moving from point to point.\n\nFor honeymoon travel, that sense of progression matters. It gives the trip a clear shape and allows each destination to play a different emotional role.'
      ),
      s(
        'LOCAL FEEL',
        'Luxury and romance work best when the trip still feels alive.',
        'This package keeps the feeling of Japan present in the journey while raising the level of privacy and comfort. That means there is still room for local streets, good food and cultural atmosphere, but the overall experience stays more refined.\n\nIt is a strong option for couples who want a romantic trip with more substance and more polish, rather than one built around a single hotel or one style of experience.'
      ),
      s(
        'PRACTICAL PLANNING',
        'More days mean more chances to keep the trip calm and generous.',
        'A 12-day luxury honeymoon needs to feel spacious. The structure is designed to keep the couple from feeling like they are constantly in transit, which is often what makes a long honeymoon feel premium.\n\nThat attention to pacing is what gives the route its value. It stays romantic, but it also stays usable over a longer holiday without losing energy.',
        ['Longer romantic pacing', 'More privacy in the flow', 'Refined and comfortable']
      )
    ],
    itineraryNotes: {
      arrival: 'The opening day is deliberately soft so the honeymoon starts with calm, privacy and a smooth arrival.',
      city: 'City days keep the trip lively enough to feel exciting while still leaving space for couple time and rest.',
      culture: 'Kyoto and Hakone give the itinerary its most intimate rhythm, with a quieter and more scenic mood.',
      transfer: 'Each transition is handled as a quiet shift in chapter so the route feels elegant, not tiring.',
      flex: 'Flexible time can be used for private meals, slower mornings or a more bespoke version of the day.',
      departure: 'The final day closes the honeymoon neatly, leaving the couple with a calm and polished ending.'
    },
    faqItems: [
      f('What makes this the luxury version?', 'It gives the honeymoon more space, more privacy and a more refined overall pace.'),
      f('Can the trip be made even more private?', 'Yes. The route can be discussed in more detail during planning.'),
      f('Is Osaka too much at the end?', 'No. It adds a brighter final chapter and keeps the journey feeling complete.'),
      f('Can dining and experiences be tailored?', 'Yes. That is one of the strengths of a private luxury honeymoon plan.')
    ],
    finalCta: {
      eyebrow: 'READY FOR A MORE REFINED HONEYMOON?',
      heading: 'Let the journey feel as special as the occasion.',
      description:
        'We can help you build a luxury honeymoon that feels private, elegant and tailored to both of you.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'family-japan-adventure': {
    heroDescription:
      'A family-friendly journey through Japan with comfortable pacing, clear structure and room for everyone to enjoy it.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'Made for families who want the trip to feel easy to share.',
        'Family Japan Adventure is designed to keep the journey enjoyable across different ages and energy levels. The route brings together Tokyo, Kyoto and Osaka in a way that gives the trip variety without making it feel like a sprint.\n\nThat matters for family travel because the experience needs to work for everyone in the room. The structure stays clear, the pace stays manageable and the trip still feels exciting enough to be memorable.'
      ),
      s(
        'ROUTING',
        'A classic route that keeps the logistics understandable.',
        'Tokyo gives the family a lively start, Kyoto offers a calmer cultural chapter and Osaka closes the trip with a more relaxed and playful edge. That sequence works especially well when the goal is to keep the whole trip coherent and easy to follow.\n\nFamilies often need itineraries that are simple to explain and easy to move through. This one does that while still keeping enough variety in the days to keep younger and older travelers interested.'
      ),
      s(
        'LOCAL FEEL',
        'Fun, culture and enough flexibility for different ages.',
        'The journey includes the kind of places and moments that make family trips more enjoyable: city energy, heritage spaces, food, and the chance to slow down when needed. It is broad enough to stay interesting, but not so full that it becomes tiring.\n\nThat balance helps the trip feel more relaxed in real life. Families can enjoy the structure without feeling boxed in by it, which is often what makes a trip feel successful for everyone.'
      ),
      s(
        'PRACTICAL PLANNING',
        'Comfort and clarity matter even more with family travel.',
        'This itinerary is built to stay understandable and comfortable across 12 days. That means the route avoids unnecessary pressure and leaves space for the family to enjoy the journey instead of managing it.\n\nIt is a strong choice when you want a Japan trip that feels smooth, considerate and practical for mixed travel needs.',
        ['Family-friendly pacing', 'Clear structure', 'Comfortable across ages']
      )
    ],
    itineraryNotes: {
      arrival: 'The opening day gives the family time to settle into Tokyo before the route begins in earnest.',
      city: 'Tokyo days mix energy with easy movement so the family can enjoy the city without feeling overloaded.',
      culture: 'Kyoto adds a calmer, more cultural rhythm that works well for shared family experiences.',
      transfer: 'Transfers are kept straightforward so the family can move between cities without unnecessary friction.',
      flex: 'Flexible time gives the family room to adjust the day to energy levels, weather or interests.',
      departure: 'Departure is planned to be clear and practical after a trip that has stayed comfortable throughout.'
    },
    faqItems: [
      f('Is this suitable for children?', 'Yes. The structure is designed to stay comfortable and easy to share across ages.'),
      f('Will the itinerary feel too busy?', 'No. The pacing is intentionally moderate so the trip remains enjoyable for the whole family.'),
      f('Can we add more rest time?', 'Yes. The trip can be discussed around the family’s preferred pace.'),
      f('Are food preferences considered?', 'Yes. Meal planning can be discussed as part of the package.')
    ],
    finalCta: {
      eyebrow: 'READY TO TRAVEL AS A FAMILY?',
      heading: 'Make Japan easy to enjoy together.',
      description:
        'We can help you shape a family trip that keeps the route clear, the pace comfortable and the experience memorable for everyone.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  },
  'japan-family-discovery': {
    heroDescription:
      'A family journey that combines Tokyo, Mount Fuji and Kyoto with enough variety to keep the trip engaging and manageable.',
    briefSections: [
      s(
        'WHY THIS ROUTE',
        'A family route that adds scenery without losing practicality.',
        'Japan Family Discovery is a good choice for families who want a broader trip but still need the journey to remain easy to handle. Mount Fuji gives the itinerary a scenic center, while Tokyo and Kyoto create the city and culture contrast that keeps it interesting.\n\nThat mix is especially useful for families because it gives the trip a sense of adventure without making the logistics too complicated. The route stays clear and the atmosphere stays comfortable.'
      ),
      s(
        'ROUTING',
        'A compact route with one memorable scenic pause.',
        'The route is arranged so the family gets both city energy and a more scenic chapter without moving too quickly. Tokyo starts with variety, Mount Fuji adds a visual highlight and Kyoto brings the trip back to a more reflective pace.\n\nThis shape works well because it gives different family members something to look forward to at each stage. The trip feels rounded, but it still remains practical in how it is put together.'
      ),
      s(
        'LOCAL FEEL',
        'Enough variety to keep the trip lively for different ages.',
        'Family travel often works best when the journey offers contrast. This package does that by moving between urban experience, scenic atmosphere and cultural depth without requiring the family to constantly reset.\n\nThat makes it a good fit for travelers who want a trip that feels like a proper discovery, but one that still respects the realities of traveling together as a family.'
      ),
      s(
        'PRACTICAL PLANNING',
        'The route is clear enough to keep the whole family comfortable.',
        'A 10-day family trip needs to feel dependable in the planning stage and easy once travel begins. This itinerary is arranged with that in mind, keeping the sequence straightforward and the days manageable.\n\nIt is especially useful for families who want one memorable scenic stop without making the whole trip feel overly stretched or fragmented.',
        ['Scenic but manageable', 'Family-aware pacing', 'Easy to understand']
      )
    ],
    itineraryNotes: {
      arrival: 'Arrival day keeps Tokyo light and easy so the family can settle in before the route expands.',
      city: 'Tokyo days allow for a mix of family-friendly energy, local exploration and comfortable pacing.',
      culture: 'Mount Fuji and Kyoto create the most memorable scenic and cultural chapters of the journey.',
      transfer: 'The transfer between city and scenic stops is designed to feel straightforward for families.',
      flex: 'Flexible time can be used for rest, shopping or adjusting the day around family energy.',
      departure: 'The final day closes the family journey cleanly and keeps the end of the trip simple.'
    },
    faqItems: [
      f('Is Mount Fuji included for the whole trip?', 'No. It is part of the route as a scenic chapter within the wider journey.'),
      f('Is this different from Family Japan Adventure?', 'Yes. This version adds Mount Fuji and keeps the trip slightly shorter and more scenic.'),
      f('Can we slow the pace further?', 'Yes. That can be discussed during the planning stage.'),
      f('Is it suitable for a first family trip to Japan?', 'Yes. It is designed to be approachable and enjoyable for families travelling together.')
    ],
    finalCta: {
      eyebrow: 'READY FOR A FAMILY DISCOVERY?',
      heading: 'Build a Japan trip that works for everyone in the family.',
      description:
        'We can help shape a family itinerary that feels balanced, scenic and easy to enjoy together.',
      primaryLabel: 'Get a Quote',
      secondaryLabel: 'Customize This Journey'
    }
  }
};
