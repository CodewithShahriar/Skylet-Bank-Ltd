import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks = [
    { name: "About Us", href: "/" },
    { name: "Careers", href: "/" },
    { name: "News & Media", href: "/" },
    { name: "Investor Relations", href: "/" },
    { name: "Corporate Social Responsibility", href: "/" }
  ];

  const productLinks = [
    { name: "Savings Accounts", href: "/" },
    { name: "Current Accounts", href: "/" },
    { name: "Credit Cards", href: "/" },
    { name: "Personal Loans", href: "/" },
    { name: "Home Loans", href: "/" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "/" },
    { name: "Contact Us", href: "/" },
    { name: "ATM Locator", href: "/" },
    { name: "Branch Locator", href: "/" },
    { name: "FAQ", href: "/" }
  ];

  return (
    <footer className="bg-gradient-to-tr from-green-600 via-blue-800 to-purple-800 text-white">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Newsletter Section */}
        <div className="bg-bank-primary/20 rounded-xl p-6 mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/70 mb-0">Subscribe to our newsletter for the latest news and offers</p>
            </div>
            <div className="flex gap-2">
              {!subscribed ? (
                <>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-bank-accent"
                  />
                  <Button
                    className="bg-bank-accent hover:bg-bank-accent/90"
                    onClick={() => {
                      if (email.trim()) {
                        setSubscribed(true);
                      }
                    }}
                  >
                    Subscribe
                  </Button>
                </>
              ) : (
                <p className="text-white font-medium">
                  Thank you for subscribing! Our support team will reach out via email if needed.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">Skylet Bank</span>
            </Link>
            <p className="text-white/70 mb-4">
              Providing innovative banking solutions for individuals and businesses
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-bank-accent mt-0.5" />
                <div>
                  <p className="font-medium">Customer Support</p>
                  <p className="text-white/70">165247 (24/7)</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-bank-accent mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-white/70">info@skyletbank.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-bank-accent mt-0.5" />
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="text-white/70">Skylet Tower, 123 Gulshan Avenue, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-bold text-lg mb-4">Banking Hours</h4>
            <ul className="space-y-2 text-white/70">
              <li>Sunday - Thursday</li>
              <li>10:00 AM - 4:00 PM</li>
              <li className="pt-2">Friday - Saturday</li>
              <li>Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-white/50 text-sm">
              © 2023 Skylet Bank Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/" className="text-white/50 hover:text-white text-sm">Privacy Policy</a>
              <a href="/" className="text-white/50 hover:text-white text-sm">Terms & Conditions</a>
              <a href="/" className="text-white/50 hover:text-white text-sm">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
