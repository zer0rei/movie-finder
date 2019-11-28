import React, { useState } from "react";
import "./App.css";
import Header from "../Header";
import Home from "../Home";
import ShowList from "../ShowList";
import ShowDetails from "../ShowDetails";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentShowInDetailsPage, setCurrentShowInDetailsPage] = useState();

  const handlePageChange = page => () => setCurrentPage(page);

  const handleDetailsShow = type => show => {
    setCurrentPage(type === "series" ? "seriesDetails" : "movieDetails");
    setCurrentShowInDetailsPage(show);
  };

  return (
    <div className="container">
      <Header onLogoClick={handlePageChange("home")} />
      <div className="content">
        {currentPage === "home" && (
          <Home
            onMoviesClick={handlePageChange("movies")}
            onSeriesClick={handlePageChange("series")}
          />
        )}
        {["movies", "series"].includes(currentPage) && (
          <ShowList
            type={currentPage}
            onBackButtonClick={handlePageChange("home")}
            onDetailsShow={handleDetailsShow(currentPage)}
          />
        )}
        {["movieDetails", "seriesDetails"].includes(currentPage) && (
          <ShowDetails
            image={currentShowInDetailsPage.images["Poster Art"].url}
            title={currentShowInDetailsPage.title}
            type={currentShowInDetailsPage.programType}
            releaseYear={currentShowInDetailsPage.releaseYear}
            description={currentShowInDetailsPage.description}
            onBackButtonClick={handlePageChange(
              currentPage === "seriesDetails" ? "series" : "movies"
            )}
          />
        )}
      </div>
    </div>
  );
}

export default App;
