import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { styles } from "../styles";

export default class SignUp_Welcome_Layout extends Component {
  handleThePress = () => {
    this.props.toSingUpContact();
  };
  goBackToSignIn = () => {
    this.props.toSignIn();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Join Weena.af</Text>
        <Text style={styles.subTitle}>Donate Blood, Save Life</Text>
        <Text style={styles.termsText}>
          By signing up, you agree to Weena.af Terms & Conditions
        </Text>
        <TouchableOpacity
          style={styles.joinWeena}
          onPress={this.handleThePress.bind(this)}
        >
          <Text style={styles.loginBtnText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.haveAccount}
          onPress={this.goBackToSignIn.bind(this)}
        >
          <Text style={styles.alreadyBtn}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
