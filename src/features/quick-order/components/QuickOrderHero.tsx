import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { Logo, MainNav } from '../../../components/layout'
import { BotanicalArt, Eyebrow, LineHeading } from '../../../components/ui'
import { padNumber } from '../../../utils/format'
import styles from './QuickOrderHero.module.css'

const STEPS = ['choose', 'order', 'deliver'] as const

export function QuickOrderHero() {
  const { t } = useTranslation('quickOrder')
  return (
    <section className={styles.hero}>
      <div className={styles.intro}>
        <Logo tone="dark" className={styles.logoLink} imageClassName={styles.logo} />
        <div className={styles.copy}>
          <span className="fade" style={{ '--delay': '1.1s' } as CSSProperties}>
            <Eyebrow>{t('hero.eyebrow')}</Eyebrow>
          </span>
          <LineHeading lines={[t('hero.titleLine1'), t('hero.titleLine2')]} delay={0.9} className={styles.title} />
          <p className="fade" style={{ '--delay': '1.3s' } as CSSProperties}>
            {t('hero.intro')}
          </p>
        </div>
      </div>

      <div data-tone="forest" className={styles.panel}>
        <div className={`ken-burns ${styles.art}`} aria-hidden="true">
          <BotanicalArt />
        </div>
        <div className={styles.nav}>
          <MainNav />
        </div>
        <div className={styles.steps}>
          {STEPS.map((step, index) => (
            <div key={step} className={`fade ${styles.step}`} style={{ '--delay': `${1.1 + index * 0.2}s` } as CSSProperties}>
              <span className={styles.stepNumber}>{padNumber(index + 1)}</span>
              <span className={styles.stepText}>{t(`hero.steps.${step}`)}</span>
            </div>
          ))}
          <span className={`fade ${styles.sameDay}`} style={{ '--delay': '1.5s' } as CSSProperties}>
            [ {t('hero.sameDay')} ]
          </span>
        </div>
      </div>
    </section>
  )
}
