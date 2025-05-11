
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, CreditCard, ShieldCheck } from "lucide-react";

const CardsPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-green-600 to-blue-700 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cards Designed for Your Lifestyle</h1>
              <p className="text-lg mb-6">Explore our range of debit and credit cards with exclusive benefits and rewards tailored to your needs.</p>
              <Button className="bg-white text-blue-900 hover:bg-blue-50">Apply for a Card</Button>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="credit-card bg-gradient-to-r from-blue-800 via-sky-600 to-green-500 p-5 rounded-xl w-80 h-48 shadow-xl transform rotate-6 absolute -right-2 z-10">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-white/80">Skylet Bank Ltd.</p>
                      <p className="text-white/50 text-xs">Platinum</p>
                    </div>
                    <CreditCard className="text-white/70" size={24} />
                  </div>
                  <div className="card-chip mx-0 my-4"></div>
                  <p className="text-white text-lg tracking-widest">•••• •••• •••• 1234</p>
                  <div className="flex justify-between mt-4">
                    <div>
                      <p className="text-white/70 text-xs">Card Holder</p>
                      <p className="text-white text-sm">JOHN DOE</p>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs">Expires</p>
                      <p className="text-white text-sm">05/28</p>
                    </div>
                  </div>
                </div>
                <div className="credit-card bg-gradient-to-r from-yellow-400 to-amber-600 p-5 rounded-xl w-80 h-48 shadow-xl transform -rotate-3 relative z-0">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-white/80">Skylet Bank Ltd.</p>
                      <p className="text-white/50 text-xs">Gold</p>
                    </div>
                    <CreditCard className="text-white/70" size={24} />
                  </div>
                  <div className="card-chip mx-0 my-4"></div>
                  <p className="text-white text-lg tracking-widest">•••• •••• •••• 5678</p>
                  <div className="flex justify-between mt-4">
                    <div>
                      <p className="text-white/70 text-xs">Card Holder</p>
                      <p className="text-white text-sm">JANE SMITH</p>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs">Expires</p>
                      <p className="text-white text-sm">09/27</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Card Types Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-700 text-transparent bg-clip-text">
            Explore Our Card Options
            </h2>
            <p className="text-lg text-gray-600">Find the perfect card for your financial needs</p>
          </div>
          
          <Tabs defaultValue="debit">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="debit">Debit Cards</TabsTrigger>
              <TabsTrigger value="credit">Credit Cards</TabsTrigger>
              <TabsTrigger value="prepaid">Prepaid Cards</TabsTrigger>
            </TabsList>
            
            <TabsContent value="debit" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <div className="h-48  flex items-center justify-center p-6">
                    <div className="credit-card bg-gradient-to-r from-blue-500 via-purple-600 to-green-500 p-4 rounded-xl w-64 h-36 shadow-lg">
                      <div className="flex justify-between">
                        <p className="text-xs text-white/80">Skylet Bank Ltd.</p>
                        
                        <CreditCard className="text-white/70" size={20} />
                        
                      </div>
                      <div className="card-chip mx-0 my-3"></div>
                      <p className="text-white text-sm tracking-widest">•••• •••• •••• 1234</p>
                      <div className="flex justify-between mt-3">
                        <div>
                          <p className="text-white/70 text-xs">Card Holder</p>
                          <p className="text-white text-xs">NAME</p>
                        </div>
                        <div>
                          <p className="text-white/70 text-xs">Expires</p>
                          <p className="text-white text-xs">MM/YY</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Skylet Debit Card</CardTitle>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Standard</Badge>
                    </div>
                    <CardDescription>Everyday banking with global access</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Universal acceptance at millions of merchants worldwide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Free ATM withdrawals at all Skylet Bank ATMs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Online shopping enablement with 2-factor authentication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Contactless payment technology</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-600">
                        Apply Now
                        </Button>

                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="h-48  flex items-center justify-center p-6">
                    <div className="credit-card bg-gradient-to-r from-yellow-700 to-green-800 p-4 rounded-xl w-64 h-36 shadow-lg">
                      <div className="flex justify-between">
                        <p className="text-xs text-white/80">Skylet Bank Ltd.</p>
                        <CreditCard className="text-white/70" size={20} />
                      </div>
                      <div className="card-chip mx-0 my-3"></div>
                      <p className="text-white text-sm tracking-widest">•••• •••• •••• 5678</p>
                      <div className="flex justify-between mt-3">
                        <div>
                          <p className="text-white/70 text-xs">Card Holder</p>
                          <p className="text-white text-xs">NAME</p>
                        </div>
                        <div>
                          <p className="text-white/70 text-xs">Expires</p>
                          <p className="text-white text-xs">MM/YY</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Skylet Signature Debit</CardTitle>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Premium</Badge>
                    </div>
                    <CardDescription>Enhanced benefits for our premium customers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-purple-600 mt-1" size={16} />
                        <span>Higher daily withdrawal and purchase limits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-purple-600 mt-1" size={16} />
                        <span>Complimentary airport lounge access (twice per quarter)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-purple-600 mt-1" size={16} />
                        <span>Purchase protection insurance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-purple-600 mt-1" size={16} />
                        <span>Exclusive merchant discounts and offers</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-600">
                        Apply Now
                        </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="credit" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <div className="h-48  flex items-center justify-center p-6">
                    <div className="credit-card bg-gradient-to-r from-amber-800 to-yellow-600 p-4 rounded-xl w-64 h-36 shadow-lg">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-xs text-white/80">Skylet Bank</p>
                          <p className="text-white/50 text-xs">Gold</p>
                        </div>
                        <CreditCard className="text-white/70" size={20} />
                      </div>
                      <div className="card-chip mx-0 my-3"></div>
                      <p className="text-white text-sm tracking-widest">•••• •••• •••• 9012</p>
                      <div className="flex justify-between mt-3">
                        <div>
                          <p className="text-white/70 text-xs">Card Holder</p>
                          <p className="text-white text-xs">NAME</p>
                        </div>
                        <div>
                          <p className="text-white/70 text-xs">Expires</p>
                          <p className="text-white text-xs">MM/YY</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Skylet Gold Credit Card</CardTitle>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Gold</Badge>
                    </div>
                    <CardDescription>Smart rewards for everyday spending</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-yellow-600 mt-1" size={16} />
                        <span>1 reward point for every ৳100 spent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-yellow-600 mt-1" size={16} />
                        <span>2x rewards on dining and entertainment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-yellow-600 mt-1" size={16} />
                        <span>Fuel surcharge waiver up to ৳1,000 per month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-yellow-600 mt-1" size={16} />
                        <span>Annual fee: ৳1,000 (waived on spending ৳1,50,000/year)</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-600">
                        Apply Now
                        </Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="h-48  flex items-center justify-center p-6">
                    <div className="credit-card bg-gradient-to-r from-gray-600 to-black p-4 rounded-xl w-64 h-36 shadow-lg">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-xs text-white/80">Skylet Bank</p>
                          <p className="text-white/50 text-xs">Platinum</p>
                        </div>
                        <CreditCard className="text-white/70" size={20} />
                      </div>
                      <div className="card-chip mx-0 my-3"></div>
                      <p className="text-white text-sm tracking-widest">•••• •••• •••• 3456</p>
                      <div className="flex justify-between mt-3">
                        <div>
                          <p className="text-white/70 text-xs">Card Holder</p>
                          <p className="text-white text-xs">NAME</p>
                        </div>
                        <div>
                          <p className="text-white/70 text-xs">Expires</p>
                          <p className="text-white text-xs">MM/YY</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Skylet Platinum Credit Card</CardTitle>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Platinum</Badge>
                    </div>
                    <CardDescription>Luxury benefits and elevated experiences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>2 reward points for every ৳100 spent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Complimentary airport lounge access worldwide (8 visits/year)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Travel insurance coverage up to ৳50 lakhs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-blue-600 mt-1" size={16} />
                        <span>Annual fee: ৳3,000 (waived on spending ৳3,00,000/year)</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-600">
                        Apply Now
                        </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="prepaid" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <div className="h-48 ৳ flex items-center justify-center p-6">
                    <div className="credit-card bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-xl w-64 h-36 shadow-lg">
                      <div className="flex justify-between">
                        <p className="text-xs text-white/80">Skylet Bank</p>
                        <CreditCard className="text-white/70" size={20} />
                      </div>
                      <div className="card-chip mx-0 my-3"></div>
                      <p className="text-white text-sm tracking-widest">•••• •••• •••• 7890</p>
                      <div className="flex justify-between mt-3">
                        <div>
                          <p className="text-white/70 text-xs">Multi-Currency</p>
                          <p className="text-white text-xs">TRAVEL CARD</p>
                        </div>
                        <div>
                          <p className="text-white/70 text-xs">Expires</p>
                          <p className="text-white text-xs">MM/YY</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Multi-Currency Travel Card</CardTitle>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Travel</Badge>
                    </div>
                    <CardDescription>The perfect companion for international travel</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-green-600 mt-1" size={16} />
                        <span>Load up to 15 currencies on a single card</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-green-600 mt-1" size={16} />
                        <span>Lock-in exchange rates when you load</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-green-600 mt-1" size={16} />
                        <span>Zero currency conversion charges on supported currencies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-green-600 mt-1" size={16} />
                        <span>Complimentary travel insurance</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-600">
                        Apply Now
                        </Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="h-48  flex items-center justify-center p-6">
                    <div className="credit-card bg-gradient-to-r from-green-800 to-lime-500 p-4 rounded-xl w-64 h-36 shadow-lg">
                      <div className="flex justify-between">
                        <p className="text-xs text-white/80">Skylet Bank</p>
                        <CreditCard className="text-white/70" size={20} />
                      </div>
                      <div className="card-chip mx-0 my-3"></div>
                      <p className="text-white text-sm tracking-widest">•••• •••• •••• 4321</p>
                      <div className="flex justify-between mt-3">
                        <div>
                          <p className="text-white/70 text-xs">Digital</p>
                          <p className="text-white text-xs">VIRTUAL CARD</p>
                        </div>
                        <div>
                          <p className="text-white/70 text-xs">Expires</p>
                          <p className="text-white text-xs">MM/YY</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Virtual Prepaid Card</CardTitle>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Digital</Badge>
                    </div>
                    <CardDescription>Secure online shopping without a physical card</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-purple-600 mt-1" size={16} />
                        <span>Instantly create and use for online purchases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-purple-600 mt-1" size={16} />
                        <span>Set spending limits for better control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-purple-600 mt-1" size={16} />
                        <span>Enhanced security with one-time use options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="min-w-4 text-purple-600 mt-1" size={16} />
                        <span>Zero issuance fee</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-600">
                        Apply Now
                        </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Card Comparison Table */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-700 text-transparent bg-clip-text">
            Card Comparison
            </h2>
            <p className="text-lg text-gray-600">Find the right card for your needs</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-black border-collapse rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-green-500 text-white ">
                  <th className="text-left p-4 ">Card Type</th>
                  <th className="text-left p-4">Annual Fee</th>
                  <th className="text-left p-4">Rewards</th>
                  <th className="text-left p-4">Key Benefits</th>
                  <th className="text-left p-4">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="p-4 font-medium">Skylet Debit Card</td>
                  <td className="p-4">No Fee</td>
                  <td className="p-4">0.1% cashback</td>
                  <td className="p-4">Universal acceptance, Free ATM withdrawals</td>
                  <td className="p-4">Everyday banking</td>
                </tr>
                <tr className="border-b border-gray-400 bg-gray-50">
                  <td className="p-4 font-medium">Skylet Signature Debit</td>
                  <td className="p-4">₹500/year</td>
                  <td className="p-4">0.25% cashback</td>
                  <td className="p-4">Higher limits, Airport lounge access</td>
                  <td className="p-4">Premium account holders</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="p-4 font-medium">Skylet Gold Credit Card</td>
                  <td className="p-4">₹1,000/year (waivable)</td>
                  <td className="p-4">1 point per ₹100</td>
                  <td className="p-4">2x rewards on dining, Fuel surcharge waiver</td>
                  <td className="p-4">Everyday spenders</td>
                </tr>
                <tr className="border-b border-gray-400 bg-gray-50">
                  <td className="p-4 font-medium">Skylet Platinum Credit Card</td>
                  <td className="p-4">₹3,000/year (waivable)</td>
                  <td className="p-4">2 points per ₹100</td>
                  <td className="p-4">Lounge access, Travel insurance</td>
                  <td className="p-4">Frequent travelers</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="p-4 font-medium">Multi-Currency Travel Card</td>
                  <td className="p-4">₹500 (one-time)</td>
                  <td className="p-4">None</td>
                  <td className="p-4">15 currencies, Lock-in exchange rates</td>
                  <td className="p-4">International travelers</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium">Virtual Prepaid Card</td>
                  <td className="p-4">No Fee</td>
                  <td className="p-4">None</td>
                  <td className="p-4">Instant issuance, Enhanced security</td>
                  <td className="p-4">Online shoppers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Card Security Tips */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-700 text-transparent bg-clip-text">
            Card Security Tips
            </h2>
            <p className="text-lg text-gray-600">Keeping your cards safe and secure</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full mt-1">
                <ShieldCheck className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Keep Your PIN Confidential</h3>
                <p className="text-gray-700">Never share your PIN with anyone, including bank representatives. Memorize your PIN and avoid writing it down.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-100 p-3 rounded-full mt-1">
                <ShieldCheck className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Monitor Your Transactions</h3>
                <p className="text-gray-700">Regularly check your account statements and set up transaction alerts to quickly detect any unauthorized activity.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full mt-1">
                <ShieldCheck className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure Online Shopping</h3>
                <p className="text-gray-700">Only use your card on secure websites (look for "https" and a padlock icon). Consider using virtual cards for one-time purchases.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full mt-1">
                <ShieldCheck className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Report Lost Cards Immediately</h3>
                <p className="text-gray-700">If your card is lost or stolen, report it immediately by calling our 24/7 helpline at 1800-XXX-XXXX or blocking it through the mobile app.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lost/Stolen Card Instructions */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-700 text-transparent bg-clip-text">
            Lost or Stolen Card?
            </h2>
            <p className="text-lg text-gray-600">Take immediate action to secure your account</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <p className="font-bold text-red-600">1</p>
                  </div>
                  <CardTitle>Block Your Card</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Immediately block your card through:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="min-w-4 text-red-600 mt-1" size={16} />
                    <span>Skylet Bank Mobile App</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="min-w-4 text-red-600 mt-1" size={16} />
                    <span>Internet Banking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="min-w-4 text-red-600 mt-1" size={16} />
                    <span>24/7 Helpline: 1800-XXX-XXXX</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <p className="font-bold text-red-600">2</p>
                  </div>
                  <CardTitle>File a Report</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Submit a formal report for investigation:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="min-w-4 text-red-600 mt-1" size={16} />
                    <span>Visit nearest Skylet Bank branch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="min-w-4 text-red-600 mt-1" size={16} />
                    <span>Submit an online complaint through Internet Banking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="min-w-4 text-red-600 mt-1" size={16} />
                    <span>Email details to support@skyletbank.com</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <p className="font-bold text-red-600">3</p>
                  </div>
                  <CardTitle>Order Replacement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Get your card replaced quickly:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="min-w-4 text-red-600 mt-1" size={16} />
                    <span>Request replacement through Mobile App</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="min-w-4 text-red-600 mt-1" size={16} />
                    <span>Visit any branch with ID proof</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="min-w-4 text-red-600 mt-1" size={16} />
                    <span>Get priority delivery within 48 hours</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Button className="bg-red-600 hover:bg-red-700">Report Lost Card Now</Button>
          </div>
        </div>
      </section>
      
      {/* Apply for Card Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Ready to Apply?</h2>
            <p className="text-lg opacity-90">Get your new Skylet Bank card in just a few easy steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-center mb-4">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <p className="text-xl font-bold">1</p>
                </div>
                <h3 className="text-xl font-semibold">Choose Your Card</h3>
              </div>
              <p className="text-center opacity-90">Select the card that best fits your lifestyle and financial needs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-center mb-4">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <p className="text-xl font-bold">2</p>
                </div>
                <h3 className="text-xl font-semibold">Apply Online</h3>
              </div>
              <p className="text-center opacity-90">Complete the application form with your details and submit required documents</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-center mb-4">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <p className="text-xl font-bold">3</p>
                </div>
                <h3 className="text-xl font-semibold">Get Approved</h3>
              </div>
              <p className="text-center opacity-90">Receive your card within 7 working days after approval</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">Apply for a Card Now</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CardsPage;