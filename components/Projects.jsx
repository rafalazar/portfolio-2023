import React from 'react';
import disneyImg from '../public/static/images/disney-project.jpg';
import amazonImg from '../public/static/images/amazon-project.jpg';
import netflixImg from '../public/static/images/netflix-project.jpg';
import portfolioImg from '../public/static/images/portfolio-project.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {

  const projects = [
    {id: 1, title: 'Jordan Portfolio', backgroundImg: portfolioImg, stack: ['Next JS, React, Tailwind'], projectUrl: 'https://rafalazar.vercel.app/', projectRepo: 'https://github.com/rafalazar/portfolio-2023'},
    {id: 2, title: 'Disney + Clone', backgroundImg: disneyImg, stack: ['React, Firebase, Styled-Components'], projectUrl: 'https://disneyplus-clone-8b014.web.app/', projectRepo: 'https://github.com/rafalazar/disney-plus-clone'},
    {id: 3, title: 'Amazon Clone', backgroundImg: amazonImg, stack: ['React, Redux, Firebase'], projectUrl: 'https://clone-3ae96.web.app/', projectRepo: 'https://github.com/rafalazar/amazon-clone'},
    {id: 4, title: 'Netflix Clone', backgroundImg: netflixImg, stack: ['React, Axios, TheMovie API'], projectUrl: 'https://netflix-clone-fc1ec.web.app/', projectRepo: 'https://github.com/rafalazar/netflix-clone'},
  ]

  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {
            projects.map(i => (
              <ProjectItem
                key={i['id']}
                title={i['title']}
                backgroundImage={i['backgroundImg']}
                stack={i['stack']}
                projectUrl={i['projectUrl']}
                projectRepo={i['projectRepo']}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;
