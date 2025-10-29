import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-white rounded-lg flex items-center justify-center">
                <span className="text-secondary font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold">MATTREX</span>
            </div>
            <p className="text-gray-300 text-sm">
              Innovatieve energieopslagoplossingen voor een duurzame toekomst.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link to="/producten" className="text-gray-300 hover:text-primary transition-colors">
                  Producten
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors">
                  Projecten
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <PhoneIcon size={18} className="text-primary" />
                <span className="text-gray-300 text-sm">
                  +31 (0) 20 123 4567
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <MailIcon size={18} className="text-primary" />
                <span className="text-gray-300 text-sm">info@mattrex.nl</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPinIcon size={18} className="text-primary" />
                <span className="text-gray-300 text-sm">
                  Amsterdam, Nederland
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Volg Ons</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Facebook">
                <FacebookIcon size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Instagram">
                <InstagramIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MATTREX.nl. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>;
}