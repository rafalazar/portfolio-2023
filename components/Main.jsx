import React, {useRef, useEffect} from 'react';
import Typed from 'typed.js';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  const prueba = useRef(null);

  useEffect(() => {
    const typed = new Typed(prueba.current, {
      strings: ['A Front-End Developer', 'A Back-End Developer', 'A Full-Stack Developer'],
      startDelay: 3000,
      typeSpeed: 80,
      backSpeed: 100,
      backDelay: 100
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
            Hi, I&apos;m <span className='text-[#5651e5]'>Jordan</span>
          </h1>
          <h1 ref={prueba} className='py-2 text-gray-700'></h1>
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
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
