import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  User,
  Search,
  Sun,
  Moon,
  Shield,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
      setIsScrolled(window.scrollY > 15);
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
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800/80"
            : "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  <span className="font-extrabold text-xl tracking-tight">S</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      SKYLET<span className="text-blue-600 dark:text-emerald-400">.</span>
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      FDIC
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase -mt-1">
                    Global Bank Ltd
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => {
                const active = isActive(item.link);
                return item.link.startsWith("/#") ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.link)}
                    className="px-3.5 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-emerald-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.link}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                      active
                        ? "text-blue-600 dark:text-emerald-400 bg-blue-50/80 dark:bg-emerald-950/40 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-emerald-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Icons & Buttons */}
            <div className="hidden sm:flex items-center space-x-2.5">
              {/* Quick Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
                title="Search (Ctrl+K)"
              >
                <Search size={14} className="text-slate-400" />
                <span className="hidden md:inline">Quick Search...</span>
                <kbd className="hidden md:inline-block font-mono text-[10px] bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-600 text-slate-400">
                  ⌘K
                </kbd>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              >
                {theme === "dark" ? (
                  <Sun size={18} className="text-amber-400 hover:rotate-45 transition-transform" />
                ) : (
                  <Moon size={18} className="text-slate-700 hover:-rotate-12 transition-transform" />
                )}
              </button>

              {/* Login Button */}
              <a
                href="https://skyletbankltd-dashboard.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors"
              >
                <User size={15} />
                <span>Portal Sign In</span>
              </a>

              {/* Open Account CTA */}
              <Link
                to="/accounts"
                className="btn-fintech-primary text-xs py-2 px-4 shadow-sm"
              >
                <span>Open Account</span>
                <ArrowRight size={14} className="ml-1.5" />
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex sm:hidden items-center gap-1.5">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Theme"
              >
                {theme === "dark" ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  onClick={() => handleNavClick(item.link)}
                  className={`block px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive(item.link)
                      ? "text-blue-600 dark:text-emerald-400 bg-blue-50/70 dark:bg-emerald-950/30 font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
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
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <User size={16} />
                <span>Client Portal Sign In</span>
              </a>
              <Link
                to="/accounts"
                onClick={() => setIsMenuOpen(false)}
                className="w-full btn-fintech-primary text-sm py-2.5 flex items-center justify-center gap-2"
              >
                <span>Open Global Account</span>
                <ArrowRight size={16} />
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
