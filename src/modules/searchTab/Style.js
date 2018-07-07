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
  title: { color: "red", fontSize: 20, marginBottom: 20 }
});
