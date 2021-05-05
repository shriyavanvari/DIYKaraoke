import React, { useEffect, useState } from "react";
import { Animated, View, Text, StyleSheet } from "react-native";

export default function Lyric(props) {
  const [lyrics, setLyrics] = useState(props.lyrics);
  const [currentLine, setCurrentLine] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lyricsArray, setLyricsArray] = useState([]);
  const animatedValues = [];

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
    if (props.lyrics) {
      setLyricsArray(props.lyrics[0].lines[0].trim().split(" "));
    }
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
        console.log("HERE");
        setCurrentLine(current);
      }
      console.log(current, currentLine, currentTime);
    }
  }, [props.position]);

  useEffect(() => {
    if (lyrics && lyrics.length > 0 && currentLine !== -1) {
      const lyricsArray = lyrics[currentLine].lines[0].trim().split(" ");
      setLyricsArray(lyricsArray);
    }
  }, [currentLine]);

  return (
    <View style={styles.textWrapper}>
      {lyrics && lyrics.length > 0 && lyricsArray && lyricsArray.length > 0 ? (
        lyricsArray.map((word, index) => (
          <Text key={index} style={styles.text}>
            {word}{" "}
          </Text>
        ))
      ) : (
        <Text style={styles.text}>....</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
