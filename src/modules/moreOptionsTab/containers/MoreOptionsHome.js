import React, { Component } from "react";
import { Button, View, Text, Image } from "react-native";
import MoreOptionsHome_Layout from "../layout/MoreOptionsHome_Layout";

export default class MoreOptionsHome extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "red"
    },
    title: "More",
    headerTintColor: "white"
  };

  goToEditProfile = () => {
    this.props.navigation.navigate("Main");
  };

  goToProfile = () => {
    this.props.navigation.navigate("UserProfileRoute");
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <MoreOptionsHome_Layout
          toEditProfile={this.goToEditProfile}
          toProfile={this.goToProfile}
        />
      </View>
    );
  }
}
