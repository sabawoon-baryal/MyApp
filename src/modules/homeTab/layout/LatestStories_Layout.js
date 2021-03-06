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
import { styles } from "../Styles";

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

export default class LatestStories_Layout extends Component {
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

  render() {
    // let imageHeight;
    // if (
    //   this.props.storyImageHeight == null ||
    //   this.props.storyImageHeight == undefined
    // ) {
    //   imageHeight = 0;
    // } else {
    //   imageHeight = this.props.storyImageHeight;
    // }

    return (
      <View style={styles.ListItemContainer}>
        <View style={styles.ListItemHeader}>
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
              {this.props.storyDate}
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

        {this.props.storyImage !== null
          ? <Image
              source={this.props.storyImage}
              style={{ height: 400, width: "100%" }}
            />
          : <View />}
        {this.props.storyDescription !== null
          ? <Text style={styles.storyDescription}>
              {this.props.storyDescription}
            </Text>
          : <View />}

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

        {/* search modal */}
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
                        key={i}
                        title={item.title}
                        leftIcon={{ name: item.icon }}
                        onPress={() => this.handleModalBtns(item)}
                        containerStyle={{
                          borderBottomStartRadius: 45,
                          borderBottomWidth: 0.3,
                          borderColor: "gray"
                        }}
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
