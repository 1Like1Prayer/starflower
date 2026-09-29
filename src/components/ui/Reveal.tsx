import type { CSSProperties, ReactNode, Ref } from 'react'
import { useInView } from '../../hooks/useInView'
import { cx } from '../../utils/classNames'
import styles from './Reveal.module.css'

type RevealTag = 'div' | 'span' | 'p' | 'h2' | 'blockquote'

interface RevealProps {
  as?: RevealTag
  /** up: fade + rise · clip: wipe upward · grow: scale in from the left. */
  variant?: 'up' | 'clip' | 'grow'
  /** Seconds. */
  delay?: number
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

/** Reveals its content the first time it scrolls into view. */
export function Reveal({ as = 'div', variant = 'up', delay, className, style, children }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()
  const Tag = as as 'div'

  return (
    <Tag
      ref={ref as Ref<HTMLDivElement>}
      className={cx(styles[variant], inView && styles.in, className)}
      style={delay ? { ...style, transitionDelay: `${delay}s` } : style}
    >
      {children}
    </Tag>
  )
}
