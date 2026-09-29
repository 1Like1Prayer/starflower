import type { catalog as en } from '../en/catalog'
import type { Translation } from '../types'

export const catalog: Translation<typeof en> = {
  categories: {
    signature: 'סיגנצ׳ר',
    bridal: 'כלות',
    seasonal: 'עונתי',
    boxes: 'קופסאות',
    gifts: 'מתנות',
  },
  bouquets: {
    blushPeony: {
      name: 'אדמונית סומק',
      price: '[PRICE]',
      stems: 'אדמונית, ורד גן, עלווה כסופה',
      description:
        'היצירה המבוקשת ביותר שלנו: אוסף רומנטי ומשוחרר של אדמוניות רגע לפני הפריחה, מרוכך בעלים כסופים נשפכים.',
    },
    ivoryVows: {
      name: 'נדרי שנהב',
      price: '[PRICE]',
      stems: 'סחלב פלנופסיס לבן, אפונה ריחנית, יסמין',
      description:
        'זר כלה נשפך בגווני לבן רכים, שנועד לנוע בחן לאורך המעבר ולהצטלם נפלא.',
    },
    goldenHour: {
      name: 'שעת זהב',
      price: '[PRICE]',
      stems: 'נורית משמשית, צבעוני, דליה',
      description: 'גוונים חמים וזוהרים למעבר בין העונות — נדיבים, שמחים ומלאי תנועה.',
    },
    velvetRose: {
      name: 'ורד קטיפה',
      price: '[PRICE]',
      stems: 'ורד בורדו, קאלה, סקביוזה',
      description: 'עמוק וקטיפתי. סידור מרשים לערבים שראויים להיזכר.',
    },
    grandBox: {
      name: 'הקופסה הגדולה',
      price: '[PRICE]',
      stems: 'ורדים ונוריות פרימיום, קופסת מזכרת',
      description: 'סידור נדיב בקופסת המזכרת הייחודית שלנו — מגיע מוכן להצבה ולהתפעלות.',
    },
    firstFrost: {
      name: 'כפור ראשון',
      price: '[PRICE]',
      stems: 'ברוניה כסופה, הלבורוס לבן, אקליפטוס',
      description: 'גווני כסף ולבן כפור, שהורכבו לשבועות השקטים הראשונים של החורף.',
    },
    whiteOrchid: {
      name: 'סחלב לבן',
      price: '[PRICE]',
      stems: 'פלנופסיס, ליזיאנתוס, אפונה ריחנית',
      description: 'שנהב חיוור וירוק רך, מסודרים סביב סחלב פיסולי יחיד.',
    },
    thePromise: {
      name: 'ההבטחה',
      price: '[PRICE]',
      stems: 'ורד גן, גרדניה, סרט משי',
      description: 'פרחי שנהב נצחיים הקשורים בסרט משי — קלאסי, ריחני ויוקרתי בשקט.',
    },
    petiteBox: {
      name: 'הקופסה הקטנה',
      price: '[PRICE]',
      stems: 'ורדי ענף ופרטים עונתיים',
      description: 'קופסת מזכרת קטנה יותר לתודות, לימי הולדת ולמחוות שאומרות הרבה.',
    },
    classicDozen: {
      name: 'תריסר קלאסי',
      price: '[PRICE]',
      stems: 'שנים־עשר ורדים ארוכי גבעול, קשורים ביד',
      description: 'שנים־עשר ורדים ארוכי גבעול, קשורים ביד ועטופים בנייר שנהב.',
    },
    thankYou: {
      name: 'תודה',
      price: '[PRICE]',
      stems: 'זר קטן קשור ביד עם פתק',
      description: 'זר קטן קשור ביד עם פתק, לתודות שראויות ליותר מכרטיס.',
    },
    withSympathy: {
      name: 'תנחומים',
      price: '[PRICE]',
      stems: 'ורדים לבנים, ליזיאנתוס, ירוק רך',
      description: 'ורדים לבנים וירק רך, מורכבים בריסון ונמסרים בזהירות.',
    },
  },
}
