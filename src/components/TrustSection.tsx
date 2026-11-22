import React from "react";
import { ShieldCheck, Lock, Award, Globe, Building, CheckCircle2, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const TrustSection: React.FC = () => {
  const metrics = [
    { value: "$48B+", label: "Annual Global Volume", sub: "Processed securely worldwide" },
    { value: "160+", label: "Countries Supported", sub: "Multi-currency wire routing" },
    { value: "99.99%", label: "Core Banking Uptime", sub: "Fault-tolerant architecture" },
    { value: "150k+", label: "Global Clients", sub: "Across 4 continents" },
  ];

  const securityPillars = [
    {
      icon: ShieldCheck,
      title: "FDIC Insured & Backed",
      desc: "Standard deposit insurance coverage up to $250,000 per depositor, with extended insured cash sweeps up to $5,000,000.",
    },
    {
      icon: Lock,
      title: "SOC 2 Type II & 256-bit Vault",
      desc: "Rigorous annual third-party audits with military-grade AES-256 data encryption in transit and at rest.",
    },
    {
      icon: Award,
      title: "Zero-Liability Protection",
      desc: "Guaranteed 100% protection against unauthorized debit and credit card transactions with instant dispute resolution.",
    },
    {
      icon: Globe,
      title: "AI Real-Time Fraud Shield",
      desc: "Self-learning anomaly detection that inspects billions of data points to block malicious transfers before execution.",
    },
  ];

  const testimonials = [
    {
      name: "Marcus Vance",
      title: "Chief Financial Officer, Apex Global Logistics (New York)",
      quote:
        "Switching our cross-border operations to Skylet cut our international wire fees by 80% and settled vendor payments same-day. The digital platform is leagues ahead of traditional legacy banks.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      title: "Managing Director, Horizon Venture Partners (London)",
      quote:
        "The 5.25% APY treasury yield combined with seamless multi-currency account management gives our fund peace of mind. Skylet's security standards and dedicated concierge are best in class.",
      rating: 5,
    },
    {
      name: "David Kim",
      title: "Founder & CEO, Synthetix AI (San Francisco)",
      quote:
        "The instant corporate credit issuance and real-time expense syncing with our accounting software saved our team dozens of hours every month. Phenomenal digital banking experience.",
      rating: 5,
    },
  ];

  return (
    <section id="trust" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Institutional Reliability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Security That Meets the Demands of Global Finance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Backed by federal deposit insurance, advanced cryptographic infrastructure, and 24/7 global surveillance.
          </p>
        </div>

        {/* Big Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center hover:border-blue-500/30 dark:hover:border-emerald-500/30 transition-all hover:-translate-y-1"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-emerald-400 font-mono tracking-tight mb-2">
                {item.value}
              </p>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Security Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Fully Compliant</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customer Testimonials Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Trusted by Leaders Across the Globe
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            See how forward-thinking CFOs, investors, and families manage capital with Skylet.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800">
                <p className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
