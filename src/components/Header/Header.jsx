import React, { useRef } from "react";
import "./Header.scss";
import Top from "./Top";
import Bottom from "./Bottom";
const Header = () => {
  return (
    <div className="header-wrapper">
      <Top />
      <Bottom />
    </div>
  );
};

export default Header;
