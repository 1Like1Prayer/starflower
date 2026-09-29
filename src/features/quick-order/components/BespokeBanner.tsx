import { useTranslation } from 'react-i18next'
import { BotanicalArt, Eyebrow, PillButton } from '../../../components/ui'
import { ROUTES } from '../../../config/routes'
import styles from './BespokeBanner.module.css'

export function BespokeBanner() {
  const { t } = useTranslation(['quickOrder', 'common'])
  return (
    <section className={styles.banner}>
      <BotanicalArt className={styles.art} />
      <div className={styles.text}>
        <Eyebrow tone="inherit">{t('bespoke.eyebrow')}</Eyebrow>
        <h2>{t('bespoke.title')}</h2>
      </div>
      <PillButton to={ROUTES.contact} variant="dark" className={styles.cta}>
        {t('common:actions.commissionPiece')}
      </PillButton>
    </section>
  )
}
