import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";

import accountAPI from "../api/account";

function SignUp({ navigation }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    console.log("sign up");
    const data = {
      email: email,
      password: password,
      fname: fname,
      lname: lname,
    };
    console.log(data);
    const result = await accountAPI.signUp(data);
    console.log(result.data);
    if (!result.ok) return alert("Could not sign up successfully");
    alert("Success");
    console.log(result.data);
    navigation.navigate("SignUp1");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/karaoke.png")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputFields}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(fname) => setFname(fname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputFields}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          onChangeText={(lname) => setLname(lname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputFields}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputFields}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputFields}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text
          style={styles.alreadyMember}
          onPress={() => navigation.navigate("SignIn")}
        >
          Already a Member?Login Here.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton}>
        <Button title="Register" color="black" onPress={handleSignUp}></Button>
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
    marginBottom: 20, //adding distance between two fields
    alignItems: "center",
  },
  inputFields: {
    height: 50,
    flex: 1,
    padding: 10,
    alignContent: "center",
  },
  alreadyMember: {
    height: 50,
    marginTop: 50,
    color: "blue",
  },
  registerButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff33cc",
    margin: "1%",
  },
});
export default SignUp;
