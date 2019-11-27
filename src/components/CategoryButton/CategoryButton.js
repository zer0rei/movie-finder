import React from "react";
import PropTypes from "prop-types";
import "./CategoryButton.css";

function CategoryButton({ className, title, subtitle, icon, onClick }) {
  return (
    <div className={`category-button ${className}`}>
      <button className="category-button__button" onClick={onClick}>
        <img
          className="category-button__icon"
          src={icon}
          alt="category button icon"
        />
        <h3 className="category-button__title">{title}</h3>
      </button>
      <h5 className="category-button__subtitle">{subtitle}</h5>
    </div>
  );
}

CategoryButton.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

export default CategoryButton;
