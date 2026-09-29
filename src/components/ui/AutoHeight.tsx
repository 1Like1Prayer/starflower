import { useEffect, useRef, type ReactNode } from 'react'
import styles from './AutoHeight.module.css'

/** Animates its own height whenever the content inside changes size (e.g. a filtered grid). */
export function AutoHeight({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const inner = innerRef.current
    if (!wrap || !inner || typeof ResizeObserver === 'undefined') return

    // First measurement is applied without a transition.
    wrap.style.transition = 'none'
    wrap.style.height = `${inner.offsetHeight}px`
    void wrap.offsetHeight
    wrap.style.transition = ''

    const observer = new ResizeObserver(() => {
      wrap.style.height = `${inner.offsetHeight}px`
    })
    observer.observe(inner)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <div ref={innerRef}>{children}</div>
    </div>
  )
}
