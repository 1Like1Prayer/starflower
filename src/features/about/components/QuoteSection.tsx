import { useTranslation } from 'react-i18next'
import { BotanicalArt, Eyebrow, Reveal } from '../../../components/ui'
import styles from './QuoteSection.module.css'

export function QuoteSection() {
  const { t } = useTranslation('about')
  return (
    <section className={styles.section}>
      <Reveal className={styles.art}>
        <BotanicalArt />
      </Reveal>
      <Reveal as="blockquote" className={styles.quote}>
        {t('quote.text')}
      </Reveal>
      <Reveal as="span" className={styles.author}>
        <Eyebrow tone="inherit">{t('quote.author')}</Eyebrow>
      </Reveal>
    </section>
  )
}
