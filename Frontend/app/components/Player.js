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
import SeekBar from "./SeekBar";

export default function Player(props) {
  const tracks = props.tracks;
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [position, setPosition] = useState(null);
  const [currentTrackNumber, setCurrentTrackNumber] = useState(
    props.selectedTrackNumber - 1
  );
  //console.log(props);
  // const song = props.tracks[selectedTrackNumber];

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound"); //ensure song only played once
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
    // console.log(status);
  };

  const playCurrentSong = async () => {
    console.log("Loading Sound");
    console.log(tracks[currentTrackNumber].audioUrl);
    const { sound } = await Audio.Sound.createAsync(
      { uri: tracks[currentTrackNumber].audioUrl },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(sound);
    await sound.playAsync();
  };

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

  const handlePreviousTrack = async () => {
    if (sound) {
      await sound.unloadAsync();
      currentTrackNumber < tracks.length && currentTrackNumber > 0
        ? setCurrentTrackNumber(currentTrackNumber - 1)
        : setCurrentTrackNumber(0);
      playCurrentSong();
    }
  };

  const handleNextTrack = async () => {
    if (sound) {
      await sound.unloadAsync();
      currentTrackNumber < tracks.length - 1
        ? setCurrentTrackNumber(currentTrackNumber + 1)
        : setCurrentTrackNumber(currentTrackNumber);
      playCurrentSong();
    }
  };

  // const getProgress = () => {
  //   if ((sound == null) | (duration == null) || position == null) {
  //     return 0;
  //   }
  //   return (position / duration) * 100;
  // };

  // const seek = (time) => {
  //   time = Math.round;
  //   if (!sound) {
  //     return;
  //   } else {
  //     sound.seek(time);
  //     setPosition(time);
  //     setIsPlaying(true);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Header message="Playing from charts" />
      <AlbumArt url={tracks[currentTrackNumber].albumArtUrl} />
      <TrackDetails
        title={tracks[currentTrackNumber].title}
        artist={tracks[currentTrackNumber].artist}
      />
      <Text onPress={playCurrentSong} style={styles.startKaraoke}>
        Start Karaoke!
      </Text>
      {/* <Text>{getProgress()}</Text> */}
      {/* <SeekBar
        currentPosition={position}
        trackLength={1}
        onSeek={seek}
        onSlidingStart={() => setIsPlaying(false)}
      /> */}
      <View style={styles.controlContainer}>
        <View style={{ width: 40 }} />
        <TouchableOpacity onPress={handlePreviousTrack}>
          <Image
            source={require("../assets/ic_skip_previous_white_36pt.png")}
          />
        </TouchableOpacity>
        <View style={{ width: 20 }} />

        {isPlaying ? (
          <TouchableOpacity onPress={onPlayPausePress}>
            <View style={styles.playButton}>
              <Image source={require("../assets/ic_pause_white_48pt.png")} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPlayPausePress}>
            <View style={styles.playButton}>
              <Image
                source={require("../assets/ic_play_arrow_white_48pt.png")}
              />
            </View>
          </TouchableOpacity>
        )}
        <View style={{ width: 20 }} />
        <TouchableOpacity onPress={handleNextTrack}>
          <Image
            // style={{ opacity: 0.3 }}
            source={require("../assets/ic_skip_next_white_36pt.png")}
          />
        </TouchableOpacity>
        <View style={{ width: 40 }} />
      </View>
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
  controlContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
  },
});
