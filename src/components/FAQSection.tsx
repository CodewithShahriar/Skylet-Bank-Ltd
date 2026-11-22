import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, HelpCircle, MessageSquare, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FAQSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "accounts", label: "Accounts & Wires" },
    { id: "cards", label: "Cards & ATMs" },
    { id: "security", label: "FDIC & Security" },
    { id: "lending", label: "Lending & Mortgages" },
  ];

  const faqs = [
    {
      category: "accounts",
      question: "How does Skylet protect my deposits under FDIC insurance?",
      answer:
        "Skylet Bank Ltd is a chartered commercial institution and Member FDIC. Your deposits are automatically insured up to $250,000 for individual accounts and up to $500,000 for joint accounts. For commercial accounts with larger balances, our Insured Cash Sweep (ICS) program spreads deposits across partner institutions to provide extended protection up to $5,000,000.",
    },
    {
      category: "accounts",
      question: "Can I open an international or multi-currency account as a non-US resident?",
      answer:
        "Yes. Skylet provides global multi-currency checking and treasury services for approved international clients and non-US registered corporations. You will receive dedicated local routing numbers (US ACH/Fedwire, European IBAN, UK Sort Code) with full digital onboarding.",
    },
    {
      category: "cards",
      question: "Are there foreign transaction fees or international ATM surcharge fees?",
      answer:
        "No. All Skylet Platinum, Sapphire, and World Debit cards carry 0% foreign transaction fees. Additionally, Skylet account holders enjoy unlimited fee-free withdrawals across the worldwide Allpoint network (55,000+ ATMs) and automated monthly ATM fee rebates for out-of-network ATMs.",
    },
    {
      category: "cards",
      question: "How does the instant virtual card feature work?",
      answer:
        "The moment your credit or debit application is approved, you can generate encrypted single-use or merchant-locked virtual cards within the Skylet mobile app. These can be added immediately to Apple Pay, Google Pay, or used for secure online subscriptions.",
    },
    {
      category: "security",
      question: "What security measures protect against unauthorized wire transfers?",
      answer:
        "All outbound wire transfers require dual-factor biometric authorization, hardware security key (FIDO2) compatibility, and AI behavioral analysis. For corporate treasury accounts, dual-signoff authorization rules can be configured so that transactions exceeding custom thresholds require two distinct executive approvals.",
    },
    {
      category: "lending",
      question: "How quickly can I get pre-approved for a personal or commercial loan?",
      answer:
        "Our digital lending engine processes automated soft-credit pre-approvals in under 2 minutes with zero impact on your credit score. Full loan funding is typically completed within 24 to 48 hours following document verification.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-slate-50/70 dark:bg-slate-900/60 relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Everything you need to know about Skylet accounts, FDIC insurance, global wires, and lending solutions.
          </p>
        </div>

        {/* Search Bar within FAQ */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions (e.g. FDIC, ATM fees, wire transfers)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm text-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-sm">
              No matching questions found for "{searchTerm}". Please contact our 24/7 client desk.
            </div>
          ) : (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-slate-100 dark:border-slate-800/80 rounded-2xl px-5 py-1 data-[state=open]:bg-slate-50/70 dark:data-[state=open]:bg-slate-800/40 transition-colors"
                >
                  <AccordionTrigger className="text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>

        {/* Bottom Help Desk CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-500/20">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg">Still have questions?</h4>
              <p className="text-white/80 text-xs sm:text-sm">
                Our global private bankers and support specialists are on call 24 hours a day.
              </p>
            </div>
          </div>
          <Button
            onClick={() => window.location.href = "/support"}
            className="bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl flex-shrink-0 shadow-md"
          >
            <span>Contact 24/7 Desk</span>
            <ArrowRight size={16} className="ml-1.5" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
