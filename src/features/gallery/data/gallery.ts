import type { ArtPlacement } from '../../../components/ui'
import type { ArtVariant, BouquetId, CategoryId } from '../../../data/catalog'

/** Bouquets shown in the gallery, in display order. Their number in the lightbox is their position here. */
export const GALLERY_ORDER: readonly BouquetId[] = [
  'blushPeony',
  'ivoryVows',
  'goldenHour',
  'velvetRose',
  'grandBox',
  'firstFrost',
  'whiteOrchid',
  'thePromise',
  'petiteBox',
]

export type GalleryFilter = 'all' | Exclude<CategoryId, 'gifts'>

export const GALLERY_FILTERS: readonly GalleryFilter[] = ['all', 'signature', 'bridal', 'seasonal', 'boxes']

/** Crops of the botanical drawing, so neighbouring photo placeholders don't look identical. */
export const ART_PLACEMENTS: Record<ArtVariant, ArtPlacement> = {
  a: { left: -140, top: 190, width: 820, opacity: 0.2 },
  b: { left: -320, top: 120, width: 1000, opacity: 0.2 },
  c: { left: -60, top: 260, width: 700, opacity: 0.2 },
}

/** How many thumbnails the lightbox strip shows at once. */
export const STRIP_SIZE = 5
