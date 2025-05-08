'use client';

import Benefits from '@/components/organisms/Benefits';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import ValuesSection from '@/components/organisms/Info';
import Navbar from '@/components/organisms/Navbar';
import Products from '@/components/organisms/Products';
import ServicesSection from '@/components/organisms/Services';
import TestimonialsCarousel from '@/components/organisms/Testimonials';

export default function Home() {
  return (
    <main className='relative font-sans bg-[#f8f8f8]'>
      <Navbar />
      <Hero />
      <ServicesSection />
      <ValuesSection />
      <Products />
      <Benefits />
      <TestimonialsCarousel />
      <Footer />
    </main>
  );
}
