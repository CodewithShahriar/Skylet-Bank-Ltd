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
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-16 md:py-24 lg:py-28 border-b border-slate-200/60 dark:border-slate-800/60">
      
      {/* 1. Ambient Background Glow Meshes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 dark:bg-blue-600/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/15 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* 2. Direct Background Image on the Right (No Box - Seamlessly Mixed into Background) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] pointer-events-none select-none overflow-hidden z-0">
        <img
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=85"
          alt="Global Digital Financial Network"
          className="w-full h-full object-cover object-center opacity-30 dark:opacity-40 mix-blend-luminosity dark:mix-blend-screen scale-110"
        />
        {/* Gradients on all sides that fade the image into the background seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50/80 dark:from-slate-950 dark:via-transparent dark:to-slate-950/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-transparent to-slate-50 dark:from-slate-950/80 dark:via-transparent dark:to-slate-950"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
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

          {/* Right Column: Floating Frameless 3D Banking Elements (No Box / No Border) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[440px] sm:min-h-[500px]"
          >
            {/* Ambient Multi-layer Halo */}
            <div className="absolute w-72 h-72 bg-gradient-to-br from-blue-500/20 via-indigo-600/20 to-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* 1. Floating Titanium Card (Frameless) */}
            <motion.div
              initial={{ y: 15 }}
              animate={{ y: -10 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 4, ease: "easeInOut" }}
              className="relative w-full max-w-[360px] sm:max-w-[390px] aspect-[1.586/1] rounded-2xl p-6 sm:p-7 text-white shadow-2xl border border-white/20 bg-gradient-to-br from-slate-900/90 via-blue-950/95 to-slate-900/95 backdrop-blur-xl z-10 rotate-[-3deg] hover:rotate-0 transition-transform duration-500 group select-none"
            >
              {/* Subtle Card Shimmer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/10 to-transparent pointer-events-none"></div>

              {/* Card Top */}
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-lg sm:text-xl tracking-wider">SKYLET</span>
                    <span className="text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                      SAPPHIRE
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">WORLD ELITE</p>
                </div>
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Zap size={18} />
                </div>
              </div>

              {/* Gold EMV Chip */}
              <div className="my-4 flex items-center gap-3">
                <div className="w-11 h-8 rounded-md bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-600 shadow-md border border-yellow-200/50 p-1 flex items-center justify-center">
                  <div className="w-full h-full border border-amber-900/40 rounded-sm grid grid-cols-3 grid-rows-2 gap-0.5 opacity-60">
                    <div className="border border-amber-900/40"></div>
                    <div className="border border-amber-900/40"></div>
                    <div className="border border-amber-900/40"></div>
                    <div className="border border-amber-900/40"></div>
                    <div className="border border-amber-900/40"></div>
                    <div className="border border-amber-900/40"></div>
                  </div>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Contactless Pay</span>
              </div>

              {/* Number */}
              <p className="font-mono text-base sm:text-lg font-bold tracking-widest text-slate-100">
                4532 •••• •••• 8821
              </p>

              {/* Card Bottom */}
              <div className="flex justify-between items-end pt-2">
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">Cardholder</p>
                  <p className="text-xs sm:text-sm font-semibold tracking-wide text-white uppercase font-mono">
                    GLOBAL ENTERPRISE
                  </p>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-rose-500/90 shadow-sm"></div>
                  <div className="w-6 h-6 rounded-full bg-amber-400/90 shadow-sm"></div>
                </div>
              </div>
            </motion.div>

            {/* 2. Floating Live Wire Notification Pill (Top-Right of Card) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -6, 0], opacity: 1 }}
              transition={{
                delay: 0.3,
                y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }
              }}
              className="absolute -top-6 -right-2 sm:-right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-3.5 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 text-xs z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold flex-shrink-0">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Wire Received</p>
                <p className="font-extrabold text-sm text-slate-900 dark:text-white font-mono">+$45,000.00 USD</p>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Instant Fedwire Cleared
                </span>
              </div>
            </motion.div>

            {/* 3. Floating APY Yield Chip (Bottom-Left of Card) */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: [0, 6, 0], opacity: 1 }}
              transition={{
                delay: 0.5,
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }}
              className="absolute -bottom-6 -left-2 sm:-left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-3.5 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 text-xs z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                <Percent size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Treasury Yield</p>
                <p className="font-extrabold text-sm text-emerald-600 dark:text-emerald-400 font-mono">5.25% Fixed APY</p>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Daily Compounding</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
