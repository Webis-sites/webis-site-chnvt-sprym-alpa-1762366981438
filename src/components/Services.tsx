'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBook, FaShoppingCart, FaUsers, FaLightbulb, FaGift, FaTruck } from 'react-icons/fa';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const services: Service[] = [
    {
      id: 1,
      icon: <FaBook className="w-10 h-10" />,
      title: 'ייעוץ ספרים',
      description: 'צוות המומחים שלנו יעזור לכם למצוא את הספר המושלם בהתאם להעדפות ולתחומי העניין שלכם'
    },
    {
      id: 2,
      icon: <FaShoppingCart className="w-10 h-10" />,
      title: 'הזמנות מיוחדות',
      description: 'נשמח להזמין עבורכם כל ספר שאינו במלאי, עם זמן אספקה מהיר ושירות אישי'
    },
    {
      id: 3,
      icon: <FaUsers className="w-10 h-10" />,
      title: 'מועדוני קריאה',
      description: 'הצטרפו למועדוני הקריאה שלנו ושתפו את חוויות הקריאה שלכם עם קוראים נלהבים אחרים'
    },
    {
      id: 4,
      icon: <FaLightbulb className="w-10 h-10" />,
      title: 'המלצות קריאה',
      description: 'קבלו המלצות מותאמות אישית על סמך הטעם הספרותי שלכם והספרים שקראתם בעבר'
    },
    {
      id: 5,
      icon: <FaGift className="w-10 h-10" />,
      title: 'עטיפת מתנות',
      description: 'שירות עטיפת מתנות מקצועי ומעוצב שיהפוך כל ספר למתנה מושלמת לאירוע מיוחד'
    },
    {
      id: 6,
      icon: <FaTruck className="w-10 h-10" />,
      title: 'שירותי משלוחים',
      description: 'משלוח מהיר ובטוח עד הבית, עם אפשרות למשלוח מהיר ביום העסקים הבא'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section
      id="services-section"
      ref={sectionRef}
      dir="rtl"
      className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-serif font-bold text-right mb-4"
            style={{ color: '#9B786F' }}
          >
            השירותים שלנו
          </h2>
          <div className="w-24 h-1 bg-[#9B786F] mr-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div
                className="flex justify-end mb-4 text-[#9B786F]"
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-semibold text-right mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-right text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-center mt-16 bg-white rounded-lg p-10 shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-right mb-4 text-gray-800">
            מעוניינים בייעוץ אישי?
          </h3>
          <p className="text-right text-gray-600 mb-6 max-w-2xl mr-auto leading-relaxed">
            צוות המומחים שלנו זמין לשירותכם. קבעו פגישת ייעוץ והיכנסו לעולם הספרים המושלם עבורכם
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300"
            style={{ backgroundColor: '#9B786F' }}
            aria-label="קביעת פגישת ייעוץ"
          >
            קבעו פגישת ייעוץ
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;