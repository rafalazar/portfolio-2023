import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>Not a traditional developer</p>
          <p className='py-2 text-gray-600'>
            For many years I thought about being a film director, I love series
            and movies so since high school I had decided to study filmmaking.
            However, the last year of high school I had to create a blog for a
            school project. I was very intrigued to know how the pages worked
            and how to create the designs and customize it to my liking.
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with the world of programming, I decided to study it
            professionally and for years I have spent a lot of time practicing
            and learning new technologies to bring to life the most innovative
            ideas I could think of.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3'>
          <Image
            src='/../public/assets/portfolio-about.jpg'
            alt='Jordan Salazar'
            width='370'
            height='600'
            className='rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
