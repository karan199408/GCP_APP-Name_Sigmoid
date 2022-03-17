/*-------------------------Actual APIs-------------------------*/
const backendApi = "/api";
const signInUrl = `/auth/sign_in?post_sign_in_url=https%3A%2F%2F`;
const signOutUrl = `/auth/sign_out`;
const authUrl = `${backendApi}/userinfo?post_sign_in_url=https%3A%2F%2F`;
const demoAppUrl = `${backendApi}/demoApp`;
const masterAppUrl = `/master/demoApp`;

const messages = {
  workInProgressMessage: "Your content here.",
  authenticatingUserMessage: "Authenticating user",
  loginPrimaryText: "Log in to find out more!",
  unauthorizedMessage:
    "You don't have access to this app. Please contact support for the access.",
};

const hardCoded = { homeLocation: "/home", appName: "Base App" };

const api = {
  authUrl,
  signInUrl,
  signOutUrl,
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
