import React from 'react'
// components
import Banner from '../components/Banner';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <About/>
        <Services/>
        <Work/>
    </>
  )
}

export default Home