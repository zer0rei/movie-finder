import React from "react";
import ReactDOM from "react-dom";
import ShowDetails from "./ShowDetails";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ShowDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
