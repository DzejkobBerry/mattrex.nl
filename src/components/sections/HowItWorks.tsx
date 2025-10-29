import React from 'react';
import { Container } from '../shared/Container';
import { PhoneIcon, PencilRulerIcon, WrenchIcon, ShieldCheckIcon } from 'lucide-react';
export function HowItWorks() {
  const steps = [{
    icon: PhoneIcon,
    title: 'Consultatie',
    description: 'Neem contact op voor een gratis consultatie. Wij beoordelen uw energiebehoeften en locatie-eisen.'
  }, {
    icon: PencilRulerIcon,
    title: 'Systeemontwerp',
    description: 'Onze experts ontwerpen een op maat gemaakte oplossing afgestemd op uw specifieke wensen en budget.'
  }, {
    icon: WrenchIcon,
    title: 'Installatie',
    description: 'Professionele installatie door gecertificeerde technici, met optimale prestaties en veiligheid.'
  }, {
    icon: ShieldCheckIcon,
    title: 'Onderhoud',
    description: 'Continue ondersteuning en onderhoud om uw systeem op topefficiëntie te houden.'
  }];
  return <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop" alt="Solar installation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-primary/90"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Hoe Het Werkt</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Van consultatie tot installatie, wij maken het proces eenvoudig en
            naadloos.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg relative">
                  <step.icon size={36} className="text-primary" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-white/90">{step.description}</p>
              </div>)}
          </div>
        </div>
      </Container>
    </section>;
}