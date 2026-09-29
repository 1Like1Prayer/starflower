import type { quickOrder as en } from '../en/quickOrder'
import type { Translation } from '../types'

export const quickOrder: Translation<typeof en> = {
  hero: {
    eyebrow: 'הזמנה מהירה',
    titleLine1: 'בוחרים.',
    titleLine2: 'אנחנו <em>מביאים</em>.',
    intro: 'הזרים המוכנים להזמנה שלנו, מורכבים טריים באותו היום. בחרו יצירה והזמינו בצעד אחד.',
    steps: {
      choose: 'בחרו את הזר',
      order: 'הזמינו בלחיצה אחת',
      deliver: 'משלוח עד הבית · [DELIVERY AREA]',
    },
    sameDay: 'משלוח באותו היום בהזמנה עד [CUT-OFF TIME]',
  },
  filters: {
    label: 'סינון זרים',
    count_one: 'זר אחד מוכן להזמנה',
    count_two: '{{number}} זרים מוכנים להזמנה',
    count_many: '{{number}} זרים מוכנים להזמנה',
    count_other: '{{number}} זרים מוכנים להזמנה',
  },
  card: {
    ariaLabel: 'הזמנת {{name}}, {{price}}',
    orderNow: 'להזמנה עכשיו',
    order: 'הזמנה',
  },
  bespoke: {
    eyebrow: 'בהזמנה אישית',
    title: 'משהו שנוצר\nרק בשבילכם?',
  },
}
