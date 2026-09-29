import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { Logo, NavCluster } from '../../../components/layout'
import { BotanicalArt, Caption, Eyebrow, LineHeading } from '../../../components/ui'
import { ROUTES } from '../../../config/routes'
import styles from './AboutHero.module.css'

export function AboutHero() {
  const { t } = useTranslation(['about', 'common'])
  return (
    <section className={styles.hero}>
      <div data-tone="forest" className={styles.panel}>
        <div className={`ken-burns ${styles.art}`}>
          <BotanicalArt />
        </div>
        <Logo tone="light" className={styles.logoLink} imageClassName={styles.logo} />
        <Caption className={styles.caption}>{t('hero.photoLabel')}</Caption>
      </div>

      <div className={styles.content}>
        <NavCluster
          ctaLabel={t('common:actions.orderBouquet')}
          ctaTo={ROUTES.quickOrder}
          className={styles.nav}
        />
        <div className={styles.story}>
          <span className="fade" style={{ '--delay': '1.4s' } as CSSProperties}>
            <Eyebrow>{t('hero.eyebrow')}</Eyebrow>
          </span>
          <LineHeading
            lines={[t('hero.titleLine1'), t('hero.titleLine2'), t('hero.titleLine3')]}
            delay={1}
            className={styles.title}
          />
          <div className={styles.columns}>
            <p className="fade" style={{ '--delay': '1.6s' } as CSSProperties}>
              {t('hero.paragraphOne')}
            </p>
            <p className={`fade ${styles.muted}`} style={{ '--delay': '1.8s' } as CSSProperties}>
              {t('hero.paragraphTwo')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
