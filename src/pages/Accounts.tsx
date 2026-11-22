import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { LiveRatesTicker } from "@/components/LiveRatesTicker";
import Footer from "@/components/Footer";
import AccountOpeningModal from "@/components/AccountOpeningModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Wallet,
  CreditCard,
  Building2,
  Rocket,
  Globe,
  Laptop,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Percent,
  Check,
  Zap,
  HelpCircle
} from "lucide-react";
import { motion } from "framer-motion";

export const AccountsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAccountType, setSelectedAccountType] = useState("High-Yield Premier Savings (5.25% APY)");

  // Interactive In-Page Yield Calculator State
  const [calcBalance, setCalcBalance] = useState<number>(25000);
  const annualEarned = Math.round(calcBalance * 0.0525);
  const monthlyEarned = Math.round(annualEarned / 12);

  const handleOpenAccount = (accountTier: string) => {
    setSelectedAccountType(accountTier);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col font-sans">
      <Navbar />
      <LiveRatesTicker />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden">
        
        {/* Ambient Lights */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-7 space-y-5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sparkles size={14} />
              <span>Instant Digital Onboarding • 100% Online</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Accounts Engineered for Precision & <span className="text-gradient-mint">Maximum Yield.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Experience transparent banking without bureaucracy. Open personal high-yield accounts at <strong className="text-white">5.25% APY</strong> or commercial treasury accounts with extended FDIC coverage up to <strong className="text-white">$5,000,000</strong>.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
              <Button
                onClick={() => handleOpenAccount("High-Yield Premier Savings (5.25% APY)")}
                className="btn-fintech-primary text-sm px-7 py-3"
              >
                <span>Open Account in 3 Minutes</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const el = document.getElementById("comparison");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-fintech-secondary text-sm px-6 py-3"
              >
                <span>Compare All Accounts</span>
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-slate-700/80 shadow-2xl space-y-4 w-full max-w-md">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Account Privileges</span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck size={14} /> Member FDIC
                </span>
              </div>
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Percent size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white">5.25% APY High-Yield Savings</p>
                    <p className="text-[11px] text-slate-400">Compounded daily, credited monthly, no lock-ins</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Globe size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Zero Foreign Transaction Fees</p>
                    <p className="text-[11px] text-slate-400">Direct multi-currency spending in 40+ countries</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <CreditCard size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white">55,000+ Surcharge-Free ATMs</p>
                    <p className="text-[11px] text-slate-400">Unlimited Allpoint network withdrawals worldwide</p>
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
            Choose Your Account Category
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Click on any account to immediately initiate instant digital onboarding.
          </p>
        </div>

        <Tabs defaultValue="personal" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-3 max-w-md w-full bg-slate-200 dark:bg-slate-900 p-1.5 rounded-2xl shadow-inner">
              <TabsTrigger value="personal" className="rounded-xl text-xs sm:text-sm font-semibold py-2">
                Personal
              </TabsTrigger>
              <TabsTrigger value="business" className="rounded-xl text-xs sm:text-sm font-semibold py-2">
                Commercial
              </TabsTrigger>
              <TabsTrigger value="digital" className="rounded-xl text-xs sm:text-sm font-semibold py-2">
                Global FX
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab 1: Personal Accounts */}
          <TabsContent value="personal">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-emerald-400 flex items-center justify-center">
                      <Wallet size={24} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                      Highest Return
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    High-Yield Premier Savings
                  </CardTitle>
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                    5.25% APY
                  </p>
                  <CardDescription className="text-xs sm:text-sm text-slate-500 pt-1">
                    Industry-leading fixed return on cash reserves with zero monthly maintenance charges.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>$0 Minimum opening deposit & $0 monthly maintenance fee</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Interest compounded daily and credited automatically every month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Federal FDIC insurance coverage up to $250,000 per depositor</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Instant automated recurring deposits from any external bank</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => handleOpenAccount("High-Yield Premier Savings (5.25% APY)")}
                    className="w-full btn-fintech-primary text-xs sm:text-sm py-3 mt-4"
                  >
                    <span>Open Premier Savings</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <CreditCard size={24} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                      Zero Fees
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    Smart Global Checking
                  </CardTitle>
                  <p className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">
                    Zero FX Markup
                  </p>
                  <CardDescription className="text-xs sm:text-sm text-slate-500 pt-1">
                    Seamless daily transactions worldwide with free debit card and automated ATM fee rebates.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Free World Debit Card with contactless chip and Apple/Google Pay</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Unlimited domestic & international fee-free ATM withdrawals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Mobile check deposits with instant clear in under 60 minutes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Early direct deposit: receive your payroll up to 2 days ahead</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => handleOpenAccount("Smart Global Checking (Zero FX Markup)")}
                    className="w-full btn-fintech-primary text-xs sm:text-sm py-3 mt-4"
                  >
                    <span>Open Smart Checking</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 2: Commercial Accounts */}
          <TabsContent value="business">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-emerald-400 flex items-center justify-center">
                      <Building2 size={24} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400">
                      $5M FDIC Sweeps
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    Commercial Treasury Account
                  </CardTitle>
                  <p className="text-2xl font-black text-purple-600 dark:text-purple-400 font-mono">
                    Extended Insurance
                  </p>
                  <CardDescription className="text-xs sm:text-sm text-slate-500 pt-1">
                    Multi-entity cash management, payroll operations, and automated yield sweeps.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Extended cash sweeps for up to $5,000,000 in FDIC coverage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Multi-user RBAC role permissions & dual-sign wire approvals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Automated 2-way sync with QuickBooks, Xero & NetSuite</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Integrated global contractor and employee payroll (140+ countries)</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => handleOpenAccount("Commercial Treasury Account ($5M FDIC Sweeps)")}
                    className="w-full btn-fintech-primary text-xs sm:text-sm py-3 mt-4"
                  >
                    <span>Open Treasury Account</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Rocket size={24} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                      Startup Perks
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    Startup & Venture Operating
                  </CardTitle>
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                    Zero Minimums
                  </p>
                  <CardDescription className="text-xs sm:text-sm text-slate-500 pt-1">
                    Built for fast-growing venture-backed technology startups and entrepreneurs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Unlimited free domestic ACH & Fedwire transfers with zero transaction fees</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Virtual corporate credit cards with real-time employee spending limits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>$50,000+ in partner software credits (AWS, Stripe, Brex, Google Cloud)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Dedicated venture banking relationship manager</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => handleOpenAccount("Startup & Venture Operating Account")}
                    className="w-full btn-fintech-primary text-xs sm:text-sm py-3 mt-4"
                  >
                    <span>Open Startup Account</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 3: Global FX Accounts */}
          <TabsContent value="digital">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-emerald-400 flex items-center justify-center">
                      <Globe size={24} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400">
                      40+ Currencies
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    Multi-Currency Global IBAN
                  </CardTitle>
                  <p className="text-2xl font-black text-cyan-600 dark:text-cyan-400 font-mono">
                    Mid-Market FX
                  </p>
                  <CardDescription className="text-xs sm:text-sm text-slate-500 pt-1">
                    Hold USD, EUR, GBP, JPY, CAD and CHF in a unified digital account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Dedicated virtual routing numbers in US, EU, UK, Canada & Singapore</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Mid-market exchange rates with transparent low conversion margins</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Same-day SWIFT, Fedwire, and SEPA cross-border wire execution</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Automated forward FX contracts to hedge foreign exchange volatility</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => handleOpenAccount("Global Multi-Currency IBAN Account (40+ Currencies)")}
                    className="w-full btn-fintech-primary text-xs sm:text-sm py-3 mt-4"
                  >
                    <span>Open Multi-Currency Account</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-emerald-400 flex items-center justify-center">
                      <Laptop size={24} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
                      Private Wealth
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    Private International Wealth
                  </CardTitle>
                  <p className="text-2xl font-black text-amber-500 font-mono">
                    Concierge Advisory
                  </p>
                  <CardDescription className="text-xs sm:text-sm text-slate-500 pt-1">
                    White-glove private banking for high-net-worth families and global executives.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Bespoke fixed income structuring & global asset protection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>24/7 dedicated private banking concierge via encrypted mobile chat</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Custom liquidity lines backed by international portfolios</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Priority access to initial public offerings and private equity placements</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => handleOpenAccount("Private International Wealth Advisory")}
                    className="w-full btn-fintech-primary text-xs sm:text-sm py-3 mt-4"
                  >
                    <span>Request Private Consultation</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Interactive Savings Yield Simulator */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Interactive Yield Calculator
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Calculate Your 5.25% APY Earnings
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Drag the slider to see how much guaranteed interest your balance earns every month and year.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Deposit Balance ($ USD)
                </span>
                <span className="font-mono text-xl font-bold text-blue-600 dark:text-emerald-400">
                  ${calcBalance.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="250000"
                step="1000"
                value={calcBalance}
                onChange={(e) => setCalcBalance(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
                <span>$1,000</span>
                <span>$100,000</span>
                <span>$250,000 (FDIC Limit)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <p className="text-[11px] text-slate-400 font-semibold uppercase">Monthly Interest</p>
                <p className="text-xl sm:text-2xl font-black text-emerald-500 font-mono mt-1">
                  +${monthlyEarned.toLocaleString()}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">Credited monthly</p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <p className="text-[11px] text-slate-400 font-semibold uppercase">Annual Guaranteed</p>
                <p className="text-xl sm:text-2xl font-black text-blue-600 dark:text-emerald-400 font-mono mt-1">
                  +${annualEarned.toLocaleString()}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">At 5.25% Fixed APY</p>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <p className="text-[11px] text-slate-400 font-semibold uppercase">FDIC Guarantee</p>
                <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono mt-1">
                  100%
                </p>
                <p className="text-[10px] text-emerald-500 font-semibold mt-0.5">Zero risk to principal</p>
              </div>
            </div>

            <div className="text-center pt-2">
              <Button
                onClick={() => handleOpenAccount("High-Yield Premier Savings (5.25% APY)")}
                className="btn-fintech-primary text-xs sm:text-sm px-6 py-2.5 font-semibold"
              >
                <span>Lock In 5.25% APY Now</span>
                <ArrowRight size={15} className="ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Side-by-Side Account Matrix */}
      <section id="comparison" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
            Side-by-Side Feature Matrix
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Compare account benefits, withdrawal limits, and international wiring capabilities.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4 text-emerald-600 dark:text-emerald-400">Premier Savings</th>
                <th className="p-4 text-blue-600 dark:text-blue-400">Smart Checking</th>
                <th className="p-4 text-purple-600 dark:text-purple-400">Corporate Treasury</th>
                <th className="p-4 text-cyan-600 dark:text-cyan-400">Multi-Currency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/70 text-slate-600 dark:text-slate-300">
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30">
                <td className="p-4 font-bold text-slate-900 dark:text-white">Annual APY Yield</td>
                <td className="p-4 font-black text-emerald-600 dark:text-emerald-400 font-mono">5.25% APY</td>
                <td className="p-4 font-mono">0.50% APY</td>
                <td className="p-4 font-bold text-purple-600 dark:text-purple-400 font-mono">4.95% APY Sweep</td>
                <td className="p-4 font-mono">Tiered by currency</td>
              </tr>
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30">
                <td className="p-4 font-bold text-slate-900 dark:text-white">Monthly Service Fee</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold">$0 (Zero)</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold">$0 (Zero)</td>
                <td className="p-4">$0 w/ $25k balance</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold">$0 (Zero)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30">
                <td className="p-4 font-bold text-slate-900 dark:text-white">FDIC Insurance Coverage</td>
                <td className="p-4">$250,000</td>
                <td className="p-4">$250,000</td>
                <td className="p-4 font-bold text-purple-600 dark:text-purple-400">Up to $5,000,000</td>
                <td className="p-4">$250k (USD balances)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30">
                <td className="p-4 font-bold text-slate-900 dark:text-white">ATM Access & Rebates</td>
                <td className="p-4">Standard Network</td>
                <td className="p-4 font-bold text-blue-600 dark:text-blue-400">55,000+ Free ATMs</td>
                <td className="p-4">Commercial Network</td>
                <td className="p-4">Worldwide Fee-Free</td>
              </tr>
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30">
                <td className="p-4 font-bold text-slate-900 dark:text-white">International Wire Fees</td>
                <td className="p-4">$15 outbound</td>
                <td className="p-4">$0 inbound / $15 out</td>
                <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">Unlimited Free Wires</td>
                <td className="p-4 font-bold text-cyan-600 dark:text-cyan-400">Zero Markup Mid-Market</td>
              </tr>
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30">
                <td className="p-4 font-bold text-slate-900 dark:text-white">Instant Virtual Cards</td>
                <td className="p-4 text-slate-400">—</td>
                <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">Included (Unlimited)</td>
                <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">Sub-Card Controls</td>
                <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">Multi-Currency Virtual</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Account Opening Modal Triggered Anywhere */}
      <AccountOpeningModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultAccountType={selectedAccountType}
      />

      <Footer />
    </div>
  );
};

export default AccountsPage;
