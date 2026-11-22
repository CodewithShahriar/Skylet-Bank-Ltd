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
      link: "/accounts",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=700&q=80"
    },
    {
      icon: Building2,
      tag: "Commercial & Business",
      title: "Corporate Treasury & Operations",
      description: "Comprehensive financial infrastructure for global businesses: automated payroll, corporate credit limits, and sub-account routing.",
      features: ["Multi-user Access Control & Roles", "Integrated Global Payroll (140+ countries)", "Extended FDIC coverage up to $5M"],
      badge: "Enterprise",
      link: "/accounts",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80"
    },
    {
      icon: Globe,
      tag: "Cross-Border FX",
      title: "Global Multi-Currency & Wires",
      description: "Hold, convert, and transfer in 40+ currencies at real mid-market exchange rates with same-day SWIFT and Fedwire settlement.",
      features: ["Real-time Mid-Market FX Rates", "Virtual Local IBAN & Routing Numbers", "Automated FX Hedging & Forward Contracts"],
      badge: "Global",
      link: "/deposits-and-loans",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=700&q=80"
    },
    {
      icon: Shield,
      tag: "Lending & Mortgages",
      title: "Custom Credit & Financing",
      description: "Competitive fixed and adjustable mortgage rates, flexible lines of credit, and commercial property development loans.",
      features: ["Fast Pre-Approval in 24 Hours", "Fixed & Adjustable 15/30 Yr Terms", "Transparent Tiered Repayment Options"],
      badge: "Flexible",
      link: "/deposits-and-loans",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80"
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
                className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Card Image Header */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Badge & Icon on Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                      {service.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-950/80 backdrop-blur-md text-white flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-0.5">
                      {service.tag}
                    </p>
                    <h3 className="text-base font-extrabold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Bullet features */}
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start text-xs text-slate-600 dark:text-slate-400">
                          <Check className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-xs font-semibold text-blue-600 dark:text-emerald-400 group-hover:gap-2 gap-1 transition-all"
                    >
                      <span>Explore Capabilities</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Feature Spotlight: Omnichannel Banking Platform */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-slate-800 p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Unified Ecosystem
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Your Complete Financial Command Center
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Seamlessly move funds across 160+ countries, issue virtual physical credit cards, and monitor treasury cash yields in real time through our unified web and mobile interface.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link to="/accounts" className="btn-fintech-primary text-xs sm:text-sm px-6 py-2.5">
                  <span>Open An Account</span>
                  <ArrowRight size={14} className="ml-1.5" />
                </Link>
                <Link to="/cards" className="btn-fintech-secondary text-xs sm:text-sm px-5 py-2.5">
                  <span>View Cards</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="Skylet Banking Platform Analytics"
                  className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="font-semibold text-slate-200">Global Fedwire & SWIFT Routing Active</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-400">99.99% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
