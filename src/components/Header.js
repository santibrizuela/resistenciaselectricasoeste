import React from 'react';
//Images
import Logo from '../assets/logoMR.png'

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/*Logo*/}
          <div className='w-20'>
          <a href='/'>
            <img src={Logo} alt='Logo' />
          </a>
          </div>
          
          {/*Buttonn*/}
          <a 
            href='https://wa.link/k6wmgp'
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className='btn btn-sm'>Contactanos</button>
          </a>


        </div>

      </div>
    </header>
    );
};

export default Header;
