import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../shared/Button';
import { Container } from '../shared/Container';
import { ZapIcon } from 'lucide-react';
export function Hero() {
  const BASE_ROTATE_Y = -12;
  const BASE_ROTATE_X = 6;
  const [tiltTransform, setTiltTransform] = React.useState(
    `rotateY(${BASE_ROTATE_Y}deg) rotateX(${BASE_ROTATE_X}deg) translateZ(40px)`
  );
  const tiltRef = React.useRef<HTMLDivElement | null>(null);
  const rafRef = React.useRef<number | null>(null);

  // Visibility state for sequential chip animations
  const [chipsVisible, setChipsVisible] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setChipsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = (x / rect.width - 0.5) * 2; // -1 .. 1
    const normY = (y / rect.height - 0.5) * 2; // -1 .. 1
    const nextY = BASE_ROTATE_Y + normX * 8; // sensitivity
    const nextX = BASE_ROTATE_X - normY * 6;
    const next = `rotateY(${nextY}deg) rotateX(${nextX}deg) translateZ(40px)`;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setTiltTransform(next));
  };

  const onMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setTiltTransform(
      `rotateY(${BASE_ROTATE_Y}deg) rotateX(${BASE_ROTATE_X}deg) translateZ(40px)`
    );
  };

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

          {/* Right side - standalone 3D image (no card/frame) */}
          <div className="hidden lg:flex items-center justify-end">
            <div
              ref={tiltRef}
              className="relative w-full max-w-[560px] flex items-center justify-center transform-gpu -translate-x-1 lg:-translate-x-2"
              style={{ perspective: '1000px' }}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
            >
              <img
                src="https://i.imgur.com/4MkTRCC.png"
                alt="Energieopslag module 3D"
                className="w-full h-auto max-h-[400px] object-contain drop-shadow-2xl transform-gpu transition-transform duration-300 ease-out hover:scale-[1.03]"
                style={{ transform: tiltTransform, willChange: 'transform' }}
              />

              {/* Text chips stacked to the right side (Dutch) with sequential slide-in */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 transform translate-x-12 flex flex-col gap-6 pointer-events-none">
                <div
                  className={`transform-gpu transition-all duration-500 ease-out will-change-transform ${chipsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ transitionDelay: '0ms' }}
                >
                  <div className="bg-white/85 backdrop-blur-sm text-secondary px-5 py-2.5 text-base font-medium rounded-full shadow-lg border border-white/60">
                    10 jaar garantie
                  </div>
                </div>
                <div
                  className={`transform-gpu transition-all duration-500 ease-out will-change-transform ${chipsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ transitionDelay: '150ms' }}
                >
                  <div className="bg-white/85 backdrop-blur-sm text-secondary px-5 py-2.5 text-base font-medium rounded-full shadow-lg border border-white/60">
                    Smart monitoring
                  </div>
                </div>
                <div
                  className={`transform-gpu transition-all duration-500 ease-out will-change-transform ${chipsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <div className="bg-white/85 backdrop-blur-sm text-secondary px-5 py-2.5 text-base font-medium rounded-full shadow-lg border border-white/60">
                    Gratis installatieadvies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>;
}