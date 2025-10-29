import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { ProductCards } from '../components/sections/ProductCards';
import { WhyChoose } from '../components/sections/WhyChoose';
import { Products } from '../components/sections/Products';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Testimonials } from '../components/sections/Testimonials';
export function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#special-offer') {
      const el = document.getElementById('special-offer');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);
  return <main>
      <Hero />
      <ProductCards />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
    </main>;
}