import React, { useState } from "react";
import { CreditCard, Check, ArrowRight, Sparkles, RotateCcw, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const CardsShowcase: React.FC = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const cards = [
    {
      id: "sapphire",
      name: "Skylet Sapphire Reserve",
      tier: "PREMIUM ELITE",
      type: "CREDIT",
      annualFee: "$195 / year (Waived 1st Year)",
      apr: "14.99% - 21.99% Variable APR",
      cashback: "3% Unlimited Cashback on Travel & Dining",
      bgGradient: "from-blue-900 via-indigo-900 to-slate-900",
      accentColor: "#38BDF8",
      cardNumber: "4532 •••• •••• 8821",
      holder: "ALEXANDER CHEN",
      expires: "08/29",
      cvv: "782",
      benefits: [
        "Complimentary Priority Pass™ Airport Lounge Access",
        "$300 Annual Travel Credit & Zero Foreign Transaction Fees",
        "Comprehensive $1,000,000 Trip Cancellation & Baggage Insurance",
        "24/7 Dedicated Concierge & Emergency Card Replacement",
      ],
    },
    {
      id: "black-diamond",
      name: "Black Diamond Corporate",
      tier: "ENTERPRISE",
      type: "CHARGE / CORPORATE",
      annualFee: "$0 (With $50k annual spend)",
      apr: "Pay-in-full 30-Day terms",
      cashback: "2% Flat Cashback on All Business Purchases",
      bgGradient: "from-slate-950 via-neutral-900 to-black",
      accentColor: "#F59E0B",
      cardNumber: "5421 •••• •••• 9934",
      holder: "SKYLET VENTURES LLC",
      expires: "11/30",
      cvv: "419",
      benefits: [
        "Custom Employee Sub-Cards with Automated Budget Limits",
        "Direct Real-Time Sync with QuickBooks, Xero & NetSuite",
        "Extended 60-Day Terms for Global SaaS & Cloud Invoicing",
        "Dedicated Relationship Manager & Multi-Currency Settlement",
      ],
    },
    {
      id: "mint-cash",
      name: "Skylet Mint Rewards",
      tier: "SIGNATURE",
      type: "CREDIT",
      annualFee: "$0 No Annual Fee Ever",
      apr: "0% Intro APR for 15 Months",
      cashback: "5% on Groceries & EV/Gas, 2% on Everything Else",
      bgGradient: "from-emerald-950 via-teal-900 to-slate-900",
      accentColor: "#10B981",
      cardNumber: "4112 •••• •••• 3412",
      holder: "SARAH JENNINGS",
      expires: "04/28",
      cvv: "329",
      benefits: [
        "No Annual Fee & No Foreign Exchange Conversion Markup",
        "Instant Virtual Card generation inside the Skylet Mobile App",
        "Zero-Liability Fraud Protection with Real-Time Instant SMS Lock",
        "$200 Welcome Bonus after $1,000 spent in first 90 days",
      ],
    },
    {
      id: "multi-currency",
      name: "Global Multi-Currency Debit",
      tier: "WORLD DEBIT",
      type: "DEBIT",
      annualFee: "$0 Included with Checking",
      apr: "Direct Account Linked",
      cashback: "1% Instant Cashback on Overseas POS Purchases",
      bgGradient: "from-blue-950 via-slate-900 to-cyan-950",
      accentColor: "#06B6D4",
      cardNumber: "4829 •••• •••• 7120",
      holder: "GLOBAL TRAVELER",
      expires: "12/29",
      cvv: "914",
      benefits: [
        "Direct spending in 40+ currencies without exchange fees",
        "Free withdrawals at 55,000+ Allpoint ATM network locations worldwide",
        "Instant freeze/unfreeze and biometric approval on smartphones",
        "Apple Pay, Google Pay, and Samsung Pay fully supported",
      ],
    },
  ];

  const currentCard = cards[selectedCardIndex];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smart Physical & Virtual Cards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Curated Cards with Unmatched Global Privileges
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Engineered with titanium finishes, contactless NFC, and multi-currency intelligence. Click the card to flip and explore.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {cards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => {
                setSelectedCardIndex(idx);
                setIsFlipped(false);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCardIndex === idx
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg scale-102"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {card.name}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Card 3D Preview (Left/Center) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* The Flippable 3D Card Container */}
            <div
              className="relative w-full max-w-[420px] aspect-[1.586/1] cursor-pointer perspective-1000 select-none group"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <motion.div
                className="w-full h-full relative rounded-2xl shadow-2xl transition-all duration-700 preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Front of Card */}
                <div
                  className={`absolute inset-0 rounded-2xl p-6 sm:p-7 text-white flex flex-col justify-between backface-hidden shadow-2xl border border-white/20 bg-gradient-to-br ${currentCard.bgGradient}`}
                >
                  {/* Subtle Shimmer Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/10 to-transparent pointer-events-none"></div>

                  {/* Card Top: Bank Name & Contactless */}
                  <div className="flex justify-between items-start z-10">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-lg sm:text-xl tracking-wider">SKYLET</span>
                        <span className="text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-white/20 text-white uppercase">
                          {currentCard.tier}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-mono mt-0.5">{currentCard.type}</p>
                    </div>

                    {/* Contactless Wifi Icon */}
                    <div className="flex items-center gap-2 text-white/80">
                      <Zap className="w-5 h-5 text-amber-400" />
                      <div className="flex flex-col space-y-0.5">
                        <span className="w-4 h-0.5 bg-white/70 rounded-full"></span>
                        <span className="w-3 h-0.5 bg-white/70 rounded-full"></span>
                        <span className="w-2 h-0.5 bg-white/70 rounded-full"></span>
                      </div>
                    </div>
                  </div>

                  {/* Card Center: EMV Chip & Hologram */}
                  <div className="flex items-center gap-4 z-10">
                    {/* Metallic Gold Chip */}
                    <div className="w-12 h-9 rounded-md bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-600 shadow-md border border-yellow-200/50 p-1 flex items-center justify-center">
                      <div className="w-full h-full border border-amber-800/30 rounded-sm grid grid-cols-3 grid-rows-2 gap-0.5 opacity-60">
                        <div className="border border-amber-900/40"></div>
                        <div className="border border-amber-900/40"></div>
                        <div className="border border-amber-900/40"></div>
                        <div className="border border-amber-900/40"></div>
                        <div className="border border-amber-900/40"></div>
                        <div className="border border-amber-900/40"></div>
                      </div>
                    </div>

                    <span className="text-[11px] text-white/60 tracking-wider">NFC Enabled</span>
                  </div>

                  {/* Card Number */}
                  <div className="z-10">
                    <p className="font-mono text-lg sm:text-xl font-bold tracking-widest text-slate-100 shadow-sm">
                      {currentCard.cardNumber}
                    </p>
                  </div>

                  {/* Card Bottom: Holder, Expiry, Visa/Mastercard Logo */}
                  <div className="flex justify-between items-end z-10 pt-1">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-slate-300 font-mono">Cardholder</p>
                      <p className="text-xs sm:text-sm font-semibold tracking-wide text-white uppercase font-mono">
                        {currentCard.holder}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[9px] uppercase tracking-wider text-slate-300 font-mono">Expires</p>
                      <p className="text-xs sm:text-sm font-bold text-white font-mono">{currentCard.expires}</p>
                    </div>

                    {/* Visa / Master styled badge */}
                    <div className="flex -space-x-2">
                      <div className="w-7 h-7 rounded-full bg-rose-500/90 shadow-sm"></div>
                      <div className="w-7 h-7 rounded-full bg-amber-400/90 shadow-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className={`absolute inset-0 rounded-2xl p-6 text-white flex flex-col justify-between backface-hidden rotate-y-180 shadow-2xl border border-white/20 bg-gradient-to-br ${currentCard.bgGradient}`}
                >
                  {/* Magnetic Strip */}
                  <div className="-mx-6 h-12 bg-slate-950 mt-4 shadow-inner border-y border-white/10"></div>

                  {/* Signature and CVV Strip */}
                  <div className="px-2">
                    <p className="text-[9px] text-slate-300 uppercase tracking-wider text-right mb-1">
                      Authorized Signature
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-8 bg-slate-200 rounded text-slate-800 font-serif italic text-xs flex items-center px-3 select-none">
                        Skylet Authorized
                      </div>
                      <div className="h-8 w-14 bg-white text-slate-900 font-mono font-bold text-sm flex items-center justify-center rounded">
                        {currentCard.cvv}
                      </div>
                    </div>
                  </div>

                  {/* Bank Details & Hologram */}
                  <div className="text-[9px] text-slate-400 space-y-1">
                    <p>
                      Issued by Skylet Bank Ltd, Member FDIC pursuant to license by Visa/Mastercard Worldwide.
                    </p>
                    <div className="flex justify-between items-center text-slate-300 pt-2 border-t border-white/10">
                      <span>24/7 Global Support: +1 (800) 555-SKYL</span>
                      <span className="font-bold">FDIC INSURED</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Flip Helper Button */}
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-emerald-400 bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Click card to see {isFlipped ? "Front" : "Back (CVV & Strip)"}</span>
            </button>
          </div>

          {/* Card Details & Perks (Right Column) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{currentCard.tier} BENEFITS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {currentCard.name}
              </h3>
              <p className="text-base text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                {currentCard.cashback}
              </p>
            </div>

            {/* Pricing metrics */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Annual Fee</p>
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {currentCard.annualFee}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Purchase APR</p>
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{currentCard.apr}</p>
              </div>
            </div>

            {/* Exclusive Card Benefits */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Cardmember Advantages:
              </h4>
              <ul className="space-y-2.5">
                {currentCard.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/cards"
                className="btn-fintech-primary py-3 px-6 text-sm flex items-center justify-center gap-2"
              >
                <span>Apply for {currentCard.name}</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/cards"
                className="btn-fintech-secondary py-3 px-5 text-sm flex items-center justify-center"
              >
                <span>Compare All Cards</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CardsShowcase;
