import { PillButton } from '../ui'
import { MainNav } from './MainNav'
import styles from './NavCluster.module.css'

interface NavClusterProps {
  ctaLabel: string
  ctaTo: string
  ctaVariant?: 'light' | 'dark'
  className?: string
}

/** Vertical page navigation next to a call-to-action pill. */
export function NavCluster({ ctaLabel, ctaTo, ctaVariant = 'dark', className }: NavClusterProps) {
  return (
    <div className={className ? `${styles.cluster} ${className}` : styles.cluster}>
      <MainNav />
      <PillButton to={ctaTo} variant={ctaVariant}>
        {ctaLabel}
      </PillButton>
    </div>
  )
}
