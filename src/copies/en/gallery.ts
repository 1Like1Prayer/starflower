export const gallery = {
  hero: {
    eyebrow: 'Gallery',
    titleLine1: 'The',
    titleLine2: 'Collection',
    intro:
      'Recent pieces from the atelier. Open any bouquet to see it up close — each can be recreated or reimagined for you.',
    filterLabel: 'Filter the collection',
    allPieces: 'All pieces',
    summary: '{{filter}} · {{pieces}}',
    count_one: '{{number}} piece',
    count_other: '{{number}} pieces',
  },
  tile: {
    view: 'View {{name}}',
  },
  lightbox: {
    meta: '{{category}} · No. {{number}}',
    descriptionLabel: 'Description',
    position: '{{current}} / {{total}}',
    otherBouquets: 'Other bouquets',
    show: 'Show {{name}}',
    previous: 'Previous bouquet',
    next: 'Next bouquet',
  },
} as const
