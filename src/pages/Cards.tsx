import React from "react";
import Navbar from "@/components/Navbar";
import { LiveRatesTicker } from "@/components/LiveRatesTicker";
import Footer from "@/components/Footer";
import CardsShowcase from "@/components/CardsShowcase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, Zap, Lock, Sparkles, ArrowRight, Smartphone } from "lucide-react";

export const CardsPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col font-sans">
      <Navbar />
      <LiveRatesTicker />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-18 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles size={14} />
            <span>Titanium Physical & Encrypted Virtual Cards</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Designed for Global Purchasing Power
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Unlimited cashback, zero foreign transaction markups, and instant single-use virtual card generators for maximum security.
          </p>
        </div>
      </section>

      {/* Embed Our Interactive 3D Card Showcase */}
      <CardsShowcase />

      {/* Comprehensive Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
            Detailed Card Comparison
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Find the exact card tailored to your personal rewards or corporate spend profile.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4">Card Product</th>
                <th className="p-4">Annual Fee</th>
                <th className="p-4">Cashback / Rewards</th>
                <th className="p-4">Foreign FX Fee</th>
                <th className="p-4">Key Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/70 text-slate-600 dark:text-slate-300">
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-850/50">
                <td className="p-4 font-bold text-slate-900 dark:text-white">Skylet Sapphire Reserve</td>
                <td className="p-4">$195 / yr</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">3% Unlimited on Travel & Dining</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">0% (Zero Fee)</td>
                <td className="p-4">Priority Pass™ Airport Lounges & $300 Credit</td>
              </tr>
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-850/50">
                <td className="p-4 font-bold text-slate-900 dark:text-white">Black Diamond Corporate</td>
                <td className="p-4">$0 (w/ $50k spend)</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">2% Flat on All Business Spend</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">0% (Zero Fee)</td>
                <td className="p-4">Multi-Card Sub-Limits & QuickBooks Sync</td>
              </tr>
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-850/50">
                <td className="p-4 font-bold text-slate-900 dark:text-white">Skylet Mint Cash Rewards</td>
                <td className="p-4">$0 No Fee Ever</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">5% Groceries/Gas, 2% All Else</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">0% (Zero Fee)</td>
                <td className="p-4">0% Intro APR for 15 Months</td>
              </tr>
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-850/50">
                <td className="p-4 font-bold text-slate-900 dark:text-white">Global World Debit</td>
                <td className="p-4">$0 Included w/ Account</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">1% on International POS</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">0% (Zero Fee)</td>
                <td className="p-4">55,000+ Surcharge-Free Allpoint ATMs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Security & Mobile Card Features */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Smartphone size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Instant Virtual Generator</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Spin up disposable single-use virtual cards for one-off web purchases or set merchant-locked subscriptions that prevent unwanted auto-renewals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Zero-Liability Fraud Guarantee</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                You are never liable for unauthorized card activity. If suspicious behavior is detected, our AI automatically pauses transactions and alerts your phone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                <Lock size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">1-Tap Card Freeze</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Misplaced your card? Freeze and unfreeze it in one tap inside the mobile app without having to wait on customer service queues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CardsPage;
