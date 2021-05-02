import React,{useState} from "react";
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
import { Icon } from 'react-native-elements';

function SignUp1({ navigation }) {
  const [buttonName, setButtonName] = useState("square-o"); 
  const changeButtonName = ()=>{
    
    if(buttonName=="square-o")
    {
    setButtonName("check-square-o")
    }
    else{
      setButtonName("square-o")
    }
  }
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
            onPress={changeButtonName}
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
              <Icon
              name={buttonName}
              type="font-awesome"></Icon>
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
            onPress={changeButtonName}
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
              <Icon
              name={buttonName}
              type="font-awesome"
              ></Icon>
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
            onPress={changeButtonName}
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
              <Icon
              name={buttonName}
              type="font-awesome"
              ></Icon>
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
            onPress={changeButtonName}
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
              <Icon
              name={buttonName}
              type="font-awesome"
              ></Icon>
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
            onPress={changeButtonName}
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
              <Icon
              name={buttonName}
              type="font-awesome"
              ></Icon>
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
            onPress={changeButtonName}
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
              <Icon
              name={buttonName}
              type="font-awesome"
              ></Icon>
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
            onPress={changeButtonName}
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
              <Icon
              name={buttonName}
              type="font-awesome"
              ></Icon>
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
            onPress={changeButtonName}
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
              <Icon
              name={buttonName}
              type="font-awesome"
              ></Icon>
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
            onPress={changeButtonName}
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
              <Icon
              name={buttonName}
              type="font-awesome"
              ></Icon>
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
            onPress={changeButtonName}
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
              <Icon
              name={buttonName}
              type="font-awesome"
              ></Icon>
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
            onPress={changeButtonName}
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
              <Icon
              name={buttonName}
              type="font-awesome"
              ></Icon>
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
            onPress={changeButtonName}
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
              <Icon
              name={buttonName}
              type="font-awesome"
              ></Icon>
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
    // flex:1
  },
  image: {
    width: 100,
    height: 150,
    opacity: 0.3,
  },
  scrollContentContainer: {
    flex: 1,
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
