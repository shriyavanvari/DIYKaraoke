import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-community/async-storage";
import base64 from "react-native-base64";

import songAPI from "../api/songs";

function RecognizeSong({ navigation }) {
  const [recording, setRecording] = React.useState();
  const [audioPath, setAudioPath] = React.useState();
  const [song, setSong] = React.useState("");
  const [tracks, setTracks] = React.useState([]);
  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log("Starting recording..");
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    const cloudUri = base64.encode(uri);

    const result = await songAPI.songRecognition(uri);
    const response = await songAPI.getSong();
    // console.log(response.data);
    setSong("One Last Time");
    ////check result here
    // console.log(result);
    // console.log(result.data);
    // console.log(result.data.title);
    // setSong(result.data.title);

    console.log("Recording stopped and stored at", uri);
  }

  useEffect(() => {
    //response
    //set tracks to the response.data
    //setfiltered tracks to response
    const fetchData = async () => {
      const result = await songAPI.getPopularSongs();
      console.log(result);
      setTracks(result.data);
    };
    fetchData();
  }, []);

  const onSongPress = async (key) => {
    const result = await songAPI.incrementFrequency(key);
    navigation.navigate("KaraokePlayer", {
      paramKey: { key },
      tracks: { tracks },
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/karaoke.png")} />
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />

      <Text style={styles.songName} onPress={() => onSongPress(8)}>
        {song}
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#B19CD9",
  },
  image: {
    width: 120,
    height: 150,
    opacity: 0.3,
  },
  box: {
    height: 120,
    width: 120,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 400,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 8,
    marginTop: 50,
    color: "#000",
    textAlign: "center",
  },
  logo: {
    marginTop: 50,
    width: 120,
    height: 120,
    marginTop: 40,
    marginBottom: 140,
  },
  songName: {
    marginTop: 148,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default RecognizeSong;
