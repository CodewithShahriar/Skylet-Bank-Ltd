import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CreditCard,
  Building2,
  Lock,
  Upload,
  Sparkles,
  Copy,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export interface AccountOpeningModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAccountType?: string;
}

export const AccountOpeningModal: React.FC<AccountOpeningModalProps> = ({
  isOpen,
  onClose,
  defaultAccountType = "High-Yield Premier Savings (5.25% APY)",
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    accountType: defaultAccountType,
    initialDeposit: "1000",
    cardPreference: "Virtual Instant + Sapphire Metal",
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    country: "United States",
    idType: "Passport",
    idNumber: "",
    twoFactor: true,
    paperless: true,
  });

  // Verification Animation State
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);

  // Generated Details
  const [accountDetails, setAccountDetails] = useState({
    accountNumber: "SKY-4829-1928-8920",
    routingNumber: "021000089",
    swiftBic: "SKYLUS33XXX",
    accountHolder: "",
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep === 2) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert("Please fill in your name, email, and phone number.");
        return;
      }
    }
    if (currentStep === 3) {
      // Trigger Verification
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        setVerificationComplete(true);
        setAccountDetails({
          accountNumber: `SKY-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(
            1000 + Math.random() * 9000
          )}-${Math.floor(1000 + Math.random() * 9000)}`,
          routingNumber: "021000089",
          swiftBic: "SKYLUS33XXX",
          accountHolder: formData.fullName.toUpperCase() || "VALUED CLIENT",
        });
        setCurrentStep(4);
      }, 2000);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm">
              S
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-tight">
                Skylet Digital Account Application
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                FDIC-Insured • Paperless Instant Clearance
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="px-6 pt-4 pb-2">
          <div className="flex items-center justify-between text-xs font-semibold mb-2">
            <span className={currentStep >= 1 ? "text-blue-600 dark:text-emerald-400 font-bold" : "text-slate-400"}>
              1. Account Type
            </span>
            <span className={currentStep >= 2 ? "text-blue-600 dark:text-emerald-400 font-bold" : "text-slate-400"}>
              2. Personal Info
            </span>
            <span className={currentStep >= 3 ? "text-blue-600 dark:text-emerald-400 font-bold" : "text-slate-400"}>
              3. Preferences
            </span>
            <span className={currentStep >= 4 ? "text-emerald-600 dark:text-emerald-400 font-bold" : "text-slate-400"}>
              4. Confirmation
            </span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Body Content with Scroll */}
        <div className="p-6 overflow-y-auto flex-1">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: ACCOUNT SELECTION */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Choose Account Tier
                  </label>
                  <div className="space-y-2">
                    {[
                      {
                        name: "High-Yield Premier Savings (5.25% APY)",
                        desc: "Compounded daily, $0 monthly fee, FDIC insured to $250k",
                        tag: "Highest Yield",
                      },
                      {
                        name: "Smart Global Checking (Zero FX Markup)",
                        desc: "Free World Debit card, 55,000+ fee-free ATMs, mobile deposit",
                        tag: "Most Popular",
                      },
                      {
                        name: "Commercial Treasury Account ($5M FDIC Sweeps)",
                        desc: "Multi-user access control, payroll integration & automated FX",
                        tag: "Enterprise",
                      },
                      {
                        name: "Global Multi-Currency IBAN Account (40+ Currencies)",
                        desc: "Local US, UK, EU routing numbers with mid-market wire rates",
                        tag: "Global",
                      },
                    ].map((acc) => (
                      <div
                        key={acc.name}
                        onClick={() => setFormData({ ...formData, accountType: acc.name })}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          formData.accountType === acc.name
                            ? "border-blue-600 bg-blue-50/60 dark:bg-blue-950/40 dark:border-blue-500 ring-2 ring-blue-500/20"
                            : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-sm text-slate-900 dark:text-white">{acc.name}</h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                              {acc.tag}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{acc.desc}</p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ml-3 ${
                            formData.accountType === acc.name
                              ? "border-blue-600 bg-blue-600 text-white"
                              : "border-slate-300 dark:border-slate-600"
                          }`}
                        >
                          {formData.accountType === acc.name && <Check size={12} strokeWidth={3} />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Initial Deposit Target ($ USD)
                    </label>
                    <select
                      value={formData.initialDeposit}
                      onChange={(e) => setFormData({ ...formData, initialDeposit: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white"
                    >
                      <option value="100">$100 (Starter Deposit)</option>
                      <option value="500">$500</option>
                      <option value="1000">$1,000 (Recommended)</option>
                      <option value="5000">$5,000 (Premium Rewards)</option>
                      <option value="25000">$25,000+ (Treasury Priority)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Debit Card Preference
                    </label>
                    <select
                      value={formData.cardPreference}
                      onChange={(e) => setFormData({ ...formData, cardPreference: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white"
                    >
                      <option value="Virtual Instant + Sapphire Metal">Instant Virtual + Sapphire Metal Card</option>
                      <option value="Virtual Only">Virtual Card Only (100% Digital)</option>
                      <option value="Black Diamond Corporate">Black Diamond Titanium Card</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: PERSONAL & IDENTITY DETAILS */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Legal Full Name (Matching Official ID)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Hamilton"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Number (For SMS 2FA)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Country of Residence
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white"
                    >
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Germany</option>
                      <option>Singapore</option>
                      <option>Australia</option>
                      <option>Other International</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Identification Document Type
                    </label>
                    <select
                      value={formData.idType}
                      onChange={(e) => setFormData({ ...formData, idType: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white"
                    >
                      <option>Passport</option>
                      <option>Driver's License</option>
                      <option>National Identity Card</option>
                      <option>Corporate Tax ID / EIN</option>
                    </select>
                  </div>
                </div>

                {/* Simulated Document Upload */}
                <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center bg-slate-50/50 dark:bg-slate-950/40 hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                  <Upload size={20} className="mx-auto text-blue-500 mb-1" />
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Upload photo of your {formData.idType}
                  </p>
                  <p className="text-[11px] text-slate-400">JPG, PNG, or PDF up to 10MB (Simulated Instant OCR)</p>
                </div>
              </motion.div>
            )}

            {/* STEP 3: PREFERENCES & SECURITY */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-4"
              >
                {isVerifying ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full border-4 border-blue-600 border-t-transparent animate-spin mx-auto"></div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      Verifying Identity & Generating Account...
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Automated soft credit check & federal FDIC routing allocation in progress.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-blue-900 dark:text-blue-200">
                            Automated Verification Ready
                          </h4>
                          <p className="text-[11px] text-blue-700 dark:text-blue-300 mt-0.5">
                            No hard inquiry will be recorded on your credit report. Zero risk to your credit score.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                        <div>
                          <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                            Two-Factor Biometric Authorization
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            Require SMS/FaceID validation for wire transfers and password changes
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          checked={formData.twoFactor}
                          onChange={(e) => setFormData({ ...formData, twoFactor: e.target.checked })}
                          className="w-4 h-4 accent-blue-600 rounded"
                        />
                      </div>

                      <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                        <div>
                          <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                            Paperless Statements & Tax Reporting
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            Receive encrypted PDF statements and IRS 1099-INT electronically
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          checked={formData.paperless}
                          onChange={(e) => setFormData({ ...formData, paperless: e.target.checked })}
                          className="w-4 h-4 accent-blue-600 rounded"
                        />
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      By clicking "Confirm & Open Account", you certify under penalty of perjury that the information provided is correct, and agree to Skylet Bank Ltd's Account Agreement and Electronic Disclosure Policy.
                    </div>
                  </>
                )}
              </motion.div>
            )}

            {/* STEP 4: SUCCESS CONFIRMATION & CREDENTIAL GENERATION */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-5 text-center py-2"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 size={36} />
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                    Application Approved • Account Active
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
                    Welcome to Skylet Bank, {formData.fullName || "Partner"}!
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Your {formData.accountType} has been provisioned under FDIC Member ID #491028.
                  </p>
                </div>

                {/* Provisioned Account Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white text-left space-y-3 font-mono shadow-xl border border-white/10">
                  <div className="flex justify-between items-center text-xs text-slate-400 border-b border-white/10 pb-2">
                    <span>OFFICIAL ROUTING PROFILE</span>
                    <span className="text-emerald-400 font-sans font-bold text-[10px]">VERIFIED</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-[10px] text-slate-400">Account Holder</p>
                      <p className="font-bold text-white uppercase truncate">{accountDetails.accountHolder}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">Account Type</p>
                      <p className="font-bold text-emerald-400 uppercase truncate">High-Yield Deposit</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">Account Number</p>
                      <div className="flex items-center gap-1.5 font-bold text-white">
                        <span>{accountDetails.accountNumber}</span>
                        <button
                          onClick={() => handleCopy(accountDetails.accountNumber)}
                          className="text-slate-400 hover:text-white"
                          title="Copy Account Number"
                        >
                          <Copy size={12} />
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">Routing Number (ACH / Wire)</p>
                      <p className="font-bold text-white">{accountDetails.routingNumber}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">SWIFT / BIC (International)</p>
                      <p className="font-bold text-white">{accountDetails.swiftBic}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">Initial Deposit Status</p>
                      <p className="font-bold text-emerald-400">${formData.initialDeposit} Pledged</p>
                    </div>
                  </div>
                </div>

                {copied && (
                  <p className="text-xs text-emerald-500 font-semibold">Account Number copied to clipboard!</p>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    to="/sign-in"
                    onClick={onClose}
                    className="w-full btn-fintech-primary py-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Access Client Portal Now</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Button
                    variant="outline"
                    onClick={onClose}
                    className="w-full text-xs sm:text-sm py-3"
                  >
                    Close Window
                  </Button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Bottom Navigation Buttons */}
        {currentStep < 4 && !isVerifying && (
          <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex justify-between items-center">
            {currentStep > 1 ? (
              <Button
                variant="outline"
                onClick={handleBack}
                className="text-xs sm:text-sm px-4 py-2"
              >
                <ArrowLeft size={14} className="mr-1.5" />
                <span>Back</span>
              </Button>
            ) : (
              <div></div>
            )}

            <Button
              onClick={handleNext}
              className="btn-fintech-primary text-xs sm:text-sm px-5 py-2.5 font-semibold"
            >
              <span>{currentStep === 3 ? "Confirm & Open Account" : "Continue"}</span>
              <ArrowRight size={14} className="ml-1.5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountOpeningModal;
