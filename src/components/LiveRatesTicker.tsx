import React from "react";
import { TrendingUp, TrendingDown, Globe, ShieldCheck } from "lucide-react";

export const LiveRatesTicker: React.FC = () => {
  const rates = [
    { pair: "EUR / USD", rate: "1.0842", change: "+0.18%", up: true },
    { pair: "GBP / USD", rate: "1.2915", change: "-0.09%", up: false },
    { pair: "USD / JPY", rate: "154.60", change: "+0.32%", up: true },
    { pair: "USD / CAD", rate: "1.3820", change: "+0.04%", up: true },
    { pair: "USD / CHF", rate: "0.8870", change: "-0.15%", up: false },
    { pair: "Gold (XAU/USD)", rate: "$2,642.50", change: "+0.74%", up: true },
    { pair: "Fed Funds Rate", rate: "5.25% - 5.50%", change: "Stable", up: true },
    { pair: "Skylet High-Yield APY", rate: "5.25%", change: "Guaranteed", up: true },
    { pair: "30-Yr Fixed Mortgage", rate: "6.45%", change: "-0.05%", up: false },
  ];

  // Duplicate for seamless loop
  const marqueeItems = [...rates, ...rates];

  return (
    <div className="w-full bg-slate-900/95 dark:bg-slate-950/90 text-slate-300 text-xs border-y border-slate-800/80 backdrop-blur-md overflow-hidden select-none py-2 relative z-30">
      <div className="flex items-center">
        {/* Left Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-0.5 bg-blue-600/20 text-blue-400 border-r border-slate-800 flex-shrink-0 font-medium text-[11px] uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
          <span>Global Markets</span>
        </div>

        {/* Scrolling Ticker */}
        <div className="flex overflow-hidden whitespace-nowrap mask-gradient">
          <div className="flex items-center gap-8 animate-marquee">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-2">
                <span className="font-semibold text-slate-200">{item.pair}:</span>
                <span className="text-white font-mono">{item.rate}</span>
                <span
                  className={`inline-flex items-center text-[10px] font-medium px-1.5 py-0.5 rounded ${
                    item.up
                      ? "text-emerald-400 bg-emerald-950/40 border border-emerald-800/30"
                      : "text-rose-400 bg-rose-950/40 border border-rose-800/30"
                  }`}
                >
                  {item.up ? (
                    <TrendingUp className="w-3 h-3 mr-0.5 inline" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-0.5 inline" />
                  )}
                  {item.change}
                </span>
                <span className="text-slate-700 mx-1">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Badge */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-0.5 bg-emerald-950/40 text-emerald-400 border-l border-slate-800 flex-shrink-0 font-medium text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>FDIC Insured to $250k</span>
        </div>
      </div>
    </div>
  );
};
