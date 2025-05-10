
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wallet, Banknote, Shield, Globe } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Wallet className="h-10 w-10 text-bank-primary" />,
      title: "Personal Banking",
      description: "Access a wide range of accounts, cards, and savings products designed for your personal financial growth.",
      buttonText: "Explore Personal Banking"
    },
    {
      icon: <Banknote className="h-10 w-10 text-bank-primary" />,
      title: "Business Banking",
      description: "Comprehensive financial solutions to help your business grow, from accounts to loans and trade services.",
      buttonText: "Explore Business Banking"
    },
    {
      icon: <Shield className="h-10 w-10 text-bank-primary" />,
      title: "Islamic Banking",
      description: "Shariah-compliant banking products and services that align with your values and financial goals.",
      buttonText: "Explore Islamic Banking"
    },
    {
      icon: <Globe className="h-10 w-10 text-bank-primary" />,
      title: "Digital Banking",
      description: "Experience banking at your fingertips with our advanced digital banking solutions and mobile app.",
      buttonText: "Explore Digital Banking"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Banking For Your Needs</h2>
          <p className="section-subtitle">Discover financial services tailored to your unique requirements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border border-gray-200 overflow-hidden card-hover">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-bank-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-bank-primary hover:text-bank-primary/80 p-0">
                  {service.buttonText} <ArrowRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
