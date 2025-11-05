'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCalendarAlt, FaUserTie, FaBook, FaCheckCircle } from 'react-icons/fa';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const steps: Step[] = [
    {
      id: 1,
      title: 'קביעת תור',
      description: 'קבעו תור נוח באמצעות המערכת המקוונת שלנו או בטלפון',
      icon: <FaCalendarAlt className="w-8 h-8" />,
    },
    {
      id: 2,
      title: 'ייעוץ אישי',
      description: 'קבלו ייעוץ מקצועי ואישי מצוות המומחים שלנו',
      icon: <FaUserTie className="w-8 h-8" />,
    },
    {
      id: 3,
      title: 'בחירת ספרים',
      description: 'בחרו מתוך מגוון רחב של ספרים איכוtiים המותאמים לכם',
      icon: <FaBook className="w-8 h-8" />,
    },
    {
      id: 4,
      title: 'קבלת השירות',
      description: 'קבלו את הספרים והשירות המושלם שמגיע לכם',
      icon: <FaCheckCircle className="w-8 h-8" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="how-it-works-section"
      ref={sectionRef}
      dir="rtl"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 text-right md:text-center">
            איך זה עובד
          </h2>
          <div className="w-24 h-1 bg-[#9B786F] mx-auto md:mx-auto mr-0 md:mr-auto"></div>
        </motion.div>

        {/* Desktop Timeline - Horizontal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="hidden md:block relative"
        >
          {/* Connector Line */}
          <div className="absolute top-20 right-0 left-0 h-1 bg-gray-200 mx-auto" style={{ width: 'calc(100% - 200px)', right: '100px' }}>
            <motion.div
              variants={lineVariants}
              className="h-full bg-[#9B786F] origin-right"
            ></motion.div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative mb-6"
                >
                  <div className="w-40 h-40 rounded-full bg-white border-4 border-[#9B786F] flex items-center justify-center text-[#9B786F] shadow-lg relative z-10">
                    {step.icon}
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#FF6B6B] text-white flex items-center justify-center font-bold text-lg shadow-md z-20">
                    {step.id}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 text-right w-full">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-right">
                  {step.description}
                </p>

                {/* Decorative Arrow (except last step) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-20 left-full transform -translate-x-1/2 translate-y-0 hidden xl:block">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      className="text-[#9B786F] opacity-50"
                    >
                      <path
                        d="M5 20 L25 20 M25 20 L18 13 M25 20 L18 27"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Timeline - Vertical */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="md:hidden relative"
        >
          {/* Vertical Connector Line */}
          <div className="absolute top-0 bottom-0 right-12 w-1 bg-gray-200">
            <motion.div
              variants={lineVariants}
              className="w-full bg-[#9B786F] origin-top"
              style={{ height: '100%' }}
            ></motion.div>
          </div>

          {/* Steps */}
          <div className="space-y-12 relative z-10">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="flex items-start gap-6"
              >
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative flex-shrink-0"
                >
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-[#9B786F] flex items-center justify-center text-[#9B786F] shadow-lg relative z-10">
                    {step.icon}
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#FF6B6B] text-white flex items-center justify-center font-bold text-sm shadow-md z-20">
                    {step.id}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-4">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 text-right">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-right">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#9B786F]"></div>
          <div className="w-2 h-2 rounded-full bg-[#FF6B6B]"></div>
          <div className="w-2 h-2 rounded-full bg-[#9B786F]"></div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 text-lg font-serif mb-6 text-right md:text-center">
            מוכנים להתחיל? אנחנו כאן בשבילכם
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF6B6B] text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-[#ff5252] transition-colors duration-300"
          >
            קבעו תור עכשיו
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;