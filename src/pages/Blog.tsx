import { useState } from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { featuredPost, posts, categories } from '../data/blog';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

interface BlogProps {
  onNavigate: (page: string, slug?: string) => void;
}

export default function Blog({ onNavigate }: BlogProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleNav = (page: string, slug?: string) => {
    onNavigate(page, slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredPosts = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20">
      <SEO
        title="News & Blog"
        description="Stay updated with SRK International Society's latest news, impact stories, and insights from the field."
        path="/blog"
      />
      {/* Hero */}
      <section className="gradient-hero py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-srk-orange rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-srk-orange-light font-semibold text-sm uppercase tracking-wider">News & Blog</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">
            Stories of Change
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Stay updated with our latest news, impact stories, and insights from the field.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${posts.length > 0 ? 'mb-16' : ''}`}>
            <Reveal
              onClick={() => handleNav('blog-detail', featuredPost.slug)}
              className="relative rounded-lg overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-srk-orange text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Featured
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="inline-block text-srk-orange text-xs font-semibold uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full mb-4">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-srk-blue-dark mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1.5"><User size={16} /> {featuredPost.author}</span>
                <span className="flex items-center gap-1.5"><Calendar size={16} /> {featuredPost.date}</span>
              </div>
              <button
                onClick={() => handleNav('blog-detail', featuredPost.slug)}
                className="btn-primary flex items-center gap-2"
              >
                Read More <ArrowRight size={18} />
              </button>
            </Reveal>
          </div>

          {posts.length > 0 && (
          <>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-srk-blue text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-srk-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <article
                onClick={() => handleNav('blog-detail', post.slug)}
                className="card group cursor-pointer rounded-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-srk-blue text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-srk-blue-dark mb-2 leading-tight group-hover:text-srk-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {post.date}</span>
                  </div>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
          </>
          )}
        </div>
      </section>
    </div>
  );
}
