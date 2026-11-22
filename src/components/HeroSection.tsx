import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Globe2,
  Sparkles,
  CheckCircle2,
  Lock,
  Zap,
  Percent
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const scrollToCalculators = () => {
    const el = document.getElementById("calculators");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-116px)] sm:min-h-[calc(100svh-116px)] flex flex-col justify-center py-10 sm:py-14 lg:py-0 border-b border-slate-200/60 dark:border-slate-800/60">
      
      {/* 1. Full-Canvas Seamless Radial Ambient Glows (Zero seams, zero vertical cutoffs) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-600/10 dark:bg-blue-600/18 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 dark:bg-emerald-500/16 rounded-full blur-[130px]"></div>
      </div>

      {/* 2. Full-Width Background Visual with Soft Circular Radial Feather (No lines or borders anywhere) */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0 opacity-25 dark:opacity-35"
        style={{
          maskImage: "radial-gradient(circle 500px at 78% 50%, black 15%, rgba(0,0,0,0.5) 50%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle 500px at 78% 50%, black 15%, rgba(0,0,0,0.5) 50%, transparent 80%)"
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1800&q=85"
          alt="Global Digital Financial Network"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-4 sm:py-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Next-Gen Global Commercial & Digital Banking</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Institutional-Grade Banking, Built for{" "}
              <span className="text-gradient-fintech">Global Ambition.</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
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

          {/* Right Column: Floating Frameless 3D Banking Elements (Responsive across all screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center py-6 sm:py-8 lg:py-0 w-full"
          >
            {/* Ambient Halo */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-500/20 via-indigo-600/15 to-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* 1. Floating Titanium Card (Fully Responsive for Mobile/Tablet/Desktop) */}
            <motion.div
              initial={{ y: 12 }}
              animate={{ y: -8 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 4, ease: "easeInOut" }}
              className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] aspect-[1.586/1] rounded-2xl p-5 sm:p-6 text-white shadow-2xl border border-white/20 bg-gradient-to-br from-slate-900/95 via-blue-950/95 to-slate-900/95 backdrop-blur-xl z-10 rotate-[-2deg] sm:rotate-[-3deg] hover:rotate-0 transition-transform duration-500 group select-none"
            >
              {/* Card Shimmer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/10 to-transparent pointer-events-none"></div>

              {/* Card Top */}
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-base sm:text-lg tracking-wider">SKYLET</span>
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                      SAPPHIRE
                    </span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-mono mt-0.5">WORLD ELITE</p>
                </div>
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Zap size={16} />
                </div>
              </div>

              {/* Gold EMV Chip */}
              <div className="my-3 sm:my-4 flex items-center gap-3">
                <div className="w-10 h-7 sm:w-11 sm:h-8 rounded-md bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-600 shadow-md border border-yellow-200/50 p-1 flex items-center justify-center">
                  <div className="w-full h-full border border-amber-900/40 rounded-sm grid grid-cols-3 grid-rows-2 gap-0.5 opacity-60">
                    <div className="border border-amber-900/40"></div>
                    <div className="border border-amber-900/40"></div>
                    <div className="border border-amber-900/40"></div>
                    <div className="border border-amber-900/40"></div>
                    <div className="border border-amber-900/40"></div>
                    <div className="border border-amber-900/40"></div>
                  </div>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono">Contactless Pay</span>
              </div>

              {/* Number */}
              <p className="font-mono text-sm sm:text-base font-bold tracking-widest text-slate-100">
                4532 •••• •••• 8821
              </p>

              {/* Card Bottom */}
              <div className="flex justify-between items-end pt-1.5 sm:pt-2">
                <div>
                  <p className="text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-400 font-mono">Cardholder</p>
                  <p className="text-[11px] sm:text-xs font-semibold tracking-wide text-white uppercase font-mono">
                    GLOBAL ENTERPRISE
                  </p>
                </div>
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-rose-500/90 shadow-sm"></div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-400/90 shadow-sm"></div>
                </div>
              </div>
            </motion.div>

            {/* 2. Floating Live Wire Notification Pill (Top-Right of Card) */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: [0, -6, 0], opacity: 1 }}
              transition={{
                delay: 0.3,
                y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }
              }}
              className="absolute -top-5 sm:-top-7 -right-1 sm:-right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-2.5 sm:p-3.5 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5 sm:gap-3 text-xs z-20"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold flex-shrink-0">
                <TrendingUp size={18} />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Wire Received</p>
                <p className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white font-mono">+$45,000.00 USD</p>
                <span className="text-[9px] sm:text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Instant Fedwire Cleared
                </span>
              </div>
            </motion.div>

            {/* 3. Floating APY Yield Chip (Bottom-Left of Card) */}
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: [0, 6, 0], opacity: 1 }}
              transition={{
                delay: 0.5,
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }}
              className="absolute -bottom-5 sm:-bottom-7 -left-1 sm:-left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-2.5 sm:p-3.5 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5 sm:gap-3 text-xs z-20"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                <Percent size={18} />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Treasury Yield</p>
                <p className="font-extrabold text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-mono">5.25% Fixed APY</p>
                <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-medium">Daily Compounding</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
