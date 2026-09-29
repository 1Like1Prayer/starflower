import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { BotanicalArt, LineHeading, Eyebrow } from '../../../components/ui'
import { SiteHeader } from '../../../components/layout'
import { useParallax } from '../../../hooks/useParallax'
import styles from './Hero.module.css'

export function Hero() {
  const { t } = useTranslation(['home', 'common'])
  const { ref: parallaxRef, onMouseMove } = useParallax<HTMLDivElement>()

  return (
    <section className={styles.hero} onMouseMove={onMouseMove}>
      <div ref={parallaxRef} className={styles.parallax} aria-hidden="true">
        <BotanicalArt className={styles.art} />
      </div>

      <SiteHeader tone="light" overlay />

      <div className={styles.content}>
        <LineHeading
          lines={[t('hero.titleLine1'), t('hero.titleLine2'), t('hero.titleLine3')]}
          delay={1.7}
          className={styles.title}
          accentClassName={styles.accent}
        />
        <div className={`fade ${styles.who}`} style={{ '--delay': '2.3s' } as CSSProperties}>
          <span className={styles.whoLabel}>
            <Eyebrow tone="inherit">{t('hero.whoLabel')}</Eyebrow>
          </span>
          <p>{t('hero.whoText')}</p>
        </div>
      </div>

      <div className={styles.footer}>
        <span className={`fade ${styles.location}`} style={{ '--delay': '2.1s' } as CSSProperties}>
          {t('hero.location', { city: t('common:placeholders.city') })}
        </span>
        <span className="fade" style={{ '--delay': '2.5s' } as CSSProperties}>
          {t('hero.scroll')}
        </span>
      </div>
    </section>
  )
}
