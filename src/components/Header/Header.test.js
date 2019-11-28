import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

afterEach(cleanup);

it("Runs callback on click", () => {
  let clicked = false;
  const handleClick = () => (clicked = true);
  const { getByTestId } = render(<Header onLogoClick={handleClick} />);
  fireEvent.click(getByTestId("logo-container"));
  expect(clicked).toBe(true);
});
