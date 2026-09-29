import type { MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cx } from '../../utils/classNames'
import styles from './PillButton.module.css'

interface PillButtonProps {
  children: ReactNode
  variant?: 'light' | 'dark'
  /** Renders a router link. */
  to?: string
  /** Renders a non-interactive label (for use inside another link). */
  decorative?: boolean
  type?: 'button' | 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}

export function PillButton({
  children,
  variant = 'light',
  to,
  decorative,
  type = 'button',
  onClick,
  className,
}: PillButtonProps) {
  const classes = cx(styles.pill, variant === 'dark' && styles.dark, className)
  const content = (
    <>
      {children}
      <span className={styles.dot} />
    </>
  )

  if (decorative) return <span className={classes}>{content}</span>
  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
