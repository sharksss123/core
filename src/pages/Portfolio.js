import React from "react";
import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage2 from "./img/lop.jpg";
import ontoy1Image from "./img/scren.png";
import ontoy2Image from "./img/03.jpg";
import jao5Image from "./img/04.jpg";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="experiences-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                <b className="portfolio-title">Portfolio</b>
              </h1>
            </div>
          </div>
  

      {/* Decorative elements */}
      <div className="snowflakes">
            {/* Adjust the number and positioning of elements as needed */}
            {[...Array(10)].map((_, index) => (
              <div className="snowflake" key={index}></div>
            ))}
          </div>
        </div>
      </div>

      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>

      <div id="portfolio-info" className="ontoy">
        <div className="container mt-5">
          <div className="row mt-5">        
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow text-center p-4">
                <img className="portfolio-image" src={calcuImage2} alt="Calculator" />
                <h4 className="mt-3">Calculator</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow text-center p-4">
                <img className="portfolio-image" src={ontoy2Image} alt="System Integrations" />
                <h4 className="mt-3">Colloquium</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow text-center p-4">
                <img className="portfolio-image" src={jao5Image} alt="Capstone Project" />
                <h4 className="mt-3">Capstone Project</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow text-center p-4">
                <img className="portfolio-image" src={ontoy1Image} alt="My React Js" />
                <h4 className="mt-3">My React Js</h4>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
};

export default Portfolio;
