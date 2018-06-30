import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { ActivityIndicator } from "react-native";

import { styles } from "../styles";
import Dialog from "react-native-dialog";

export default class SignUp_Final_Layout extends Component {
  constructor() {
    super();
    this.state = {
      dialogVisible: false,
      enterdCode: "",
      emptyCode: true,
      lengthMatch: false
    };
  }

  handleVerify = () => {
    this.props.passVerificationCode(this.state.enterdCode);
  };

  goBackToSignIn = () => {
    this.props.toSignIn();
  };
  render() {
    let indicator = this.props.signUp_verifying;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Last step</Text>
        <Text style={styles.termsText}>
          We've sent you a verification email
        </Text>
        <Text style={styles.termsText}>Please verify your email</Text>
        <TextInput
          placeholder="Verification code"
          keyboardType="phone-pad"
          style={styles.textInput}
          onChangeText={code => {
            if (code !== "" && code.length == 6) {
              console.log(code);
              this.setState({
                enterdCode: code,
                emptyCode: false,
                lengthMatch: true
              });
            }
            if (code == "" || code.length < 6) {
              console.log("else", code);
              this.setState({
                enterdCode: code,
                emptyCode: true,
                lengthMatch: false
              });
            }
          }}
        />

        {this.state.lengthMatch
          ? <TouchableOpacity
              style={styles.loginBtn}
              onPress={this.handleVerify}
            >
              <View />
              <Text style={styles.loginBtnText}>Verify</Text>
              <View>
                {indicator ? <ActivityIndicator color="#fff" /> : <View />}
              </View>
            </TouchableOpacity>
          : <TouchableOpacity style={styles.disabledJoinWeena} disabled={true}>
              <Text style={styles.disabledJoinWeenaBtnText}>Verify</Text>
            </TouchableOpacity>}
      </View>
    );
  }
}
