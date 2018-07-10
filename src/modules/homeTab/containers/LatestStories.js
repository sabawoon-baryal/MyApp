import React, { Component } from "react";
import {
  Linking,
  TouchableOpacity,
  NetInfo,
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
  Platform,
  StatusBar,
  Button,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { connect } from "react-redux";
import { List, ListItem, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { LATEST_STORIES } from "../../../api/constants";
import call from "react-native-phone-call";

import LatestStories_Layout from "../layout/LatestStories_Layout";
import EmergencyRequest_Slider_Layout from "../../emergencyRequest/layout/EmergencyRequest_Slider_Layout";
import {
  fetchRequestStories,
  fetchSuccessStories,
  fetchFailureStories,
  editStoryRequest,
  editStorySuccess,
  editStoryFailure
} from "../actions/LatestStoriesActions";

import { styles } from "../Styles";
const stories = [
  {
    text: "Kauai Highlands",
    date: "Jul 6 at 11:20 AM",
    url: require("../../../assets/images/donating-blood.jpg"),
    imageType: "jpg",
    height: 734
  },
  {
    text: "Storm is coming",
    date: "Jul 1 at 12:21 PM",
    url: require("../../../assets/images/donating.png"),
    imageType: "png",
    height: 200
  },
  {
    text: "Venice - Grand Canal view from the Rialto Bridge",
    date: "Jun 18 at 7:49 PM",
    url: require("../../../assets/images/profile.jpg"),
    imageType: "jpg",
    height: 500
  },
  {
    text: "Mexican wolf",
    date: "Jun 15 at 8:49 AM",
    url: require("../../../assets/images/slider-3.jpg"),
    imageType: "jpg",
    height: 538
  },
  {
    text: "Mexican wolf",
    date: "Apr 30 at 3:15 PM",
    url: require("../../../assets/images/splash-screen.jpg"),
    imageType: "jpg",
    height: 975
  },
  {
    text: "Mexican wolf",
    date: "Apr 15 at 10:01 AM",
    url: require("../../../assets/images/blood_donation.jpg"),
    imageType: "jpg",
    height: 827
  },
  {
    text: "Mexican wolf",
    date: "Mar 15 at 5:11 AM",
    url: require("../../../assets/images/slider-3.jpg"),
    imageType: "jpg",
    height: 538
  },
  {
    text: "Mexican wolf",
    date: "Mar 14 at 2:49 PM",
    url: require("../../../assets/images/splash-screen.jpg"),
    imageType: "jpg",
    height: 975
  },
  {
    text: "Mexican wolf",
    date: "Feb 15 at 6:26 PM",
    url: require("../../../assets/images/donating.png"),
    imageType: "png",
    height: 200
  },
  {
    text: "Mexican wolf",
    date: "Feb 1 at 9:19 PM",
    url: require("../../../assets/images/blood_donation.jpg"),
    imageType: "jpg",
    height: 827
  },
  {
    text: "Mexican wolf",
    date: "Jan 30 at 11:13 AM",
    url: require("../../../assets/images/splash-screen.jpg"),
    imageType: "jpg",
    height: 975
  },
  {
    text: "Mexican wolf",
    date: "Jan 29 at 7:49 PM",
    url: require("../../../assets/images/donating-blood.jpg"),
    imageType: "jpg",
    height: 734
  },
  {
    text: "Mexican wolf",
    date: "Jan 19 at 7:49 PM",
    url: require("../../../assets/images/blood_donation.jpg"),
    imageType: "jpg",
    height: 827
  },
  {
    text:
      "Mexican wolf are the hardest wolfs around the world, this comes from the another country",
    url: null,
    date: "Jan 11 at 1:30 PM"
  },
  {
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    url: null,
    date: "Jan 7 at 10:16 AM"
  }
];
const ERequests = [
  {
    text: "Kauai Highlands Kauai Highlands Kauai Highlands",
    date: "Jul 6 at 11:20 AM",
    blood: "A+",
    phone: "0789564543",
    email: "haidarkhan@gmail.com",
    url: require("../../../assets/images/donating-blood.jpg"),
    imageType: "jpg",
    height: 734
  },
  {
    text: "Storm is coming",
    date: "Jul 1 at 12:21 PM",
    blood: "B+",
    phone: "0789564543",
    email: "haidarkhan@gmail.com",
    url: require("../../../assets/images/donating-blood.jpg"),
    imageType: "png",
    height: 200
  },
  {
    text: "Venice - Grand Canal view from the Rialto Bridge",
    date: "Jun 18 at 7:49 PM",
    blood: "O+",
    phone: "0789564543",
    email: "haidarkhan@gmail.com",
    url: require("../../../assets/images/donating-blood.jpg"),
    imageType: "jpg",
    height: 500
  },
  {
    text: "Mexican wolf",
    date: "Jun 15 at 8:49 AM",
    blood: "AB+",
    phone: "0789564543",
    email: "haidarkhan@gmail.com",
    url: require("../../../assets/images/donating-blood.jpg"),
    imageType: "jpg",
    height: 538
  },
  {
    text: "Mexican wolf",
    date: "Apr 30 at 3:15 PM",
    blood: "O-",
    phone: "0789564543",
    email: "haidarkhan@gmail.com",
    url: require("../../../assets/images/donating-blood.jpg"),
    imageType: "jpg",
    height: 975
  },
  {
    text: "Mexican wolf",
    date: "Apr 15 at 10:01 AM",
    url: require("../../../assets/images/donating-blood.jpg"),
    blood: "O+",
    phone: "0789564543",
    email: "haidarkhan@gmail.com",
    imageType: "jpg",
    height: 827
  },
  {
    text: "Mexican wolf",
    date: "Mar 15 at 5:11 AM",
    blood: "AB-",
    phone: "0789564543",
    email: "haidarkhan@gmail.com",
    url: require("../../../assets/images/donating-blood.jpg"),
    imageType: "jpg",
    height: 538
  },
  {
    text: "Mexican wolf",
    date: "Mar 14 at 2:49 PM",
    url: require("../../../assets/images/donating-blood.jpg"),
    blood: "B+",
    phone: "0789564543",
    email: "haidarkhan@gmail.com",
    imageType: "jpg",
    height: 975
  },
  {
    text: "Mexican wolf",
    date: "Feb 15 at 6:26 PM",
    blood: "A+",
    phone: "0789564543",
    email: "haidarkhan@gmail.com",
    url: require("../../../assets/images/donating-blood.jpg"),
    imageType: "png",
    height: 200
  },
  {
    text: "Mexican wolf",
    date: "Feb 1 at 9:19 PM",
    blood: "B-",
    phone: "0789564543",
    email: "haidarkhan@gmail.com",
    url: require("../../../assets/images/donating-blood.jpg"),
    imageType: "jpg",
    height: 827
  },
  {
    text: "Mexican wolf",
    date: "Jan 30 at 11:13 AM",
    blood: "O+",
    phone: "0789564543",
    email: "haidarkhan@gmail.com",
    url: require("../../../assets/images/donating-blood.jpg"),
    imageType: "jpg",
    height: 975
  },
  {
    text: "Mexican wolf",
    date: "Jan 29 at 7:49 PM",
    blood: "A-",
    phone: "0789564543",
    email: "haidarkhan@gmail.com",
    url: require("../../../assets/images/donating-blood.jpg"),
    imageType: "jpg",
    height: 734
  },
  {
    text: "Mexican wolf",
    date: "Jan 19 at 7:49 PM",
    blood: "A+",
    phone: "0789564543",
    email: "haidarkhan@gmail.com",
    url: require("../../../assets/images/donating-blood.jpg"),
    imageType: "jpg",
    height: 827
  }
];

const args = {
  number: "0782334239", // String value with the number to call
  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
};

const url =
  Platform.OS === "android" ? "sms:1-078-555-1212" : "sms:1-078-555-1212";

class LatestStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
      refreshing: false,
      netConnectivity: true
    };
  }

  // header

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerStyle: {
        backgroundColor: "red",
        color: "white",
        paddingRight: 10
      },
      headerTitle: (
        <SearchBar
          containerStyle={{
            width: "100%",
            backgroundColor: "red"
          }}
          inputStyle={{
            backgroundColor: "rgba(229, 50, 50, 0.7)",
            color: "white",
            borderRadius: 5
          }}
          clearIcon={{ color: "white" }}
          onPress={params.handleSearch}
          showLoading
          cancelButtonTitle="Cancel"
          icon={{ type: "font-awesome", name: "search", color: "white" }}
        />
      ),
      headerRight: (
        <TouchableOpacity onPress={params.handlemergencyRequest}>
          <Icon name="angellist" size={22} color="white" />
        </TouchableOpacity>
      )
    };
  };

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

  handleEmergencyRequestBtn = () => {
    this.props.navigation.navigate("EmergencyRequestRoute");
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handlemergencyRequest: this.handleEmergencyRequestBtn
    });
    this.makeRemoteRequest();
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.setState({ netConnectivity: true });
      } else {
        this.setState({ netConnectivity: false });
      }
    });
  }

  makeRemoteRequest = () => {
    this.setState({ loading: true });

    fetch(LATEST_STORIES)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.data,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleRefresh = () => {
    if (this.props.loading == false) {
      return;
    }
    this.setState({ refreshing: true }, () => {
      this.makeRemoteRequest();
    });
  };

  handleLoadMore = () => {
    this.makeRemoteRequest();
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          marginBottom: 10
        }}
      />
    );
  };

  goToEmergencyRequestPublicView = () => {
    this.props.navigation.navigate("EmergencyRequestRoute", {
      publicview: true
    });
  };

  EmergencyRequestrenderSeparator = () => {
    return (
      <View
        style={{
          margin: 10
        }}
      />
    );
  };

  _renderEmergencyRequestItem = ({ item }) => {
    console.log("item: ", item);
    return (
      <EmergencyRequest_Slider_Layout
        toProfile={this.goToProfile}
        reqDate={item.date}
        bloodType={item.blood}
        userFirstName="Haidar"
        userLastName="Khan"
        call={this.call}
        sendMessage={this.sendMessage}
        goToEmergencyRequestPublicView={this.goToEmergencyRequestPublicView}
      />
    );
  };

  // determining the current page we are in, in horizontal flat list
  onScrollEnd(e) {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    let pageNum = Math.floor(contentOffset.x / viewSize.width);
    console.log("scrolled to page ", pageNum);
  }

  renderHeader = () => {
    return (
      <View>
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            paddingHorizontal: 10,
            alignItems: "center",
            paddingVertical: 15,
            borderBottomWidth: 8,
            borderColor: "rgb(234, 236, 239)"
          }}
        >
          <Image
            source={require("../../../assets/images/profile.jpg")}
            style={styles.profileImage}
          />
          <Text onPress={this.goToAddStory} style={{ width: "100%" }}>
            Write your story
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 8,
            backgroundColor: "white",
            borderColor: "rgb(234, 236, 239)"
          }}
        >
          <View
            style={{ paddingHorizontal: 10, paddingTop: 20, paddingBottom: 5 }}
          >
            <Text>Blood Emergency Requests</Text>
          </View>
          {/* emergency requests */}
          <List
            containerStyle={{
              marginTop: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0
            }}
          >
            <FlatList
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              legacyImplementation={false}
              onMomentumScrollEnd={this.onScrollEnd}
              // ItemSeparatorComponent={this.EmergencyRequestrenderSeparator}
              horizontal={true}
              data={ERequests}
              renderItem={this._renderEmergencyRequestItem}
              keyExtractor={item => item.id}

              // scrollEnabled={false}
            />
          </List>
        </View>
      </View>
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;
    if (this.props.failure == null) {
      return null;
    }
    setInterval(() => {}, 5000);

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  goToProfile = () => {
    this.props.navigation.navigate("UserProfileRoute");
  };

  editStory = (text, image, imageHeight, storyDate) => {
    let story = {
      storyText: text,
      storyImage: image,
      storyImageHeight: imageHeight,
      editingStory: true
    };
    this.props.navigation.navigate("AddNewStory", { story: story });
  };

  deleteStory(myStoryID) {
    const localhost = Platform.OS == "android" ? "172.30.10.42" : "localhost";
    fetch(`http://${localhost}:8000/api/stories/` + `${myStoryID}`, {
      method: "DELETE"
    });
  }

  _renderItem = ({ item }) => {
    let imageHeight;
    if (item.image !== null) {
      imageHeight = item.height;
    } else {
      imageHeight = 0;
    }
    return (
      <LatestStories_Layout
        toEditStory={this.editStory}
        toDeleteStory={this.deleteStory}
        userFirstName="Haidar"
        userLastName="Khan"
        storyDate={item.storyDate}
        storyImage={item.url}
        storyImageHeight={imageHeight}
        storyDescription={item.text}
        toProfile={this.goToProfile}
      />
    );
  };

  // text: "Kauai Highlands Kauai Highlands Kauai Highlands",
  //   date: "Jul 6 at 11:20 AM",
  //   blood: "A+",
  //   phone: "0789564543",
  //   email: "haidarkhan@gmail.com",
  //   url: require("../../../assets/images/donating-blood.jpg"),
  //   imageType: "jpg",
  //   height: 734

  // emergency requests

  goToAddStory = () => {
    this.props.navigation.navigate("AddNewStoryRoute");
  };

  render() {
    console.log("iamge: ", this.state.data.propImage);
    if (true) {
      return (
        <View>
          <StatusBar barStyle="light-content" backgroundColor="red" />
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}

          {/* stories */}
          <List
            containerStyle={{
              marginTop: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0
            }}
          >
            <FlatList
              data={stories}
              renderItem={this._renderItem}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={this.renderSeparator}
              ListHeaderComponent={this.renderHeader}
              ListFooterComponent={this.renderFooter}
              onRefresh={this.handleRefresh}
              refreshing={this.state.refreshing}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={0}
              // scrollEnabled={false}
            />
          </List>
          {/* </ScrollView> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(LatestStories);
