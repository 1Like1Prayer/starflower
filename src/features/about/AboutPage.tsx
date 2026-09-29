import { PageShell } from '../../components/layout'
import { AboutHero } from './components/AboutHero'
import { PromisesSection } from './components/PromisesSection'
import { QuoteSection } from './components/QuoteSection'
import { RitualSection } from './components/RitualSection'

export function AboutPage() {
  return (
    <PageShell>
      <AboutHero />
      <PromisesSection />
      <RitualSection />
      <QuoteSection />
    </PageShell>
  )
}
