"use client";
import React from 'react';
import { Hero } from '../src/components/sections/Hero';
import { ProductCards } from '../src/components/sections/ProductCards';
import { WhyChoose } from '../src/components/sections/WhyChoose';
import { HowItWorks } from '../src/components/sections/HowItWorks';
import { Testimonials } from '../src/components/sections/Testimonials';

export default function Page() {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#special-offer') {
      const el = document.getElementById('special-offer');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);
  return (
    <main>
      <Hero />
      <ProductCards />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
    </main>
  );
}