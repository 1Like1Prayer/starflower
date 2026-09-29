import type { common as en } from '../en/common'
import type { Translation } from '../types'

export const common: Translation<typeof en> = {
  brand: {
    name: 'StarFlowers',
    tagline: 'סטודיו פרחים יוקרתי',
    homeLabel: 'StarFlowers — דף הבית',
  },
  nav: {
    mainLabel: 'תפריט ראשי',
    footerLabel: 'תפריט תחתון',
    home: 'בית',
    about: 'אודות',
    gallery: 'גלריה',
    quickOrder: 'הזמנה מהירה',
    contact: 'צור קשר',
  },
  actions: {
    orderBouquet: 'הזמינו זר',
    orderThisBouquet: 'הזמינו את הזר',
    commissionPiece: 'הזמינו יצירה אישית',
    explore: 'גלו עוד',
    close: 'סגירה',
  },
  footer: {
    menu: 'תפריט',
    atelier: 'הסטודיו',
    follow: 'עקבו אחרינו',
    copyright: '© {{year}} {{brand}}',
  },
  social: {
    instagram: 'אינסטגרם',
    pinterest: 'פינטרסט',
    whatsapp: 'וואטסאפ',
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
    label: 'תמונה',
    named: 'תמונה · {{name}}',
  },
  price: {
    from: 'החל מ־{{price}}',
  },
  filters: {
    all: 'הכול',
  },
  language: {
    label: 'שפה',
  },
}
