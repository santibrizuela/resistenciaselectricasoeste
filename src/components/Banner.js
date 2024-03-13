import React from 'react';
// images
import Image from '../assets/blindadas1.jpg';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
const Banner = () => {
  return (
    <section 
    className='min-h-[85vh] lg:min-h-[78vh] flex items-center' 
    id='home'
  >
    <div className='container mx-auto h-full'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 mt-20'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[40px] font-bold text-lime-200 leading-[0.8] md:text-[55px] w-min mx-auto mb-2 lg:m-0'
            >
            <a href='/' className='font-bold align-middle'>RESISTENCIAS<br/> <span>ELECTRICAS</span><br/> <span>OESTE</span></a>
          </motion.h1>
          <motion.div 
             variants={fadeIn('up', 0.4)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}}
             className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
          >
            <span className='text-gradient mx-auto'>
              <TypeAnimation sequence={[
                'Resistencias',
                2000,
                'Sensores',
                2000,              
                'Controladores',
                2000,
                'Accesorios',
                2000
              ]} 
              speed={50}
              wrapper='span'
              repeat={Infinity}
              />          
            </span>
              
          </motion.div>
          <motion.p
             variants={fadeIn('up', 0.5)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}}
             className='mb-8 max-w-lg mx-auto lg:mx-0'
          >
            Asesoramos y Desarrollamos sistemas de calefacción. <br /> 
            Proveemos <a href='/resistencias' className='font-bold text-lime-200'>Resistencias</a>
            , <a href='/sensores' className='font-bold text-lime-200'>Sensores</a>
            , <a href='/controladores' className='font-bold text-lime-200'>Controladores</a> y
            <a href='/accesorios' className='font-bold text-lime-200'> Accesorios</a>.<br />
            Consultar por <a href='/service' className='font-bold text-lime-200'>Servicio Técnico</a>.
          </motion.p>
          <motion.div 
             variants={fadeIn('up', 0.6)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}}
             className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
          >
            <a
              href="https://wa.link/vpajrr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='btn btn-lg'>
                Contactanos
              </button>
            </a>
            
            <a href='/catalogo' className='text-gradient text-lime-200 btn-link'>
              Ver Catálogo
            </a>
          </motion.div>
          
        </div>
        {/* image */}
        <motion.div 
           variants={fadeIn('down', 0.5)} 
           initial="hidden" 
           whileInView={'show'} 
           className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
        >
          <img src={Image} alt='Banner' className='rounded-xl'/>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Banner;
