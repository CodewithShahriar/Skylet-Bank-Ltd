import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { LiveRatesTicker } from "@/components/LiveRatesTicker";
import Footer from "@/components/Footer";
import FinancialCalculators from "@/components/FinancialCalculators";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Wallet, Home, Car, Calculator, Award, ShieldCheck, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export const DepositsAndLoansPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col font-sans">
      <Navbar />
      <LiveRatesTicker />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sparkles size={14} />
              <span>Institutional Lending & Wealth Preservation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Deposit Solutions & Tailored Financing
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Capture guaranteed returns on certificates of deposit up to 5.25% APY or access competitive residential mortgage and commercial credit lines with fast 24-hour pre-approval.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                onClick={() => {
                  const el = document.getElementById("loan-calc");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-fintech-primary text-sm px-6 py-3"
              >
                <span>Calculate Payments</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/80 shadow-2xl space-y-3 w-full max-w-md">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Current Benchmark Rates</span>
                <span className="text-xs text-emerald-400 font-semibold">Updated Today</span>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">12-Month CD / Fixed Deposit</span>
                  <span className="font-bold text-emerald-400 font-mono">5.25% APY</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">High-Yield Savings Cash Sweep</span>
                  <span className="font-bold text-emerald-400 font-mono">5.10% APY</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">30-Year Fixed Mortgage</span>
                  <span className="font-bold text-blue-400 font-mono">6.45% APR</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Commercial Line of Credit</span>
                  <span className="font-bold text-purple-400 font-mono">Prime + 1.25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deposit Options Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
            Guaranteed Yield Deposit Options
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Grow your treasury reserves with FDIC-backed certainty and flexible maturities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Wallet size={20} />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold">Certificate of Deposit (CD)</CardTitle>
                  <CardDescription className="text-xs">Lock in guaranteed high yield</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 dark:bg-slate-950 rounded-xl text-center">
                <div>
                  <p className="text-[10px] text-slate-400">Yield</p>
                  <p className="text-sm font-bold text-emerald-500">5.25% APY</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400">Term</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">3 to 60 Mos</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400">Min. Deposit</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">$1,000</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  <span>Guaranteed rate locked for the entire tenure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  <span>Option for monthly interest disbursement to checking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  <span>Automatic renewal notice with 10-day grace period</span>
                </li>
              </ul>
              <Button className="w-full btn-fintech-primary text-xs sm:text-sm py-2.5">
                Open Certificate of Deposit
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Calculator size={20} />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold">Liquid Treasury Money Market</CardTitle>
                  <CardDescription className="text-xs">High yield with instant check & wire access</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 dark:bg-slate-950 rounded-xl text-center">
                <div>
                  <p className="text-[10px] text-slate-400">Yield</p>
                  <p className="text-sm font-bold text-blue-500">4.95% APY</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400">Liquidity</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Instant</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400">Min. Deposit</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">$5,000</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  <span>Unlimited deposits and up to 6 free wire/debit withdrawals per cycle</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  <span>Tiered rates with higher yields for larger commercial balances</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  <span>Full sweep protection up to $5M via extended partner banks</span>
                </li>
              </ul>
              <Button className="w-full btn-fintech-primary text-xs sm:text-sm py-2.5">
                Open Money Market Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Embed Live Financial Calculator Component */}
      <div id="loan-calc">
        <FinancialCalculators />
      </div>

      <Footer />
    </div>
  );
};

export default DepositsAndLoansPage;
