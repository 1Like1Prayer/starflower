import { useTranslation } from 'react-i18next'
import { PageShell } from '../../components/layout'
import { AutoHeight, ChipGroup, PagedGrid } from '../../components/ui'
import { BOUQUETS, getBouquets } from '../../data/catalog'
import { useAnimatedFilter } from '../../hooks/useAnimatedFilter'
import { cx } from '../../utils/classNames'
import { padNumber } from '../../utils/format'
import { BespokeBanner } from './components/BespokeBanner'
import { ProductCard } from './components/ProductCard'
import { QuickOrderHero } from './components/QuickOrderHero'
import { SHOP_FILTERS, SHOP_ORDER, type ShopFilter } from './data/quickOrder'
import styles from './QuickOrderPage.module.css'

export function QuickOrderPage() {
  const { t } = useTranslation(['quickOrder', 'catalog', 'common'])
  const filter = useAnimatedFilter<ShopFilter>('all')
  const visible = SHOP_ORDER.filter((id) => filter.filter === 'all' || BOUQUETS[id].category === filter.filter)

  return (
    <PageShell>
      <QuickOrderHero />

      <section className={styles.toolbar}>
        <ChipGroup
          scrollOnPhone
          label={t('filters.label')}
          options={SHOP_FILTERS.map((value) => ({
            value,
            label: value === 'all' ? t('common:filters.all') : t(`catalog:categories.${value}`),
          }))}
          value={filter.highlighted}
          onChange={filter.select}
        />
        <span key={filter.generation} className={cx(styles.count, filter.leaving && styles.leaving)} aria-live="polite">
          [ {t('filters.count', { count: visible.length, number: padNumber(visible.length) })} ]
        </span>
      </section>

      <section className={styles.shop}>
        <AutoHeight hold>
          <PagedGrid gridClassName={styles.grid} pageClassName={styles.page} generation={filter.generation} leaving={filter.leaving}>
            {getBouquets(visible).map((bouquet, order) => (
              <ProductCard key={bouquet.id} bouquet={bouquet} order={order} />
            ))}
          </PagedGrid>
        </AutoHeight>
      </section>

      <BespokeBanner />
    </PageShell>
  )
}
