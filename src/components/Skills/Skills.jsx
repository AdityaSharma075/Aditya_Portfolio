import React from "react";
import "./Skills.scss";
import { images } from "../../constants";
const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="heading">
        <h1>Technical Skills</h1>
      </div>
      <div className="container">
        <div className="left">
          <h1>Competetive Programmer</h1>
          <p className="description">
            I have a good intrest in problem solving . So i started competetive
            programming from 1st year of my college. In starting i practice
            problems on HacckerRank and get my basics clear. Then i have started
            solving problem on Leetcode. I use Java as my Preffered language for
            coding. I can also code in c++.
            <br />
            <br /> Key Skills : JavaSE
            <br />
            <br />
            <a href="">
              <img
                src={images.leetcode}
                alt=""
                height={"30px"}
                width={"30px"}
              />
            </a>
            <a href="">
              <img
                src={images.codechef}
                alt=""
                height={"30px"}
                width={"30px"}
              />
            </a>
            <a href="">
              <img
                src={images.hackerrank}
                alt=""
                height={"30px"}
                width={"30px"}
              />
            </a>
          </p>
        </div>
        <div className="right">
          <h1>Web Developer</h1>
          <p className="description">
            I am a Mern FullStack Web Devloper . I have a good understanding of
            backend in Node.js.
            <br />
            <br /> Key Skills : Node.js , Express.js , React(Redux/Hooks)
            ,MongoDB,
            <br /> SQL, HTML, CSS, JS
            <br />
            <br />
            <a href="">
              <img src={images.github} alt="" height={"30px"} width={"30px"} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
