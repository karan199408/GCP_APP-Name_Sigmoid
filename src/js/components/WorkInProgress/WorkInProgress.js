// Import required libraries
import React, { useEffect, useState } from "react";

// Import data
import comingSoon from "../../../assets/images/work_in_progress.svg";
import { config } from "../../config/config";

//Import styles
import "./WorkInProgress.scss";

function WorkInProgress() {
  const [jsonData, setJsonData] = useState("Demo Data api calling...");
  const [masterData, setMasterData] = useState("Master data api calling...");
  useEffect(() => {
    let url = config.api.demoAppUrl;
    fetch(url)
      .then((response) => {
        console.groupCollapsed("requesting", url);
        console.log("REPSONSE -> ", response);
        if (response.status === 200) {
          return response.json();
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
        if (json.status.statusCode === "200") {
          setJsonData(json.data);
        } else {
          console.log("json.status.statusCode", json.status.statusCode);
        }
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let url = config.api.masterAppUrl;
    fetch(url)
      .then((response) => {
        console.groupCollapsed("requesting", url);
        console.log("REPSONSE -> ", response);
        if (response.status === 200) {
          return response.json();
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
        if (json.status.statusCode === "200") {
          setMasterData(json.data);
        } else {
          console.log("json.status.statusCode", json.status.statusCode);
        }
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="work-in-progress-container">
      <div className="wip-image">
        <img src={comingSoon} alt="Work in progress" />
      </div>
      <div>
        <p className="work-in-progress-text">
          {config.messages.workInProgressMessage}
        </p>
        <p className="work-in-progress-text">{jsonData}</p>
        <p className="work-in-progress-text">{masterData}</p>
      </div>
    </div>
  );
}

export default WorkInProgress;
