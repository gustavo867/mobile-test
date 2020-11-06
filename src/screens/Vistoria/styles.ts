import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F5",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
    marginRight: 10,
  },
  residence: {
    fontSize: 17,
    color: "#000",
    fontWeight: "600",
    lineHeight: 21,
  },
  construction: {
    fontSize: 14,
    color: "#9DA3A8",
    lineHeight: 17,
  },
  topContainer: {
    flexDirection: "row",
    margin: 13,
  },

  title: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#7A7A7A",
    lineHeight: 24,
    marginLeft: 15,
  },
  card: {
    width: width,
    height: height * 0.15,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    flexDirection: "row",
  },
  left: {
    width: 5,
    height: height * 0.15,
    backgroundColor: "#6DC1A9",
  },
  redCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 10,
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    height: 50,
  },
  name: {
    fontSize: 14,
    lineHeight: 14,
    color: "#7A7A7A",
    marginLeft: 10,
  },
  block: {
    fontSize: 14,
    lineHeight: 14,
    color: "#7A7A7A",
    textTransform: "uppercase",
  },
});

export default styles;
