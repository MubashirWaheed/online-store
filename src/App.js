import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App h-screen ">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Hero/>}/>
        {/* <Hero /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
