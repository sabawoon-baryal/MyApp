import React, { Component } from "react";
import EmailVerification_Layout from "../layout/EmailVerification_Layout";
import { View } from "react-native";
import { styles } from "../Styles";
import { connect } from "react-redux";
import ForgotPasswordRequestReducer from "../reducers/ForgotPasswordRequestReducer";

class EmailVErification extends Component {
  goToResetPassword = () => {
    this.props.navigation.navigate("ResetPasswordRoute");
  };
  render() {
    // get the verification code from ForgotPasswordRequest
    verificationCode = this.props.navigation.getParam("verificationCode");

    return (
      <View style={styles.container}>
        <EmailVerification_Layout
          verificationCode={this.props.verificationCode}
          toResetPassword={this.goToResetPassword}
        />
      </View>
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
