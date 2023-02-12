import React from "react";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="contactsection">
        <div className="logosection">
          <div className="logo">
            <img src={require("../assets/asset 0.png")} alt="Logo" />
          </div>
          <div className="text">
            <h5>ADRESS:&nbsp; &nbsp; </h5>
            <p>
              28 White tower, Street Name NewYork <br /> City, USA
            </p>
            <h5>TELEPHONE:&nbsp;</h5>
            <p> &nbsp; 9810142525</p>
            <h5>EMAIL:&nbsp;</h5>
            <p> &nbsp; dhirajmahato2019@gmail.com</p>
          </div>
        </div>
        <div className="menusection">
          <h5> &nbsp; MENU</h5>
          <ul>
            <li> Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Services</li>
            <li>Testomonial</li>
          </ul>
        </div>
        <div className="accountsection">
          <h5>ACCOUNT</h5>
          <ul>
            <li>Account</li>
            <li>Login</li>
            <li>Register</li>
            <li>Checkout</li>
            <li>Shoping</li>
            <li>Widget</li>
          </ul>
        </div>
        <div className="suscribesection">
          <h5>NEWSLETTER</h5>
          <p>
            Subscribe by our newsletter and get <br /> update protidin.
          </p>
          <p>
            <input type="text" placeholder="Enter your email" />
          </p>
          <p>
            <button
              onClick={() => {
                alert("Your email has been submited");
              }}
            >
              Suscribe
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
