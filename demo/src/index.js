import React, { Component } from "react";
import { render } from "react-dom";

import Example from "../../src";

class Demo extends Component {
  render() {
    return (
      <div
        style={{
          padding: "200px 300px",
          height: "100vh",
          boxSizing: "border-box"
        }}
      >
        <Example>
          <div
            style={{
              width: "2000px",
              height: "2000px",
              backgroundColor: "rgba(200, 0, 0, 0.5)"
            }}
          />
        </Example>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
