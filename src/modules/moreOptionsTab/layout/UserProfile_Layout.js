import React, { Component } from "react";
import {
  AsyncStorage,
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
import { ListItem, List } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../Style";
// import ImagePicker from "react-native-image-picker";
import ImagePicker from "react-native-image-crop-picker";
import Modal from "react-native-modal";

export default class UserProfile_Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      avatarHeight: null,
      image: this.props.storedProfile,
      imagePickerBtnPressed: false,
      isModalVisible: false,
      openCamera: false,
      openPhotoLibrary: false
    };
  }

  selectPhotoTapped() {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: true,
      compressImageMaxWidth: 640,
      compressImageMaxHeight: 480,
      compressImageQuality: 0.5,
      includeExif: true
    })
      .then(image => {
        console.log("image: ", image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime
          }
        });
        this.props.passNewProfilePicture(image);
      })
      .catch(error => {
        console.log("profile image picker error: ", error);
      });
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={require("../../../assets/images/background-grey-1.jpg")}
          style={styles.profileBackground}
        >
          <View style={styles.profileBackgroundContainer}>
            <View style={styles.userProfile}>
              <TouchableWithoutFeedback
                onPress={this.selectPhotoTapped.bind(this)}
                style={styles.profilePickerBtn}
              >
                {this.state.image === null
                  ? <View style={styles.profilePicture}>
                      <Icon name="camera" size={25} />
                    </View>
                  : <Image
                      source={this.state.image}
                      style={styles.profilePictureWithImage}
                    />}
              </TouchableWithoutFeedback>

              <Text style={styles.profileName}>Sabawoon Baryal</Text>
            </View>
          </View>
        </ImageBackground>

        {/* <Modal
          onBackdropPress={() => {
            this.setState({ isModalVisible: false });
          }}
          onBackButtonPress={() => {
            this.setState({ isModalVisible: false });
          }}
          isVisible={this.state.isModalVisible}
        >
          <View style={{ borderRadius: 10, backgroundColor: "red" }}>
            <TouchableOpacity>
              <Text>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  openPhotoLibrary: true,
                  isModalVisible: false
                })}
            >
              <Text>Library</Text>
            </TouchableOpacity>
          </View>
        </Modal> */}
      </View>
    );
  }
}
