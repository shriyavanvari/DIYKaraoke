import React, { useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

const song = {
  uri:
    "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3",
};

export default function KaraokePlayer({ navigation }) {
  const [sound, setSound] = React.useState();
  const onPlaybackStatusUpdate = (status) => {
    console.log(status);
  };

  const playCurrentSong = async () => {
    console.log("Loading Sound");
    const { sound } = Audio.Sound.createAsync(
      {
        uri:
          "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3",
      },
      { shouldPlay: true },
      onPlaybackStatusUpdate
    );
    setSound(sound);
    await sound.playAsync();
  };

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playCurrentSong} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
