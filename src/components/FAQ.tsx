'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'מהן שעות הפתיחה של החנות?',
    answer: 'אנחנו פתוחים בימים א׳-ה׳ בין השעות 9:00-19:00, ביום ו׳ בין השעות 9:00-14:00. בשבת אנחנו סגורים. בחגים ומועדים שעות הפתיחה עשויות להשתנות.'
  },
  {
    question: 'כיצד אוכל להזמין ספרים?',
    answer: 'ניתן להזמין ספרים בשלוש דרכים: באתר האינטרנט שלנו 24/7, בטלפון במהלך שעות הפתיחה, או בביקור פיזי בחנות. אנו מציעים שירות הזמנה מהיר ונוח עם מלאי מעודכן בזמן אמת.'
  },
  {
    question: 'מה מדיניות ההחזרות והחלפות?',
    answer: 'ניתן להחזיר או להחליף ספרים תוך 14 יום מיום הרכישה, בתנאי שהספר במצב חדש ולא נפגם. יש לשמור על קבלה מקורית. החזרות מתבצעות בחנות או באמצעות שליח על חשבון הלקוח.'
  },
  {
    question: 'אילו שירותים מיוחדים אתם מציעים?',
    answer: 'אנו מציעים שירותי ייעוץ אישי לבחירת ספרים, הזמנות מיוחדות של ספרים נדירים, אריזות מתנה, הקדשות אישיות, וארגון מפגשי סופרים ואירועי השקות ספרים בחנות.'
  },
  {
    question: 'מה היתרונות של מועדון הלקוחות?',
    answer: 'חברי מועדון הלקוחות נהנים מהנחה של 10% על כל הספרים, גישה מוקדמת להשקות חדשות, הזמנות לאירועים בלעדיים, ניוזלטר חודשי עם המלצות אישיות, ונקודות זכות שניתן להמיר להנחות נוספות.'
  },
  {
    question: 'כיצד ניתן להירשם לאירועים ומפגשים?',
    answer: 'ההרשמה לאירועים מתבצעת דרך האתר שלנו, בטלפון, או בחנות. האירועים שלנו כוללים מפגשי סופרים, מועדוני קריאה, וסדנאות כתיבה. מספר המקומות מוגבל ולכן מומלץ להירשם מראש.'
  },
  {
    question: 'אילו אפשרויות משלוח קיימות?',
    answer: 'אנו מציעים משלוח עד הבית בכל רחבי הארץ תוך 3-5 ימי עסקים, משלוח מהיר תוך 24 שעות באזור המרכז, ואיסוף עצמי מהחנות ללא עלות. משלוח חינם בהזמנות מעל 150 ש״ח.'
  },
  {
    question: 'אילו אמצעי תשלום אתם מקבלים?',
    answer: 'אנו מקבלים כרטיסי אשראי מכל הסוגים, העברה בנקאית, PayPal, תשלום במזומן בחנות, ותשלום בהוראת קבע למנויים. כל התשלומים מאובטחים ומוצפנים.'
  }
];

const FAQAccordionItem: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={toggleAccordion}
        className="w-full py-5 px-4 flex items-center justify-between text-right hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 0 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          {isOpen ? (
            <HiMinus className="w-6 h-6 text-[#9B786F]" />
          ) : (
            <HiPlus className="w-6 h-6 text-[#9B786F]" />
          )}
        </motion.div>
        <span className="text-lg font-bold text-gray-900 text-right flex-1">
          {item.question}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5 pr-14 text-right text-gray-700 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section
      id="faq-section"
      dir="rtl"
      className="w-full py-16 px-4 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#9B786F] mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-gray-600 text-lg text-right md:text-center">
            מצאו תשובות לשאלות הנפוצות ביותר על החנות והשירותים שלנו
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          {faqData.map((item, index) => (
            <FAQAccordionItem key={index} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center bg-white rounded-lg shadow-sm border border-gray-200 p-8"
        >
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
            יש לכם שאלה נוספת?
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            אנחנו כאן כדי לעזור! צרו איתנו קשר ונשמח לענות על כל שאלה
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#9B786F] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#8a6960] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            צרו קשר
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;