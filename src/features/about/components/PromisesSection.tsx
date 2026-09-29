import { useTranslation } from 'react-i18next'
import { BotanicalArt, ColumnPin, Eyebrow, ExpandColumns, Reveal, SectionHeading } from '../../../components/ui'
import { PROMISES, type PromiseId } from '../data/about'
import styles from './PromisesSection.module.css'

export function PromisesSection() {
  const { t } = useTranslation('about')

  return (
    <>
      <section className={styles.intro}>
        <SectionHeading eyebrow={t('promises.eyebrow')} title={t('promises.title')} size="md" />
        <Reveal as="p" className={styles.text}>
          {t('promises.intro')}
        </Reveal>
      </section>

      <section aria-label={t('promises.ariaLabel')} className={styles.stage}>
        <BotanicalArt className={styles.backdrop} />
        <ExpandColumns<PromiseId>
          items={PROMISES}
          getKey={(id) => id}
          panelTone="sage"
          grow={1.6}
          renderCaption={(id) => (
            <div className={styles.caption}>
              <Eyebrow className={styles.numeral}>{t(`promises.items.${id}.numeral`)}</Eyebrow>
              <span className={styles.numeralCompact} aria-hidden="true">
                {t(`promises.items.${id}.numeral`)}.
              </span>
              <span className={styles.title}>{t(`promises.items.${id}.title`)}</span>
            </div>
          )}
          renderPanel={(id) => (
            <>
              <ColumnPin className={styles.pinTop}>
                <Eyebrow tone="inherit">{t(`promises.items.${id}.numeral`)}</Eyebrow>
                <span className={styles.panelTitle}>{t(`promises.items.${id}.title`)}</span>
              </ColumnPin>
              <ColumnPin className={styles.pinBottom}>
                <p>{t(`promises.items.${id}.description`)}</p>
              </ColumnPin>
            </>
          )}
        />
      </section>
    </>
  )
}
