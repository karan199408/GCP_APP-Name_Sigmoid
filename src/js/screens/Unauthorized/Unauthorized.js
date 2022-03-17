// Import required liraries
import React from "react";

// Import styles
import "./Unauthorized.scss";

// Import Custom Component
import LayoutNone from "../../layouts/LayoutNone/LayoutNone";

// Import data/utils
import { config } from "../../config/config";

function Unauthorized() {
  return (
    <LayoutNone>
      <div className="screen-container">
        <div className="title-container">
          <i className="material-icons-outlined screen-icon">
            sentiment_very_dissatisfied
          </i>
          <h1 className="screen-title">
            {config.messages.unauthorizedMessage}
          </h1>
        </div>
      </div>
    </LayoutNone>
  );
}

Unauthorized.propTypes = {};

export default Unauthorized;
