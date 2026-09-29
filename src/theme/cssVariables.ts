import type { Theme } from './tokens'

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
