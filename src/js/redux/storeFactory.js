import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/index";
import { stateData } from "./stateData";

const initialState = stateData;

const store = applyMiddleware(logger)(createStore)(rootReducer, initialState);

export default store;
