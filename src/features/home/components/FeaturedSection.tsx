import { useTranslation } from 'react-i18next'
import { Eyebrow, Photo, PillButton, Reveal } from '../../../components/ui'
import { ROUTES } from '../../../config/routes'
import { useAutoRotate } from '../../../hooks/useAutoRotate'
import { cx } from '../../../utils/classNames'
import { FEATURED } from '../data/home'
import styles from './FeaturedSection.module.css'

export function FeaturedSection() {
  const { t } = useTranslation(['home', 'common'])
  const { index, select } = useAutoRotate(FEATURED.length)

  return (
    <section className={styles.section}>
      <Reveal className={styles.head}>
        <Eyebrow>{t('featured.eyebrow')}</Eyebrow>
        <div className={styles.stack}>
          {FEATURED.map((item, i) => (
            <h2 key={item.id} className={cx(styles.layer, styles.name, i === index && styles.active)} inert={i !== index}>
              {t(`featured.items.${item.id}.name`)}
            </h2>
          ))}
        </div>
      </Reveal>

      <div className={styles.body}>
        <Reveal variant="clip" className={cx(styles.media, styles.stack)}>
          {FEATURED.map((item, i) => (
            <div key={item.id} className={cx(styles.layer, styles.image, i === index && styles.active)} aria-hidden="true">
              <Photo
                tone={item.tone}
                className={styles.photo}
                art={{ left: -40, top: 170, width: 860 }}
                caption={t('common:photo.named', { name: t(`featured.items.${item.id}.name`) })}
              />
            </div>
          ))}
        </Reveal>

        <div className={cx(styles.details, styles.stack)}>
          {FEATURED.map((item, i) => (
            <div key={item.id} className={cx(styles.layer, styles.copy, i === index && styles.active)} inert={i !== index}>
              <Eyebrow>{t('featured.descriptionLabel')}</Eyebrow>
              <p>{t(`featured.items.${item.id}.description`)}</p>
              <p className={styles.stems}>{t(`featured.items.${item.id}.stems`)}</p>
              <span className={styles.price}>{t('common:price.from', { price: t('common:placeholders.price') })}</span>
              <PillButton to={ROUTES.contact} className={styles.cta}>
                {t('common:actions.orderThisBouquet')}
              </PillButton>
            </div>
          ))}
        </div>

        <div role="group" aria-label={t('featured.groupLabel')} className={styles.thumbs}>
          {FEATURED.map((item, i) => (
            <button
              key={item.id}
              type="button"
              data-tone={item.tone}
              className={cx(styles.thumb, i === index && styles.thumbActive)}
              aria-label={t('featured.show', { name: t(`featured.items.${item.id}.name`) })}
              aria-pressed={i === index}
              onClick={() => select(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
