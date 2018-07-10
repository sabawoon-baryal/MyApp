import React, { Component } from "react";
import {
  Button,
  Platform,
  TouchableOpacity,
  View,
  Text,
  Image
} from "react-native";
import { connect } from "react-redux";
import AddNewStory_Layout from "../layout/AddNewStory_Layout";
import AddStoryHeaderButton from "./AddStoryHeaderButton";
import { addStoryButton } from "../actions/AddNewStoryActions";
import { styles } from "../Style";

class AddNewStory extends Component {
  constructor() {
    super();
    this.state = {
      imageName: ""
    };
  }
  goToProfile = () => {
    this.props.navigation.navigate("Main");
  };

  handlePostButton = () => {
    let gotDate = this.child.sendData();
    console.log("got data: ", gotDate);
    this.props.onDisablePostBtn(true);

    // if (gotDate.editStory == true) {
    //   if (gotDate.image !== null && gotDate.text !== "") {
    //     RNFetchBlob.fetch(
    //       "PATCH",
    //       `http://${localhost}:8000/api/stories/`,
    //       {
    //         "Content-Type": "multipart/form-data"
    //       },
    //       [
    //         {
    //           name: "image",
    //           filename: gotDate.image.fileName,
    //           type: gotDate.image.type,
    //           data: RNFetchBlob.wrap(gotDate.image.path)
    //         },
    //         {
    //           name: "description",
    //           data: gotDate.text
    //         }
    //       ]
    //     )
    //       .then(resp => {
    //         console.log("my response: ", resp);
    //         this.props.navigation.navigate("UserStories");
    //         // console.log("resp: ", resp);
    //         // console.log("text: ", resp.text());
    //       })
    //       .catch(err => {
    //         console.log("my error: ", err);
    //       });
    //   } else {
    //     if (gotDate.image == null) {
    //       console.log("secons ///////////");
    //       RNFetchBlob.fetch(
    //         "PATCH",
    //         `http://${localhost}:8000/api/stories/` +
    //           `${this.props.editingStoryID}`,
    //         {
    //           "Content-Type": "application/json"
    //         },
    //         [
    //           {
    //             name: "description",
    //             data: gotDate.text
    //           }
    //         ]
    //       )
    //         .then(resp => {
    //           this.props.navigation.navigate("UserStories");
    //           // console.log("resp: ", resp);
    //           // console.log("text: ", resp.text());
    //         })
    //         .catch(err => {
    //           console.log("my error: ", err);
    //         });
    //     } else if (gotDate.text == "") {
    //       RNFetchBlob.fetch(
    //         "PATCH",
    //         `http://${localhost}:8000/api/stories/` +
    //           `${this.props.editingStoryID}`,
    //         {
    //           "Content-Type": "multipart/form-data"
    //         },
    //         [
    //           {
    //             name: "image",
    //             filename: gotDate.image.fileName,
    //             type: gotDate.image.type,
    //             data: RNFetchBlob.wrap(gotDate.image.path)
    //           }
    //         ]
    //       )
    //         .then(resp => {
    //           this.props.navigation.navigate("UserStories");
    //           // console.log("resp: ", resp);
    //           // console.log("text: ", resp.text());
    //         })
    //         .catch(err => {
    //           console.log("my error: ", err);
    //         });
    //     }
    //   }
    // }

    // adding new story //////////////////////////////////////// :

    // if (gotDate.editStory == false) {
    //   if (gotDate.image !== null && gotDate.text !== "") {
    //     RNFetchBlob.fetch(
    //       "POST",
    //       `http://${localhost}:8000/api/upload-image`,
    //       {
    //         "Content-Type": "multipart/form-data"
    //       },
    //       [
    //         {
    //           name: "file",
    //           filename: gotDate.image.fileName,
    //           type: gotDate.image.type,
    //           data: RNFetchBlob.wrap(gotDate.image.path)
    //         }
    //       ]
    //     )
    //       .then(response => {
    //         console.log("image uploading: ", response);
    //         if (response.status == 200) return response.json();
    //         else throw response;
    //         return null;
    //       })
    //       .then(responseJson => {
    //         console.log("image uploading: ", responseJson);
    //         fetch(`http://${localhost}:8000/api/stories`, {
    //           method: "POST",
    //           headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //           },
    //           body: JSON.stringify({
    //             description: gotDate.text,
    //             user_id: 10,
    //             file: responseJson.success.imageName
    //           })
    //         });
    //       })
    //       .catch(err => {
    //         console.log("my error: ", err);
    //       });
    //   } else {
    //     if (gotDate.image == null) {
    //       RNFetchBlob.fetch(
    //         "POST",
    //         `http://${localhost}:8000/api/stories`,
    //         {
    //           Authorization: "Bearer access-token",
    //           otherHeader: "foo",
    //           "Content-Type": "multipart/form-data"
    //         },
    //         [
    //           {
    //             name: "description",
    //             data: gotDate.text
    //           },
    //           {
    //             name: "user_id",
    //             data: "10"
    //           }
    //         ]
    //       )
    //         .then(resp => {
    //           this.props.navigation.navigate("UserStories");
    //           // console.log("resp: ", resp);
    //           // console.log("text: ", resp.text());
    //         })
    //         .catch(err => {
    //           console.log("my error: ", err);
    //         });
    //     } else if (gotDate.text == "") {
    //       RNFetchBlob.fetch(
    //         "POST",
    //         `http://${localhost}:8000/api/stories`,
    //         {
    //           Authorization: "Bearer access-token",
    //           otherHeader: "foo",
    //           "Content-Type": "multipart/form-data"
    //         },
    //         [
    //           {
    //             name: "image",
    //             filename: gotDate.image.fileName,
    //             type: gotDate.image.type,
    //             data: RNFetchBlob.wrap(gotDate.image.path)
    //           },
    //           {
    //             name: "user_id",
    //             data: "10"
    //           }
    //         ]
    //       )
    //         .then(resp => {
    //           this.props.navigation.navigate("UserStories");
    //           // console.log("resp: ", resp);
    //           // console.log("text: ", resp.text());
    //         })
    //         .catch(err => {
    //           console.log("my error: ", err);
    //         });
    //     }
    //   }
    // }
  };

  handelCancelBtn = () => {
    this.props.navigation.goBack();
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handlePost: this.handlePostButton,
      handleCancel: this.handelCancelBtn
    });
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    const headerTitle = navigation.getParam("headerTitle");
    return {
      title: headerTitle,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "red"
      },
      headerRight: <AddStoryHeaderButton post={params.handlePost} />,
      headerLeft: (
        <TouchableOpacity
          style={styles.clearButton}
          onPress={params.handleCancel}
        >
          <Text style={{ paddingLeft: 10, color: "white" }}>Cancel</Text>
        </TouchableOpacity>
      )
    };
  };

  getDisablePostBtnCondition = disable => {
    this.props.onDisablePostBtn(disable);
  };

  render() {
    let story = this.props.navigation.getParam("story");
    if (story !== null || story !== undefined)
      return (
        <View>
          <AddNewStory_Layout
            editingStoryText={story.storyText}
            editingStoryImage={story.storyImage}
            editingStoryImageHeight={story.storyImageHeight}
            editingStory={story.editingStory}
            toProfile={this.goToProfile}
            ref={child => {
              this.child = child;
            }}
            disablePostBtn={this.getDisablePostBtnCondition}
          />
        </View>
      );
    else return <AddNewStory_Layout />;
  }
}

mapStateToProps = state => {
  return {
    disable: state.AddStoryButtonReducer.disablePostBtn
    // onPressedPostBtn: state.AddStoryButtonReducer.onPressedPostBtn
  };
};
mapDispatchToProps = dispatch => {
  return {
    onDisablePostBtn: disable => dispatch(addStoryButton(disable))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewStory);
