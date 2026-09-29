import { AutoHeight, PagedGrid } from '../../../components/ui'
import { getBouquets, type BouquetId } from '../../../data/catalog'
import { GalleryTile } from './GalleryTile'
import styles from './GalleryGrid.module.css'

interface GalleryGridProps {
  ids: readonly BouquetId[]
  leaving: boolean
  generation: number
  onOpen: (id: BouquetId) => void
}

export function GalleryGrid({ ids, leaving, generation, onOpen }: GalleryGridProps) {
  return (
    <section className={styles.section}>
      <AutoHeight hold>
        {/* Re-keying per generation replays the entrance animation for the new set. */}
        <PagedGrid gridClassName={styles.grid} pageClassName={styles.page} generation={generation} leaving={leaving}>
          {getBouquets(ids).map((bouquet, order) => (
            <GalleryTile key={bouquet.id} bouquet={bouquet} order={order} onOpen={() => onOpen(bouquet.id)} />
          ))}
        </PagedGrid>
      </AutoHeight>
    </section>
  )
}
