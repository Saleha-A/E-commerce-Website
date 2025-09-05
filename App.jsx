import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import ContactUs from "./components/Contactus";
const App = () => {

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Navbar cart={cart}  />

      <div className="min-h-screen p-6 pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={ <Products cart={cart}  setCart={setCart}/>} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
