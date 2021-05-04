import { connect } from "formik";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import accountAPI from "../api/account";

function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem("refresh", token);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
  const getToken = async (user) => {
    try {
      let token = await AsyncStorage.getItem("refresh");
      console.log(token);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const handleSignIn = async () => {
    console.log("sign in");
    const data = {
      username: email,
      password: password,
    };
    /***UNCOMMENT */
    // const result = await accountAPI.signIn(data);
    // storeToken(result.data.refresh);
    // setAccessToken(result.data.access);
    // setRefreshToken(result.data.refresh);
    //if (!result.ok) return alert("Could not sign in successfully");
    alert("Success");

    navigation.navigate("Option");
  };

  useEffect(() => {
    getToken();
  }, [refreshToken]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/karaoke.png")} />

      <View style={styles.inputView}>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          icon="email"
          keyboardType="email-address"
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          style={styles.inputFields}
          textContentType="emailAddress"
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          icon="lock"
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          style={styles.inputFields}
          textContentType="password"
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Button title="LOGIN" color="black" onPress={handleSignIn} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={styles.register}
          onPress={() => navigation.navigate("SignUp")}
        >
          New User? Register Here
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 30, //adding distance between two fields
    alignItems: "center",
  },
  inputFields: {
    height: 50,
    flex: 1,
    padding: 10,
    alignContent: "center",
  },
  forgotPassword: {
    height: 30,
    marginBottom: 30,
  },
  loginButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff33cc",
    marginBottom: 30,
  },
  register: {
    height: 50,
    marginBottom: 50,
    color: "blue",
  },
});
export default SignIn;
