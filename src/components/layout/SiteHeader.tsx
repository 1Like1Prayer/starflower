import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../config/routes'
import { cx } from '../../utils/classNames'
import { Logo } from './Logo'
import { NavCluster } from './NavCluster'
import styles from './SiteHeader.module.css'

interface SiteHeaderProps {
  /** `light` sits on a dark hero, `dark` on the sand background. */
  tone?: 'light' | 'dark'
  overlay?: boolean
}

export function SiteHeader({ tone = 'dark', overlay }: SiteHeaderProps) {
  const { t } = useTranslation('common')
  return (
    <header className={cx(styles.header, overlay && styles.overlay)}>
      <Logo tone={tone} imageClassName={styles.logo} />
      <NavCluster
        ctaLabel={t('actions.orderBouquet')}
        ctaTo={ROUTES.quickOrder}
        ctaVariant={tone === 'light' ? 'light' : 'dark'}
        className={styles.cluster}
      />
    </header>
  )
}
