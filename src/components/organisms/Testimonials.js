'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dataSite } from '@/data';

const testimonials = dataSite.references;

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      5000
    );
    return () => resetTimeout();
  }, [index]);

  return (
    <section
      id='testimonials'
      className='bg-emerald-800 py-24 text-white relative overflow-hidden'
    >
      <div className='max-w-3xl mx-auto px-6 text-center'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-12'>
          Hear It from Our Customers
        </h2>

        <div className='relative h-[250px]'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className='bg-white text-gray-800 rounded-[3rem] px-8 py-10 shadow-xl flex flex-col items-center justify-center'
            >
              <div className='w-20 h-20 rounded-full overflow-hidden bg-gray-300 mb-4'>
                {/* You can use image from `image` if provided */}
                {testimonials[index].image ? (
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className='object-cover w-full h-full'
                  />
                ) : (
                  <div className='w-full h-full flex items-center justify-center text-gray-500 font-semibold text-xl'>
                    {testimonials[index].name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                )}
              </div>
              <p className='text-md mb-4 max-w-md'>{`"${testimonials[index].description}"`}</p>
              <p className='font-bold'>{testimonials[index].name}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className='flex justify-center mt-8 gap-2'>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                i === index ? 'bg-white' : 'bg-white/40'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
