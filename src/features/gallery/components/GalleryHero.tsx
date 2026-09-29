import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { BotanicalArt, ChipGroup, Eyebrow, LineHeading } from '../../../components/ui'
import { cx } from '../../../utils/classNames'
import { padNumber } from '../../../utils/format'
import { GALLERY_FILTERS, type GalleryFilter } from '../data/gallery'
import styles from './GalleryHero.module.css'

interface GalleryHeroProps {
  highlighted: GalleryFilter
  filter: GalleryFilter
  leaving: boolean
  generation: number
  visibleCount: number
  onFilter: (filter: GalleryFilter) => void
}

export function GalleryHero({ highlighted, filter, leaving, generation, visibleCount, onFilter }: GalleryHeroProps) {
  const { t } = useTranslation(['gallery', 'catalog', 'common'])
  const filterLabel = (value: GalleryFilter) =>
    value === 'all' ? t('common:filters.all') : t(`catalog:categories.${value}`)

  return (
    <section className={styles.hero}>
      <BotanicalArt className={styles.backdrop} />

      <div className={styles.title}>
        <span className="fade" style={{ '--delay': '1.2s' } as CSSProperties}>
          <Eyebrow>{t('hero.eyebrow')}</Eyebrow>
        </span>
        <LineHeading lines={[t('hero.titleLine1'), t('hero.titleLine2')]} delay={0.9} className={styles.heading} />
      </div>

      <div className={`fade ${styles.controls}`} style={{ '--delay': '1.4s' } as CSSProperties}>
        <p>{t('hero.intro')}</p>
        <ChipGroup
          scrollOnPhone
          label={t('hero.filterLabel')}
          options={GALLERY_FILTERS.map((value) => ({ value, label: filterLabel(value) }))}
          value={highlighted}
          onChange={onFilter}
        />
        <span key={generation} className={cx(styles.count, leaving && styles.leaving)} aria-live="polite">
          [{' '}
          {t('hero.summary', {
            filter: filter === 'all' ? t('hero.allPieces') : filterLabel(filter),
            pieces: t('hero.count', { count: visibleCount, number: padNumber(visibleCount) }),
          })}{' '}
          ]
        </span>
      </div>
    </section>
  )
}
