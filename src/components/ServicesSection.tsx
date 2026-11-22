import React from "react";
import { Wallet, Building2, Globe, Shield, ArrowRight, Sparkles, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Wallet,
      tag: "Personal & Premier",
      title: "Wealth & Checking Solutions",
      description: "High-yield checking with zero domestic or international ATM fees, automated investment portfolios, and 5.25% APY savings.",
      features: ["5.25% APY High-Yield Savings", "Zero Foreign Transaction Fees", "Mobile Check Deposit with Instant Clear"],
      badge: "Popular",
      link: "/accounts"
    },
    {
      icon: Building2,
      tag: "Commercial & Business",
      title: "Corporate Treasury & Operations",
      description: "Comprehensive financial infrastructure for global businesses: automated payroll, corporate credit limits, and sub-account routing.",
      features: ["Multi-user Access Control & Roles", "Integrated Global Payroll (140+ countries)", "Extended FDIC coverage up to $5M"],
      badge: "Enterprise",
      link: "/accounts"
    },
    {
      icon: Globe,
      tag: "Cross-Border FX",
      title: "Global Multi-Currency & Wires",
      description: "Hold, convert, and transfer in 40+ currencies at real mid-market exchange rates with same-day SWIFT and Fedwire settlement.",
      features: ["Real-time Mid-Market FX Rates", "Virtual Local IBAN & Routing Numbers", "Automated FX Hedging & Forward Contracts"],
      badge: "Global",
      link: "/deposits-and-loans"
    },
    {
      icon: Shield,
      tag: "Lending & Mortgages",
      title: "Custom Credit & Financing",
      description: "Competitive fixed and adjustable mortgage rates, flexible lines of credit, and commercial property development loans.",
      features: ["Fast Pre-Approval in 24 Hours", "Fixed & Adjustable 15/30 Yr Terms", "Transparent Tiered Repayment Options"],
      badge: "Flexible",
      link: "/deposits-and-loans"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-slate-50/70 dark:bg-slate-900/60 relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Banking Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Engineered for Modern Individuals & Enterprises
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A full suite of institutional and private banking capabilities designed to simplify wealth management, accelerate business operations, and power international expansion.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Top Subtle Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-blue-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                    {service.tag}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-slate-600 dark:text-slate-400">
                        <Check className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-xs font-semibold text-blue-600 dark:text-emerald-400 group-hover:gap-2 gap-1 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
