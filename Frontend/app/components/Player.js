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

import Header from "./Header";
import AlbumArt from "./AlbumArt";
import TrackDetails from "./TrackDetails";

export default function Player(props) {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [position, setPosition] = useState(null);
  const [selectedTrackNumber, setSelectedTrackNumber] = useState(
    props.selectedTrackNumber
  );

  const song = props.tracks[selectedTrackNumber];
  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
    // console.log(status);
  };

  const playCurrentSong = async () => {
    console.log("Loading Sound");
    console.log(song.audioUrl);
    const { sound } = await Audio.Sound.createAsync(
      { uri: song.audioUrl },
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
      <Header message="Playing from charts" />
      <AlbumArt url={song.albumArtUrl} />
      <TrackDetails title={song.title} artist={song.artist} />
      <Text onPress={playCurrentSong} style={styles.startKaraoke}>
        Start Karaoke!
      </Text>
      {/* <Text>{getProgress()}</Text> */}
      {isPlaying ? (
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
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4d4dff",
  },
  startKaraoke: {
    color: "rgba(255, 255, 255, 0.72)",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 72 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
