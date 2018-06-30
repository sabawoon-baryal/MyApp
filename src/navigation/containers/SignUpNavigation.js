import React, { Component } from "react";
import signUpRoutesNavigator from "../navigators/SignUpRoutes";
import { connect } from "react-redux";
import {
  reduxifyNavigator,
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

const appSignUpNavigator = reduxifyNavigator(signUpRoutesNavigator);
const mapStateToProps = state => ({
  state: state.appTopNavigatorReducer
});

const SignUpNavigator = connect(mapStateToProps)(appSignUpNavigator);
export { SignUpNavigator };
