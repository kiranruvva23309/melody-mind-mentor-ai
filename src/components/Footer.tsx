
import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-7 w-7 text-music-600" />
              <span className="text-xl font-bold gradient-text">MelodyMind</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Learn music theory interactively with our AI tutor. From beginner concepts to advanced 
              techniques, we're here to help you master music theory at your own pace.
            </p>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} MelodyMind. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-music-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-music-600 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-music-600 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-music-600 transition-colors">Login</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-music-600 transition-colors">Music Theory Basics</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-music-600 transition-colors">Chord Progressions</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-music-600 transition-colors">Scale Reference</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-music-600 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
