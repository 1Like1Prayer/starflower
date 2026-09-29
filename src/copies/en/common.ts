export const common = {
  brand: {
    name: 'StarFlowers',
    tagline: 'Luxury floral atelier',
    homeLabel: 'StarFlowers home',
  },
  nav: {
    mainLabel: 'Main',
    footerLabel: 'Footer',
    home: 'Home',
    about: 'About Us',
    gallery: 'Gallery',
    quickOrder: 'Quick Order',
    contact: 'Contacts',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  actions: {
    orderBouquet: 'Order a bouquet',
    orderThisBouquet: 'Order this bouquet',
    commissionPiece: 'Commission a piece',
    explore: 'Explore',
    close: 'Close',
  },
  footer: {
    menu: 'Menu',
    atelier: 'Atelier',
    follow: 'Follow',
    copyright: '© {{year}} {{brand}}',
  },
  social: {
    instagram: 'Instagram',
    pinterest: 'Pinterest',
    whatsapp: 'WhatsApp',
  },
  placeholders: {
    city: '[CITY]',
    address: '[ADDRESS]',
    openingHours: '[OPENING HOURS]',
    email: '[EMAIL]',
    phone: '[PHONE]',
    price: '[PRICE]',
  },
  photo: {
    label: 'Photo',
    named: 'Photo · {{name}}',
  },
  price: {
    from: 'From {{price}}',
  },
  filters: {
    all: 'All',
  },
  pager: {
    previous: 'Previous page',
    next: 'Next page',
    page: 'Page {{current}} of {{total}}',
  },
  language: {
    label: 'Language',
  },
} as const
