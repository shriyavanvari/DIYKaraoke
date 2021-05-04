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
} from "react-native";
import { Checkbox } from "react-native-paper";

function SignUp2({ navigation }) {
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
      <Text>Select Your Favorite Genres{"\n"}</Text>
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
                position: "absolute",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <Checkbox.Item
                status={isSelected1 ? "checked" : "unchecked"}
                onPress={() => {
                  setSelection1(!isSelected1);
                }}
                color="black"
                uncheckedColor="red"
                style={styles.checkbox}
              />
              Pop
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
              style={{ position: "absolute", fontSize: 20, fontWeight: "bold" }}
            >
              <Checkbox.Item
                status={isSelected2 ? "checked" : "unchecked"}
                onPress={() => {
                  setSelection2(!isSelected2);
                }}
                color="black"
                uncheckedColor="red"
                style={styles.checkbox}
              />
              Classical
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
              style={{ position: "absolute", fontSize: 20, fontWeight: "bold" }}
            >
              <Checkbox.Item
                status={isSelected3 ? "checked" : "unchecked"}
                onPress={() => {
                  setSelection3(!isSelected3);
                }}
                color="black"
                uncheckedColor="red"
                style={styles.checkbox}
              />
              Hiphop
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
              style={{ position: "absolute", fontSize: 20, fontWeight: "bold" }}
            >
              <Checkbox.Item
                status={isSelected4 ? "checked" : "unchecked"}
                onPress={() => {
                  setSelection4(!isSelected4);
                }}
                color="black"
                uncheckedColor="red"
                style={styles.checkbox}
              />
              Romantic
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
              style={{ position: "absolute", fontSize: 20, fontWeight: "bold" }}
            >
              <Checkbox.Item
                status={isSelected5 ? "checked" : "unchecked"}
                onPress={() => {
                  setSelection5(!isSelected5);
                }}
                color="black"
                uncheckedColor="red"
                style={styles.checkbox}
              />
              Bollywood
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
              style={{ position: "absolute", fontSize: 20, fontWeight: "bold" }}
            >
              <Checkbox.Item
                status={isSelected6 ? "checked" : "unchecked"}
                onPress={() => {
                  setSelection6(!isSelected6);
                }}
                color="black"
                uncheckedColor="red"
                style={styles.checkbox}
              />
              Party
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
              style={{ position: "absolute", fontSize: 20, fontWeight: "bold" }}
            >
              <Checkbox.Item
                status={isSelected7 ? "checked" : "unchecked"}
                onPress={() => {
                  setSelection7(!isSelected7);
                }}
                color="black"
                uncheckedColor="red"
                style={styles.checkbox}
              />
              Trip
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
              style={{ position: "absolute", fontSize: 20, fontWeight: "bold" }}
            >
              <Checkbox.Item
                status={isSelected8 ? "checked" : "unchecked"}
                onPress={() => {
                  setSelection8(!isSelected8);
                }}
                color="black"
                uncheckedColor="red"
                style={styles.checkbox}
              />
              Workout
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
              style={{ position: "absolute", fontSize: 20, fontWeight: "bold" }}
            >
              <Checkbox.Item
                status={isSelected9 ? "checked" : "unchecked"}
                onPress={() => {
                  setSelection9(!isSelected9);
                }}
                color="black"
                uncheckedColor="red"
                style={styles.checkbox}
              />
              Feel Good
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
              style={{ position: "absolute", fontSize: 20, fontWeight: "bold" }}
            >
              {" "}
              <Checkbox.Item
                status={isSelected10 ? "checked" : "unchecked"}
                onPress={() => {
                  setSelection10(!isSelected10);
                }}
                color="black"
                uncheckedColor="red"
                style={styles.checkbox}
              />
              Happy
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
              style={{ position: "absolute", fontSize: 20, fontWeight: "bold" }}
            >
              <Checkbox.Item
                status={isSelected11 ? "checked" : "unchecked"}
                onPress={() => {
                  setSelection11(!isSelected11);
                }}
                color="black"
                uncheckedColor="red"
                style={styles.checkbox}
              />
              Chill
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
              style={{ position: "absolute", fontSize: 20, fontWeight: "bold" }}
            >
              <Checkbox.Item
                status={isSelected12 ? "checked" : "unchecked"}
                onPress={() => {
                  setSelection12(!isSelected12);
                }}
                color="black"
                uncheckedColor="red"
                style={styles.checkbox}
              />
              Hits
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
              onPress={() => navigation.navigate("SignUp3")}
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
    //flex: 1,
    alignItems: "center",
    //   paddingTop:35,
    //   paddingBottom: 60
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginVertical: 5,
    //backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
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
  checkbox: {
    borderColor: "deeppink",
    borderWidth: 1,
  },
});

export default SignUp2;
