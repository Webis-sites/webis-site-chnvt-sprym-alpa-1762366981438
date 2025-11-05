'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const BookstoreFooter: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitMessage('תודה על ההרשמה!');
      setEmail('');
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 3000);
    }, 1000);
  };

  const quickLinks = [
    { label: 'שירותים', href: '#services' },
    { label: 'תיק עבודות', href: '#portfolio' },
    { label: 'המלצות', href: '#testimonials' },
    { label: 'שאלות נפוצות', href: '#faq' }
  ];

  const legalLinks = [
    { label: 'תנאי שימוש', href: '#terms' },
    { label: 'מדיניות פרטיות', href: '#privacy' }
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook', ariaLabel: 'עקבו אחרינו בפייסבוק' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram', ariaLabel: 'עקבו אחרינו באינסטגרם' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', ariaLabel: 'עקבו אחרינו בטוויטר' },
    { icon: FaWhatsapp, href: 'https://whatsapp.com', label: 'WhatsApp', ariaLabel: 'צרו קשר בוואטסאפ' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <footer id="bookstore-footer" className="bg-[#7A5F58] text-gray-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Business Info Column */}
          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-2xl font-bold mb-4 text-[#F5E6D3]">חנות ספרים אלפא</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              אנחנו חנות ספרים מוביל בתחום השירותים עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            <div className="flex gap-3 justify-end" role="list" aria-label="קישורי רשתות חברתיות">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="w-10 h-10 rounded-full bg-[#9B786F] flex items-center justify-center text-white hover:bg-[#B89080] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F5E6D3] focus:ring-offset-2 focus:ring-offset-[#7A5F58]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  role="listitem"
                >
                  <social.icon className="text-lg" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants} className="text-right">
            <h4 className="text-lg font-semibold mb-4 text-[#F5E6D3]">קישורים מהירים</h4>
            <nav aria-label="קישורים מהירים">
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#F5E6D3] transition-colors duration-300 inline-block text-sm focus:outline-none focus:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Contact Information Column */}
          <motion.div variants={itemVariants} className="text-right">
            <h4 className="text-lg font-semibold mb-4 text-[#F5E6D3]">צור קשר</h4>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start gap-3 justify-end">
                <span className="text-gray-300">רחוב הספרים 123, תל אביב</span>
                <FaMapMarkerAlt className="text-[#9B786F] mt-1 flex-shrink-0" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-3 justify-end">
                <a
                  href="tel:+972501234567"
                  className="text-gray-300 hover:text-[#F5E6D3] transition-colors duration-300 focus:outline-none focus:underline"
                >
                  050-123-4567
                </a>
                <FaPhone className="text-[#9B786F] flex-shrink-0" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-3 justify-end">
                <a
                  href="mailto:info@alphabooks.co.il"
                  className="text-gray-300 hover:text-[#F5E6D3] transition-colors duration-300 focus:outline-none focus:underline"
                >
                  info@alphabooks.co.il
                </a>
                <FaEnvelope className="text-[#9B786F] flex-shrink-0" aria-hidden="true" />
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="text-gray-300 text-right">
                  <div>ראשון - חמישי: 9:00 - 19:00</div>
                  <div>שישי: 9:00 - 14:00</div>
                </div>
                <FaClock className="text-[#9B786F] mt-1 flex-shrink-0" aria-hidden="true" />
              </div>
            </address>
          </motion.div>

          {/* Newsletter Signup Column */}
          <motion.div variants={itemVariants} className="text-right">
            <h4 className="text-lg font-semibold mb-4 text-[#F5E6D3]">הרשמה לניוזלטר</h4>
            <p className="text-gray-300 mb-4 text-sm">
              הירשמו לקבלת עדכונים על ספרים חדשים והנחות מיוחדות
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div>
                <label htmlFor="newsletter-email" className="sr-only">
                  כתובת אימייל
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="הכנס את האימייל שלך"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-md bg-[#9B786F] text-white placeholder-gray-300 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#F5E6D3] focus:border-transparent text-right disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  dir="rtl"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-2 bg-[#9B786F] text-white rounded-md hover:bg-[#B89080] transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-[#F5E6D3] focus:ring-offset-2 focus:ring-offset-[#7A5F58] disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'שולח...' : 'הרשמה'}
              </motion.button>
              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#F5E6D3] text-sm text-right"
                  role="status"
                  aria-live="polite"
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#9B786F] my-8" role="separator" aria-hidden="true"></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          <nav aria-label="קישורים משפטיים" className="order-2 md:order-1">
            <ul className="flex gap-6 text-gray-300">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-[#F5E6D3] transition-colors duration-300 focus:outline-none focus:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-gray-300 order-1 md:order-2 text-center md:text-right">
            © 2024 חנות ספרים אלפא. כל הזכויות שמורות
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default BookstoreFooter;