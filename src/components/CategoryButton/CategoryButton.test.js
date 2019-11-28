import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CategoryButton from "./CategoryButton";

afterEach(cleanup);

it("Runs callback on click", () => {
  let clicked = false;
  const handleClick = () => (clicked = true);
  const { getByTestId } = render(<CategoryButton onClick={handleClick} />);
  fireEvent.click(getByTestId("category-button"));
  expect(clicked).toBe(true);
});

it("Renders title from props", () => {
  const { getByText } = render(<CategoryButton title="title test" />);
  expect(getByText("title test")).toBeInTheDocument();
});

it("Renders subtitle from props", () => {
  const { getByText } = render(<CategoryButton subtitle="subtitle test" />);
  expect(getByText("subtitle test")).toBeInTheDocument();
});
