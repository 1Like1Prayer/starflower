import { useEffect } from 'react'

/**
 * Freezes page scrolling while `active` (menus, dialogs) and puts the page back exactly where it
 * was afterwards. Plain `overflow: hidden` on the body jumps mobile browsers back to the top.
 */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return
    const { style } = document.body
    const previous = { position: style.position, top: style.top, width: style.width }
    const scrollY = window.scrollY

    style.position = 'fixed'
    style.top = `-${scrollY}px`
    style.width = '100%'

    return () => {
      style.position = previous.position
      style.top = previous.top
      style.width = previous.width
      window.scrollTo(0, scrollY)
    }
  }, [active])
}
