import React from 'react';
import disneyImg from '../public/assets/projects/disney-project.jpg';
import netflixImg from '../public/assets/projects/netflix-project.jpg';
import amazonImg from '../public/assets/projects/amazon-project.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Disney + Clone'
            backgroundImage={disneyImg}
            stack='React JS'
            projectUrl='/disney'
          />
          <ProjectItem
            title='Netflix Clone'
            backgroundImage={netflixImg}
            stack='React JS'
            projectUrl='/property'
          />
          <ProjectItem
            title='Amazon Clone'
            backgroundImage={amazonImg}
            stack='React JS'
            projectUrl='/property'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
