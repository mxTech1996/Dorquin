'use client';

import { useCart } from 'ecommerce-mxtech';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// cart icon
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { products } = useCart();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300  ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-2 text-green-700 font-bold text-xl'>
          <div className='w-4 h-4 bg-pink-400 rounded-sm rotate-45' />
          <div className='w-4 h-4 bg-green-700 rounded-sm -ml-2' />
          Dorquin
        </div>
        <nav className='bg-white px-10 py-4 rounded-full hidden md:flex gap-6 text-gray-700 font-medium items-center'>
          <a href='/'>Home</a>
          <a href='/#products'>Products</a>
          <a href='/#benefits'>Benefits</a>
          <a href='/#testimonials'>Testimonial</a>
          <a href='/#values'>Know us</a>
          <a href='/more-information'>Contact</a>

          {/* cart button */}
          <Link href='/my-cart'>
            <button className='relative bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition duration-200'>
              {/* counter */}

              <span className='absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1'>
                {products.length}
              </span>
              <AiOutlineShoppingCart className='text-xl' />
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
