import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import images from '../assets/images';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

const galleryItems = [
  { src: images.mission_1, title: 'Joy in the Community', category: 'Community', poster: false },
  { src: images.mission_2, title: 'Gifts of Hope', category: 'Community', poster: false },
  { src: images.mission_3, title: 'The SRK Team', category: 'Team', poster: false },
  { src: images.mission_4, title: 'Our Team and Partners', category: 'Team', poster: false },
  { src: images.education_for_all, title: 'School Supplies Donation', category: 'Education', poster: false },
  { src: images.skilling_lab, title: 'Skilling Lab Session', category: 'Empowerment', poster: false },
  { src: images.health_care, title: 'Menstrual Health Support', category: 'Healthcare', poster: false },
  { src: images.gallery_8, title: 'Celebrating Together', category: 'Community', poster: false },
  { src: images.gallery_9, title: 'Jumping for Joy', category: 'Community', poster: false },
  { src: images.gallery_11, title: 'A Circle of Care', category: 'Community', poster: false },
  { src: images.gallery_12, title: 'Together as One', category: 'Community', poster: false },
  { src: images.gallery_18, title: 'Hands Raised in Celebration', category: 'Community', poster: false },
  { src: images.gallery_19, title: 'A Community Gathered', category: 'Community', poster: false },
  { src: images.gallery_20, title: 'Sharing Our Mission', category: 'Team', poster: false },
  { src: images.gallery_21, title: 'Words of Encouragement', category: 'Community', poster: false },
  { src: images.gallery_23, title: 'A Message of Hope', category: 'Community', poster: false },
  { src: images.gallery_24, title: 'Speaking to the Gathering', category: 'Community', poster: false },
  { src: images.gallery_25, title: 'Inspiring Hearts', category: 'Community', poster: false },
  { src: images.gallery_26, title: 'Joyful Words', category: 'Community', poster: false },
  { src: images.gallery_27, title: 'A Moment of Reflection', category: 'Community', poster: false },
  { src: images.gallery_28, title: 'Praise and Worship', category: 'Community', poster: false },
  { src: images.gallery_29, title: 'Celebrating in Song', category: 'Community', poster: false },
  { src: images.food_for_all, title: 'Sharing a Meal Together', category: 'Food for Life', poster: false },
  { src: images.gallery_31, title: 'Snack Time Smiles', category: 'Food for Life', poster: false },
  { src: images.gallery_32, title: 'A Warm Plate of Rice and Beans', category: 'Food for Life', poster: false },
  { src: images.gallery_33, title: 'Gathering the Children', category: 'Community', poster: false },
  { src: images.gallery_34, title: 'A Visit With the Families', category: 'Community', poster: false },
  { src: images.gallery_35, title: 'Serving Lunch', category: 'Food for Life', poster: false },
  { src: images.gallery_36, title: 'Lining Up for Lunch', category: 'Food for Life', poster: false },
  { src: images.gallery_37, title: 'A Plate Full of Care', category: 'Food for Life', poster: false },
  { src: images.school_drive_1, title: 'Back to School Drive, Kitintale', category: 'Education', poster: false },
  { src: images.school_drive_2, title: 'Hands Up for Education', category: 'Education', poster: false },
  { src: images.school_drive_3, title: 'Ready for School', category: 'Education', poster: false },
  { src: images.school_drive_4, title: 'Supplies Ready for Distribution', category: 'Education', poster: false },
  { src: images.school_drive_5, title: 'Delivering Essentials', category: 'Community', poster: false },
  { src: images.school_drive_poster, title: 'Back to School Donation Drive', category: 'Education', poster: true },
  { src: images.vision_poster, title: 'Our Vision', category: 'Awareness', poster: true },
  { src: images.mission_poster, title: 'Our Mission', category: 'Awareness', poster: true },
  { src: images.compassion_poster, title: 'Compassion Starts With Us', category: 'Community', poster: true },
  { src: images.compassion_collage_poster, title: 'Compassion Starts With Us', category: 'Community', poster: true },
  { src: images.leadership_poster, title: 'Leadership Begins With Character', category: 'Empowerment', poster: true },
];

const categories = ['All', 'Education', 'Healthcare', 'Community', 'Food for Life', 'Empowerment', 'Team', 'Awareness'];

const ITEMS_PER_PAGE = 9;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const pageItems = filteredItems.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const selectCategory = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const goToPage = (p: number) => {
    setPage(p);
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pt-20">
      <SEO
        title="Gallery"
        description="A glimpse into the lives SRK International Society has touched and the communities we've transformed together."
        path="/gallery"
      />
      {/* Hero */}
      <section className="gradient-hero py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 bg-srk-orange rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-srk-orange-light font-semibold text-sm uppercase tracking-wider">Gallery</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">
            Moments of Impact
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            A glimpse into the lives we've touched and the communities we've transformed together.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div ref={gridRef} className="flex flex-wrap justify-center gap-3 mb-12 scroll-mt-28">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => selectCategory(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-srk-blue text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-srk-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageItems.map((item, i) => (
              <Reveal
                key={`${activeCategory}-${page}-${i}`}
                delay={(i % 6) * 0.06}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  item.poster ? 'bg-srk-blue-dark' : ''
                }`}
                onClick={() => setLightbox(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className={`w-full h-64 group-hover:scale-110 transition-transform duration-500 ${
                    item.poster ? 'object-contain' : 'object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-srk-blue-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-srk-orange-light text-xs font-medium uppercase tracking-wider">{item.category}</div>
                  <div className="text-white font-heading font-bold">{item.title}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-srk-blue transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none"
              >
                <ChevronLeft size={20} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  aria-current={p === page ? 'page' : undefined}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-300 ${
                    p === page
                      ? 'bg-srk-blue text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-srk-blue'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-srk-blue transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
        <motion.div
          className="fixed inset-0 z-100 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button className="absolute top-6 right-6 text-white hover:text-srk-orange transition-colors">
            <X size={32} />
          </button>
          <motion.img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
