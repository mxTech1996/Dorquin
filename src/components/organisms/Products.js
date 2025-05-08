'use client';

import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { motion } from 'framer-motion';

const products = dataSite.products;

export default function Products() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <section id='products' className='bg-amber-50 py-24 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-semibold text-slate-900 mb-14'>
          Access to Our Products
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {products.map((item, idx) => {
            const isInCart = validateProductInCart(item.id);
            const handleClick = () => {
              handleAddOrRemoveProduct(item.id);
            };
            return (
              <motion.div
                key={idx}
                className='bg-white rounded-xl shadow-md overflow-hidden'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full h-56 object-cover'
                />
                <div className='p-5 text-left'>
                  <p className='text-sm text-gray-500 mb-1'>$ {item.price}</p>
                  <p className='text-sm text-gray-500 mb-1'>
                    {item.description}
                  </p>
                  <h4 className='text-lg font-medium text-gray-900'>
                    {item.name}
                  </h4>
                  {/* button cart */}
                  <button
                    style={{
                      backgroundColor: isInCart ? '#f87171' : '#34d399',
                    }}
                    onClick={handleClick}
                    className='mt-4 bg-emerald-700 text-white py-2 px-4 rounded-md hover:bg-emerald-800 transition duration-200'
                  >
                    {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
