import React, { Component } from "react";
import {
  Platform,
  ScrollView,
  StatusBar,
  Button,
  View,
  NetInfo,
  ActivityIndicator,
  Text,
  Image,
  Dimensions,
  FlatList
} from "react-native";
import { styles } from "../Style";
import { connect } from "react-redux";
import OfflineMode_Layout from "../../../sharedComponents/OfflineMode_Layout";
import LatestStories_Layout from "../../homeTab/layout/LatestStories_Layout";

class ProfileSelectedStory extends Component {
  constructor() {
    super();

    this.state = {
      refreshOffline: false
    };
  }

  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: "red"
      },
      headerTintColor: "rgb(255, 255, 255)"
    };
  };

  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.setState({ netConnectivity: true });
      } else {
        this.setState({ netConnectivity: false });
      }
    });
  }

  handleRefreshOfflineMode = refresh => {
    this.setState({ refreshOffline: refresh });
  };

  editStory = (storyText, storyImage, storyImageHeight, storyDate) => {
    let story = {
      storyText: storyText,
      storyImage: storyImage,
      storyImageHeight: storyImageHeight,
      storyDate: storyDate,
      editingStory: true
    };
    console.log("story text: ", storyText);

    // this.props.onEditStoryRequest(id, text, image, imageHeight);

    this.props.navigation.navigate("AddNewStoryRoute", {
      story: story,
      headerTitle: "Update story"
    });
  };

  deleteStory(myStoryID) {
    const localhost = Platform.OS == "android" ? "172.30.10.42" : "localhost";
    fetch(`http://${localhost}:8000/api/stories/` + `${myStoryID}`, {
      method: "DELETE"
    })
      .then(response => this.props.navigation.navigate("UserStories"))
      .catch(error => console.log("this is my error"));
  }

  render() {
    let story = this.props.navigation.getParam("story");
    console.log("selected story: ", story);
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgb(255,255,255)"
        }}
      >
        {this.state.netConnectivity
          ? <ScrollView>
              <View>
                <LatestStories_Layout
                  toEditStory={this.editStory}
                  toDeleteStory={this.deleteStory}
                  storyImage={story.item.url}
                  storyImageHeight={story.item.height}
                  storyDescription={story.item.text}
                  userFirstName="Haidar"
                  userLastName="Khan"
                  storyDate={story.item.date}
                  // userIDInStory={this.props.story.user_id}
                  // userID={this.props.userID}
                />
              </View>
            </ScrollView>
          : <OfflineMode_Layout
              refreshOfflineMode={this.handleRefreshOfflineMode}
            />}
      </View>
    );
  }
}

mapStateToProps = state => {
  return {
    // story: state.PassSelectedUserStory.story,
    // stories: state.storiesReducer.stories,
    // userFirstName: state.LoginReducer.userFirstName,
    // userLastName: state.LoginReducer.userLastName,
    // userID: state.LoginReducer.userID
  };
};
mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ProfileSelectedStory
);
