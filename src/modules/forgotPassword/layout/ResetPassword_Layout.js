import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import { styles } from "../Styles";

export default class ResetPassword_Layout extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      empty_password: true,
      confirm_password: "",
      empty_confirm_password: true,
      matchBoth: true,
      lengthMatch: true
    };
  }

  handleThePress = () => {
    //  true is for matching both passwords
    if (this.state.password == this.state.confirm_password) {
      this.setState({ matchBoth: true });
      if (
        this.state.password.length >= 6 &&
        this.state.confirm_password.length >= 6
      ) {
        this.setState({ lengthMatch: true });
        let payload = {
          password: this.state.password,
          confirm_password: this.state.confirm_password
        };
        this.props.passPassword(payload);
      } else {
        this.setState({ lengthMatch: false });
      }
    } else {
      this.setState({ matchBoth: false });
    }
    if (
      this.state.password.length >= 6 &&
      this.state.confirm_password.length >= 6
    ) {
      this.setState({ lengthMatch: true });
    } else {
      this.setState({ lengthMatch: false });
    }
  };

  render() {
    let indicator = this.props.resetting;
    let resetPasswordError = this.props.resetPasswordError;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create a New Password</Text>
        <View style={styles.twoTextInputsSideBySide}>
          <TextInput
            onChangeText={password => {
              if (password == "") {
                this.setState({ password: password, empty_password: true });
              }
              if (password !== "") {
                this.setState({ password: password, empty_password: false });
              }
            }}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.nameTextInput}
            underlineColorAndroid="rgba(0,0,0,0)"
          />

          <TextInput
            onChangeText={confirm_password => {
              if (confirm_password == "") {
                this.setState({
                  confirm_password: confirm_password,
                  empty_confirm_password: true
                });
              }
              if (confirm_password !== "") {
                this.setState({
                  confirm_password: confirm_password,
                  empty_confirm_password: false
                });
              }
            }}
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={styles.nameTextInput}
            underlineColorAndroid="rgba(0,0,0,0)"
          />
        </View>

        {this.state.empty_password || this.state.empty_confirm_password
          ? <TouchableOpacity style={styles.disabledLoginBtn} disabled={true}>
              <View />
              <Text style={styles.disabledLoginBtnText}>Continue</Text>
            </TouchableOpacity>
          : <TouchableOpacity
              style={styles.loginBtn}
              onPress={this.handleThePress.bind(this)}
            >
              <View />
              <Text style={styles.loginBtnText}>Continue</Text>
              <View>
                {indicator && this.state.matchBoth
                  ? <ActivityIndicator color="#fff" />
                  : <View />}
              </View>
            </TouchableOpacity>}

        <View style={{ marginVertical: 10 }}>
          {this.state.matchBoth
            ? <Text />
            : <Text>Password does not match</Text>}
        </View>

        <View style={{ marginVertical: 10 }}>
          {this.state.lengthMatch
            ? <Text />
            : <Text>Password must be atleast 6 characters</Text>}
        </View>

        <View>
          <Text>
            {resetPasswordError}
          </Text>
        </View>
      </View>
    );
  }
}
