// Import required liraries
import React from "react";
import { Link } from "react-router-dom";

// Import styles
import "./PageNotFound.scss";

// Import Custom Component
import LayoutNone from "../../layouts/LayoutNone/LayoutNone";

// Import data/utils
import { config } from "../../config/config";

function PageNotFound() {
  return (
    <LayoutNone>
      <div className="page-not-found-container">
        <div className="title-container">
          <i className="material-icons-outlined page-not-found-icon">
            sentiment_very_dissatisfied
          </i>
          <h1 className="page-not-found-title">Page Not Found</h1>
        </div>
        <Link to={config.hardCoded.homeLocation}>
          <button className="button">Go to Home</button>
        </Link>
      </div>
    </LayoutNone>
  );
}

PageNotFound.propTypes = {};

export default PageNotFound;
