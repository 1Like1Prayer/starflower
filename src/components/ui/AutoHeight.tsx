import { useEffect, useRef, type ReactNode } from 'react'
import styles from './AutoHeight.module.css'

interface AutoHeightProps {
  children: ReactNode
  /**
   * Never shrink below the tallest the content has been at the current width. A filtered grid
   * then keeps the height of the full set, so the page below does not jump up and down.
   */
  hold?: boolean
}

/** Animates its own height whenever the content inside changes size (e.g. a filtered grid). */
export function AutoHeight({ children, hold }: AutoHeightProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const inner = innerRef.current
    if (!wrap || !inner || typeof ResizeObserver === 'undefined') return

    let tallest = 0
    let width = inner.clientWidth
    const measure = () => {
      // A different width reflows the grid, so the old maximum no longer applies.
      if (inner.clientWidth !== width) {
        width = inner.clientWidth
        tallest = 0
      }
      tallest = hold ? Math.max(tallest, inner.offsetHeight) : inner.offsetHeight
      wrap.style.height = `${tallest}px`
    }

    // First measurement is applied without a transition.
    wrap.style.transition = 'none'
    measure()
    void wrap.offsetHeight
    wrap.style.transition = ''

    const observer = new ResizeObserver(measure)
    observer.observe(inner)
    return () => observer.disconnect()
  }, [hold])

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <div ref={innerRef}>{children}</div>
    </div>
  )
}
