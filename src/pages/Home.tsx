import {
  ArrowRight,
  Heart,
  Users,
  GraduationCap,
  Home as HomeIcon,
  Stethoscope,
  Globe2,
  Quote,
  Wrench,
  UtensilsCrossed,
} from "lucide-react";
import images from "../assets/images";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";

interface HomeProps {
  onNavigate: (page: string) => void;
}

const stats = [
  { icon: Users, value: "15,000+", label: "Lives Impacted" },
  { icon: GraduationCap, value: "3,200", label: "Children Educated" },
  { icon: HomeIcon, value: "850", label: "Families Supported" },
  { icon: Globe2, value: "12", label: "Countries Reached" },
];

const programs = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "We provide school supplies, uniforms, and other essentials to keep young people in school and on track toward a better future.",
    image: images.education_for_all,
  },
  {
    icon: Wrench,
    title: "Skilling Lab",
    desc: "We offer practical vocational and skills training to equip individuals with the tools to combat unemployment and build sustainable livelihoods.",
    image: images.hope,
  },
  {
    icon: UtensilsCrossed,
    title: "Food for Life",
    desc: "We implement community activities like Food for Life, promoting nourishment and support for vulnerable families and children.",
    image: images.food_for_all,
  },
  {
    icon: Stethoscope,
    title: "Health and Wellness",
    desc: "We promote healthy living through awareness campaigns, wellness programs, mental health education, nutrition, and community health initiatives.",
    image: images.health_care,
  },
];

const accentColors = [
  {
    wrap: "bg-blue-50 group-hover:bg-srk-blue",
    icon: "text-srk-blue group-hover:text-white",
    solid: "text-srk-blue",
  },
  {
    wrap: "bg-orange-50 group-hover:bg-srk-orange",
    icon: "text-srk-orange group-hover:text-white",
    solid: "text-srk-orange",
  },
  {
    wrap: "bg-green-50 group-hover:bg-srk-green",
    icon: "text-srk-green group-hover:text-white",
    solid: "text-srk-green",
  },
];

const testimonials = [
  {
    name: "Namuli Ritah",
    role: "Beneficiary, Education Program",
    text: "SRK International Society changed my life. Their scholarship program allowed me to complete my education and pursue my dreams. I am forever grateful.",
  },
  {
    name: "Moses Okello",
    role: "Volunteer Coordinator",
    text: "Working with SRK has been the most fulfilling experience of my life. The impact we create together in communities is truly remarkable.",
  },
  {
    name: "Dr. Grace Namatovu",
    role: "Healthcare Partner",
    text: "The dedication of SRK International Society toward healthcare access in remote areas is unmatched. They bring hope where it is needed most.",
  },
];

export default function Home({ onNavigate }: HomeProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <SEO
        title="Home"
        description="SRK International Society is a global NGO dedicated to creating lasting change through education, healthcare, mental health support, and sustainable community development."
        path="/"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-srk-orange rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-srk-blue-light rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Heart size={16} className="text-srk-orange-light" />
              <span className="text-white text-sm font-medium">
                Serving Humanity Since 2021
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight text-balance animate-fade-in-up">
              Inspiring hope,{" "}
              <span className="text-srk-orange-light">
                Transforming communities
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mt-6 leading-relaxed max-w-2xl animate-fade-in-up">
              SRK International Society is a global NGO dedicated to creating
              lasting change through education, healthcare, mental health
              support, and sustainable community development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up">
              <button
                onClick={() => handleNav("donate")}
                className="bg-srk-orange hover:bg-srk-orange-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <Heart size={20} /> Donate Now
              </button>
              <button
                onClick={() => handleNav("volunteer")}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-srk-blue text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Become a Volunteer <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 100L60 88.3C120 77 240 53 360 53C480 53 600 77 720 77C840 77 960 53 1080 47.8C1200 43 1320 57 1380 63.3L1440 70V100H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const accent = accentColors[i % accentColors.length];
              return (
                <div
                  key={i}
                  className="text-center group hover:-translate-y-2 transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${accent.wrap} rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300`}
                  >
                    <stat.icon
                      className={`${accent.icon} transition-colors duration-300`}
                      size={28}
                    />
                  </div>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-srk-blue-dark">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="section-title mt-3 mb-6">
                Creating a World Where Every Life Matters
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At SRK International Society, we believe that every individual
                deserves access to education, healthcare, mental health support,
                and the opportunity to live with dignity. Our mission is to
                serve vulnerable communities with compassion and build
                sustainable pathways out of poverty.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Through strategic partnerships, dedicated volunteers, and the
                generosity of our donors, we work tirelessly to create lasting,
                meaningful impact in the lives of those who need it most.
              </p>
              <button
                onClick={() => handleNav("about")}
                className="btn-primary flex items-center gap-2"
              >
                Learn More About Us <ArrowRight size={18} />
              </button>
            </Reveal>
            <Reveal delay={0.15} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src={images.education}
                    alt="Education program"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={images.community_devt}
                    alt="Community development"
                    className="rounded-2xl shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src={images.health_care}
                    alt="Healthcare"
                    className="rounded-2xl shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={images.volunteers}
                    alt="Volunteers"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-srk-orange text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-3xl font-heading font-bold">5+</div>
                <div className="text-sm">Years of Service</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Approach Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">
              Our Approach
            </span>
            <h2 className="section-title mt-3 mb-6">
              Mental Health Begins With Healthy Communities
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              We focus on 18-35-year-old youth and young women, going beyond
              treating mental health as a purely medical issue. Through early
              intervention and long-term, community-rooted support, we create
              lasting change, not just short-term relief.
            </p>
            <button
              onClick={() => handleNav("about")}
              className="btn-primary inline-flex items-center gap-2 mx-auto"
            >
              Learn More About Our Approach <ArrowRight size={18} />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="section-title mt-3">Our Core Programs</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We focus on four core areas to create comprehensive, lasting
              impact in communities around the world.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
            {programs.map((program, i) => {
              const accent = accentColors[i % accentColors.length];
              return (
                <div
                  key={i}
                  className="card border-2 rounded-lg overflow-hidden group cursor-pointer flex flex-col border-srk-blue-light hover:shadow-lg transition-all duration-300"
                  onClick={() => handleNav("programs")}
                >
                  <div className="relative h-60 overflow-hidden p-1">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full rounded-lg h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative flex-1 flex flex-col p-5 pt-8">
                    <div className="absolute -top-7 left-5 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                      <program.icon className={accent.solid} size={24} />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-srk-blue-dark mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {program.desc}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNav("programs");
                      }}
                      className="w-full mt-4 self-start inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-orange-50 text-srk-orange font-semibold text-sm hover:bg-srk-orange hover:text-white transition-all duration-300"
                    >
                      Learn More <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-srk-orange rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="text-srk-orange-light mx-auto mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Your Generosity Can Change Lives
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Every contribution, big or small, makes a real difference. Join us
            in our mission to create a better world for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNav("donate")}
              className="bg-srk-orange hover:bg-srk-orange-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Donate Now
            </button>
            <button
              onClick={() => handleNav("volunteer")}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-srk-blue text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="text-srk-orange font-semibold text-sm uppercase tracking-wider">
              Voices of Impact
            </span>
            <h2 className="section-title mt-3">Stories From Our Community</h2>
          </Reveal>
          <Reveal delay={0.1} className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => {
              const accent = accentColors[i % accentColors.length];
              const initials = t.name
                .split(" ")
                .filter((w) => w.toLowerCase() !== "dr.")
                .map((w) => w[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();
              return (
                <div
                  key={i}
                  className="card rounded-lg p-8 hover:-translate-y-2 transition-all duration-300"
                >
                  <Quote className="text-srk-orange opacity-30" size={40} />
                  <p className="text-gray-600 leading-relaxed mt-4 mb-6 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-white shrink-0 ${accent.solid.replace(
                        "text-",
                        "bg-",
                      )}`}
                    >
                      {initials}
                    </div>
                    <div>
                      <div className="font-heading font-bold text-srk-blue-dark">
                        {t.name}
                      </div>
                      <div className="text-sm text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
