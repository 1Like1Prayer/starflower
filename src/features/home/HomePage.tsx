import { PageShell } from '../../components/layout'
import { BespokeSection } from './components/BespokeSection'
import { CollectionsSection } from './components/CollectionsSection'
import { FeaturedSection } from './components/FeaturedSection'
import { Hero } from './components/Hero'
import { PhilosophySection } from './components/PhilosophySection'

export function HomePage() {
  return (
    <PageShell curtain="intro">
      <Hero />
      <CollectionsSection />
      <FeaturedSection />
      <PhilosophySection />
      <BespokeSection />
    </PageShell>
  )
}
