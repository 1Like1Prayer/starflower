import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { defaultLanguage, defaultNamespace, namespaces, resources } from '../copies'
import { directionOf, isLanguageCode } from './languages'

const STORAGE_KEY = 'starflower:language'

function storedLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return isLanguageCode(stored) ? stored : defaultLanguage
  } catch {
    return defaultLanguage
  }
}

/** Keeps <html lang> and <html dir> in step with the active language. */
function applyLanguage(code: string) {
  const root = document.documentElement
  root.lang = code
  root.dir = directionOf(code)
}

void i18n.use(initReactI18next).init({
  resources,
  lng: storedLanguage(),
  fallbackLng: defaultLanguage,
  ns: namespaces,
  defaultNS: defaultNamespace,
  interpolation: { escapeValue: false },
  returnNull: false,
})

applyLanguage(i18n.language)
i18n.on('languageChanged', (code) => {
  applyLanguage(code)
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // Private mode or blocked storage: the choice simply won't persist.
  }
})

export default i18n
