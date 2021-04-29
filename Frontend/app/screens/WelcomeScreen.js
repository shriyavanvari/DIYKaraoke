import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/karaoke.png")} />
        <Text style={styles.title}>DIY Karaoke</Text>
      </View>
      <View style={styles.loginButton}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("SignIn")}
        >
          LOGIN
        </Text>
      </View>
      <View style={styles.signUpButton}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("SignUp")}
        >
          SIGN UP
        </Text>
      </View>
    </ImageBackground>
  );
}
//rnss shortcut to create stylesheet
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    position: "absolute",
    top: 200,
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#ff33cc",
    bottom: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4d4dff",
    bottom: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "purple",
    backgroundColor: "white",
    textShadowColor: "gray",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    top: 5,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default WelcomeScreen;
