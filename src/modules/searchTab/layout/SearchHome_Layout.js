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
import { styles } from "../Style";

export default class SearchHome_Layout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is Search</Text>
      </View>
    );
  }
}
