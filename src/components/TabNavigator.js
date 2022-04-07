//import liraries
import React, { Component } from "react";
// import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import PokeDex from "../PokeDex";
import TeamSelectionScreen from "../TeamSelectionScreen";

const Tab = createBottomTabNavigator();
{
  /* <ion-icon name="invert-mode-outline"></ion-icon> */
}

// create a component
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="PokeDex2"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "PokeDex") {
            iconName = focused ? "information-outline" : "information-outline";
          } else if (route.name === "TeamSelect") {
            iconName = focused ? "bonfire-outline" : "bonfire-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
          //   <ion-icon name="invert-mode-outline"></ion-icon>
        },

        tabBarActiveTintColor: "pink",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="PokeDex" component={PokeDex} />
      <Tab.Screen name="TeamSelect" component={TeamSelectionScreen} />
    </Tab.Navigator>
  );
};

// define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#2c3e50",
//   },
// });

//make this component available to the app
export default TabNavigator;
