import { Container } from '../shared/Container';
import { Button } from '../shared/Button';
import Link from 'next/link';
import { BatteryIcon, ZapIcon, CheckCircleIcon, TrendingDownIcon, ShieldCheckIcon } from 'lucide-react';
import type { ElementType } from 'react';
export function ProductCards() {
  type ProductItem = {
    icon: ElementType;
    name: string;
    tagline: string;
    originalPrice: string | null;
    salePrice: string;
    discount: string;
    capacity: string;
    features: string[];
    badge: string;
    badgeColor: string;
    image: string;
    extraBadge?: string;
    extraBadgeColor?: string;
  };
  const products: ProductItem[] = [
    {
      icon: BatteryIcon,
      name: 'Sluxer Home 16 kWh',
      tagline: 'Officiële Sluxer energieopslagmodule',
      originalPrice: null,
      salePrice: '€0,00',
      discount: 'Introductiekorting',
      capacity: '16 kWh',
      features: [
        '94% efficiëntie',
        '≥ 8000 cycli',
        'CAN / RS485 / Bluetooth',
        'Max. vermogen 7.68 kW',
        '10 jaar garantie'
      ],
      badge: 'Gratis installatie',
      badgeColor: 'bg-primary',
      image: 'https://i.imgur.com/SLuA5sC.png'
    },
    {
      icon: BatteryIcon,
      name: 'Sluxer Home 32 kWh',
      tagline: 'Officiële Sluxer energieopslagmodule',
      originalPrice: null,
      salePrice: '€0,00',
      discount: 'Introductiekorting',
      capacity: '32 kWh',
      features: [
        '94% efficiëntie',
        '≥ 8000 cycli',
        'CAN / RS485 / Bluetooth',
        'Max. vermogen 9.728 kW',
        '10 jaar garantie'
      ],
      badge: 'Meest gekocht',
      badgeColor: 'bg-orange-500',
      extraBadge: 'Gratis installatie',
      extraBadgeColor: 'bg-primary',
      image: 'https://i.imgur.com/s6sx6aX.png'
    },
    {
      icon: ZapIcon,
      name: 'DEYE SUN-10K-SG05LP3-EU Hybride Omvormer 10 kW',
      tagline: '3-fase hybride omvormer',
      originalPrice: null,
      salePrice: 'Op aanvraag',
      discount: 'MAATWERK PRIJS',
      capacity: '10 kW',
      features: [
        'Hybride',
        'UPS ondersteuning',
        'Parallel mogelijk',
        '3-fase',
        '12 jaar garantie'
      ],
      badge: 'Meest gekocht',
      badgeColor: 'bg-orange-500',
      image: 'https://i.imgur.com/bRFgxVj.png'
    }
  ];
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
              {/* Badges */}
              <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
                <div className={`${product.badgeColor} text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg`}>
                  {product.badge}
                </div>
                {product.extraBadge && (
                  <div className={`${product.extraBadgeColor ?? product.badgeColor} text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg`}>
                    {product.extraBadge}
                  </div>
                )}
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
                <Link href="/contact">
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
          <Link href="/producten">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white px-12">
              Bekijk Alle Producten
            </Button>
          </Link>
        </div>
      </Container>
    </section>;
}