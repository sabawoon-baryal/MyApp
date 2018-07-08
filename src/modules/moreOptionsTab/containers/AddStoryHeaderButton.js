import React, { Component } from "react";
import { Button, View, Text, Image } from "react-native";
import { connect } from "react-redux";

import AddStoryHeaderButton_Layout from "../layout/AddStoryHeaderButton_Layout";
import { addStoryButtonPressed } from "../actions/AddNewStoryActions";

class AddStoryHeaderButton extends Component {
  pressPostBtn = () => {
    this.props.onPostBtn(true);
    this.props.post();
  };
  render() {
    return (
      <View>
        <AddStoryHeaderButton_Layout
          disablePostBtn={this.props.disablePostBtn}
          onPressPostBtn={this.pressPostBtn}
        />
      </View>
    );
  }
}

mapStateToProps = state => {
  return {
    disablePostBtn: state.AddStoryButtonReducer.disablePostBtn
  };
};

mapDispatchToProps = dispatch => {
  return {
    onPostBtn: pressed => dispatch(addStoryButtonPressed(pressed))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AddStoryHeaderButton
);
