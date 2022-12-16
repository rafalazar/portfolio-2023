import Image from 'next/image';
import React from 'react';
import {
  htmlSkill,
  cssSkill,
  jsSkill,
  nodeSkill,
  reactSkill,
  nextSkill,
  tsSkill,
  tailwindSkill,
} from './skills-images';

const Skills = () => {
  const skills = [
    ['html', htmlSkill],
    ['css', cssSkill],
    ['javascript', jsSkill],
    ['node js', nodeSkill],
    ['react', reactSkill],
    ['next js', nextSkill],
    ['typescript', tsSkill],
    ['tailwind', tailwindSkill],
  ];

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {skills.map((i) => (
            <div
              className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
              key={i[0]}
            >
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    src={i[1]}
                    width='64'
                    height='64'
                    alt={`${i[0]}`}
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='uppercase'>{i[0]}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
