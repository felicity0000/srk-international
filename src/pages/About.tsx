import { Target, Eye, Heart, Users, Award, Globe2, ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const values = [
  { icon: Heart, title: 'Compassion', desc: 'We serve with empathy and kindness, treating every individual with the dignity they deserve.' },
  { icon: Award, title: 'Integrity', desc: 'We uphold the highest standards of transparency, accountability, and ethical conduct.' },
  { icon: Users, title: 'Inclusivity', desc: 'We welcome all people regardless of background, belief, or circumstance.' },
  { icon: Globe2, title: 'Global Impact', desc: 'We think globally and act locally, creating change that ripples across communities.' },
];

const milestones = [
  { year: '2009', title: 'Foundation', desc: 'SRK International Society was founded with a vision to serve vulnerable communities.' },
  { year: '2012', title: 'First Education Program', desc: 'Launched our flagship education initiative, reaching 500 children in the first year.' },
  { year: '2015', title: 'Healthcare Expansion', desc: 'Expanded into healthcare with free medical camps serving rural areas.' },
  { year: '2018', title: 'Global Reach', desc: 'Extended programs to 12 countries, impacting over 10,000 lives.' },
  { year: '2021', title: 'Sustainable Development', desc: 'Launched community development programs focused on long-term self-reliance.' },
  { year: '2024', title: '15,000+ Lives Changed', desc: 'Reached a milestone of transforming over 15,000 lives across our programs.' },
];

const team = [
  { name: 'Suresh R. Kapoor', role: 'Founder & President', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Priya Nair', role: 'Director of Programs', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Arjun Mehta', role: 'Head of Operations', image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Dr. Kavita Rao', role: 'Healthcare Lead', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function About({ onNavigate }: AboutProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
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
            SRK International Society is a non-profit organization committed to serving humanity through compassion-driven initiatives in education, healthcare, and community development.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="section-title mt-3 mb-6">A Journey of Compassion and Change</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, SRK International Society began as a small group of passionate individuals who believed that meaningful change starts with serving those most in need. What started as a local initiative has grown into a global movement.
                </p>
                <p>
                  Over the past 15 years, we have worked across 12 countries, partnering with communities, governments, and like-minded organizations to deliver sustainable solutions. Our approach is rooted in empathy, driven by data, and measured by real impact.
                </p>
                <p>
                  Today, SRK International Society stands as a beacon of hope for thousands of families, a testament to what collective action and unwavering compassion can achieve.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6994913/pexels-photo-6994913.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our story"
                className="rounded-2xl shadow-xl w-full h-100 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-srk-orange text-white rounded-2xl px-8 py-6 shadow-2xl hidden md:block">
                <div className="text-4xl font-heading font-bold">15+</div>
                <div className="text-sm">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-srk-blue">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl mb-5">
                <Target className="text-srk-blue" size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-srk-blue-dark mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To serve vulnerable communities with compassion, providing access to education, healthcare, and sustainable development opportunities that transform lives.
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
          </div>

          {/* Values Grid */}
          <div className="text-center mb-10">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Our Core Values</span>
            <h2 className="section-title mt-3">What Guides Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="value-card text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl mb-4 mx-auto group-hover:bg-srk-orange transition-colors duration-300">
                  <value.icon className="text-srk-blue group-hover:text-white transition-colors duration-300" size={26} />
                </div>
                <h3 className="font-heading font-bold text-srk-blue-dark mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="section-title mt-3">Milestones Through the Years</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 md:-translate-x-1/2"></div>
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-6 mb-10 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className={`bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border border-gray-100 transition-all duration-300 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="text-srk-orange font-heading font-bold text-2xl mb-1">{m.year}</div>
                    <h3 className="font-heading font-bold text-srk-blue-dark mb-2">{m.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 bg-srk-orange rounded-full border-4 border-white shadow md:-translate-x-1/2"></div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Our Leadership</span>
            <h2 className="section-title mt-3">Meet the Team</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Dedicated individuals who lead with passion, integrity, and an unwavering commitment to service.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative overflow-hidden rounded-2xl mb-4 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-srk-blue-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-heading font-bold text-srk-blue-dark">{member.name}</h3>
                <p className="text-srk-orange text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
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
