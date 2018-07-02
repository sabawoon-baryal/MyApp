import React, { Component } from "react";
import { connect } from "react-redux";
import { NetInfo, AsyncStorage } from "react-native";
import { SignIn_Layout } from "../layout/SignIn_Layout";
import { loginThunk } from "../actions/LoginActions";
import OfflineMode_Layout from "../../../sharedComponents/OfflineMode_Layout";
import LoginReducer from "../reducers/LoginReducer";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      signInError: "",
      netConnectivity: true,
      refreshOffline: false
    };
  }
  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.setState({ netConnectivity: true });
      } else {
        this.setState({ netConnectivity: false });
      }
    });
  }

  // send payload that contains email & password, validEmail condition to loginThunk

  refreshOfflineMode = () => {
    this.setState({ refreshOffline: true });
  };
  getPayloadFromLayout = async payload => {
    if (payload.valid) {
      this.props.login(payload);
      AsyncStorage.setItem("user_token", this.props.userPayload.access_token);
      this.props.navigation.navigate("Home");
    } else return;
  };

  goToSignUp = () => {
    this.props.navigation.navigate("SignUpRoutes");
  };
  goToForgotPassword = () => {
    this.props.navigation.navigate("ForgotPasswordRoutes");
  };

  render() {
    if (this.state.netConnectivity) {
      return (
        <SignIn_Layout
          loginLoading={this.props.loginLoading}
          loginError={this.props.loginError}
          getPayload={this.getPayloadFromLayout}
          signUp={this.goToSignUp}
          forgotPassword={this.goToForgotPassword}
        />
      );
    } else {
      return (
        <OfflineMode_Layout refreshOfflineMode={this.refreshOfflineMode} />
      );
    }
  }
}
mapStateToProps = state => {
  return {
    loginLoading: state.LoginReducer.loggingIn,
    loggedIn: state.LoginReducer.loggedIn,
    loginError: state.LoginReducer.loginError,
    userPayload: state.LoginReducer.userPayload
  };
};
mapDispatchToProps = dispatch => {
  return {
    login: payload => dispatch(loginThunk(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
