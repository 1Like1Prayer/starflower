import { useTranslation } from 'react-i18next'
import { BotanicalArt, Eyebrow, Reveal, RichText } from '../../../components/ui'
import styles from './PhilosophySection.module.css'

export function PhilosophySection() {
  const { t } = useTranslation('home')
  return (
    <section className={styles.section}>
      <Reveal>
        <BotanicalArt className={styles.art} />
      </Reveal>
      <Reveal as="blockquote" delay={0.15} className={styles.quote}>
        <RichText text={t('philosophy.quote')} accentClassName={styles.accent} />
      </Reveal>
      <Reveal as="span" delay={0.3}>
        <Eyebrow tone="inherit">{t('philosophy.eyebrow')}</Eyebrow>
      </Reveal>
    </section>
  )
}
