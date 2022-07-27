
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartState from './context/CartState';
import { Contact, Home, Product, Store, Team, TheJourney } from './pages';




function App() {
  return (
    <CartState>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={ <Product />} />
      <Route path="/store" element={<Store />} />
      <Route path="/team" element={<Team />} />
      <Route path="/the-journey" element={<TheJourney />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </CartState>
    
  );
}

export default App;
