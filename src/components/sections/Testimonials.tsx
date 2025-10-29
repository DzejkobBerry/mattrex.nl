import React, { useEffect, useState } from 'react';
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
  }, {
    name: 'Anouk Visser',
    role: 'Architect',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Het systeem werkt naadloos samen met onze zonnepanelen. Heldere communicatie en perfecte oplevering.'
  }, {
    name: 'Tom Janssen',
    role: 'IT Manager',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Betrouwbare back-up tijdens stroomstoringen. Besparingen zijn boven verwachting.'
  }, {
    name: 'Mila van der Meer',
    role: 'Ondernemer',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Snelle installatie, duidelijke uitleg en uitstekende nazorg. Een aanrader voor iedereen.'
  }];
  
  // Podziel opinie na slajdy po 3 karty
  const slides: typeof testimonials[] = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    slides.push(testimonials.slice(i, i + 3));
  }
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [paused, slides.length]);
  return <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sluit u aan bij honderden tevreden klanten die de overstap naar
            duurzame energie hebben gemaakt.
          </p>
        </div>
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((group, slideIndex) => (
              <div key={slideIndex} className="min-w-full px-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {group.map((testimonial, cardIndex) => (
                    <Card key={`${slideIndex}-${cardIndex}`} hover className="bg-white/90 backdrop-blur-sm">
                      <div className="space-y-4">
                        <QuoteIcon size={32} className="text-primary/30" />
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon key={i} size={20} className="text-yellow-400 fill-current" />
                          ))}
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
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Przejdź do slajdu ${i + 1}`}
                className={`h-2 w-2 rounded-full ${current === i ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>;
}