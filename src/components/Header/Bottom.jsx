import React from "react";
import "./Bottom.scss";
import { images } from "../../constants";

function Bottom() {
  return (
    <div className="curve">
      <div className="img-wrapper">
        <img src={images.curve} alt="" />
      </div>
    </div>
  );
}

export default Bottom;
