import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { cx } from '../../utils/classNames'
import styles from './UnderlineLink.module.css'

interface UnderlineLinkProps {
  children: ReactNode
  /** Internal route. The link is underlined while its route is active. */
  to?: string
  /** External / placeholder URL. */
  href?: string
  className?: string
}

export function UnderlineLink({ children, to, href, className }: UnderlineLinkProps) {
  if (to) {
    return (
      <NavLink to={to} end viewTransition className={({ isActive }) => cx(styles.link, isActive && styles.active, className)}>
        {children}
      </NavLink>
    )
  }
  return (
    <a href={href} className={cx(styles.link, className)}>
      {children}
    </a>
  )
}
