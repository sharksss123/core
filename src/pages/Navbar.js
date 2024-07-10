import { Outlet } from "react-router-dom";
import "./Navbar.css";
import myImage from "./img/pow.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={myImage} alt="Portfolio Logo" className="logo-img" />
          </a>
          <h4><b>PORTFOLIO</b></h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ms-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/About" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/Portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="/Experience" className="nav-link">
                  Experiences
                </a>
              </li>
              <li className="nav-item">
                <a href="/Contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
