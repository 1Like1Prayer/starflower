export const LANGUAGES = [
  { code: 'en', short: 'EN', name: 'English', dir: 'ltr' },
  { code: 'he', short: 'עב', name: 'עברית', dir: 'rtl' },
  { code: 'ru', short: 'RU', name: 'Русский', dir: 'ltr' },
] as const

export type LanguageCode = (typeof LANGUAGES)[number]['code']

export const isLanguageCode = (value: unknown): value is LanguageCode =>
  LANGUAGES.some((language) => language.code === value)

export const directionOf = (code: string) =>
  LANGUAGES.find((language) => language.code === code)?.dir ?? 'ltr'
