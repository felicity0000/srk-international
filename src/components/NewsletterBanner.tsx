import { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-10 right-10 w-72 h-72 bg-srk-orange rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-4">
              <Mail className="text-srk-orange-light" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Stay Connected With Our Mission
            </h2>
            <p className="text-blue-100 leading-relaxed">
              Subscribe to our newsletter for updates on programs, events, and stories of impact from the communities we serve.
            </p>
          </div>

          <div className="w-full lg:w-auto lg:min-w-[420px]">
            {submitted ? (
              <div className="bg-white/10 border border-white/20 text-white rounded-lg p-4 flex items-center gap-2 animate-fade-in">
                <CheckCircle2 size={20} className="text-srk-orange-light shrink-0" />
                Thanks for subscribing! Check your inbox soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-blue-200 focus:border-srk-orange-light focus:ring-2 focus:ring-srk-orange-light/30 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="bg-srk-orange hover:bg-srk-orange-light text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 shrink-0"
                >
                  Subscribe <Send size={18} />
                </button>
              </form>
            )}
            <p className="text-xs text-blue-200 mt-3 text-center lg:text-left">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
