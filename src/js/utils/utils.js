// Import required libraies
import moment from "moment";

// Import data
import breadcrumbsMapping from "../../assets/data/breadcrumbsMapping.json";

// Get current year
export const getCurrentYear = () => moment().year();

// Split path/ url to make breadcrumb
export const splitUrlToBreadcrumbData = (url) => {
  let routes = url.replace(/^\//g, "").replace(/\/$/g, "").split("/");
  let data = routes.map((name, index) => ({
    name,
    label: breadcrumbsMapping[name] ? breadcrumbsMapping[name] : name,
    path: routes
      .slice(0, index + 1)
      .reduce((finalPath, route) => finalPath + route + "/", "/"),
  }));
  return data;
};
