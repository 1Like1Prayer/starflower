import type { gallery as en } from '../en/gallery'
import type { Translation } from '../types'

export const gallery: Translation<typeof en> = {
  hero: {
    eyebrow: 'Галерея',
    titleLine1: 'Наша',
    titleLine2: 'коллекция',
    intro:
      'Недавние работы ателье. Откройте любой букет, чтобы рассмотреть его ближе, — каждый можно повторить или переосмыслить специально для вас.',
    filterLabel: 'Фильтр коллекции',
    allPieces: 'Все работы',
    summary: '{{filter}} · {{pieces}}',
    count_one: 'всего {{number}}',
    count_few: 'всего {{number}}',
    count_many: 'всего {{number}}',
    count_other: 'всего {{number}}',
  },
  tile: {
    view: 'Смотреть «{{name}}»',
  },
  lightbox: {
    meta: '{{category}} · № {{number}}',
    descriptionLabel: 'Описание',
    position: '{{current}} / {{total}}',
    otherBouquets: 'Другие букеты',
    show: 'Показать «{{name}}»',
    previous: 'Предыдущий букет',
    next: 'Следующий букет',
  },
}
