import type { defaultNamespace, resources } from '../copies'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNamespace
    resources: (typeof resources)['en']
  }
}
