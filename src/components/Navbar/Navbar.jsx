import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { FaHome,FaShoppingCart } from 'react-icons/fa';
import { FiLogIn } from "react-icons/fi";
import { MdPermContactCalendar } from "react-icons/md";
import { AiFillShopping, } from "react-icons/ai";
import { BiCalendarMinus } from "react-icons/bi";
import { useSelector } from "react-redux";



const Navbar = () => {
  const selector = useSelector((state) => state.cart.item);
  const count=selector.length;
  
  return (
    <>
    <nav>
      <div className="logosection">
        <h2>My store</h2>
      </div>
      <div className="middlesection">
        <ul>
      <button><Link to="/" className="link cart"> <FaHome  /> Home</Link></button>
      <button> <Link to="/Product" className="link cart"><AiFillShopping />Product</Link></button> 
      <button> <Link to="/About" className="link cart"><BiCalendarMinus />About</Link></button>
      <button> <Link to="/Contact" className="link cart"><MdPermContactCalendar />Contact</Link></button>
       </ul>
      </div>

      <div className="aside">
      <button><Link to="/Login" className="link cart"> <FiLogIn />Login</Link></button>
      <button> <Link to="/Cart" className="link cart"><FaShoppingCart />Cart {count}</Link></button> 

      </div>
      </nav>
    </>
  );
};

export default Navbar;
