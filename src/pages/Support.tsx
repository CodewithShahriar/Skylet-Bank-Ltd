import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { LiveRatesTicker } from "@/components/LiveRatesTicker";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageSquare, Search, Clock, ShieldCheck, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketData, setTicketData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSubmitted(true);
  };

  const supportChannels = [
    {
      icon: Phone,
      title: "24/7 Global Telephone Desk",
      desc: "Direct toll-free access to our private banking and wire authorization officers.",
      detail: "+1 (800) 555-SKYL (US & Global)",
      badge: "Instant / 24-7",
    },
    {
      icon: MessageSquare,
      title: "Encrypted Mobile Live Chat",
      desc: "Connect securely with an authenticated relationship manager via mobile or web app.",
      detail: "Average response: < 90 seconds",
      badge: "Real-Time",
    },
    {
      icon: Mail,
      title: "Executive Client Inquiries",
      desc: "For institutional onboarding, wire tracing, and formal compliance correspondence.",
      detail: "clientdesk@skyletbank.com",
      badge: "Priority Queue",
    },
    {
      icon: ShieldCheck,
      title: "Emergency Fraud Hotline",
      desc: "Immediate intervention to pause accounts, freeze debit cards, or halt wires.",
      detail: "Option 1 from any Skylet hotline",
      badge: "Priority Emergency",
    },
  ];

  const globalBranches = [
    {
      name: "New York World Trade Center (Global HQ)",
      address: "One World Trade Center, 68th Fl, New York, NY 10007, United States",
      hours: "Monday – Friday: 9:00 AM – 5:00 PM EST",
      phone: "+1 (212) 555-0199",
      services: "Full Commercial Treasury, Private Banking Suites, Vault Services",
    },
    {
      name: "London Financial Hub",
      address: "25 Bank Street, Canary Wharf, London E14 5JP, United Kingdom",
      hours: "Monday – Friday: 9:00 AM – 5:00 PM GMT",
      phone: "+44 20 7946 0912",
      services: "Cross-Border FX Hedging, European Trade Services, Corporate Lending",
    },
    {
      name: "Singapore Asia-Pacific Center",
      address: "Marina Bay Financial Centre, Tower 2, Singapore 018981",
      hours: "Monday – Friday: 9:00 AM – 6:00 PM SGT",
      phone: "+65 6789 0123",
      services: "APAC Settlements, Multi-Currency Treasury, Wealth Management",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col font-sans">
      <Navbar />
      <LiveRatesTicker />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles size={14} />
            <span>Dedicated 24/7/365 Global Client Care</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            How May We Assist You Today?
          </h1>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our multi-lingual banking specialists, treasury managers, and fraud analysts stand ready around the clock.
          </p>

          <div className="max-w-md mx-auto pt-4 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none mt-2" />
            <Input
              type="text"
              placeholder="Search help topics (e.g., Wire Routing, Swift BIC, Card Lock)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-slate-950/90 border-slate-700 text-white placeholder:text-slate-400 h-12 rounded-2xl text-sm"
            />
          </div>
        </div>
      </section>

      {/* Support Channels Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-emerald-400 flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      {ch.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">{ch.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{ch.desc}</p>
                </div>
                <p className="font-mono text-xs font-bold text-blue-600 dark:text-emerald-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {ch.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Global Branches & Private Suites */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              International Offices & Advisory Suites
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Visit any of our flagship international locations for private consultations and institutional transactions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {globalBranches.map((b, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-blue-600 dark:text-emerald-400">
                  <MapPin size={18} />
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">{b.name}</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">{b.address}</p>
                <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                  <p className="flex items-center gap-1.5">
                    <Clock size={13} className="text-slate-400" />
                    <span>{b.hours}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone size={13} className="text-slate-400" />
                    <span>{b.phone}</span>
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    {b.services}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Send Secure Support Ticket */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              Submit an Encrypted Support Request
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Your inquiry will be assigned a priority tracking ticket within 15 minutes.
            </p>
          </div>

          {!ticketSubmitted ? (
            <form onSubmit={handleTicketSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="t-name" className="text-xs font-semibold mb-1 block">Full Name</Label>
                  <Input
                    id="t-name"
                    required
                    placeholder="Marcus Vance"
                    value={ticketData.name}
                    onChange={(e) => setTicketData({ ...ticketData, name: e.target.value })}
                    className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800"
                  />
                </div>
                <div>
                  <Label htmlFor="t-email" className="text-xs font-semibold mb-1 block">Account Email</Label>
                  <Input
                    id="t-email"
                    type="email"
                    required
                    placeholder="marcus@company.com"
                    value={ticketData.email}
                    onChange={(e) => setTicketData({ ...ticketData, email: e.target.value })}
                    className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="t-subject" className="text-xs font-semibold mb-1 block">Inquiry Type / Subject</Label>
                <Input
                  id="t-subject"
                  required
                  placeholder="e.g. International Wire Clearance Question"
                  value={ticketData.subject}
                  onChange={(e) => setTicketData({ ...ticketData, subject: e.target.value })}
                  className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800"
                />
              </div>

              <div>
                <Label htmlFor="t-message" className="text-xs font-semibold mb-1 block">Details</Label>
                <textarea
                  id="t-message"
                  required
                  rows={4}
                  placeholder="Please describe your question or issue in detail..."
                  value={ticketData.message}
                  onChange={(e) => setTicketData({ ...ticketData, message: e.target.value })}
                  className="w-full rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <Button type="submit" className="w-full btn-fintech-primary text-sm py-3 font-semibold">
                <span>Dispatch Priority Ticket</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Ticket Created #SKYL-8921</h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                A verification link and priority receipt have been sent to <strong>{ticketData.email}</strong>. Our on-duty desk officer will respond shortly.
              </p>
              <Button
                variant="outline"
                onClick={() => setTicketSubmitted(false)}
                className="text-xs mt-3"
              >
                Submit Another Request
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;
