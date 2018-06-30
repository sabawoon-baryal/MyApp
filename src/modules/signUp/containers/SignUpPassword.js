import React, { Component } from "react";
import SignUp_Password_Layout from "../layout/SignUp_Password_Layout";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";
import { signUpThunk } from "../actions/SignUpActions";
import SignUpReducer from "../reducers/SignUpReducer";

class SignUpPassword extends Component {
  getPasswordFromLayout = async (password, confirm_password) => {
    let payload = {
      password: password,
      confirm_password: confirm_password,
      email: this.props.email,
      first_name: this.props.first_name,
      last_name: this.props.last_name
    };
    await this.props.signUp(payload);
    this.props.navigation.navigate("SignUpFinalRoute");
  };
  render() {
    return (
      <SignUp_Password_Layout
        passPassword={this.getPasswordFromLayout}
        signUpLoading={this.props.signUpLoading}
      />
    );
  }
}

mapStateToProps = state => {
  return {
    email: state.SignUpReducer.email,
    first_name: state.SignUpReducer.first_name,
    last_name: state.SignUpReducer.last_name,
    signUpLoading: state.SignUpReducer.signingUp
  };
};
mapDispatchToProps = dispatch => {
  return {
    signUp: (password, confirm_password) =>
      dispatch(signUpThunk(password, confirm_password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPassword);
