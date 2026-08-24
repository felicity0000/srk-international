import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsletterBanner from './components/NewsletterBanner';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Gallery from './pages/Gallery';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import { pageToPath, pathToPage } from './lib/routes';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);
  return null;
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minTime = new Promise((resolve) => setTimeout(resolve, 900));
    const pageLoad =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise<void>((resolve) => window.addEventListener('load', () => resolve(), { once: true }));

    Promise.all([minTime, pageLoad]).then(() => setLoading(false));
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  const handleNavigate = (page: string, slug?: string) => {
    navigate(pageToPath(page, slug));
  };

  const currentPage = pathToPage(location.pathname);

  return (
    <>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
      <div className="min-h-screen bg-white flex flex-col">
        <ScrollToTop />
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home onNavigate={handleNavigate} />} />
                <Route path="/about" element={<About onNavigate={handleNavigate} />} />
                <Route path="/programs" element={<Programs onNavigate={handleNavigate} />} />
                <Route path="/events" element={<Events onNavigate={handleNavigate} />} />
                <Route path="/events/:slug" element={<EventDetail onNavigate={handleNavigate} />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/volunteer" element={<Volunteer onNavigate={handleNavigate} />} />
                <Route path="/donate" element={<Donate onNavigate={handleNavigate} />} />
                <Route path="/blog" element={<Blog onNavigate={handleNavigate} />} />
                <Route path="/blog/:slug" element={<BlogDetail onNavigate={handleNavigate} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
        <NewsletterBanner />
        <Footer onNavigate={handleNavigate} />
      </div>
    </>
  );
}

export default App;
