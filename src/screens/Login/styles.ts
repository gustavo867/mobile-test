import { Dimensions, Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight - 5 : 0,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
    textTransform: "uppercase",
    paddingRight: 15,
    letterSpacing: 0.4,
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  arrowButton: {
    paddingLeft: 15,
  },
  inputContainer: {
    marginTop: -height * 0.13,
  },
  forgotPassword: {
    fontWeight: "400",
    fontSize: 14,
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default styles;
