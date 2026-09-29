import { useEffect, useState } from 'react'

/**
 * Cycles an index through `length` items. Picking one manually stops the cycle
 * so the visitor's choice is never overridden.
 */
export function useAutoRotate(length: number, intervalMs = 6000) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || length < 2) return
    const timer = setInterval(() => setIndex((current) => (current + 1) % length), intervalMs)
    return () => clearInterval(timer)
  }, [paused, length, intervalMs])

  const select = (next: number) => {
    setPaused(true)
    setIndex(next)
  }

  return { index, select }
}
