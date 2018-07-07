import React, { Component } from "react";
import { Button, NetInfo } from "react-native";
import ForgotPassword_Layout from "../layout/ForgotPassword_Layout";
import { forgotPasswordRequestThunk } from "../actions/ForgotPasswordRequestActions";
import { connect } from "react-redux";
import ForgotPasswordRequestReducer from "../reducers/ForgotPasswordRequestReducer";
import Snackbar from "react-native-android-snackbar";

class ForgotPasswordRequest extends Component {
  constructor() {
    super();
    this.state = {
      netConnectivity: true
    };
  }
  goBackToSignIn = () => {
    this.props.navigation.popToTop();
  };

  getPayloadFromLayout = async payload => {
    // you can send verification code like below while navigating, or through redux store
    if (payload.valid) {
      if (this.state.netConnectivity) {
        let result = await this.props.ForgotPasswordRequest(payload.email);
        if (result) {
          setTimeout(() => {}, 2000);
          this.props.navigation.navigate(
            "ForgotPasswordEmailVerificationRoute"
          );
        } else return;
      } else {
        Snackbar.show("No internet connection");
      }
    } else return;
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
    return (
      <ForgotPassword_Layout
        toSignIn={this.goBackToSignIn}
        getPayload={this.getPayloadFromLayout}
        requestLoading={this.props.requesting}
        request_complete={this.props.request_complete}
        forgotPasswordRequestError={this.props.forgotPasswordRequestError}
      />
    );
  }
}

mapStateToProps = state => {
  return {
    requesting: state.ForgotPasswordRequestReducer.requesting,
    request_complete: state.ForgotPasswordRequestReducer.request_complete,
    verified_email: state.ForgotPasswordRequestReducer.verified_email,
    forgotPasswordRequestError: state.ForgotPasswordRequestReducer.error
  };
};
mapDispatchToProps = dispatch => {
  return {
    ForgotPasswordRequest: email =>
      dispatch(forgotPasswordRequestThunk(email, false))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ForgotPasswordRequest
);
