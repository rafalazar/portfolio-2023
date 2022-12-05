import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>Not a common developer</p>
          <p className='py-2 text-gray-600'>
            Durante muchos anios pense en ser director de cine, me encantan las
            series y peliculas por lo que desde el colegio habia decidido
            estudiar cine. Sin embargo, el ultimo anio de secundaria tuve que
            crear una pagina para un proyecto escolar. Me causo mucha intriga
            saber como funcionaban las paginas y como crear los disenios y
            personalizar a mi gusto.
          </p>
          <p className='py-2 text-gray-600'>
            Fascinado con el mundo de la programacion, decidi estudiarlo
            profesionalmente y durante anios he pasado mucho tiempo practicando
            y aprendiendo nuevas tecnologias para darle vida a las ideas mas
            innovadoras que se me pueden ocurrir.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            src='/../public/assets/portfolio-about.jpg'
            alt='Jordan Salazar'
            width='350'
            height='600'
            className='rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
