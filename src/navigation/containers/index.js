import React, { Component } from "react";
import topNavigator from "../navigators/index";
import { connect } from "react-redux";
import {
  reduxifyNavigator,
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.appTopNavigatorReducer
);
const appTopNavigator = reduxifyNavigator(topNavigator, "root");
const mapStateToProps = state => ({
  state: state.appTopNavigatorReducer
});

const AppNavigator = connect(mapStateToProps)(appTopNavigator);
export { AppNavigator, middleware };
