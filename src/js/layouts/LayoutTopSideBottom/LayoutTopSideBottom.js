//Import required libraies
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Import Custom Component
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidenav from "../../components/Sidenav/Sidenav";

//Import Custom Hooks

//Import utils/data

//Import styles
import "./LayoutTopSideBottom.scss";

function LayoutTopSideBottom(props) {
  const { user, children, match } = props;
  return (
    <div className={`${user.theme} page`}>
      <Header match={match} />
      <section className="body">
        <Sidenav match={match} />
        <main
          className={`content ${
            user.screen.isSidenavBarExpanded
              ? "main-expanded"
              : "main-collapsed"
          }`}
        >
          {children}
        </main>
      </section>
      <Footer />
    </div>
  );
}

LayoutTopSideBottom.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(LayoutTopSideBottom);
