// Import required libraries
import React from "react";
import { connect } from "react-redux";

// Import styles
import "./Footer.scss";

// Import config
import { config } from "../../config/config";

//Import utils
import { getCurrentYear } from "../../utils/utils";

function Footer(props) {
  const { user } = props;

  return (
    <footer className={user.theme}>
      <p className="footer-text">
        {`Copyright ©${getCurrentYear()}. `}
        {config.footerText}
      </p>
    </footer>
  );
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(Footer);
