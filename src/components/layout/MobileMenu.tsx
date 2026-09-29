import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { NAV_ORDER, ROUTES } from '../../config/routes'
import { useScrollLock } from '../../hooks/useScrollLock'
import { cx } from '../../utils/classNames'
import { padNumber } from '../../utils/format'
import { PillButton } from '../ui'
import { LanguageSwitcher } from './LanguageSwitcher'
import styles from './MobileMenu.module.css'

/**
 * Phone navigation: a burger that opens a full-screen curtain of four panels with the
 * page links, the order button and the language switcher. Hidden above the phone breakpoint.
 */
export function MobileMenu({ className }: { className?: string }) {
  const { t } = useTranslation('common')
  const { pathname } = useLocation()
  // Remember which page the menu was opened on: navigating elsewhere closes it.
  const [openedOn, setOpenedOn] = useState<string | null>(null)
  const open = openedOn === pathname
  const menuId = useId()
  const close = () => setOpenedOn(null)

  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpenedOn(null)
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <button
        type="button"
        className={cx(styles.burger, styles.trigger, className)}
        aria-label={t('nav.openMenu')}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpenedOn(pathname)}
      >
        <span />
        <span />
      </button>

      {createPortal(
        <div id={menuId} className={cx(styles.menu, open && styles.open)} aria-hidden={!open} inert={!open}>
          <div className={styles.panels} aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={styles.body}>
            <div className={styles.top}>
              <Link to={ROUTES.home} viewTransition aria-label={t('brand.homeLabel')} onClick={close}>
                <img src={logo} alt={t('brand.name')} className={styles.logo} />
              </Link>
              <button type="button" className={styles.burger} aria-label={t('nav.closeMenu')} onClick={close}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                  <path d="M2 2L14 14M14 2L2 14" />
                </svg>
              </button>
            </div>

            <nav aria-label={t('nav.mainLabel')} className={styles.links}>
              {NAV_ORDER.map((key, index) => (
                <NavLink
                  key={key}
                  to={ROUTES[key]}
                  end
                  viewTransition
                  onClick={close}
                  className={({ isActive }) => cx(styles.link, isActive && styles.current)}
                >
                  {t(`nav.${key}`)}
                  <small>{padNumber(index + 1)}</small>
                </NavLink>
              ))}
            </nav>

            <div className={styles.bottom}>
              <PillButton to={ROUTES.quickOrder} className={styles.order}>
                {t('actions.orderBouquet')}
              </PillButton>
              <div className={styles.utility}>
                <LanguageSwitcher />
                <span className={styles.phone}>{t('placeholders.phone')}</span>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}
