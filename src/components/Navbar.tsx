import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Programs', page: 'programs' },
  { label: 'Events', page: 'events' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'Volunteer', page: 'volunteer' },
  { label: 'Donate', page: 'donate' },
  { label: 'News & Blog', page: 'blog' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg'
          : currentPage === 'home'
          ? 'bg-transparent'
          : 'bg-white shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo.png"
              alt="SRK International Society"
              className="h-12 w-12 object-contain"
            />
            <div className="hidden sm:block">
              <div
                className={`font-heading font-bold text-lg leading-tight transition-colors duration-300 ${
                  scrolled || currentPage !== 'home'
                    ? 'text-srk-blue'
                    : 'text-white'
                }`}
              >
                SRK International
              </div>
              <div
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled || currentPage !== 'home'
                    ? 'text-srk-orange'
                    : 'text-srk-yellow'
                }`}
              >
                Society
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 6).map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === link.page
                    ? 'bg-srk-blue text-white'
                    : scrolled || currentPage !== 'home'
                    ? 'text-gray-700 hover:text-srk-blue hover:bg-blue-50'
                    : 'text-white hover:text-srk-yellow hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
            {/* More dropdown */}
            <div className="relative group">
              <button
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  ['volunteer', 'donate', 'blog', 'contact'].includes(currentPage)
                    ? 'bg-srk-blue text-white'
                    : scrolled || currentPage !== 'home'
                    ? 'text-gray-700 hover:text-srk-blue hover:bg-blue-50'
                    : 'text-white hover:text-srk-yellow hover:bg-white/10'
                }`}
              >
                More <ChevronDown size={14} />
              </button>
              <div className="absolute right-0 mt-1 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                {navLinks.slice(6).map((link) => (
                  <button
                    key={link.page}
                    onClick={() => handleNav(link.page)}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                      currentPage === link.page
                        ? 'text-srk-blue bg-blue-50'
                        : 'text-gray-700 hover:text-srk-blue hover:bg-blue-50'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleNav('donate')}
            className="hidden lg:block bg-srk-orange hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Donate Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled || currentPage !== 'home'
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-screen pb-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 mt-2">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 ${
                  currentPage === link.page
                    ? 'bg-srk-blue text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-srk-blue'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('donate')}
              className="w-full mt-3 bg-srk-orange text-white font-semibold py-3 rounded-lg text-sm hover:bg-orange-600 transition-colors"
            >
              Donate Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
