'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Simple & Approachable Workflow',
    description:
      'We help simplify your organizational structure and internal operations, making processes easier for your entire team to follow and scale.',
    bg: 'bg-pink-200',
  },
  {
    title: 'Integrates Easily with Industry-Leading Software',
    description:
      'We align our consulting solutions with the tools you already use—whether it’s ERP systems, project management software, or CRM platforms.',
    bg: 'bg-emerald-700 text-white',
  },
  {
    title: 'Agile Planning for Executive Teams',
    description:
      'Our methods are adaptable and designed to keep up with the rapid pace of change in corporate environments and leadership priorities.',
    bg: 'bg-pink-200',
  },
];

const getColorByIndex = (index) => {
  if (index % 2 === 0) {
    return 'bg-emerald-700 text-white';
  } else {
    return 'bg-pink-200';
  }
};

const newServices = dataSite.info.map((item, index) => {
  return {
    title: item.title,
    description: item.description,
    bg: getColorByIndex(index),
  };
});

export default function ValuesSection() {
  return (
    <section id='values' className='py-24 px-6 md:px-16 bg-amber-50'>
      <div className='max-w-6xl mx-auto grid gap-20'>
        {newServices.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`rounded-xl shadow-lg p-8 md:p-12 ${item.bg}`}
          >
            <h3 className='text-2xl font-bold mb-4'>{item.title}</h3>
            <p className='text-base leading-relaxed'>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
