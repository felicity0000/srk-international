import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowLeft, CheckCircle2, Heart } from 'lucide-react';
import { upcomingEvents, pastEvents } from '../data/events';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

interface EventDetailProps {
  onNavigate: (page: string, slug?: string) => void;
}

export default function EventDetail({ onNavigate }: EventDetailProps) {
  const { slug } = useParams<{ slug: string }>();
  const upcoming = upcomingEvents.find((e) => e.slug === slug);
  const past = pastEvents.find((e) => e.slug === slug);

  const handleNav = (page: string, targetSlug?: string) => {
    onNavigate(page, targetSlug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!upcoming && !past) {
    return (
      <div className="pt-32 pb-20 text-center px-4">
        <h1 className="text-xl font-heading font-bold text-srk-blue-dark mb-4">Event Not Found</h1>
        <p className="text-gray-500 mb-6">This event may have been removed or the link is incorrect.</p>
        <button onClick={() => handleNav('events')} className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Events
        </button>
      </div>
    );
  }

  const event = (upcoming ?? past)!;

  return (
    <div className="pt-20">
      <SEO
        title={event.title}
        description={upcoming ? upcoming.desc : past!.impact}
        path={`/events/${event.slug}`}
        image={event.image}
        type="article"
      />
      {/* Hero */}
      <section className="relative h-105 overflow-hidden">
        <img
          src={(upcoming ?? past)!.image}
          alt={(upcoming ?? past)!.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-srk-blue-dark via-srk-blue-dark/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <button
              onClick={() => handleNav('events')}
              className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-medium mb-4 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Events
            </button>
            {upcoming && (
              <span className="inline-block text-srk-orange-light text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full mb-4">
                Upcoming Event
              </span>
            )}
            {past && (
              <span className="inline-block text-srk-orange-light text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full mb-4">
                Past Event
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight max-w-3xl">
              {(upcoming ?? past)!.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <Reveal className="lg:col-span-2">
            {upcoming ? (
              upcoming.content.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-5">
                  {para}
                </p>
              ))
            ) : (
              past!.content.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-5">
                  {para}
                </p>
              ))
            )}

            {upcoming && (
              <div className="bg-blue-50 rounded-lg p-6 mt-8">
                <h3 className="font-heading font-bold text-srk-blue-dark mb-4">Event Highlights</h3>
                <ul className="space-y-3">
                  {upcoming.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle2 size={18} className="text-srk-blue shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {past && (
              <div className="bg-green-50 border border-green-100 rounded-lg p-6 mt-8 flex items-center gap-3">
                <Heart size={22} className="text-srk-green shrink-0" />
                <div>
                  <div className="text-xs text-gray-500">Impact Achieved</div>
                  <div className="font-heading font-bold text-srk-blue-dark">{past.impact}</div>
                </div>
              </div>
            )}

            {past && past.gallery && past.gallery.length > 0 && (
              <div className="mt-10">
                <h3 className="font-heading font-bold text-srk-blue-dark mb-4">Event Gallery</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {past.gallery.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden aspect-4/3">
                      <img
                        src={img}
                        alt={`${past.title} photo ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={0.1}>
            <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-6 sticky top-24 space-y-5">
              <div className="flex items-start gap-3">
                <Calendar size={20} className="text-srk-orange shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-400">Date</div>
                  <div className="text-sm font-medium text-gray-700">{(upcoming ?? past)!.date}</div>
                </div>
              </div>
              {upcoming?.time && (
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-srk-orange shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-gray-400">Time</div>
                    <div className="text-sm font-medium text-gray-700">{upcoming.time}</div>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-srk-orange shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-400">Location</div>
                  <div className="text-sm font-medium text-gray-700">{(upcoming ?? past)!.location}</div>
                </div>
              </div>
              {upcoming?.spots && (
                <div className="flex items-start gap-3">
                  <Users size={20} className="text-srk-orange shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-gray-400">Volunteers</div>
                    <div className="text-sm font-medium text-gray-700">{upcoming.spots}</div>
                  </div>
                </div>
              )}
              {upcoming && (
                <button
                  onClick={() => handleNav('volunteer')}
                  className="w-full bg-srk-orange hover:bg-srk-orange-light text-white font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  Get Involved
                </button>
              )}
              {past && (
                <button
                  onClick={() => handleNav('donate')}
                  className="w-full bg-srk-orange hover:bg-srk-orange-light text-white font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  Support Future Events
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
