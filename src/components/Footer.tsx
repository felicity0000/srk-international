import { Heart, Mail, Phone, MapPin,  } from 'lucide-react';
import images from '../assets/images';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-srk-blue-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="inline-block bg-white rounded-lg px-4 py-3 mb-4">
              <img
                src={images.srk_logo}
                alt="SRK International Society"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Dedicated to serving humanity through compassion, education, and sustainable community development across the globe.
            </p>
            <div className="flex gap-3 mt-6">
              {[Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 hover:bg-srk-orange p-2.5 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'About Us', page: 'about' },
                { label: 'Our Programs', page: 'programs' },
                { label: 'Upcoming Events', page: 'events' },
                { label: 'Gallery', page: 'gallery' },
                { label: 'News & Blog', page: 'blog' },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="hover:text-srk-orange-light transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-5">Get Involved</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Volunteer With Us', page: 'volunteer' },
                { label: 'Donate', page: 'donate' },
                { label: 'Partner With Us', page: 'contact' },
                { label: 'Contact Us', page: 'contact' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="hover:text-srk-orange-light transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-srk-orange-light shrink-0 mt-0.5" />
                <span>SRK International Society, Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-srk-orange-light shrink-0" />
                <span>+256 700 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-srk-orange-light shrink-0" />
                <span>info@srkinternational.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} SRK International Society. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-1.5">
            Made with <Heart size={14} className="text-srk-orange fill-srk-orange" /> for humanity
          </p>
        </div>
      </div>
    </footer>
  );
}
