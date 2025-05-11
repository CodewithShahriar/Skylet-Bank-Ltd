
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Wallet, Banknote, Shield, Circle } from "lucide-react";

const FinancialProducts = () => {
  // Banking services section (similar to the "Banking For Your Needs" section)
  const bankingServices = [
    {
      icon: <Wallet className="h-10 w-10 text-bank-primary" />,
      title: "Emergency Funds",
      description: "Create a financial safety net for unexpected expenses and emergencies."
    },
    {
      icon: <Banknote className="h-10 w-10 text-bank-primary" />,
      title: "Financial Planning",
      description: "Personalized guidance to help you achieve your short and long-term financial goals."
    },
    {
      icon: <Shield className="h-10 w-10 text-bank-primary" />,
      title: "Health Insurance",
      description: "Protect yourself and your family with comprehensive health coverage plans."
    },
    {
      icon: <Circle className="h-10 w-10 text-bank-primary" />,
      title: "Retirement Planning",
      description: "Secure your future with specialized retirement savings and investment options."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banking Services Section (replacing the savings calculator) */}
        <div className="mb-20">
          <div className="text-center mb-12">
           <h2 className="section-title text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-green-600 to-blue-700">
  Banking For Your Future
</h2>
            <p className="section-subtitle">Comprehensive financial solutions for every stage of life</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {bankingServices.map((service, index) => (
    <Card key={index} className="bg-white border border-gray-300 overflow-hidden card-hover">
      <CardContent className="p-6 flex flex-col items-center text-center group">
        <div className="mb-4 p-3 rounded-full bg-bank-secondary/10">
          {service.icon}
        </div>
        {/* Title with gradient hover effect */}
        <h3 className="text-xl font-bold text-bank-primary mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:via-green-600 group-hover:to-purple-800">
          {service.title}
        </h3>
        {/* Description with gradient hover effect */}
        <p className="text-gray-600 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:via-green-800 group-hover:to-purple-800">
          {service.description}
        </p>
      </CardContent>
    </Card>
  ))}
</div>

        </div>
        
        {/* Credit Cards Section with Realistic Cards */}
        <div className="bg-gradient-to-r from-bank-primary to-bank-accent rounded-2xl overflow-hidden mb-20">
          <div className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Discover Our Range of Credit Cards</h3>
              <p className="text-white/80 mb-6">
                Find the perfect card that matches your lifestyle and enjoy exclusive benefits and rewards.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-white/20 rounded-full mr-2 flex-shrink-0">
                    ✓
                  </span>
                  <span>Cashback on purchases</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-white/20 rounded-full mr-2 flex-shrink-0">
                    ✓
                  </span>
                  <span>Travel insurance and benefits</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-white/20 rounded-full mr-2 flex-shrink-0">
                    ✓
                  </span>
                  <span>24/7 concierge services</span>
                </li>
              </ul>
              <div
                  style={{
                    padding: "2px",
                    borderRadius: "0.5rem",
                    background: "linear-gradient(135deg, #3b82f6, #10b981, #8b5cf6)",
                    backgroundSize: "300% 300%",
                    animation: "glowBorder 5s linear infinite"
                  }}
                  className="w-full"
                >
                  <div className="bg-white rounded-md w-full">
                    <Button
                      variant="outline"
                      className="w-full text-bank-primary hover:scale-105 transition duration-200 border-none"
                    >
                      Apply Now
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
              </div>
            </div>
            
            <div className="md:col-span-3 relative">
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Platinum Card with realistic design */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 aspect-[16/9] relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-700/30 rounded-full -mt-10 -mr-10"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-700/20 rounded-full -mb-10 -ml-10"></div>
                  
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-xs text-gray-400">Skylet Bank</p>
                      <h4 className="text-lg font-bold text-white">Platinum Card</h4>
                    </div>
                    <div className="text-white/80 font-bold">
                      PLATINUM
                    </div>
                  </div>
                  
                  {/* Card chip */}
                  <div className="mb-6">
                    <div className="w-10 h-8 bg-yellow-500/90 rounded-md relative">
                      <div className="absolute inset-0.5 bg-yellow-400/30 rounded-sm grid grid-cols-3 grid-rows-3 gap-px">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="bg-yellow-300/30 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-white text-sm mb-4">
                    <div className="font-mono">5412 •••• •••• 7890</div>
                  </div>
                  
                  <div className="flex justify-between text-white/90 text-xs">
                    <div>
                      <p className="text-gray-400">Card Holder</p>
                      <p>JOHN SMITH</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Expires</p>
                      <p>05/28</p>
                    </div>
                  </div>
                </div>
                
                {/* Gold Card with realistic design */}
                <div className="bg-gradient-to-br from-yellow-600 to-amber-700 rounded-xl p-6 aspect-[16/9] relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/30 rounded-full -mt-10 -mr-10"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/20 rounded-full -mb-10 -ml-10"></div>
                  
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-xs text-amber-100">Skylet Bank</p>
                      <h4 className="text-lg font-bold text-white">Gold Card</h4>
                    </div>
                    <div className="text-white/80 font-bold">
                      GOLD
                    </div>
                  </div>
                  
                  {/* Card chip */}
                  <div className="mb-6">
                    <div className="w-10 h-8 bg-yellow-500/90 rounded-md relative">
                      <div className="absolute inset-0.5 bg-yellow-400/30 rounded-sm grid grid-cols-3 grid-rows-3 gap-px">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="bg-yellow-300/30 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-white text-sm mb-4">
                    <div className="font-mono">4321 •••• •••• 1234</div>
                  </div>
                  
                  <div className="flex justify-between text-white/90 text-xs">
                    <div>
                      <p className="text-amber-100">Card Holder</p>
                      <p>JANE DOE</p>
                    </div>
                    <div>
                      <p className="text-amber-100">Expires</p>
                      <p>09/27</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loans Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
  <img
    src="https://ecdn.ittefaqbd.com/contents/cache/images/640x358x1/uploads/media/2023/06/20/1e91604b351e46df384695ffa0751b33-64911a148cd23.jpg?jadewits_media_id=7874"
    alt="Online loan calculator"
    className="rounded-xl shadow-lg w-full h-96"
  />
</div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-green-600 to-blue-700 mb-4">
  Flexible Online Loan Calculator
</h3>
            <p className="text-gray-600 mb-6">
              Planning a major purchase or need funds for an emergency? Use our online calculator to find the perfect loan solution tailored to your needs.
            </p>
            
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label>
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <span className="bg-gray-100 px-3 py-2 text-gray-500">৳</span>
                    <input type="text" value="500,000" readOnly className="flex-1 p-2 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tenure (Years)</label>
                  <select className="w-full border rounded-md p-2">
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Monthly Payment:</span>
                <span className="font-bold text-bank-primary">৳10,624</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Interest Rate:</span>
                <span className="font-bold text-bank-primary">9.5%</span>
              </div>
            </div>
            
            <Button className="w-full md:w-auto bg-bank-red hover:bg-bank-red/90">
              Apply For a Loan
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialProducts;
