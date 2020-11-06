import React, { useState } from "react";
import { TextInputProps, View, StyleSheet, Dimensions } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

interface Props extends TextInputProps {
  type?: "email" | "password" | "search";
  inputWidth?: number;
  inputHeight?: number;
}

const Input: React.FC<Props> = ({
  type,
  inputWidth,
  inputHeight,
  ...props
}: Props) => {
  const [secure, setSecure] = useState<boolean>(true);

  return (
    <View
      style={[
        styles.container,
        {
          width: inputWidth ? inputWidth : width * 0.85,
          height: inputHeight ? inputHeight : height * 0.065,
        },
      ]}
    >
      {type &&
        (type === "email" ? (
          <Feather
            name="mail"
            size={27}
            color="#93ABB6"
            style={{
              marginLeft: 5,
            }}
          />
        ) : type === "password" ? (
          <Feather
            name="lock"
            size={27}
            color="#93ABB6"
            style={{
              marginLeft: 5,
            }}
          />
        ) : (
          <MaterialIcons
            name="search"
            size={24}
            color="#93ABB6"
            style={{
              marginLeft: 5,
            }}
          />
        ))}

      <TextInput
        placeholderTextColor="#414141"
        style={styles.input}
        autoCorrect={false}
        secureTextEntry={type === "password" ? secure : false}
        {...props}
      />
      {type === "password" && (
        <Feather
          onPress={() => setSecure((state) => !state)}
          name={secure === true ? "eye-off" : "eye"}
          size={24}
          color="#93ABB6"
          style={styles.eye}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 16,
    alignSelf: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 10,
    fontWeight: "400",
  },
  input: {
    paddingLeft: 10,
    fontSize: 17,
    color: "#414141",
    width: width * 0.3,
  },
  eye: {
    position: "absolute",
    right: 20,
  },
});

export default Input;
