// Import required libraies
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Import Custom Component
import LayoutNone from "../../layouts/LayoutNone/LayoutNone";

// Import Context

// Import utils/data
import { config } from "../../config/config";

// Import data
import logo from "../../../assets/images/rb-logo.png";
import loginImage4 from "../../../assets/images/undraw_data.svg";

//Import styles
import "./Login.scss";

function Login() {
  return (
    <LayoutNone>
      <div className="logo-container">
        <img className="rb-logo" src={logo} alt="RB Logo" />
      </div>
      <div className="login-container">
        <div className="login-container-left">
          <div className="login-carousel-container">
            <div>
              <img alt="login" className="carousel-image" src={loginImage4} />
            </div>
            <div className="carousel-texts-container">
              <p className="reckitt-text">{config.hardCoded.appName}</p>
              <p className="carousel-primary-text">
                {config.messages.loginPrimaryText}
              </p>
            </div>
          </div>
        </div>
        <div className="login-container-right">
          <div className="login-page-sign-in-container">
            <div className="login-welcome-container">
              <p className="login-welcome-text">Hi, Welcome back</p>
              <p className="login-info-text">
                Sign-in with your Reckitt credentials to experience the portal
              </p>
            </div>
            <div className="sign-in-button-container">
              <a href={config.api.signInUrl}>
                <button className="sign-in-button">Sign In</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </LayoutNone>
  );
}

Login.propTypes = {};

export default Login;
