import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabBar from "./BottomTabBar";
import Login from "../screens/Login";

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Login" component={Login} />
        <Screen name="BottomTabs" component={BottomTabBar} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
