import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import appReducer from "./src/reducers/index";
import { middleware } from "./src/navigation/containers/index";

export default createStore(
  appReducer,
  applyMiddleware(thunkMiddleware, logger, middleware)
);
