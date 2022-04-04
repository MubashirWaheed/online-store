import React, { useState, useEffect } from 'react';
import Bought from './context/boughtContext';
import './App.css';
import Home from './pages/home';
import Shop from './pages/shop'


import Navbar from './components/Navbar'
import Dropdown from './components/Dropdown';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(()=>{

      const hideMenu = ()=>{
        if(window.innerWidth > 768) setIsOpen(false);
      }
      
      window.addEventListener("resize",hideMenu);
    
      return ()=>{
        window.removeEventListener("resize", hideMenu)
      }
    })
  
  return (
    <div className="App h-screen relative ">
      <BrowserRouter>
        <Bought>
            <Navbar toggleMenu={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route  path="shop" element={<Shop />}/>
            </Routes>
          </Bought>
      </BrowserRouter>
    </div>
  );
}

export default App;
