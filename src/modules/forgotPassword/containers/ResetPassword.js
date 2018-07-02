import React, { Component } from "react";
import { Button } from "react-native";
import ResetPassword_Layout from "../layout/ResetPassword_Layout";
import { connect } from "react-redux";

class ResetPassword extends Component {
  //   getPayloadFromLayout = async payload => {
  //     if (payload.valid) {
  //       let result = await this.props.ForgotPasswordRequest(payload.email);
  //       if (result) {
  //         this.props.navigation.navigate("ForgotPasswordEmailVerificationRoute", {
  //           verificationCode: this.props.verificationCode
  //         });
  //       } else return;
  //     } else return;
  //   };
  render() {
    return <ResetPassword_Layout />;
  }
}

mapStateToProps = state => {
  return {};
};
mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
