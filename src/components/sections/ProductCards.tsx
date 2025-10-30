import React from 'react';
import { Container } from '../shared/Container';
import { Button } from '../shared/Button';
import { Link } from 'react-router-dom';
import { BatteryIcon, ZapIcon, BoxIcon, CheckCircleIcon, TrendingDownIcon, ShieldCheckIcon } from 'lucide-react';
export function ProductCards() {
  const products = [{
    icon: BatteryIcon,
    name: 'Thuisbatterij 10kWh',
    tagline: 'Meest gekozen voor woningen',
    originalPrice: '€8.500',
    salePrice: '€7.500',
    discount: 'BESPAAR €1.000',
    capacity: '10 kWh',
    features: ['Gratis installatieadvies', '10 jaar fabrieksgarantie', 'Smart app besturing', 'Uitbreidbaar tot 20kWh', 'Noodstroom functie'],
    badge: 'POPULAIR',
    badgeColor: 'bg-orange-500',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop'
  }, {
    icon: BoxIcon,
    name: 'Zakelijke Batterij 50kWh',
    tagline: 'Optimaal voor MKB bedrijven',
    originalPrice: '€32.000',
    salePrice: '€28.500',
    discount: 'BESPAAR €3.500',
    capacity: '50 kWh',
    features: ['Gratis ROI analyse', '15 jaar garantie', 'Peak shaving functie', 'Remote monitoring', 'Subsidie ondersteuning'],
    badge: 'BESTE DEAL',
    badgeColor: 'bg-red-500',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop'
  }, {
    icon: ZapIcon,
    name: 'Industriële Batterij 200kWh',
    tagline: 'Voor grootschalige toepassingen',
    originalPrice: null,
    salePrice: 'Op aanvraag',
    discount: 'MAATWERK PRIJS',
    capacity: '200 kWh',
    features: ['Dedicated projectmanager', '20 jaar garantie', '24/7 monitoring', 'Preventief onderhoud', 'Volledige integratie'],
    badge: 'PREMIUM',
    badgeColor: 'bg-purple-600',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop'
  }];
  return <section id="special-offer" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 scroll-mt-24">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm mb-4">
            ⚡ SPECIALE AANBIEDING - BEPERKTE TIJD
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Kies Uw Energieopslagsysteem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dit zijn onze 3 meest populaire oplossingen voor <strong>energieopslag</strong>.
            Profiteer nu van onze introductiekorting – <strong>installatie gratis</strong>,
            tijdelijke actie. Bespaar direct op uw energierekening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {products.map((product, index) => <div key={index} className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary">
              {/* Badge */}
              <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-4 py-2 rounded-full font-bold text-xs z-10 shadow-lg`}>
                {product.badge}
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="bg-white rounded-full p-2">
                    <product.icon size={24} className="text-primary" />
                  </div>
                  <div className="bg-primary text-white px-3 py-1 rounded-full font-bold text-sm">
                    {product.capacity}
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {/* Product Name */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.tagline}</p>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    {product.originalPrice && <span className="text-gray-500 line-through text-lg">
                        {product.originalPrice}
                      </span>}
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {product.discount}
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-primary">
                    {product.salePrice}
                  </div>
                  {product.originalPrice && <p className="text-xs text-gray-600 mt-1">
                      Inclusief BTW, <strong>installatie gratis</strong> — tijdelijke actie
                    </p>}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircleIcon size={18} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>)}
                </ul>

                {/* Benefits Icons */}
                <div className="flex items-center justify-around pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <TrendingDownIcon size={24} className="text-primary mx-auto mb-1" />
                    <span className="text-xs text-gray-600">Lagere kosten</span>
                  </div>
                  <div className="text-center">
                    <ShieldCheckIcon size={24} className="text-primary mx-auto mb-1" />
                    <span className="text-xs text-gray-600">Garantie</span>
                  </div>
                  <div className="text-center">
                    <ZapIcon size={24} className="text-primary mx-auto mb-1" />
                    <span className="text-xs text-gray-600">Snel geleverd</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link to="/contact">
                  <Button className="w-full text-lg py-4 shadow-lg hover:shadow-xl">
                    Bestel Nu →
                  </Button>
                </Link>

                <p className="text-center text-xs text-gray-500">
                  Gratis offerte binnen 24 uur
                </p>
                <p className="text-center text-xs text-primary mt-1">
                  Actie: <strong>installatie gratis</strong> — beperkte tijd
                </p>
              </div>
            </div>)}
        </div>

        {/* View All Products Button */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">Meer opties nodig?</h3>
          <p className="mb-6 text-white/90">
            Bekijk ons complete assortiment met nog meer keuzes
          </p>
          <Link to="/producten">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white px-12">
              Bekijk Alle Producten
            </Button>
          </Link>
        </div>
      </Container>
    </section>;
}