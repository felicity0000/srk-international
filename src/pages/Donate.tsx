import { useState } from 'react';
import {
  Heart,
  Shield,
  GraduationCap,
  Stethoscope,
  Shirt,
  UtensilsCrossed,
  Sofa,
  BookOpen,
  Landmark,
  Smartphone,
  Copy,
  Check,
} from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

interface DonateProps {
  onNavigate: (page: string) => void;
}

const itemCategories = [
  { icon: GraduationCap, label: 'School Supplies', desc: 'Books, uniforms, stationery, and bags' },
  { icon: Shirt, label: 'Clothing & Blankets', desc: 'New or gently used clothes and bedding' },
  { icon: UtensilsCrossed, label: 'Food & Groceries', desc: 'Non-perishable food and essentials' },
  { icon: Stethoscope, label: 'Medical Supplies', desc: 'First-aid kits, medicines, hygiene items' },
  { icon: Sofa, label: 'Furniture & Household', desc: 'Beds, chairs, kitchenware, and appliances' },
  { icon: BookOpen, label: 'Toys & Books', desc: 'Toys, games, and reading materials for children' },
];

const accentColors = [
  { wrap: 'bg-blue-50 group-hover:bg-srk-blue', icon: 'text-srk-blue group-hover:text-white', solid: 'text-srk-blue', bg: 'bg-blue-50' },
  { wrap: 'bg-orange-50 group-hover:bg-srk-orange', icon: 'text-srk-orange group-hover:text-white', solid: 'text-srk-orange', bg: 'bg-orange-50' },
  { wrap: 'bg-green-50 group-hover:bg-srk-green', icon: 'text-srk-green group-hover:text-white', solid: 'text-srk-green', bg: 'bg-green-50' },
];

const paymentMethods = [
  {
    icon: Landmark,
    name: 'Bank Transfer',
    subtitle: 'Direct deposit or transfer',
    fields: [
      { label: 'Bank Name', value: 'Stanbic Bank Uganda' },
      { label: 'Account Name', value: 'SRK International Society' },
      { label: 'Account Number', value: '9030012345678' },
      { label: 'Swift Code', value: 'SBICUGKX' },
    ],
  },
  {
    icon: Smartphone,
    name: 'MTN Mobile Money',
    subtitle: 'Send via MTN MoMo',
    fields: [
      { label: 'MoMo Number', value: '0778299156' },
      { label: 'Registered Name', value: 'SRK International Society' },
    ],
  },
  {
    icon: Smartphone,
    name: 'Airtel Money',
    subtitle: 'Send via Airtel Money',
    fields: [
      { label: 'Airtel Number', value: '0750 987 654' },
      { label: 'Registered Name', value: 'SRK International Society' },
    ],
  },
];

export default function Donate({}: DonateProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (value: string, key: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey((current) => (current === key ? null : current)), 2000);
  };

  return (
    <div className="pt-20">
      <SEO
        title="Donate"
        description="Every contribution, in cash or in kind, goes directly to families and children across Kampala and Wakiso District. See how to give financially or donate goods."
        path="/donate"
      />
      {/* Hero */}
      <section className="gradient-hero py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 bg-srk-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-srk-yellow rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="text-srk-orange-light mx-auto mb-4" size={40} />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">
            Your Donation Changes Lives
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
          </p>
        </div>
      </section>

      {/* Item Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">What We Accept</span>
            <h2 className="section-title mt-3">In-Kind Donations</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Prefer to give goods instead of money? These are the categories we accept most.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {itemCategories.map((item, i) => {
              const accent = accentColors[i % accentColors.length];
              return (
                <div key={i} className="value-card group">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${accent.wrap} rounded-xl mb-4 transition-colors duration-300`}>
                    <item.icon className={`${accent.icon} transition-colors duration-300`} size={26} />
                  </div>
                  <div className="text-lg font-heading font-bold text-srk-blue-dark mb-1">{item.label}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Payment Details */}
      <section className="py-20 gradient-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Give Financially</span>
            <h2 className="section-title mt-3">Ways to Donate</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              You can send a financial gift directly using any of the options below. Every shilling helps us reach more families.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid md:grid-cols-3 gap-6">
            {paymentMethods.map((method, i) => {
              const accent = accentColors[i % accentColors.length];
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${accent.bg} rounded-xl mb-5`}>
                    <method.icon className={accent.solid} size={26} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-srk-blue-dark mb-1">{method.name}</h3>
                  <p className="text-xs text-gray-500 mb-5">{method.subtitle}</p>
                  <div className="space-y-3 mt-auto">
                    {method.fields.map((field, j) => {
                      const key = `${i}-${j}`;
                      return (
                        <div key={j} className="flex items-center justify-between gap-3 bg-gray-50 rounded-lg px-4 py-3">
                          <div className="min-w-0">
                            <div className="text-[11px] uppercase tracking-wide text-gray-400">{field.label}</div>
                            <div className="font-semibold text-srk-blue-dark text-sm truncate">{field.value}</div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy(field.value, key)}
                            className="shrink-0 text-gray-400 hover:text-srk-blue transition-colors"
                            aria-label={`Copy ${field.label}`}
                          >
                            {copiedKey === key ? <Check size={18} className="text-srk-green" /> : <Copy size={18} />}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </Reveal>
          <Reveal delay={0.15} className="mt-10 max-w-3xl mx-auto bg-blue-50 rounded-2xl p-6 flex items-start gap-4">
            <Shield className="text-srk-blue shrink-0 mt-0.5" size={26} />
            <p className="text-sm text-gray-600 leading-relaxed">
              After sending your donation, please email a screenshot of the transaction to{' '}
              <span className="font-semibold text-srk-blue-dark">donations@srkinternationalsociety.org</span> or call{' '}
              <span className="font-semibold text-srk-blue-dark">+256 700 123 456</span> so we can confirm receipt and send you a thank-you note.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
