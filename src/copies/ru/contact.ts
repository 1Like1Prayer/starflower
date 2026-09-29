import type { contact as en } from '../en/contact'
import type { Translation } from '../types'

export const contact: Translation<typeof en> = {
  cta: 'Галерея',
  hero: {
    eyebrow: 'Контакты',
    titleLine1: 'Создадим',
    titleLine2: 'ваш <em>момент</em>',
    lead: 'Для индивидуальных заказов, свадеб, подписок или просто чтобы поздороваться — мы лично отвечаем на каждую заявку.',
  },
  atelier: {
    eyebrow: 'Ателье',
    address: 'Адрес',
    addressValue: '[ADDRESS], [CITY]',
    hours: 'Часы работы',
    hoursValue: '[OPENING HOURS]',
    telephone: 'Телефон',
    telephoneValue: '[PHONE]',
    email: 'Эл. почта',
    emailValue: '[EMAIL]',
  },
  form: {
    occasionGroup: 'Повод',
    occasionHeading: 'Повод',
    occasions: {
      gift: { label: 'Подарок', summary: 'подарок' },
      wedding: { label: 'Свадьба', summary: 'свадьба' },
      event: { label: 'Мероприятие', summary: 'мероприятие' },
      subscription: { label: 'Подписка', summary: 'подписка' },
      sympathy: { label: 'Соболезнование', summary: 'соболезнование' },
    },
    fields: {
      name: { label: 'Ваше имя', placeholder: 'Имя и фамилия' },
      email: { label: 'Эл. почта', placeholder: 'you@example.com' },
      phone: { label: 'Телефон', placeholder: 'Необязательно' },
      date: { label: 'Дата' },
      message: {
        label: 'Расскажите подробнее',
        placeholder: 'Для кого букет и каким должно быть настроение?',
      },
    },
    reply: 'Мы ответим лично в течение [RESPONSE TIME].',
    submit: 'Отправить заявку',
  },
  sent: {
    eyebrow: 'Заявка получена',
    title: 'Спасибо',
    titleNamed: 'Спасибо, {{name}}',
    body: 'Сотрудник нашего ателье лично свяжется с вами, чтобы начать работу над вашей композицией.',
    explore: 'Смотреть галерею',
    another: 'Новая заявка',
  },
}
