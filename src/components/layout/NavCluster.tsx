import { PillButton } from '../ui'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MainNav } from './MainNav'
import styles from './NavCluster.module.css'

interface NavClusterProps {
  ctaLabel: string
  ctaTo: string
  ctaVariant?: 'light' | 'dark'
  className?: string
}

/** Vertical page navigation next to a call-to-action pill and the language switcher. */
export function NavCluster({ ctaLabel, ctaTo, ctaVariant = 'dark', className }: NavClusterProps) {
  return (
    <div className={className ? `${styles.cluster} ${className}` : styles.cluster}>
      <MainNav />
      <div className={styles.actions}>
        <PillButton to={ctaTo} variant={ctaVariant}>
          {ctaLabel}
        </PillButton>
        <LanguageSwitcher />
      </div>
    </div>
  )
}
