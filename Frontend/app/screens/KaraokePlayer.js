import React from "react";
import Player from "../components/Player";
import { Text } from "react-native";

import songlyrics from "../components/SongLyrics";

export default function KaraokePlayer({ props, route }) {
  const tracks = [
    {
      id: 1,
      title: "Stressed Out",
      artist: "Twenty One Pilots",
      albumArtUrl:
        "https://diykaraoke.s3-us-west-1.amazonaws.com/-127wiki.jpeg",
      audioUrl:
        "https://diykaraoke.s3-us-west-1.amazonaws.com/Ariana+Grande+-+7+rings.mp3",
      lyrics: songlyrics.fragments,
    },
    {
      id: 2,
      title: "Love Yourself",
      artist: "Justin Bieber",
      albumArtUrl:
        "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
      audioUrl:
        "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
    },
    {
      id: 3,
      title: "Hotline Bling",
      artist: "Drake",
      albumArtUrl:
        "https://diykaraoke.s3-us-west-1.amazonaws.com/-127wiki.jpeg",
      audioUrl:
        "https://diykaraoke.s3-us-west-1.amazonaws.com/Ariana+Grande+-+7+rings.mp3",
    },
  ];

  const selectedTrackNumber = route.params.paramKey;
  return (
    <Player tracks={tracks} selectedTrackNumber={route.params.paramKey.key} />
  );
  // return <Text>{selectedTrackNumber}</Text>;
}
