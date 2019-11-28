import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SHowItem from "./SHowItem";

afterEach(cleanup);

it("Runs callback on click", () => {
  let clicked = false;
  const handleClick = () => (clicked = true);
  const { getByText } = render(<SHowItem onMoreInfoClick={handleClick} />);
  fireEvent.click(getByText("More Info"));
  expect(clicked).toBe(true);
});
