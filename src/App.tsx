import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsletterBanner from './components/NewsletterBanner';
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

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const handleNavigate = (page: string, slug?: string) => {
    setCurrentPage(page);
    setSelectedSlug(slug ?? null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'programs':
        return <Programs onNavigate={handleNavigate} />;
      case 'events':
        return <Events onNavigate={handleNavigate} />;
      case 'event-detail':
        return <EventDetail slug={selectedSlug} onNavigate={handleNavigate} />;
      case 'gallery':
        return <Gallery />;
      case 'volunteer':
        return <Volunteer onNavigate={handleNavigate} />;
      case 'donate':
        return <Donate onNavigate={handleNavigate} />;
      case 'blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'blog-detail':
        return <BlogDetail slug={selectedSlug} onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <NewsletterBanner />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
