import type { Tone } from '../../../theme'

export type CollectionId = 'signature' | 'weddings' | 'boxes' | 'subscription'
export type FeaturedId = 'signature' | 'bride' | 'grandBox' | 'season'

export const COLLECTIONS: readonly { id: CollectionId; tone: Tone }[] = [
  { id: 'signature', tone: 'forest' },
  { id: 'weddings', tone: 'moss' },
  { id: 'boxes', tone: 'espresso' },
  { id: 'subscription', tone: 'sage' },
]

export const FEATURED: readonly { id: FeaturedId; tone: Tone }[] = [
  { id: 'signature', tone: 'forest' },
  { id: 'bride', tone: 'moss' },
  { id: 'grandBox', tone: 'espresso' },
  { id: 'season', tone: 'sage' },
]
