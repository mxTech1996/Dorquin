'use client';

import { dataSite } from '@/data';

export default function Hero() {
  return (
    <section className='pt-14 pb-28 bg-[#f8f8f8]'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10'>
        {/* Left Text */}
        <div className='md:w-1/2 text-center md:text-left'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-green-700 leading-tight'>
            All Your Team Needs in One Great Platform
          </h1>
          <p className='text-gray-700 mt-6 text-lg leading-relaxed'>
            Follow your team’s plans, track work progress, and discuss work all
            in one place. Let us manage your work flawlessly and be on top of
            everything your team is up to.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start'>
            <button className='border border-gray-700 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100'>
              Watch Demo
            </button>
            <button className='bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800'>
              Try for Free
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className='md:w-1/2 relative'>
          <img
            src={dataSite.image_hero}
            alt='Team'
            className='rounded-2xl w-full object-cover'
          />
          <div className='absolute bottom-6 left-6 flex flex-col gap-2 bg-white p-4 rounded-xl shadow-md text-sm w-64'>
            <div className='flex items-center gap-2'>
              <span className='w-4 h-4 rounded-full bg-green-600 inline-block' />
              <span>Mark task complete</span>
            </div>
            <div className='flex items-center gap-2'>
              <img
                src='https://randomuser.me/api/portraits/men/32.jpg'
                alt='Lou'
                className='w-5 h-5 rounded-full'
              />
              <span>Lou booked a meeting</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='w-10 h-5 bg-gray-200 rounded-full relative'>
                <span className='w-4 h-4 bg-green-600 rounded-full absolute left-1 top-0.5'></span>
              </span>
              <span>Follow this project</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
