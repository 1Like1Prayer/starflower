import type { quickOrder as en } from '../en/quickOrder'
import type { Translation } from '../types'

export const quickOrder: Translation<typeof en> = {
  hero: {
    eyebrow: 'Быстрый заказ',
    titleLine1: 'Выбирайте.',
    titleLine2: 'Мы <em>доставим</em>.',
    intro:
      'Готовые букеты, собранные в день заказа. Выберите композицию и оформите заказ в один шаг.',
    steps: {
      choose: 'Выберите букет',
      order: 'Закажите в один клик',
      deliver: 'Доставка лично в руки · [DELIVERY AREA]',
    },
    sameDay: 'Доставка в тот же день при заказе до [CUT-OFF TIME]',
  },
  filters: {
    label: 'Фильтр букетов',
    count_one: 'Готово к заказу: {{number}}',
    count_few: 'Готово к заказу: {{number}}',
    count_many: 'Готово к заказу: {{number}}',
    count_other: 'Готово к заказу: {{number}}',
  },
  card: {
    ariaLabel: 'Заказать «{{name}}», {{price}}',
    orderNow: 'Заказать сейчас',
    order: 'Заказать',
  },
  bespoke: {
    eyebrow: 'На заказ',
    title: 'Нужно что-то\nтолько для вас?',
  },
}
