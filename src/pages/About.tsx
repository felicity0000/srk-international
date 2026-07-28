import { Target, Eye, Heart, Users, Award, Globe2, ArrowRight, HandHeart, Sparkles, Trophy, CheckCircle2 } from 'lucide-react';
import images from '../assets/images';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const values = [
  { icon: Heart, title: 'Compassion', desc: 'We serve people with empathy, dignity, and respect.' },
  { icon: Award, title: 'Integrity', desc: 'We uphold honesty, accountability, and transparency in everything we do.' },
  { icon: HandHeart, title: 'Service', desc: 'We believe meaningful leadership begins with serving others.' },
  { icon: Sparkles, title: 'Empowerment', desc: 'We equip individuals with the knowledge, skills, and opportunities to become agents of positive change.' },
  { icon: Users, title: 'Collaboration', desc: 'We value partnerships and collective action to create greater community impact.' },
  { icon: Trophy, title: 'Excellence', desc: 'We pursue quality, innovation, and continuous improvement in all our initiatives.' },
  { icon: Globe2, title: 'Inclusion', desc: 'We embrace diversity and create opportunities for everyone regardless of age, gender, background, or belief.' },
];

const accentColors = [
  { wrap: 'bg-blue-50 group-hover:bg-srk-blue', icon: 'text-srk-blue group-hover:text-white' },
  { wrap: 'bg-orange-50 group-hover:bg-srk-orange', icon: 'text-srk-orange group-hover:text-white' },
  { wrap: 'bg-green-50 group-hover:bg-srk-green', icon: 'text-srk-green group-hover:text-white' },
];

const partnerReasons = [
  'Registered and compliant non-profit organization',
  'Community-centered and impact-driven',
  'Transparent and accountable operations',
  'Strong volunteer network',
  'Sustainable development approach',
  'Experienced leadership and facilitators',
  'Collaborative partnerships across sectors',
];

export default function About({ onNavigate }: AboutProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      <SEO
        title="About Us"
        description="SRK International Society is a non-profit organization committed to serving humanity through compassion-driven initiatives in education, healthcare, mental health, and community development."
        path="/about"
      />
      {/* Hero */}
      <section className="gradient-hero py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 bg-srk-orange rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-srk-orange-light font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">
            Who We Are
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            education, food security, skilling and health access addressing root causes of poor mental healthnt.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="section-title mt-3 mb-6">A Journey of Compassion and Change</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2021, SRK International Society began as a small group of passionate individuals who believed that meaningful change starts with serving those most in need. What started as a local initiative has grown into a global movement.
                </p>
                <p>
                  Over the past 5 years, we have worked and partnered with communities, governments, and like-minded organizations to deliver sustainable solutions. Our approach is rooted in empathy, driven by data, and measured by real impact.
                </p>
                <p>
                  Today, SRK International Society stands as a beacon of hope for thousands of families, a testament to what collective action and unwavering compassion can achieve.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="relative">
              <img
                src={images.about_us}
                alt="Our story"
                className="rounded-2xl shadow-xl w-full h-100 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-srk-orange text-white rounded-2xl px-8 py-6 shadow-2xl hidden md:block">
                <div className="text-4xl font-heading font-bold">5+</div>
                <div className="text-sm">Years of Service</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-srk-blue">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl mb-5">
                <Target className="text-srk-blue" size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-srk-blue-dark mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To serve vulnerable communities with compassion, providing access to education, healthcare, mental health support, and sustainable development opportunities that transform lives.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-srk-orange">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 rounded-xl mb-5">
                <Eye className="text-srk-orange" size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-srk-blue-dark mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every individual has the opportunity to live with dignity, access quality education and healthcare, and build a sustainable future.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-srk-green">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-50 rounded-xl mb-5">
                <Heart className="text-srk-green" size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-srk-blue-dark mb-3">Our Promise</h3>
              <p className="text-gray-600 leading-relaxed">
                To remain transparent, accountable, and dedicated to every life we touch, ensuring that every contribution creates real, measurable impact.
              </p>
            </div>
          </Reveal>

          {/* Values Grid */}
          <Reveal className="text-center mb-10">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Our Core Values</span>
            <h2 className="section-title mt-3">What Guides Us</h2>
          </Reveal>
          <Reveal delay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const accent = accentColors[i % accentColors.length];
              return (
                <div key={i} className="value-card text-center group">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${accent.wrap} rounded-xl mb-4 mx-auto transition-colors duration-300`}>
                    <value.icon className={`${accent.icon} transition-colors duration-300`} size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-srk-blue-dark mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="section-title mt-3 mb-4">Mental Health Begins With Healthy Communities</h2>
            <p className="text-gray-600 leading-relaxed">
              Mental health is not just a medical issue. We focus on early intervention that leads to lasting change through long-term support and sustainable, community-rooted solutions.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl mb-5">
                <Users className="text-srk-blue" size={26} />
              </div>
              <h3 className="text-lg font-heading font-bold text-srk-blue-dark mb-3">Who We Serve</h3>
              <p className="text-gray-600 leading-relaxed">
                We focus on 18-35-year-old youth and young women, meeting them at the stage of life where early, community-rooted support has the greatest lasting impact.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 rounded-xl mb-5">
                <HandHeart className="text-srk-orange" size={26} />
              </div>
              <h3 className="text-lg font-heading font-bold text-srk-blue-dark mb-3">What Makes Us Different</h3>
              <p className="text-gray-600 leading-relaxed">
                Rather than treating mental health as a purely medical issue, we invest in early intervention and long-term, sustainable support, and we are building partnerships with organizations that share this vision to deepen our impact.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 gradient-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Partner With Us</span>
            <h2 className="section-title mt-3">Why Partner With SRK International Society?</h2>
          </Reveal>
          <Reveal delay={0.1} className="grid sm:grid-cols-2 gap-6">
            {partnerReasons.map((reason, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-start gap-4">
                <CheckCircle2 className="text-srk-orange shrink-0 mt-0.5" size={24} />
                <span className="text-gray-700 font-medium leading-relaxed">{reason}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-srk-blue-dark mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether through volunteering, donating, or partnering, your involvement creates lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => handleNav('volunteer')} className="btn-primary flex items-center gap-2 mx-auto">
              Become a Volunteer <ArrowRight size={18} />
            </button>
            <button onClick={() => handleNav('contact')} className="btn-outline mx-auto">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
