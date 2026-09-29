import { cx } from '../../utils/classNames'
import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'
import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  tone?: 'light' | 'dark'
  size?: 'md' | 'lg'
  className?: string
}

/** Eyebrow + large uppercase title. `\n` in the title becomes a line break. */
export function SectionHeading({ eyebrow, title, tone = 'light', size = 'lg', className }: SectionHeadingProps) {
  return (
    <Reveal className={cx(styles.heading, className)}>
      <Eyebrow tone={tone === 'dark' ? 'light' : 'muted'}>{eyebrow}</Eyebrow>
      <h2 className={cx(styles.title, size === 'md' && styles.md)}>{title}</h2>
    </Reveal>
  )
}
