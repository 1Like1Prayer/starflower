import { useState } from 'react'
import type { BouquetId } from '../../../data/catalog'

export type StepDirection = 1 | -1

/** Selection + navigation state for the gallery lightbox, over the currently visible list. */
export function useLightbox(visible: readonly BouquetId[]) {
  const [selectedId, setSelectedId] = useState<BouquetId | null>(null)
  const [direction, setDirection] = useState<StepDirection>(1)
  /** 0 while the lightbox is freshly opened; increments on every navigation. */
  const [navigation, setNavigation] = useState(0)

  const index = selectedId ? visible.indexOf(selectedId) : -1

  const open = (id: BouquetId) => {
    setSelectedId(id)
    setDirection(1)
    setNavigation(0)
  }

  const close = () => {
    setSelectedId(null)
    setNavigation(0)
  }

  const step = (by: StepDirection) => {
    if (index < 0 || visible.length < 2) return
    setSelectedId(visible[(index + by + visible.length) % visible.length])
    setDirection(by)
    setNavigation((current) => current + 1)
  }

  const goTo = (id: BouquetId) => {
    const target = visible.indexOf(id)
    if (target < 0 || target === index) return
    setSelectedId(id)
    setDirection(target > index ? 1 : -1)
    setNavigation((current) => current + 1)
  }

  return {
    selectedId: index >= 0 ? selectedId : null,
    index,
    direction,
    navigation,
    open,
    close,
    step,
    goTo,
  }
}
