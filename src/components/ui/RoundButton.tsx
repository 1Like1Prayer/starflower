import type { ReactNode } from 'react'
import styles from './RoundButton.module.css'

interface RoundButtonProps {
  label: string
  onClick: () => void
  children: ReactNode
}

export function RoundButton({ label, onClick, children }: RoundButtonProps) {
  return (
    <button type="button" className={styles.round} onClick={onClick} aria-label={label}>
      <span className={styles.glyph}>{children}</span>
    </button>
  )
}
