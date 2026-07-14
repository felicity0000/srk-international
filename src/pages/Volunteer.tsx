import { useState } from 'react';
import { Heart, Users, GraduationCap, Stethoscope, Home as HomeIcon, CheckCircle2, ArrowRight } from 'lucide-react';

const opportunities = [
  { icon: GraduationCap, title: 'Education Volunteer', desc: 'Teach, tutor, or mentor children in our education programs.', spots: 'Ongoing' },
  { icon: Stethoscope, title: 'Medical Camp Volunteer', desc: 'Support doctors and staff at our free medical camps.', spots: 'Monthly' },
  { icon: HomeIcon, title: 'Community Outreach', desc: 'Help with community development and awareness drives.', spots: 'Weekly' },
  { icon: Users, title: 'Event Coordinator', desc: 'Plan and coordinate our fundraising and awareness events.', spots: 'Flexible' },
];

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    availability: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', area: '', availability: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="gradient-hero py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-80 h-80 bg-srk-orange rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="text-srk-orange-light mx-auto mb-4" size={40} />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">
            Become a Volunteer
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Your time and skills can change lives. Join our community of volunteers and be the hands and hearts that create lasting impact.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Why Volunteer</span>
              <h2 className="section-title mt-3 mb-6">Make a Difference, Find Your Purpose</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Volunteering with SRK International Society is more than giving your time. It's about becoming part of a movement that transforms lives, including your own.
              </p>
              <ul className="space-y-4">
                {[
                  'Gain meaningful experience in community development and social impact',
                  'Connect with like-minded individuals passionate about change',
                  'Develop new skills while making a tangible difference',
                  'Receive a certificate of volunteer service and recognition',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-srk-green shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/6994913/pexels-photo-6994913.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Volunteers" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
              <img src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Community work" className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8" />
            </div>
          </div>

          {/* Opportunities */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Opportunities</span>
              <h2 className="section-title mt-3">Volunteer Roles</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {opportunities.map((opp, i) => (
                <div key={i} className="value-card">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl mb-4 group-hover:bg-srk-orange transition-colors duration-300">
                    <opp.icon className="text-srk-blue group-hover:text-white transition-colors duration-300" size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-srk-blue-dark mb-2">{opp.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{opp.desc}</p>
                  <span className="inline-block text-xs font-medium text-srk-orange bg-orange-50 px-3 py-1 rounded-full">{opp.spots}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-md">
            <div className="text-center mb-8">
              <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Sign Up</span>
              <h2 className="text-2xl font-heading font-bold text-srk-blue-dark mt-2">Volunteer Registration</h2>
              <p className="text-gray-500 text-sm mt-2">Fill out the form below and we'll get in touch with you.</p>
            </div>
            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6 flex items-center gap-2 animate-fade-in">
                <CheckCircle2 size={20} />
                Thank you for your interest! We'll contact you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-srk-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-srk-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-srk-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="+256 700 123 456"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Area of Interest *</label>
                  <select
                    required
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-srk-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                  >
                    <option value="">Select an area</option>
                    <option>Education Volunteer</option>
                    <option>Medical Camp Volunteer</option>
                    <option>Community Outreach</option>
                    <option>Event Coordinator</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Availability</label>
                <select
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-srk-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                >
                  <option value="">Select availability</option>
                  <option>Weekdays</option>
                  <option>Weekends</option>
                  <option>Flexible</option>
                  <option>Full-time</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-srk-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="Tell us about yourself and why you'd like to volunteer..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-srk-orange hover:bg-srk-orange-light text-white font-semibold py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
              >
                Submit Registration <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
