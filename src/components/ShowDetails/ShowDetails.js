import React from "react";
import PropTypes from "prop-types";
import "./ShowDetails.css";
import BackButton from "../BackButton";
import { toCamel } from "../../utils";

function ShowDetails({
  onBackButtonClick,
  image,
  title,
  releaseYear,
  type,
  description
}) {
  return (
    <div className="show-details">
      <div className="show-details__header">
        <BackButton
          className="show-details__back-button"
          onClick={onBackButtonClick}
        />
      </div>
      <div className="show-details__body">
        <img className="show-details__body__image" src={image} alt="Poster" />
        <div className="show-details__body__info">
          <h2 className="show-details__body__info__title">
            {title} ({releaseYear})
          </h2>
          <p className="show-details__body__info__type">
            Type: {toCamel(type)}
          </p>
          <p className="show-details__body__info__description">{description}</p>
        </div>
      </div>
    </div>
  );
}

ShowDetails.propTypes = {
  onBackButtonClick: PropTypes.func,
  image: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  releaseYear: PropTypes.number
};

export default ShowDetails;
