import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignIn from "./app/screens/SignIn";
import SignUp from "./app/screens/SignUp";
import SignUp1 from "./app/screens/SignUp1";
import SignUp2 from "./app/screens/SignUp2";
import SignUp3 from "./app/screens/SignUp3";
import SearchSongs from "./app/screens/SearchSongs";
import KaraokePlayer from "./app/screens/KaraokePlayer";

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

        <AppNavigator.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Register" }}
        />

        <AppNavigator.Screen
          name="SignUp1"
          component={SignUp1}
          options={{ title: "Register" }}
        />
        <AppNavigator.Screen
          name="SignUp2"
          component={SignUp2}
          options={{ title: "Register" }}
        />
        <AppNavigator.Screen
          name="SignUp3"
          component={SignUp3}
          options={{ title: "Register" }}
        />
        <AppNavigator.Screen
          name="SearchSongs"
          component={SearchSongs}
          options={{ title: "Songs Playlist" }}
        />

        <AppNavigator.Screen
          name="KaraokePlayer"
          component={KaraokePlayer}
          options={{ title: "Karaoke Player" }}
        />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}
