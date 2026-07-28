import { useEffect, useRef, useState } from 'react';
import {
  GraduationCap,
  Stethoscope,
  CheckCircle2,
  Wrench,
  UtensilsCrossed,
} from 'lucide-react';
import images from '../assets/images';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

interface ProgramsProps {
  onNavigate: (page: string) => void;
}

const programs = [
  {
    icon: GraduationCap,
    title: 'Education',
    image: images.education_for_all,
    desc: 'We believe education is the most powerful tool for breaking the cycle of poverty. Our initiatives provide school supplies and support to keep young people in school and on track toward a better future.',
    features: [
      'School supplies, uniforms, and stationery distribution drives',
      'Scholarship support for children in need',
      'Textbook and learning material provision',
      'Partnerships with local schools to identify at-risk children',
    ],
    impact: '3,200+ children educated',
  },
  {
    icon: Wrench,
    title: 'Skilling Lab',
    image: images.hope,
    desc: 'We offer practical training to combat unemployment, equipping individuals with the skills they need to build sustainable livelihoods.',
    features: [
      'Vocational and technical skills training',
      'Entrepreneurship and small business management workshops',
      'Digital literacy and computer training',
      'Job readiness and career guidance sessions',
    ],
    impact: '500+ trained in vocational skills',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food for Life',
    image: images.food_for_all,
    desc: 'We implement community activities like Food for Life, promoting nourishment and support for vulnerable families, children, and communities facing food insecurity.',
    features: [
      'Regular food package distribution to vulnerable families',
      'Community feeding campaigns and outreach events',
      'Nutrition awareness and education',
      'Partnerships with local volunteers to reach underserved districts',
    ],
    impact: '5,000+ meals distributed',
  },
  {
    icon: Stethoscope,
    title: 'Health and Wellness',
    image: images.health_care,
    desc: 'We promote healthy living through awareness campaigns, wellness programs, mental health education, nutrition, and community health initiatives.',
    features: [
      'Free monthly medical camps in rural areas',
      'Maternal and child health programs',
      'Mental health awareness campaigns and confidential counseling',
      'Mobile clinics reaching remote communities',
    ],
    impact: '25,000+ patients treated',
  },
];

const accentColors = [
  { bg: 'bg-blue-50', text: 'text-srk-blue', light: 'bg-srk-blue' },
  { bg: 'bg-orange-50', text: 'text-srk-orange', light: 'bg-srk-orange' },
  { bg: 'bg-green-50', text: 'text-srk-green', light: 'bg-srk-green' },
];

export default function Programs({ onNavigate }: ProgramsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProgram = (i: number) => {
    sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      { rootMargin: '-180px 0px -65% 0px', threshold: 0 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20">
      <SEO
        title="Our Programs"
        description="Our four core programs address the root causes of poverty and inequality: Education, Skilling Lab, Food for Life, and Health and Wellness."
        path="/programs"
      />
      {/* Hero */}
      <section className="gradient-hero py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-80 h-80 bg-srk-orange rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-srk-orange-light font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">
            Creating Lasting Impact
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Our programs are designed to address the root causes of poverty and inequality, creating sustainable solutions that empower communities for generations to come.
          </p>
        </div>
      </section>

      {/* Mobile Quick Jump */}
      <section className="bg-white border-b border-gray-100 py-4 sticky top-24 z-30 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
            {programs.map((program, i) => {
              const accent = accentColors[i % accentColors.length];
              return (
                <button
                  key={i}
                  onClick={() => scrollToProgram(i)}
                  className={`flex items-center gap-2 shrink-0 px-4 py-2 rounded-full border border-gray-200 ${accent.bg} ${accent.text} text-sm font-medium hover:border-transparent hover:shadow-md transition-all duration-200`}
                >
                  <program.icon size={16} />
                  {program.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex flex-col lg:flex-row gap-5 items-start">
          {/* Fixed vertical nav */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-32">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-4 mb-3">
              Jump to a program
            </div>
            <nav className="space-y-1">
              {programs.map((program, i) => {
                const accent = accentColors[i % accentColors.length];
                const active = activeIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => scrollToProgram(i)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200 ${
                      active ? `${accent.light} text-white shadow-md` : 'text-gray-600 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <program.icon size={18} className={active ? 'text-white' : accent.text} />
                    {program.title}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Program cards */}
          <div className="flex-1 min-w-0 space-y-3">
            {programs.map((program, i) => {
              const accent = accentColors[i % accentColors.length];
              return (
                <Reveal key={i}>
                <div
                  ref={(el) => {
                    sectionRefs.current[i] = el;
                  }}
                  data-index={i}
                  className="bg-white rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 p-3 md:p-5 scroll-mt-20"
                >
                  <div className="grid md:grid-cols-2 gap-5 items-center">
                    <div className="relative">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="rounded-lg shadow-lg w-full h-64 md:h-72 object-cover"
                      />
                      <div className={`absolute -bottom-5 right-6 ${accent.light} text-white rounded-lg px-6 py-3 shadow-lg`}>
                        <div className="text-sm font-medium">{program.impact}</div>
                      </div>
                    </div>
                    <div>
                      <div className={`inline-flex items-center justify-center w-10 h-10 ${accent.bg} rounded-xl mb-5`}>
                        <program.icon className={accent.text} size={20} />
                      </div>
                      <h2 className="text-xl font-heading font-bold text-srk-blue-dark mb-4">
                        {program.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-6">{program.desc}</p>
                      <ul className="space-y-3">
                        {program.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <CheckCircle2 className={`${accent.text} shrink-0 mt-0.5`} size={20} />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-srk-orange rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Support Our Programs
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Your support enables us to continue and expand these life-changing programs. Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNav('donate')}
              className="bg-srk-orange hover:bg-srk-orange-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Donate Now
            </button>
            <button
              onClick={() => handleNav('volunteer')}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-srk-blue text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
