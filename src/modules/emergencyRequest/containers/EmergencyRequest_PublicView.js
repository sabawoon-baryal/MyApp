import React, { Component } from "react";
import {
  TouchableOpacity,
  NetInfo,
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
  Linking,
  Platform,
  StatusBar,
  Button,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { connect } from "react-redux";
import { List, ListItem, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import call from "react-native-phone-call";
const url =
  Platform.OS === "android" ? "sms:1-078-555-1212" : "sms:1-078-555-1212";

import EmergencyRequest_PublicView_Layout from "../layout/EmergencyRequest_PublicView_Layout";

import { styles } from "../Style";

const args = {
  number: "0782334239", // String value with the number to call
  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
};

class EmergencyRequest_PublicView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // header

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerStyle: {
        backgroundColor: "red",
        paddingRight: 10
      },
      headerTitle: "Emergency request",
      headerTintColor: "white",
      headerRight: (
        <TouchableOpacity
          style={styles.clearButton}
          onPress={params.handleEdit}
        >
          <Text style={{ paddingLeft: 10, color: "white" }}>Edit</Text>
        </TouchableOpacity>
      )
    };
  };

  handleEditButton = () => {
    this.props.navigation.navigate("AddEmergencyRequest");
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handleEdit: this.handleEditButton
    });
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.setState({ netConnectivity: true });
      } else {
        this.setState({ netConnectivity: false });
      }
    });
  }

  call = () => {
    call(args)
      .then(() => {
        console.log("call success");
      })
      .catch(() => {
        console.log("call failed");
      });
  };

  sendMessage = () => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Unsupported url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error("An error occurred", err));
  };

  render() {
    let showPublicView = this.props.navigation.getParam("publicview");
    if (true) {
      return (
        <View>
          <StatusBar barStyle="light-content" backgroundColor="red" />
          <EmergencyRequest_PublicView_Layout
            call={this.call}
            sendMessage={this.sendMessage}
            showPublicView={showPublicView}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Icon name="cloud" size={50} color="black" />
          <Text>You're in offline mode.</Text>
          <Text>Please check your connection.</Text>
        </View>
      );
    }
  }
}
mapStateToProps = state => {
  return {};
};
mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(
  EmergencyRequest_PublicView
);
