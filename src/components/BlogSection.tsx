import React from "react";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogSection: React.FC = () => {
  const posts = [
    {
      title: "Navigating High-Yield Treasury & Yield Curve Inversion in 2025",
      excerpt: "Strategies for CFOs and private wealth holders to capture top-tier 5.25%+ risk-free yield with liquidity preservation.",
      category: "Treasury Insights",
      date: "Nov 14, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cross-Border FX Hedging: Protecting Enterprise Margins Against Volatility",
      excerpt: "How multinational enterprises manage multi-currency volatility using automated forward contracts and synthetic settlement.",
      category: "Global Markets",
      date: "Nov 02, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Zero-Trust Architecture in Modern Cloud Banking Infrastructure",
      excerpt: "An architectural overview of how Skylet enforces hardware-level biometric validation, tokenization, and SOC 2 Type II compliance.",
      category: "Security & Tech",
      date: "Oct 28, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Skylet Research & Advisory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Market Intelligence & Financial Insights
            </h2>
          </div>
          <Link
            to="/about-us"
            className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-emerald-400 hover:gap-2 gap-1 transition-all"
          >
            <span>View All Research Papers</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-semibold text-white">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Read Article Link */}
              <div className="px-6 pb-6 pt-2">
                <span className="inline-flex items-center text-xs font-semibold text-blue-600 dark:text-emerald-400 group-hover:gap-2 gap-1 transition-all">
                  <span>Read Full Analysis</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
