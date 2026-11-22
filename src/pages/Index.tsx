import React from "react";
import Navbar from "@/components/Navbar";
import { LiveRatesTicker } from "@/components/LiveRatesTicker";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CardsShowcase from "@/components/CardsShowcase";
import FinancialCalculators from "@/components/FinancialCalculators";
import DigitalOnboardingSection from "@/components/DigitalOnboardingSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col font-sans">
      <Navbar />
      <LiveRatesTicker />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <CardsShowcase />
        <FinancialCalculators />
        <DigitalOnboardingSection />
        <TrustSection />
        <FAQSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
