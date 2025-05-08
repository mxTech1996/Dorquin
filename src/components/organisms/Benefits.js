'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import {
  FaRegChartBar,
  FaClock,
  FaUsers,
  FaClipboardCheck,
} from 'react-icons/fa';

const services = dataSite.services;

export default function Benefits() {
  return (
    <section id='benefits' className='bg-pink-200 py-24 px-6 md:px-12'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-semibold text-emerald-900 mb-16'>
          How Administrative Consulting Makes Work Easier
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8'>
          {services.slice(0, 4).map((item, idx) => (
            <motion.div
              key={idx}
              className='bg-white rounded-2xl shadow-md py-10 px-6 flex flex-col items-center justify-center transition-all hover:shadow-xl'
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className='w-40 h-40 mb-4 
                rounded-full bg-emerald-100 p-4 shadow-lg'
              />

              <h4 className='text-lg font-semibold text-emerald-900 text-center'>
                {item.title}
              </h4>
              <p className='text-sm text-gray-600 mt-2 text-center'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
