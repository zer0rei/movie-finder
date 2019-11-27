import React from "react";
import PropTypes from "prop-types";
import "./Home.css";
import CategoryButton from "../CategoryButton";
import movieIcon from "../../assets/movie-clapper.svg";
import seriesIcon from "../../assets/television.svg";

function Home({ onMoviesClick, onSeriesClick }) {
  return (
    <div className="home">
      <h1 className="home__title">Top Rated Titles</h1>
      <div className="home__categories">
        <CategoryButton
          title="Movies"
          icon={movieIcon}
          subtitle="Top rated Movies"
          onClick={onMoviesClick}
        />
        <CategoryButton
          className="home__categories__series-button"
          title="Series"
          icon={seriesIcon}
          subtitle="Top rated Series"
          onClick={onSeriesClick}
        />
      </div>
    </div>
  );
}

Home.propTypes = {
  onMoviesClick: PropTypes.func,
  onSeriesClick: PropTypes.func
};

export default Home;
