import React, { useState, useEffect , useContext} from 'react';
import './App.css';
import Home from './pages/home';
import Shop from './pages/shop'
import Sidebar from './components/Sidebar';

import Navbar from './components/Navbar'
import Dropdown from './components/Dropdown';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { boughtContext } from './context/boughtContext';

function App() {
  const {toggle, toggleSidebar} = useContext(boughtContext)
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);

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
        {/* <Bought> */}
            <Navbar toggleMenu={toggleNav} />
            <Dropdown isOpen={isOpen} toggle={toggleNav} />
            <Sidebar toggleSidebar={toggleSidebar} toggle={toggle} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route  path="shop" element={<Shop />}/>
            </Routes>
          {/* </Bought> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
