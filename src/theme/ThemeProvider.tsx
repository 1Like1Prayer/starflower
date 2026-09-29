import { useLayoutEffect, type ReactNode } from 'react'
import { toCssVariables } from './cssVariables'
import { tokens, type Theme } from './tokens'

interface ThemeProviderProps {
  theme?: Theme
  children: ReactNode
}

/** Publishes the theme tokens as CSS custom properties on `:root`. */
export function ThemeProvider({ theme = tokens, children }: ThemeProviderProps) {
  useLayoutEffect(() => {
    const root = document.documentElement
    const vars = toCssVariables(theme)
    for (const [name, value] of Object.entries(vars)) root.style.setProperty(name, value)
    return () => {
      for (const name of Object.keys(vars)) root.style.removeProperty(name)
    }
  }, [theme])

  return <>{children}</>
}
