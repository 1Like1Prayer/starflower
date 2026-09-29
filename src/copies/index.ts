import { en } from './en'
import { he } from './he'
import { ru } from './ru'

/** All translation resources, keyed by language then feature namespace. */
export const resources = { en, he, ru } as const

export const defaultLanguage = 'en'
export const defaultNamespace = 'common'
export const namespaces = Object.keys(en) as (keyof typeof en)[]
