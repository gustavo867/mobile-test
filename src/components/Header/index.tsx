import React from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import Input from "../Input";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

interface Props {
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
}

const Header: React.FC<Props> = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#559E86", "#26607B"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      <Input
        value={value}
        onChangeText={onChangeText}
        type="search"
        placeholder="Buscar"
        inputWidth={width * 0.8}
      />
      <TouchableOpacity style={styles.button}>
        <Feather name="filter" size={28} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.17,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default Header;
