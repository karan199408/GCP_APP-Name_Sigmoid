// Import required libraries
import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Import utils
import { config } from "../../js/config/config";

//Import custom components
import Loader from "../components/Loader/Loader";

function ProtectedRoute(props) {
  const { path, component: Component, user } = props;

  return user.isAuth ? (
    <Route
      path={path}
      render={(ownProps) => (
        <Component
          user={props.user}
          location={props.location}
          match={ownProps.match}
        />
      )}
    />
  ) : (
    <Loader
      fullPage={true}
      message={config.messages.authenticatingUserMessage}
    />
  );
}

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ProtectedRoute);
