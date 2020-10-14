import React from "react";
import "./css/tachyons.css";
import "./css/base.css";
import "./css/main.css";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Customer from "./components/Customer";
import Users from "./components/Users";
import Demo from "./components/Demo";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      {/* body */}
      <div>
        <header className="w-100 pa3 flex items-center justify-between">
          <h3 className="f4-l f5-ns">HMM Team Demo</h3>
          <p className="f6">
            Built with{" "}
            <a
              className="white"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            ,{" "}
            <a
              className="white"
              href="http://tachyons.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tachyons
            </a>{" "}
            and 💛
          </p>
        </header>
        {/* Main */}
        <main className="min-vh-100 flex">
          {/* Nav column */}
          <div className="ph4 pt5 w-20 br border-gray">
            <Nav />
          </div>

          {/* content column */}
          <section className="content w-80 pa5">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/customer" component={Customer} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/demo" component={Demo} />
            </Switch>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
