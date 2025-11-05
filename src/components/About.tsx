'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBook, FaAward, FaUsers, FaHeart, FaStar, FaBookOpen } from 'react-icons/fa';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-[#9B786F]"
      dir="rtl"
    >
      <div className="flex justify-center mb-3 text-[#9B786F] text-4xl">
        {icon}
      </div>
      <div className="text-3xl font-bold text-[#9B786F] mb-2">{value}</div>
      <div className="text-gray-600 text-sm text-right">{label}</div>
    </motion.div>
  );
};

const AboutUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isTextInView = useInView(textRef, { once: true, margin: '-100px' });
  const isImageInView = useInView(imageRef, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: <FaBook />,
      value: '15+',
      label: 'שנות ניסיון',
      delay: 0.2
    },
    {
      icon: <FaUsers />,
      value: '5000+',
      label: 'לקוחות מרוצים',
      delay: 0.3
    },
    {
      icon: <FaBookOpen />,
      value: '10,000+',
      label: 'ספרים זמינים',
      delay: 0.4
    },
    {
      icon: <FaAward />,
      value: '100%',
      label: 'שירות מקצועי',
      delay: 0.5
    }
  ];

  return (
    <section
      id="about-us-section"
      ref={sectionRef}
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          dir="rtl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#9B786F] mb-4 text-right md:text-center font-serif">
            אודותינו
          </h2>
          <div className="w-24 h-1 bg-[#9B786F] mx-auto md:mx-auto mr-0 md:mr-auto"></div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Text Content */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
            dir="rtl"
          >
            <div className="space-y-6 text-right">
              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="text-[#9B786F] text-3xl mt-1">
                  <FaBook />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#9B786F] mb-3 font-serif text-right">
                    חנות ספרים מובילה
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg text-right">
                    אנחנו חנות ספרים מוביל בתחום השירותים עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="text-[#FF6B6B] text-3xl mt-1">
                  <FaStar />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-right">
                    איכות ומצוינות
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-right">
                    אנו מחויבים לספק את הספרים האיכותיים ביותר ושירות לקוחות יוצא דופן. כל ספר נבחר בקפידה כדי להבטיח את שביעות רצון הלקוחות שלנו.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="text-[#9B786F] text-3xl mt-1">
                  <FaHeart />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-right">
                    תשוקה לספרות
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-right">
                    אהבתנו לספרים והידע מניעה אותנו להמשיך לשרת את הקהילה שלנו במסירות ובמקצועיות. אנו כאן כדי לעזור לכם למצוא את הספר המושלם.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
            dir="rtl"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop"
                alt="חנות ספרים"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9B786F]/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir="rtl">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center bg-[#9B786F]/5 rounded-lg p-8"
          dir="rtl"
        >
          <div className="flex justify-center mb-4 text-[#9B786F] text-5xl">
            <FaAward />
          </div>
          <h3 className="text-2xl font-bold text-[#9B786F] mb-3 font-serif text-center">
            המומחים שלכם בעולם הספרים
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto text-center leading-relaxed">
            עם שנים של ניסיון והתמחות בתחום, אנו מספקים שירות אמין ומקצועי שעליו אתם יכולים לסמוך. הצוות שלנו מחויב להעניק לכם את החוויה הטובה ביותר.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;