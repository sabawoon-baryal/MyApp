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
      <View style={styles.container}>
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

          <Text style={styles.profileName}>Haidar Khan</Text>
          <Text style={{ color: "gray" }}>O+</Text>
        </View>
      </View>
    );
  }
}
