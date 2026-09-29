import type { CSSProperties, ReactNode } from 'react'
import { cx } from '../../utils/classNames'
import styles from './ColumnPin.module.css'

/** Content of an ExpandColumns panel that fades in once its column is open. */
export function ColumnPin({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={cx(styles.pin, className)} style={style}>
      {children}
    </div>
  )
}
