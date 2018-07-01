import React, { Component } from "react";
import { Button } from "react-native";
import ForgotPassword_Layout from "../layout/ForgotPassword_Layout";
import { forgotPasswordRequestThunk } from "../actions/ForgotPasswordRequestActions";
import { connect } from "react-redux";
import ForgotPasswordRequestReducer from "../reducers/ForgotPasswordRequestReducer";

class ForgotPasswordRequest extends Component {
  goBackToSignIn = () => {
    this.props.navigation.popToTop();
  };
  getPayloadFromLayout = async payload => {
    if (payload.valid) {
      let result = await this.props.ForgotPasswordRequest(payload.email);
      if (result) {
        this.props.navigation.navigate("ForgotPasswordResetRoute");
      }
    } else return;
  };
  render() {
    return (
      <ForgotPassword_Layout
        toSignIn={this.goBackToSignIn}
        getPayload={this.getPayloadFromLayout}
        requestLoading={this.props.requesting}
        forgotPasswordRequestError={this.props.forgotPasswordRequestError}
      />
    );
  }
}

mapStateToProps = state => {
  return {
    requesting: state.ForgotPasswordRequestReducer.requesting,
    verified_email: state.ForgotPasswordRequestReducer.verified_email,
    forgotPasswordRequestError: state.ForgotPasswordRequestReducer.error
  };
};
mapDispatchToProps = dispatch => {
  return {
    ForgotPasswordRequest: email => dispatch(forgotPasswordRequestThunk(email))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ForgotPasswordRequest
);
