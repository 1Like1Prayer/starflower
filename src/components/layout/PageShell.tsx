import type { ReactNode } from 'react'
import { Curtain } from './Curtain'
import { Footer } from './Footer'
import styles from './PageShell.module.css'

interface PageShellProps {
  children: ReactNode
  curtain?: 'page' | 'intro'
}

/** Common frame for every page: opening curtain, main content, footer. */
export function PageShell({ children, curtain = 'page' }: PageShellProps) {
  return (
    <div className={styles.shell}>
      <Curtain variant={curtain} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
