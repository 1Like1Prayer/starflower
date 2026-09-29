import type { CSSProperties } from 'react'
import botanical from '../../assets/botanical.svg'

interface BotanicalArtProps {
  className?: string
  style?: CSSProperties
}

/** Decorative botanical line drawing used behind sections and photo placeholders. */
export function BotanicalArt({ className, style }: BotanicalArtProps) {
  return <img src={botanical} alt="" aria-hidden="true" className={className} style={style} />
}
