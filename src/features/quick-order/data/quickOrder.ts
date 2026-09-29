import type { BouquetId, CategoryId } from '../../../data/catalog'

/** Bouquets orderable from the shop, grouped by category in display order. */
export const SHOP_ORDER: readonly BouquetId[] = [
  'blushPeony',
  'velvetRose',
  'whiteOrchid',
  'classicDozen',
  'grandBox',
  'petiteBox',
  'goldenHour',
  'firstFrost',
  'ivoryVows',
  'thePromise',
  'thankYou',
  'withSympathy',
]

export type ShopFilter = 'all' | CategoryId

export const SHOP_FILTERS: readonly ShopFilter[] = ['all', 'signature', 'boxes', 'seasonal', 'bridal', 'gifts']
