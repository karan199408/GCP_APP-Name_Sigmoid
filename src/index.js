// Import required libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Import custom components
import App from "./js/App";

// Import styles
import "./index.scss";

// Import store
import store from "./js/redux/storeFactory";

window.React = React;
window.store = store;

console.log("STORE -> ", store.getState());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
