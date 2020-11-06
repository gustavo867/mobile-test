import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";

interface Props extends RectButtonProperties {
  text: string;
}

const { height, width } = Dimensions.get("window");

const Button: React.FC<Props> = ({ text, ...props }) => {
  return (
    <RectButton style={styles.container} {...props}>
      <Text style={styles.text}>{text}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.07,
    width: width * 0.85,
    borderRadius: 8,
    backgroundColor: "#F2994A",
    marginTop: 30,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
});

export default Button;
