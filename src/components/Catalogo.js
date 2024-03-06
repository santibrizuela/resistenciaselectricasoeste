import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import pirometros from '../assets/pirometros.png';
import blindadas from '../assets/blindadas.png';
import campinis from '../assets/campinis.png';
import service from '../assets/service.jpg';
import accesorios from '../assets/accesorios.jpg';
// services data
const catalogos = [
  
  
  {
    name: 'Resistencias',
    cardimage: blindadas,
    link: '/resistencias',
  },{
    name: 'Controladores',
    cardimage: pirometros,
    link: '/controladores',
  },
  {
    name: 'Sensores',
    cardimage: campinis,
    link: '/sensores',
  },
  {
    name: 'Accesorios',
    cardimage: accesorios,
    link: '/accesorios',
  },
  {
    name: 'Servicio Técnico',
    cardimage: service,
    link: '/service',
  }
  
]

const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='grid lg:flex-row gap-x-10'>
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='gap-10 mb-10 lg:mb-0 text-center mx-auto lg:text-start'>
          {/* text */}
          <div>
            
            <h2 className='h2 leading-tight font-bold text-lime-200 text-center'>
              <a href='/catalogo' className='text-gradient text-lime-200 w-min'>
                  Catálogo
              </a>
            </h2>
          </div>
        </motion.div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {catalogos.map((service, index) => {
                // destructure service
                const { name, description, cardimage, link } = service;
                return (
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='max-2-[1240px] mx-auto p-2 gap-8 pt-2'
                    key={index}    
                >
                    {/* new card */}
                    {/* image */}
                        <div className='group relative overflow-hidden text-start
                         rounded-xl'>
                            {/* overlay */}
                            <div className=' group-hover:bg-black/70 w-full h-full absolute 
                            z-40 transition-all duration-300'></div>
                            {/* img */}
                            <img 
                            className='group-hover:scale-125 transition-all duration-500' 
                            src={cardimage} 
                            alt='img' 
                            />
                            {/* title */}
                            <div className='absolute bottom-full left-12 
                            group-hover:bottom-16 lg:group-hover:bottom-16 transition-all duration-700 z-50'>
                            <span className='text-3xl font-bold text-gradient'>{name}</span>
                            </div>
                            {/* pretitle */}
                            <div className='absolute bottom-full left-12 
                            group-hover:bottom-24 transition-all duration-500 z-50'>
                            <span className='text-white'>{description}</span>             
                            </div>
                            {/* button */}
                            <div className='absolute bottom-full left-12 
                            group-hover:bottom-2 transition-all duration-700 z-50'>
                                <a href={link}>
                                    <button className='btn btn-sm'>Ver Más</button>
                                </a>
                            </div>
                        </div>
                </motion.div>
                );
                })}
            </div>
      </div>

    </div>
  </section>
  );
};

export default Work;
