import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Audio } from "expo-av";

import Header from "./Header";
import AlbumArt from "./AlbumArt";
import TrackDetails from "./TrackDetails";
import SeekBar from "./SeekBar";
import Lyrics from "./Lyrics";
import { useLinkProps } from "@react-navigation/native";

export default function Player(props) {
  const tracks = props.tracks;
  const [sound, setSound] = useState();
  const [playback, setPlayback] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [position, setPosition] = useState(0);
  const [currentTrackNumber, setCurrentTrackNumber] = useState(
    props.tracks.findIndex((track) => props.selectedTrackNumber == track.id)
  );
  const [lyrics, setLyrics] = useState([]);

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
  };
  const getData = () => {
    const uri = props.tracks[currentTrackNumber].lyrics;

    fetch(uri, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        return myJson.fragments;
      });
  };

  const playCurrentSong = async () => {
    console.log("Loading Sound");
    console.log(props);
    const { sound } = await Audio.Sound.createAsync(
      { uri: tracks[currentTrackNumber].file },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(sound);
    const ly = await getData();
    setLyrics(ly);
    await sound.playAsync();
  };

  // const playCurrentSong = async () => {
  //   //playing audio for first time
  //   if (!sound) {
  //     const playback = new Audio.Sound();
  //     const status = await playback.loadAsync(
  //       { uri: tracks[currentTrackNumber].audioUrl },
  //       { shouldPlay: true }
  //     );

  //     setPlayback(playback);
  //     setSound(status);
  //   } else {
  //     if (sound.isLoaded && sound.isPlaying) {
  //       console.log("Audio is already playing");
  //     }
  //   }
  // };

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.pauseAsync();
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
      <Header
        message="Playing from charts"
        songId={tracks[currentTrackNumber].id}
        navigation={props.navigation}
      />
      {/* <AlbumArt url={tracks[currentTrackNumber].albumArt} /> */}
      <View styles={styles.albumArtcontainer}>
        <Image
          style={styles.albumArtimage}
          source={{ uri: tracks[currentTrackNumber].albumArt }}
        ></Image>
      </View>
      <TrackDetails
        title={tracks[currentTrackNumber].title}
        artist={tracks[currentTrackNumber].artist}
      />
      {/* <Text onPress={playCurrentSong} style={styles.startKaraoke}>
        Start Karaoke!
      </Text> */}
      <TouchableOpacity onPress={playCurrentSong}>
        <Image
          source={require("../assets/karaoke_icon.png")}
          style={styles.startKaraoke}
        />
      </TouchableOpacity>
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
      <Lyrics
        track={props.tracks[currentTrackNumber]}
        position={position / 1000}
      />
    </View>
  );
}
const { width, height } = Dimensions.get("window");
const imageSize = width - 48;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B19CD9",
  },
  startKaraoke: {
    height: 80,
    width: 80,
    borderRadius: 47,
    marginBottom: 10,
    marginTop: 10,
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
  albumArtcontainer: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  albumArtimage: {
    width: imageSize,
    height: imageSize,
  },
});
