import React, { Component } from "react";
import EmailVerification_Layout from "../layout/EmailVerification_Layout";
import { NetInfo } from "react-native";
import { styles } from "../Styles";
import { connect } from "react-redux";
import ForgotPasswordRequestReducer from "../reducers/ForgotPasswordRequestReducer";
import { forgotPasswordRequestThunk } from "../actions/ForgotPasswordRequestActions";
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

  resendVerificationcode = () => {
    // let payload = this.props.payload;
    // let email = payload.email;
    this.props.ForgotPasswordRequest(this.props.payload);
  };

  render() {
    // get the verification code from ForgotPasswordRequest, or from store
    // let verificationCode = this.props.navigation.getParam("verificationCode");

    return (
      <EmailVerification_Layout
        verificationCode={this.props.verificationCode}
        toResetPassword={this.goToResetPassword}
        resendVerificationcode={this.resendVerificationcode}
        requesting={this.props.requesting}
        request_complete={this.props.request_complete}
        resendVerificationError={this.props.resendVerificationError}
        isResendFlag={this.props.isResendFlag}
      />
    );
  }
}

mapStateToProps = state => {
  return {
    payload: state.ForgotPasswordRequestReducer.payload,
    requesting: state.ForgotPasswordRequestReducer.requesting,
    request_complete: state.ForgotPasswordRequestReducer.request_complete,
    resendVerificationError: state.ForgotPasswordRequestReducer.error,
    isResendFlag: state.ForgotPasswordRequestReducer.isResendFlag
  };
};

mapDispatchToProps = dispatch => {
  return {
    ForgotPasswordRequest: email =>
      dispatch(forgotPasswordRequestThunk(email, true))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EmailVErification);
