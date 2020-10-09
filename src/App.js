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
        <header className="w-100 pa3">
          <h1 className="f3-l f5-ns">HMM Team Demo</h1>
        </header>
        {/* section */}
        <section className="min-vh-100 flex">
          {/* Nav column */}
          <div className="nav w-25 bg-lightest-blue">
            <Nav />
          </div>

          {/* content column */}
          <div className="content w-75 bg-purple">
            <h3>test test</h3>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
