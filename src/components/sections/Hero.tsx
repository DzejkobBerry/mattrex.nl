import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../shared/Button';
import { Container } from '../shared/Container';
import { ZapIcon } from 'lucide-react';
export function Hero() {
  return <section className="relative pt-32 pb-20 overflow-hidden min-h-[600px]">
      {/* Solar Farm Background Image */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop" alt="Solar farm" className="w-full h-full object-cover" />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/90 px-4 py-2 rounded-full backdrop-blur-sm">
              <ZapIcon size={20} className="text-white" />
              <span className="text-white font-medium">
                Duurzame Energie Oplossingen
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Bespaar Energie.
              <br />
              <span className="text-primary">Sla de Toekomst Op.</span>
            </h1>

            <p className="text-xl text-gray-100 leading-relaxed">
              Innovatieve energieopslagsystemen voor woningen en bedrijven.
              Benut de kracht van hernieuwbare energie met onze geavanceerde
              batterijsystemen en omvormers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg">Vraag Offerte Aan</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-secondary">
                  Meer Informatie
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-200">Installaties</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-200">Jaar Ervaring</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-gray-200">Tevredenheid</div>
              </div>
            </div>
          </div>

          {/* Right side - empty for background visibility */}
          <div className="hidden lg:block"></div>
        </div>
      </Container>
    </section>;
}