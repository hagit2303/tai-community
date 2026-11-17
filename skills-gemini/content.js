// תוכן משותף לחמש הגרסאות. "להשלים" = קישור שעוד לא התקבל.
window.GUIDE = {
  title: "סקילים בג׳מיני",
  sub: "מתאימים את הבינה אליכם",
  intro: "סקיל הוא סט הוראות קבוע שג׳מיני עובד לפיו. מתקינים פעם אחת, ולא צריך לחזור על ההוראות בכל שיחה.",
  video: "https://youtu.be/YWftQX0Xobg", // סרטון קהילת TAI ביוטיוב
  steps: [
    { t: "מעלים סקיל מוכן", d: "תפריט ההגדרות ← סקילים ← יצירה ← העלאה. בוחרים את התיקייה של הסקיל (אם ירדה כ-ZIP: במק לחיצה כפולה, בווינדוס לחצן ימני ← חילוץ הכל).", warn: "לא לשכוח: לוחצים על הכפתור הכחול יצירה!" },
    { t: "בונים סקיל עם ג׳מיני", d: "יצירה ← יצירה באמצעות Gemini. מתארים במילים שלכם מה הסקיל צריך לעשות, עונים על שאלות ההבהרה, וג׳מיני בונה." },
    { t: "עורכים סקיל קיים", d: "ליד הסקיל ⋯ ← עריכה ידנית, או עריכה באמצעות Gemini. משנים ושומרים." },
    { t: "מפעילים עם @", d: "בשיחה כותבים @, בוחרים את הסקיל מהרשימה, וכותבים מה רוצים." }
  ],
  communities: {
    tai: {
      label: "קהילת TAI", emoji: "🔬", logo: "tai-logo.png",
      hello: "מורות ומורים לביולוגיה, הכנו לכם שני סקילים:",
      sign: "חגית קליין וחגית ברגמן",
      skills: [
        { name: "ביולוגיה בלי טלאולוגיה", slug: "bio-bli-teleologia", link: "skills/bio-bli-teleologia.zip",
          what: "ג׳מיני כותב טקסט ביולוגי בלי \"כדי\" ובלי \"התא רוצה\", ובודק גם טקסט שתדביקו ומחזיר טבלת תיקונים.",
          tryit: "@bio-bli-teleologia תבדוק את הטקסט הזה: [מדביקים פסקה מדף עבודה]",
          note: "גיבוי: מדביקים פעם אחת בהוראות הקבועות של ג׳מיני: \"בכל טקסט בביולוגיה: בלי טלאולוגיה (\"כדי\", \"על מנת\", \"בשביל\", \"נועד\", \"לצורך\", \"למען\", \"מטרתו\") ובלי האנשה (\"התא רוצה/מנסה/מחליט\"). מתארים מנגנון: סיבה ותוצאה, מבנה ותפקוד.\"" },
        { name: "מדברים תקשורת", slug: "medabrim-tikshoret", link: "https://gemini.google.com/customize/skills/d/16kzGZ8VwnRxXNIPDVfse0tF6ELQ-E0o4?usp=sharing", gift: true,
          what: "הודעות לפי ארבעה סגנונות תקשורת: משימתי, מקדם, תומך ומנתח. לקבוצה: הודעה אחת שמדברת לכולם. לאדם אחד: בשפה של הסגנון שלו.",
          tryit: "@medabrim-tikshoret תכתוב הודעה לכל ההורים על [הנושא]",
          note: "מבוסס על מודל Social Styles (Merrill & Reid), בעיבוד של חגית ברגמן." }
      ]
    },
    kfar: {
      label: "מורי הכפר הירוק", emoji: "🌳", logo: "",
      hello: "מורות ומורים יקרים, הכנתי לכם שני סקילים:",
      sign: "חגית ברגמן",
      skills: [
        { name: "שיחות להורים", slug: "hoda-lehorim", link: "skills/hoda-lehorim.zip",
          what: "שיחה קשה, עדכון או חיזוק: ג׳מיני שואל מה קרה ומה רוצים להשיג, ומנסח הודעה או נקודות לשיחה בטון חם ומכבד.",
          tryit: "@hoda-lehorim אני צריכ/ה לדבר עם הורה על [מה קרה, בלי שם התלמיד/ה]",
          note: "🔒 בלי שם מלא של תלמיד/ה ובלי פרטים מזהים." },
        { name: "מדברים תקשורת", slug: "medabrim-tikshoret", link: "https://gemini.google.com/customize/skills/d/16kzGZ8VwnRxXNIPDVfse0tF6ELQ-E0o4?usp=sharing", gift: true,
          what: "הודעות לפי ארבעה סגנונות תקשורת: משימתי, מקדם, תומך ומנתח. לקבוצה: הודעה אחת שמדברת לכולם. לאדם אחד: בשפה של הסגנון שלו.",
          tryit: "@medabrim-tikshoret תכתוב הודעה לכל ההורים על [הנושא]",
          note: "מבוסס על מודל Social Styles (Merrill & Reid), בעיבוד של חגית ברגמן." }
      ]
    }
  }
};
// בחירת קהילה: ?c=tai או ?c=kfar (ברירת מחדל tai)
window.pickCommunity = function () {
  if (window.FORCE) return window.FORCE;
  var c = new URLSearchParams(location.search).get("c");
  return c === "kfar" ? "kfar" : "tai";
};
window.linkOrTodo = function (s) {
  if (s.link && /\.zip$/.test(s.link)) return '<a class="add" href="' + s.link + '" download>הורדת הסקיל ⬇</a>';
  return s.link ? '<a class="add" href="' + s.link + '" target="_blank" rel="noopener">הוספה לג׳מיני ←</a>'
                : '<span class="todo">קישור: להשלים</span>';
};
