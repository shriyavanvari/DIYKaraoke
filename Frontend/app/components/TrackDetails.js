import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { Audio } from "expo-av";

export default function Player(props) {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [position, setPosition] = useState(null);
  const [selectedTrackNumber, setSelectedTrackNumber] = useState(
    this.props.selectedTrackNumber
  );
  const song = this.props.tracks[selectedTrackNumber];

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
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

  const getProgress = () => {
    if ((sound == null) | (duration == null) || position == null) {
      return 0;
    }
    return (position / duration) * 100;
  };

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playCurrentSong} />
      <Text>{getProgress()}</Text>
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
