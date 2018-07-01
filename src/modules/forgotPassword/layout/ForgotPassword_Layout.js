import React, { Component } from "react";
import {
  ScrollView,
  Button,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import { styles } from "../Styles";

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class ForgotPassword_Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emptyEmail: true,
      validEmail: true
    };
  }

  handleThePress = () => {
    let valid;
    if (reg.test(this.state.email) === true) {
      this.setState({ validEmail: true });
      valid = true;
    } else {
      this.setState({ validEmail: false });
      valid = false;
    }

    if (this.state.email == "") {
      this.setState({ emptyEmail: false });
    }
    let payload = {
      email: this.state.email,
      valid
    };
    this.props.getPayload(payload);
  };
  goBackToSignIn = () => {
    this.props.toSignIn();
  };

  render() {
    let indicator = this.props.requestLoading;
    let error = this.props.forgotPasswordRequestError;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter your email</Text>
        <TextInput
          ref={component => (this._emailTextInput = component)}
          onChangeText={email => {
            if (email == "") {
              this.setState({ email: email, emptyEmail: true });
            }
            if (email !== "") {
              this.setState({ email: email, emptyEmail: false });
            }
          }}
          placeholder="Email"
          keyboardType="email-address"
          style={styles.textInput}
          underlineColorAndroid="rgba(0,0,0,0)"
        />

        {this.state.emptyEmail
          ? <TouchableOpacity style={styles.disabledLoginBtn} disabled={true}>
              <View />
              <Text style={styles.disabledLoginBtnText}>
                Send verification code
              </Text>
            </TouchableOpacity>
          : <TouchableOpacity
              style={styles.loginBtn}
              onPress={this.handleThePress.bind(this)}
            >
              <View />
              <Text style={styles.loginBtnText}>Send verification code</Text>
              <View>
                {indicator && this.state.validEmail
                  ? <ActivityIndicator color="#fff" />
                  : <View />}
              </View>
            </TouchableOpacity>}

        <View>
          <Text>
            {error}
          </Text>
        </View>

        <View>
          {this.state.validEmail ? <Text /> : <Text>Invalid email</Text>}
        </View>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={this.goBackToSignIn}
        >
          <Text style={styles.clearButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
