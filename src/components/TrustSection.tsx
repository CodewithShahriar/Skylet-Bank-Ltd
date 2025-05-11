
import { Card, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-green-600 to-blue-700">
  Why Choose Skylet Bank
</h2>
          <p className="section-subtitle">Trusted by thousands of customers across Bangladesh</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
          <div>
            <img
              src="/placeholder.svg"
              alt="Secure banking"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-bank-primary mb-6">Ultimate Locker Solution for Valuables</h3>
            <p className="text-gray-600 mb-8">
              Keep your important documents, jewelry, and other valuables secure with our state-of-the-art locker facilities. Advanced security measures ensure your possessions stay safe.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SecurityFeature 
                title="24/7 Surveillance" 
                description="Continuous monitoring with advanced security systems"
              />
              <SecurityFeature 
                title="Biometric Access" 
                description="Multi-layer authentication for enhanced security"
              />
              <SecurityFeature 
                title="Disaster Protection" 
                description="Protection against fire, flood, and other disasters"
              />
              <SecurityFeature 
                title="Insurance Coverage" 
                description="Additional protection for your valuable items"
              />
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10">What Our Customers Say</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial 
              content="Skylet Bank has transformed how I manage my finances. Their mobile app is intuitive and their customer service is exceptional."
              author="Ahsan Rahman"
              position="Business Owner"
            />
            <Testimonial 
              content="I've been with Skylet Bank for 3 years now. Their Islamic banking services align perfectly with my values while delivering great returns."
              author="Fatima Begum"
              position="University Professor"
            />
            <Testimonial 
              content="The loan process was seamless and quick. The bank representatives were helpful throughout the entire application process."
              author="Mohammed Hasan"
              position="Software Engineer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SecurityFeature = ({ title, description }: { title: string; description: string }) => (
  <div className="flex items-start">
    <div className="mr-3 mt-1">
      <Lock className="w-5 h-5 text-bank-accent" />
    </div>
    <div>
      <h4 className="font-semibold text-bank-dark">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const Testimonial = ({ content, author, position }: { content: string; author: string; position: string }) => (
  <Card className="h-full bg-white border border-gray-200 card-hover">
    <CardContent className="p-6">
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
      <p className="text-gray-700 mb-6">"{content}"</p>
      <div>
        <p className="font-semibold text-bank-primary">{author}</p>
        <p className="text-sm text-gray-600">{position}</p>
      </div>
    </CardContent>
  </Card>
);

export default TrustSection;
