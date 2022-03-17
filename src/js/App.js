// Import required libraries
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Import styles
import "./App.scss";

// Import routes
import Routes from "./routes/Routes";

// Import action creators
import { updateUserInfo } from "./redux/actions";

// Import utils
import { config } from "../js/config/config";

//Import custom components
import Loader from "./components/Loader/Loader";

function App(props) {
  let { user, updateUserInfo } = props;
  const history = useHistory();
  const [authResolved, setAuthResolved] = useState(false);

  // User authentication
  useEffect(() => {
    let url =
      config.api.authUrl + window.location.host + window.location.pathname;
    fetch(url)
      .then((response) => {
        console.groupCollapsed("requesting", url);
        console.log("REPSONSE -> ", response);
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          let error = response.statusText;
          let errorCode = response.status;
          console.log("ERROR -> ", error);
          return {
            error,
            errorCode,
            status: {},
          };
        } else {
          let error = response.statusText;
          let errorCode = response.status;
          console.log("ERROR -> ", error);
          return {
            error,
            errorCode,
            status: {},
          };
        }
      })
      .then((json) => {
        console.log("JSON -> ", json);
        console.groupEnd();
        if (json.status.statusCode === "auth-200") {
          updateUserInfo({
            name: json.data.name,
            email: json.data.preferred_username,
            preferred_username: json.data.preferred_username,
            isAuth: true,
            error: null,
            status: null,
            role: json.data.role,
          });
          const location = window.location.pathname;
          setAuthResolved(true);
          history.push(location);
        }
        if (json.status.statusCode === "auth-403") {
          setAuthResolved(true);
          const location = "/unauthorized";
          history.push(location);
        }
        if (json.errorCode === 401) {
          updateUserInfo({
            name: "",
            email: "",
            preferred_username: "",
            isAuth: false,
            error: "UNAUTHORIZED",
          });
          window.localStorage.removeItem(config.localStorageReduxStoreName);
          setAuthResolved(true);
        } else if (json.errorCode) {
          updateUserInfo({ error: json.error, errorCode: json.errorCode });
          setAuthResolved(true);
        }
      });
    // eslint-disable-next-line
  }, []);

  // Unauthorized user
  useEffect(() => {
    if (user.error === "UNAUTHORIZED") {
      updateUserInfo({ isAuth: false });
      window.localStorage.removeItem(config.localStorageReduxStoreName);
      window.location.href =
        config.api.signInUrl + window.location.host + window.location.pathname;
    }
    // eslint-disable-next-line
  }, [user.error]);

  return (
    <>
      {authResolved ? (
        <Routes />
      ) : (
        <Loader
          fullPage={true}
          message={config.messages.authenticatingUserMessage}
        />
      )}
    </>
  );
}

App.propTypes = {
  match: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = { updateUserInfo };

export default connect(mapStateToProps, mapDispatchToProps)(App);
