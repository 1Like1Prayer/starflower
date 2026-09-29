import { useTranslation } from 'react-i18next'
import { BotanicalArt, Caption, Eyebrow, PillButton, Reveal } from '../../../components/ui'
import { ROUTES } from '../../../config/routes'
import styles from './BespokeSection.module.css'

export function BespokeSection() {
  const { t } = useTranslation(['home', 'common'])
  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <Reveal as="span">
          <Eyebrow tone="light">{t('bespoke.eyebrow')}</Eyebrow>
        </Reveal>
        <Reveal as="h2" className={styles.title}>
          {t('bespoke.title')}
        </Reveal>
        <Reveal className={styles.cta}>
          <PillButton to={ROUTES.contact}>{t('common:actions.commissionPiece')}</PillButton>
        </Reveal>
      </div>
      <div data-tone="moss" className={styles.photo}>
        <Reveal variant="clip" className={styles.artWrap}>
          <BotanicalArt className={styles.art} />
        </Reveal>
        <Caption className={styles.caption}>{t('common:photo.named', { name: t('bespoke.photoLabel') })}</Caption>
      </div>
    </section>
  )
}
