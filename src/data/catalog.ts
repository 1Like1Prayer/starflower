import type { Tone } from '../theme'

export type CategoryId = 'signature' | 'bridal' | 'seasonal' | 'boxes' | 'gifts'

export type BouquetId =
  | 'blushPeony'
  | 'ivoryVows'
  | 'goldenHour'
  | 'velvetRose'
  | 'grandBox'
  | 'firstFrost'
  | 'whiteOrchid'
  | 'thePromise'
  | 'petiteBox'
  | 'classicDozen'
  | 'thankYou'
  | 'withSympathy'

/** Which of the three botanical crops is used for the bouquet's photo placeholder. */
export type ArtVariant = 'a' | 'b' | 'c'

export interface Bouquet {
  id: BouquetId
  category: CategoryId
  tone: Tone
  art: ArtVariant
}

/** Names, stems and descriptions live in copies/en/catalog.ts under `bouquets.<id>`. */
export const BOUQUETS: Record<BouquetId, Bouquet> = {
  blushPeony: { id: 'blushPeony', category: 'signature', tone: 'forest', art: 'a' },
  ivoryVows: { id: 'ivoryVows', category: 'bridal', tone: 'moss', art: 'b' },
  goldenHour: { id: 'goldenHour', category: 'seasonal', tone: 'sage', art: 'c' },
  velvetRose: { id: 'velvetRose', category: 'signature', tone: 'espresso', art: 'b' },
  grandBox: { id: 'grandBox', category: 'boxes', tone: 'forest', art: 'c' },
  firstFrost: { id: 'firstFrost', category: 'seasonal', tone: 'moss', art: 'a' },
  whiteOrchid: { id: 'whiteOrchid', category: 'signature', tone: 'sage', art: 'b' },
  thePromise: { id: 'thePromise', category: 'bridal', tone: 'espresso', art: 'a' },
  petiteBox: { id: 'petiteBox', category: 'boxes', tone: 'forest', art: 'b' },
  classicDozen: { id: 'classicDozen', category: 'signature', tone: 'moss', art: 'c' },
  thankYou: { id: 'thankYou', category: 'gifts', tone: 'sage', art: 'a' },
  withSympathy: { id: 'withSympathy', category: 'gifts', tone: 'forest', art: 'c' },
}

export const getBouquets = (ids: readonly BouquetId[]): Bouquet[] => ids.map((id) => BOUQUETS[id])
