import React from "react";
import Navbar from "./Navbar";
import PC1Image from "./img/08.jpg";
import PC2Image from "./img/07.jpg";
import PC3Image from "./img/05.jpg";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <Navbar />

      <div id="about-info" className="bg-dark">
  <div className="container-fluid mt-5">
    <div className="row">
      <div className="col">
        <h1 className="fw-bold display-1 text-center mt-5 pt-5 mt-5 text-white">
          <b>Experience</b>
        </h1>
      </div>
    </div>
    </div>
    </div>

    {/* Decorative elements */}
    <div className="snowflakes">
            {/* Adjust the number and positioning of elements as needed */}
            {[...Array(10)].map((_, index) => (
              <div className="snowflake" key={index}></div>
            ))}
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


      <div id="experience-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">s
              <div className="container">
                <hr />
                <div className="row mb-5">
                  <div className="col-lg-4">
                    <div className="card experience-card">
                      <img className="experience-image" src={PC1Image} alt="PC1" />
                      <h4 className="experience-title">Graduation Picturial</h4>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card experience-card">
                      <img className="experience-image" src={PC2Image} alt="PC2" />
                      <h4 className="experience-title">Thesis Defended</h4>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card experience-card">
                      <img className="experience-image" src={PC3Image} alt="PC3" />
                      <h4 className="experience-title">Colloquium Present</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
