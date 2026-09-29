import type { common as en } from '../en/common'
import type { Translation } from '../types'

export const common: Translation<typeof en> = {
  brand: {
    name: 'StarFlowers',
    tagline: 'Ателье роскошной флористики',
    homeLabel: 'StarFlowers — главная',
  },
  nav: {
    mainLabel: 'Основное меню',
    footerLabel: 'Нижнее меню',
    home: 'Главная',
    about: 'О нас',
    gallery: 'Галерея',
    quickOrder: 'Быстрый заказ',
    contact: 'Контакты',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
  },
  actions: {
    orderBouquet: 'Заказать букет',
    orderThisBouquet: 'Заказать этот букет',
    commissionPiece: 'Заказать композицию',
    explore: 'Смотреть',
    close: 'Закрыть',
  },
  footer: {
    menu: 'Меню',
    atelier: 'Ателье',
    follow: 'Соцсети',
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
    label: 'Фото',
    named: 'Фото · {{name}}',
  },
  price: {
    from: 'от {{price}}',
  },
  filters: {
    all: 'Все',
  },
  pager: {
    previous: 'Предыдущая страница',
    next: 'Следующая страница',
    page: 'Страница {{current}} из {{total}}',
  },
  language: {
    label: 'Язык',
  },
}
