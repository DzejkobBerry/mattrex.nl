import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ProductCards } from '../components/sections/ProductCards';
import { WhyChoose } from '../components/sections/WhyChoose';
import { Products } from '../components/sections/Products';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Testimonials } from '../components/sections/Testimonials';
export function Home() {
  return <main>
      <Hero />
      <ProductCards />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
    </main>;
}