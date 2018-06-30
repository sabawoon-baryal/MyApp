import React, { Component } from "react";
import SignUp_Welcome_Layout from "../layout/SignUp_Welcome_Layout";

export default class SignUpWelcome extends Component {
  goBackToSignIn = () => {
    this.props.navigation.popToTop();
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
