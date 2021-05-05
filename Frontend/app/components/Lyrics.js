import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Lyric(props) {
  const [lyrics, setLyrics] = useState(props.lyrics);
  const [currentLine, setCurrentLine] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getData = () => {
    const uri = props.track.lyrics;

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
        setLyrics(myJson.fragments);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const currentTime = props.position;
    if (lyrics && lyrics.length > 0) {
      let current = lyrics.findIndex(
        (lyrics) => currentTime >= lyrics.begin && currentTime < lyrics.end
      );
      if (!currentLine) {
        setCurrentLine(0);
      }

      //fix last second error
      if (current === -1) {
        if (currentLine === 0) {
          setCurrentLine(0);
        } else {
          setCurrentLine(lyrics.length - 1);
        }
      } else {
        setCurrentLine(current);
      }
      console.log(current, currentLine, currentTime);
    }
  }, [props.position]);

  return (
    <View>
      {lyrics && lyrics.length > 0 ? (
        <Text>{lyrics[currentLine].lines}</Text>
      ) : (
        <Text>Fetching..</Text>
      )}
    </View>
  );
}
