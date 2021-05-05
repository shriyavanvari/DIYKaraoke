import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

function Option({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/karaoke.png")} />
      <Text>
        Select An Option{"\n"}
        {"\n"}
      </Text>

      <View>
        <TouchableOpacity
          style={[
            styles.box,
            {
              transform: [{ translateY: -120 }],
            },
          ]}
          onPress={() => navigation.navigate("RecognizeSong")}
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
            Recognize Song
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={[
            styles.box,
            {
              transform: [{ translateY: -120 }],
            },
          ]}
          onPress={() => navigation.navigate("SearchSongs")}
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
            Search a Song
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    
  },
  image: {
    width: 120,
    height: 150,
    opacity: 0.3,
  },
  scrollContentContainer: {
    //   flex:1,
    //   alignItems:"center"
    //   // paddingTop:15,
    //   // // paddingBottom: 60
  },
  box: {
    height: 120,
    width: 120,
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
    marginTop: 40,
    marginBottom: 100,
  },
});

export default Option;
