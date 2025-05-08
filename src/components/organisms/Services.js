'use client';

import { motion } from 'framer-motion';
import { FaChartLine, FaHandshake, FaUserTie, FaTasks } from 'react-icons/fa';

const services = [
  {
    title: 'Strategic Planning',
    icon: <FaChartLine className='text-white text-xl' />,
    description:
      'We help businesses set long-term goals, allocate resources efficiently, and align teams toward success.',
  },
  {
    title: 'Operational Optimization',
    icon: <FaTasks className='text-white text-xl' />,
    description:
      'Streamline workflows and improve internal processes to reduce costs and boost efficiency.',
  },
  {
    title: 'Executive Advisory',
    icon: <FaUserTie className='text-white text-xl' />,
    description:
      'Support top-level executives with expert insights for decision-making, leadership, and growth strategies.',
  },
  {
    title: 'Change Management',
    icon: <FaHandshake className='text-white text-xl' />,
    description:
      'Ensure smooth transitions through mergers, restructures, or digital transformations with proven frameworks.',
  },
];

export default function ServicesSection() {
  return (
    <section id='services' className='bg-pink-100 py-20 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10'>
        {services.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className='bg-emerald-700 text-white p-6 rounded-xl shadow-lg relative'
          >
            <div className='absolute -top-6 left-6 bg-emerald-500 p-3 rounded-full shadow-md'>
              {item.icon}
            </div>
            <h3 className='text-xl font-bold mb-3 mt-4'>{item.title}</h3>
            <p className='text-sm leading-relaxed text-emerald-50'>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
