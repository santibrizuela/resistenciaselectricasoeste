import React from 'react';
// components
import WhatsappScroll from './components/WhatsappScroll';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Webdevelopment from './pages/Webdevelopment';
import Marketing from './pages/Marketing';
import Branding from './pages/Branding';
import Service from './pages/Service';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      
      <Navbar />
      <WhatsappScroll />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/branding' element={<Branding/>} />
        <Route path='/marketing' element={<Marketing/>} />
        <Route path='/webdevelopment' element={<Webdevelopment/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/service' element={<Service/>} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
