import { useParams } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Link2, Mail } from 'lucide-react';
import { featuredPost, posts } from '../data/blog';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import images from '../assets/images';

interface BlogDetailProps {
  onNavigate: (page: string, slug?: string) => void;
}

export default function BlogDetail({ onNavigate }: BlogDetailProps) {
  const { slug } = useParams<{ slug: string }>();
  const allPosts = [featuredPost, ...posts];
  const post = allPosts.find((p) => p.slug === slug);

  const handleNav = (page: string, targetSlug?: string) => {
    onNavigate(page, targetSlug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center px-4">
        <h1 className="text-2xl font-heading font-bold text-srk-blue-dark mb-4">Article Not Found</h1>
        <p className="text-gray-500 mb-6">This article may have been removed or the link is incorrect.</p>
        <button onClick={() => handleNav('blog')} className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={18} /> Back to News & Blog
        </button>
      </div>
    );
  }

  const related = allPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const relatedFallback = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedPosts = related.length > 0 ? related : relatedFallback;

  return (
    <div className="pt-20">
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
      />
      {/* Hero */}
      <section className="relative h-105 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-srk-blue-dark via-srk-blue-dark/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <button
              onClick={() => handleNav('blog')}
              className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-medium mb-4 transition-colors"
            >
              <ArrowLeft size={16} /> Back to News & Blog
            </button>
            <span className="inline-block text-srk-orange-light text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-blue-100 mt-5">
              <span className="flex items-center gap-1.5"><User size={16} /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={16} /> {post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12">
        <Reveal>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">{post.excerpt}</p>
          {post.content.map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-5">
              {para}
            </p>
          ))}

          <div className="flex items-center gap-3 mt-10 pt-8 border-t border-gray-100">
            <span className="text-sm text-gray-500 font-medium">Share this story:</span>
            <a href={`mailto:?subject=${encodeURIComponent(post.title)}`} className="bg-blue-50 hover:bg-srk-blue hover:text-white text-srk-blue p-2.5 rounded-lg transition-all duration-300">
              <Mail size={16} />
            </a>
            <button
              type="button"
              onClick={() => navigator.clipboard?.writeText(window.location.href)}
              className="bg-blue-50 hover:bg-srk-blue hover:text-white text-srk-blue p-2.5 rounded-lg transition-all duration-300"
            >
              <Link2 size={16} />
            </button>
            <button
              type="button"
              onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
              className="bg-blue-50 hover:bg-srk-blue hover:text-white text-srk-blue p-2.5 rounded-lg transition-all duration-300"
            >
              <Share2 size={16} />
            </button>
          </div>
        </Reveal>

        <aside className="lg:sticky lg:top-28 self-start">
          <Reveal delay={0.1}>
            <div className="card overflow-hidden">
              <img
                src={images.school_drive_poster}
                alt="SRK International Society school drive poster"
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </aside>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 gradient-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title mb-10">More Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <article
                  onClick={() => handleNav('blog-detail', p.slug)}
                  className="card group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-srk-blue text-xs font-semibold px-3 py-1 rounded-full">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-srk-blue-dark mb-2 leading-tight group-hover:text-srk-blue transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.excerpt}</p>
                  </div>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
