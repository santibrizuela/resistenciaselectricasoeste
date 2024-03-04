import React from 'react'
// image
import topImage from '../assets/headerImg.jpg';
import nivelDigital from '../assets/nivel.png'
import llavesDeTubo from '../assets/llavesDeTubo.png'
import amoladoraRecta from '../assets/amoladoraRecta.png'
import atornilladoraSeleccion from '../assets/atornilladoraSeleccion.png'
import llavesCurvas from '../assets/llavesCurvas.png'
import llavesBremen from '../assets/llavesBremen.png'
import amoladoraSeleccion from '../assets/amoladoraSeleccion.png'
import picoDeLoroBahco from '../assets/picoDeLoroBahco.png'
import rotopercutorArgentec from '../assets/rotopercutorArgentec.png'
import amoladoraABateriaCajaHamilton from '../assets/amoladoraABateriaCajaHamilton.png'
import discosTyrolit from '../assets/discosTyrolit.png'
import martillosV from '../assets/martillosV.png'
import llavesFrancesas from '../assets/llavesFrancesas.png'
import atornilladorAngulo from '../assets/atornilladorAngulo.png'
import lijadora from '../assets/lijadora.png'
import taladroAcc from '../assets/taladroAcc.png'
import soldadoraPegaso2 from '../assets/soldadoraPegaso2.png'
import compresorLabor from '../assets/compresorLabor.png'
import sierraCaladora from '../assets/sierraCaladora.png'
import taladroBateriaArgentec5 from '../assets/taladroBateriaArgentec5.png'
import amoladoraBancoDogo2 from '../assets/amoladoraBancoDogo2.png'
import remachadoraDualBremen2 from '../assets/remachadoraDualBremen2.png'
import discoCorte from '../assets/discoCorte.png'
import discoDesbaste2 from '../assets/discoDesbaste2.png'
import discosFlap from '../assets/discosFlap.png'
import llaveImpactoBremen from '../assets/llaveImpactoBremen.png'
import pistolaCalorArgentec from '../assets/pistolaCalorArgentec.png'
import pistolaCalorStanley from '../assets/pistolaCalorStanley.png'
import pistolaPinturaDogo from '../assets/pistolaPinturaDogo.png'
import taladroArgentec2 from '../assets/taladroArgentec2.png'
import mascaraSoldarFoxtter from '../assets/mascaraSoldarFoxtter.png'
import amoladora from '../assets/amoladora.png'
import cintaGiant from '../assets/10mGiant.png'


// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// rugby data
const productos = [
  
    {
      name: 'Llaves Curvas',
      description:
      'Bremen.',
      cardimage: llavesCurvas,
    },{
      name: 'Llaves Rectas',
      description:
      'Bremen.',
      cardimage: llavesBremen,
    },
    {
      name: 'Llaves de Tubo',
      description:
       'Rimo.',
      cardimage: llavesDeTubo,
    },
    {
      name: 'Amoladora Recta',
      description:
       'Bosch',
      cardimage: amoladoraRecta,
    },
    {
      name: 'Nivel Digital',
      description:
       'Bosch',
      cardimage: nivelDigital,
    },
    {
        name:'Atornilladora Campeón',
        description: 
        'Argentec ',
        cardimage: atornilladoraSeleccion,
    },
    {
        name:'Amoladora Campeón',
        description: 
        'Argentec ',
        cardimage: amoladoraSeleccion,
    },
    {
        name:'Pico de Loro',
        description: 
        'Bahco ',
        cardimage: picoDeLoroBahco,
    },
    {
        name:'Rotopercutor',
        description: 
        'Argentec ',
        cardimage: rotopercutorArgentec,
    },
    {
        name:'Amoladora Inalámbrica',
        description: 
        'Hamilton ',
        cardimage: amoladoraABateriaCajaHamilton,
    },
    {
        name:'Discos de Desbaste',
        description: 
        'Tyrolit ',
        cardimage: discosTyrolit,
    },
    {
        name:'Martillo Bolita',
        description: 
        'El Roble',
        cardimage: martillosV,
    },
    {
        name:'Llave Francesa',
        description: 
        'Bahco ',
        cardimage: llavesFrancesas,
    },
    {
        name:'Atornilladora Angular',
        description: 
        'Black & Decker',
        cardimage: atornilladorAngulo,
    },
    {
        name:'Lijadora Orbital',
        description: 
        'Black & Decker',
        cardimage: lijadora,
    },
    {
        name:'Taladro Percutor',
        description: 
        'Black & Decker',
        cardimage: taladroAcc,
    },
    {
        name:'Soldadora Inverter',
        description: 
        'Pegaso',
        cardimage: soldadoraPegaso2,
    },
    {
        name:'Compresor',
        description: 
        'Labor ',
        cardimage: compresorLabor,
    },
    {
        name:'Sierra Caladora',
        description: 
        'Black & Decker',
        cardimage: sierraCaladora,
    },
    {
        name:'Taladro Inalámbrico',
        description: 
        'Argentec ',
        cardimage: taladroBateriaArgentec5,
    },
    {
        name:'Amoladora de Banco',
        description: 
        'Dogo',
        cardimage: amoladoraBancoDogo2,
    },
    {
        name:'Remachadora Dual',
        description: 
        'Bremen ',
        cardimage: remachadoraDualBremen2,
    },
    {
        name:'Discos de Corte',
        description: 
        'Dogo',
        cardimage: discoCorte,
    },
    {
        name:'Discos de Desbaste',
        description: 
        'Dogo',
        cardimage: discoDesbaste2,
    },
    {
        name:'Discos Flap',
        description: 
        'Dogo ',
        cardimage: discosFlap,
    },
    {
        name:'Llave de Impacto',
        description: 
        'Bremen ',
        cardimage: llaveImpactoBremen,
    },
    {
        name:'Pistola de Calor',
        description: 
        'Argentec ',
        cardimage: pistolaCalorArgentec,
    },
    {
        name:'Pistola de Calor',
        description: 
        'Stanley',
        cardimage: pistolaCalorStanley,
    },
    {
        name:'Pistola para Pintura',
        description: 
        'Dogo',
        cardimage: pistolaPinturaDogo,
    },
    {
        name:'Taladro Percutor',
        description: 
        'Argentec',
        cardimage: taladroArgentec2,
    },
    {
        name:'Mascara para Soldar',
        description: 
        'Foxtter',
        cardimage: mascaraSoldarFoxtter,
    },
    {
        name:'Amoladora Angular',
        description: 
        'Black & Decker',
        cardimage: amoladora,
    },
    {
        name:'Cinta Métrica',
        description: 
        'Giant',
        cardimage: cintaGiant,
    }
    
  ]

const Catalogo = () => {
  return (
    <>


        <div className='w-full h-full text-center'>
            <motion.div 
                
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='w-screen h-[30vh] lg:h-[40vh] top-0'
            >
                <div className='absolute top-30 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
                <img className='h-full w-full object-cover z-1' src={topImage} alt='Green Card & Visa'/>
                <div className='absolute top-[14%] lg:top-[24%] max-w-[1240px] w-full text-white z-20 p-2 text-left'>
                    <h2 className='py-2 font-bold text-gradient text-[2.6rem] uppercase w-min'>Catalogo</h2>
                    
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
                                <a href='https://www.wa.link/xtdsov' target='_blank' rel="noreferrer">
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

export default Catalogo