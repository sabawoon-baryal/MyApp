import React, { Component } from "react";
import {
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
import ProfileStory_Layout from "../layout/ProfileStory_Layout";
import { styles } from "../Style";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
// import { Reload } from "../../components/UserStories/Reload";
import OfflineMode_Layout from "../../../sharedComponents/OfflineMode_Layout";
import Snackbar from "react-native-android-snackbar";

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

class ProfileStories extends Component {
  constructor() {
    super();
    this.state = {
      reload: false,
      netConnectivity: true,
      loading: false,
      data: [],
      page: 1,
      error: null,
      refreshing: false,
      refreshOffline: false
    };
  }

  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: "red"
      },
      headerTitle: "My Stories",
      headerTintColor: "rgb(255, 255, 255)"
    };
  };

  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.makeRemoteRequest();
        this.setState({ netConnectivity: true });
      } else {
        this.setState({ netConnectivity: false });
      }
    });
  }

  makeRemoteRequest = () => {
    // this.props.onFecthUserStories();
    // if (this.state.refreshing) this.setState({ refreshing: false });
  };

  // usfull:

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.stories == null) {
  //     this.setState({ data: nextProps.stories });
  //   }
  // }

  showSelectedUserStory = story => {
    console.log("selected story in paretn: ", story);
    this.props.navigation.navigate("SelectedStoryRoute", { story: story });
  };

  _renderItem = item => {
    return (
      <ProfileStory_Layout
        story={item}
        toSelectedUserStory={this.showSelectedUserStory}
      />
    );
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      state => ({ page: this.state.page + 1 }),
      () => this.makeRemoteRequest()
    );
  };

  renderFooter = () => {
    if (!this.props.loading) return null;
    return <ActivityIndicator animating size="large" />;
  };

  makeReload = reRender => {
    this.makeRemoteRequest();
    this.setState({ reload: reRender });
  };

  handleRefreshOffilneMode = refresh => {
    this.makeRemoteRequest();
    this.setState({ refreshOffline: refresh });
  };

  render() {
    console.log("firt: ", stories);
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgb(255,255,255)"
        }}
      >
        <StatusBar barStyle="light-content" backgroundColor="red" />
        {this.state.netConnectivity
          ? <View style={{ backgroundColor: "rgb(255,255,255)" }}>
              {/* this.props.loading = false */}
              {false
                ? <View style={{ marginTop: 20 }}>
                    <ActivityIndicator color="rgb(23,45,65)" />
                  </View>
                : <View>
                    {/* this.props.fetched = true */}
                    {true
                      ? <View style={styles.MainContainer}>
                          <FlatList
                            data={stories}
                            renderItem={this._renderItem}
                            keyExtractor={item => item.id}
                            ListFooterComponent={this.renderFooter}
                            onRefresh={this.handleRefresh}
                            refreshing={this.state.refreshing}
                            onEndReached={this.handleLoadMore}
                            onEndReachedThreshold={0}
                            numColumns={3}
                          />
                        </View>
                      : <View />}
                  </View>}
            </View>
          : Snackbar.show("No internet connection")}
      </View>
    );
  }
}

mapStateToProps = state => {
  return {
    // stories: state.UserStoriesReducer.stories,
    // loading: state.UserStoriesReducer.fetching,
    // fetched: state.UserStoriesReducer.fetched
  };
};
mapDispatchToProps = dispatch => {
  return {
    // onFecthUserStories: () => dispatch(onGetUserStories()),
    // onPassSelectedStoryRequest: story =>
    //   dispatch(onPassSelectedUserStoryRequest(story)),
    // onPassSelectedStorySuccess: story =>
    //   dispatch(onPassSelectedUserStorySuccess(story)),
    // onPassSelectedStoryFailure: error =>
    //   dispatch(onPassSelectedUserStoryFailure(error))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileStories);
