import React from "react";
import PropTypes from "prop-types";

function CategoryButton({ title, onClick }) {
  return <button onClick={onClick}>{title}</button>;
}

CategoryButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
};

export default CategoryButton;
