import type { ReactNode } from 'react'
import { cx } from '../../utils/classNames'
import styles from './Caption.module.css'

/** Tiny tracked-out uppercase label such as `[ PHOTO ]`. */
export function Caption({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cx(styles.caption, className)}>[ {children} ]</span>
}
