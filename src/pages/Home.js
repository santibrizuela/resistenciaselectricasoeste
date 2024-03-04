import React from 'react'
// components
import About from '../components/About';
import Services from '../components/Services';
import Banner from '../components/Banner';
import Work from '../components/Work';

const Home = () => {
  return (
    <>
        <Banner/>
        <About/>
        <Services/>
        <Work/>
    </>
  )
}

export default Home