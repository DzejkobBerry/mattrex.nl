import React from 'react';
import { Container } from '../shared/Container';
import { Card } from '../shared/Card';
import { StarIcon, QuoteIcon } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    name: 'Jan de Vries',
    role: 'Huiseigenaar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    text: 'MATTREX installeerde vorig jaar ons energieopslagsysteem. Onze elektriciteitsrekening is met 60% gedaald en we genieten van gemoedsrust tijdens stroomuitval.'
  }, {
    name: 'Sophie Bakker',
    role: 'Bedrijfseigenaar',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Professionele service van begin tot eind. Het team was deskundig, efficiënt en het systeem werkt feilloos. Sterk aanbevolen!'
  }, {
    name: 'Peter van Dijk',
    role: 'Boerderij Eigenaar',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 5,
    text: "De zonne-omvormer en het batterijsysteem hebben onze boerderijactiviteiten getransformeerd. We zijn nu energie-onafhankelijk en besparen jaarlijks duizenden euro's."
  }];
  return <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&h=1080&fit=crop" alt="Solar panels on roof" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/98 to-white/95"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sluit u aan bij honderden tevreden klanten die de overstap naar
            duurzame energie hebben gemaakt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} hover className="bg-white/90 backdrop-blur-sm">
              <div className="space-y-4">
                <QuoteIcon size={32} className="text-primary/30" />

                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} size={20} className="text-yellow-400 fill-current" />)}
                </div>

                <p className="text-gray-700 italic">"{testimonial.text}"</p>

                <div className="flex items-center space-x-3 pt-4 border-t">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-secondary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </Card>)}
        </div>
      </Container>
    </section>;
}