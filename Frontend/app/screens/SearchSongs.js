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

function SearchSongs({ navigation }) {
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);

  useEffect(async () => {
    //response
    //set tracks to the response.data
    //setfiltered tracks to response
    const result = await songAPI.getPopularSongs();
    setTracks(result.data);
    setFilteredTracks(result.data);
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
    navigation.navigate("KaraokePlayer", {
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
        containerStyle={styles.searchAreaContainer}
        inputContainerStyle={styles.searchArea1}
        style={styles.searchArea}
        placeholder="Search Songs..."
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        color="black"
      />
      <Text style={styles.header}>Songs you may like</Text>
      <View>
        <FlatList
          data={filteredTracks}
          keyExtractor={(item, index) => {
            item.id.toString();
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
    backgroundColor: "#B19CD9",
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
  searchAreaContainer: {
    backgroundColor: "#B19CD9",
    borderBottomColor: "#B19CD9",
    marginBottom: 8,
  },
  searchArea: {
    // paddingBottom: 20,
    backgroundColor: "white",
  },
  searchArea1: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderBottomWidth: 1,
  },
  header: {
    color: "white",
    marginBottom: 15,
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
export default SearchSongs;
