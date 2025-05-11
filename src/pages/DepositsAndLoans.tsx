
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ChevronRight, Wallet, Home, GraduationCap, Car, Calculator, Award } from "lucide-react";

const DepositsAndLoansPage = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(5);
  const [interestRate, setInterestRate] = useState(8);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount.toString());
    const calculatedInterest = parseFloat(interestRate.toString()) / 100 / 12;
    const calculatedPayments = parseFloat(loanTerm.toString()) * 12;
    
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    
    setMonthlyPayment(monthly);
  };
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      
      <section className="relative bg-gradient-to-r from-blue-800 via-green-600 to-blue-700 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Ways to Save & Borrow</h1>
              <p className="text-lg mb-6">Discover our range of deposit options and loan products designed to help you achieve your financial goals.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-black hover:bg-green-50">Start Saving</Button>
                <Button className="bg-transparent border border-white text-white hover:bg-white/10">Apply for a Loan</Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl">
                <div className="text-white mb-4">
                  <h3 className="font-bold text-xl">Current Interest Rates</h3>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="flex justify-between text-white">
                    <span>Fixed Deposit (1 Year)</span>
                    <span className="font-bold">6.5%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Recurring Deposit</span>
                    <span className="font-bold">5.8%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Home Loan</span>
                    <span className="font-bold">7.9%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Personal Loan</span>
                    <span className="font-bold">11.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Deposit Options Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-700 text-transparent bg-clip-text">
            Deposit Options
            </h2>
            <p className="text-lg text-gray-600">Grow your money with our secure deposit solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Wallet size={20} className="text-green-600" />
                  </div>
                  <CardTitle>Fixed Deposit</CardTitle>
                </div>
                <CardDescription>Lock in your funds for a fixed period and earn guaranteed returns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Interest Rate</span>
                    <span className="font-bold text-green-600">Up to 7.5% p.a.</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Term Options</span>
                    <span>7 days to 10 years</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Minimum Deposit</span>
                    <span>৳5,000</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="min-w-4 text-green-600 mt-1" size={16} />
                    <span>Higher interest rates for senior citizens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="min-w-4 text-green-600 mt-1" size={16} />
                    <span>Loan facility against deposit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="min-w-4 text-green-600 mt-1" size={16} />
                    <span>Flexible renewal options</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">Open Fixed Deposit</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Calculator size={20} className="text-green-600" />
                  </div>
                  <CardTitle>Recurring Deposit</CardTitle>
                </div>
                <CardDescription>Build your savings with regular monthly deposits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Interest Rate</span>
                    <span className="font-bold text-green-600">Up to 6.8% p.a.</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Term Options</span>
                    <span>6 months to 10 years</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Minimum Monthly Deposit</span>
                    <span>৳1,000</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="min-w-4 text-green-600 mt-1" size={16} />
                    <span>Flexible deposit date options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="min-w-4 text-green-600 mt-1" size={16} />
                    <span>Standing instruction facility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="min-w-4 text-green-600 mt-1" size={16} />
                    <span>Premature withdrawal option</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">Open Recurring Deposit</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Loan Types Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-500 text-transparent bg-clip-text">
            Loan Products
            </h2>
            <p className="text-lg text-gray-600">Financing solutions for all your needs</p>
          </div>
          
          <Tabs defaultValue="personal">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="personal">Personal Loan</TabsTrigger>
              <TabsTrigger value="home">Home Loan</TabsTrigger>
              <TabsTrigger value="education">Education Loan</TabsTrigger>
              <TabsTrigger value="car">Car Loan</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Wallet size={20} className="text-blue-600" />
                        </div>
                        <CardTitle>Personal Loan</CardTitle>
                      </div>
                      <CardDescription>Quick funds for your personal needs with minimal documentation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Interest Rate</span>
                          <span className="font-bold text-blue-600">Starting at 10.5% p.a.</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Loan Amount</span>
                          <span>৳50,000 - ৳20,00,000</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Tenure</span>
                          <span>1 - 5 years</span>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Benefits</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>Quick disbursal within 48 hours</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>No collateral required</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>Minimal documentation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>Flexible repayment options</span>
                          </li>
                        </ul>
                      </div>
                      <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">
                            Apply Now
                    </Button>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Eligibility</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Age: 21-60 years</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Minimum income: ₹25,000 per month</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Employment: Salaried with 2+ years of experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Good credit history</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="home" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Home size={20} className="text-blue-600" />
                        </div>
                        <CardTitle>Home Loan</CardTitle>
                      </div>
                      <CardDescription>Finance your dream home with competitive interest rates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Interest Rate</span>
                          <span className="font-bold text-blue-600">Starting at 7.9% p.a.</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Loan Amount</span>
                          <span>Up to ৳5 crore</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Tenure</span>
                          <span>Up to 30 years</span>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Benefits</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>Attractive interest rates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>Quick approval and disbursal</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>No prepayment charges</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>Tax benefits on principal and interest</span>
                          </li>
                        </ul>
                      </div>
                      <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">
                            Apply Now
                    </Button>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Eligibility</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Age: 21-65 years</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Employment: Salaried/Self-employed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Income stability: Min 2 years</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Good credit history</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <GraduationCap size={20} className="text-blue-600" />
                        </div>
                        <CardTitle>Education Loan</CardTitle>
                      </div>
                      <CardDescription>Invest in your future with our education financing options</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Interest Rate</span>
                          <span className="font-bold text-blue-600">Starting at 8.5% p.a.</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Loan Amount</span>
                          <span>Up to ৳75 lakhs</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Tenure</span>
                          <span>Up to 15 years</span>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Benefits</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>100% financing for studies in India and abroad</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>Covers tuition fees, accommodation, and more</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>Repayment starts after course completion</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>Tax benefits under Section 80E</span>
                          </li>
                        </ul>
                      </div>
                      <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">
                            Apply Now
                    </Button>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Eligibility</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Indian citizen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Secured admission in recognized institution</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Age: 18-35 years</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Co-borrower (parent/guardian) required</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="car" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Car size={20} className="text-blue-600" />
                        </div>
                        <CardTitle>Car Loan</CardTitle>
                      </div>
                      <CardDescription>Drive your dream car with our affordable auto financing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Interest Rate</span>
                          <span className="font-bold text-blue-600">Starting at 8.9% p.a.</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Loan Amount</span>
                          <span>Up to ৳1 crore</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Tenure</span>
                          <span>Up to 8 years</span>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Benefits</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>100% financing for select models</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>Quick approval and disbursal</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>Minimal documentation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                            <span>Special offers for existing customers</span>
                          </li>
                        </ul>
                      </div>
                      <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 to-green-600">
                            Apply Now
                    </Button>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Eligibility</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Age: 21-65 years</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Employment: Salaried/Self-employed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Minimum income: ৳3 lakh per annum</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="min-w-4 text-blue-600 mt-1" size={16} />
                          <span>Good credit history</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* EMI Calculator Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-500 text-transparent bg-clip-text">
            EMI Calculator
            </h2>
            <p className="text-lg text-gray-600">Plan your loan repayments with our easy-to-use calculator</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="rounded-2xl bg-gray-200">
              <CardHeader>
                <CardTitle>Loan Details</CardTitle>
                <CardDescription>Adjust the sliders or enter values to calculate your EMI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="loanAmount">Loan Amount: ৳{loanAmount.toLocaleString()}</Label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        id="loanAmount"
                        min="50000"
                        max="10000000"
                        step="10000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full"
                      />
                      <Input 
                        type="number" 
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-24"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="loanTerm">Loan Term: {loanTerm} years</Label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        id="loanTerm"
                        min="1"
                        max="30"
                        step="1"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        className="w-full"
                      />
                      <Input 
                        type="number" 
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        className="w-24"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="interestRate">Interest Rate: {interestRate}%</Label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        id="interestRate"
                        min="5"
                        max="20"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full"
                      />
                      <Input 
                        type="number" 
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-24"
                      />
                    </div>
                  </div>
                  
                  <Button onClick={calculateEMI} className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                    Calculate EMI
                    </Button>
                  
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl bg-gray-200">
              <CardHeader>
                <CardTitle>EMI Result</CardTitle>
                <CardDescription>Your estimated monthly installment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  {monthlyPayment > 0 ? (
                    <>
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text mb-2">
                         ৳{monthlyPayment.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                      </div>
                      <p className="text-gray-600">per month</p>
                      
                      <div className="mt-8 text-left">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-gray-600">Total Principal</p>
                            <p className="font-semibold"> ৳{loanAmount.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Total Interest</p>
                            <p className="font-semibold"> ৳{((monthlyPayment * loanTerm * 12) - loanAmount).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Total Amount</p>
                            <p className="font-semibold"> ৳{(monthlyPayment * loanTerm * 12).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Loan Term</p>
                            <p className="font-semibold">{loanTerm} years ({loanTerm * 12} months)</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-xl text-gray-500">
                      Adjust the loan parameters and click Calculate
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Alert className="mt-8 bg-blue-50 border-blue-200">
            <AlertTitle>Disclaimer</AlertTitle>
            <AlertDescription>
              This calculator provides an estimate. Actual EMI may vary based on processing fees, disbursement date, and other factors. Please contact our loan officer for exact figures.
            </AlertDescription>
          </Alert>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-green-700 to-purple-500 text-transparent bg-clip-text">
            Success Stories
            </h2>
            <p className="text-lg text-gray-600">Hear from our satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-yellow-500" />
                </div>
                <p className="text-gray-700 mb-6">
                  "The home loan process was incredibly smooth. The team at Skylet Bank guided me through every step, making my dream home a reality."
                </p>
                <div className="text-center">
                  <p className="font-semibold">Rahul Sharma</p>
                  <p className="text-sm text-gray-500">Home Loan Customer</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-yellow-500" />
                </div>
                <p className="text-gray-700 mb-6">
                  "Thanks to Skylet Bank's education loan, I was able to pursue my masters abroad without any financial stress. The repayment options are flexible and student-friendly."
                </p>
                <div className="text-center">
                  <p className="font-semibold">Priya Patel</p>
                  <p className="text-sm text-gray-500">Education Loan Customer</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-yellow-500" />
                </div>
                <p className="text-gray-700 mb-6">
                  "I've been growing my savings through Skylet Bank's recurring deposits. The interest rates are competitive and the auto-debit feature makes saving effortless."
                </p>
                <div className="text-center">
                  <p className="font-semibold">Amit Verma</p>
                  <p className="text-sm text-gray-500">Recurring Deposit Customer</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DepositsAndLoansPage;