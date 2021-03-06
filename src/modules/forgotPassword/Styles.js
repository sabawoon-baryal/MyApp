import { StyleSheet, Text, View, Platform, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const storyCardWidth = (width - 6) / 3;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  loginBtnText: { color: "white", marginLeft: -5 },
  loginBtn: {
    paddingHorizontal: 10,
    backgroundColor: "red",
    borderRadius: 3,
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },
  disabledLoginBtnText: {
    color: "white",
    marginLeft: -5
  },
  disabledLoginBtn: {
    backgroundColor: "rgb(216, 40, 36)",
    borderRadius: 3,
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15
  },
  codeInputVerification: {
    height: 65,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    width: "100%",
    height: 45,
    fontSize: 16,
    backgroundColor: "white",
    paddingLeft: 8,
    borderRadius: 2,
    marginVertical: 3
  },
  nameTextInput: {
    width: "49%",
    height: 45,
    fontSize: 16,
    backgroundColor: "white",
    marginHorizontal: 5,
    borderRadius: 2,
    paddingLeft: 8
  },
  clearButton: {
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clearButtonText: {
    color: "red",
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: "underline"
  },

  // Create New Account btn styles
  newAccButton: {
    backgroundColor: "transparent",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 10,
    alignItems: "center",
    width: "100%"
  },
  newAccButtonText: {
    color: "red",
    fontSize: 16,
    textDecorationLine: "underline"
  },
  scroller: {
    flex: 1,
    width: "100%"
  },

  // contact form styles
  joinWeena: {
    paddingHorizontal: 10,
    backgroundColor: "red",
    borderRadius: 3,
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },
  title: { color: "red", fontSize: 20, marginBottom: 20 },
  subTitle: {
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center"
  },
  termsText: {
    marginVertical: 10,
    justifyContent: "center",
    alignContent: "center"
  },
  verifyBtnColor: { color: "white" },
  alreadyBtn: { color: "red" },
  joinWeenaBtnText: {
    color: "white"
  },
  disabledJoinWeena: {
    backgroundColor: "rgb(216, 40, 36)",
    borderRadius: 3,
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15
  },
  disabledJoinWeenaBtnText: {
    color: "white",
    marginLeft: -5
  },
  twoTextInputsSideBySide: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly"
  },

  // already have account btn styles
  haveAccount: {
    marginTop: 100
  },
  genderButton: {
    backgroundColor: "red",
    width: "49%",
    borderRadius: 3,
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 5
  },
  ListItem: {
    marginVertical: 10,
    marginHorizontal: 5
  },
  profileImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100
  },
  headerProfileImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100
  },
  ListItemContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 20
  },
  ListItemHeader: {
    padding: 10,
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  storyDescription: {
    margin: 10
  },
  addStory: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    marginVertical: 10
  },
  wrapper: {
    backgroundColor: "red"
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },

  // More Tab

  profilePicture: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255,255,255)",
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 0.3
  },
  profilePictureWithImage: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 0.3
  },
  profileBackground: {
    width: "100%",
    height: 200
  },
  profileBackgroundContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingLeft: "5%",
    paddingBottom: "7%",
    height: "100%"
  },
  userProfile: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10
  },
  profilePickerBtn: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingRight: 20,
    height: "100%"
  },
  profileName: {
    paddingLeft: 10,
    color: "rgb(0,0,0)"
  },

  // profile options
  profileOptions: {
    borderTopWidth: 0.2,
    backgroundColor: "rgb(255,255,255)"
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  saveProfilePicture: {
    borderWidth: 0.2,
    padding: 10
  },
  disabledSaveProfilePicture: {
    borderWidth: 0.2,
    padding: 10
  },

  // user stories

  MainContainer: {
    // flex: 1,
    justifyContent: "center",
    backgroundColor: "rgb(255,255,255)",
    width: "100%"
  },

  GridViewBlockStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: storyCardWidth,
    margin: 1
    // backgroundColor: "#00BCD4"
  },
  GridViewInsideTextItemStyle: {
    textAlign: "center",
    flex: 1,
    backgroundColor: "rgb(234, 232, 232)",
    justifyContent: "center",
    alignItems: "center",
    width: storyCardWidth,
    height: 100,
    paddingVertical: 10
  },
  UserStoriesTextStyle: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    fontSize: 14
  },

  failedLoadStories: {
    backgroundColor: "rgba(247, 231, 230, 0.5)",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  absoluteCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  codeConfirmation: {
    // backgroundColor: "red"
  }
});
