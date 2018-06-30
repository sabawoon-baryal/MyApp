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
