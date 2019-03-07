import React, { Component } from "react";
import { render } from "react-dom";

import Scrollable from "src";
import check from "./check";
import "./reset.css";

class Demo extends Component {
  render() {
    const Content = () => {
      console.log("render content");

      return (
        <div
          style={{
            width: "2000px",
            height: "2000px",
            backgroundImage: `url(${check})`
          }}
        />
      );
    };

    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.5",
              marginBottom: "0.5em",
              textAlign: "center"
            }}
          >
            2000 x 2000 content with Scrollable
          </h3>
          <div
            style={{
              margin: "0 12px",
              width: "400px",
              height: "400px"
            }}
          >
            <Scrollable>
              <Content />
            </Scrollable>
          </div>
        </div>
        <div>
          <h3
            style={{
              fontSize: "1.5",
              marginBottom: "0.5em",
              textAlign: "center"
            }}
          >
            2000 x 2000 content without Scrollable
          </h3>
          <div
            style={{
              margin: "0 12px",
              width: "400px",
              height: "400px",
              overflow: "scroll"
            }}
          >
            <div
              style={{
                width: "2000px",
                height: "2000px",
                backgroundImage: `url(${check})`
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
