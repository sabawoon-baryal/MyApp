import React, { Component } from "react";
import {
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  SectionList,
  ScrollView,
  Text,
  Button,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../Style";
import { ListItem } from "react-native-elements";

const list1 = [
  {
    title: "Stories",
    icon: "street-view",
    iconColor: "blue"
  },
  {
    title: "Emergency Requests",
    icon: "signature",
    iconColor: "red"
  },
  {
    title: "Events",
    icon: "calendar",
    iconColor: "red"
  }
];

const list2 = [
  {
    title: "Email",
    icon: "envelope",
    iconColor: "rgb(237, 133, 7)"
  },
  {
    title: "Phone",
    icon: "phone-square",
    iconColor: "green"
  }
];

const list3 = [
  {
    title: "Address",
    icon: "compass",
    iconColor: "rgb(94, 155, 255)"
  },
  {
    title: "Blood Type",
    icon: "tint",
    iconColor: "red"
  },
  {
    title: "Birth Date",
    icon: "birthday-cake",
    iconColor: "rgb(239, 188, 86)"
  }
];

const list4 = [
  {
    title: "Facebook",
    icon: "facebook-square",
    iconColor: "rgb(59, 89, 152)"
  }
];

export default class UserProfileOptions_Layout extends Component {
  handleList1(item) {
    if (item.title == "Stories") {
      this.props.toMyStories();
    } else if (item.title == "Emergency Requests") {
      this.props.toMyEmergencyRequests();
    } else if (item.title == "Events") {
      this.props.toMyEvents();
    }
  }

  handleList2 = item => {
    if (item.title == "Email") {
      this.props.toMyEmail();
    } else if (item.title == "Phone") {
      this.props.toMyPhone();
    }
  };

  handleList3 = item => {
    if (item.title == "Address") {
      this.props.toMyAddress();
    } else if (item.title == "Blood Type") {
      this.props.toMyBloodType();
    } else if (item.title == "Birth Date") {
      this.props.toBirthDate();
    }
  };

  handleList4 = item => {
    if (item.title == "Facebook") {
      this.props.toFacebook();
    }
  };

  render() {
    return (
      <View style={{ flex: 1, paddingBottom: 30 }}>
        <View style={styles.profileOptions}>
          {list1.map((item, i) =>
            <TouchableOpacity>
              <ListItem
                containerStyle={{ borderBottomWidth: 0 }}
                key={i}
                title={item.title}
                leftIcon={
                  <View style={{ width: 40, alignItems: "center" }}>
                    <Icon name={item.icon} color={item.iconColor} size={22} />
                  </View>
                }
                style={{ paddingHorizontal: 20, borderWith: 0 }}
                onPress={() => this.handleList1(item)}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={{ height: 30, backgroundColor: "rgb(249, 248, 244)" }} />
        <View style={styles.profileOptions}>
          {list2.map((item, i) =>
            <ListItem
              containerStyle={{ borderBottomWidth: 0 }}
              key={i}
              title={item.title}
              leftIcon={
                <View style={{ width: 40, alignItems: "center" }}>
                  <Icon name={item.icon} color={item.iconColor} size={22} />
                </View>
              }
              style={{ paddingHorizontal: 20, borderWith: 0 }}
              onPress={() => this.handleList2(item)}
            />
          )}
        </View>

        <View style={{ height: 30, backgroundColor: "rgb(249, 248, 244)" }} />

        <View style={styles.profileOptions}>
          {list3.map((item, i) =>
            <ListItem
              containerStyle={{ borderBottomWidth: 0 }}
              key={i}
              title={item.title}
              leftIcon={
                <View style={{ width: 40, alignItems: "center" }}>
                  <Icon name={item.icon} color={item.iconColor} size={22} />
                </View>
              }
              style={{ paddingHorizontal: 20, borderWith: 0 }}
              onPress={() => this.handleList3(item)}
            />
          )}
        </View>

        <View style={{ height: 30, backgroundColor: "rgb(249, 248, 244)" }} />

        <View style={styles.profileOptions}>
          {list4.map((item, i) =>
            <ListItem
              containerStyle={{ borderBottomWidth: 0 }}
              key={i}
              title={item.title}
              leftIcon={
                <View style={{ width: 40, alignItems: "center" }}>
                  <Icon name={item.icon} color={item.iconColor} size={22} />
                </View>
              }
              style={{ paddingHorizontal: 20, borderWith: 0 }}
              onPress={() => this.handleList4(item)}
            />
          )}
        </View>
      </View>
    );
  }
}
