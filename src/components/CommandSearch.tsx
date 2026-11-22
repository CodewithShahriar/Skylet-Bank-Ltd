import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  CreditCard,
  Building,
  Shield,
  HelpCircle,
  Calculator,
  ArrowRight,
  X,
  FileText
} from "lucide-react";

interface CommandSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandSearch: React.FC<CommandSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // trigger toggle
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickLinks = [
    {
      category: "Banking & Accounts",
      items: [
        { title: "High-Yield Checking & Savings", path: "/accounts", icon: Building },
        { title: "Global Multi-Currency Accounts", path: "/accounts", icon: Building },
        { title: "Commercial Treasury Accounts", path: "/accounts", icon: Building },
      ],
    },
    {
      category: "Credit & Debit Cards",
      items: [
        { title: "Skylet Sapphire Reserve (3% Cashback)", path: "/cards", icon: CreditCard },
        { title: "Black Diamond Corporate Elite", path: "/cards", icon: CreditCard },
        { title: "Instant Virtual Card Generator", path: "/cards", icon: CreditCard },
      ],
    },
    {
      category: "Calculators & Lending",
      items: [
        { title: "Smart Loan & Mortgage Calculator", path: "/#calculators", icon: Calculator },
        { title: "High-Yield Savings & CD Growth Simulator", path: "/#calculators", icon: Calculator },
        { title: "Commercial Line of Credit", path: "/deposits-and-loans", icon: FileText },
      ],
    },
    {
      category: "Support & Security",
      items: [
        { title: "FDIC Insurance & Security Protocols", path: "/#trust", icon: Shield },
        { title: "24/7 International Wire Support", path: "/support", icon: HelpCircle },
        { title: "About Skylet Financial Group", path: "/about-us", icon: Building },
      ],
    },
  ];

  const filteredLinks = quickLinks
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  const handleSelect = (path: string) => {
    onClose();
    if (path.startsWith("/#")) {
      navigate("/");
      const el = document.getElementById(path.replace("/#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search accounts, loans, cards, or calculators..."
            className="w-full bg-transparent border-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none text-sm md:text-base"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {filteredLinks.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500">
              No results found for "{query}". Try searching for "loan", "card", or "rates".
            </div>
          ) : (
            filteredLinks.map((group, idx) => (
              <div key={idx}>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-1.5">
                  {group.category}
                </div>
                <div className="space-y-1">
                  {group.items.map((item, itemIdx) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={itemIdx}
                        onClick={() => handleSelect(item.path)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200 text-sm font-medium transition-colors text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span>{item.title}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex justify-between items-center">
          <span>Navigate with mouse or keyboard</span>
          <span className="font-mono text-[10px]">Skylet Global Direct Search</span>
        </div>
      </div>
    </div>
  );
};
