/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import { TopNavigator } from "./src/navigation/navigators/index";
import SplashScreen from "react-native-splash-screen";

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <TopNavigator />
      </Provider>
    );
  }
}
