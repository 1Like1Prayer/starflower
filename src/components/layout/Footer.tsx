import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { NAV_ORDER, ROUTES } from '../../config/routes'
import { SOCIALS } from '../../config/socials'
import { currentYear } from '../../utils/format'
import { Eyebrow, UnderlineLink } from '../ui'
import { Logo } from './Logo'
import styles from './Footer.module.css'

export function Footer() {
  const { t } = useTranslation('common')
  const { pathname } = useLocation()
  const menu = NAV_ORDER.filter((key) => ROUTES[key] !== pathname)

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Logo tone="light" static imageClassName={styles.logo} />
        <div className={styles.columns}>
          <div className={styles.column}>
            <Eyebrow tone="stone" className={styles.heading}>
              {t('footer.menu')}
            </Eyebrow>
            {menu.map((key) => (
              <UnderlineLink key={key} to={ROUTES[key]}>
                {t(`nav.${key}`)}
              </UnderlineLink>
            ))}
          </div>
          <div className={styles.column}>
            <Eyebrow tone="stone" className={styles.heading}>
              {t('footer.atelier')}
            </Eyebrow>
            <span>{t('placeholders.address')}</span>
            <span>{t('placeholders.city')}</span>
            <span>{t('placeholders.openingHours')}</span>
          </div>
          <div className={styles.column}>
            <Eyebrow tone="stone" className={styles.heading}>
              {t('footer.follow')}
            </Eyebrow>
            {SOCIALS.map(({ key, href }) => (
              <UnderlineLink key={key} href={href}>
                {t(`social.${key}`)}
              </UnderlineLink>
            ))}
            <span>{t('placeholders.email')}</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>{t('footer.copyright', { year: currentYear(), brand: t('brand.name') })}</span>
        <span>{t('brand.tagline')}</span>
      </div>
    </footer>
  )
}
