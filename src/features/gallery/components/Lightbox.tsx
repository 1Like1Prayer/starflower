import { useEffect, useRef, type TouchEvent } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { Eyebrow, Photo, PillButton, RoundButton } from '../../../components/ui'
import { ROUTES } from '../../../config/routes'
import { getBouquets, type BouquetId } from '../../../data/catalog'
import { useScrollLock } from '../../../hooks/useScrollLock'
import { cx } from '../../../utils/classNames'
import { padNumber } from '../../../utils/format'
import { ART_PLACEMENTS, GALLERY_ORDER, STRIP_SIZE } from '../data/gallery'
import type { StepDirection } from '../hooks/useLightbox'
import styles from './Lightbox.module.css'

interface LightboxProps {
  /** Bouquets currently visible in the grid; the lightbox pages through these. */
  ids: readonly BouquetId[]
  selectedId: BouquetId
  direction: StepDirection
  navigation: number
  onClose: () => void
  onStep: (direction: StepDirection) => void
  onGoTo: (id: BouquetId) => void
}

export function Lightbox({ ids, selectedId, direction, navigation, onClose, onStep, onGoTo }: LightboxProps) {
  const { t, i18n } = useTranslation(['gallery', 'catalog', 'common'])
  const rtl = i18n.dir() === 'rtl'
  const touchStartX = useRef<number | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  useScrollLock(true)

  // Focus the dialog and hand focus back to whatever opened it on close.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    dialogRef.current?.focus({ preventScroll: true })
    return () => opener?.focus?.({ preventScroll: true })
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      // Arrow keys follow the page: in right-to-left layouts "forward" is the left arrow.
      else if (event.key === 'ArrowRight') onStep(rtl ? -1 : 1)
      else if (event.key === 'ArrowLeft') onStep(rtl ? 1 : -1)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose, onStep, rtl])

  // Phones: swipe the photo to step through the bouquets.
  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }
  const onTouchEnd = (event: TouchEvent) => {
    const start = touchStartX.current
    const end = event.changedTouches[0]?.clientX
    touchStartX.current = null
    if (start == null || end == null || Math.abs(end - start) < 40) return
    const forward = rtl ? end > start : end < start
    onStep(forward ? 1 : -1)
  }

  const bouquets = getBouquets(ids)
  const index = ids.indexOf(selectedId)
  const selected = bouquets[index]
  const name = t(`catalog:bouquets.${selected.id}.name`)
  const stripStart = Math.max(0, Math.min(index - 2, bouquets.length - STRIP_SIZE))

  // Remounting the text blocks on every navigation replays their entrance animation.
  const textMotion =
    navigation === 0 ? styles.textOpen : direction > 0 ? styles.textNext : styles.textPrevious

  return createPortal(
    <div className={styles.overlay}>
      <button type="button" className={styles.backdrop} onClick={onClose} aria-label={t('common:actions.close')} tabIndex={-1} />
      <div ref={dialogRef} className={styles.modal} role="dialog" aria-modal="true" aria-label={name} tabIndex={-1}>
        <div className={styles.header}>
          <div key={`title-${navigation}`} className={cx(styles.title, textMotion)}>
            <Eyebrow>
              {t('lightbox.meta', {
                category: t(`catalog:categories.${selected.category}`),
                number: padNumber(GALLERY_ORDER.indexOf(selected.id) + 1),
              })}
            </Eyebrow>
            <h2>{name}</h2>
          </div>
          <div className={styles.headerActions}>
            <span dir="ltr" aria-live="polite" className={styles.position}>
              {t('lightbox.position', { current: padNumber(index + 1), total: padNumber(bouquets.length) })}
            </span>
            <RoundButton label={t('common:actions.close')} onClick={onClose}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path d="M2 2L14 14M14 2L2 14" />
              </svg>
            </RoundButton>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.slides} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {bouquets.map((bouquet, i) => {
              const position = i === index ? 'on' : i < index ? 'before' : 'after'
              return (
                <div key={bouquet.id} className={cx(styles.slide, styles[position])} aria-hidden={i !== index}>
                  <Photo
                    tone={bouquet.tone}
                    className={styles.photo}
                    art={{ ...ART_PLACEMENTS[bouquet.art], opacity: 0.24 }}
                    artClassName={styles.slideArt}
                    caption={t('common:photo.named', { name: t(`catalog:bouquets.${bouquet.id}.name`) })}
                  />
                </div>
              )
            })}
          </div>

          <div className={styles.details}>
            <div key={`text-${navigation}`} className={cx(styles.text, textMotion, navigation > 0 && styles.late)}>
              <Eyebrow>{t('lightbox.descriptionLabel')}</Eyebrow>
              <p>{t(`catalog:bouquets.${selected.id}.description`)}</p>
              <p className={styles.stems}>{t(`catalog:bouquets.${selected.id}.stems`)}</p>
              <span>{t('common:price.from', { price: t('common:placeholders.price') })}</span>
            </div>
            <div className={styles.actions}>
              <PillButton to={ROUTES.contact}>{t('common:actions.orderThisBouquet')}</PillButton>
              <RoundButton label={t('lightbox.previous')} onClick={() => onStep(-1)}>
                ←
              </RoundButton>
              <RoundButton label={t('lightbox.next')} onClick={() => onStep(1)}>
                →
              </RoundButton>
            </div>
          </div>

          <div role="group" aria-label={t('lightbox.otherBouquets')} className={styles.strip}>
            {bouquets.slice(stripStart, stripStart + STRIP_SIZE).map((bouquet) => (
              <button
                key={bouquet.id}
                type="button"
                data-tone={bouquet.tone}
                className={cx(styles.thumb, bouquet.id === selectedId && styles.thumbActive)}
                aria-label={t('lightbox.show', { name: t(`catalog:bouquets.${bouquet.id}.name`) })}
                onClick={() => onGoTo(bouquet.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
