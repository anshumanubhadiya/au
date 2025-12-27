import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hammer, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import ChatWidget from './ChatWidget';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 w-full bg-slate-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-amber-600 p-2 rounded group-hover:bg-amber-500 transition-colors">
                <Hammer className="h-6 w-6 text-slate-900" />
              </div>
              <span className="text-xl font-bold tracking-wider">SARVOTAM<span className="text-amber-500">CONST</span></span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-slate-800 text-amber-500'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                {/* Client Portal Button (Mock) */}
                <button className="ml-4 px-4 py-2 border border-amber-500 text-amber-500 rounded-md text-sm font-medium hover:bg-amber-500 hover:text-slate-900 transition-all">
                  Client Login
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-slate-900 text-amber-500'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full text-left mt-4 px-3 py-2 border border-amber-500 text-amber-500 rounded-md text-base font-medium hover:bg-amber-500 hover:text-slate-900 transition-all">
                Client Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-amber-600 p-1.5 rounded">
                  <Hammer className="h-5 w-5 text-slate-900" />
                </div>
                <span className="text-lg font-bold text-white tracking-wider">SARVOTAM<span className="text-amber-500">CONST</span></span>
              </div>
              <p className="text-sm leading-relaxed">
                Building dreams with precision and integrity since 199. We specialize in residential, commercial, and industrial construction projects.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/sarvotam.construction" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
                <a href="https://www.instagram.com/manoj.ubhadiya" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-amber-500 transition-colors">Our Services</Link></li>
                <li><Link to="/portfolio" className="hover:text-amber-500 transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Get a Quote</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>Residential Construction</li>
                <li>Commercial Development</li>
                <li>Renovations & Remodeling</li>
                <li>Industrial Projects</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Railway Station Road Narsinh Nivas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-amber-500 flex-shrink-0" />
                  <span>95787xxxxx</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-amber-500 flex-shrink-0" />
                  <span>sarvotamconstruction@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} sarvotam Construction. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      <ChatWidget />
    </div>
  );
};

export default Layout;
