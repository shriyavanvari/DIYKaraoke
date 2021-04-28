import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { Audio } from "expo-av";

const song = {
  uri:
    "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3",
};

export default function KaraokePlayer({ navigation }) {
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
  };

  const playCurrentSong = async () => {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(sound);
    await sound.playAsync();
  };

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound"); //ensure song only played once
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playCurrentSong} />
      {!isPlaying ? (
        <TouchableOpacity onPress={onPlayPausePress}>
          <View style={styles.playButton}>
            <Image source={require("../assets/ic_pause_white_48pt.png")} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPlayPausePress}>
          <View style={styles.playButton}>
            <Image source={require("../assets/ic_play_arrow_white_48pt.png")} />
          </View>
        </TouchableOpacity>
      )}
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
