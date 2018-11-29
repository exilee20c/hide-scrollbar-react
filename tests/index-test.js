import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Component from "src/";

describe("Scrollable", () => {
  let node, thumb, content;

  beforeEach(() => {
    node = document.createElement("div");
    thumb = document.createElement("div");
    thumb.classList.add("exl-scrollable-scrollbar-thumb");

    content = document.createElement("div");
    content.classList.add("exl-scrollable-content");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("Thumb Render Succeed", () => {
    render(<Component />, node, () => {
      expect(node.innerHTML).toContain(thumb.innerHTML);
    });
  });

  it("Content Render Succeed", () => {
    render(<Component />, node, () => {
      expect(node.innerHTML).toContain(content.innerHTML);
    });
  });
});
