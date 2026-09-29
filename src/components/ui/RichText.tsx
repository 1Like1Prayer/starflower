import { cx } from '../../utils/classNames'
import styles from './RichText.module.css'

interface RichTextProps {
  /** Copy that may wrap words in `<em>…</em>` to render them in the accent serif. */
  text: string
  accentClassName?: string
}

export function RichText({ text, accentClassName }: RichTextProps) {
  const parts = text.split(/(<em>.*?<\/em>)/g)
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith('<em>') ? (
          <em key={index} className={cx(styles.accent, accentClassName)}>
            {part.slice(4, -5)}
          </em>
        ) : (
          part
        ),
      )}
    </>
  )
}
