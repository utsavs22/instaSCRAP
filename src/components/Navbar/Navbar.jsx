import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link
            className="nav-logo"
            to='/'
            style={{ maxWidth: "450px" }}
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <img src="https://i.postimg.cc/HxjVzfgQ/home.png" alt="/" style={{ height: "25px" }}/>
          </Link>

          <div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="nav-links"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
