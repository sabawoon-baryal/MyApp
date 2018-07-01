import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import { styles } from "../styles";

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class UserContactView extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emptyEmail: true,
      validEmail: true
    };
  }

  handleThePress = () => {
    let valid;
    if (reg.test(this.state.email) === true) {
      valid = true;
    } else {
      this.setState({ validEmail: false });
      valid = false;
    }

    if (valid) this.props.passEmail(this.state.email, valid);
    else return;
  };

  render() {
    let indicator = this.props.loading;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What's Your Email Address</Text>
        <TextInput
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
              <Text style={styles.disabledLoginBtnText}>Continue</Text>
            </TouchableOpacity>
          : <TouchableOpacity
              style={styles.loginBtn}
              onPress={this.handleThePress.bind(this)}
            >
              <Text style={styles.loginBtnText}>Continue</Text>
            </TouchableOpacity>}

        <View style={{ marginTop: 10 }}>
          {this.state.validEmail
            ? <Text />
            : <Text>Please enter a valid email</Text>}
        </View>
      </View>
    );
  }
}
