import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Notfound from "./Pages/Notfound";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      {/* <Product /> */}
    </div>
  );
}

export default App;
