import React from 'react';
// components
import Nav from './components/Nav';
import WhatsappScroll from './components/WhatsappScroll';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sensores from './pages/Sensores';
import Controladores from './pages/Controladores';
import Resistencias from './pages/Resistencias';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      
      <Nav />
      <WhatsappScroll />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/controladores' element={<Controladores/>} />
        <Route path='/sensores' element={<Sensores/>} />
        <Route path='/resistencias' element={<Resistencias/>} />
      </Routes>
      <Contact />
    </div>
  );
};

export default App;
