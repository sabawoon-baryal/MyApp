import React, { Component } from "react";
import {
  Picker,
  Alert,
  Platform,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";
import { ListItem, List } from "react-native-elements";
import { styles } from "../Style";
import ModalDropdown from "react-native-modal-dropdown";

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

export default class EmergencyRequest_PublicView_Layout extends Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      blood: null,
      locationText: ""
    };
  }

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

  render() {
    return (
      <ScrollView stickyHeaderIndices={[0]}>
        <View
          style={{ zIndex: 78987, backgroundColor: "white", paddingBottom: 10 }}
        >
          <View style={styles.EmergencyListItemHeader}>
            <TouchableWithoutFeedback>
              <Image
                source={require("../../../assets/images/profile.jpg")}
                style={styles.emergencyProfileImage}
              />
            </TouchableWithoutFeedback>
            <View>
              <Text style={{ color: "black" }}>Haidar Khan</Text>
              <Text style={{ color: "gray" }}>OR+</Text>
              <Text style={{ color: "gray" }}>0782334239</Text>
              <Text style={{ color: "gray" }}>haidarkhan@gmail.com</Text>
            </View>
          </View>

          {/* call & message */}
          {this.props.showPublicView
            ? <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly"
                }}
              >
                <TouchableOpacity style={styles.callButton} onPress={this.call}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Icon name="phone" size={20} color="white" />
                    <Text style={{ color: "white", marginHorizontal: 10 }}>
                      Call
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sendMessageButton}
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
                    <Icon name="comment" size={20} color="white" />
                    <Text style={{ color: "white", marginHorizontal: 10 }}>
                      Message
                    </Text>
                  </View>
                </TouchableOpacity>
              </View> //  {/* end of call & message */}
            : <View />}
        </View>

        <View style={{ backgroundColor: "white" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              paddingVertical: 20,
              paddingLeft: 30
            }}
          >
            <Text style={{ color: "black" }}>Blood Type</Text>
            <Text style={{ color: "gray" }}>AB+</Text>
          </View>

          {/* Houres */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              paddingVertical: 20,
              paddingLeft: 30
            }}
          >
            <Text style={{ color: "black" }}>Required within</Text>
            <Text style={{ color: "gray" }}>24 hrs</Text>
          </View>

          {/* contact */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              paddingVertical: 20,
              paddingLeft: 30
            }}
          >
            <Text style={{ color: "black" }}>Contact</Text>
            <Text style={{ color: "gray" }}>0789234567, 0787544332</Text>
            <Text style={{ color: "gray" }}>email@gmail.com</Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              paddingVertical: 20,
              paddingLeft: 30
            }}
          >
            <Text style={{ color: "black" }}>Receiving Location</Text>
            <Text style={{ color: "gray" }}>
              Wazir mohammad akbar khan hospital, can write more detailes here
              about the location where the blood should be handed over
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              paddingVertical: 20,
              paddingLeft: 30
            }}
          >
            <Text style={{ color: "black" }}>Date</Text>
            <Text style={{ color: "gray" }}>Jul 7, 2018</Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              paddingVertical: 20,
              paddingLeft: 30
            }}
          >
            <Text style={{ color: "black" }}>Description</Text>
            <Text style={{ color: "gray" }}>
              this the best place to write more about this urgent request for
              blood
            </Text>
          </View>
        </View>

        {/* <View>
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
        </View> */}
      </ScrollView>
    );
  }
}
