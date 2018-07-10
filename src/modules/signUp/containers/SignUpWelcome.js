import React, { Component } from "react";
import { Image } from "react-native";
import SignUp_Welcome_Layout from "../layout/SignUp_Welcome_Layout";

export default class SignUpWelcome extends Component {
  goBackToSignIn = () => {
    this.props.navigation.popToTop();
  };

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Image
          source={require("../../../assets/images/profile_background.jpg")}
          style={{ height: "0%" }}
        />
      )
    };
  };

  goToSignUpContact = () => {
    this.props.navigation.navigate("SignUpContactRoute");
  };
  render() {
    return (
      <SignUp_Welcome_Layout
        toSignIn={this.goBackToSignIn}
        toSingUpContact={this.goToSignUpContact}
      />
    );
  }
}
