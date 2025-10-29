import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Over Ons',
    path: '/about'
  }, {
    name: 'Producten',
    path: '/producten'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-secondary">MATTREX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.path} to={item.path} className={`text-base font-medium transition-colors ${isActive(item.path) ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                {item.name}
              </Link>)}
            <Link to="/#special-offer">
              <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                Vraag Offerte Aan
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && <div className="md:hidden py-4 space-y-4">
            {navItems.map(item => <Link key={item.path} to={item.path} className={`block text-base font-medium transition-colors ${isActive(item.path) ? 'text-primary' : 'text-gray-700 hover:text-primary'}`} onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>)}
            <Link to="/#special-offer" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                Vraag Offerte Aan
              </button>
            </Link>
          </div>}
      </nav>
    </header>;
}