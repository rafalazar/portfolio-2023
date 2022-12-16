import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

const ProjectItem = ({ title, backgroundImage, stack, projectUrl, projectRepo }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={backgroundImage}
        alt={title}
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{stack}</p>
        <div className='flex items-center justify-evenly'>
          <Link href={projectUrl} target='_blank'>
            <p className='text-center px-2 py-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
              <BiLinkExternal />
            </p>
          </Link>
          <Link href={projectRepo} target='_blank'>
            <p className='text-center px-2 py-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
              <BsGithub />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
