import { useTranslation } from 'react-i18next'
import { PillButton, Reveal, SectionHeading } from '../../../components/ui'
import { ROUTES } from '../../../config/routes'
import { padNumber } from '../../../utils/format'
import { RITUAL_STEPS } from '../data/about'
import styles from './RitualSection.module.css'

export function RitualSection() {
  const { t } = useTranslation('about')

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <SectionHeading eyebrow={t('ritual.eyebrow')} title={t('ritual.title')} tone="dark" size="md" />
        <Reveal>
          <PillButton to={ROUTES.contact}>{t('ritual.cta')}</PillButton>
        </Reveal>
      </div>

      <div className={styles.steps}>
        {RITUAL_STEPS.map((id, index) => (
          <Reveal key={id} delay={index * 0.1} className={styles.step}>
            <Reveal variant="grow" as="span" className={styles.bar} />
            <span className={styles.number}>{padNumber(index + 1)}</span>
            <h3>{t(`ritual.steps.${id}.title`)}</h3>
            <p>{t(`ritual.steps.${id}.text`)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
