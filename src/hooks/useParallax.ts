import { useCallback, useRef, type MouseEvent } from 'react'

/** Moves `ref` opposite to the pointer inside the element that fires `onMouseMove`. */
export function useParallax<T extends HTMLElement>(strengthX = 40, strengthY = 24) {
  const ref = useRef<T>(null)

  const onMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const target = ref.current
      if (!target) return
      const rect = event.currentTarget.getBoundingClientRect()
      const dx = (event.clientX - rect.left) / (rect.width || 1) - 0.5
      const dy = (event.clientY - rect.top) / (rect.height || 1) - 0.5
      target.style.transform = `translate(${(dx * -strengthX).toFixed(1)}px, ${(dy * -strengthY).toFixed(1)}px)`
    },
    [strengthX, strengthY],
  )

  return { ref, onMouseMove }
}
