import React from 'react';
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
     'Pirómetros 48x48 / 72x72 / 96x96, Relay 25A / 40A / 60A / 80A, Contactor, Relay con Potenciómetro, Timer Analógico / Digital, Semiswitch.',
    link: '/controladores',
  },
  {
    name: 'Accesorios',
    description:
     'Cables, Espagueti, Borneras, Teflón con y sin Adhesivo, Llaves de Anafe, Fichas Unipolares / Bipolares Cerámicas / Silicona, Bujes, Cabezales DIN.',
    link: '/accesorios',
  },
  {
    name: 'Servicio Técnico',
    description:
     'Diagnosticamos las fallas de tus máquinas o electrodomésticos y presupuestamos la reparación de los mismos.',
    link: '/service',
  }
  
]

const Services = () => {
  return (
  <section className='' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col'>
        {/* text & image */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 lg:bg-services lg-bg-bottom bg-no-repeat 
          mix-blend-lighten mb-12 lg:mb-0  text-center'
        >
          <h2 className='h2 font-bold text-lime-100 my-4'>¿Necesitas <br/>Asesoramiento <br/>Técnico?</h2>
          <h3 className='h3'>
            Desarrollamos <a href='/resistencias' className='text-gradient text-lime-200'>Resistencias</a> acorde 
            a las necesidades técnicas, diseñamos sistemas con <a href='/controladores' className='text-gradient text-lime-200'>Controladores </a>
            y <a href='/sensores' className='text-gradient text-lime-200'>Sensores</a> para manejar la temperatura de trabajo de tus resistencias 
            con los <a href='/accesorios' className='text-gradient text-lime-200'>Accesorios</a> necesarios. Tenemos <a href='/service' className='text-gradient text-lime-200'>Servicio Técnico </a>
            para garantizar la correcta instalación de los productos.
          </h3>
          <a href='/catalogo'>
            <button className='btn btn-sm'>Ver Catálogo</button>
          </a>
          
        </motion.div>
        {/* services */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='mt-5'
        >
          {/* service list */}
          <div className='grid md:grid-cols-2'>
            {services.map((service, index) => {
              // destructure service
              const { name, description, link } = service;
              return (
                <div 
                  className='border-b border-white/20 
                  mb-[38px] mx-2 flex' 
                  key={index}
                >
                  <div className='max-w-[476px]'>
                    <a href={link}>
                      <h4 className='text-lime-200 text-[20px] tracking-wider font-primary 
                      font-bold mb-6'>
                        {name}
                      </h4>
                    </a>
                    
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                    <div className=''>
                      <a 
                        href={link} 
                        className='btn btn-sm justify-center items-center'
                      >
                        Ver Más
                      </a>
                    </div>
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
