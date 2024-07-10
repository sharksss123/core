import React, { useState } from "react";
import "./About.css"; // Make sure to define your styles in About.css
import Navbar from "./Navbar";
import myImage from "./img/roselyn.png"; // Adjust the import path based on your project structure

const About = () => {
  const [clicked, setClicked] = useState(false);

  const handleImageClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <Navbar />
      <div id="about-info" className="bg-dark">
  <div className="container-fluid mt-5">
    <div className="row">
      <div className="col">
        <h1 className="fw-bold display-1 text-center mt-5 pt-5 mt-5 text-white">
          <b>ABOUT PAGES</b>
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


      <div id="about">
        <div className="container">
          <div className="card shadow mt-5 p-5 mb-5 border-black">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-center justify-content-center">
                {/* Centering image using flexbox */}
                <img
                  src={myImage}
                  alt="Roselyn Abadiano"
                  className={`img-fluid ${clicked ? "clicked" : ""}`}
                  onClick={handleImageClick}
                />
              </div>
              <div className="col-lg-8">
              <div className="card box shadow mb-3 p-3 borde-pink">
                  <h2 className="text-dark"><b>About Me</b></h2>
                  <p className="text-dark">
                    <b>Name:</b>       Roselyn Abadiano 
                    <br></br>
                    <b>Email:</b>      abadianoroselyn@gmail.com
                    <br></br>
                    <b>Birthdate:</b>  March 18, 1998
                    <br></br>
                    <b>Birthplace:</b> Kabankalan City Negros Island Region
                    <br></br>
                    <b>Age:</b>        26
                    <br></br>
                    <b>Phone No.:</b>   09782353746
                   
                   
                    
                  </p>
                </div>
                <div className="card box shadow mb-3 p-3 border-pink">
                  <h4 className="text-dark"><b>Academic</b></h4>
                  <p className="text-dark">
                   <b>Primary:</b>  Himamaylan Central School
                   <br></br>
                   <b>Secondary:</b> Nuestra Senora Delas Nieves
                   <br></br>
                   <b>tertiary:</b>   Central Philippines State University
                   <br></br>
                   <b>Course:</b> Bachelor Of Science In Information Technology
                  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};


export default About;
