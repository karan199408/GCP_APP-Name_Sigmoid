// Import required libraries
import React from "react";
import { Link } from "react-router-dom";

// Import data/utils
import logo from "../../../assets/images/rb-logo.png";

function RbLogo() {
  const headerText = "App Name";
  const headerRedirectUrl = "/home/tab1";

  return (
    <div className="top-left-nav">
      <Link to={headerRedirectUrl} className="rb-logo-container">
        <img className="rb-logo" src={logo} alt="RB Logo" />
      </Link>
      <Link to={headerRedirectUrl} className="rb-logo-text">
        {headerText}
      </Link>
    </div>
  );
}

export default RbLogo;
