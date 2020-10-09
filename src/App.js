import React from "react";
import "./css/tachyons.css";
import "./css/base.css";
import "./css/main.css";

import Nav from "./Nav";

function App() {
  return (
    <div>
      {/* body */}
      <div>
        <header className="w-100 pv3 ph4 flex items-center justify-between">
          <h3 className="f3-l f5-ns">HMM Team Demo</h3>
          <p className="f6">
            Built with{" "}
            <a className="white" href="https://reactjs.org/">
              React
            </a>
            ,{" "}
            <a className="white" href="http://tachyons.io">
              Tachyons
            </a>{" "}
            and Love
          </p>
        </header>
        {/* section */}
        <section className="min-vh-100 flex">
          {/* Nav column */}
          <div className="ph4 pt5 w-20 br b--light-silver">
            <Nav />
          </div>

          {/* content column */}
          <div className="content w-80 pa5">
            <h1 className="fw5 f3-l mb4">What is HMM?</h1>
            <p className="f5 w-70 lh-copy mb6">
              HMM, “Hazardous Materials Management”, is a system that allows us
              to fulfill best in class chemical management services for our
              Aerospace customers, by tracking container level inventory,
              chemical constituent data, product safety data sheets, quality
              documentation, and more. 
            </p>
            <h1 className="fw5 f3-l mb4">Why the re-write?</h1>
            <p className="f5 w-70 lh-copy">
              The “UX” project is a rewrite of the current system, to bring a
              better, more modern and attractive user experience, and to
              streamline the work processes for users.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
