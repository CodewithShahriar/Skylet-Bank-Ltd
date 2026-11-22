import React from "react";
import Navbar from "@/components/Navbar";
import { LiveRatesTicker } from "@/components/LiveRatesTicker";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, MapPin, ShieldCheck, Globe, Building, Sparkles, CheckCircle2 } from "lucide-react";

export const AboutUsPage: React.FC = () => {
  const milestones = [
    { year: "2016", title: "Chartered & Launched", desc: "Skylet Bank was founded with a mission to bridge institutional-grade security with modern digital fintech velocity." },
    { year: "2019", title: "Global Expansion", desc: "Established international operational hubs in London and Singapore, providing real-time multi-currency settlement." },
    { year: "2022", title: "SOC 2 Type II & Extended Sweeps", desc: "Launched extended $5M FDIC cash sweep program and achieved top-tier global enterprise compliance." },
    { year: "2025", title: "AI-Powered Threat Shield", desc: "Processed over $48B in annual volume while maintaining 99.99% uptime and zero fraudulent wire losses." },
  ];

  const leadership = [
    { name: "Julian Sterling", title: "Chief Executive Officer", bio: "Former Global Head of Digital Treasury at Morgan Stanley, with 22 years of commercial banking leadership." },
    { name: "Dr. Aris Thorne", title: "Chief Information Security Officer", bio: "PhD in Cryptography from MIT. Former defense cybersecurity director overseeing critical financial infrastructure." },
    { name: "Claire Chen", title: "Chief Financial Officer", bio: "Senior managing director at Goldman Sachs, specializing in global liquidity routing and balance sheet risk." },
    { name: "Sarah Vance", title: "Head of International Client Desk", bio: "15+ years orchestrating cross-border corporate foreign exchange and private client advisory in London and Zurich." },
  ];

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
              <span>Chartered Commercial & Global Digital Banking</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Architecting the Future of Global Finance
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Skylet Bank Ltd combines the regulatory rigor of a top-tier chartered bank with the seamless, API-driven elegance of modern financial software.
            </p>
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" />
                <span>Global HQ: New York, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-emerald-400" />
                <span>Operating in 160+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-purple-400" />
                <span>Member FDIC • Equal Housing Lender</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/80 shadow-2xl space-y-4 w-full max-w-md">
              <h3 className="font-bold text-base text-white border-b border-slate-800 pb-2">
                Institutional Milestones
              </h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <p className="text-2xl font-black text-emerald-400 font-mono">$48 Billion+</p>
                  <p className="text-slate-400">Total processed global transactions</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-blue-400 font-mono">150,000+</p>
                  <p className="text-slate-400">Active corporate & private accounts</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-purple-400 font-mono">99.99%</p>
                  <p className="text-slate-400">Core banking platform availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To eliminate friction, opaque fees, and settlement delays in international and commercial banking. We empower enterprises and individuals to deploy capital globally with complete security, real mid-market exchange rates, and automated treasury yields.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To be the most resilient and technologically advanced global financial bridge—providing borders-free digital liquidity, institutional compliance, and unwavering client advocacy across every continent.
            </p>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              Our Journey of Innovation
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              A track record of stability, security advancements, and sustained growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="font-mono text-2xl font-black text-blue-600 dark:text-emerald-400 block mb-2">
                  {m.year}
                </span>
                <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1.5">{m.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              Executive Leadership
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Seasoned veteran bankers, technologists, and risk managers from premier institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((l, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">{l.name}</h4>
                  <p className="text-xs font-semibold text-blue-600 dark:text-emerald-400 mb-3">{l.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
