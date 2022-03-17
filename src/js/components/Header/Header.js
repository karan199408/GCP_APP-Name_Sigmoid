// Import required libraries
import React from "react";
import { connect } from "react-redux";

// Import custom components
import RbLogo from "../RBLogo/RbLogo";
import UserInfo from "../UserInfo/UserInfo";

// Import styles
import "./Header.scss";

// Import config

function Header(props) {
  const { user, match } = props;

  return (
    <>
      <header className={user.theme}>
        <RbLogo match={match} />
        <section className="header-menu">
          <UserInfo {...props} />
        </section>
      </header>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
