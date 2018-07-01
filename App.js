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

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TopNavigator />
      </Provider>
    );
  }
}
