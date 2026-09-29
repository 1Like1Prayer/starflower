import { Children, useRef, useState, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { MOBILE_QUERY } from '../../config/breakpoints'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { cx } from '../../utils/classNames'
import { padNumber } from '../../utils/format'
import styles from './PagedGrid.module.css'

/** Gap between pages in the swipe track. Keep in step with `.track` in the stylesheet. */
const PAGE_GAP = 16

interface PagedGridProps {
  children: ReactNode
  /** Items per page on phones. */
  perPage?: number
  /** Class of the plain grid used above the phone breakpoint. */
  gridClassName: string
  /** Changing this remounts the grid (new filter → new entrance, back to page one). */
  generation: number
  leaving?: boolean
  /** Class carrying the phone page layout (`--page-row`, `--page-row-gap`, `--page-col-gap`). */
  pageClassName?: string
}

/**
 * The same items as a normal grid on wide screens; on phones they are split into swipeable
 * pages with a pager underneath.
 */
export function PagedGrid({ children, perPage = 6, gridClassName, generation, leaving, pageClassName }: PagedGridProps) {
  const mobile = useMediaQuery(MOBILE_QUERY)
  if (!mobile) {
    return (
      <div key={generation} className={gridClassName} data-leaving={leaving}>
        {children}
      </div>
    )
  }
  return (
    <SwipePages key={generation} perPage={perPage} leaving={leaving} pageClassName={pageClassName}>
      {children}
    </SwipePages>
  )
}

function SwipePages({
  children,
  perPage,
  leaving,
  pageClassName,
}: Pick<PagedGridProps, 'children' | 'leaving' | 'pageClassName'> & { perPage: number }) {
  const { t, i18n } = useTranslation('common')
  const viewportRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)

  const items = Children.toArray(children)
  const pages = Array.from({ length: Math.max(1, Math.ceil(items.length / perPage)) }, (_, index) =>
    items.slice(index * perPage, (index + 1) * perPage),
  )
  // Scroll offsets run negative in right-to-left layouts.
  const sign = i18n.dir() === 'rtl' ? -1 : 1

  const onScroll = () => {
    const viewport = viewportRef.current
    if (!viewport) return
    setPage(Math.round(Math.abs(viewport.scrollLeft) / (viewport.clientWidth + PAGE_GAP)))
  }

  const goTo = (target: number) => {
    const viewport = viewportRef.current
    if (!viewport) return
    const clamped = Math.max(0, Math.min(pages.length - 1, target))
    viewport.scrollTo({ left: sign * clamped * (viewport.clientWidth + PAGE_GAP), behavior: 'smooth' })
  }

  return (
    <div className={cx(styles.root, pageClassName)} data-leaving={leaving}>
      <div ref={viewportRef} className={styles.viewport} onScroll={onScroll}>
        <div className={styles.track}>
          {pages.map((pageItems, index) => (
            <div
              key={index}
              className={styles.page}
              role="group"
              aria-roledescription="page"
              aria-label={t('pager.page', { current: index + 1, total: pages.length })}
            >
              {pageItems}
            </div>
          ))}
        </div>
      </div>

      {/* The pager keeps its space with a single page so the layout below never shifts. */}
      <div className={cx(styles.pager, pages.length < 2 && styles.single)} aria-hidden={pages.length < 2} inert={pages.length < 2}>
          <div className={styles.bars} aria-hidden="true">
            {pages.map((_, index) => (
              <span key={index} className={cx(index === page && styles.barActive)} />
            ))}
          </div>
          <span className={styles.position} dir="ltr" aria-live="polite">
            {padNumber(page + 1)} / {padNumber(pages.length)}
          </span>
          <div className={styles.buttons}>
            <button type="button" className={styles.button} aria-label={t('pager.previous')} disabled={page === 0} onClick={() => goTo(page - 1)}>
              <span className={styles.glyph}>←</span>
            </button>
            <button
              type="button"
              className={styles.button}
              aria-label={t('pager.next')}
              disabled={page >= pages.length - 1}
              onClick={() => goTo(page + 1)}
            >
              <span className={styles.glyph}>→</span>
            </button>
          </div>
        </div>
    </div>
  )
}
