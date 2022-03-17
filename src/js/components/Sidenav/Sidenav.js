// Import required libraries
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

// Import custom components

// Import styles
import "./Sidenav.scss";

// Import action creators
import { toggleSidenav } from "../../redux/actions";

// Import data & utils
import sidenavData from "../../../assets/data/sidenavData.json";

function Sidenav(props) {
  const { user, toggleSidenav } = props;

  const handleMenuClose = () => {
    toggleSidenav();
  };

  return (
    <>
      <aside
        className={`${user.theme} ${
          user.screen.isSidenavBarExpanded
            ? "sidenav-expanded"
            : "sidenav-collapsed"
        }`}
      >
        <nav>
          <div>
            {
              <div>
                <div
                  className="nav-item-menu disabled-style"
                  onClick={handleMenuClose}
                >
                  <i className={`material-icons-outlined nav-icon-menu`}>
                    reorder
                  </i>
                  <p
                    className={`${
                      user.screen.isSidenavBarExpanded ? "visible" : "hidden"
                    } nav-text-menu`}
                  >
                    Menu
                    {/* <b>Menu</b> */}
                  </p>
                </div>
                {sidenavData.map((obj) => (
                  <NavLink
                    to={`/home/${obj.id}`}
                    className={`nav-item disabled-style ${
                      obj.specialStyling ? "special" : ""
                    }`}
                    key={obj.id}
                    title={obj.name}
                  >
                    <i className={`${obj.materialUiClassName} nav-icon`}>
                      {obj.materialUiIconName}
                    </i>
                    <p
                      className={`${
                        user.screen.isSidenavBarExpanded ? "visible" : "hidden"
                      } nav-text`}
                    >
                      {obj.name}
                    </p>
                  </NavLink>
                ))}
              </div>
            }
          </div>
        </nav>
      </aside>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  allData: state.data,
});

const mapDispatchToProps = {
  toggleSidenav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidenav);
