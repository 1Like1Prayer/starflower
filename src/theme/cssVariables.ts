import { languageOverrides, type Theme } from './tokens'

const toKebab = (value: string) => value.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)

/** Flattens a nested token object into `{ '--group-name': value }`. */
export function toCssVariables(theme: Theme): Record<string, string> {
  const vars: Record<string, string> = {}
  for (const [group, entries] of Object.entries(theme)) {
    for (const [key, value] of Object.entries(entries)) {
      vars[`--${toKebab(group)}-${toKebab(key)}`] = value
    }
  }
  return vars
}

/** Theme variables for one language: the base tokens with that language's overrides applied. */
export function toLanguageCssVariables(theme: Theme, language: string): Record<string, string> {
  const vars = toCssVariables(theme)
  const overrides = languageOverrides[language] ?? {}
  for (const [group, entries] of Object.entries(overrides)) {
    for (const [key, value] of Object.entries(entries)) {
      vars[`--${toKebab(group)}-${toKebab(key)}`] = value
    }
  }
  return vars
}
