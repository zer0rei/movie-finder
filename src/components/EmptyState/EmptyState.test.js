import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EmptyState from "./EmptyState";

afterEach(cleanup);

it("Renders message from props", () => {
  const { getByText } = render(<EmptyState message="message test" />);
  expect(getByText("message test")).toBeInTheDocument();
});

it("Renders description from props", () => {
  const { getByText } = render(<EmptyState description="description test" />);
  expect(getByText("description test")).toBeInTheDocument();
});
