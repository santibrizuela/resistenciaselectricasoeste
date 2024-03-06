import React from 'react'
// components
import About from '../components/About';
import Services from '../components/Services';
import Banner from '../components/Banner';
import Catalogo from '../components/Catalogo';

const Home = () => {
  return (
    <>
        <Banner/>
        <About/>
        <Catalogo/>
        <Services/>
    </>
  )
}

export default Home