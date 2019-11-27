import React from "react";
import PropTypes from "prop-types";
import "./BackButton.css";

function BackButton({ className, onClick }) {
  return (
    <button className={`back-button ${className}`} onClick={onClick}>
      <i className="fas fa-arrow-left" />
      Go Back
    </button>
  );
}

BackButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default BackButton;
