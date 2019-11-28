import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BackButton from "./BackButton";

afterEach(cleanup);

it("Runs callback on click", () => {
  let clicked = false;
  const handleClick = () => (clicked = true);
  const { getByText } = render(<BackButton onClick={handleClick} />);
  fireEvent.click(getByText("Go Back"));
  expect(clicked).toBe(true);
});
