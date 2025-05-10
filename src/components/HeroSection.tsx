import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "https://july.finestwp.com/newwp/flexibank/wp-content/uploads/2024/09/banner-1-1.jpg",
    alt: "Banking professional",
    description: "Empowering professionals with modern banking solutions.",
  },
  {
    src: "https://july.finestwp.com/newwp/flexibank/wp-content/uploads/2024/09/banner-2-1.jpg",
    alt: "Mobile banking",
    description: "Bank anytime, anywhere with our mobile banking app.",
  },
  {
    src: "https://july.finestwp.com/newwp/flexibank/wp-content/uploads/2024/09/banner-3-1.jpg",
    alt: "Financial services",
    description: "Secure and convenient financial services for everyone.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide functionality with slower speed
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Slowed down to 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-bank-primary text-white">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 py-16 md:py-24 items-center">
          <div className="space-y-6 animate-fade-in">
            {/* Dynamic heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {heroImages[currentIndex].alt}
            </h1>
            {/* Dynamic subtext */}
            <p className="text-lg md:text-xl text-gray-100 max-w-lg">
              {heroImages[currentIndex].description}
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
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-bank-accent/20 rounded-full blur-3xl"></div>
              <Carousel className="w-full max-w-md mx-auto">
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index} className={index === currentIndex ? "block" : "hidden"}>
                      <div className="relative">
                        {/* Blur effect container */}
                        <div className="absolute inset-0 w-full h-full bg-bank-accent/20 blur-2xl rounded-lg"></div>
                        {/* Image */}
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="relative z-10 rounded-lg shadow-2xl w-full h-[500px] object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick access features */}
      <div className="bg-white py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <QuickAccessCard 
              title="Online Banking"
              description="Access your accounts 24/7"
              icon={<ArrowRight className="h-6 w-6 text-bank-primary mb-2" />}
            />
            <QuickAccessCard 
              title="Fund Transfer"
              description="Quick and secure transfers"
              icon={<ArrowRight className="h-6 w-6 text-bank-primary mb-2" />}
            />
            <QuickAccessCard 
              title="Mobile Banking" 
              description="Bank on the go"
              icon={<ArrowRight className="h-6 w-6 text-bank-primary mb-2" />}
            />
            <QuickAccessCard 
              title="Contact Us" 
              description="Get support anytime"
              icon={<ArrowRight className="h-6 w-6 text-bank-primary mb-2" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const QuickAccessCard = ({ 
  title, 
  description,
  icon 
}: { 
  title: string; 
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="text-center py-4 px-2 rounded-lg card-hover">
    {icon}
    <h3 className="font-semibold text-bank-primary">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default HeroSection;
