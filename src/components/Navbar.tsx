
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, User, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    { name: "Personal Banking", link: "/" },
    { name: "Business Banking", link: "/" },
    { name: "Islamic Banking", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Contact", link: "/" }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-bank-primary to-bank-accent">Skylet Bank</span>
            </Link>
          </div>

          {/* Navigation Links - desktop */}
          <div className="hidden md:ml-6 md:flex md:space-x-6">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                to={item.link}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-bank-primary border-b-2 border-transparent hover:border-bank-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Search size={16} />
              <span className="sr-only md:not-sr-only md:inline-block">Search</span>
            </Button>
            <Button className="bg-bank-primary hover:bg-bank-primary/90">
              <User size={16} className="mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bank-primary hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col space-y-2 px-3">
              <Button variant="outline" size="sm" className="flex items-center justify-center gap-2">
                <Search size={16} />
                <span>Search</span>
              </Button>
              <Button className="bg-bank-primary hover:bg-bank-primary/90">
                <User size={16} className="mr-2" />
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
