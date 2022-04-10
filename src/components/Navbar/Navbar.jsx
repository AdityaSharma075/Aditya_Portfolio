import React from "react";
import "./Navbar.scss";
import { images } from "../../constants/index";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
export default function Navbar({ menuOpen, setmenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper ">
        <div className="left">
          <a href="#header" className="logo">
            {/* <img src={images.logo} alt="" height={"45px"} /> */}
            Aditya.
          </a>
        </div>
        <div className="middle">
          <ul>
            <li>
              <div></div>
              <a href="#header">Home</a>
            </li>
            <li>
              <div></div>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <div></div>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <div></div>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setmenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
