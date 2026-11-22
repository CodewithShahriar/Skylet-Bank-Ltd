import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight, CheckCircle2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const quickLinks = [
    { name: "Personal Checking & High-Yield", href: "/accounts" },
    { name: "Commercial & Corporate Treasury", href: "/accounts" },
    { name: "Sapphire & Corporate Credit Cards", href: "/cards" },
    { name: "Global Wire Transfers & FX", href: "/deposits-and-loans" },
    { name: "Smart Loan & EMI Calculators", href: "/#calculators" },
  ];

  const resources = [
    { name: "FDIC Insurance Disclosures", href: "/about-us" },
    { name: "SOC 2 Type II Security Report", href: "/about-us" },
    { name: "Schedule of Global Fees", href: "/support" },
    { name: "Fee-Free ATM Network Locator", href: "/support" },
    { name: "Whistleblower & Ethical Banking", href: "/about-us" },
  ];

  const locations = [
    { city: "New York (Global HQ)", address: "One World Trade Center, 68th Fl, New York, NY 10007" },
    { city: "London Operations", address: "25 Bank Street, Canary Wharf, London E14 5JP" },
    { city: "Singapore Asia-Pac Desk", address: "Marina Bay Financial Centre, Tower 2, Singapore 018981" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Top Newsletter & APY Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 mb-2">
                <ShieldCheck size={13} />
                <span>FDIC Insured Up To $250,000 (Extended Sweeps to $5M)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Subscribe to Skylet Market Intelligence & Macro Reports
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Receive weekly market recaps, Federal Reserve rate decisions, and treasury yield updates.
              </p>
            </div>

            <div className="md:col-span-5">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter corporate or personal email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button
                    type="submit"
                    className="btn-fintech-primary text-xs sm:text-sm px-5 flex-shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight size={14} className="ml-1" />
                  </Button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold bg-emerald-950/40 p-3 rounded-xl border border-emerald-800">
                  <CheckCircle2 size={16} />
                  <span>Subscribed! Welcome to Skylet Macro Advisory.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Links Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info (Left) */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 flex items-center justify-center text-white font-black text-base">
                S
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                SKYLET<span className="text-emerald-400">.</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                Global Bank Ltd
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Skylet Bank Ltd is a premier international and commercial digital banking institution.
              Member FDIC. Equal Housing Lender. NMLS #491028. Delivering institutional resilience,
              zero-markup FX transfers, and high-yield wealth management.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-emerald-400" />
                <span className="text-white font-medium">+1 (800) 555-SKYL (24/7 Global Desk)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-emerald-400" />
                <span>clientdesk@skyletbank.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Banking & Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance & Disclosures */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Governance & Safety
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {resources.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Presence */}
          <div className="col-span-2 md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-1.5">
              <Globe size={14} className="text-blue-400" />
              <span>International Hubs</span>
            </h4>
            {locations.map((loc, idx) => (
              <div key={idx} className="text-xs border-l-2 border-slate-800 pl-3">
                <p className="font-semibold text-slate-200">{loc.city}</p>
                <p className="text-slate-500 text-[11px] mt-0.5">{loc.address}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Regulatory Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-[11px] text-slate-500 space-y-3">
          <p className="leading-relaxed">
            Investment and insurance products are: NOT FDIC INSURED • MAY LOSE VALUE • NOT BANK GUARANTEED. 
            Banking services provided by Skylet Bank Ltd, Member FDIC. The Skylet Sapphire Reserve, Black Diamond Corporate, 
            and Mint Cards are issued pursuant to a license from Visa U.S.A. Inc. and Mastercard International. 
            Annual Percentage Yield (APY) is variable and subject to change after account opening.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2">
            <p>© {new Date().getFullYear()} Skylet Bank Ltd. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/about-us" className="hover:text-slate-300">Privacy Policy</Link>
              <Link to="/about-us" className="hover:text-slate-300">Terms of Service</Link>
              <Link to="/about-us" className="hover:text-slate-300">Security & Encryption</Link>
              <Link to="/support" className="hover:text-slate-300">Accessibility</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
