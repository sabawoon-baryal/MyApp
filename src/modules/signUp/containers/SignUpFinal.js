import React, { Component } from "react";
import { connect } from "react-redux";
import SignUp_Final_Layout from "../layout/SignUp_Final_Layout";
import SignUpReducer from "../reducers/SignUpReducer";
import signUpVerifyThunk from "../actions/SignUpVerifiyActions";

class SignUpFinal extends Component {
  getVerificationCodeFromLayout = async verificationCode => {
    let verified = await this.props.signUpVerify(verificationCode);
    if (verified) {
      this.props.navigation.navigate("home");
    }
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: { backgroundColor: "red" },
      headerTintColor: "white"
    };
  };

  render() {
    return (
      <SignUp_Final_Layout
        passVerificationCode={this.getVerificationCodeFromLayout}
        signUp_verifying={this.props.signUp_Verifying}
      />
    );
  }
}

mapStateToProps = state => {
  return {
    signUp_complete: state.SignUpReducer.signedUp,
    signUp_Verifying: state.SignUpReducer.verifying,
    signUp_Verified: state.SignUpReducer.verified
  };
};
mapDispatchToProps = dispatch => {
  return {
    signUpVerify: verificationCode =>
      dispatch(signUpVerifyThunk(verificationCode))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFinal);
