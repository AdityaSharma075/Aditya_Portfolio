import React from "react";
import "./About.scss";

import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <Zoom bottom>
      <div className="about" id="about">
        <div className="container">
          <h1>About me</h1>

          <div className="textcontainer">
            <p className="desc">
              I am a third year Undergraduate at LNCT college from Computer
              Science Branch.I am a Enthusiastic Programmer , WebDevloper
              ,Highly skilled in JavaSE with a great command over Data structure
              And algorithm.
            </p>
            <div className="card-mid">
              <h2>Here are a few Highlights:</h2>
              <div className="highlights">
                <div className="highlight-blob"></div>
                <div className="highlight-key">
                  <span>Full Stack Web Developer(MERN)</span>
                </div>
              </div>
              <div className="highlights">
                <div className="highlight-blob"></div>
                <div className="highlight-key">
                  <span>Backend using nodejs</span>
                </div>
              </div>
              <div className="highlights">
                <div className="highlight-blob"></div>
                <div className="highlight-key">
                  <span>React and Redux</span>
                </div>
              </div>
              <div className="highlights">
                <div className="highlight-blob"></div>
                <div className="highlight-key">
                  <span>Building REST APIs</span>
                </div>
              </div>
              <div className="highlights">
                <div className="highlight-blob"></div>
                <div className="highlight-key">
                  <span>Database(Mongoose , sql)</span>
                </div>
              </div>
              <div className="highlights">
                <div className="highlight-blob"></div>
                <div className="highlight-key">
                  <span>JAVA standard</span>
                </div>
              </div>
              <div className="highlights">
                <div className="highlight-blob"></div>
                <div className="highlight-key">
                  <span>Compititive Programming using java SE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default About;
