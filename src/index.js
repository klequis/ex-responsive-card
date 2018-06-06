import React from "react";
import { render } from "react-dom";
import Demo from "./demo";

const rootElement = document.querySelector("#root");
if (rootElement) {
  render(
    <div>
      <Demo title="Short" />
      <Demo title="Long long long long long long long long done" />
    </div>,
    rootElement
  );
}
