import React, { useState } from "react";
import "./App.css";
import Header from "../Header";
import Home from "../Home";
import ShowList from "../ShowList";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = page => () => setCurrentPage(page);

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
        {currentPage === "movies" && <ShowList />}
        {currentPage === "series" && <ShowList />}
      </div>
    </div>
  );
}

export default App;
