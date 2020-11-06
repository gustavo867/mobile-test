import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const Login: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#549E9B", "#41818A", "#387280", "#275A78"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: height * 2,
        }}
      />
      <View style={styles.topContainer}>
        <RectButton style={styles.arrowButton}>
          <Ionicons name="ios-arrow-back" size={24} color="#FFFFFF" />
        </RectButton>
        <Text style={styles.title}>Hands on</Text>
        <View />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
        <Button text="Autenticar" onPress={() => navigate("BottomTabs")} />
      </View>
      <RectButton>
        <Text style={styles.forgotPassword}>Esqueci a senha</Text>
      </RectButton>
    </SafeAreaView>
  );
};

export default Login;
