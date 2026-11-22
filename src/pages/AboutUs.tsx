import React from "react";
import Navbar from "@/components/Navbar";
import { LiveRatesTicker } from "@/components/LiveRatesTicker";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Users,
  Award,
  Clock,
  MapPin,
  ShieldCheck,
  Globe,
  Building,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  Server,
  Zap,
  TrendingUp,
  FileCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const AboutUsPage: React.FC = () => {
  const milestones = [
    {
      year: "2016",
      title: "Founding & Federal Charter",
      desc: "Skylet Bank was established by veteran Wall Street technologists and risk managers to replace legacy correspondent banking delays with real-time digital liquidity.",
    },
    {
      year: "2019",
      title: "Transatlantic & Asian Hubs",
      desc: "Opened full-scale operational centers in London (Canary Wharf) and Singapore (Marina Bay), offering instant multi-currency settlement in 40+ fiat currencies.",
    },
    {
      year: "2022",
      title: "$5M Extended Cash Sweeps",
      desc: "Launched our proprietary Insured Cash Sweep (ICS) network, providing corporate clients with extended FDIC protection up to $5,000,000.",
    },
    {
      year: "2025",
      title: "AI Threat Shield & $48B Milestone",
      desc: "Crossed $48B in annual processed volume with 99.99% platform uptime and zero fraudulent wire loss under our Zero-Trust architecture.",
    },
  ];

  const leadership = [
    {
      name: "Julian Sterling",
      role: "Chief Executive Officer & Co-Founder",
      bio: "Former Global Head of Digital Treasury at Morgan Stanley with 22 years of commercial banking leadership across New York and London.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Aris Thorne",
      role: "Chief Information Security Officer",
      bio: "PhD in Cryptography from MIT. Former defense cybersecurity director overseeing military-grade critical financial infrastructure.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Claire Chen",
      role: "Chief Financial Officer",
      bio: "Former Senior Managing Director at Goldman Sachs, specializing in global balance sheet allocation, capital adequacy, and liquidity risk.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Marcus Vance",
      role: "Head of Global Corporate Treasury",
      bio: "18+ years orchestrating cross-border commercial foreign exchange, liquidity sweeps, and structured trade credit across Europe and Asia.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const awards = [
    {
      year: "2025",
      title: "Global Digital Bank of the Year",
      issuer: "FinTech Innovation Awards",
      desc: "Recognized for excellence in real-time cross-border settlements and high-yield treasury management.",
    },
    {
      year: "2024",
      title: "Excellence in Cloud Security",
      issuer: "Cyber Defense Financial Summit",
      desc: "Awarded for zero-trust tokenization, hardware biometric authentication, and SOC 2 Type II governance.",
    },
    {
      year: "2023",
      title: "Best Commercial Treasury Platform",
      issuer: "International Banking Review",
      desc: "Honored for our multi-entity cash sweep engine and seamless two-way ERP accounting synchronization.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col font-sans">
      <Navbar />
      <LiveRatesTicker />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles size={14} />
            <span>Chartered Commercial & Global Digital Banking</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
            Architecting the Future of <br className="hidden sm:inline" />
            <span className="text-gradient-mint">Global Financial Freedom.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Skylet Bank Ltd combines the regulatory fortitude of an established chartered institution with the velocity and elegance of next-generation financial software.
          </p>

          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">$48B+</p>
              <p className="text-xs text-slate-300 mt-1">Processed Volume</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <p className="text-2xl sm:text-3xl font-black text-blue-400 font-mono">160+</p>
              <p className="text-xs text-slate-300 mt-1">Countries Supported</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <p className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">99.99%</p>
              <p className="text-xs text-slate-300 mt-1">Uptime Availability</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <p className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">Member</p>
              <p className="text-xs text-slate-300 mt-1">FDIC #491028</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Global Headquarters Image Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Compelling Story */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-emerald-400">
              Our Origin & Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Built to Eliminate Borders from Commercial Finance
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Traditional legacy banks were engineered for a static, domestic world of paper ledger books and multi-day wire hold periods. In contrast, modern business is borderless, real-time, and operates 24/7/365.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded in New York, Skylet Bank was architected from the ground up on modern cryptographic infrastructure. We provide clients with direct access to central bank clearing systems, zero-markup mid-market FX rates, and high-yield treasury products that maximize return on every dollar held.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Direct Fedwire & SWIFT Integration
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Full Reserve Treasury Model
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  24/7 Dedicated Relationship Desk
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Extended $5M FDIC Cash Sweeps
                </span>
              </div>
            </div>
          </div>

          {/* Right: High-Res Glass Tower Headquarters Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Skylet Global Headquarters - New York"
                className="w-full h-[450px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <MapPin size={14} />
                  <span>One World Trade Center, 68th Fl, New York, NY</span>
                </div>
                <p className="text-sm font-bold text-white mt-1">Skylet Financial Group Global Headquarters</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Institutional Values */}
      <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Our Operating Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              The Principles That Guide Every Decision
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Uncompromising standards in technology, customer stewardship, and risk governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Cryptographic Security</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  We treat data security as an existential mandate. End-to-end tokenization, FIDO2 biometric authentication, and air-gapped cold storage.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Frictionless Velocity</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  No multi-day holds or physical paperwork. Instant digital account opening, real-time wire clearance, and automated API-driven treasury.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                  <FileCheck size={24} />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Fiduciary Transparency</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Zero hidden maintenance charges, zero foreign exchange conversion markups, and completely transparent fixed-rate yields.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                  <Globe size={24} />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Global Borderless Access</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Empowering founders and global citizens across 160+ countries to access first-tier US dollar and multi-currency banking infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Cloud Infrastructure & Data Centers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="Skylet Global Tier IV Financial Data Center"
                className="w-full h-[420px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-300">Infrastructure Resilience</p>
                  <p className="text-lg font-bold text-emerald-400">Tier IV Multi-Region Redundancy</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  99.99% Core SLA
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-emerald-400">
              Technology Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Institutional Resilience Built on Modern Cloud Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Unlike legacy banks that rely on mainframe systems from the 1980s, Skylet’s core ledger is distributed across triple-redundant Tier IV data centers in North America, Western Europe, and Asia-Pacific.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Continuous real-time ledger replication with zero single points of failure</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Sub-second payment settlement engine powered by modern ISO 20022 messaging</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>24/7 Security Operations Center (SOC) with automated threat anomaly detection</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Executive Leadership Grid */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Executive Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Led by Veteran Financial Stewards
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Our executive board brings decades of tier-one institutional banking, technology, and compliance experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((exec, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="h-56 w-full overflow-hidden relative">
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-extrabold text-white text-base leading-tight">{exec.name}</h3>
                    <p className="text-[11px] text-emerald-400 font-medium">{exec.role}</p>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {exec.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-emerald-400">
            Industry Accolades
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Recognized by Global Financial Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">{award.year}</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">{award.title}</h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-emerald-400 mb-2">{award.issuer}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{award.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 text-white px-4 sm:px-6 lg:px-8 text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Experience the Next Standard of Banking?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Join over 150,000 global enterprises and wealth builders. Open your digital account today in under 3 minutes.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link to="/accounts" className="btn-fintech-primary text-sm px-7 py-3">
              <span>Open Global Account</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/support" className="btn-fintech-secondary text-sm px-6 py-3">
              <span>Contact 24/7 Advisory Desk</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
