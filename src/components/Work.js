import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import portfolioDivano2 from '../assets/blindadas.png';
import portfolioZetaGroup from '../assets/pirometros.png';
import portfolioCe from '../assets/termocuplas.png';

const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto h-full mb-32'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0 text-center mx-auto lg:text-start'>
          {/* text */}
          <div>
            
            <h2 className='h2 leading-tight font-bold text-red-500 mx-auto'>
              <a href='/skills' className='text-gradient text-red-500 w-min'>
                  Productos y <br />
                  Accesorios.
              </a>
            </h2>
            
            <p className='max-w-sm text-[1.5rem] font-bold mb-16 mx-auto lg:mx-0'>
              Diseñamos y desarrollamos <a href='/resistencias' className='text-gradient text-red-500'>Resistencias</a>, 
              <a href='/sensores' className='text-gradient text-red-500'> Sensores</a> y 
              <a href='/controladores' className='text-gradient text-red-500'> Controladores</a> según las necesidades de 
              tiempo y temperatura que tengas en producción.
            </p>
            <a
              href="https://wa.link/k6wmgp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='btn btn-sm'>Contactanos</button>
            </a>
            
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 
          border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              className='group-hover:scale-125 transition-all duration-500' 
              src={portfolioZetaGroup} 
              alt='img' 
            />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-40'>
              <span className='text-gradient'>Temperatura, Tiempo y Potencia.</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-40'>
              <span className='text-3xl text-white'>CONTROLADORES</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-40'>
                <a href="/controladores">
                    <button className='btn btn-sm'>Ver Más</button>
                </a>
            </div>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-16'>
          {/* image */}
          <div className='group relative overflow-hidden border-2 
          border-white/50 rounded-xl m-auto'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              className='group-hover:scale-125 transition-all duration-500' 
              src={portfolioDivano2} 
              alt='img' 
            />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-40'>
              <span className='text-gradient'>Blindadas, Aletadas, Planas, Sunchos, etc.</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-40'>
              <span className='text-3xl text-white'>RESISTENCIAS</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-40'>
                <a href="/resistencias">
                    <button className='btn btn-sm'>Ver Más</button>
                </a>
            </div>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 
          border-white/50 rounded-xl m-auto'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              className='group-hover:scale-125 transition-all duration-500' 
              src={portfolioCe} 
              alt='img' 
            />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-40'>
              <span className='text-gradient'>Termocuplas, Mecánicos, Campinis.</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-40'>
              <span className='text-3xl text-white'>Sensores</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-40'>
                <a href="sensores">
                    <button className='btn btn-sm'>Ver Más</button>
                </a>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  </section>
  );
};

export default Work;
