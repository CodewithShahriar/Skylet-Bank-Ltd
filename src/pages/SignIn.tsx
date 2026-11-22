import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { LiveRatesTicker } from "@/components/LiveRatesTicker";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Lock,
  ShieldCheck,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  Building2,
  Sparkles,
  CheckCircle2,
  Fingerprint,
  Key,
  ShieldAlert,
  Loader2,
  HelpCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const [portalType, setPortalType] = useState<"personal" | "corporate">("personal");
  const [accountId, setAccountId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [authStep, setAuthStep] = useState<"credentials" | "2fa" | "success">("credentials");
  const [otpCode, setOtpCode] = useState(["", "", "", "", "", ""]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleDemoFill = (type: "personal" | "corporate") => {
    setPortalType(type);
    if (type === "personal") {
      setAccountId("alex.chen@skyletclient.com");
      setPassword("SkyletSecure2025!");
    } else {
      setAccountId("treasury.admin@apexlogistics.com");
      setPassword("CorpVault#9942");
    }
    setErrorMsg("");
  };

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountId || !password) {
      setErrorMsg("Please enter both your Account ID/Email and password.");
      return;
    }
    setErrorMsg("");
    setIsLoading(true);

    // Simulate cryptographic challenge verification
    setTimeout(() => {
      setIsLoading(false);
      setAuthStep("2fa");
    }, 900);
  };

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) val = val[0];
    const newCode = [...otpCode];
    newCode[index] = val;
    setOtpCode(newCode);

    // Auto-advance
    if (val && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerify2Fa = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAuthStep("success");
    }, 1100);
  };

  const handleBiometricAuth = () => {
    setIsLoading(true);
    setErrorMsg("");
    setTimeout(() => {
      setIsLoading(false);
      setAuthStep("success");
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <LiveRatesTicker />

      <main className="flex-1 flex flex-col justify-center items-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="w-full max-w-md relative z-10 space-y-6">
          
          {/* Top Brand Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>256-bit Encrypted Client Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Sign In to Skylet Online
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Access your global accounts, domestic wire routing, and corporate treasury.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-2xl">
            
            {/* Step 1: Credentials Form */}
            {authStep === "credentials" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Account Type Tabs */}
                <div className="flex rounded-xl bg-slate-100 dark:bg-slate-950 p-1 mb-6 border border-slate-200 dark:border-slate-800 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setPortalType("personal")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg transition-all ${
                      portalType === "personal"
                        ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-emerald-400 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <User size={14} />
                    <span>Personal Wealth</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPortalType("corporate")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg transition-all ${
                      portalType === "corporate"
                        ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-emerald-400 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <Building2 size={14} />
                    <span>Corporate Treasury</span>
                  </button>
                </div>

                {errorMsg && (
                  <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
                    <ShieldAlert size={16} className="flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleCredentialsSubmit} className="space-y-4">
                  {/* Account ID / Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      {portalType === "personal" ? "Email Address or Username" : "Corporate ID / Work Email"}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={accountId}
                        onChange={(e) => setAccountId(e.target.value)}
                        placeholder={portalType === "personal" ? "alex@example.com" : "treasury@company.com"}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-emerald-400"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                        Password
                      </label>
                      <Link
                        to="/support"
                        className="text-[11px] font-semibold text-blue-600 dark:text-emerald-400 hover:underline"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-emerald-400 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Device & Security */}
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 dark:text-slate-400">
                      <input
                        type="checkbox"
                        checked={rememberDevice}
                        onChange={(e) => setRememberDevice(e.target.checked)}
                        className="rounded border-slate-300 dark:border-slate-700 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Remember this trusted device</span>
                    </label>
                  </div>

                  {/* Sign In CTA */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-fintech-primary py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Verifying Security Token...</span>
                      </>
                    ) : (
                      <>
                        <span>Continue to Portal</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </Button>
                </form>

                {/* Biometric Passkey Divider */}
                <div className="relative my-6 text-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                  </div>
                  <span className="relative bg-white dark:bg-slate-900 px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Or Sign In With
                  </span>
                </div>

                {/* FIDO2 Biometric Button */}
                <button
                  type="button"
                  onClick={handleBiometricAuth}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Fingerprint size={18} className="text-emerald-500" />
                  <span>Passkey / Biometric Touch ID</span>
                </button>

                {/* Instant Demo Accounts Picker */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Quick Demo Credentials
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <button
                      type="button"
                      onClick={() => handleDemoFill("personal")}
                      className="p-2 rounded-lg bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 text-blue-700 dark:text-blue-300 text-left font-medium hover:border-blue-400 transition-colors"
                    >
                      <span className="font-bold block">Private Wealth</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">One-click test fill</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDemoFill("corporate")}
                      className="p-2 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-left font-medium hover:border-emerald-400 transition-colors"
                    >
                      <span className="font-bold block">Corp Treasury</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">One-click test fill</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: 2FA Verification */}
            {authStep === "2fa" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div className="text-center space-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-500 flex items-center justify-center mx-auto mb-3 border border-emerald-500/20">
                    <Key size={22} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    Two-Factor Verification
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    We sent a 6-digit confirmation token to your registered hardware device or authenticator app.
                  </p>
                </div>

                <form onSubmit={handleVerify2Fa} className="space-y-4">
                  {/* 6 Digit Inputs */}
                  <div className="flex justify-center gap-2">
                    {otpCode.map((digit, idx) => (
                      <input
                        key={idx}
                        id={`otp-input-${idx}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        className="w-11 h-12 text-center font-mono text-lg font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    ))}
                  </div>

                  <p className="text-center text-[11px] text-slate-400">
                    Tip: Enter any 6 numbers to simulate instant verification.
                  </p>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-fintech-primary py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Authorizing Session...</span>
                      </>
                    ) : (
                      <>
                        <span>Verify & Enter Portal</span>
                        <CheckCircle2 size={16} />
                      </>
                    )}
                  </Button>

                  <button
                    type="button"
                    onClick={() => setAuthStep("credentials")}
                    className="w-full text-center text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 mt-2"
                  >
                    Back to credentials
                  </button>
                </form>
              </motion.div>
            )}

            {/* Step 3: Success State */}
            {authStep === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-500 flex items-center justify-center mx-auto border-2 border-emerald-500">
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    Session Authenticated!
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Encrypted channel established. Welcome back, {portalType === "personal" ? "Alexander Chen" : "Treasury Admin"}.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-left text-xs space-y-1">
                  <div className="flex justify-between text-slate-500">
                    <span>Client Tier:</span>
                    <strong className="text-slate-900 dark:text-white font-mono">
                      {portalType === "personal" ? "Skylet Private Wealth" : "Institutional Corporate"}
                    </strong>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Routing Node:</span>
                    <strong className="text-emerald-500 font-mono">NYC Fedwire Primary</strong>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Deposit Protection:</span>
                    <strong className="text-slate-900 dark:text-white font-mono">
                      {portalType === "personal" ? "$250,000 FDIC" : "$5,000,000 Cash Sweep"}
                    </strong>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    to="/accounts"
                    className="w-full btn-fintech-primary text-xs sm:text-sm py-2.5 flex items-center justify-center gap-1.5"
                  >
                    <span>View Account Balances & Yields</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Button
                    variant="outline"
                    onClick={() => setAuthStep("credentials")}
                    className="w-full text-xs"
                  >
                    Sign Out & Return
                  </Button>
                </div>
              </motion.div>
            )}

          </div>

          {/* New Account Link */}
          <div className="text-center space-y-2 text-xs text-slate-500 dark:text-slate-400">
            <p>
              Don't have a Skylet account yet?{" "}
              <Link to="/accounts" className="font-bold text-blue-600 dark:text-emerald-400 hover:underline">
                Open Global Account in 3 mins
              </Link>
            </p>
            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck size={13} className="text-emerald-500" />
                FDIC Insured
              </span>
              <span>•</span>
              <span>SOC 2 Type II Certified</span>
              <span>•</span>
              <Link to="/support" className="hover:underline flex items-center gap-1">
                <HelpCircle size={13} />
                24/7 Security Help
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignInPage;
