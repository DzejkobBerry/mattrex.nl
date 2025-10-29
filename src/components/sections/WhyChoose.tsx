import React from 'react';
import { Container } from '../shared/Container';
import { Card } from '../shared/Card';
import { CpuIcon, LeafIcon, TrendingDownIcon, WrenchIcon } from 'lucide-react';
export function WhyChoose() {
  const features = [{
    icon: CpuIcon,
    title: 'Geavanceerde Technologie',
    description: 'State-of-the-art energieopslagsystemen met slimme monitoring en optimalisatie.'
  }, {
    icon: LeafIcon,
    title: 'Milieuvriendelijke Oplossingen',
    description: 'Verminder uw CO2-voetafdruk met duurzame hernieuwbare energieopslag.'
  }, {
    icon: TrendingDownIcon,
    title: 'Langetermijn Besparingen',
    description: 'Verlaag uw energierekening en maximaliseer ROI met efficiënt energiebeheer.'
  }, {
    icon: WrenchIcon,
    title: 'Professionele Installatie',
    description: 'Deskundige installatie en doorlopende ondersteuning door gecertificeerde technici.'
  }];
  return <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&h=1080&fit=crop" alt="Wind turbines" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/95"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Waarom Kiezen Voor MATTREX?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wij leveren geavanceerde energieoplossingen ondersteund door
            expertise en toewijding aan duurzaamheid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <Card key={index} hover className="bg-white/80 backdrop-blur-sm">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>)}
        </div>
      </Container>
    </section>;
}