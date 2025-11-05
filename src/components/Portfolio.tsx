'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

type FilterType = 'הכל' | 'אירועים' | 'אוספים מיוחדים' | 'פינות קריאה';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: FilterType;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'אירוע השקת ספר',
    description: 'אירוע מרגש עם הסופר והקהל',
    category: 'אירועים',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80'
  },
  {
    id: 2,
    title: 'אוסף ספרות קלאסית',
    description: 'מבחר יוקרתי של ספרות עולמית',
    category: 'אוספים מיוחדים',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80'
  },
  {
    id: 3,
    title: 'פינת קריאה נעימה',
    description: 'מקום שקט ונוח לקריאה',
    category: 'פינות קריאה',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80'
  },
  {
    id: 4,
    title: 'מפגש מועדון קריאה',
    description: 'דיונים מעניינים על ספרים',
    category: 'אירועים',
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80'
  },
  {
    id: 5,
    title: 'אוסף ספרי ילדים',
    description: 'עולם קסום לקוראים הצעירים',
    category: 'אוספים מיוחדים',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80'
  },
  {
    id: 6,
    title: 'פינת קריאה משפחתית',
    description: 'מרחב משותף לכל המשפחה',
    category: 'פינות קריאה',
    imageUrl: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80'
  },
  {
    id: 7,
    title: 'תערוכת ספרים נדירים',
    description: 'אוסף מיוחד של מהדורות ראשונות',
    category: 'אירועים',
    imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80'
  },
  {
    id: 8,
    title: 'אוסף שירה עברית',
    description: 'מבחר משירי המשוררים הגדולים',
    category: 'אוספים מיוחדים',
    imageUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80'
  },
  {
    id: 9,
    title: 'פינת קריאה אינטימית',
    description: 'מקום מושלם לקריאה עמוקה',
    category: 'פינות קריאה',
    imageUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&q=80'
  }
];

const filters: FilterType[] = ['הכל', 'אירועים', 'אוספים מיוחדים', 'פינות קריאה'];

export default function BookstorePortfolio(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<FilterType>('הכל');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeFilter === 'הכל' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleFilterClick = (filter: FilterType): void => {
    setActiveFilter(filter);
  };

  const handleItemClick = (item: PortfolioItem): void => {
    setSelectedItem(item);
  };

  const handleCloseModal = (): void => {
    setSelectedItem(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent, callback: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  };

  return (
    <section 
      id="bookstore-portfolio" 
      dir="rtl" 
      className="w-full py-16 px-4 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-right md:text-center text-gray-900 mb-4">
            תיק העבודות שלנו
          </h2>
          <p className="text-lg text-right md:text-center text-gray-600">
            גלו את האווירה המיוחדת של חנות הספרים שלנו
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="סינון תיק עבודות"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              onKeyDown={(e) => handleKeyDown(e, () => handleFilterClick(filter))}
              role="tab"
              aria-selected={activeFilter === filter}
              aria-controls="portfolio-grid"
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#9B786F] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          id="portfolio-grid"
          role="tabpanel"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer aspect-[4/3]"
                onClick={() => handleItemClick(item)}
                onKeyDown={(e) => handleKeyDown(e, () => handleItemClick(item))}
                tabIndex={0}
                role="button"
                aria-label={`פתח תמונה גדולה של ${item.title}`}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6 text-right"
                >
                  <h3 className="text-xl font-serif text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {item.description}
                  </p>
                  <span 
                    className="inline-block mt-3 px-3 py-1 bg-[#FF6B6B] text-white text-xs rounded-full self-end"
                  >
                    {item.category}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
              onClick={handleCloseModal}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                dir="rtl"
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  onKeyDown={(e) => handleKeyDown(e, handleCloseModal)}
                  className="absolute top-4 left-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full transition-colors duration-200"
                  aria-label="סגור חלון"
                >
                  <IoClose className="w-6 h-6 text-gray-900" />
                </button>

                {/* Image */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="p-8 text-right">
                  <span className="inline-block px-4 py-1 bg-[#9B786F] text-white text-sm rounded-full mb-4">
                    {selectedItem.category}
                  </span>
                  <h3 
                    id="modal-title" 
                    className="text-3xl font-serif text-gray-900 mb-3"
                  >
                    {selectedItem.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {selectedItem.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}