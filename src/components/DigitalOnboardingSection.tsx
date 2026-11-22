import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, UserCheck, Sparkles, Building, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DigitalOnboardingSection: React.FC = () => {
  const [accountType, setAccountType] = useState<"personal" | "commercial">("personal");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    entityName: "",
    jurisdiction: "United States (Domestic)",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Perks */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sparkles size={14} />
              <span>Instant Paperless Digital Onboarding</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Open Your Global Multi-Currency Account in Under{" "}
              <span className="text-gradient-mint">3 Minutes.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Experience the next standard of digital banking. Zero branch visits required.
              Complete identity verification digitally, receive your virtual debit card instantly,
              and start earning 5.25% APY on day one.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <span>Zero opening fees, zero monthly maintenance fees with minimum balance</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <span>Immediate access to Apple Pay, Google Pay & virtual card generators</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <span>FDIC Insured protection up to $250k (Cash sweeps to $5M for entities)</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>256-bit Encryption</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock size={16} className="text-blue-400" />
                <span>Biometric Security</span>
              </div>
              <div className="flex items-center gap-1.5">
                <UserCheck size={16} className="text-cyan-400" />
                <span>Instant Soft Check</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Digital Application Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 backdrop-blur-xl p-7 sm:p-8 rounded-3xl border border-slate-700/80 shadow-2xl relative">
              
              {/* Type Switcher */}
              <div className="flex rounded-xl bg-slate-950 p-1 mb-6 border border-slate-800">
                <button
                  type="button"
                  onClick={() => setAccountType("personal")}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                    accountType === "personal"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Personal Wealth Account
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType("commercial")}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                    accountType === "commercial"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Commercial & Entity
                </button>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {accountType === "commercial" && (
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Legal Business / Entity Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Holdings LLC"
                        value={formData.entityName}
                        onChange={(e) => setFormData({ ...formData, entityName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Legal Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Hamilton"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number (Mobile for SMS 2FA)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Primary Operating Jurisdiction
                    </label>
                    <select
                      value={formData.jurisdiction}
                      onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>United States (Domestic)</option>
                      <option>United Kingdom & EU</option>
                      <option>Canada</option>
                      <option>Singapore & Asia-Pacific</option>
                      <option>International / Cross-Border</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="btn-fintech-primary w-full py-3 text-sm mt-2 font-semibold shadow-lg shadow-blue-500/25"
                  >
                    <span>Begin Secure Onboarding</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Button>

                  <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                    By proceeding, you agree to Skylet Bank's E-Sign Disclosure and privacy policy. 
                    No credit check required to open deposit accounts.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Application Received!</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. A verification link and your provisional account routing profile have been dispatched to{" "}
                    <strong className="text-emerald-400">{formData.email}</strong>.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-xs px-4 py-2 mt-4"
                  >
                    Start Another Application
                  </Button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalOnboardingSection;
