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
      showMessage: false
    };
  }
  _onFulfill = code => {
    // code == this.state.verificationCode
    if (code == "123456") {
      this.setState({ validVerificationCode: true });
      this.props.toResetPassword();
    } else {
      this.setState({ validVerificationCode: false });
    }
  };

  render() {
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

        <TouchableOpacity
          style={styles.clearButton}
          onPress={this.goBackToSignIn}
        >
          <Text style={styles.clearButtonText}>Resend verification code</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
