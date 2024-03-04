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
      <div className='container mx-auto h-full'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen pb-80'>
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
            <h2 className='h2 text-red-500 w-max mx-auto'>About us.</h2>
            <h3 className='h3 mb-4'>
              Nos dedicamos a la venta y asesoramiento de <a href='/resistencias' className='text-gradient text-red-500'>Resistencias Eléctricas</a>,
              <a href='/sensores' className='text-gradient text-red-500'> Sensores</a> y 
              <a href='/controladores' className='text-gradient text-red-500'> Controladores</a> de temperatura.
            </h3>
            
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12 justify-center'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ? <CountUp start={0} end={5} duration={3} /> : 
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
                  {inView ? <CountUp start={0} end={20} duration={3} /> : 
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
                  {inView ? <CountUp start={0} end={100} duration={3} /> : 
                  null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Clientes <br />
                  Satisfechos
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center justify-center'>
              <a
                href="https://wa.link/k6wmgp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className='btn btn-lg'>Contactanos</button>
              </a>
              <a href='/work' className='text-red-500 font-bold btn-link'>
                Ver Productos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
