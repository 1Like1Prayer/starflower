import { PageShell, SiteHeader } from '../../components/layout'
import { useAnimatedFilter } from '../../hooks/useAnimatedFilter'
import { BOUQUETS } from '../../data/catalog'
import { GalleryGrid } from './components/GalleryGrid'
import { GalleryHero } from './components/GalleryHero'
import { Lightbox } from './components/Lightbox'
import { GALLERY_ORDER, type GalleryFilter } from './data/gallery'
import { useLightbox } from './hooks/useLightbox'

export function GalleryPage() {
  const filter = useAnimatedFilter<GalleryFilter>('all')
  const visible = GALLERY_ORDER.filter((id) => filter.filter === 'all' || BOUQUETS[id].category === filter.filter)
  const lightbox = useLightbox(visible)

  const selectFilter = (next: GalleryFilter) => {
    lightbox.close()
    filter.select(next)
  }

  return (
    <PageShell>
      <SiteHeader tone="dark" />
      <GalleryHero
        highlighted={filter.highlighted}
        filter={filter.filter}
        leaving={filter.leaving}
        generation={filter.generation}
        visibleCount={visible.length}
        onFilter={selectFilter}
      />
      <GalleryGrid ids={visible} leaving={filter.leaving} generation={filter.generation} onOpen={lightbox.open} />
      {lightbox.selectedId && (
        <Lightbox
          ids={visible}
          selectedId={lightbox.selectedId}
          direction={lightbox.direction}
          navigation={lightbox.navigation}
          onClose={lightbox.close}
          onStep={lightbox.step}
          onGoTo={lightbox.goTo}
        />
      )}
    </PageShell>
  )
}
