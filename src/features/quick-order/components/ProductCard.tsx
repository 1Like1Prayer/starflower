import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Eyebrow, Photo } from '../../../components/ui'
import { ROUTES } from '../../../config/routes'
import type { Bouquet } from '../../../data/catalog'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  bouquet: Bouquet
  order: number
}

export function ProductCard({ bouquet, order }: ProductCardProps) {
  const { t } = useTranslation(['catalog', 'quickOrder', 'common'])
  const name = t(`catalog:bouquets.${bouquet.id}.name`)
  const price = t(`catalog:bouquets.${bouquet.id}.price`)

  return (
    <Link
      to={ROUTES.contact}
      viewTransition
      className={styles.card}
      style={{ '--order': order } as CSSProperties}
      aria-label={t('quickOrder:card.ariaLabel', { name, price })}
    >
      <Photo
        tone={bouquet.tone}
        className={styles.photo}
        art={{ left: -200, top: 130, width: 700 }}
        artClassName={styles.art}
        caption={t('common:photo.label')}
        captionAt="top"
      >
        <span className={styles.quick}>
          {t('quickOrder:card.orderNow')}
          <span className={styles.dot} />
        </span>
      </Photo>

      <div className={styles.details}>
        <Eyebrow>{t(`catalog:categories.${bouquet.category}`)}</Eyebrow>
        <span className={styles.name}>{name}</span>
        <span className={styles.stems}>{t(`catalog:bouquets.${bouquet.id}.stems`)}</span>
      </div>

      <div className={styles.footer}>
        <span className={styles.price}>{price}</span>
        <span>
          {t('quickOrder:card.order')} <span className={styles.arrow}>→</span>
        </span>
      </div>
    </Link>
  )
}
