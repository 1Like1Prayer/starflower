import { useEffect, useRef, useState } from 'react'

interface Options {
  threshold?: number
  /** Reveal anyway after this long, so content can never stay hidden. */
  fallbackMs?: number
}

/** Flips `inView` to true (once) when the element scrolls into the viewport. */
export function useInView<T extends Element>({ threshold = 0.12, fallbackMs = 6000 }: Options = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const reveal = () => setInView(true)

    if (typeof IntersectionObserver === 'undefined') {
      const timer = setTimeout(reveal, 0)
      return () => clearTimeout(timer)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal()
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(element)
    const fallback = setTimeout(reveal, fallbackMs)
    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [threshold, fallbackMs])

  return { ref, inView }
}
