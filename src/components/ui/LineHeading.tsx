import { cx } from '../../utils/classNames'
import { RichText } from './RichText'
import styles from './LineHeading.module.css'

interface LineHeadingProps {
  as?: 'h1' | 'h2'
  lines: string[]
  /** Seconds before the first line rises. */
  delay?: number
  className?: string
  accentClassName?: string
}

/** Heading whose lines rise one after another out of a mask. */
export function LineHeading({ as: Tag = 'h1', lines, delay = 1, className, accentClassName }: LineHeadingProps) {
  return (
    <Tag className={cx(styles.heading, className)}>
      {lines.map((line, index) => (
        <span key={index} className={styles.line}>
          <span className={styles.inner} style={{ animationDelay: `${delay + index * 0.12}s` }}>
            <RichText text={line} accentClassName={accentClassName} />
          </span>
        </span>
      ))}
    </Tag>
  )
}
