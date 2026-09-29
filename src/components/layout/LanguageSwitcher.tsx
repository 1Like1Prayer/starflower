import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../../i18n/languages'
import { cx } from '../../utils/classNames'
import styles from './LanguageSwitcher.module.css'

/** Pill of language buttons (EN · עב · RU). Inherits the header's text colour. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { t, i18n } = useTranslation('common')
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
            onClick={() => void i18n.changeLanguage(code)}
          >
            {short}
          </button>
        )
      })}
    </nav>
  )
}
