import React, { useState, useId } from "react";
import { Calculator, ArrowRight, DollarSign, PiggyBank, RefreshCw, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const FinancialCalculators: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"loan" | "savings" | "fx">("loan");

  // Loan State
  const [loanAmount, setLoanAmount] = useState<number>(250000);
  const [loanTermYears, setLoanTermYears] = useState<number>(15);
  const [interestRate, setInterestRate] = useState<number>(6.5);

  // Savings State
  const [initialDeposit, setInitialDeposit] = useState<number>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [savingsYears, setSavingsYears] = useState<number>(5);
  const [apyRate, setApyRate] = useState<number>(5.25);

  // FX Converter State
  const [fromAmount, setFromAmount] = useState<number>(5000);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");

  const fxRates: Record<string, number> = {
    USD: 1.0,
    EUR: 0.922,
    GBP: 0.774,
    JPY: 154.6,
    CAD: 1.382,
    CHF: 0.887,
    AUD: 1.512,
    SGD: 1.328,
  };

  // Loan Calculation (EMI formula: P * r * (1+r)^n / ((1+r)^n - 1))
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanTermYears * 12;
  const monthlyPayment =
    monthlyRate > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : loanAmount / totalMonths;

  const totalLoanRepayment = monthlyPayment * totalMonths;
  const totalInterestPaid = totalLoanRepayment - loanAmount;
  const principalPercentage = Math.round((loanAmount / totalLoanRepayment) * 100) || 50;
  const interestPercentage = 100 - principalPercentage;

  // Savings Compounding Calculation
  // FV = P * (1 + r/12)^(12*t) + PMT * [((1 + r/12)^(12*t) - 1) / (r/12)]
  const savingsMonthlyRate = apyRate / 100 / 12;
  const savingsTotalMonths = savingsYears * 12;
  const compoundInitial = initialDeposit * Math.pow(1 + savingsMonthlyRate, savingsTotalMonths);
  const compoundContributions =
    monthlyContribution *
    ((Math.pow(1 + savingsMonthlyRate, savingsTotalMonths) - 1) / savingsMonthlyRate);
  const totalSavingsBalance = Math.round(compoundInitial + compoundContributions);
  const totalPrincipalDeposited = initialDeposit + monthlyContribution * savingsTotalMonths;
  const totalInterestEarned = Math.max(0, totalSavingsBalance - totalPrincipalDeposited);

  // FX Conversion
  const convertedAmount = ((fromAmount / fxRates[fromCurrency]) * fxRates[toCurrency]).toFixed(2);

  return (
    <section id="calculators" className="py-20 bg-slate-50/80 dark:bg-slate-900/80 relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Financial Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Simulate Your Financial Future in Real-Time
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Transparent, institutional-grade calculators. Calculate exact loan payments, forecast compounding savings yields, or simulate cross-border FX conversions.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => setActiveTab("loan")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "loan"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Loan & Mortgage EMI</span>
            </button>
            <button
              onClick={() => setActiveTab("savings")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "savings"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <PiggyBank className="w-4 h-4" />
              <span>High-Yield Savings & CD</span>
            </button>
            <button
              onClick={() => setActiveTab("fx")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "fx"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>Global FX Wire Rates</span>
            </button>
          </div>
        </div>

        {/* Active Tool Content */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl">
          
          {/* TAB 1: LOAN & MORTGAGE */}
          {activeTab === "loan" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* Sliders Area (Left) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Loan Amount ($ USD)
                    </label>
                    <span className="font-mono text-base font-bold text-blue-600 dark:text-emerald-400">
                      ${loanAmount.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="1500000"
                    step="5000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                    <span>$10,000</span>
                    <span>$750,000</span>
                    <span>$1,500,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Loan Term (Years)
                    </label>
                    <span className="font-mono text-base font-bold text-blue-600 dark:text-emerald-400">
                      {loanTermYears} Years ({loanTermYears * 12} Months)
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[5, 10, 15, 30].map((yr) => (
                      <button
                        key={yr}
                        onClick={() => setLoanTermYears(yr)}
                        className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                          loanTermYears === yr
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                        }`}
                      >
                        {yr} Yrs
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Interest Rate (Annual APR)
                    </label>
                    <span className="font-mono text-base font-bold text-blue-600 dark:text-emerald-400">
                      {interestRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3.0"
                    max="14.0"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                    <span>3.0% (Prime)</span>
                    <span>8.5% (Average)</span>
                    <span>14.0%</span>
                  </div>
                </div>
              </div>

              {/* Summary Breakdown (Right) */}
              <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Estimated Monthly Payment
                  </p>
                  <p className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-emerald-400 font-mono mb-4">
                    ${Math.round(monthlyPayment).toLocaleString()}{" "}
                    <span className="text-xs font-normal text-slate-500">/ mo</span>
                  </p>

                  <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>Total Principal:</span>
                      <span className="font-bold text-slate-900 dark:text-white font-mono">
                        ${loanAmount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>Total Interest Payable:</span>
                      <span className="font-bold text-slate-900 dark:text-white font-mono">
                        ${Math.round(totalInterestPaid).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-2 font-semibold">
                      <span>Total Payment Over Term:</span>
                      <span className="text-slate-900 dark:text-white font-mono">
                        ${Math.round(totalLoanRepayment).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Ratio Bar */}
                  <div className="mt-5 space-y-1.5">
                    <div className="flex justify-between text-[11px] font-medium text-slate-500">
                      <span>Principal ({principalPercentage}%)</span>
                      <span>Interest ({interestPercentage}%)</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
                      <div
                        style={{ width: `${principalPercentage}%` }}
                        className="bg-blue-600 h-full"
                      ></div>
                      <div
                        style={{ width: `${interestPercentage}%` }}
                        className="bg-emerald-500 h-full"
                      ></div>
                    </div>
                  </div>
                </div>

                <Button className="btn-fintech-primary w-full mt-6 text-xs sm:text-sm">
                  <span>Apply for Pre-Approval</span>
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* TAB 2: SAVINGS & CD GROWTH */}
          {activeTab === "savings" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Initial Deposit ($ USD)
                    </label>
                    <span className="font-mono text-base font-bold text-emerald-600 dark:text-emerald-400">
                      ${initialDeposit.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={initialDeposit}
                    onChange={(e) => setInitialDeposit(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Monthly Contribution ($ USD)
                    </label>
                    <span className="font-mono text-base font-bold text-emerald-600 dark:text-emerald-400">
                      ${monthlyContribution.toLocaleString()} / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Years to Grow: {savingsYears} Yrs
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={savingsYears}
                      onChange={(e) => setSavingsYears(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      APY Rate: {apyRate}%
                    </label>
                    <input
                      type="range"
                      min="2.0"
                      max="7.0"
                      step="0.05"
                      value={apyRate}
                      onChange={(e) => setApyRate(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Future Accumulated Wealth
                  </p>
                  <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono mb-4">
                    ${totalSavingsBalance.toLocaleString()}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>Total You Deposited:</span>
                      <span className="font-bold text-slate-900 dark:text-white font-mono">
                        ${totalPrincipalDeposited.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
                      <span>Pure Interest Earned:</span>
                      <span className="font-mono">+${totalInterestEarned.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-500 text-xs pt-2 border-t border-slate-200 dark:border-slate-800">
                      <span>FDIC Insured Protection:</span>
                      <span className="text-emerald-500 font-semibold">100% Guaranteed</span>
                    </div>
                  </div>
                </div>

                <Button className="btn-fintech-primary w-full mt-6 text-xs sm:text-sm">
                  <span>Open 5.25% APY Account</span>
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* TAB 3: FX RATES CONVERTER */}
          {activeTab === "fx" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4 items-center">
                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    You Send
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={fromAmount}
                      onChange={(e) => setFromAmount(Math.max(1, Number(e.target.value)))}
                      className="w-full text-2xl font-bold bg-transparent border-none text-slate-900 dark:text-white focus:outline-none font-mono"
                    />
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm px-3 py-2 rounded-xl"
                    >
                      {Object.keys(fxRates).map((curr) => (
                        <option key={curr} value={curr}>
                          {curr}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Recipient Receives (Zero Markup)
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="w-full text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                      {convertedAmount}
                    </div>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm px-3 py-2 rounded-xl"
                    >
                      {Object.keys(fxRates).map((curr) => (
                        <option key={curr} value={curr}>
                          {curr}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-900 dark:text-blue-200 gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>
                    Mid-Market Rate: 1 {fromCurrency} = {(fxRates[toCurrency] / fxRates[fromCurrency]).toFixed(4)} {toCurrency} (Zero Wire Commission)
                  </span>
                </div>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Estimated Delivery: Same Day
                </span>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

export default FinancialCalculators;
