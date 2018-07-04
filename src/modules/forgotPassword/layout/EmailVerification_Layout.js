import React, { Component } from "react";
import {
  ScrollView,
  Button,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert
} from "react-native";
import CodeInput from "react-native-confirmation-code-input";
import { styles } from "../Styles";

export default class EmailVerification_Layout extends Component {
  // get the verification code from ForgotPasswordRequest

  constructor(props) {
    super(props);
    this.state = {
      verificationCode: this.props.verificationCode,
      validVerificationCode: true,
      timer: 0
    };
  }
  _onFulfill = code => {
    // code == this.state.verificationCode
    let timer = setTimeout(() => {}, 1000);
    console.log("timer: ", timer);
    if (code == "123456") {
      this.setState({ validVerificationCode: true });
      this.props.toResetPassword();
    } else {
      this.setState({ validVerificationCode: false });
    }
  };

  handleResend = () => {
    this.setState({ timer: 10 });
    this.props.resendVerificationcode();
    setTimeout(() => {
      this.setState({ timer: 0 });
    }, 10000);
  };

  render() {
    let indicator = this.props.requesting;
    let messageIndicator = this.props.request_complete;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter the 6 digit code</Text>
        <View style={styles.codeInputVerification}>
          <CodeInput
            ref="codeInputRef1"
            className={"border-box"}
            codeLength={6}
            space={5}
            activeColor="black"
            inactiveColor="gray"
            size={40}
            keyboardType="numeric"
            inputPosition="center"
            compareWithCode={this.state.verificationCode}
            onFulfill={code => this._onFulfill(code)}
          />
        </View>
        {this.state.validVerificationCode
          ? <Text />
          : <Text>verification code doesn't match</Text>}

        {this.state.timer > 0
          ? <TouchableOpacity style={styles.disabledLoginBtn} disabled={true}>
              <View />
              <Text style={styles.disabledLoginBtnText}>
                Resend verification code
              </Text>
            </TouchableOpacity>
          : <TouchableOpacity
              style={styles.loginBtn}
              onPress={this.handleResend}
            >
              <View />
              <Text style={styles.loginBtnText}>Resend verification code</Text>
              <View />
            </TouchableOpacity>}

        {indicator ? <ActivityIndicator color="#000" /> : <View />}
        {messageIndicator
          ? <Text>Verification code was sent to your email</Text>
          : <Text />}
      </View>
    );
  }
}
