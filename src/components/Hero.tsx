'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaBookOpen } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const scrollToBooking = (): void => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="hero"
      dir="rtl"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop"
          alt="Hebrew Bookstore Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Decorative Book Icons */}
      <div className="absolute top-20 right-10 text-[#9B786F] opacity-20 z-10 hidden md:block">
        <FaBook className="text-6xl" />
      </div>
      <div className="absolute bottom-32 left-10 text-[#9B786F] opacity-20 z-10 hidden md:block">
        <FaBookOpen className="text-7xl" />
      </div>
      <div className="absolute top-1/3 left-20 text-[#9B786F] opacity-10 z-10 hidden lg:block">
        <FaBook className="text-5xl transform rotate-12" />
      </div>
      <div className="absolute bottom-1/4 right-20 text-[#9B786F] opacity-10 z-10 hidden lg:block">
        <FaBookOpen className="text-6xl transform -rotate-12" />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 z-10 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239B786F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-end text-right">
          {/* Main Headline */}
          <motion.h1
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#9B786F] mb-6 leading-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            חנות ספרים מוביל בישראל
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 max-w-3xl leading-relaxed"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            אנחנו חנות ספרים מוביל בתחום השירותים עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={scrollToBooking}
            className="group relative bg-[#FF6B6B] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-lg sm:text-xl font-semibold shadow-2xl hover:bg-[#ff5252] transition-all duration-300 transform hover:scale-105 hover:shadow-[#FF6B6B]/50 focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/50"
            style={{ fontFamily: 'Georgia, serif' }}
            aria-label="קבע תור עכשיו"
          >
            <span className="flex items-center gap-3">
              <FaBook className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
              קבע תור עכשיו
            </span>
          </motion.button>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-8 items-center justify-end text-white/70"
          >
            <div className="flex items-center gap-2 text-right">
              <span className="text-sm sm:text-base" style={{ fontFamily: 'Georgia, serif' }}>
                שירות מקצועי
              </span>
              <div className="w-2 h-2 bg-[#9B786F] rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 text-right">
              <span className="text-sm sm:text-base" style={{ fontFamily: 'Georgia, serif' }}>
                ניסיון רב שנים
              </span>
              <div className="w-2 h-2 bg-[#9B786F] rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 text-right">
              <span className="text-sm sm:text-base" style={{ fontFamily: 'Georgia, serif' }}>
                אמינות מוכחת
              </span>
              <div className="w-2 h-2 bg-[#9B786F] rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;