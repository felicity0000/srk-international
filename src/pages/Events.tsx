import { Calendar, MapPin, Clock, Users, ArrowRight, Heart, CheckCircle2, Images } from 'lucide-react';
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Mark Your Calendar</span>
            <h2 className="section-title mt-3">Upcoming Events</h2>
          </div>
          <div className="space-y-10">
            {upcomingEvents.map((event, i) => {
              const [month, day] = event.date.replace(',', '').split(' ');
              const weekday = new Date(event.date).toLocaleDateString('en-US', { weekday: 'long' });
              const details = [
                { icon: Calendar, label: 'Date', value: `${weekday}, ${event.date}` },
                { icon: Clock, label: 'Time', value: event.time },
                { icon: MapPin, label: 'Location', value: event.location },
                { icon: Users, label: 'Volunteers', value: event.spots },
              ].filter((d) => d.value);

              return (
                <Reveal
                  key={event.slug}
                  delay={i * 0.08}
                  onClick={() => handleNav('event-detail', event.slug)}
                  className="group grid lg:grid-cols-5 bg-white rounded-3xl border border-gray-100 shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Poster */}
                  <div className="lg:col-span-2 relative bg-linear-to-br from-srk-blue to-srk-blue-dark p-6 sm:p-8 flex items-center justify-center overflow-hidden">
                    <div className="absolute -top-16 -right-16 w-56 h-56 bg-srk-orange/30 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="relative w-full max-w-sm aspect-4/5 object-cover rounded-2xl shadow-2xl ring-4 ring-white/20 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-srk-green bg-green-50 px-3 py-1.5 rounded-full">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-srk-green opacity-75 animate-ping"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-srk-green"></span>
                        </span>
                        Upcoming
                      </span>
                      <div className="shrink-0 bg-srk-orange text-white rounded-2xl w-16 text-center py-2 shadow-lg leading-none">
                        <div className="text-[11px] font-semibold uppercase tracking-wide">{month}</div>
                        <div className="text-2xl font-heading font-bold mt-1">{day}</div>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-srk-blue-dark mb-3 leading-tight group-hover:text-srk-blue transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{event.desc}</p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {details.map((d) => (
                        <div key={d.label} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
                          <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                            <d.icon size={18} className="text-srk-orange" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-400">{d.label}</div>
                            <div className="text-sm font-semibold text-gray-700">{d.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8">
                      <div className="text-sm font-semibold text-srk-blue-dark mb-3">What to expect</div>
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                        {event.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 size={16} className="text-srk-green shrink-0 mt-0.5" /> {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNav('volunteer');
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-srk-orange hover:bg-srk-orange-light text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg"
                      >
                        Get Involved <ArrowRight size={16} />
                      </button>
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-srk-blue-dark font-semibold text-sm group-hover:border-srk-blue group-hover:text-srk-blue transition-colors">
                        View Details
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 gradient-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Looking Back</span>
            <h2 className="section-title mt-3">Past Events</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {pastEvents.map((event, i) => (
              <Reveal
                key={event.slug}
                delay={i * 0.08}
                onClick={() => handleNav('event-detail', event.slug)}
                className="group bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-srk-blue-dark/70 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-srk-blue-dark text-xs font-semibold px-3 py-1.5 rounded-full">
                    <Calendar size={14} className="text-srk-orange" /> {event.date}
                  </span>
                  {event.gallery && event.gallery.length > 0 && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1.5 rounded-full">
                      <Images size={14} /> {event.gallery.length} photos
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-1.5 text-white/90 text-sm">
                    <MapPin size={15} /> {event.location}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-heading font-bold text-srk-blue-dark mb-3 group-hover:text-srk-blue transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-start gap-2 text-sm text-srk-green font-medium bg-green-50 rounded-lg px-3 py-2 mb-5">
                    <Heart size={16} className="fill-srk-green shrink-0 mt-0.5" /> {event.impact}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-srk-orange">
                    Read the recap <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
