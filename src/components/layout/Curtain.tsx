import { cx } from '../../utils/classNames'
import logo from '../../assets/logo.svg'
import styles from './Curtain.module.css'

interface CurtainProps {
  /** `intro` is the slower home-page opening with the logo; `page` is the quick wipe. */
  variant?: 'page' | 'intro'
}

/** Four panels that lift away to reveal the page on load. */
export function Curtain({ variant = 'page' }: CurtainProps) {
  return (
    <>
      <div className={cx(styles.curtain, variant === 'intro' && styles.intro)} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {variant === 'intro' && <img className={styles.logo} src={logo} alt="" aria-hidden="true" />}
    </>
  )
}
