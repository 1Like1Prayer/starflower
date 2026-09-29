import { AutoHeight } from '../../../components/ui'
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
      <AutoHeight>
        {/* Re-keying per generation replays the entrance animation for the new set. */}
        <div key={generation} className={styles.grid} data-leaving={leaving}>
          {getBouquets(ids).map((bouquet, order) => (
            <GalleryTile key={bouquet.id} bouquet={bouquet} order={order} onOpen={() => onOpen(bouquet.id)} />
          ))}
        </div>
      </AutoHeight>
    </section>
  )
}
