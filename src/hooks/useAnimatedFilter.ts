import { useEffect, useRef, useState } from 'react'

type Phase = 'idle' | 'out'

/**
 * Filter state with an exit animation: selecting a value first plays the
 * "out" phase, then swaps the filter and bumps `generation` so the grid can
 * remount and play its entrance.
 */
export function useAnimatedFilter<T extends string>(initial: T, swapMs = 620) {
  const [filter, setFilter] = useState<T>(initial)
  const [pending, setPending] = useState<T>(initial)
  const [phase, setPhase] = useState<Phase>('idle')
  const [generation, setGeneration] = useState(0)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const select = (next: T) => {
    if (next === filter && phase === 'idle') return
    clearTimeout(timer.current)
    setPending(next)
    setPhase('out')
    timer.current = setTimeout(() => {
      setFilter(next)
      setPhase('idle')
      setGeneration((current) => current + 1)
    }, swapMs)
  }

  return {
    /** The filter whose items are currently rendered. */
    filter,
    /** The filter to highlight in the UI (already the new one while animating out). */
    highlighted: phase === 'out' ? pending : filter,
    leaving: phase === 'out',
    generation,
    select,
  }
}
