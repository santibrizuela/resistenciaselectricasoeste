import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat 
              h-[640px] bg-center'
            >
          </motion.div>
          {/* text */}
          <motion.div 
            
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 text-center lg:text-start'
          >
            <h3 className='h3 mb-4 text-lime-200 text-4xl'>
            <a href='/' className='font-bold'>Resistencias Eléctricas Oeste</a>
            </h3>
            <p className='mb-6'>
              Te asesoramos técnicamente para el desarrollo o reparación de máquinas y sistemas de calefacción.<br />
              Proveemos <a href='/resistencias' className='font-bold text-lime-200'>Resistencias</a>
              , <a href='/sensores' className='font-bold text-lime-200'>Sensores</a>
              , <a href='/controladores' className='font-bold text-lime-200'>Controladores</a> y
              <a href='/accesorios' className='font-bold text-lime-200'> Accesorios</a>.<br />
              Brindamos <a href='/service' className='font-bold text-lime-200'>Servicio Técnico</a>.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12 justify-center lg:justify-start'>
            <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ? <CountUp start={0} end={4} duration={3} /> : 
                  null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Años de <br />
                  Experiencia
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ? <CountUp start={0} end={50} duration={3} /> : 
                  null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Productos y <br />
                  Accesorios
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ? <CountUp start={0} end={500} duration={3} /> : 
                  null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Clientes <br />
                  Satisfechos
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center justify-center lg:justify-start'>
              <a href='https://wa.link/vpajrr'>
                  <button className='btn btn-lg btn-outline'>
                      Contactanos
                  </button>              
              </a>
              <a href='/catalogo' className='text-lime-200 font-bold btn-link'>
                Ver Catálogo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
