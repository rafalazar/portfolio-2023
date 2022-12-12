import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Social = ({ parent }) => {
  let style = '';

  switch (parent) {
    case 'main':
      style = 'flex items-center justify-between max-w-[330px] m-auto py-4';
      break;
    case 'navbar':
      style = 'flex items-center justify-between my-4 w-full sm:w-[80%]';
      break;
    case 'contact':
      style = 'flex items-center justify-between py-4';
      break;
  }

  return (
    <div className={style}>
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
  );
};

export default Social;
