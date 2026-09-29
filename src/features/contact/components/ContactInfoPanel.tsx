import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { Logo } from '../../../components/layout'
import { BotanicalArt, Eyebrow, UnderlineLink } from '../../../components/ui'
import { SOCIALS } from '../../../config/socials'
import styles from './ContactInfoPanel.module.css'

interface InfoRowProps {
  label: string
  value: string
  delay: string
  href?: string
  last?: boolean
}

function InfoRow({ label, value, delay, href, last }: InfoRowProps) {
  return (
    <div className={`fade ${styles.row} ${last ? styles.last : ''}`} style={{ '--delay': delay } as CSSProperties}>
      <span className={styles.label}>{label}</span>
      {href ? <a href={href}>{value}</a> : <span>{value}</span>}
    </div>
  )
}

export function ContactInfoPanel() {
  const { t } = useTranslation(['contact', 'common'])

  return (
    <aside data-tone="forest" className={styles.panel}>
      <div className={`ken-burns ${styles.art}`} aria-hidden="true">
        <BotanicalArt />
      </div>

      <Logo tone="light" className={styles.logoLink} imageClassName={styles.logo} />

      <div className={styles.info}>
        <span className="fade" style={{ '--delay': '1.1s' } as CSSProperties}>
          <Eyebrow tone="light">{t('atelier.eyebrow')}</Eyebrow>
        </span>
        <InfoRow label={t('atelier.address')} value={t('atelier.addressValue')} delay="1.1s" />
        <InfoRow label={t('atelier.hours')} value={t('atelier.hoursValue')} delay="1.3s" />
        <InfoRow label={t('atelier.telephone')} value={t('atelier.telephoneValue')} delay="1.5s" href="#" />
        <InfoRow label={t('atelier.email')} value={t('atelier.emailValue')} delay="1.7s" href="#" last />
        <div className={`fade ${styles.socials}`} style={{ '--delay': '1.7s' } as CSSProperties}>
          {SOCIALS.map(({ key, href }) => (
            <UnderlineLink key={key} href={href}>
              {t(`common:social.${key}`)}
            </UnderlineLink>
          ))}
          <UnderlineLink href="#">{t('common:social.whatsapp')}</UnderlineLink>
        </div>
      </div>
    </aside>
  )
}
