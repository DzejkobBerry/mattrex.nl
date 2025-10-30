import React from 'react';
import { Container } from '../components/shared/Container';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { Link } from 'react-router-dom';
import { BatteryIcon, ZapIcon, SunIcon, BoxIcon, HomeIcon, BuildingIcon, CheckCircleIcon } from 'lucide-react';
export function Products() {
  const productCategories = [
    {
      category: 'Energieopslag (Diensten)',
      icon: BatteryIcon,
      products: [
        {
          name: 'Thuisbatterij 16 kWh',
          capacity: '16 kWh',
          power: '3.6 kW',
          warranty: '10 jaar',
          price: 'Vanaf €6.900',
          features: ['Uitbreidbaar', 'Noodstroom', 'App monitoring'],
          image:
            'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
        },
        {
          name: 'Zakelijke opslag 64 kWh',
          capacity: '64 kWh',
          power: '30 kW',
          warranty: '15 jaar',
          price: 'Op aanvraag',
          features: ['Peak shaving', 'Energiemanagement', 'Remote monitoring'],
          image:
            'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop',
        },
        {
          name: 'Industriële opslag 256 kWh',
          capacity: '256 kWh',
          power: '100 kW',
          warranty: '20 jaar',
          price: 'Op aanvraag',
          features: ['Microgrid ready', '24/7 monitoring', 'Servicecontract'],
          image:
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
        },
      ],
    },
    {
      category: 'Inverters (Diensten)',
      icon: ZapIcon,
      products: [
        {
          name: 'Hybride Omvormer 5 kW',
          capacity: '5 kW',
          power: 'Enkelfasig',
          warranty: '10 jaar',
          price: 'Vanaf €1.800',
          features: ['AC/DC koppeling', 'MPPT', 'Noodstroom'],
          image:
            'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop',
        },
        {
          name: 'Hybride Omvormer 10 kW',
          capacity: '10 kW',
          power: 'Driefasig',
          warranty: '12 jaar',
          price: 'Vanaf €3.200',
          features: ['Parallel', 'Smart grid', 'Hoge efficiëntie'],
          image:
            'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop',
        },
        {
          name: 'UPS/Omvormer 15 kW',
          capacity: '15 kW',
          power: 'Driefasig',
          warranty: '12 jaar',
          price: 'Op aanvraag',
          features: ['UPS functie', 'Snelle omschakeling', 'Zakelijke integratie'],
          image:
            'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop',
        },
      ],
    },
    {
      category: 'Accessoires & Installatie (Diensten)',
      icon: BoxIcon,
      products: [
        {
          name: 'Installatie & Oplevering',
          capacity: 'Binnen NL',
          power: '1–3 fase',
          warranty: 'Werkgarantie',
          price: 'Actie: installatie gratis',
          features: ['Planning', 'Montage', 'Keuring'],
          image:
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
        },
        {
          name: 'BMS & Monitoring',
          capacity: 'Cloud/On-prem',
          power: 'Realtime',
          warranty: 'Supportcontract',
          price: 'Vanaf €499',
          features: ['App dashboard', 'Alarmen', 'Rapportage'],
          image:
            'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop',
        },
        {
          name: 'Onderhoud & Inspectie',
          capacity: 'Periodiek',
          power: 'Op locatie',
          warranty: 'Service SLA',
          price: 'Vanaf €299',
          features: ['Veiligheidscheck', 'Firmware updates', 'Prestatie-audit'],
          image:
            'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
        },
      ],
    },
  ];
  return <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-secondary mb-6">
              Onze Producten
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>MATTREX.nl</strong> is officieel en geautoriseerd distributeur van
              <strong>Sluxer</strong> in Nederland. Oplossingen voor <strong>energieopslag</strong>
              van <strong>16–512 kWh</strong>, <strong>inverters</strong> en accessoires — met
              volledige configuratie en technisch support.
            </p>
            <p className="mt-2 text-base text-gray-600">
              We installeren geen zonnepanelen; we focussen op batterijen,
              inverters en technisch toebehoren.
            </p>
          </div>
        </Container>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, catIndex) => <section key={catIndex} className={catIndex % 2 === 0 ? 'py-12 md:py-20 bg-white' : 'py-12 md:py-20 bg-gray-50'}>
          <Container>
            <div className="flex items-center justify-center mb-12">
              <div className="bg-primary/10 p-4 rounded-full mr-4">
                <category.icon size={32} className="text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-secondary">
                {category.category}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {category.products.map((product, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Capacity pill */}
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <div className="bg-primary text-white px-3 py-1 rounded-full font-bold text-sm">
                        {product.capacity}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Vermogen: {product.power}</span>
                        <span>Garantie: {product.warranty}</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4">
                      <div className="text-3xl font-bold text-primary">
                        {product.price}
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Inclusief BTW</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircleIcon
                            size={18}
                            className="text-primary mr-2 flex-shrink-0 mt-0.5"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link to="/contact">
                      <Button className="w-full text-lg py-4 shadow-lg hover:shadow-xl">
                        Vraag Offerte Aan →
                      </Button>
                    </Link>
                    <p className="text-center text-xs text-gray-500">Gratis offerte binnen 24 uur</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>)}

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">
              Niet Zeker Welk Systeem Past Bij U?
            </h2>
            <p className="text-xl opacity-90">
              Onze experts helpen u graag bij het kiezen van de perfecte
              energieoplossing voor uw situatie. Neem vrijblijvend contact op
              voor persoonlijk advies.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white">
                Gratis Adviesgesprek
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>;
}