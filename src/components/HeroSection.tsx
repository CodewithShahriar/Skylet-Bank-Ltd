import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 opacity-90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 py-10 md:py-18 items-center">
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
              {/* Open Account Button */}
              <Button
                size="lg"
                className="btn-primary bg-gradient-to-r from-blue-700 to-green-700 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-600"
              >
                Open Account
                <ArrowRight size={18} className="ml-2" />
              </Button>


              {/* Learn More Button */}
              <div
                style={{
                  padding: "2px",
                  borderRadius: "0.5rem",
                  background: "linear-gradient(135deg, #3b82f6, #10b981, #8b5cf6)",
                  backgroundSize: "300% 300%",
                  animation: "glowBorder 5s linear infinite"
                }}
                className="w-1/3"
              >
                <div className="bg-white rounded-md w-full">
                  <Button
                    variant="outline"
                    className="w-full text-bank-primary hover:bg-bank-primary/5 border-none"
                  >
                    Learn More
                  </Button>
               </div>
              </div>
            </div>
          </div>
          
          {/* Static Image */}
          <div className="hidden md:block">
            <div className="relative">
              <img
                src="https://i.ibb.co.com/GvV1X4tB/Whats-App-Image-2025-05-11-at-05-30-38-c9fc62ca.jpg"
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
