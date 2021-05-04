import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Lyric(props) {
  const [lyrics, setLyrics] = useState(props.track.lyrics);
  const [currentLine, setCurrentLine] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //console.log(props);

  //   useEffect(() => {
  //     if(lyrics.length < 1){
  //         const url = `/lyrics/${song.title.split(" ").map(piece => piece.toLowerCase()).join("-")}.json`
  //         axios.get(url)
  //             .then(res => {
  //                 lyrics = res.data;
  //                 setState.lyrics(lyrics);
  //                 dispatch({type: actions.SET_LYRICS, payload: {id: songId, lyrics}})
  //             })
  //             .catch(err => {
  //                 setState.error(true)
  //             })
  //             .finally(() => {
  //                 setState.loading(false);
  //             })
  //     }else{
  //         setState.lyrics(lyrics);
  //     }

  //     setState.currentLine(0);
  // }, [props.track]);

  useEffect(() => {
    const currentTime = props.position;
    if (lyrics.length > 0) {
      let current = lyrics.findIndex(
        (lyrics) => currentTime >= lyrics.begin && currentTime < lyrics.end
      );

      //fix last second error
      if (current === -1) {
        setCurrentLine(lyrics.length - 1);
      } else {
        setCurrentLine(current);
      }
      console.log(current, currentLine, currentTime);
    }
  }, [props.position]);

  return (
    <View>
      {/* <Text>{currentLine}</Text> */}
      <Text>{lyrics[currentLine].lines} </Text>
    </View>
  );
}
