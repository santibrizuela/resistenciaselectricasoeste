import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import brandLogo from '../assets/logoV.png'
import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    };

    useEffect(()=> {
      const handleShadow = () => {
        if (window.scrollY>= 30) {
          setShadow(true);
        } else {
          setShadow(false)
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);

  return (
    <div
     
      className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] backdrop-blur-sm' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <a href='/'>
              <img 
              className=''
              src={brandLogo} 
              alt='Brizuela Sideravicius' 
              width={100} 
              height={60}
              />
            </a>            

            
            <a 
                href='#contact'
                className='uppercase'
            >
                <button className='btn btn-lg btn-outline flex items-center'>
                  Contactanos 
                </button>
            
            </a>
            
            {/* Menú Estático */}
            <div className=''>
              <ul
              
                className={shadow ? 'hidden md:flex font-semibold text-light' : 'hidden md:flex font-semibold text-black'}>
                <a href='/'>
                  <li className='ml-10 text-sm uppercase menuNavbar'>Inicio</li>
                </a>
                <a href='/portfolio'>
                  <li className='ml-10 text-sm uppercase menuNavbar'>Portfolio</li>
                </a>
                <a href='/about'>
                  <li className='ml-10 text-sm uppercase menuNavbar'>Nosotros</li>
                </a>
                <a href='#contact'>
                  <li className='ml-10 text-sm uppercase menuNavbar'>Contacto</li>
                </a>
              </ul>
              {/* menu toggler */}
              <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25}/>
              </div>
            </div>
        </div>


        {/* Menú Desplegable */}
        <div 
          className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}
        >
          <div 
            className={
              nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] text-green-900 p-10 ease-in duration-500' 
                  : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
          >
            <div>
              <div className='flex w-full items-center justify-between'>
                <a onClick={handleNav} href='/'>
                  <img 
                  src={brandLogo} 
                  width='87' 
                  height='35' 
                  alt='Brizuela Sideravicius'/>
                </a>
                <div onClick={()=> setNav(false)} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                  <AiOutlineClose/>
                </div>
              </div>
              <div className='border-b border-gray-300 my-4'>
                <h3 className='w-[85%] md:w-[90%] py-4'>Brizuela Sideravicius</h3>
              </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <a href='/'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm menuNavbar'>Inicio</li>
                </a>
                <a href='/portfolio'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm menuNavbar'>Portfolio</li>
                </a>
                <a href='/about'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm menuNavbar'>Nosotros</li>
                </a>                
                <a href='#contact'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm menuNavbar'>Contacto</li>
                </a>
              </ul>
              <div className='pt-30'>
                <p className='uppercase tracking-widest pt-10'>Contacto</p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <a target='_blank' rel='noreferrer' href='https://www.wa.link/xtdsov'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                            <FaWhatsapp/>
                        </div>
                    </a>
                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/ferreteriadivano/'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                            <FaInstagram/>
                        </div>
                    </a>    
                    <a target='_blank' rel='noreferrer' href='https://github.com/santibrizuela'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                            <FaGithub/>
                        </div>
                    </a>
                    <a target='_blank' rel='noreferrer' href='https://ar.linkedin.com/company/brizuela-sideravicius'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                            <FaLinkedin/>
                        </div>
                    </a>
                </div>
              </div>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Navbar