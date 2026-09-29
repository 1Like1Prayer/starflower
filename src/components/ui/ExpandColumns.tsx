import { useState, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cx } from '../../utils/classNames'
import styles from './ExpandColumns.module.css'

interface ExpandColumnsProps<T> {
  items: readonly T[]
  getKey: (item: T) => string
  /** Shown while collapsed. */
  renderCaption: (item: T, index: number) => ReactNode
  /** Revealed when the column opens. */
  renderPanel: (item: T, index: number) => ReactNode
  getHref?: (item: T) => string
  panelTone?: 'forest' | 'sage'
  /** How much wider the open column grows relative to the others. */
  grow?: number
  className?: string
}

/** Row of columns; hovering or focusing one opens it with a curtain-style panel. */
export function ExpandColumns<T>({
  items,
  getKey,
  renderCaption,
  renderPanel,
  getHref,
  panelTone = 'forest',
  grow = 1.9,
  className,
}: ExpandColumnsProps<T>) {
  const [active, setActive] = useState(0)

  return (
    <div className={cx(styles.row, className)} style={{ '--grow': grow } as CSSProperties}>
      {items.map((item, index) => {
        const props = {
          className: cx(styles.column, index === active && styles.open),
          onMouseEnter: () => setActive(index),
          onFocus: () => setActive(index),
          'data-open': index === active,
        }
        const inner = (
          <>
            <div className={styles.caption}>{renderCaption(item, index)}</div>
            <div className={cx(styles.panel, styles[panelTone])}>{renderPanel(item, index)}</div>
          </>
        )
        const href = getHref?.(item)
        return href ? (
          <Link key={getKey(item)} to={href} {...props}>
            {inner}
          </Link>
        ) : (
          <div key={getKey(item)} tabIndex={0} {...props}>
            {inner}
          </div>
        )
      })}
    </div>
  )
}
