import { en } from './en'

/** All translation resources, keyed by language then feature namespace. */
export const resources = { en } as const

export const defaultLanguage = 'en'
export const defaultNamespace = 'common'
export const namespaces = Object.keys(en) as (keyof typeof en)[]
