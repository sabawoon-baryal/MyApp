import React, { Component } from "react";
import SignUp_FullName_Layout from "../layout/SignUp_FullName_Layout";
import { connect } from "react-redux";
import { onSignUpFullName } from "../actions/SignUpActions";

class SignUpFullName extends Component {
  getFullNameFromLayout = (first_name, last_name) => {
    this.props.signUpFullName(first_name, last_name);
    this.props.navigation.navigate("SignUpPasswordRoute");
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: { backgroundColor: "red" },
      headerTintColor: "white"
    };
  };

  render() {
    return <SignUp_FullName_Layout passFullName={this.getFullNameFromLayout} />;
  }
}

mapStateToProps = state => {
  return {};
};
mapDispatchToProps = dispatch => {
  return {
    signUpFullName: (first_name, last_name) =>
      dispatch(onSignUpFullName(first_name, last_name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFullName);
