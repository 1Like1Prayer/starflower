import type { contact as en } from '../en/contact'
import type { Translation } from '../types'

export const contact: Translation<typeof en> = {
  cta: 'לגלריה',
  hero: {
    eyebrow: 'צור קשר',
    titleLine1: 'בואו ניצור',
    titleLine2: 'את <em>הרגע</em> שלכם',
  },
  atelier: {
    eyebrow: 'הסטודיו',
    address: 'כתובת',
    addressValue: '[ADDRESS], [CITY]',
    hours: 'שעות פתיחה',
    hoursValue: '[OPENING HOURS]',
    telephone: 'טלפון',
    telephoneValue: '[PHONE]',
    email: 'אימייל',
    emailValue: '[EMAIL]',
  },
  form: {
    occasionGroup: 'סוג האירוע',
    occasionHeading: 'האירוע',
    occasions: {
      gift: { label: 'מתנה', summary: 'מתנה' },
      wedding: { label: 'חתונה', summary: 'חתונה' },
      event: { label: 'אירוע', summary: 'אירוע' },
      subscription: { label: 'מנוי', summary: 'מנוי' },
      sympathy: { label: 'תנחומים', summary: 'תנחומים' },
    },
    fields: {
      name: { label: 'שם מלא', placeholder: 'השם שלכם' },
      email: { label: 'אימייל', placeholder: 'you@example.com' },
      phone: { label: 'טלפון', placeholder: 'לא חובה' },
      date: { label: 'תאריך' },
      message: { label: 'ספרו לנו', placeholder: 'למי הזר, ואיך הוא אמור להרגיש?' },
    },
    reply: 'נחזור אליכם באופן אישי תוך [RESPONSE TIME].',
    submit: 'שליחת הבקשה',
  },
  sent: {
    eyebrow: 'הבקשה התקבלה',
    title: 'תודה',
    titleNamed: 'תודה, {{name}}',
    body: 'מישהו מהסטודיו שלנו ייצור איתכם קשר באופן אישי כדי להתחיל להרכיב את היצירה שלכם.',
    explore: 'לגלריה',
    another: 'בקשה חדשה',
  },
}
