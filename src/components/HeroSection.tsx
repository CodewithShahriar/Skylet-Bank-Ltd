import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 opacity-90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 py-16 md:py-24 items-center">
          <div className="space-y-6 animate-fade-in">
            {/* Dynamic heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-purple-800">
              Banking Made Smart for Your Future
            </h1>
            {/* Dynamic subtext */}
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Experience the next generation of banking with Skylet Bank. Secure, modern, and designed for your financial growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="btn-primary bg-bank-red">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Static Image */}
          <div className="hidden md:block">
            <div className="relative">
              <img
                src="https://i.ibb.co.com/rGVFPjMt/Whats-App-Image-2025-05-11-at-04-48-52-e6ec8e09.jpg"
                alt="Banking Made Smart for Your Future"
                className="relative z-10 rounded-lg w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
