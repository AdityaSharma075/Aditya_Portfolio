import React, { useRef } from "react";
import "./Top.scss";

import { images } from "../../constants";
import { init } from "ityped";
import { useEffect } from "react";
function Top() {
  const textRef = useRef();
  useEffect(() => {
    // console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      strings: ["Developer", "Competetive Programmer ", "Problem Solver"],
    });
  }, []);
  return (
    <div className="header" id="header">
      <div className="left">
        <div className="imgcontainer">
          <img src={images.adi} alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Aditya Sharma</h1>
          <h3>
            <span ref={textRef}> </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Top;
