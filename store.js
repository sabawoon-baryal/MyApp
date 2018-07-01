import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import appReducer from "./src/reducers/index";

export default createStore(
  appReducer,
  applyMiddleware(thunkMiddleware, logger)
);
