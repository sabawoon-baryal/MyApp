import { StyleSheet, Text, View, Platform, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const storyCardWidth = (width - 6) / 3;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    alignItems: "center"
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
  headerImage: {
    height: 200
  },
  twoTextInputsSideBySide: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly"
  },
  facebookBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "rgb(59,89,152)",
    borderRadius: 3,
    width: "50%",
    alignItems: "center"
  },
  facebookBtnText: {
    color: "white"
  },
  googleBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 3,
    width: "50%",
    alignItems: "center"
  },
  googleBtnText: {
    color: "red"
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
    fontSize: 16
  },
  fbClearButtonText: {
    color: "rgb(59,89,152)",
    marginBottom: 20,
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
    fontSize: 16
  },
  scroller: {
    flex: 1,
    width: "100%"
  }
});
