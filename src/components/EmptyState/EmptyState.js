import React from "react";
import PropTypes from "prop-types";
import "./EmptyState.css";

function EmptyState({ className, icon, message, description }) {
  return (
    <div className={`empty-state ${className}`}>
      {icon && <i className={`fas fa-${icon} empty-state__icon`} />}
      {message && <p className="empty-state__message">{message}</p>}
      {description && <p className="empty-state__description">{description}</p>}
    </div>
  );
}

EmptyState.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  message: PropTypes.string,
  description: PropTypes.string
};

export default EmptyState;
