import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import { Icon } from "react-native-elements";

function SignUp1({ navigation }) {
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);
  const [isSelected5, setSelection5] = useState(false);
  const [isSelected6, setSelection6] = useState(false);
  const [isSelected7, setSelection7] = useState(false);
  const [isSelected8, setSelection8] = useState(false);
  const [isSelected9, setSelection9] = useState(false);
  const [isSelected10, setSelection10] = useState(false);
  const [isSelected11, setSelection11] = useState(false);
  const [isSelected12, setSelection12] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.scrollContentContainer}>
      <Image style={styles.logo} source={require("../assets/karaoke.png")} />
      <Text>Select Your Favorite Artists{"\n"}</Text>
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            style={[
              styles.box,
              {
                transform: [{ translateX: -110 }],
              },
            ]}
          >
            <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: "center",
                position: "absolute",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <CheckBox value={isSelected1} onValueChange={setSelection1} />
              Charlie Puth
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.box,
              {
                transform: [{ translateY: -110 }],
              },
            ]}
          >
            <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: "center",
                position: "absolute",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <CheckBox
                value={isSelected2}
                onValueChange={setSelection2}
                style={styles.checkbox}
              />
              Ed Sheeran
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.box,
              {
                transform: [{ translateY: -220 }, { translateX: 110 }],
              },
            ]}
          >
            <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: "center",
                position: "absolute",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <CheckBox
                value={isSelected3}
                onValueChange={setSelection3}
                style={styles.checkbox}
              />
              Niall Horan
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            style={[
              styles.box,
              {
                transform: [{ translateX: -110 }, { translateY: -220 }],
              },
            ]}
          >
            <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: "center",
                position: "absolute",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <CheckBox
                value={isSelected4}
                onValueChange={setSelection4}
                style={styles.checkbox}
              />
              Nick Jonas
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.box,
              {
                transform: [{ translateY: -330 }],
              },
            ]}
          >
            <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: "center",
                position: "absolute",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <CheckBox
                value={isSelected5}
                onValueChange={setSelection5}
                style={styles.checkbox}
              />
              James Arthur
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.box,
              {
                transform: [{ translateY: -440 }, { translateX: 110 }],
              },
            ]}
          >
            <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: "center",
                position: "absolute",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <CheckBox
                value={isSelected6}
                onValueChange={setSelection6}
                style={styles.checkbox}
              />
              Calum Scott
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            style={[
              styles.box,
              {
                transform: [{ translateX: -110 }, { translateY: -440 }],
              },
            ]}
          >
            <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: "center",
                position: "absolute",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <CheckBox
                value={isSelected7}
                onValueChange={setSelection7}
                style={styles.checkbox}
              />
              Justin Bieber
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.box,
              {
                transform: [{ translateY: -110 }, { translateY: -440 }],
              },
            ]}
          >
            <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: "center",
                position: "absolute",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <CheckBox
                value={isSelected8}
                onValueChange={setSelection8}
                style={styles.checkbox}
              />
              Taylor Swift
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.box,
              {
                transform: [{ translateY: -660 }, { translateX: 110 }],
              },
            ]}
          >
            <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: "center",
                position: "absolute",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <CheckBox
                value={isSelected9}
                onValueChange={setSelection9}
                style={styles.checkbox}
              />
              Rihanna
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            style={[
              styles.box,
              {
                transform: [{ translateX: -110 }, { translateY: -660 }],
              },
            ]}
          >
            <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: "center",
                position: "absolute",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <CheckBox
                value={isSelected10}
                onValueChange={setSelection10}
                style={styles.checkbox}
              />
              Beyonce
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.box,
              {
                transform: [{ translateY: -770 }],
              },
            ]}
          >
            <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: "center",
                position: "absolute",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <CheckBox
                value={isSelected11}
                onValueChange={setSelection11}
                style={styles.checkbox}
              />
              Ariana Grande
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.box,
              {
                transform: [{ translateY: -880 }, { translateX: 110 }],
              },
            ]}
          >
            <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: "center",
                position: "absolute",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <CheckBox
                value={isSelected12}
                onValueChange={setSelection12}
                style={styles.checkbox}
              />
              One Direction
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            style={[
              styles.nextButton,
              {
                transform: [{ translateY: -880 }],
              },
            ]}
          >
            <Button
              title="Next"
              color="black"
              onPress={() => navigation.navigate("SignUp2")}
            ></Button>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 150,
    opacity: 0.3,
  },
  scrollContentContainer: {
    // flex: 1,
    alignItems: "center",
    // paddingTop:15,
    // // paddingBottom: 60
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 8,
    color: "#000",
    textAlign: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 20,
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: "#ff33cc",
    color: "black",
    borderRadius: 25,
    width: 100,
    height: 50,
    alignItems: "center",
    paddingTop: 5,
  },
  //   regButton: {
  //     width: "80%",
  //     borderRadius: 25,
  //     height: 50,
  //     alignItems: "center",
  //     justifyContent: "center",
  //     backgroundColor: "#ff33cc",
  //     margin: "1%",
  //   },
});

export default SignUp1;
