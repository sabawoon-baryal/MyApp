import React, { Component } from "react";
import EmailVerification_Layout from "../layout/EmailVerification_Layout";
import { NetInfo } from "react-native";
import { styles } from "../Styles";
import { connect } from "react-redux";
import ForgotPasswordRequestReducer from "../reducers/ForgotPasswordRequestReducer";
import Snackbar from "react-native-android-snackbar";

class EmailVErification extends Component {
  constructor() {
    super();
    this.state = {
      netConnectivity: true
    };
  }
  goToResetPassword = () => {
    if (this.state.netConnectivity) {
      this.props.navigation.navigate("ResetPasswordRoute");
    } else Snackbar.show("No internet connection");
  };

  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.setState({ netConnectivity: true });
      } else {
        this.setState({ netConnectivity: false });
      }
    });
  }

  render() {
    // get the verification code from ForgotPasswordRequest, or from store
    verificationCode = this.props.navigation.getParam("verificationCode");

    return (
      <EmailVerification_Layout
        verificationCode={this.props.verificationCode}
        toResetPassword={this.goToResetPassword}
      />
    );
  }
}

mapStateToProps = state => {
  return {
    verificationCode:
      state.ForgotPasswordRequestReducer.payload.verificationCode
  };
};

mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(EmailVErification);
