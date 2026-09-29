export const ROUTES = {
  home: '/',
  about: '/about',
  gallery: '/gallery',
  quickOrder: '/quick-order',
  contact: '/contact',
} as const

export type RouteKey = keyof typeof ROUTES

/** Order in which pages appear in navigation. */
export const NAV_ORDER: readonly RouteKey[] = ['home', 'about', 'gallery', 'quickOrder', 'contact']
