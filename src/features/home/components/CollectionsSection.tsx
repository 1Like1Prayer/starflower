import { useTranslation } from 'react-i18next'
import { BotanicalArt, ColumnPin, Eyebrow, ExpandColumns, Photo, PillButton, Reveal, SectionHeading } from '../../../components/ui'
import { ROUTES } from '../../../config/routes'
import { padNumber } from '../../../utils/format'
import { COLLECTIONS } from '../data/home'
import styles from './CollectionsSection.module.css'

type Collection = (typeof COLLECTIONS)[number]

export function CollectionsSection() {
  const { t } = useTranslation(['home', 'common'])

  return (
    <>
      <section className={styles.intro}>
        <SectionHeading eyebrow={t('collections.eyebrow')} title={t('collections.title')} />
        <Reveal as="p" delay={0.15} className={styles.hint}>
          {t('collections.hint')}
        </Reveal>
      </section>

      <section aria-label={t('collections.ariaLabel')} className={styles.stage}>
        <BotanicalArt className={styles.backdrop} />
        <ExpandColumns<Collection>
          items={COLLECTIONS}
          getKey={(item) => item.id}
          getHref={() => ROUTES.gallery}
          renderCaption={(item) => (
            <div className={styles.caption}>
              <Eyebrow>{t(`collections.items.${item.id}.label`)}</Eyebrow>
              <span className={styles.title}>{t(`collections.items.${item.id}.title`)}</span>
            </div>
          )}
          renderPanel={(item, index) => (
            <>
              <div className={styles.photoFill}>
                <Photo tone={item.tone} className={styles.photo} art={{ left: -60, top: 300, width: 900 }} artClassName={styles.zoom}>
                  <div className={styles.veil} />
                </Photo>
              </div>
              <ColumnPin className={styles.pinTop}>
                <Eyebrow tone="light">{padNumber(index + 1)}</Eyebrow>
                <span className={styles.panelTitle}>{t(`collections.items.${item.id}.title`)}</span>
              </ColumnPin>
              <ColumnPin className={styles.pinBottom}>
                <Eyebrow tone="light">{t('collections.descriptionLabel')}</Eyebrow>
                <p>{t(`collections.items.${item.id}.description`)}</p>
                <PillButton decorative className={styles.explore}>
                  {t('common:actions.explore')}
                </PillButton>
              </ColumnPin>
              <ColumnPin className={styles.photoTag}>
                <Eyebrow tone="stone">{t('common:photo.label')}</Eyebrow>
              </ColumnPin>
            </>
          )}
        />
      </section>
    </>
  )
}
