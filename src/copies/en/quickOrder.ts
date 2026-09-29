export const quickOrder = {
  hero: {
    eyebrow: 'Quick order',
    titleLine1: 'Choose.',
    titleLine2: 'We <em>deliver</em>.',
    intro:
      'Our ready-to-order bouquets, composed fresh on the day. Pick a piece and order in a single step.',
    steps: {
      choose: 'Choose your bouquet',
      order: 'Order with one click',
      deliver: 'Delivered by hand · [DELIVERY AREA]',
    },
    sameDay: 'Same-day delivery when ordered before [CUT-OFF TIME]',
  },
  filters: {
    label: 'Filter bouquets',
    count_one: '{{number}} bouquet ready to order',
    count_other: '{{number}} bouquets ready to order',
  },
  card: {
    ariaLabel: 'Order {{name}}, {{price}}',
    orderNow: 'Order now',
    order: 'Order',
  },
  bespoke: {
    eyebrow: 'Bespoke',
    title: 'Something made\nonly for you?',
  },
} as const
