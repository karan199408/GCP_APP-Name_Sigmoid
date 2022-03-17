// Import required libraries
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { v4 } from "uuid";

// Import styles
import "./Breadcrumbs.scss";

// Import Utils
import { splitUrlToBreadcrumbData } from "../../utils/utils";

function Breadcrumbs(props) {
  const { match, user } = props;

  let data = splitUrlToBreadcrumbData(match.url);

  return (
    <div className={`${user.theme} breadcrumb`}>
      {data.map((obj, index) => (
        <span key={v4()} className="breadcrumb-item-container">
          {index !== data.length - 1 ? (
            <>
              <Link className="breadcrumb-item disabled-style" to={obj.path}>
                {obj.label}
              </Link>
              <span>&nbsp;/&nbsp;</span>
            </>
          ) : (
            <span className="breadcrumb-item active">{obj.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(Breadcrumbs);
