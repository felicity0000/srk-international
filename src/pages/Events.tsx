import { Calendar, MapPin, Clock, Users, ArrowRight, Heart } from 'lucide-react';
import { upcomingEvents, pastEvents } from '../data/events';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

interface EventsProps {
  onNavigate: (page: string, slug?: string) => void;
}

export default function Events({ onNavigate }: EventsProps) {
  const handleNav = (page: string, slug?: string) => {
    onNavigate(page, slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      <SEO
        title="Events"
        description="Join SRK International Society's upcoming events or look back at our past community drives in education, health, clean water, and reforestation."
        path="/events"
      />
      {/* Hero */}
      <section className="gradient-hero py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-srk-orange rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-srk-orange-light font-semibold text-sm uppercase tracking-wider">Events</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">
            Join Our Events
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Participate in our events and be part of the change. Whether volunteering, attending, or spreading the word, your involvement matters.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Mark Your Calendar</span>
            <h2 className="section-title mt-3">Upcoming Events</h2>
          </div>
          <div className="space-y-8">
            {upcomingEvents.map((event, i) => (
              <Reveal
                key={event.slug}
                delay={i * 0.08}
                onClick={() => handleNav('event-detail', event.slug)}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm group grid md:grid-cols-3 gap-0 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-56 md:h-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-srk-orange text-white rounded-xl px-3 py-2 text-center shadow-lg leading-none">
                    <div className="text-[11px] font-semibold uppercase tracking-wide">{event.date.split(' ')[0]}</div>
                    <div className="text-2xl font-heading font-bold mt-1">{event.date.split(' ')[1].replace(',', '')}</div>
                  </div>
                </div>
                <div className="md:col-span-2 p-6 md:p-8 flex flex-col">
                  <h3 className="text-xl font-heading font-bold text-srk-blue-dark mb-3 group-hover:text-srk-blue transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{event.desc}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1.5"><Calendar size={16} className="text-srk-orange" /> {event.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={16} className="text-srk-orange" /> {event.time}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={16} className="text-srk-orange" /> {event.location}</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between flex-wrap gap-4">
                    <span className="flex items-center gap-1.5 text-sm text-srk-blue font-semibold bg-blue-50 px-3 py-1.5 rounded-full">
                      <Users size={16} /> {event.spots}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNav('volunteer');
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-srk-orange hover:bg-srk-orange-light text-white font-semibold text-sm transition-all duration-300"
                    >
                      Get Involved <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Looking Back</span>
            <h2 className="section-title mt-3">Past Events</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {pastEvents.map((event, i) => (
              <Reveal
                key={event.slug}
                delay={i * 0.08}
                onClick={() => handleNav('event-detail', event.slug)}
                className="card rounded-md group cursor-pointer border border-gray-100 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-srk-blue-dark/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-white text-xs font-medium">{event.date}</div>
                    <div className="text-white font-heading font-bold text-sm leading-tight">{event.title}</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                    <MapPin size={14} /> {event.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-srk-green font-medium">
                    <Heart size={14} className="fill-srk-green" /> {event.impact}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
