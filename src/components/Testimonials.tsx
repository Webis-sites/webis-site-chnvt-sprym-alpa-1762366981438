'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'דוד כהן',
    text: 'חנות ספרים מדהימה! הצוות מקצועי ומכיר את הספרים לפרטי פרטים. קיבלתי המלצות מצוינות שהתאימו בדיוק לטעמי. האווירה נעימה והשירות יוצא מן הכלל.',
    rating: 5,
    initial: 'ד'
  },
  {
    id: 2,
    name: 'שרה לוי',
    text: 'מקום מיוחד עם מבחר ספרים עשיר ומגוון. הבעלים ממש עזר לי למצוא ספרים נדירים שחיפשתי שנים. תמיד חוזרת לכאן בגלל השירות החם והאישי.',
    rating: 5,
    initial: 'ש'
  },
  {
    id: 3,
    name: 'יוסף מזרחי',
    text: 'השירות הכי טוב שקיבלתי בחנות ספרים! הם לא רק מוכרים ספרים, אלא באמת דואגים שתמצא את מה שמתאים לך. המחירים הוגנים והאווירה מזמינה.',
    rating: 5,
    initial: 'י'
  },
  {
    id: 4,
    name: 'רחל אברהם',
    text: 'חוויה נפלאה בכל ביקור! הידע והמקצועיות של הצוות מרשימים. תמיד מוצאת כאן ספרים מעניינים והמלצות שפותחות לי אופקים חדשים. ממליצה בחום!',
    rating: 5,
    initial: 'ר'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, index) => (
      <FaStar key={index} className="text-yellow-400" />
    ));
  };

  return (
    <section
      id="testimonials-section"
      dir="rtl"
      className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4 text-right"
          >
            מה הלקוחות שלנו אומרים
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-8 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {renderStars(5)}
              </div>
              <span className="text-gray-700 font-semibold">5.0 מתוך 5</span>
            </div>
            <div className="text-gray-600">
              <span className="text-3xl font-bold" style={{ color: '#9B786F' }}>500+</span>
              <span className="mr-2">לקוחות מרוצים</span>
            </div>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 md:p-12 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-6 left-6 opacity-10">
                    <FaQuoteRight size={60} style={{ color: '#9B786F' }} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Avatar */}
                    <div className="flex items-center gap-4 mb-6 justify-end">
                      <div className="text-right">
                        <h3 className="text-xl font-bold text-gray-800">{testimonials[currentIndex].name}</h3>
                        <div className="flex gap-1 mt-1 justify-end">
                          {renderStars(testimonials[currentIndex].rating)}
                        </div>
                      </div>
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                        style={{ backgroundColor: '#9B786F' }}
                      >
                        {testimonials[currentIndex].initial}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-lg leading-relaxed text-right font-serif">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - RTL positioned */}
          <button
            onClick={handlePrev}
            aria-label="עדות קודמת"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
            style={{ color: '#9B786F' }}
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            aria-label="עדות הבאה"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
            style={{ color: '#9B786F' }}
          >
            <FaChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`עבור לעדות ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8'
                    : 'hover:opacity-75'
                }`}
                style={{
                  backgroundColor: index === currentIndex ? '#9B786F' : '#D1D5DB'
                }}
              />
            ))}
          </div>
        </div>

        {/* Grid View for Desktop */}
        <div className="hidden lg:grid grid-cols-2 gap-6 mt-16 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 relative"
            >
              <div className="absolute top-4 left-4 opacity-10">
                <FaQuoteRight size={40} style={{ color: '#9B786F' }} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 justify-end">
                  <div className="text-right">
                    <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                    <div className="flex gap-1 mt-1 justify-end">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold"
                    style={{ backgroundColor: '#9B786F' }}
                  >
                    {testimonial.initial}
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed text-right">
                  "{testimonial.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}