import React, { Component } from "react";
import { NetInfo } from "react-native";
import ResetPassword_Layout from "../layout/ResetPassword_Layout";
import { connect } from "react-redux";
import { resetPasswordThunk } from "../actions/ResetPasswordActions";
import ResetPasswordReducer from "../reducers/ResetPasswordReducer";
import Snackbar from "react-native-android-snackbar";

class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      netConnectivity: true
    };
  }

  getPayloadFromLayout = async payload => {
    if (this.state.netConnectivity) {
      let result = await this.props.resetPassword(payload);
      if (result) {
        // redirect it to login page to login with new password
        this.props.navigation.navigate("SignInRoute");
      } else return;
    } else {
      Snackbar.show("No internet connection");
    }
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
      <ResetPassword_Layout
        passPassword={this.getPayloadFromLayout}
        resetting={this.props.resetting}
        resetPasswordError={this.props.resetPasswordError}
      />
    );
  }
}

mapStateToProps = state => {
  return {
    resetting: state.ResetPasswordReducer.resetting,
    resetPasswordError: state.ResetPasswordReducer.resetPasswordError
  };
};
mapDispatchToProps = dispatch => {
  return {
    resetPassword: payload => dispatch(resetPasswordThunk(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
