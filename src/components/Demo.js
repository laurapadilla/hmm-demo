import React from "react";

class Demo extends React.Component {
  render() {
    return (
      <div>
        <h1 className="fw5 f3-l mb4">Toolset</h1>
        <p className="f5 w-70 lh-copy mb5">
          The new HMM application is built with{" "}
          <a className="no-underline" href="https://angular.io/">
            Angular
          </a>{" "}
          and{" "}
          <a
            className="no-underline"
            href="https://www.telerik.com/kendo-angular-ui"
          >
            Kendo UI
          </a>
          . 
        </p>
        <h1 className="fw5 f3-l mb4">Demo Site</h1>
        <p className="f5 w-70 lh-copy mb4">
         
           Visit the demo site  <a
            className="no-underline"
            href="https://devppgchemicalmanagement.azurewebsites.net/"
          >
           here
          </a>{" "}
        </p>
      </div>
    );
  }
}

export default Demo;
