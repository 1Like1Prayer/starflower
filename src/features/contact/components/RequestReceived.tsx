import { useTranslation } from 'react-i18next'
import { BotanicalArt, Eyebrow, PillButton } from '../../../components/ui'
import { ROUTES } from '../../../config/routes'
import type { ContactRequest } from '../data/contact'
import styles from './RequestReceived.module.css'

interface RequestReceivedProps {
  request: ContactRequest
  onReset: () => void
}

export function RequestReceived({ request, onReset }: RequestReceivedProps) {
  const { t } = useTranslation('contact')
  const firstName = request.name.trim().split(' ')[0]

  return (
    <div className={styles.sent}>
      <BotanicalArt className={styles.art} />
      <Eyebrow tone="inherit" className={styles.eyebrow}>
        {t('sent.eyebrow')}
      </Eyebrow>
      <div className={styles.message}>
        <h2>{firstName ? t('sent.titleNamed', { name: firstName }) : t('sent.title')}</h2>
        <p>{t('sent.body', { occasion: t(`form.occasions.${request.occasion}.summary`) })}</p>
        <div className={styles.actions}>
          <PillButton to={ROUTES.gallery}>{t('sent.explore')}</PillButton>
          <PillButton variant="dark" onClick={onReset}>
            {t('sent.another')}
          </PillButton>
        </div>
      </div>
    </div>
  )
}
