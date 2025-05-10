
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import BankingServices from "@/components/BankingServices";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import FinancialProducts from "@/components/FinancialProducts";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <BankingServices />
      <FinancialProducts />
      <TrustSection />
      <FAQSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
