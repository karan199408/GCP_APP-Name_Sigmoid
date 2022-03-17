/*-------------------------Actual APIs-------------------------*/
const backendApi = "/api";
const demoAppUrl = `${backendApi}/demoApp`;
const masterAppUrl = `/master/demoApp`;

const messages = {
  workInProgressMessage: "Your content here.",
};

const hardCoded = { homeLocation: "/home" };

const api = {
  demoAppUrl,
  masterAppUrl,
};

const config = {
  footerText: "Powered by RBOne",
  api,
  messages,
  hardCoded,
};

export { config };
