import { useTranslation } from 'react-i18next'
import { NAV_ORDER, ROUTES } from '../../config/routes'
import { UnderlineLink } from '../ui'
import styles from './MainNav.module.css'

export function MainNav({ className }: { className?: string }) {
  const { t } = useTranslation('common')
  return (
    <nav aria-label={t('nav.mainLabel')} className={className ? `${styles.nav} ${className}` : styles.nav}>
      {NAV_ORDER.map((key) => (
        <UnderlineLink key={key} to={ROUTES[key]}>
          {t(`nav.${key}`)}
        </UnderlineLink>
      ))}
    </nav>
  )
}
