'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const StickyNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'שירותים', href: '#services' },
    { name: 'תיק עבודות', href: '#portfolio' },
    { name: 'המלצות', href: '#testimonials' },
    { name: 'שאלות נפוצות', href: '#faq' },
    { name: 'צור קשר', href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      id="sticky-navbar"
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#9B786F]/95 shadow-lg backdrop-blur-sm'
          : 'bg-[#9B786F]/90 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Business Name - Right Side (RTL) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <h1 className="text-xl md:text-2xl font-serif font-bold text-white text-right">
              חנות ספרים אלפא
            </h1>
          </motion.div>

          {/* Desktop Navigation Links - Left Side (RTL) */}
          <div className="hidden md:flex items-center space-x-reverse space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#9B786F] text-right"
                aria-label={link.name}
              >
                {link.name}
              </motion.a>
            ))}

            {/* CTA Button */}
            <motion.a
              href="#book-appointment"
              onClick={(e) => handleSmoothScroll(e, '#book-appointment')}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mr-4 bg-[#FF6B6B] text-white px-5 py-2.5 rounded-lg text-sm lg:text-base font-semibold shadow-md hover:bg-[#ff5252] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2 focus:ring-offset-[#9B786F] text-right"
              aria-label="קבע תור עכשיו"
            >
              קבע תור עכשיו
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors duration-200"
              aria-label={isMobileMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 right-0 bottom-0 w-64 bg-[#9B786F] shadow-2xl overflow-y-auto"
            dir="rtl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-right"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile CTA Button */}
              <a
                href="#book-appointment"
                onClick={(e) => handleSmoothScroll(e, '#book-appointment')}
                className="block mt-4 bg-[#FF6B6B] text-white px-4 py-3 rounded-lg text-base font-semibold text-center shadow-md hover:bg-[#ff5252] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2 focus:ring-offset-[#9B786F]"
                aria-label="קבע תור עכשיו"
              >
                קבע תור עכשיו
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/50 top-16"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default StickyNavbar;