export const home = {
  hero: {
    location: 'Floral Atelier · {{city}}',
    titleLine1: 'Bouquets',
    titleLine2: 'for those who',
    titleLine3: '<em>shine</em>.',
    whoLabel: 'Who we are',
    whoText:
      'StarFlowers is a luxury floral atelier. Every arrangement is composed by hand for the person at the centre of the moment — because every client deserves the star treatment.',
    scroll: 'Scroll down',
  },
  collections: {
    ariaLabel: 'Collections',
    eyebrow: 'Collections',
    title: 'Choose your\nmoment',
    hint: 'Hover a collection to open it. Each one is composed to order, with stems selected on the day.',
    hintTouch: 'Tap a collection to open it. Each one is composed to order, with stems selected on the day.',
    descriptionLabel: 'Description',
    items: {
      signature: {
        label: 'Signature',
        title: 'Signature\nBouquets',
        description:
          'Our hand-tied house compositions — generous, sculptural and entirely one of a kind.',
      },
      weddings: {
        label: 'Weddings',
        title: 'Weddings\n& Events',
        description:
          'Bridal bouquets, ceremony florals and tablescapes, designed as one story from start to finish.',
      },
      boxes: {
        label: 'Boxes',
        title: 'Luxury\nBoxes',
        description:
          'Blooms set in our signature keepsake box — an arrangement that arrives ready to impress.',
      },
      subscription: {
        label: 'Subscription',
        title: 'Flower\nSubscription',
        description:
          'Fresh arrangements for your home or office, delivered weekly, fortnightly or monthly.',
      },
    },
  },
  featured: {
    eyebrow: 'Featured',
    groupLabel: 'Featured bouquets',
    swipeHint: 'Swipe or tap below',
    show: 'Show {{name}}',
    descriptionLabel: 'Description',
    items: {
      signature: {
        name: 'The Signature',
        description:
          'Every signature bouquet is a small portrait of the person receiving it — composed around their story, their colours and the feeling of the day.',
        stems: 'Garden roses, peonies and seasonal foliage, hand-tied and wrapped in our ivory paper.',
      },
      bride: {
        name: 'The Bride',
        description:
          'A bridal bouquet designed to move with you — soft, romantic and made to be photographed from every angle.',
        stems: 'White garden roses, sweet pea, jasmine vine and silk ribbon.',
      },
      grandBox: {
        name: 'The Grand Box',
        description:
          'A generous arrangement set in our keepsake box. Delivered by hand, it needs nothing but a place to shine.',
        stems: 'Premium roses and ranunculus in a reusable signature box.',
      },
      season: {
        name: 'The Season',
        description:
          'Our florists follow the market, not a catalogue. This is what the season is offering at its very best, this week.',
        stems: 'Stems selected on the day — ask us what is in bloom.',
      },
    },
  },
  philosophy: {
    quote: 'At StarFlowers, <em>you</em> are the star. Every bouquet is composed to match.',
    eyebrow: 'Our philosophy',
  },
  bespoke: {
    eyebrow: 'Bespoke',
    title: 'Your moment,\nour composition',
    photoLabel: 'The atelier',
  },
} as const
