import { useState, type CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { Logo, NavCluster, PageShell } from '../../components/layout'
import { BotanicalArt, Eyebrow, LineHeading } from '../../components/ui'
import { ROUTES } from '../../config/routes'
import { ContactForm } from './components/ContactForm'
import { ContactInfoPanel } from './components/ContactInfoPanel'
import { RequestReceived } from './components/RequestReceived'
import type { ContactRequest } from './data/contact'
import styles from './ContactPage.module.css'

export function ContactPage() {
  const { t } = useTranslation('contact')
  const [request, setRequest] = useState<ContactRequest | null>(null)

  return (
    <PageShell>
      <div className={styles.layout}>
        <ContactInfoPanel />
        <div className={styles.content}>
          <section className={styles.hero}>
            <BotanicalArt className={styles.heroArt} />
            <div className={styles.top}>
              <Logo tone="light" className={styles.mobileLogo} imageClassName={styles.mobileLogoImage} />
              <NavCluster ctaLabel={t('cta')} ctaTo={ROUTES.gallery} className={styles.nav} />
            </div>

            <div className={styles.intro}>
              <span className={`fade ${styles.eyebrow}`} style={{ '--delay': '1.1s' } as CSSProperties}>
                <Eyebrow>{t('hero.eyebrow')}</Eyebrow>
              </span>
              <LineHeading lines={[t('hero.titleLine1'), t('hero.titleLine2')]} delay={0.9} className={styles.title} />
              <p className={`fade ${styles.lead}`} style={{ '--delay': '1.3s' } as CSSProperties}>
                {t('hero.lead')}
              </p>
            </div>
          </section>

          <div className={styles.formArea}>
            {request ? <RequestReceived request={request} onReset={() => setRequest(null)} /> : <ContactForm onSubmit={setRequest} />}
          </div>
        </div>
      </div>
    </PageShell>
  )
}
