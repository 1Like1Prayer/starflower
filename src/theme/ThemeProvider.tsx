import { useLayoutEffect, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { toLanguageCssVariables } from './cssVariables'
import { tokens, type Theme } from './tokens'

interface ThemeProviderProps {
  theme?: Theme
  children: ReactNode
}

/** Publishes the theme tokens (with the active language's overrides) as CSS custom properties on `:root`. */
export function ThemeProvider({ theme = tokens, children }: ThemeProviderProps) {
  const { i18n } = useTranslation()
  const language = i18n.resolvedLanguage ?? i18n.language

  useLayoutEffect(() => {
    const root = document.documentElement
    const vars = toLanguageCssVariables(theme, language)
    for (const [name, value] of Object.entries(vars)) root.style.setProperty(name, value)
    return () => {
      for (const name of Object.keys(vars)) root.style.removeProperty(name)
    }
  }, [theme, language])

  return <>{children}</>
}
