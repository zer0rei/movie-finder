import React from "react";
import {
  render,
  cleanup,
  waitForElement,
  fireEvent
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import ShowList from "./ShowList";

const buildShows = () => {
  const shows = [];
  for (let i = 0; i < 50; i++) {
    let show = {
      title: "Wolf Creek" + i,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: i % 2 ? "movie" : "series",
      images: {
        "Poster Art": {
          url:
            "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg"
        }
      },
      releaseYear: 2016
    };
    shows.push(show);
  }
  return {
    entries: shows
  };
};

afterEach(cleanup);

jest.mock("axios");

axios.mockResolvedValue({ data: buildShows() });

it("Renders the loading state and shows", async () => {
  const { getByTestId } = render(<ShowList type="movies" />);
  // On first render, we expect the "loading" state to be displayed
  expect(getByTestId("loading")).toBeInTheDocument();
  const showsContainer = await waitForElement(() =>
    getByTestId("show-list-container")
  );
  expect(showsContainer).toBeInTheDocument();
});

it("Renders the error state on fetch fail", async () => {
  axios.mockRejectedValueOnce({});
  const { getByText } = render(<ShowList type="movies" />);
  const error = await waitForElement(() => getByText(/Something went wrong/));
  expect(error).toBeInTheDocument();
});

it("Calls onDetailsShow with the clicked show", async () => {
  let selectedShow;
  const handleDetailsShow = show => (selectedShow = show);
  const { getByTestId } = render(
    <ShowList type="movies" onDetailsShow={handleDetailsShow} />
  );
  const showsContainer = await waitForElement(() =>
    getByTestId("show-list-container")
  );
  // Click on first element
  const firstShowElement = showsContainer.children[0];
  fireEvent.click(firstShowElement.querySelector("button"));
  const firstShow = buildShows().entries.filter(
    s => s.programType === "movie"
  )[0];
  expect(selectedShow).toEqual(firstShow);
});
