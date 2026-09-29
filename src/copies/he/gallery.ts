import type { gallery as en } from '../en/gallery'
import type { Translation } from '../types'

export const gallery: Translation<typeof en> = {
  hero: {
    eyebrow: 'גלריה',
    titleLine1: 'הקולקציה',
    titleLine2: 'שלנו',
    intro:
      'יצירות אחרונות מהסטודיו. פתחו כל זר כדי לראות אותו מקרוב — כל אחד מהם יכול להיווצר מחדש או להתעצב מחדש במיוחד בשבילכם.',
    filterLabel: 'סינון הקולקציה',
    allPieces: 'כל היצירות',
    summary: '{{filter}} · {{pieces}}',
    count_one: 'יצירה אחת',
    count_two: '{{number}} יצירות',
    count_many: '{{number}} יצירות',
    count_other: '{{number}} יצירות',
  },
  tile: {
    view: 'צפייה ב{{name}}',
  },
  lightbox: {
    meta: '{{category}} · מס׳ {{number}}',
    descriptionLabel: 'תיאור',
    position: '{{current}} / {{total}}',
    otherBouquets: 'זרים נוספים',
    show: 'הצג את {{name}}',
    previous: 'הזר הקודם',
    next: 'הזר הבא',
  },
}
