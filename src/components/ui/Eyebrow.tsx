import type { ReactNode } from 'react'
import { cx } from '../../utils/classNames'
import styles from './Eyebrow.module.css'

interface EyebrowProps {
  children: ReactNode
  tone?: 'muted' | 'light' | 'stone' | 'inherit'
  className?: string
}

/** Small bracketed label: `[ Collections ]`. */
export function Eyebrow({ children, tone = 'muted', className }: EyebrowProps) {
  return (
    <span className={cx(styles.eyebrow, styles[tone], className)}>
      [ {children} ]
    </span>
  )
}
