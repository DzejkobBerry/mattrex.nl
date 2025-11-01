import React from 'react';
import { Container } from '../shared/Container';
import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import Link from 'next/link';
import { BatteryIcon, ZapIcon, SunIcon } from 'lucide-react';
export function Products() {
  const products = [{
    icon: BatteryIcon,
    name: 'Energy Storage Systems',
    description: 'High-capacity battery solutions for residential and commercial use. Store excess solar energy for use anytime.',
    features: ['10-20 kWh capacity', 'Smart monitoring', '10-year warranty'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop'
  }, {
    icon: ZapIcon,
    name: 'Solar Inverters',
    description: 'Premium inverters that convert DC power to AC with maximum efficiency and reliability.',
    features: ['99% efficiency', 'Hybrid capability', 'Remote monitoring'],
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop'
  }, {
    icon: SunIcon,
    name: 'Complete Systems',
    description: 'Fully integrated solar + storage solutions designed for optimal performance and savings.',
    features: ['Turnkey installation', 'Custom design', 'Full support'],
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop'
  }];
  return <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our range of premium energy storage and solar solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => <Card key={index} hover className="overflow-hidden p-0">
              <div className="relative h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                  <product.icon size={24} className="text-primary" />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-secondary">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>

                <ul className="space-y-2">
                  {product.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>)}
                </ul>

                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </Card>)}
        </div>
      </Container>
    </section>;
}