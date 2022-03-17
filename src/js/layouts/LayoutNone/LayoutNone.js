//Import required libraies
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Import Custom Component

//Import Custom Hooks

//Import utils/data

//Import styles

function LayoutNone(props) {
  const { user, children } = props;
  return <div className={`${user.theme} page`}>{children}</div>;
}

LayoutNone.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(LayoutNone);
