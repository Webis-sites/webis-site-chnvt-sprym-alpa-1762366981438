'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="final-cta"
      dir="rtl"
      className="relative w-full py-20 px-4 overflow-hidden"
      aria-label="קריאה לפעולה סופית"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(155, 120, 111, 0.95) 0%, rgba(155, 120, 111, 0.85) 100%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-right leading-tight">
            מוכנים לחוות את חווית הקריאה המושלמת?
          </h2>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-white/90 mb-10 text-right max-w-2xl mx-auto leading-relaxed">
            הצטרפו לאלפי לקוחות מרוצים שכבר גילו את האוסף המיוחד שלנו. שירות מקצועי, מבחר עשיר וחוויית קנייה בלתי נשכחת מחכים לכם.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.a
              href="#booking"
              onClick={handleCTAClick}
              className="inline-block px-10 py-5 text-lg md:text-xl font-bold text-white rounded-lg shadow-2xl transition-all duration-300 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-white/50"
              style={{ backgroundColor: '#FF6B6B' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  '0 10px 40px rgba(255, 107, 107, 0.4)',
                  '0 10px 60px rgba(255, 107, 107, 0.6)',
                  '0 10px 40px rgba(255, 107, 107, 0.4)',
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              aria-label="קבע תור עכשיו"
            >
              קבע תור עכשיו
            </motion.a>
          </motion.div>

          {/* Urgency Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm md:text-base text-white/80 mt-6 text-right"
          >
            ⏰ מקומות מוגבלים - אל תפספסו את ההזדמנות
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
};

export default FinalCTA;