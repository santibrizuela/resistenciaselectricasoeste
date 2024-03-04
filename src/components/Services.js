import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion';
// variants
import {fadeIn} from '../variants'

// services data
const services = [
  
  
  {
    name: 'Resistencias',
    description:
     'Blindadas, Aletadas, Planas, Sunchos de Chapa, Sunchos Cerámicos, Cartuchos, Cabezales, Microblindadas, Discos Cerámicos, Pantallas Cerámicas.',
    link: '/resistencias',
  },
  {
    name: 'Sensores',
    description:
     'Termocupla J / K / PT-100 / PT-1000 / Compactadas, Campinis, Termostato Mecánico, Termostato de Plancha, Termostato de Termotanque.',
    link: '/sensores',
  },
  {
    name: 'Controladores',
    description:
     'Pirómetros 48x48 / 72x72 / 96x96, Relé, Contactor, Potenciómetro, Timer Analógico / Digital, Semiswitch.',
    link: '/controladores',
  }
  
]

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row pb-32'>
        {/* text & image */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1  lg-bg-bottom bg-no-repeat 
          mix-blend-lighten mb-12 lg:mb-0  text-center lg:text-start'
        >
          <h2 className='h2 font-bold text-lime-100 my-4'>¿Necesitas <br/>Asesoramiento <br/>Técnico?</h2>
          <h3 className='h3 lg:max-w-[455px] lg:mb-24'>
            Desarrollamos <a href='/resistencias' className='text-gradient text-red-500'>Resistencias</a> acorde 
            a las necesidades técnicas, diseñamos sistemas con <a href='/controladores' className='text-gradient text-red-500'>Controladores </a>
             y <a href='/sensores' className='text-gradient text-red-500'>Sensores</a> para manejar la temperatura de trabajo de las resistencias.
          </h3>
          <a
            href="https://wa.link/k6wmgp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className='btn btn-sm'>Contactanos</button>
          </a>
          
        </motion.div>
        {/* services */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'
        >
          {/* service list */}
          <div>
            {services.map((service, index) => {
              // destructure service
              const { name, description, link } = service;
              return (
                <div 
                  className='border-b border-white/20 h-[146px] 
                  mb-[38px] flex' 
                  key={index}
                >
                  <div className='max-w-[476px]'>
                    <a href={link}>
                      <h4 className='text-red-500 text-[20px] tracking-wider font-primary 
                      font-bold mb-6'>
                        {name}
                      </h4>
                    </a>
                    
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a 
                      href={link} 
                      className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href={link} className='text-red-500 font-bold text-sm'>
                      Ver Más
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Services;
