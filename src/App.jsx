import * as React from "react";
import { useState } from "react";
import {
  Navbar,
  About,
  Contact,
  Header,
  Skills,
  Projects,
  Menu,
} from "./components";
import "./App.scss";

const App = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <div className="sections">
        <Header />
        <About />
        <Projects />
        {/* <Work /> */}
        <Skills />
        <Contact />
      </div>
    </div>
  );
};
export default App;
