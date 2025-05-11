
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, MapPin, ShieldCheck } from "lucide-react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Skylet Bank</h1>
              <p className="text-lg mb-6">Modern banking with traditional values. We combine cutting-edge technology with personalized service to create a better banking experience.</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-1 rounded">
                    <Clock size={16} />
                  </div>
                  <span>Founded in 2010</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-1 rounded">
                    <MapPin size={16} />
                  </div>
                  <span>Headquartered in Dhaka</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-1 rounded">
                    <Users size={16} />
                  </div>
                  <span>Serving 2M+ customers</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-300 rounded-full opacity-20"></div>
                <div className="absolute -bottom-10 -right-6 w-32 h-32 bg-purple-300 rounded-full opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
                  alt="Skylet Bank Building" 
                  className="w-96 h-64 object-cover rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Overview Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600">Guiding principles that drive everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To provide accessible, innovative, and secure financial services that empower our customers to achieve their goals while contributing to the economic growth of Bangladesh.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-200 p-1 rounded-full mt-1">
                    <ShieldCheck className="text-blue-700" size={16} />
                  </div>
                  <span>Deliver exceptional customer experiences through innovative solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-200 p-1 rounded-full mt-1">
                    <ShieldCheck className="text-blue-700" size={16} />
                  </div>
                  <span>Make banking accessible to all segments of society</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-200 p-1 rounded-full mt-1">
                    <ShieldCheck className="text-blue-700" size={16} />
                  </div>
                  <span>Maintain the highest standards of integrity and ethics</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200 shadow-sm">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-6">
                To be the most trusted and innovative financial institution in Bangladesh, recognized for our technological advancement, customer-centricity, and contribution to sustainable development.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-purple-200 p-1 rounded-full mt-1">
                    <ShieldCheck className="text-purple-700" size={16} />
                  </div>
                  <span>Lead the digital transformation of banking in Bangladesh</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-purple-200 p-1 rounded-full mt-1">
                    <ShieldCheck className="text-purple-700" size={16} />
                  </div>
                  <span>Build lasting relationships based on trust and transparency</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-purple-200 p-1 rounded-full mt-1">
                    <ShieldCheck className="text-purple-700" size={16} />
                  </div>
                  <span>Contribute to sustainable economic growth and financial inclusion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in the Skylet Bank story</p>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-blue-200"></div>
            
            {/* Timeline items */}
            <div className="relative space-y-12">
              {/* 2010 */}
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-5/12 text-right md:pr-8 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-blue-700 mb-1">2010</h3>
                  <h4 className="text-lg font-semibold mb-2">Foundation</h4>
                  <p className="text-gray-700">Skylet Bank was founded with a vision to combine cutting-edge technology with personalized banking services.</p>
                </div>
                <div className="relative w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10 mb-3 md:mb-0 order-1 md:order-2">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="md:w-5/12 md:pl-8 order-3"></div>
              </div>
              
              {/* 2013 */}
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-5/12 order-2"></div>
                <div className="relative w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10 mb-3 md:mb-0 order-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="md:w-5/12 md:pl-8 order-3">
                  <h3 className="text-xl font-bold text-blue-700 mb-1">2013</h3>
                  <h4 className="text-lg font-semibold mb-2">Expansion</h4>
                  <p className="text-gray-700">Opened our 25th branch and launched our first mobile banking application, bringing modern banking to more customers.</p>
                </div>
              </div>
              
              {/* 2016 */}
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-5/12 text-right md:pr-8 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-blue-700 mb-1">2016</h3>
                  <h4 className="text-lg font-semibold mb-2">Digital Transformation</h4>
                  <p className="text-gray-700">Implemented advanced core banking system and launched digital-only accounts with enhanced security features.</p>
                </div>
                <div className="relative w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10 mb-3 md:mb-0 order-1 md:order-2">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="md:w-5/12 md:pl-8 order-3"></div>
              </div>
              
              {/* 2019 */}
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-5/12 order-2"></div>
                <div className="relative w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10 mb-3 md:mb-0 order-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="md:w-5/12 md:pl-8 order-3">
                  <h3 className="text-xl font-bold text-blue-700 mb-1">2019</h3>
                  <h4 className="text-lg font-semibold mb-2">Innovation Award</h4>
                  <p className="text-gray-700">Received the "Most Innovative Bank" award for our AI-driven customer service platform and contactless payment solutions.</p>
                </div>
              </div>
              
              {/* 2022 */}
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-5/12 text-right md:pr-8 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-blue-700 mb-1">2022</h3>
                  <h4 className="text-lg font-semibold mb-2">1 Million Customers</h4>
                  <p className="text-gray-700">Reached the milestone of serving 1 million customers and launched the Skylet Bank Sustainable Finance initiative.</p>
                </div>
                <div className="relative w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10 mb-3 md:mb-0 order-1 md:order-2">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="md:w-5/12 md:pl-8 order-3"></div>
              </div>
              
              {/* 2024 */}
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-5/12 order-2"></div>
                <div className="relative w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center z-10 mb-3 md:mb-0 order-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="md:w-5/12 md:pl-8 order-3">
                  <h3 className="text-xl font-bold text-purple-700 mb-1">2024</h3>
                  <h4 className="text-lg font-semibold mb-2">Today & Beyond</h4>
                  <p className="text-gray-700">Now serving over 2 million customers with 100+ branches nationwide, and continuing to innovate with blockchain technology and green banking initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the people guiding Skylet Bank's vision</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CEO */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-1">Ahmed Rahman</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm mb-4">
                  With over 25 years of experience in banking and finance, Ahmed has led Skylet Bank's transformation into a digital-first institution while maintaining exceptional customer service.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            {/* CTO */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" 
                  alt="CTO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-1">Farah Khan</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm mb-4">
                  Farah leads Skylet Bank's digital innovation, bringing 15+ years of expertise in fintech and cybersecurity to develop secure, cutting-edge banking solutions.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            {/* CFO */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" 
                  alt="CFO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-1">Kamal Hassan</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Financial Officer</p>
                <p className="text-gray-600 text-sm mb-4">
                  Kamal oversees Skylet Bank's financial strategies, with extensive experience in financial management, risk assessment, and sustainable growth planning.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline">View Full Team</Button>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide our actions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Trust & Integrity</h3>
              <p className="text-gray-600">
                We believe in absolute transparency and honesty in all our interactions. Our customers' trust is our most valuable asset, earned through consistent ethical conduct.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-green-700" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer-Centricity</h3>
              <p className="text-gray-600">
                Every decision we make starts with our customers' needs. We strive to make banking simple, accessible, and personalized for everyone we serve.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="text-purple-700" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We pursue excellence in everything we do, from customer service to product innovation. We believe in continuous improvement and setting new standards in banking.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-700"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m7 11 2 2 6-6"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Responsibility</h3>
              <p className="text-gray-600">
                We take responsibility for our actions and decisions, and we're committed to sustainable practices that benefit our community, environment, and stakeholders.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-700"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We embrace diversity and ensure our products and services are accessible to all segments of society, promoting financial inclusion across the country.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-700"><path d="M6 9H4.5a2.5 2.5 0 0 0 0 5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 1 0 5H18"></path><path d="M8 9h8"></path><path d="M8 15h8"></path><path d="M13.73 21a9.97 9.97 0 0 1-6.95-2.81"></path><path d="M10.22 3a10 10 0 0 1 10.8 9.5"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly seek new ways to improve our services and embrace technology to make banking more efficient, secure, and convenient for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CSR Activities Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Corporate Social Responsibility</h2>
            <p className="text-lg text-gray-600">Making a positive impact beyond banking</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c" 
                alt="CSR Activity - Education" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-2">Digital Literacy Program</h3>
              <p className="text-gray-600 mb-4">
                Our flagship CSR initiative provides digital literacy education to underserved communities across Bangladesh. By partnering with local schools and community centers, we've trained over 25,000 people in basic computer skills, internet safety, and digital financial literacy.
              </p>
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">Learn More</Button>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6" 
                alt="CSR Activity - Environment" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-2">Green Bangladesh Initiative</h3>
              <p className="text-gray-600 mb-4">
                Through our Green Bangladesh Initiative, we've planted over 50,000 trees nationwide and funded renewable energy projects in rural areas. We're committed to reducing our carbon footprint and supporting sustainable development throughout the country.
              </p>
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">Learn More</Button>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f" 
                  alt="Sustainability Report" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">Our Commitment to Sustainability</h3>
                <p className="text-gray-600 mb-4">
                  At Skylet Bank, sustainability isn't just a buzzword—it's integrated into our business strategy and operations. From paperless banking to green financing options and sustainable investment products, we're working to create positive environmental and social impact.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">Download Sustainability Report</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Awards & Recognition Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Awards & Recognition</h2>
            <p className="text-lg text-gray-600">Our commitment to excellence has been recognized</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">
                <Award className="text-yellow-500" size={48} />
              </div>
              <h3 className="text-lg font-bold mb-1">Best Digital Bank</h3>
              <p className="text-sm text-gray-500">Asian Banking Awards, 2023</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">
                <Award className="text-yellow-500" size={48} />
              </div>
              <h3 className="text-lg font-bold mb-1">Most Innovative Bank</h3>
              <p className="text-sm text-gray-500">Global Finance, 2022</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">
                <Award className="text-yellow-500" size={48} />
              </div>
              <h3 className="text-lg font-bold mb-1">Best Mobile Banking App</h3>
              <p className="text-sm text-gray-500">Financial Technology Forum, 2023</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">
                <Award className="text-yellow-500" size={48} />
              </div>
              <h3 className="text-lg font-bold mb-1">Excellence in CSR</h3>
              <p className="text-sm text-gray-500">Sustainable Business Awards, 2022</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Skylet Bank Family</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Whether you're looking for the best banking solutions or interested in career opportunities, we invite you to be part of our journey toward financial excellence.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50">Open an Account</Button>
            <Button className="bg-transparent border border-white hover:bg-white/10">Career Opportunities</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;