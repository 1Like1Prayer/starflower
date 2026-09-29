import type { about as en } from '../en/about'
import type { Translation } from '../types'

export const about: Translation<typeof en> = {
  hero: {
    photoLabel: 'בסטודיו שלנו',
    eyebrow: 'הסיפור שלנו',
    titleLine1: 'סטודיו פרחים',
    titleLine2: 'לאלה',
    titleLine3: 'ש<em>זוהרים</em>',
    paragraphOne:
      'StarFlowers נוסד על ידי [FOUNDER NAME] ב־[CITY] מתוך אמונה אחת: פרחים צריכים לגרום לאדם להרגיש חגיגי. לא מקושט — נחגג.',
    paragraphTwo:
      'היום הסטודיו שלנו מרכיב כל יצירה בעבודת יד, בכמויות קטנות, אחרי שיחה על מי שהיא מיועדת לו. התוצאה היא זר שיכול להיות שייך לאדם אחד בלבד.',
  },
  promises: {
    ariaLabel: 'ההבטחות שלנו',
    eyebrow: 'ההבטחות שלנו',
    title: 'יחס של\nכוכבים',
    intro: 'שלושה דברים שאנחנו לא מתפשרים עליהם — בין אם מדובר בזר אחד ובין אם בחתונה שלמה.',
    items: {
      rare: {
        numeral: 'א',
        title: 'נדיר\nועונתי',
        description:
          'אנחנו עוקבים אחרי העונות, לא אחרי קטלוג — ומחפשים זנים וגוונים שלא תמצאו בחנות פרחים רגילה.',
      },
      handmade: {
        numeral: 'ב',
        title: 'מורכב\nבעבודת יד',
        description:
          'כל סידור נבנה פרח אחר פרח בסטודיו שלנו. שום דבר לא מוכן מראש, ושום דבר לא נעשה בחיפזון.',
      },
      delivered: {
        numeral: 'ג',
        title: 'נמסר\nבאהבה',
        description: 'עטוף בנייר הסיגנצ׳ר שלנו, חתום בסמל StarFlowers ונמסר ביד עד הדלת.',
      },
    },
  },
  ritual: {
    eyebrow: 'הטקס',
    title: 'מהשוק\nעד הדלת שלכם',
    cta: 'התחילו הזמנה אישית',
    steps: {
      conversation: {
        title: 'שיחה',
        text: 'קודם כול אנחנו מקשיבים: למי הזר, מה האירוע ואיך הוא אמור להרגיש.',
      },
      selection: {
        title: 'בחירה',
        text: 'הפרחים נבחרים בשיאם ממגדלים שאנחנו סומכים עליהם — אף פעם לא מהמלאי.',
      },
      composition: {
        title: 'הרכבה',
        text: 'היצירה שלכם נבנית ביד בסטודיו שלנו, פרח אחר פרח.',
      },
      delivery: {
        title: 'משלוח',
        text: 'עטופה בנייר הסיגנצ׳ר שלנו ונמסרת ביד, בדיוק בזמן.',
      },
    },
  },
  quote: {
    text: '״פרחים הם המותרות האישיים ביותר שיש. אנחנו מתייחסים לכל הזמנה כאילו נועדה לכוכב.״',
    author: '[FOUNDER NAME] · StarFlowers',
  },
}
