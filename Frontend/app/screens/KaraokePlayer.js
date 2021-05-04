import React from "react";
import Player from "../components/Player";
import { Text } from "react-native";

import songlyrics from "../components/SongLyrics";
import { useLinkProps } from "@react-navigation/native";

export default function KaraokePlayer(props) {
  return (
    <Player
      tracks={props.route.params.tracks.tracks}
      selectedTrackNumber={props.route.params.paramKey.key}
      navigation={props.navigation}
    />
  );
}
