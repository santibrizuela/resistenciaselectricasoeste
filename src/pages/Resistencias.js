import React from 'react'
// image
import topImage from '../assets/resistencias.jpg';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// img
import blindadas from '../assets/blindadas.png';
import aletadas from '../assets/aletadas.png';
import sunchos from '../assets/sunchos.png';
import sunchoceramico from '../assets/sunchoceramico.png';
import cartuchos from '../assets/cartuchos.png';
import planas from '../assets/planas.png';
import microblindadas from '../assets/microblindadas.png';
import discos from '../assets/discos.png';
import cabezales from '../assets/cabezales2.jpg';

// resistencias data
const productos = [
  
    {
        name: 'Blindadas',
        cardimage: blindadas,
    },{
        name: 'Aletadas',
        cardimage: aletadas,
    },{
        name: 'Sunchos',
        cardimage: sunchos,
    },{
        name: 'Suncho Cerámico',
        cardimage: sunchoceramico,
    },{
        name: 'Cartuchos',
        cardimage: cartuchos,
    },{
        name: 'Planas',
        cardimage: planas,
    },{
        name: 'Microblindadas',
        cardimage: microblindadas,
    },{
        name: 'Discos',
        cardimage: discos,
    },{
        name: 'Cabezales',
        cardimage: cabezales,
      }

]



const Resistencias = () => {
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
                    <h2 className='py-2 font-bold text-gradient text-[2.6rem]'>RESISTENCIAS</h2>
                    
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
                                <a href='https://www.wa.link/k6wmgp' target='_blank' rel="noreferrer">
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

export default Resistencias