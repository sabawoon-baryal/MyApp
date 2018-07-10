import React, { Component } from "react";
import {
  Alert,
  Platform,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";
import { ListItem, List } from "react-native-elements";
import { styles } from "../Style";

const list = [
  {
    title: "Edit Story",
    icon: "edit"
  },
  {
    title: "Delete Story",
    icon: "delete"
  }
];

export default class EmergencyRequest_Slider_Layout extends Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false
    };
  }
  handleThePress = () => {
    this.props.toProfile();
  };

  setModalVisible = visibile => {
    this.setState({ isModalVisible: visibile });
  };

  handleModalBtns = item => {
    if (item.title == "Edit Story") {
      this.setState({ isModalVisible: false });
      this.props.toEditStory(
        this.props.storyDescription,
        this.props.storyImage,
        this.props.storyImageHeight,
        this.props.storyDate
      );
    } else if (item.title == "Delete Story") {
      this.setState({ isModalVisible: false });
      Alert.alert(
        "Delete Story",
        "Are you sure to delete this story",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed")
          },
          { text: "OK", onPress: () => this.props.toDeleteStory(this.props.id) }
        ],
        { cancelable: false }
      );
    }
  };

  call = () => {
    this.props.call();
  };
  sendMessage = () => {
    this.props.sendMessage();
  };

  toEmergencyRequestPublicView = () => {
    console.log("hsdjcnskdznck");
    this.props.goToEmergencyRequestPublicView();
  };

  render() {
    return (
      <View style={styles.EmergencyReqListItemContainer}>
        <View style={styles.EmergencyRequestListItemHeader}>
          <TouchableWithoutFeedback onPress={this.handleThePress}>
            <Image
              source={require("../../../assets/images/profile.jpg")}
              style={styles.profileImage}
              // get the image from store
            />
          </TouchableWithoutFeedback>
          <View style={{ flexGrow: 1 }}>
            <TouchableWithoutFeedback onPress={this.handleThePress}>
              <View>
                <Text style={{ color: "black" }}>
                  {`${this.props.userFirstName}`} {`${this.props.userLastName}`}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <Text style={{ color: "gray" }}>
              {this.props.reqDate}
            </Text>
          </View>

          <View
            style={{
              paddingLeft: 180
            }}
          >
            {/* this.props.userID == this.props.userIDInStory */}
            {true
              ? <Icon
                  name="ellipsis-h"
                  size={20}
                  onPress={() => this.setModalVisible(true)}
                />
              : <View />}
          </View>
        </View>

        {/* blood image */}

        <TouchableOpacity onPress={this.toEmergencyRequestPublicView}>
          <View style={styles.bloodPic}>
            <Text style={styles.bloodPicText}>
              {this.props.bloodType}
            </Text>
          </View>
        </TouchableOpacity>

        {/* call & message */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <TouchableOpacity
            style={styles.emerReqSendMessageButton}
            onPress={this.call}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon name="phone" size={17} color="gray" />
              <Text
                style={{ color: "gray", marginHorizontal: 10, fontSize: 12 }}
              >
                Call
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.emerReqSendMessageButton}
            onPress={this.sendMessage}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon name="envelope" size={17} color="gray" />
              <Text
                style={{ color: "gray", marginHorizontal: 10, fontSize: 12 }}
              >
                Message
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          {this.state.isModalVisible
            ? <Modal
                onBackdropPress={() => {
                  this.setState({ isModalVisible: false });
                }}
                onBackButtonPress={() => {
                  this.setState({ isModalVisible: false });
                }}
                isVisible={this.state.isModalVisible}
              >
                <View style={{ borderRadius: 10 }}>
                  <List>
                    {list.map((item, i) =>
                      <ListItem
                        chevron={false}
                        key={i}
                        title={item.title}
                        leftIcon={{ name: item.icon }}
                        onPress={() => this.handleModalBtns(item)}
                      />
                    )}
                  </List>
                </View>
              </Modal>
            : <View />}
        </View>
      </View>
    );
  }
}
