
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail, MapPin, MessageSquare, Search, Clock, FileSearch } from "lucide-react";

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-green-600 to-blue-700 py-20 px-4 md:px-8 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">How Can We Help You?</h1>
              <p className="text-lg mb-6">Our dedicated support team is ready to assist you with any questions or concerns you may have.</p>
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Search for answers..." 
                  className="pr-10 bg-white/90 text-gray-800 h-12 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              </div>
            </div>
            <div className="hidden md:flex justify-center md:justify-end">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl max-w-xs">
                <h3 className="text-white font-bold mb-3">Quick Support</h3>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-3 text-white">
                    <Phone size={18} />
                    <span>24/7 Helpline: 1800-XXX-XXXX</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Mail size={18} />
                    <span>support@skyletbank.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <MessageSquare size={18} />
                    <span>Live Chat (8AM-10PM)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-16 px-4 md:px-8 relative z-10 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-blue-200 to-green-200 p-4 rounded-full mb-4">
                    <Phone className="text-black" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-green-900">
                    Call Us
                </h3>
                <p className="text-gray-600 mb-4">Our customer service is available 24/7 to help you with your banking needs.</p>
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-1">General Support: 1800-XXX-XXXX</p>
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-1">Card Support: 1800-XXX-YYYY</p>
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">International: +880-XX-XXXXXXX</p>
                </div>
            </CardContent>
            </Card>

            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-blue-200 to-green-200 p-4 rounded-full mb-4">
                    <Mail className="text-black" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-green-900">
                    Email Us
                </h3>
                <p className="text-gray-600 mb-4">Send us an email and we'll get back to you within 24 hours on business days.</p>
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600 mb-1">General Inquiries: info@skyletbank.com</p>
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600 mb-1">Customer Support: support@skyletbank.com</p>
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">Corporate Relations: business@skyletbank.com</p>
                </div>
            </CardContent>
            </Card>

            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-blue-200 to-green-200 p-4 rounded-full mb-4">
                    <MapPin className="text-black" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-green-900">
                    Visit Us
                </h3>
                <p className="text-gray-600 mb-4">Stop by our branches for in-person assistance from our banking experts.</p>
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-1">Headquarters: Skylet Tower, 123 Finance Street, Dhaka</p>
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-1">Hours: Monday-Friday 10AM-6PM</p>
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Weekend: Saturday 10AM-2PM</p>
                </div>
            </CardContent>
            </Card>

          </div>
        </div>
      </section>
      
      {/* Help Center / Knowledge Base Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-700 text-transparent bg-clip-text">Help Center</h2>
            <p className="text-lg text-gray-600">Find answers to commonly asked questions</p>
          </div>
          
          <Tabs defaultValue="accounts">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="accounts">Accounts</TabsTrigger>
              <TabsTrigger value="cards">Cards & Payments</TabsTrigger>
              <TabsTrigger value="loans">Loans & Deposits</TabsTrigger>
              <TabsTrigger value="digital">Digital Banking</TabsTrigger>
            </TabsList>
            
            <TabsContent value="accounts">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Opening a New Account</CardTitle>
                    <CardDescription>Everything you need to know about opening an account with us</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How do I open a new savings account?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>What documents are required for KYC verification?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>Can I open an account online?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>What are the minimum balance requirements?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How long does it take to activate my account?</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Managing Your Account</CardTitle>
                    <CardDescription>Tips for effectively managing your banking account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How do I check my account balance?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>What are the transaction limits for my account?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How can I update my personal information?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>What are the account maintenance charges?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How do I close my account?</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="cards">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Activation & Management</CardTitle>
                    <CardDescription>Get help with your debit and credit cards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How do I activate my new card?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How to set or change my card PIN?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>What should I do if my card is lost or stolen?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How do I enable international transactions?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How to view my credit card statement?</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Payments & Transactions</CardTitle>
                    <CardDescription>Information about payments, transfers, and security</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How do I dispute a transaction on my card?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>What are the daily transaction limits?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How to make bill payments using my card?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>Are there any charges for ATM withdrawals?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How to redeem reward points on my credit card?</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="loans">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Loan Information</CardTitle>
                    <CardDescription>Everything you need to know about our loan products</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>What types of loans does Skylet Bank offer?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How do I apply for a personal loan?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>What documents are required for loan approval?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How is my loan interest calculated?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How to check my loan status?</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Deposits & Investments</CardTitle>
                    <CardDescription>Information about Fixed Deposits, RDs, and more</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>What are the current FD interest rates?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How do I open a recurring deposit?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>Is premature withdrawal of FD allowed?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>What investment options does Skylet Bank offer?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>Are there tax benefits on my deposits?</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="digital">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Mobile & Internet Banking</CardTitle>
                    <CardDescription>Help with our digital banking platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How do I register for mobile banking?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>I forgot my internet banking password. What should I do?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How secure is your mobile banking app?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How do I update my mobile banking app?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>Can I use mobile banking abroad?</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Digital Security</CardTitle>
                    <CardDescription>Tips and information about keeping your accounts secure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How to report suspicious activity on my account?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>Tips to avoid phishing and fraud</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How does Skylet Bank protect my information?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>What is Two-Factor Authentication?</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <FileSearch size={16} />
                          <span>How often should I change my password?</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-10">
            <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">Browse All Articles</Button>
          </div>
        </div>
      </section>
      
      {/* Branch & ATM Locator */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-700 text-transparent bg-clip-text">Branch & ATM Locator</h2>
            <p className="text-lg text-gray-600">Find your nearest Skylet Bank branch or ATM</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="col-span-1 md:col-span-1">
              <CardHeader>
                <CardTitle>Find Locations</CardTitle>
                <CardDescription>Search for branches and ATMs near you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Enter City or Postal Code</Label>
                    <Input id="location" placeholder="e.g., Dhaka or 1207" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Select What You're Looking For</Label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span>Branches</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span>ATMs</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Filter By Services</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>24/7 Access</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Cash Deposit</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Drive-through</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Loan Services</span>
                      </label>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-700 hover:from-blue-600 hover:to-green-600">
  Search Locations
</Button>

                </div>
              </CardContent>
            </Card>
            
            <div className="col-span-1 md:col-span-2 bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto text-gray-400 mb-2" size={32} />
                <p className="text-gray-600">Map will display here with branch and ATM locations</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Popular Locations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Gulshan Branch</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>123 Gulshan Avenue, Dhaka</p>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>10AM-6PM (Mon-Fri)</span>
                    </div>
                    <p>ATMs: 24/7 Access</p>
                  </div>
                  <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-700 hover:text-transparent text-sm inline-block mt-2">
  View Details
</a>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Dhanmondi Branch</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>45 Dhanmondi, Road 7, Dhaka</p>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>10AM-6PM (Mon-Fri)</span>
                    </div>
                    <p>ATMs: 24/7 Access</p>
                  </div>
                  <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-700 hover:text-transparent text-sm inline-block mt-2">
  View Details
</a>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Uttara Branch</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>House 7, Road 12, Sector 6, Uttara</p>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>10AM-6PM (Mon-Fri)</span>
                    </div>
                    <p>ATMs: 24/7 Access</p>
                  </div>
                  <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-700 hover:text-transparent text-sm inline-block mt-2">
  View Details
</a>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Chittagong Branch</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>15 GEC Circle, Chittagong</p>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>10AM-6PM (Mon-Fri)</span>
                    </div>
                    <p>ATMs: 24/7 Access</p>
                  </div>
                  <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-700 hover:text-transparent text-sm inline-block mt-2">
  View Details
</a>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Complaint Form Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-700 text-transparent bg-clip-text">Submit a Complaint</h2>
            <p className="text-lg text-gray-600">We're committed to addressing your concerns promptly</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold mb-4">Complaint Resolution Process</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-200 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Submit Your Complaint</h4>
                      <p className="text-sm text-gray-600">Fill in the form with details of your issue</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-200 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Acknowledgment</h4>
                      <p className="text-sm text-gray-600">Receive a tracking number within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-200 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Investigation</h4>
                      <p className="text-sm text-gray-600">Our team reviews your complaint</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-200 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Resolution</h4>
                      <p className="text-sm text-gray-600">Receive feedback and resolution</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border border-blue-300">
                  <p className="text-sm text-gray-600">
                    Most complaints are resolved within 7 business days. Complex issues may take up to 15 business days.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <Card className="rounded-lg border border-gray-400 ">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" placeholder="John Doe" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="accountNumber">Account Number (if applicable)</Label>
                        <Input id="accountNumber" placeholder="123456789" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+880 1XXXXXXXXX" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="complaintType">Complaint Type</Label>
                      <select id="complaintType" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <option value="">Select complaint type</option>
                        <option value="account">Account Related</option>
                        <option value="card">Card Related</option>
                        <option value="loan">Loan Related</option>
                        <option value="digital">Digital Banking</option>
                        <option value="service">Customer Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Brief subject of your complaint" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Complaint Details</Label>
                      <textarea 
                        id="description" 
                        rows={5} 
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        placeholder="Please provide details about your complaint..."
                      ></textarea>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="attachment">Attach Files (optional)</Label>
                      <Input id="attachment" type="file" />
                      <p className="text-xs text-gray-500">Max file size: 5MB. Supported formats: PDF, JPG, PNG</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="terms" className="mt-1" />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I acknowledge that my information will be used to address this complaint and may be shared with relevant departments for resolution.
                      </label>
                    </div>
                    
                    <Button className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-green-700 hover:from-blue-600 hover:to-green-600">
  Submit Complaint
</Button>

                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-700 text-transparent bg-clip-text">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>What should I do if I forget my internet banking password?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  You can reset your password by clicking the "Forgot Password" link on the login page. You'll need to verify your identity through OTP sent to your registered mobile number. Alternatively, you can call our 24/7 helpline at 1800-XXX-XXXX for assistance.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>How can I report a lost or stolen card?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  You should immediately report a lost or stolen card by calling our 24/7 card helpline at 1800-XXX-YYYY. You can also block your card through the mobile banking app or internet banking. After blocking, request a replacement card through any branch or the mobile app.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>What are the working hours of Skylet Bank branches?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Most Skylet Bank branches operate from 10:00 AM to 6:00 PM, Monday through Friday. Selected branches also open on Saturdays from 10:00 AM to 2:00 PM. ATMs and digital banking services are available 24/7. You can check specific branch timings using our Branch Locator.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>How long does it take to process a loan application?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Personal loan applications are typically processed within 48-72 hours of receiving all required documents. Home loans may take 7-10 working days. You can check your application status through our mobile app, internet banking, or by contacting your relationship manager.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline">View More FAQs</Button>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-green-600 to-blue-700 py-20 px-4 md:px-8 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our dedicated customer support team is available 24/7 to assist you with any questions or concerns you may have.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2">
              <Phone size={18} />
              Call Us Now
            </Button>
            <Button className="bg-transparent border border-white hover:bg-white/10 flex items-center gap-2">
              <MessageSquare size={18} />
              Start Live Chat
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SupportPage;