import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, LinkedinIcon, InstagramIcon, SendIcon } from 'lucide-react';
export function Footer() {
  return <footer className="relative bg-gradient-to-br from-secondary-dark via-secondary to-secondary-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Accent top divider */}
        <div className="h-px w-full bg-gradient-to-r from-primary via-white/40 to-secondary/60 mb-8" />

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
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors hover:underline underline-offset-4">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors hover:underline underline-offset-4">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link to="/producten" className="text-gray-300 hover:text-primary transition-colors hover:underline underline-offset-4">
                  Producten
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors hover:underline underline-offset-4">
                  Projecten
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors hover:underline underline-offset-4">
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

          {/* Newsletter + Social */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Blijf op de hoogte</h3>
            <p className="text-gray-300 text-sm mb-4">Ontvang updates en aanbiedingen rechtstreeks in uw inbox.</p>
            <form className="w-full">
              <input type="email" placeholder="Uw e-mailadres" className="w-full bg-white/10 text-white placeholder-white/60 rounded-lg px-4 py-2 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary" />
            </form>
            <button type="button" className="mt-3 bg-primary text-secondary font-semibold rounded-lg px-4 py-2 hover:bg-primary-dark transition-colors flex items-center space-x-2">
              <SendIcon size={16} />
              <span>Aanmelden</span>
            </button>

            <div className="mt-6 flex space-x-3">
              <a href="#" className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition" aria-label="Facebook">
                <FacebookIcon size={20} className="text-white" />
              </a>
              <a href="#" className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition" aria-label="LinkedIn">
                <LinkedinIcon size={20} className="text-white" />
              </a>
              <a href="#" className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition" aria-label="Instagram">
                <InstagramIcon size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MATTREX.nl. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>;
}