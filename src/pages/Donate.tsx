import { useState } from 'react';
import { Heart, CheckCircle2, Shield, Users, GraduationCap, Stethoscope, Shirt, UtensilsCrossed, Sofa, BookOpen, ArrowRight } from 'lucide-react';

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

const deliveryOptions = ['I will drop it off', 'Please arrange a pickup'];

export default function Donate({ onNavigate }: DonateProps) {
  const [category, setCategory] = useState(itemCategories[0].label);
  const [donorInfo, setDonorInfo] = useState({ name: '', email: '', phone: '' });
  const [itemDetails, setItemDetails] = useState({ description: '', quantity: '' });
  const [delivery, setDelivery] = useState(deliveryOptions[0]);
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="pt-20">
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
            We accept in-kind donations of goods and supplies. Every item you give goes directly to families and children across Kampala and Wakiso District.
          </p>
        </div>
      </section>

      {/* Item Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">What We Accept</span>
            <h2 className="section-title mt-3">Donate Items, Not Money</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We currently accept in-kind donations only. Choose a category below and tell us what you'd like to give.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {itemCategories.map((item, i) => (
              <div key={i} className="value-card group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl mb-4 group-hover:bg-srk-orange transition-colors duration-300">
                  <item.icon className="text-srk-blue group-hover:text-white transition-colors duration-300" size={26} />
                </div>
                <div className="text-lg font-heading font-bold text-srk-blue-dark mb-1">{item.label}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 gradient-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="text-center mb-8">
              <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">Make a Donation</span>
              <h2 className="text-2xl font-heading font-bold text-srk-blue-dark mt-2">Donate Items</h2>
            </div>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6 flex items-center gap-2 animate-fade-in">
                <CheckCircle2 size={20} />
                Thank you for your generous donation! Our team will contact you shortly to confirm the details.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Donation Category</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {itemCategories.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setCategory(item.label)}
                      className={`py-3 px-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 ${
                        category === item.label
                          ? 'bg-srk-orange text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-srk-orange'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Item Details */}
              <div className="grid sm:grid-cols-3 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Item Description *</label>
                  <input
                    type="text"
                    required
                    value={itemDetails.description}
                    onChange={(e) => setItemDetails({ ...itemDetails, description: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-srk-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="e.g. Children's textbooks, blankets"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Quantity *</label>
                  <input
                    type="text"
                    required
                    value={itemDetails.quantity}
                    onChange={(e) => setItemDetails({ ...itemDetails, quantity: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-srk-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="e.g. 20 items"
                  />
                </div>
              </div>

              {/* Delivery Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Method</label>
                <div className="grid grid-cols-2 gap-3">
                  {deliveryOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setDelivery(option)}
                      className={`py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                        delivery === option
                          ? 'bg-srk-blue text-white shadow-lg'
                          : 'bg-gray-100 text-gray-600 hover:bg-blue-50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {delivery === deliveryOptions[1] && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Pickup Address *</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-srk-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Your address in Kampala or Wakiso District"
                  />
                </div>
              )}

              {/* Donor Info */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-srk-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={donorInfo.phone}
                    onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-srk-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="+256 700 123 456"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                <input
                  type="email"
                  required
                  value={donorInfo.email}
                  onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-srk-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              {/* Summary */}
              <div className="bg-blue-50 rounded-xl p-5 flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">You are donating</div>
                  <div className="text-xl font-heading font-bold text-srk-blue-dark">{category}</div>
                  <div className="text-xs text-gray-500">
                    {delivery === deliveryOptions[1] ? 'Pickup requested' : 'Drop-off at our office'}
                  </div>
                </div>
                <Shield className="text-srk-blue" size={32} />
              </div>

              <button
                type="submit"
                className="w-full bg-srk-orange hover:bg-srk-orange-light text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
              >
                Submit Donation <ArrowRight size={18} />
              </button>
              <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
                <Users size={14} /> Our team will reach out to confirm drop-off or pickup details
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
