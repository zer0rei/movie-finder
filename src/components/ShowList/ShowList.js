import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ShowList.css";
import useAxios from "../../hooks/useAxios";
import BackButton from "../BackButton";
import ShowItem from "../ShowItem";
import LoadingIndicator from "../LoadingIndicator";
import { toCamel } from "../../utils";

// Should come from an environment variable
const showsAPI =
  "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";

function ShowList({ type, onBackButtonClick, onDetailsShow }) {
  const [{ isLoading, isError, data }] = useAxios(showsAPI, {});
  const [searchQuery, setSearchQuery] = useState();

  let shows = [];
  if (data && data.entries && data.entries.length) {
    const showType = type === "movies" ? "movie" : type;
    shows = data.entries.filter(({ programType, releaseYear }) => {
      // Filter out other program types
      if (programType !== showType) return false;
      // Filter out releaseYear attribute with value < 2010
      if (releaseYear < 2010) return false;
      return true;
    });
    // Get only first 21 elements
    shows = shows.slice(0, 21);
    // Sort by the title attribute value in ascending alphanumeric order
    shows = shows.sort((a, b) =>
      a.title.localeCompare(b.title, "en", { numeric: true })
    );
    // Filter searched for shows using searchQuery
    if (searchQuery) {
      shows = shows.filter(
        ({ title, programType, releaseYear }) =>
          title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          releaseYear.toString().includes(searchQuery) ||
          programType.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  }

  const handleSearch = e => {
    setSearchQuery(e.target.value);
  };

  const renderShows = () => {
    if (isLoading) {
      return <LoadingIndicator />;
    }

    if (isError) {
      return "Error State";
    }

    if (!shows.length) {
      return "Empty State";
    }

    return shows.map((show, index) => (
      <ShowItem
        key={show.title}
        className="show-list__item"
        image={show.images["Poster Art"].url}
        title={show.title}
        index={index + 1}
        releaseYear={show.releaseYear}
        type={show.programType}
        onMoreInfoClick={() => onDetailsShow(show)}
      />
    ));
  };

  return (
    <div>
      <BackButton
        className="show-list__back-button"
        onClick={onBackButtonClick}
      />
      <h1 className="show-list__title">Top Rated {toCamel(type)}</h1>
      <div className="show-list__search">
        <input
          className="show-list__search__input"
          type="search"
          aria-label="Search for a show"
          placeholder={`Search for a ${
            type === "movies" ? "movie" : "TV series"
          }`}
          onChange={handleSearch}
        />
        <span className="show-list__search__icon">
          <i className="fas fa-search" /> Search
        </span>
      </div>
      <div className="show-list__shows-container">{renderShows()}</div>
    </div>
  );
}

ShowList.defaultProps = {
  type: "movies"
};

ShowList.propTypes = {
  type: PropTypes.string,
  onBackButtonClick: PropTypes.func,
  onDetailsShow: PropTypes.func
};

export default ShowList;
