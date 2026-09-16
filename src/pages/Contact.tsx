import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

const contactInfo = [
  { icon: MapPin, title: 'Visit Us', value: 'SRK International Society, Kampala, Uganda', color: 'blue' },
  { icon: Phone, title: 'Call Us', value: '+256 756 243447', color: 'orange' },
  { icon: Mail, title: 'Email Us', value: 'info@srkinternationalsociety.org', color: 'green' },
  { icon: Clock, title: 'Office Hours', value: 'Mon - Sat: 9:00 AM - 6:00 PM', color: 'blue' },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-srk-blue' },
  orange: { bg: 'bg-orange-50', text: 'text-srk-orange' },
  green: { bg: 'bg-green-50', text: 'text-srk-green' },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-20">
      <SEO
        title="Contact Us"
        description="Have a question, want to partner with us, or simply want to learn more? Get in touch with SRK International Society."
        path="/contact"
      />
      {/* Hero */}
      <section className="gradient-hero py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-80 h-80 bg-srk-orange rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="text-srk-orange-light mx-auto mb-4" size={40} />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">
            Get in Touch
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Have a question, want to partner with us, or simply want to learn more? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => {
              const colors = colorMap[info.color];
              return (
                <div key={i} className="value-card text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${colors.bg} rounded-xl mb-4 mx-auto`}>
                    <info.icon className={colors.text} size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-srk-blue-dark mb-1">{info.title}</h3>
                  <p className="text-sm text-gray-500">{info.value}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Reveal className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-heading font-bold text-srk-blue-dark mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-6">We'll get back to you within 24 hours.</p>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6 flex items-center gap-2 animate-fade-in">
                  <CheckCircle2 size={20} />
                  Thank you for reaching out! We'll respond shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-srk-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-srk-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-srk-orange hover:bg-srk-orange-light text-white font-semibold py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </Reveal>

            {/* Map Placeholder */}
            <Reveal delay={0.15} className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-80">
                <iframe
                  title="SRK International Society Location"
                  src="https://www.google.com/maps?q=0.3386159837245941,32.6229362487793&z=17&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="bg-srk-blue-dark text-white rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl mb-4">Partner With Us</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  We welcome partnerships with corporations, educational institutions, and other NGOs who share our vision of a better world.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-srk-orange-light" />
                    <span>info@srkinternationalsociety.org</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-srk-orange-light" />
                    <span>+256 756 243447</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
