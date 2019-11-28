import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "./Home";

jest.mock("../CategoryButton");

afterEach(cleanup);

it("Runs callback on movies click", () => {
  let clicked = false;
  const handleClick = () => (clicked = true);
  const { getByText } = render(<Home onMoviesClick={handleClick} />);
  fireEvent.click(getByText("Movies"));
  expect(clicked).toBe(true);
});

it("Runs callback on series click", () => {
  let clicked = false;
  const handleClick = () => (clicked = true);
  const { getByText } = render(<Home onSeriesClick={handleClick} />);
  fireEvent.click(getByText("Series"));
  expect(clicked).toBe(true);
});
