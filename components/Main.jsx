import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { BsYoutube } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaTwitch } from 'react-icons/fa';

const Main = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Front-End Developer',
        'Back-End Developer',
        'Full-Stack Developer',
      ],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 100,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Let&apos;s build something together
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&apos;m{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
              Jordan Salazar
            </span>
          </h1>
          <h1 className='py-2 text-gray-700'>
            A <span ref={el}></span>
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I&apos;m a full-stack web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently
            I&apos;m focused on building responsive front-end web applications
            while working back-end technologies.
          </p>

          <div className='social-container social-main'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaTwitch />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
