import React, { Component } from "react";
import SignUp_Contact_Layout from "../layout/SignUp_Contact_Layout";
import { connect } from "react-redux";
import { onSignUpEmail } from "../actions/SignUpActions";

class SignUpContact extends Component {
  getEmailFromLayout = email => {
    this.props.signUpEmail(email);
    this.props.navigation.navigate("SignUpFullNameRoute");
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: { backgroundColor: "red" },
      headerTintColor: "white"
    };
  };

  render() {
    return <SignUp_Contact_Layout passEmail={this.getEmailFromLayout} />;
  }
}

mapStateToProps = state => {
  return {};
};
mapDispatchToProps = dispatch => {
  return {
    signUpEmail: email => dispatch(onSignUpEmail(email))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContact);
