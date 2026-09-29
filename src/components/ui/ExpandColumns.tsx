import { useState, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { MOBILE_QUERY } from '../../config/breakpoints'
import { useMediaQuery } from '../../hooks/useMediaQuery'
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
  /** Phones: label for a close button inside the open panel (omit for no button). */
  closeLabel?: string
  className?: string
}

/**
 * Row of columns; hovering or focusing one opens it with a curtain-style panel.
 * On phones it becomes a vertical accordion: tap a header to open it, tap again to close.
 */
export function ExpandColumns<T>({
  items,
  getKey,
  renderCaption,
  renderPanel,
  getHref,
  panelTone = 'forest',
  grow = 1.9,
  closeLabel,
  className,
}: ExpandColumnsProps<T>) {
  const [active, setActive] = useState(0)
  const mobile = useMediaQuery(MOBILE_QUERY)
  const rowStyle = { '--grow': grow } as CSSProperties

  if (mobile) {
    return (
      <div className={cx(styles.row, className)} style={rowStyle}>
        {items.map((item, index) => {
          const open = index === active
          const toggle = () => setActive(open ? -1 : index)
          const href = getHref?.(item)
          const panelProps = { className: cx(styles.panel, styles[panelTone]), inert: !open }
          return (
            <div key={getKey(item)} className={cx(styles.column, open && styles.open)} data-open={open}>
              <button type="button" className={styles.head} aria-expanded={open} onClick={toggle}>
                <span className={styles.headCaption}>{renderCaption(item, index)}</span>
                <span className={styles.plus} aria-hidden="true" />
              </button>
              {href ? (
                <Link to={href} viewTransition {...panelProps}>
                  {renderPanel(item, index)}
                </Link>
              ) : (
                <div {...panelProps}>{renderPanel(item, index)}</div>
              )}
              {closeLabel && (
                <button type="button" className={styles.close} aria-label={closeLabel} onClick={toggle} tabIndex={open ? 0 : -1}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                    <path d="M1 7H13" />
                  </svg>
                </button>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cx(styles.row, className)} style={rowStyle}>
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
          <Link key={getKey(item)} to={href} viewTransition {...props}>
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
