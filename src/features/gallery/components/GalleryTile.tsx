import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { Eyebrow, Photo } from '../../../components/ui'
import type { Bouquet } from '../../../data/catalog'
import { ART_PLACEMENTS } from '../data/gallery'
import styles from './GalleryTile.module.css'

interface GalleryTileProps {
  bouquet: Bouquet
  /** Position in the visible grid; drives the staggered entrance. */
  order: number
  onOpen: () => void
}

export function GalleryTile({ bouquet, order, onOpen }: GalleryTileProps) {
  const { t } = useTranslation(['catalog', 'gallery', 'common'])
  const name = t(`catalog:bouquets.${bouquet.id}.name`)

  return (
    <button
      type="button"
      className={styles.tile}
      style={{ '--order': order } as CSSProperties}
      onClick={onOpen}
      aria-label={t('gallery:tile.view', { name })}
    >
      <Photo
        tone={bouquet.tone}
        className={styles.photo}
        art={ART_PLACEMENTS[bouquet.art]}
        artClassName={styles.art}
        caption={t('common:photo.label')}
        captionAt="top"
      >
        <span className={styles.veil} />
        <span className={styles.caption}>
          <Eyebrow tone="light">{t(`catalog:categories.${bouquet.category}`)}</Eyebrow>
          <span className={styles.name}>{name}</span>
          <span className={styles.stems}>{t(`catalog:bouquets.${bouquet.id}.stems`)}</span>
        </span>
      </Photo>
    </button>
  )
}
