import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Feather,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Vistoria from "../screens/Vistoria";
import Gallery from "../screens/Gallery";
import Schedule from "../screens/Schedule";
import MySpace from "../screens/MySpace";

const { Navigator, Screen } = createBottomTabNavigator();

function BottomTab() {
  return (
    <Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          elevation: 2,
          height: 74,
          backgroundColor: "#FFFFFF",
        },
        tabStyle: {
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 30,
          height: 30,
        },
        labelStyle: {
          fontSize: 13,
          fontWeight: "400",
        },
        inactiveTintColor: "#8B9297",
        activeTintColor: "#8B9297",
        showLabel: true,
      }}
    >
      <Screen
        name="Vistoria"
        component={Vistoria}
        options={{
          title: "Vistoria",
          tabBarIcon: ({ focused }) => {
            let color = focused ? "#6ABFB0" : "#93ABB6";

            return (
              <MaterialCommunityIcons
                name="office-building"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Screen
        name="Gallery"
        component={Gallery}
        options={{
          title: "Galeria",
          tabBarIcon: ({ focused }) => {
            let color = focused ? "#6ABFB0" : "#93ABB6";

            return <Feather name="camera" size={24} color={color} />;
          },
        }}
      />
      <Screen
        name="Schedule"
        component={Schedule}
        options={{
          title: "Agenda",
          tabBarIcon: ({ focused }) => {
            let color = focused ? "#6ABFB0" : "#93ABB6";

            return <SimpleLineIcons name="calendar" size={24} color={color} />;
          },
        }}
      />
      <Screen
        name="MySpace"
        component={MySpace}
        options={{
          title: "Meu espaço",
          tabBarIcon: ({ focused }) => {
            let color = focused ? "#6ABFB0" : "#93ABB6";

            return <Feather name="users" size={24} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}

export default BottomTab;
