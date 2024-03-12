import React from 'react';
// components
import WhatsappScroll from './components/WhatsappScroll';
import About from './components/About';
import Services from './components/Services';
import Catalogo from './components/Catalogo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Service from './pages/Service';
import Accesorios from './pages/Accesorios';
import Resistencias from './pages/Resistencias';
import Sensores from './pages/Sensores';
import Controladores from './pages/Controladores';
import Ascensores from './pages/Ascensores';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      
      <Navbar />
      <WhatsappScroll />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/catalogo' element={<Catalogo/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/accesorios' element={<Accesorios/>} />
        <Route path='/resistencias' element={<Resistencias/>} />
        <Route path='/Sensores' element={<Sensores/>} />
        <Route path='/Controladores' element={<Controladores/>} />
        <Route path='/Ascensores' element={<Ascensores/>} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
