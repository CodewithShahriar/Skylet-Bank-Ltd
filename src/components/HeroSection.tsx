import React from "react";
import { ArrowRight, ShieldCheck, TrendingUp, Globe2, Sparkles, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const scrollToCalculators = () => {
    const el = document.getElementById("calculators");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-12 md:py-20 lg:py-24 border-b border-slate-200/60 dark:border-slate-800/60">
      {/* Background Glow Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-fintech-glow opacity-80 pointer-events-none blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Next-Gen Global Commercial & Digital Banking</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Institutional-Grade Banking, Built for{" "}
              <span className="text-gradient-fintech">Global Ambition.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience seamless multi-currency corporate and personal accounts, 
              high-yield savings at <strong className="text-slate-900 dark:text-white">5.25% APY</strong>, 
              and instant international wire transfers. FDIC-insured protection with zero hidden fees.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link to="/accounts" className="btn-fintech-primary w-full sm:w-auto px-7 py-3 text-sm">
                <span>Open Global Account</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Button
                variant="outline"
                onClick={scrollToCalculators}
                className="btn-fintech-secondary w-full sm:w-auto px-6 py-3 text-sm"
              >
                <span>Interactive Calculators</span>
              </Button>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left border-t border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>FDIC Insured up to $250k</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                <Globe2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>160+ Global Currencies</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 col-span-2 sm:col-span-1">
                <Lock className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>SOC 2 Type II Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Image (EXACT image kept as strictly requested) + Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Background Blur Rings */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-3xl blur-2xl opacity-20 dark:opacity-35"></div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900 group">
              {/* The User-Mandated Image */}
              <img
                src="https://i.ibb.co.com/GvV1X4tB/Whats-App-Image-2025-05-11-at-05-30-38-c9fc62ca.jpg"
                alt="Skylet Bank - Next Generation Global Banking"
                className="w-full h-[460px] md:h-[520px] object-cover group-hover:scale-102 transition-transform duration-700"
              />

              {/* Gradient Overlay for Sleek Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

              {/* Bottom Badge inside the image */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/75 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-300">Annual Percentage Yield (APY)</p>
                  <p className="text-xl font-bold text-emerald-400">5.25% Fixed Growth</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                  Guaranteed
                </div>
              </div>
            </div>

            {/* Floating Live Transaction Pill (Top-Right of Image) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 text-xs max-w-xs z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold flex-shrink-0">
                <TrendingUp size={18} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase">Global Wire Transfer</p>
                <p className="font-bold text-slate-900 dark:text-white">+$45,000.00 USD</p>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Instant Fedwire Confirmed</span>
              </div>
            </motion.div>

            {/* Floating Security Badge (Bottom-Left of Image) */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="hidden sm:flex absolute -bottom-5 -left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 items-center gap-2.5 text-xs z-20"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Vault Security Standard</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">256-bit AES & Biometrics</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
