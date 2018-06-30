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

export default class UserPasswordView extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      empty_first_name: true,
      last_name: "",
      empty_last_name: true
    };
  }

  handleThePress = () => {
    this.props.passFullName(this.state.first_name, this.state.last_name);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What's Your Name?</Text>
        <View style={styles.twoTextInputsSideBySide}>
          <TextInput
            onChangeText={first_name => {
              if (first_name == "") {
                this.setState({
                  first_name: first_name,
                  empty_first_name: true
                });
              }
              if (first_name !== "") {
                this.setState({
                  first_name: first_name,
                  empty_first_name: false
                });
              }
            }}
            placeholder="First name"
            style={styles.nameTextInput}
            underlineColorAndroid="rgba(0,0,0,0)"
          />

          <TextInput
            onChangeText={last_name => {
              if (last_name == "") {
                this.setState({
                  last_name: last_name,
                  empty_last_name: true
                });
              }
              if (last_name !== "") {
                this.setState({
                  last_name: last_name,
                  empty_last_name: false
                });
              }
            }}
            placeholder="Last name"
            style={styles.nameTextInput}
            underlineColorAndroid="rgba(0,0,0,0)"
          />
        </View>

        {this.state.empty_first_name || this.state.empty_last_name
          ? <TouchableOpacity style={styles.disabledJoinWeena} disabled={true}>
              <View />
              <Text style={styles.disabledJoinWeenaBtnText}>Continue</Text>
            </TouchableOpacity>
          : <TouchableOpacity
              style={styles.joinWeena}
              onPress={this.handleThePress.bind(this)}
            >
              <View />
              <Text style={styles.joinWeenaBtnText}>Continue</Text>
            </TouchableOpacity>}
      </View>
    );
  }
}
