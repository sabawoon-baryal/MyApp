import React, { Component } from "react";
import {
  Button,
  AsyncStorage,
  View,
  ScrollView,
  Text,
  Image,
  StatusBar
} from "react-native";
import UserProfile_Layout from "../layout/UserProfile_Layout";
import UserProfileOptions_Layout from "../layout/UserProfileOptions_Layout";
import { connect } from "react-redux";
import { profileUpdateThunk } from "../actions/ProfileChangeRequestActions";
import ProfileChangeReducer from "../reducers/ProfileChangeReducer";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      storedProfile: null
    };
  }
  static navigationOptions = () => {
    return {
      header: (
        <Image
          source={require("../../../assets/images/profile_background.jpg")}
          style={{ height: "0%" }}
        />
      )
    };
  };

  // navigation methods
  goToMyStories = () => {
    this.props.navigation.navigate("ProfileStoriesRoute");
  };
  goToMyEmergencyRequests = () => {
    this.props.navigation.navigate("EmergencyRequestsRoute");
  };
  goToMyEvents = () => {};
  goToMyEmail = () => {};
  goToMyPhone = () => {};
  goToMyAddress = () => {};
  goToMyBloodType = () => {};
  goToBirthDate = () => {};
  goToFacebook = () => {};

  // update profile
  getNewProfilePictureFromPicker = async profilePicture => {
    let result = await this.props.updateProfilePicture(profilePicture);
    if (result) {
      await AsyncStorage.setItem("USER_PROFILE", profilePicture);
    }
  };
  componentDidMount() {
    let storedProfile = AsyncStorage.getItem("USER_PROFILE");
    if (storedProfile !== null) {
      this.setState({ storedProfile: storedProfile });
    }
  }

  render() {
    return (
      <ScrollView stickyHeaderIndices={[0]}>
        <View>
          <UserProfile_Layout
            passNewProfilePicture={this.getNewProfilePictureFromPicker}
            profileChanged={this.props.profilePictureChanged}
            storedProfile={this.state.storedProfile}
            profile_updating={this.props.profile_updating}
            profilePictureError={this.props.profilePictureError}
          />
        </View>
        <UserProfileOptions_Layout
          toMyStories={this.goToMyStories}
          toMyEmergencyRequests={this.goToMyEmergencyRequests}
          toMyEvents={this.goToMyEvents}
          toMyEmail={this.goToMyEmail}
          toMyPhone={this.goToMyPhone}
          toMyAddress={this.goToMyAddress}
          toMyBloodType={this.goToMyBloodType}
          toBirthDate={this.goToBirthDate}
          toFacebook={this.goToFacebook}
        />
      </ScrollView>
    );
  }
}

mapStateToProps = state => {
  return {
    profile_updating: state.ProfileChangeReducer.profile_updating,
    profilePictureError: state.ProfileChangeReducer.profilePictureError
  };
};
mapDispatchToProps = dispatch => {
  return {
    updateProfilePicture: profilePicture =>
      dispatch(profileUpdateThunk(profilePicture))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
