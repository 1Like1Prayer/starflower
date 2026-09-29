import type { ReactNode } from 'react'
import type { Tone } from '../../theme'
import { cx } from '../../utils/classNames'
import { BotanicalArt } from './BotanicalArt'
import { Caption } from './Caption'
import styles from './Photo.module.css'

export interface ArtPlacement {
  left: number
  top: number
  width: number
  opacity?: number
}

interface PhotoProps {
  tone: Tone
  art?: ArtPlacement
  /** Text of the placeholder caption, e.g. "Photo · Blush Peony". */
  caption?: string
  captionAt?: 'top' | 'bottom'
  className?: string
  artClassName?: string
  children?: ReactNode
}

/** Photo placeholder: a toned gradient with the botanical drawing and an optional caption. */
export function Photo({ tone, art, caption, captionAt = 'bottom', className, artClassName, children }: PhotoProps) {
  return (
    <div data-tone={tone} className={cx(styles.photo, className)}>
      {art && (
        <BotanicalArt
          className={cx(styles.art, artClassName)}
          style={{ left: art.left, top: art.top, width: art.width, opacity: art.opacity ?? 0.22 }}
        />
      )}
      {children}
      {caption && (
        <Caption className={cx(styles.caption, captionAt === 'top' ? styles.top : styles.bottom)}>{caption}</Caption>
      )}
    </div>
  )
}
