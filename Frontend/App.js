import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { LogBox } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignIn from "./app/screens/SignIn";
import SignUp from "./app/screens/SignUp";
import SignUp1 from "./app/screens/SignUp1";
import SignUp2 from "./app/screens/SignUp2";
import SignUp3 from "./app/screens/SignUp3";
import SearchSongs from "./app/screens/SearchSongs";
import KaraokePlayer from "./app/screens/KaraokePlayer";
import Option from "./app/screens/Option";
import RecognizeSong from "./app/screens/RecognizeSong";
import ItemBasedRecommendations from "./app/screens/ItemBasedRecommendations";

const AppNavigator = createStackNavigator(); //

export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <NavigationContainer>
      <AppNavigator.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={({ route, navigation }) => ({
          // get reference to navigation
          headerRight: () => (
            <Button
              title="Logout"
              onPress={() => {
                navigation.navigate("SignIn");
                AsyncStorage.removeItem("refresh");
              }}
            />
          ),
        })}
      >
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
          options={{ title: "Favourite Artists" }}
        />
        <AppNavigator.Screen
          name="SignUp2"
          component={SignUp2}
          options={{ title: "Favourite Genres" }}
        />
        <AppNavigator.Screen
          name="SignUp3"
          component={SignUp3}
          options={{ title: "Register" }}
        />
        <AppNavigator.Screen
          name="SearchSongs"
          component={SearchSongs}
          options={{ title: "Popular Songs" }}
        />

        <AppNavigator.Screen
          name="KaraokePlayer"
          component={KaraokePlayer}
          options={{ title: "Karaoke Player" }}
        />
        <AppNavigator.Screen
          name="Option"
          component={Option}
          options={{ title: "Pick Input" }}
        />
        <AppNavigator.Screen
          name="RecognizeSong"
          component={RecognizeSong}
          options={{ title: "Recognize Song" }}
        />
        <AppNavigator.Screen
          name="ItemRecommendations"
          component={ItemBasedRecommendations}
          options={{ title: "Similar Songs" }}
        />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}
