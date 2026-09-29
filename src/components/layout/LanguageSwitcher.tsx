import { flushSync } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { LANGUAGES, type LanguageCode } from '../../i18n/languages'
import { cx } from '../../utils/classNames'
import styles from './LanguageSwitcher.module.css'

/** Pill of language buttons (EN · עב · RU). Inherits the header's text colour. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { t, i18n } = useTranslation('common')

  // Same page, new language, with the page wipe playing over the swap. The change is flushed
  // inside the transition so the browser captures the old and new language as its two frames.
  const switchTo = (code: LanguageCode) => {
    if (code === i18n.resolvedLanguage) return
    const change = () => flushSync(() => void i18n.changeLanguage(code))
    if (document.startViewTransition) document.startViewTransition(change)
    else change()
  }
  return (
    <nav className={cx(styles.switcher, className)} aria-label={t('language.label')}>
      {LANGUAGES.map(({ code, short, name }) => {
        const active = i18n.resolvedLanguage === code
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-label={name}
            aria-current={active ? 'true' : undefined}
            className={cx(styles.option, active && styles.active)}
            onClick={() => switchTo(code)}
          >
            {short}
          </button>
        )
      })}
    </nav>
  )
}
