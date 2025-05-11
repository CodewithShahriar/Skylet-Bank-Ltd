import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ProductsSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-green-700 to-blue-800">
            Enhance Your Wealth Safely
          </h2>
          <p className="section-subtitle">Choose from our range of deposit products</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard 
            title="Fixed Deposit"
            description="Secure your savings with competitive interest rates and flexible tenures."
            features={["Up to 7.5% interest rate", "Tenures from 3 months to 5 years", "Monthly interest payout option"]}
          />
          
          <ProductCard 
            title="Savings Plus"
            description="Enhanced savings account with premium benefits and higher interest rates."
            features={["Premium interest on your balance", "Zero maintenance fee", "Free premium debit card"]}
          />
          
          <ProductCard 
            title="Youth Savings"
            description="Special savings account designed for young individuals under 25 years."
            features={["No minimum balance", "Free digital banking", "Educational bonuses"]}
          />
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ 
  title, 
  description, 
  features 
}: { 
  title: string; 
  description: string; 
  features: string[];
}) => {
  return (
    <Card className="h-full flex flex-col card-hover border border-gray-400 bg-gradient-to-br from-blue-100 to-blue-130">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-bank-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-bank-secondary/20 text-bank-primary rounded-full mr-2 flex-shrink-0 mt-0.5">
                ✓
              </span>
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-bank-primary text-bank-primary hover:bg-bank-primary/5">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductsSection;
