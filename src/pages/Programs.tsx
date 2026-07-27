import { GraduationCap, Stethoscope, Home as HomeIcon, Droplets, BookOpen, Heart, CheckCircle2, Brain } from 'lucide-react';
import images from '../assets/images';

interface ProgramsProps {
  onNavigate: (page: string) => void;
}

const programs = [
  {
    icon: GraduationCap,
    title: 'Education for All',
    color: 'blue',
    image:images.education_for_all,
    desc: 'We believe education is the most powerful tool for breaking the cycle of poverty. Our education initiatives provide quality learning opportunities to children who would otherwise be left behind.',
    features: [
      'Free primary and secondary education for underprivileged children',
      'Scholarship programs for higher education',
      'After-school tutoring and mentorship programs',
      'Digital literacy and computer training centers',
      'School supplies and uniform distribution drives',
    ],
    impact: '3,200+ children educated',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Access',
    color: 'orange',
    image:images.healthcare_access,
    desc: 'Access to healthcare is a fundamental human right. We bring essential medical services to remote and underserved communities through our healthcare programs.',
    features: [
      'Free monthly medical camps in rural areas',
      'Maternal and child health programs',
      'Health awareness and disease prevention workshops',
      'Mobile clinics for remote communities',
      'Partnerships with local hospitals for specialized care',
    ],
    impact: '25,000+ patients treated',
  },
  {
    icon: Brain,
    title: 'Mental Health Support',
    color: 'green',
    image: images.mental_health,
    desc: 'Mental health is central to our mission. We work to break the stigma around mental health and ensure that support is accessible to everyone in the communities we serve.',
    features: [
      'Free and confidential counseling services',
      'Mental health awareness campaigns and workshops',
      'Peer support groups and safe spaces',
      'Training for community mental health facilitators',
      'Stress management and coping skills programs',
    ],
    impact: '1,000+ individuals supported',
  },
  {
    icon: HomeIcon,
    title: 'Community Development',
    color: 'green',
    image: images.community_devt,
    desc: 'Sustainable communities are built from within. We empower families and communities with the tools, resources, and training they need to become self-reliant.',
    features: [
      'Vocational training and skill development programs',
      'Micro-finance and entrepreneurship support',
      'Clean water and sanitation projects',
      'Affordable housing assistance',
      'Women empowerment and self-help groups',
    ],
    impact: '850+ families supported',
  },
  {
    icon: BookOpen,
    title: 'Women Empowerment',
    color: 'orange',
    image: images.women_empowerment,
    desc: 'When women thrive, communities prosper. We invest in women through education, skills training, and economic empowerment programs.',
    features: [
      'Tailoring and handicraft training centers',
      'Self-help group formation and micro-finance',
      'Leadership and advocacy training',
      'Legal aid and awareness programs',
      'Health and nutrition workshops',
    ],
    impact: '1,500+ women empowered',
  },
  // {
  //   icon: Heart,
  //   title: 'Disaster Relief',
  //   color: 'red',
  //   image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   desc: 'When disasters strike, we respond. Our emergency relief teams provide immediate assistance and long-term recovery support to affected communities.',
  //   features: [
  //     'Emergency food, water, and shelter distribution',
  //     'Medical emergency response teams',
  //     'Rebuilding and rehabilitation support',
  //     'Trauma counseling and support services',
  //     'Disaster preparedness training',
  //   ],
  //   impact: '10+ disaster response missions',
  // },
];

const colorMap: Record<string, { bg: string; text: string; border: string; light: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-srk-blue', border: 'border-srk-blue', light: 'bg-srk-blue' },
  orange: { bg: 'bg-orange-50', text: 'text-srk-orange', border: 'border-srk-orange', light: 'bg-srk-orange' },
  green: { bg: 'bg-green-50', text: 'text-srk-green', border: 'border-srk-green', light: 'bg-srk-green' },
  red: { bg: 'bg-red-50', text: 'text-srk-red', border: 'border-srk-red', light: 'bg-srk-red' },
};

export default function Programs({ onNavigate }: ProgramsProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
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

      {/* Programs List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {programs.map((program, i) => {
            const colors = colorMap[program.color];
            return (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="rounded-2xl shadow-xl w-full h-360px object-cover"
                    />
                    <div className={`absolute -bottom-5 ${i % 2 === 1 ? 'left-6' : 'right-6'} ${colors.light} text-white rounded-xl px-6 py-3 shadow-lg`}>
                      <div className="text-sm font-medium">{program.impact}</div>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${colors.bg} rounded-xl mb-5`}>
                    <program.icon className={colors.text} size={28} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-srk-blue-dark mb-4">
                    {program.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{program.desc}</p>
                  <ul className="space-y-3">
                    {program.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className={`${colors.text} shrink-0 mt-0.5`} size={20} />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
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
