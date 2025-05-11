
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CreditCard, Wallet, Shield, BarChart4, Users } from "lucide-react";

const BankingServices = () => {
  const [activeTab, setActiveTab] = useState("savings");

  const tabs = [
    { 
      id: "savings",
      title: "Savings Accounts",
      subtitle: "High interest...",
      icon: <Wallet className="h-6 w-6 text-white" />
    },
    { 
      id: "loans",
      title: "Consumer Loans",
      subtitle: "Low collateral...",
      icon: <Users className="h-6 w-6 text-white" /> 
    },
    { 
      id: "cards",
      title: "Credit Cards",
      subtitle: "No fees...",
      icon: <CreditCard className="h-6 w-6 text-white" /> 
    },
    { 
      id: "advisory",
      title: "Advisory Services",
      subtitle: "Financial advice...",
      icon: <BarChart4 className="h-6 w-6 text-white" /> 
    },
    { 
      id: "insurance",
      title: "Insurance Products",
      subtitle: "Fits your needs...",
      icon: <Shield className="h-6 w-6 text-white" /> 
    },
  ];

  // Tab content mapping
  const tabContent = {
    savings: {
      title: "Invest in Your Future,",
      subtitle: "Start Saving.",
      description: "Every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business our power of choice is untrammelled and when nothing prevents.",
      stats: [
        { value: "3.2k", label: "Live Savings Accounts", growth: "2.6% IN LFY" },
        { value: "৳2b", label: "In Customer Savings", growth: "4.5% IN LFY" }
      ],
      icon: <Wallet className="h-6 w-6 text-bank-primary" />
    },
    loans: {
      title: "Personal & Consumer",
      subtitle: "Loan Solutions",
      description: "Access flexible funding options with competitive rates and simplified approval processes. Our consumer loans are designed to help you achieve your goals without financial strain.",
      stats: [
        { value: "৳5.7b", label: "Total Active Loans", growth: "3.8% IN LFY" },
        { value: "9.5%", label: "Average Interest Rate", growth: "-0.5% IN LFY" }
      ],
      icon: <Users className="h-6 w-6 text-bank-primary" />
    },
    cards: {
      title: "Powerful Rewards,",
      subtitle: "Smart Spending",
      description: "Enjoy premium benefits with our credit card options, including cashback rewards, travel insurance, and exclusive access to our VIP customer support services.",
      stats: [
        { value: "1.8k", label: "Active Card Users", growth: "7.2% IN LFY" },
        { value: "৳1.3b", label: "Monthly Transactions", growth: "5.1% IN LFY" }
      ],
      icon: <CreditCard className="h-6 w-6 text-bank-primary" />
    },
    advisory: {
      title: "Expert Financial",
      subtitle: "Guidance",
      description: "Our team of certified financial advisors provides personalized strategies and expert advice to help you navigate complex financial decisions and build a secure future.",
      stats: [
        { value: "500+", label: "Advisory Clients", growth: "12.4% IN LFY" },
        { value: "৳4.6b", label: "Assets Under Management", growth: "8.7% IN LFY" }
      ],
      icon: <BarChart4 className="h-6 w-6 text-bank-primary" />
    },
    insurance: {
      title: "Protection For",
      subtitle: "What Matters",
      description: "Comprehensive insurance solutions designed to safeguard your assets, health, and future. Our policies offer peace of mind with transparent terms and swift claim processing.",
      stats: [
        { value: "4.5k", label: "Active Policies", growth: "6.3% IN LFY" },
        { value: "98%", label: "Claims Satisfaction", growth: "2.1% IN LFY" }
      ],
      icon: <Shield className="h-6 w-6 text-bank-primary" />
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-green-500 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-6 h-1 bg-bank-secondary mr-3"></div>
            <p className="text-sm font-semibold uppercase tracking-wider text-bank-secondary">CUSTOM BANKING</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Banking For Your Needs</h2>
        </div>
        
        <div className="grid md:grid-cols-8 gap-0">
          {/* Left sidebar with tabs */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-l-lg overflow-hidden h-full">
              {tabs.map((tab) => (
                <div 
                  key={tab.id}
                  className={`border-b border-gray-100 transition-colors cursor-pointer ${activeTab === tab.id ? 'relative' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {activeTab === tab.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-r from-blue-600 to-green-500"></div>
                  )}
                  <div className={`px-6 py-5 hover:bg-gray-50 ${activeTab === tab.id ? 'bg-gray-50' : ''}`}>
                    <h3 className="font-medium text-gray-900">{tab.title}</h3>
                    <p className="text-sm text-gray-500">{tab.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Main content area */}
          <div className="md:col-span-6 grid md:grid-cols-3 gap-0">
            {/* Content for active tab */}
            <div className="md:col-span-2 bg-white rounded-tr-lg p-6">
              <div className="flex space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  {tabContent[activeTab as keyof typeof tabContent].icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500">{tabs.find(tab => tab.id === activeTab)?.title}</p>
                  <h3 className="text-2xl font-bold">
                    {tabContent[activeTab as keyof typeof tabContent].title}<br />
                    {tabContent[activeTab as keyof typeof tabContent].subtitle}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8">
                {tabContent[activeTab as keyof typeof tabContent].description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {tabContent[activeTab as keyof typeof tabContent].stats.map((stat, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-3xl font-bold">{stat.value}</h4>
                    <p className="text-gray-600 mb-2">{stat.label}</p>
                    <div className="flex items-center text-green-500">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-sm">{stat.growth}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="btn-primary bg-gradient-to-r from-blue-700 to-green-700 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-600">
                Explore Options
                <ArrowRight size={16} className="ml-2" />
              </Button>

            </div>
            
            {/* Digital account opening form */}
            <div className="md:col-span-1 bg-white rounded-br-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Digital Opening</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="full_name" className="sr-only">Full Name</Label>
                  <div className="relative">
                    <Input
                      id="full_name"
                      placeholder="Full Name"
                      className="w-full pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <Users className="h-5 w-5 text-blue-600 text-gradient-green-500" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="sr-only">Email</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="w-full pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 text-gradient-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone" className="sr-only">Phone</Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      placeholder="Phone Number"
                      className="w-full pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 text-gradient-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                </div>

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
                                className="w-full text-bank-primary hover:bg-bank-primary/5 border-none"
                              >
                                
                                Proceed to Details
                                <ArrowRight size={16} className="ml-2" />
                              </Button>
                            </div>
                          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingServices;
