export type OccasionId = 'gift' | 'wedding' | 'event' | 'subscription' | 'sympathy'

export const OCCASIONS: readonly OccasionId[] = ['gift', 'wedding', 'event', 'subscription', 'sympathy']

export interface ContactRequest {
  name: string
  occasion: OccasionId
}
