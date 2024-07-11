import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import myImage from "./img/file.png";
import ibisImage from "./img/github.png";
import vscodeImage from "./img/code-stable.png";
import gcbImage from "./img/logo512.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="overlay">
          <div className="container1">
            <div id="home-info">
              <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="content">
                      <h2 className="text-color: black">Hi!<br/>I'm Jan Rian Coronel <br/> Your Future Programmer</h2>
                      <h4>Programming is not just about writing code; it’s about solving problems and creating solutions that can transform ideas into reality.</h4>
                      <a href="/about" className="btn">Explore More</a>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <img src={myImage} alt="Gor" className="home-image pt-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg className="sea-waves" viewBox="0 24 150 28" preserveAspectRatio="none">
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

      <div id="about-infos" className="bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5 mt-5 text-white">
                <b className="text-black">Application</b>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow" style={{ border: "2px solid pink" }}>
                <img src={ibisImage} alt="IbisPaintX" className="smaller-image" />
                <h4 className="text-center title"><b>GitHub</b></h4>
                <p>On GitHub, every commit is a step towards a better codebase and a stronger community.</p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow" style={{ border: "2px solid pink" }}>
                <img src={vscodeImage} alt="Visual Studio Code" className="smaller-image" />
                <h4 className="text-center title"><b>Visual Code</b></h4>
                <p>From quick edits to full-fledged development, Visual Studio Code is the tool for every coder.</p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow" style={{ border: "2px solid pink" }}>
                <img src={gcbImage} alt="Gaming Center Base" className="smaller-image" />
                <h4 className="text-center title"><b>React App</b></h4>
                <p>With React, create interactive and high-performance web apps effortlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
