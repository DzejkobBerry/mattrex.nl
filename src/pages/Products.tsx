import React from 'react';
import { Container } from '../components/shared/Container';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { Link } from 'react-router-dom';
import { BatteryIcon, ZapIcon, SunIcon, BoxIcon, HomeIcon, BuildingIcon, CheckCircleIcon } from 'lucide-react';
export function Products() {
  const productCategories = [{
    category: 'Thuisbatterijen',
    icon: HomeIcon,
    products: [{
      name: 'MATTREX Home 5kWh',
      capacity: '5 kWh',
      power: '2.5 kW',
      warranty: '10 jaar',
      price: 'Vanaf €4.500',
      features: ['Compact ontwerp', 'Stille werking', 'App besturing', 'Uitbreidbaar'],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop'
    }, {
      name: 'MATTREX Home 10kWh',
      capacity: '10 kWh',
      power: '5 kW',
      warranty: '10 jaar',
      price: 'Vanaf €7.500',
      features: ['Populairste keuze', 'Snelladen', 'Noodstroom functie', 'WiFi monitoring'],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop'
    }, {
      name: 'MATTREX Home 15kWh',
      capacity: '15 kWh',
      power: '7.5 kW',
      warranty: '12 jaar',
      price: 'Vanaf €10.500',
      features: ['Maximale capaciteit', 'Driefasig', 'Premium garantie', 'Geavanceerde AI'],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop'
    }]
  }, {
    category: 'Zakelijke Batterijen',
    icon: BuildingIcon,
    products: [{
      name: 'MATTREX Business 30kWh',
      capacity: '30 kWh',
      power: '15 kW',
      warranty: '15 jaar',
      price: 'Op aanvraag',
      features: ['MKB oplossing', 'Peak shaving', 'Laadpaal integratie', 'Remote monitoring'],
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop'
    }, {
      name: 'MATTREX Business 50kWh',
      capacity: '50 kWh',
      power: '25 kW',
      warranty: '15 jaar',
      price: 'Op aanvraag',
      features: ['Energiemanagement', 'Grid services', 'Modulair systeem', 'Predictive analytics'],
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop'
    }, {
      name: 'MATTREX Business 100kWh',
      capacity: '100 kWh',
      power: '50 kW',
      warranty: '20 jaar',
      price: 'Op aanvraag',
      features: ['Grootzakelijk', 'Volledige autonomie', 'Dedicated support', 'Custom integratie'],
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop'
    }]
  }, {
    category: 'Industriële Systemen',
    icon: BoxIcon,
    products: [{
      name: 'MATTREX Industrial 200kWh',
      capacity: '200 kWh',
      power: '100 kW',
      warranty: '20 jaar',
      price: 'Op aanvraag',
      features: ['Zware industrie', 'Microgrid ready', '24/7 monitoring', 'Preventief onderhoud'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop'
    }, {
      name: 'MATTREX Industrial 500kWh',
      capacity: '500 kWh',
      power: '250 kW',
      warranty: '25 jaar',
      price: 'Op aanvraag',
      features: ['Megaschaal', 'Grid stabilisatie', 'Frequentieregeling', 'Dedicated engineer'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop'
    }]
  }, {
    category: 'Omvormers & Accessoires',
    icon: ZapIcon,
    products: [{
      name: 'Hybride Omvormer 5kW',
      capacity: '5 kW',
      power: 'Enkelfasig',
      warranty: '10 jaar',
      price: 'Vanaf €1.800',
      features: ['AC/DC koppeling', 'MPPT technologie', 'Noodstroom', 'Compacte maat'],
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop'
    }, {
      name: 'Hybride Omvormer 10kW',
      capacity: '10 kW',
      power: 'Driefasig',
      warranty: '12 jaar',
      price: 'Vanaf €3.200',
      features: ['Driefasig', 'Parallel schakeling', 'Smart grid ready', 'Premium efficiëntie'],
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop'
    }, {
      name: 'EV Laadpaal 22kW',
      capacity: '22 kW',
      power: 'Slimme lading',
      warranty: '5 jaar',
      price: 'Vanaf €1.500',
      features: ['Zonneoverschot laden', 'App besturing', 'RFID toegang', 'Dynamisch laden'],
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop'
    }]
  }];
  return <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-secondary mb-6">
              Onze Producten
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Ontdek ons complete assortiment energieopslagsystemen, omvormers
              en accessoires. Van thuisbatterijen tot industriële oplossingen.
            </p>
          </div>
        </Container>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, catIndex) => <section key={catIndex} className={catIndex % 2 === 0 ? 'py-20 bg-white' : 'py-20 bg-gray-50'}>
          <Container>
            <div className="flex items-center justify-center mb-12">
              <div className="bg-primary/10 p-4 rounded-full mr-4">
                <category.icon size={32} className="text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-secondary">
                {category.category}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
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