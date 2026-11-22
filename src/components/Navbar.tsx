import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  User,
  Search,
  Sun,
  Moon,
  ArrowRight
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { CommandSearch } from "./CommandSearch";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Accounts", link: "/accounts" },
    { name: "Deposits & Loans", link: "/deposits-and-loans" },
    { name: "Cards", link: "/cards" },
    { name: "Calculators", link: "/#calculators" },
    { name: "About Us", link: "/about-us" },
    { name: "Support", link: "/support" },
  ];

  const handleNavClick = (link: string) => {
    setIsMenuOpen(false);
    if (link.startsWith("/#")) {
      const id = link.replace("/#", "");
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800/80"
            : "bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-800/50"
        }`}
      >
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            
            {/* 1. Left: Pure Text Logo Brand (Icon Box Removed as Requested) */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex flex-col group select-none">
                <div className="flex items-center gap-2 leading-none">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    SKYLET<span className="text-blue-600 dark:text-emerald-400">.</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    FDIC
                  </span>
                </div>
                <span className="text-[10px] font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase mt-1 whitespace-nowrap">
                  Global Bank Ltd
                </span>
              </Link>
            </div>

            {/* 2. Middle: Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-shrink-0">
              {menuItems.map((item) => {
                const active = isActive(item.link);
                return item.link.startsWith("/#") ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.link)}
                    className="px-3 xl:px-3.5 py-2 text-xs xl:text-sm font-medium whitespace-nowrap rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-emerald-400 hover:bg-slate-100/70 dark:hover:bg-slate-900/80 transition-colors"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.link}
                    className={`px-3 xl:px-3.5 py-2 text-xs xl:text-sm font-medium whitespace-nowrap rounded-lg transition-all ${
                      active
                        ? "text-blue-600 dark:text-emerald-400 bg-blue-50/80 dark:bg-emerald-950/50 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-emerald-400 hover:bg-slate-100/70 dark:hover:bg-slate-900/80"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* 3. Right: Action Controls & Buttons */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              
              {/* Quick Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200/70 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors whitespace-nowrap"
                title="Search"
              >
                <Search size={14} className="text-slate-400 flex-shrink-0" />
                <span className="hidden xl:inline">Quick Search...</span>
                <span className="xl:hidden inline">Search</span>
              </button>

              {/* Dark / Light Mode Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-800 flex-shrink-0"
              >
                {theme === "dark" ? (
                  <Sun size={18} className="text-amber-400 hover:rotate-45 transition-transform" />
                ) : (
                  <Moon size={18} className="text-slate-700 hover:-rotate-12 transition-transform" />
                )}
              </button>

              {/* Portal Sign In Link */}
              <a
                href="https://skyletbankltd-dashboard.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs xl:text-sm font-semibold px-3 py-2 rounded-xl text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-emerald-400 hover:bg-slate-100/60 dark:hover:bg-slate-900/60 transition-colors whitespace-nowrap flex-shrink-0"
              >
                <User size={15} className="flex-shrink-0" />
                <span>Portal Sign In</span>
              </a>

              {/* Open Global Account CTA Button */}
              <Link
                to="/accounts"
                className="btn-fintech-primary text-xs xl:text-sm py-2.5 px-4 rounded-xl shadow-sm whitespace-nowrap flex items-center gap-1.5 flex-shrink-0"
              >
                <span>Open Account</span>
                <ArrowRight size={14} className="flex-shrink-0" />
              </Link>
            </div>

            {/* 4. Mobile Controls */}
            <div className="flex sm:hidden items-center gap-1.5">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                aria-label="Theme"
              >
                {theme === "dark" ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Sheet */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  onClick={() => handleNavClick(item.link)}
                  className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive(item.link)
                      ? "text-blue-600 dark:text-emerald-400 bg-blue-50/70 dark:bg-emerald-950/40 font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <a
                href="https://skyletbankltd-dashboard.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-900"
              >
                <User size={15} />
                <span>Portal Sign In</span>
              </a>
              <Link
                to="/accounts"
                onClick={() => setIsMenuOpen(false)}
                className="w-full btn-fintech-primary text-xs py-2.5 flex items-center justify-center gap-2"
              >
                <span>Open Global Account</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </nav>

      <CommandSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
