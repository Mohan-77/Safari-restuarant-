import './App.css';
import Header from './components/Header';
import '../src/style.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { useState } from 'react';
import Contact from './pages/Contact';
import Cart from './pages/Cart';


function App() {
const [cart, setCart] = useState(5)

  return (
    <div className='container'>
      <Header cart={cart} setCart={setCart}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart setCart={setCart}/>} />
      </Routes>
    </div>
  );
}

export default App;
