import React, { useState, useEffect } from "react";
import "./Projects.scss";
import ProjectList from "../ProjectList/ProjectList";
import Zoom from "react-reveal/Zoom";
// import { useState } from "react";
import { reactApp, nodeApp, featured } from "../../data";
import { images } from "../../constants";
const Project = () => {
  const [selected, setselected] = useState("featured");
  const [data, setdata] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "react",
      title: "React Project",
    },
    {
      id: "node",
      title: "Node Project",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setdata(featured);
        break;
      case "react":
        setdata(reactApp);
        break;
      case "node":
        setdata(nodeApp);
        break;
      default:
        setdata(featured);
    }
  }, [selected]);

  // const list = [1, 3, 2];
  return (
    <Zoom bottom>
      <div className="projects" id="projects">
        <h1>Projects</h1>
        <div className="container-wrapper">
          <ul>
            {list.map((item) => (
              <ProjectList
                title={item.title}
                active={item.id === selected}
                setselected={setselected}
                id={item.id}
              />
            ))}
          </ul>
          <div className="container">
            {data.map((d) => (
              <div className="wrapper">
                <div className="item">
                  <img src={d.img} alt="" />
                  <h3>{d.title}</h3>
                </div>
                <div className="details">
                  <div className="title">{d.title}</div>
                  <p>{d.description}</p>
                  <a href={d.github} target="_blank">
                    <img src={images.github} />
                    <span>Github</span>
                  </a>
                  <a href={d.web} target="_blank">
                    <img src={images.internet} />
                    <span>{d.title}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Project;
