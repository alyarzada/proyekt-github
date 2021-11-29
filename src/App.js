import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Faq from './components/Faq/Faq';
import Store from './components/Store/Store';
// import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import Card from './components/Card/Card';
import SpecificProduct from './components/Card/SpecificProduct';

function App() {
  return (
    <Router>
      <Particles
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 900,
              },
            },
          },
        }}
      />
      <Navbar />
      <Routes>
        
        <Route index path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faq" element={<Faq />} />
        {/* <Route path="/Blog" element={<Blog />} /> */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Store/:code" element={<SpecificProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
