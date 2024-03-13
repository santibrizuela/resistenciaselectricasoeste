import React from 'react'
// image
import topImage from '../assets/borneras.jpg';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// img
import borneras from '../assets/borneras.jpg';
import cables from '../assets/cables.jpg';
import cintateflon from '../assets/cintateflon.png';
import espagueti from '../assets/espagueti.jpg';
import termostato from '../assets/termostatos.png';


// accesorios data
const productos = [
  
    {
      name: 'Borneras',
      description:
      'Borneras / Fichas.',
      cardimage: borneras,
    },{
      name: 'Cables',
      description:
      'Cobre / Niquel.',
      cardimage: cables,
    },{
        name: 'Teflón',
        description:
        'Con y sin Adhesivo.',
        cardimage: cintateflon,
      },{
        name: 'Espagueti',
        description:
        'Espagueti / Termocontraíble.',
        cardimage: espagueti,
      },{
        name: 'Termostato',
        description:
        '40° / 90° / 120° / 220° / 300°.',
        cardimage: termostato,
      }

]

const Accesorios = () => {
    return (
        <>
    
    
    <div className='w-full pb-36'>
            <motion.div 
                
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='w-screen h-[30vh] lg:h-[40vh] top-0'
            >
                <div className='absolute top-30 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
                <img className='h-full w-full object-cover z-1' src={topImage} alt='Green Card & Visa'/>
                <div className='absolute top-[18%] lg:top-[24%] max-w-[1240px] w-full text-white z-20 p-2'>
                    <h2 className='py-2 font-bold text-gradient text-[2.6rem]'>ACCESORIOS</h2>
                    
                </div>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {productos.map((service, index) => {
                // destructure service
                const { name, description, cardimage } = service;
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
                            group-hover:bottom-16 lg:group-hover:bottom-16 transition-all duration-700 z-40'>
                            <span className='text-3xl font-bold text-gradient'>{name}</span>
                            </div>
                            {/* pretitle */}
                            <div className='absolute bottom-full left-12 
                            group-hover:bottom-24 transition-all duration-500 z-40'>
                            <span className='text-white'>{description}</span>             
                            </div>
                            {/* button */}
                            <div className='absolute bottom-full left-12 
                            group-hover:bottom-2 transition-all duration-700 z-40'>
                                <a href='https://wa.link/xfnhlw' target='_blank' rel="noreferrer">
                                    <button className='btn btn-sm'>Contactanos</button>
                                </a>
                            </div>
                        </div>
                </motion.div>
                );
                })}
            </div>
        </div>
        </>
      )
}

export default Accesorios