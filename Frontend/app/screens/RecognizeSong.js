import React from "react";
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

function RecognizeSong(props) {
  const [recording, setRecording] = React.useState();
  const [audioPath, setAudioPath] = React.useState();
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
    //let base64Aud = `data:audio/mpeg;base64,${cloudUri}`;
    // let fd = new FormData();
    // await fd.append("file", { url: uri, type: "audio/mpeg" });
    //   fetch(apiUrl, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'multipart/form-data',

    //     },
    //     body: fd
    // }).then(response => {
    //     console.error(response)
    // }).catch(err => {
    //     console.error(err)
    // })
    const result = await songAPI.songRecognition(uri);
    console.log("Song recognition response:");
    console.log(result.data);
    console.log("Recording stopped and stored at", uri);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/karaoke.png")} />
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
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
    marginBottom: 10,
  },
});

export default RecognizeSong;
