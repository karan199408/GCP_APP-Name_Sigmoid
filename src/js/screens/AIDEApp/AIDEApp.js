//Import required libraies
import React from "react";
import { Redirect } from "react-router-dom";

//Import Custom Component
import WorkInProgress from "../../components/WorkInProgress/WorkInProgress";
import LayoutTopSideBottom from "../../layouts/LayoutTopSideBottom/LayoutTopSideBottom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

//Import tabs

// Import action creators

//Import Custom Hooks

//Import utils/data

function AIDEApp(props) {
  const { match } = props;
  
  return (
    <>
      {match.params.tab ? (
        <LayoutTopSideBottom match={match}>
          <Breadcrumbs match={match} />
          <WorkInProgress />
        </LayoutTopSideBottom>
      ) : match.url === "/home/" ? (
        <Redirect to={`${match.url}tab1`} />
      ) : (
        <Redirect to={`${match.url}/tab1`} />
      )}
    </>
  );
}

export default AIDEApp;
