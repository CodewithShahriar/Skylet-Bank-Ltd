
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Wallet, Users, GraduationCap, CreditCard, Building2, Rocket, Globe, Laptop, User } from "lucide-react";

const AccountsPage = () => {
  const [activeTab, setActiveTab] = useState("personal");
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-green-600 to-blue-700 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose the Right Account for You</h1>
              <p className="text-lg mb-6">Explore our range of accounts designed to meet your unique financial needs with enhanced benefits and digital features.</p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">Open Your Account</Button>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-3 text-white">
                    <div className="bg-blue-600 p-2 rounded-full">
                      <Wallet size={20} />
                    </div>
                    <span className="font-medium">Easy account setup</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="bg-blue-600 p-2 rounded-full">
                      <Users size={20} />
                    </div>
                    <span className="font-medium">24/7 customer support</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="bg-blue-600 p-2 rounded-full">
                      <CreditCard size={20} />
                    </div>
                    <span className="font-medium">Free debit card</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="bg-blue-600 p-2 rounded-full">
                      <Laptop size={20} />
                    </div>
                    <span className="font-medium">Digital banking access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Account Types Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-700 text-transparent bg-clip-text">
            Account Types
            </h2>
            <p className="text-lg text-gray-600">Select the account that fits your lifestyle and financial goals</p>
          </div>
          
          <Tabs defaultValue="personal" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="personal" className={`${activeTab === "personal" ? "bg-blue-600 text-white" : ""}`}>
                Personal Accounts
              </TabsTrigger>
              <TabsTrigger value="business" className={`${activeTab === "business" ? "bg-blue-600 text-white" : ""}`}>
                Business Accounts
              </TabsTrigger>
              <TabsTrigger value="digital" className={`${activeTab === "digital" ? "bg-blue-600 text-white" : ""}`}>
                Digital & Specialized
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="card-hover border border-gray-300 rounded-md">

                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Wallet size={20} className="text-blue-600" />
                      </div>
                      <CardTitle>Savings Account</CardTitle>
                    </div>
                    <CardDescription>Earn interest on your deposits with easy access to your funds</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Competitive interest rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Free digital banking access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>No minimum balance requirements</span>
                      </li>
                    </ul>
                   <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">
                            Learn More
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="card-hover border border-gray-300 rounded-md">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <CreditCard size={20} className="text-blue-600" />
                      </div>
                      <CardTitle>Current Account</CardTitle>
                    </div>
                    <CardDescription>Ideal for daily transactions with higher withdrawal limits</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Unlimited transactions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Free checkbook facility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Overdraft options available</span>
                      </li>
                    </ul>
                    <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">
                            Learn More
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="card-hover border border-gray-300 rounded-md">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <GraduationCap size={20} className="text-blue-600" />
                      </div>
                      <CardTitle>Student Account</CardTitle>
                    </div>
                    <CardDescription>No minimum balance, designed for students with educational benefits</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Zero maintenance charges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Special education loan options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Discounts on educational services</span>
                      </li>
                    </ul>
                    <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">
                            Learn More
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="card-hover border border-gray-300 rounded-md">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <User size={20} className="text-blue-600" />
                      </div>
                      <CardTitle>Salary Account</CardTitle>
                    </div>
                    <CardDescription>Auto-credit your salary with zero balance and perks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Zero balance account</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Free insurance benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Special loan rates for account holders</span>
                      </li>
                    </ul>
                    <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">
                            Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="business" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="card-hover border border-gray-300 rounded-md">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Building2 size={20} className="text-blue-600" />
                      </div>
                      <CardTitle>Business Current Account</CardTitle>
                    </div>
                    <CardDescription>Manage business transactions with high limits and tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>High transaction limits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Integrated payment solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Business analytics dashboard</span>
                      </li>
                    </ul>
                    <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">
                            Learn More
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="card-hover border border-gray-300 rounded-md">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Rocket size={20} className="text-blue-600" />
                      </div>
                      <CardTitle>Startup Account</CardTitle>
                    </div>
                    <CardDescription>Specially designed for new businesses with low charges</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Reduced banking charges for first year</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Free business advisory services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Networking opportunities</span>
                      </li>
                    </ul>
                    <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">
                            Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="digital" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="card-hover border border-gray-300 rounded-md">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Laptop size={20} className="text-blue-600" />
                      </div>
                      <CardTitle>Digital-Only Account</CardTitle>
                    </div>
                    <CardDescription>100% online banking experience, no physical branch needed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Higher interest rates than regular savings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Zero paperwork, fully digital onboarding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>24/7 digital support</span>
                      </li>
                    </ul>
                    <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">
                            Learn More
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="card-hover border border-gray-300 rounded-md">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Users size={20} className="text-blue-600" />
                      </div>
                      <CardTitle>Joint Account</CardTitle>
                    </div>
                    <CardDescription>Shared access for couples or partners</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Dual access control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Spending insights for both users</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Joint financial planning tools</span>
                      </li>
                    </ul>
                    <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">
                            Learn More
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="card-hover border border-gray-300 rounded-md">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <User size={20} className="text-blue-600" />
                      </div>
                      <CardTitle>Senior Citizen Account</CardTitle>
                    </div>
                    <CardDescription>Extra interest rates and priority support for seniors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Higher interest rate than standard accounts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Priority service at branches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Free doorstep banking services</span>
                      </li>
                    </ul>
                    <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">
                            Learn More
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="card-hover border border-gray-300 rounded-md">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Globe size={20} className="text-blue-600" />
                      </div>
                      <CardTitle>NRI/Foreign Account</CardTitle>
                    </div>
                    <CardDescription>Tailored for non-resident customers to manage money across borders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Multi-currency transaction support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Preferential exchange rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Tax advisory services</span>
                      </li>
                    </ul>
                    <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">
                            Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Features & Benefits Section */}
      <section className="py-16 px-4 md:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-500 text-transparent bg-clip-text">
  Frequently Asked Questions
</h2>
            <p className="text-lg text-gray-600">Every Skylet Bank account comes with premium features</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Banking</h3>
              <p className="text-gray-600">24/7 access to your accounts through our secure mobile and web platforms</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Debit Card</h3>
              <p className="text-gray-600">Complimentary debit card with enhanced security features and rewards</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={28} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Assistance</h3>
              <p className="text-gray-600">Dedicated relationship managers for premium account holders</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Steps to Open Account */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-500 text-transparent bg-clip-text">
            Open Your Account in 3 Simple Steps
            </h2>
            <p className="text-lg text-gray-600">Quick, easy, and hassle-free account opening process</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">1</div>
              <h3 className="text-xl font-semibold mb-3">Choose Your Account</h3>
              <p className="text-gray-600">Select the account type that best suits your financial needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">2</div>
              <h3 className="text-xl font-semibold mb-3">Fill Application</h3>
              <p className="text-gray-600">Complete the online application form with your details</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">3</div>
              <h3 className="text-xl font-semibold mb-3">Verification</h3>
              <p className="text-gray-600">Submit required documents and complete KYC verification</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-lg px-8 py-6">
  Open Your Account Now
</Button>

          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-500 text-transparent bg-clip-text">
            Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">Got questions? We've got answers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What documents do I need to open an account?</h3>
              <p className="text-gray-600">You'll need a valid ID (passport, national ID, or driver's license), proof of address, and a passport-sized photograph.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Can I open an account online?</h3>
              <p className="text-gray-600">Yes, most accounts can be opened online through our digital banking platform with remote verification.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What is the minimum deposit required?</h3>
              <p className="text-gray-600">Minimum deposits vary by account type, with some accounts having no minimum requirement.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How long does it take to activate my account?</h3>
              <p className="text-gray-600">Digital accounts can be activated instantly, while traditional accounts typically take 1-2 business days after verification.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/support" className="text-blue-600 hover:underline font-medium">View all FAQs</Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AccountsPage;