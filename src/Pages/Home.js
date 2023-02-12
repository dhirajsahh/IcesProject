import React from "react";
import "./Home.css";
import Product from "./Product";
import Contact from "./Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <section></section>
      <div className="middlecontainer">
        <div className="leftsection">
          <div className="leftsectiondocument">
            <div className="leftsectionimage">
              <img src={require("../assets/laptopimage.jpg")} alt="" />
            </div>
            <div className="leftsectiontext">
              <h3>DISCOUNT</h3>
              <h1>50%</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
              </p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
        <div className="rightsection">
          <div className="upperimage">
            <img
              src={require("../assets/banner-02 (1).jpg")}
              alt="juiceimage"
            />
          </div>
          <div className="downimage">
            <img src={require("../assets/banner-03.jpg")} alt="" />
          </div>
        </div>
      </div>
      <Product />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
