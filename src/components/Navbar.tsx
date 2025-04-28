
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { Menu, X, Music } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Music className="h-8 w-8 text-music-600" />
          <span className="text-xl font-bold gradient-text">MelodyMind</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-music-600 font-medium transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-music-600 font-medium transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-music-600 font-medium transition-colors">
            Contact
          </Link>
          <Link to="/login">
            <Button variant="outline" size="sm" className="border-music-500 text-music-600 hover:bg-music-100">
              Login
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm" onClick={toggleMenu} className="p-1">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-music-600" />
            ) : (
              <Menu className="h-6 w-6 text-music-600" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 px-6 py-8 flex flex-col space-y-6 md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-music-600" />
            <span className="text-xl font-bold gradient-text">MelodyMind</span>
          </Link>
          <Button variant="ghost" size="sm" onClick={toggleMenu} className="p-1">
            <X className="h-6 w-6 text-music-600" />
          </Button>
        </div>
        <div className="flex flex-col space-y-6 items-center mt-12">
          <Link 
            to="/" 
            className="w-full text-center text-lg font-medium py-2 border-b border-gray-100 text-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="w-full text-center text-lg font-medium py-2 border-b border-gray-100 text-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="w-full text-center text-lg font-medium py-2 border-b border-gray-100 text-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/login" 
            className="w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button className="w-full bg-music-500 hover:bg-music-600">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
