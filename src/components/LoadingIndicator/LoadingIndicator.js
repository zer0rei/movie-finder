import React from "react";
import PropTypes from "prop-types";
import "./LoadingIndicator.css";

function LoadingIndicator({ className }) {
  return (
    <div className={`spinner ${className}`} data-testid="loading">
      <div className="double-bounce1" />
      <div className="double-bounce2" />
    </div>
  );
}

LoadingIndicator.propTypes = {
  className: PropTypes.string
};

export default LoadingIndicator;
