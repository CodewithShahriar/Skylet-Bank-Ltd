import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { LiveRatesTicker } from "@/components/LiveRatesTicker";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronRight,
  Wallet,
  Users,
  CreditCard,
  Building2,
  Rocket,
  Globe,
  Laptop,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Percent
} from "lucide-react";
import { motion } from "framer-motion";

export const AccountsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col font-sans">
      <Navbar />
      <LiveRatesTicker />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sparkles size={14} />
              <span>Global Multi-Currency Checking & Wealth</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Accounts Engineered for Precision & Yield
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Whether managing day-to-day household liquidity or orchestrating multi-entity commercial treasury across 160+ countries, Skylet accounts deliver unmatched security and up to 5.25% APY.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                onClick={() => {
                  const form = document.getElementById("account-application");
                  if (form) form.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-fintech-primary text-sm px-6 py-3"
              >
                <span>Open Account in 3 Minutes</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/80 shadow-2xl space-y-4 w-full max-w-md">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Account Highlights</span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck size={14} /> FDIC Insured
                </span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Percent size={16} />
                  </div>
                  <div>
                    <p className="font-bold">5.25% APY High-Yield Savings</p>
                    <p className="text-[11px] text-slate-400">No lock-ins, interest compounded daily</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Globe size={16} />
                  </div>
                  <div>
                    <p className="font-bold">Zero Foreign Transaction Fees</p>
                    <p className="text-[11px] text-slate-400">Spend directly in 40+ global currencies</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <CreditCard size={16} />
                  </div>
                  <div>
                    <p className="font-bold">55,000+ Surcharge-Free ATMs</p>
                    <p className="text-[11px] text-slate-400">Allpoint worldwide network included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Categories Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Select Your Account Tier
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Tailored specifically for personal wealth builders, high-net-worth investors, and scaling corporations.
          </p>
        </div>

        <Tabs defaultValue="personal" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 max-w-md w-full bg-slate-200 dark:bg-slate-900 p-1 rounded-2xl">
              <TabsTrigger value="personal" className="rounded-xl text-xs sm:text-sm font-semibold">
                Personal
              </TabsTrigger>
              <TabsTrigger value="business" className="rounded-xl text-xs sm:text-sm font-semibold">
                Commercial
              </TabsTrigger>
              <TabsTrigger value="digital" className="rounded-xl text-xs sm:text-sm font-semibold">
                Global FX
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Personal Accounts */}
          <TabsContent value="personal">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-emerald-400 flex items-center justify-center">
                      <Wallet size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold">High-Yield Premier Savings</CardTitle>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">5.25% APY</span>
                    </div>
                  </div>
                  <CardDescription className="text-xs sm:text-sm text-slate-500">
                    Earn industry-leading yield on your cash reserves with zero monthly fees.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>$0 Minimum opening deposit & zero maintenance fees</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Interest compounded daily and credited monthly</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Full FDIC insurance coverage up to $250,000</span>
                    </li>
                  </ul>
                  <Button className="w-full btn-fintech-primary text-xs sm:text-sm py-2.5">
                    Open Premier Savings
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <CreditCard size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold">Smart Global Checking</CardTitle>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">Zero FX Fees</span>
                    </div>
                  </div>
                  <CardDescription className="text-xs sm:text-sm text-slate-500">
                    Seamless daily transactions with worldwide ATM fee rebates.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Free World Debit Card with contactless chip and Apple Pay</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Unlimited domestic & international fee-free ATM withdrawals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Instant mobile check deposit with same-day availability</span>
                    </li>
                  </ul>
                  <Button className="w-full btn-fintech-primary text-xs sm:text-sm py-2.5">
                    Open Smart Checking
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Commercial Accounts */}
          <TabsContent value="business">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-emerald-400 flex items-center justify-center">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold">Commercial Treasury Account</CardTitle>
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400">Up to $5M Insured</span>
                    </div>
                  </div>
                  <CardDescription className="text-xs sm:text-sm text-slate-500">
                    High-volume cash management and multi-entity accounting.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Extended cash sweeps for up to $5,000,000 in FDIC coverage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Multi-user RBAC role permissions & dual-sign wire approvals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Automated 2-way sync with QuickBooks, Xero & NetSuite</span>
                    </li>
                  </ul>
                  <Button className="w-full btn-fintech-primary text-xs sm:text-sm py-2.5">
                    Open Treasury Account
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Rocket size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold">Startup & Venture Operating</CardTitle>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Zero Minimums</span>
                    </div>
                  </div>
                  <CardDescription className="text-xs sm:text-sm text-slate-500">
                    Built for fast-moving startups and venture-backed tech firms.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Unlimited free domestic ACH & Fedwire transfers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Virtual corporate credit cards with real-time spend limits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>$50,000+ in partner software credits (AWS, Stripe, Brex)</span>
                    </li>
                  </ul>
                  <Button className="w-full btn-fintech-primary text-xs sm:text-sm py-2.5">
                    Open Startup Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Global FX Accounts */}
          <TabsContent value="digital">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-emerald-400 flex items-center justify-center">
                      <Globe size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold">Multi-Currency Global IBAN</CardTitle>
                      <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">40+ Currencies</span>
                    </div>
                  </div>
                  <CardDescription className="text-xs sm:text-sm text-slate-500">
                    Hold USD, EUR, GBP, JPY, CAD and CHF in a unified account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Local routing numbers in US, EU, UK, Canada & Singapore</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Mid-market exchange rates with transparent low conversion margins</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Same-day SWIFT and SEPA cross-border wire execution</span>
                    </li>
                  </ul>
                  <Button className="w-full btn-fintech-primary text-xs sm:text-sm py-2.5">
                    Open Multi-Currency Account
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-emerald-400 flex items-center justify-center">
                      <Laptop size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold">Private International Banking</CardTitle>
                      <span className="text-xs font-bold text-amber-500">Dedicated Banker</span>
                    </div>
                  </div>
                  <CardDescription className="text-xs sm:text-sm text-slate-500">
                    White-glove concierge wealth management for global families.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Bespoke fixed income structuring & global asset protection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>24/7 dedicated private banking concierge via encrypted chat</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500" />
                      <span>Custom liquidity lines backed by international portfolios</span>
                    </li>
                  </ul>
                  <Button className="w-full btn-fintech-primary text-xs sm:text-sm py-2.5">
                    Request Private Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Simple 3-Step Process */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              100% digital onboarding with zero physical paperwork or branch visits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Select Your Plan</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Pick from Personal High-Yield Savings, Checking, or Commercial Treasury.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Digital ID Verification</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Snap your ID and selfie. Our automated system confirms your credentials in 60 seconds.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Fund & Transact</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Link any external US or international bank to deposit funds and activate your card.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccountsPage;
