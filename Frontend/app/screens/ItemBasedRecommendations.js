import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Logout from "../components/Logout";

import songAPI from "../api/songs";

function ItemBasedRecommendations(props) {
  //console.log(navigation, route);
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);

  useEffect(() => {
    //response
    //set tracks to the response.data
    //setfiltered tracks to response
    const fetchData = async () => {
      const result = await songAPI.getItemBasedSongs(props.route.params.songId);
      setTracks(result.data);
      setFilteredTracks(result.data);
    };
    fetchData();
  }, []);

  const updateSearch = (search) => {
    setSearch(search);
  };

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = tracks.filter(function (song) {
        const songData = song.title
          ? song.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return songData.indexOf(textData) > -1;
      });
      setFilteredTracks(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredTracks(tracks);
      setSearch(text);
    }
  };

  const onSongPress = async (key) => {
    const result = await songAPI.incrementFrequency(key);
    props.navigation.navigate("KaraokePlayer", {
      paramKey: { key },
      tracks: { tracks },
    });
  };

  const renderItem = ({ item, index }) => {
    const key = item.id;
    return (
      <TouchableOpacity onPress={() => onSongPress(key)}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.image}
            source={{
              uri: item.albumArt,
            }}
          />
          <View style={styles.cardText}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        style={styles.searchArea}
        placeholder="Type Here..."
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
      />

      <View>
        <FlatList
          data={filteredTracks}
          keyExtractor={(item, index) => {
            item.id;
          }}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignContent: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    height: 100,
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
  searchArea: {
    // paddingBottom: 20,
    //backgroundColor: "deeppink",
  },
  textHeader: {
    color: "deeppink",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 70,
    height: 70,
  },
  cardContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f9c2ff",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 2,
  },
  title: {
    marginLeft: 10,
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  artist: {
    color: "rgba(255, 255, 255, 0.72)",
    fontSize: 12,
    marginLeft: 10,
    paddingTop: 10,
  },
  cardText: {
    flexDirection: "column",
  },
});
export default ItemBasedRecommendations;
