import React from "react";
import Player from "../components/Player";

export default function KaraokePlayer(props) {
  const TRACKS = [
    {
      title: "Stressed Out",
      artist: "Twenty One Pilots",
      albumArtUrl:
        "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
      audioUrl:
        "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
    },
    {
      title: "Love Yourself",
      artist: "Justin Bieber",
      albumArtUrl:
        "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
      audioUrl:
        "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
    },
    {
      title: "Hotline Bling",
      artist: "Drake",
      albumArtUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png",
      audioUrl:
        "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
    },
  ];
  return <Player tracks={TRACKS} selectedTrackNumber={1} />;
}
