import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignIn from "./app/screens/SignIn";
import { render } from "react-dom";
import { StackRouter } from "react-navigation";

const AppNavigator = createStackNavigator(); //

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator initialRouteName="WelcomeScreen">
        <AppNavigator.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: "Welcome" }}
        />
        <AppNavigator.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "Login" }}
        />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}
