import React from "react";
import PropTypes from "prop-types";
import "./ShowItem.css";
import { toCamel } from "../../utils";

function ShowItem({
  className,
  image,
  index,
  title,
  type,
  releaseYear,
  onMoreInfoClick
}) {
  return (
    <div className={`show-item ${className}`}>
      <img className="show-item__image" src={image} alt="Poster" />
      <span className="show-item__title">
        {index}. {title}
      </span>
      <span className="show-item__type">{toCamel(type)}</span>
      <span className="show-item__year">{releaseYear}</span>
      <button className="show-item__info-button" onClick={onMoreInfoClick}>
        <i className="fas fa-info-circle" />
        More Info
      </button>
    </div>
  );
}

ShowItem.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
  releaseYear: PropTypes.number,
  onMoreInfoClick: PropTypes.func
};

export default ShowItem;
