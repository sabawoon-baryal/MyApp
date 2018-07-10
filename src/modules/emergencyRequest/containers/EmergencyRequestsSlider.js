import React, { Component } from "react";
import {
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
import { EMERGENCY_REQUESTS } from "../../../api/constants";

import EmergencyRequest_Slider_Layout from "../layout/EmergencyRequest_Slider_Layout";

import { styles } from "../Style";
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

class EmergencyRequestSlider extends Component {
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

  componentDidMount() {
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

    fetch(EMERGENCY_REQUESTS)
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

  _renderItem = ({ item }) => {
    console.log("item: ", item);
    let imageHeight;
    if (item.image !== null) {
      imageHeight = item.height;
    } else {
      imageHeight = 0;
    }
    return <EmergencyRequest_Slider_Layout />;
  };

  render() {
    if (true) {
      return (
        <View>
          <StatusBar barStyle="light-content" backgroundColor="red" />
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}

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
