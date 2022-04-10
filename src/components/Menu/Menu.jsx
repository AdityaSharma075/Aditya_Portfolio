import React from "react";
import "./Menu.scss";
export default function Menu({ menuOpen, setmenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#header">Home</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#project">Projects</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
