import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { defaultLanguage, defaultNamespace, namespaces, resources } from '../copies'

void i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  ns: namespaces,
  defaultNS: defaultNamespace,
  interpolation: { escapeValue: false },
  returnNull: false,
})

export default i18n
